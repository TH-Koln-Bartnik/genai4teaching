#!/usr/bin/env python3
"""Wortzeiten aus den Tonaufnahmen messen (faster-whisper) und neben die Takes legen.

In Alltagssprache: Eine Spracherkennung hört jede Szene ab und notiert, wann welches Wort fällt.
Ohne diese Liste schätzt die Pipeline den Zeitpunkt eines Wortes aus seiner Stelle im Text
(Wort in der Mitte des Textes = Mitte der Aufnahme). Bei einer lebhaften Stimme mit Pausen liegt
diese Schätzung bis zu 1,5 s daneben; dann leuchtet ein Wort im Bild auf, bevor es gesprochen wird,
und der Untertitel läuft hinterher. Mit der Liste folgen Bild und Untertitel der echten Stimme.

Zugleich prüft das Skript den Wortlaut: Es vergleicht das Erkannte mit dem Sprechtext im Manifest
und listet Abweichungen (Zahlen als Ziffern, Zusammenschreibungen und gleich klingende Wörter sind
meist Erkennungsfehler, keine Sprechfehler).

Aufruf (im Repo-Hauptordner):
  python3 scripts/genrefilm/wortzeiten.py --film kap02-token-genres --audio _src/videos/s5-token-genres/audio
Ergebnis: <audio>/wortzeiten.json  {datei: {dauer, anker: [[zeichenposition, sekunden], …], erkannt, abweichungen}}
Benötigt: pip install faster-whisper (Modell „small“, CPU, int8), ffmpeg.
"""
import argparse, difflib, json, re, subprocess
from pathlib import Path

import numpy as np

REPO = Path(__file__).resolve().parents[2]
ENDUNGEN = ("mp3", "wav", "m4a", "ogg")


def finde_film(film):
    for m in (REPO / "_src/videos").glob("*/manifest.json"):
        if json.loads(m.read_text(encoding="utf-8")).get("film") == film:
            return m.parent
    raise SystemExit(f"Film {film} nicht gefunden")


def norm(w):
    return re.sub(r"[^\wäöü]", "", w.lower().replace("ß", "ss"))


def lade(datei):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", str(datei), "-f", "s16le", "-ac", "1", "-ar", "16000", "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(np.float32) / 32768


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--film", required=True)
    ap.add_argument("--audio", required=True)
    ap.add_argument("--modell", default="small")
    a = ap.parse_args()
    from faster_whisper import WhisperModel

    src = finde_film(a.film)
    manifest = json.loads((src / "manifest.json").read_text(encoding="utf-8"))
    ordner = REPO / a.audio
    modell = WhisperModel(a.modell, device="cpu", compute_type="int8")
    aus = {"_hinweis": "erzeugt von scripts/genrefilm/wortzeiten.py; anker = [Zeichenposition im Sprechtext, Sekunden ab Tonbeginn]",
           "_modell": f"faster-whisper {a.modell}"}
    for s in manifest["szenen"]:
        datei = next((ordner / f"{s['datei']}.{e}" for e in ENDUNGEN if (ordner / f"{s['datei']}.{e}").exists()), None)
        if not datei:
            raise SystemExit(f"Audio fehlt: {s['datei']}")
        ton = lade(datei)
        dauer = len(ton) / 16000
        segs, _ = modell.transcribe(ton, language="de", beam_size=5, word_timestamps=True)
        erkannt = [(norm(w.word), round(w.start, 3), w.word.strip()) for sg in segs for w in sg.words]
        text = s["sprechtext"]
        soll = [(norm(m.group()), m.start()) for m in re.finditer(r"\S+", text)]
        sm = difflib.SequenceMatcher(a=[x[0] for x in soll], b=[x[0] for x in erkannt], autojunk=False)
        anker, letzte = [], -1.0
        for b in sm.get_matching_blocks():
            for k in range(b.size):
                t = erkannt[b.b + k][1]
                if t > letzte:  # nur streng steigende Zeitpunkte
                    anker.append([soll[b.a + k][1], t]); letzte = t
        abw = [{"art": op, "soll": " ".join(x[0] for x in soll[i1:i2]), "erkannt": " ".join(x[2] for x in erkannt[j1:j2])}
               for op, i1, i2, j1, j2 in sm.get_opcodes() if op != "equal"]
        aus[s["datei"]] = {"dauer": round(dauer, 3), "anker": anker, "abdeckung": f"{len(anker)}/{len(soll)}",
                           "uebereinstimmung": round(sm.ratio(), 3), "erkannt": " ".join(x[2] for x in erkannt),
                           "abweichungen": abw}
        print(f"{s['datei']}: {len(anker)}/{len(soll)} Wörter verankert, Übereinstimmung {sm.ratio():.3f}")
        for d in abw:
            print(f"    {d['art']}: „{d['soll']}“ → „{d['erkannt']}“")
    (ordner / "wortzeiten.json").write_text(json.dumps(aus, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    print(f"→ {(ordner / 'wortzeiten.json').relative_to(REPO)}")


if __name__ == "__main__":
    main()
