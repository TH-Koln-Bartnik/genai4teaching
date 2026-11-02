#!/usr/bin/env python3
"""S2-N: Sprecher trennen und Manifest bauen (ohne Login-Modell).

In Alltagssprache: Gemini Notebook liefert nur eine Tonspur mit zwei Stimmen, ohne Angabe,
wer wann spricht. Das Skript misst für jedes erkannte Wort die mittlere Tonhöhe
(Grundfrequenz, librosa pyin) und teilt die Wörter mit k-Means in zwei Gruppen. Daraus
entstehen Redebeiträge „Stimme 1“ / „Stimme 2“. Zweifelsfälle (sehr kurze Beiträge,
unklare Tonhöhe) stehen in einer Liste zum Nachhören.

Aufruf (im Repo-Hauptordner):
  python3 -I scripts/audio-s2n-sprecher.py <audio-16k.wav> <zuordnung-nr-id.csv>
Liest:   _src/audio/s2n-notebook/transkript-roh.json  (faster-whisper, Wortzeiten)
         _src/audio/s2n-notebook/themen.json           (optional: Themenwechsel nach Zeit)
         _src/audio/s2n-notebook/erkennung-korrekturen.json (optional: nur Erkennungsfehler)
Schreibt: _src/audio/s2n-notebook/f0-woerter.json (Zwischenstand, nicht committet)
          _src/audio/s2n-notebook/manifest.json, transkript.md
"""
import json, re, sys
from pathlib import Path

import numpy as np

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "_src/audio/s2n-notebook"
ZAHLWORT = {"null": 0, "eins": 1, "ein": 1, "eine": 1, "zwei": 2, "drei": 3, "vier": 4, "fünf": 5,
            "sechs": 6, "sieben": 7, "acht": 8, "neun": 9, "zehn": 10, "elf": 11, "zwölf": 12}


def f0_je_wort(wav, worte):
    cache = SRC / "lokal/f0-woerter.json"
    if cache.exists():
        d = json.loads(cache.read_text())
        if len(d) == len(worte):
            return np.array([np.nan if v is None else v for v in d])
    import librosa
    y, sr = librosa.load(wav, sr=16000, mono=True)
    hop = 256
    f0, vflag, _ = librosa.pyin(y, fmin=60, fmax=420, sr=sr, frame_length=1024, hop_length=hop)
    t = librosa.times_like(f0, sr=sr, hop_length=hop)
    werte = []
    for w in worte:
        sel = (t >= w[0]) & (t <= w[1]) & vflag & ~np.isnan(f0)
        werte.append(float(np.median(f0[sel])) if sel.sum() >= 3 else None)
    cache.parent.mkdir(parents=True, exist_ok=True)
    cache.write_text(json.dumps(werte))
    return np.array([np.nan if v is None else v for v in werte])


def zwei_gruppen(logf0):
    from sklearn.cluster import KMeans
    ok = ~np.isnan(logf0)
    km = KMeans(n_clusters=2, n_init=10, random_state=0).fit(logf0[ok].reshape(-1, 1))
    zentren = km.cluster_centers_.ravel()
    lab = np.full(len(logf0), -1)
    lab[ok] = km.labels_
    # Stimme 1 = die Stimme, die zuerst spricht
    erste = lab[ok][0]
    lab = np.where(lab == -1, -1, np.where(lab == erste, 0, 1))
    z = zentren if erste == 0 else zentren[::-1]
    # Abstand zur Trennlinie als Sicherheit
    grenze = zentren.mean()
    sicher = np.abs(logf0 - grenze) / (abs(zentren[0] - zentren[1]) / 2)
    return lab, np.exp(z), sicher


def glaetten(lab, fenster=5):
    """Fehlende Werte füllen, dann Mehrheitsentscheid im gleitenden Fenster."""
    lab = lab.copy()
    for i in range(len(lab)):
        if lab[i] == -1:
            lab[i] = lab[i - 1] if i else next((x for x in lab if x != -1), 0)
    h = fenster // 2
    out = lab.copy()
    for i in range(len(lab)):
        w = lab[max(0, i - h): i + h + 1]
        out[i] = 1 if w.sum() * 2 > len(w) else 0
    return out


def an_satzgrenze(worte, lab, max_versatz=3):
    """Sprecherwechsel auf eine nahe Satzgrenze (Wort endet auf . ? !) verschieben."""
    lab = lab.copy()
    i = 1
    while i < len(lab):
        if lab[i] != lab[i - 1]:
            if not re.search(r"[.?!…]$", worte[i - 1][2].strip()):
                for d in range(1, max_versatz + 1):
                    for j in (i - d, i + d):
                        if 1 <= j < len(lab) and re.search(r"[.?!…]$", worte[j - 1][2].strip()):
                            neu = lab[i]
                            if j < i:
                                lab[j:i] = neu
                            else:
                                lab[i:j] = lab[i - 1]
                            i = max(i, j)
                            break
                    else:
                        continue
                    break
        i += 1
    return lab


def kurze_saetze(worte, lab, logf0, sicher, max_woerter=4):
    """Kurze Sätze (Einwürfe wie „Genau.“, „Absolut, ja.“) einzeln nach ihrer Tonhöhe zuordnen;
    die Glättung im Fünf-Wort-Fenster würde sie sonst der umgebenden Stimme zuschlagen."""
    lab = lab.copy()
    grenze = None
    satz = []
    def pruefe(satz):
        if not satz or len(satz) > max_woerter:
            return
        st = [i for i in satz if not np.isnan(logf0[i])]
        if len(st) < 1 or np.nanmedian(sicher[st]) < 0.6:
            return
        werte = [lab_roh[i] for i in st]
        neu = 1 if sum(werte) * 2 > len(werte) else 0
        if sum(1 for v in werte if v == neu) * 2 > len(werte):
            for i in satz:
                lab[i] = neu
    for i, w in enumerate(worte):
        satz.append(i)
        if re.search(r"[.?!…]$", w[2].strip()):
            pruefe(satz)
            satz = []
    pruefe(satz)
    return lab


lab_roh = None


def nummern(text, zuordnung):
    """Gesprochene Interview-Nummern finden ('Interview 42', 'Interview zweiundvierzig')."""
    treffer = []
    for m in re.finditer(r"Interview(?:s)?\s+(?:Nummer\s+|Nr\.\s*)?(\d{1,3})(?:\s*(?:und|,)\s*(\d{1,3}))*", text):
        for g in re.findall(r"\d{1,3}", m.group(0)):
            n = int(g)
            treffer.append({"nr": f"{n:03d}", "transcript_id": zuordnung.get(f"{n:03d}")})
    return treffer


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    wav, zuord_csv = sys.argv[1], sys.argv[2]
    roh = json.loads((SRC / "transkript-roh.json").read_text(encoding="utf-8"))
    zuordnung = {}
    for zeile in Path(zuord_csv).read_text(encoding="utf-8").splitlines()[1:]:
        nr, tid = zeile.split(",")[:2]
        zuordnung[nr] = tid

    korr = {}
    kp = SRC / "erkennung-korrekturen.json"
    if kp.exists():
        korr = json.loads(kp.read_text(encoding="utf-8"))

    worte = [w for s in roh["segmente"] for w in s["worte"]]
    f0 = f0_je_wort(wav, worte)
    logf0 = np.log(f0)
    lab0, zentren, sicher = zwei_gruppen(logf0)
    global lab_roh
    lab_roh = lab0
    lab = kurze_saetze(worte, an_satzgrenze(worte, glaetten(lab0)), logf0, sicher)

    # Redebeiträge bilden
    zeilen, cur = [], None
    for i, w in enumerate(worte):
        if cur is None or lab[i] != cur["lab"]:
            cur = {"lab": int(lab[i]), "idx": [], "start": w[0], "ende": w[1]}
            zeilen.append(cur)
        cur["idx"].append(i)
        cur["ende"] = w[1]

    themen = []
    tp = SRC / "themen.json"
    if tp.exists():
        themen = json.loads(tp.read_text(encoding="utf-8"))

    def thema_bei(t):
        aktuell = themen[0]["id"] if themen else "t1"
        for th in themen:
            if t + 0.05 >= th["start_ca"]:
                aktuell = th["id"]
        return aktuell

    zweifel = []
    out = []
    for k, z in enumerate(zeilen, 1):
        text = "".join(worte[i][2] for i in z["idx"]).strip()
        roh_text = text
        for alt, neu in korr.get("ersetzungen", {}).items():
            text = text.replace(alt, neu)
        dauer = z["ende"] - z["start"]
        sich = float(np.nanmedian(sicher[z["idx"]])) if np.any(~np.isnan(sicher[z["idx"]])) else 0.0
        e = {"nr": k, "sprecher": "s1" if z["lab"] == 0 else "s2", "text": text,
             "start": round(z["start"], 2), "ende": round(z["ende"], 2), "thema": thema_bei(z["start"]),
             "quelle_genannt": nummern(text, zuordnung), "sicherheit_stimme": round(sich, 2)}
        if text != roh_text:
            e["erkannt"] = roh_text
        out.append(e)
        if dauer < 1.0 or sich < 0.5:
            zweifel.append({"nr": k, "start": e["start"], "ende": e["ende"], "dauer": round(dauer, 2),
                            "sicherheit": e["sicherheit_stimme"], "text": text[:80]})

    # unsichere Wörter (Zahlen, Nummern, niedrige Wahrscheinlichkeit) für die Erkennungsprüfung
    unsicher = []
    for w in worte:
        wort = w[2].strip()
        if w[3] < 0.5 or re.search(r"\d", wort) or wort.lower().strip(".,?!") in ZAHLWORT:
            unsicher.append([w[0], wort, w[3]])

    m = {
        "titel": "Was Forschende über KI sagen (Gemini Notebook)",
        "quelle_audio": "Gemini Notebook, Audio-Überblick, 02.11.2026 (erster Lauf)",
        "dauer": roh["dauer_audio_s"],
        "whisper": {k: roh[k] for k in ("modell", "compute_type", "sprache", "rechenzeit_s", "dauer_audio_s")},
        "stimmen": {"s1": {"name": "Stimme 1", "f0_hz": round(float(zentren[0]), 1)},
                    "s2": {"name": "Stimme 2", "f0_hz": round(float(zentren[1]), 1)}},
        "themen": [{"id": t["id"], "titel": t["titel"]} for t in themen] or [{"id": "t1", "titel": "Gespräch"}],
        "zeilen": out,
        "zweifel_sprecher": sorted(zweifel, key=lambda x: x["sicherheit"])[:5],
        "zweifel_gesamt": len(zweifel),
        "unsichere_woerter": unsicher,
    }
    (SRC / "manifest.json").write_text(json.dumps(m, ensure_ascii=False, indent=1), encoding="utf-8")

    def mmss(t):
        return f"{int(t // 60)}:{int(t % 60):02d}"
    md = ["# Transkript: Hörstück aus Gemini Notebook (S2-N)", "",
          f"Spracherkennung: faster-whisper {roh['modell']} (int8, Deutsch); Sprecher per Tonhöhe getrennt "
          f"(Stimme 1 ≈ {zentren[0]:.0f} Hz, Stimme 2 ≈ {zentren[1]:.0f} Hz). "
          "Nur Erkennungsfehler korrigiert, nie Inhalte.", ""]
    th_alt = None
    for e in out:
        if themen and e["thema"] != th_alt:
            th_alt = e["thema"]
            md += [f"## {next(t['titel'] for t in themen if t['id'] == th_alt)}", ""]
        name = "Stimme 1" if e["sprecher"] == "s1" else "Stimme 2"
        md += [f"[{mmss(e['start'])}] (Z{e['nr']}) **{name}:** {e['text']}", ""]
    (SRC / "transkript.md").write_text("\n".join(md), encoding="utf-8")

    n_q = sum(1 for e in out if e["quelle_genannt"])
    print(f"Wörter {len(worte)}, ohne Tonhöhe {int(np.isnan(f0).sum())}; Stimmen {zentren.round(1)} Hz")
    print(f"Redebeiträge {len(out)} (s1 {sum(e['sprecher']=='s1' for e in out)}, s2 {sum(e['sprecher']=='s2' for e in out)})")
    print(f"Beiträge mit genannter Interview-Nummer: {n_q}; Nummern gesamt "
          f"{sum(len(e['quelle_genannt']) for e in out)}")
    print(f"Zweifelsfälle Sprecher: {len(zweifel)} (gelistet {min(5, len(zweifel))}); unsichere Wörter: {len(unsicher)}")


if __name__ == "__main__":
    main()
