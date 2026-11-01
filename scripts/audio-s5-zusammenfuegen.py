#!/usr/bin/env python3
"""Hörbeispiele S5 (Kap. 2.3.1) zusammenfügen und Zeitmarken in den Player schreiben.

Was das Skript tut (in Alltagssprache): Es nimmt die einzelnen Sprachaufnahmen (eine Datei je Zeile
des Drehbuchs), schneidet Stille am Anfang und Ende ab, gleicht die Lautstärke an, setzt die im
Manifest festgelegten Pausen dazwischen und fügt alles zu einer mp3-Datei je Hörbeispiel zusammen.
Weil es jede Teildatei selbst aneinanderhängt, kennt es jede Satzgrenze genau und schreibt diese
Zeitmarken in interactions/audio-beispiele-kap02.html. Dort hebt der Player damit den gerade
gesprochenen Satz im Transkript hervor.

Aufruf (im Repo-Hauptordner):
  python3 scripts/audio-s5-zusammenfuegen.py               # echte Aufnahmen aus _src/audio/kap02-s5/roh/
  python3 scripts/audio-s5-zusammenfuegen.py --platzhalter # Testton statt Aufnahmen (zum Prüfen des Players)
Benötigt ffmpeg/ffprobe mit libmp3lame.
"""
import argparse, json, re, subprocess, sys, tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "_src/audio/kap02-s5"
HTML = REPO / "interactions/audio-beispiele-kap02.html"
RATE = 44100


def ff(*args):
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *args], check=True)


def dauer(pfad):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration",
                          "-of", "default=nw=1:nk=1", str(pfad)], capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


def woerter(s):
    """Gesprochene Wörter ohne Tags und Satzzeichen, für den Abgleich tts ↔ Transkript."""
    s = re.sub(r"\[[^\]]*\]", " ", s).lower()
    s = s.replace("’", "'")
    return re.findall(r"[a-zäöüß']+", s)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--platzhalter", action="store_true", help="Testton statt echter Aufnahmen")
    args = ap.parse_args()

    manifest = json.loads((SRC / "manifest.json").read_text(encoding="utf-8"))
    daten = []
    fehler = []
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for b in manifest["beispiele"]:
            teile, t, zeilen = [], 0.0, []
            for i, z in enumerate(b["zeilen"]):
                if woerter(z["tts"]) != woerter(z["text"]):
                    fehler.append(f"{z['datei']}: Transkript weicht vom Eingabetext ab")
                stille = tmp / f"{b['id']}-{i:02d}-pause.wav"
                ff("-f", "lavfi", "-i", f"anullsrc=r={RATE}:cl=mono", "-t", f"{z['pause']:.3f}", str(stille))
                teil = tmp / f"{b['id']}-{i:02d}.wav"
                if args.platzhalter:
                    # Länge grob nach Wortzahl (ca. 2,4 Wörter je Sekunde), kurzer leiser Ton am Anfang
                    sek = max(1.2, len(woerter(z["text"])) / 2.4)
                    ff("-f", "lavfi", "-i", f"sine=frequency=660:sample_rate={RATE}:duration=0.12",
                       "-f", "lavfi", "-i", f"anullsrc=r={RATE}:cl=mono",
                       "-filter_complex", f"[0]volume=0.08[a];[a][1]concat=n=2:v=0:a=1,atrim=0:{sek:.3f}",
                       "-ac", "1", str(teil))
                else:
                    roh = SRC / "roh" / z["datei"]
                    if not roh.exists():
                        sys.exit(f"Fehlt: {roh}")
                    # Stille vorn/hinten kappen (Rest 50 ms), Lautheit auf -18 LUFS angleichen
                    rand = "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05"
                    ff("-i", str(roh), "-af",
                       f"{rand},areverse,{rand},areverse,loudnorm=I=-18:TP=-2:LRA=11",
                       "-ar", str(RATE), "-ac", "1", str(teil))
                d = dauer(teil)
                start = t + z["pause"]
                t = start + d
                teile += [stille, teil]
                eintrag = {k: z[k] for k in ("sprecher", "text", "deutsch", "etikett") if k in z}
                eintrag.update(start=round(start, 2), ende=round(t, 2))
                zeilen.append(eintrag)
            # Ausklang 0,5 s
            ausklang = tmp / f"{b['id']}-ende.wav"
            ff("-f", "lavfi", "-i", f"anullsrc=r={RATE}:cl=mono", "-t", "0.5", str(ausklang))
            teile.append(ausklang)
            liste = tmp / f"{b['id']}.txt"
            liste.write_text("".join(f"file '{p}'\n" for p in teile))
            ziel = REPO / b["ausgabe"]
            ziel.parent.mkdir(parents=True, exist_ok=True)
            ff("-f", "concat", "-safe", "0", "-i", str(liste), "-c:a", "libmp3lame", "-b:a", "128k",
               "-ac", "1", "-id3v2_version", "3",
               "-metadata", f"title={b['titel']}", "-metadata", f"comment={b['kennzeichnung']}",
               str(ziel))
            gesamt = dauer(ziel)
            daten.append({
                "id": b["id"], "titel": b["titel"], "kennzeichnung": b["kennzeichnung"],
                "link": b.get("link"), "sprecher": b["sprecher"],
                "src": str(Path(b["ausgabe"]).relative_to("interactions")),
                "dauer": round(gesamt, 2), "platzhalter": args.platzhalter, "zeilen": zeilen,
            })
            print(f"{b['id']}: {len(zeilen)} Zeilen, {gesamt:.1f} s -> {b['ausgabe']}")

    if fehler:
        print("\n".join(fehler))
        sys.exit("Abbruch: Transkript und Eingabetext stimmen nicht überein.")

    html = HTML.read_text(encoding="utf-8")
    block = json.dumps(daten, ensure_ascii=False, indent=1)
    neu, n = re.subn(r'(<script type="application/json" id="hoerdaten">)(.*?)(</script>)',
                     lambda m: m.group(1) + "\n" + block + "\n" + m.group(3), html, flags=re.S)
    if n != 1:
        sys.exit("Datenblock id=hoerdaten im Player nicht gefunden.")
    HTML.write_text(neu, encoding="utf-8")
    print(f"Zeitmarken geschrieben: {HTML.relative_to(REPO)}")


if __name__ == "__main__":
    main()
