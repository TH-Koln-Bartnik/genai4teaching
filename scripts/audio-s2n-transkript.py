#!/usr/bin/env python3
"""S2-N: Hörstück aus Gemini Notebook mit faster-whisper transkribieren.

In Alltagssprache: Spracherkennung macht aus der Tonspur Text mit Zeitangabe je Wort; erst damit
kann der Player den gesprochenen Satz mitlaufend hervorheben und der Prüfer Aussagen nachlesen.

Aufruf:
  python3 -I scripts/audio-s2n-transkript.py <audio.wav> <ausgabe.json> [--modell large-v3]
         [--start S --ende S]   (ein Zeitfenster erkennen: Abschnittslauf oder Zweifelsfall)
  python3 -I scripts/audio-s2n-transkript.py --zusammen <ordner> <ausgabe.json>
Im Container (2 Kerne, 8 GB) wurde in elf Abschnitten zu 50-100 s erkannt, geschnitten in
Sprechpausen (ffmpeg silencedetect -35 dB, 0,3 s).

Ausgabe: JSON mit Modell, Rechenzeit, Segmenten (start, ende, text, worte[start, ende, wort, p]).
Das Roh-JSON nie ganz in den Kontext laden; die Kurzprüfung am Ende genügt.
"""
import argparse, json, resource, time, sys
from pathlib import Path

if len(sys.argv) == 4 and sys.argv[1] == "--zusammen":
    teile = [json.loads(p.read_text(encoding="utf-8")) for p in sorted(Path(sys.argv[2]).glob("[0-9][0-9].json"))]
    res = {k: teile[0][k] for k in ("modell", "compute_type", "sprache")}
    res["rechenzeit_s"] = round(sum(t["rechenzeit_s"] for t in teile), 1)
    res["dauer_audio_s"] = round(sum(t["dauer_audio_s"] for t in teile), 1)
    res["abschnitte"] = len(teile)
    res["segmente"] = [s for t in teile for s in t["segmente"]]
    json.dump(res, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"{len(teile)} Abschnitte, {len(res['segmente'])} Segmente, "
          f"{sum(len(s['worte']) for s in res['segmente'])} Wörter, Rechenzeit {res['rechenzeit_s']} s")
    sys.exit(0)

ap = argparse.ArgumentParser()
ap.add_argument("audio")
ap.add_argument("ausgabe")
ap.add_argument("--modell", default="large-v3")
ap.add_argument("--start", type=float)
ap.add_argument("--ende", type=float)
ap.add_argument("--threads", type=int, default=0)
ap.add_argument("--fenster", help="mehrere Zeitfenster neu erkennen: '76-90,401-410' (Zweifelsfälle)")
a = ap.parse_args()

from faster_whisper import WhisperModel
import soundfile as sf, numpy as np

t0 = time.time()
m = WhisperModel(a.modell, device="cpu", compute_type="int8", cpu_threads=a.threads)
audio, sr = sf.read(a.audio, dtype="float32")  # 16 kHz mono WAV (ffmpeg -ac 1 -ar 16000)
assert sr == 16000 and audio.ndim == 1, "Erwartet 16 kHz mono WAV"
if a.fenster:
    erg = []
    for f in a.fenster.split(","):
        s0, s1 = map(float, f.split("-"))
        stueck = audio[int(s0 * 16000): int(s1 * 16000)]
        segs, _ = m.transcribe(stueck, language="de", word_timestamps=True, beam_size=5,
                               condition_on_previous_text=False)
        erg.append({"fenster": [s0, s1], "text": " ".join(x.text.strip() for x in segs)})
        print(f"[{s0:.0f}-{s1:.0f}] {erg[-1]['text']}")
    json.dump(erg, open(a.ausgabe, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    sys.exit(0)
versatz = 0.0
if a.start is not None:
    versatz = a.start
    audio = audio[int(a.start * 16000): int((a.ende or len(audio) / 16000) * 16000)]

segs, info = m.transcribe(audio, language="de", word_timestamps=True, beam_size=5,
                          vad_filter=False, condition_on_previous_text=True)
out = []
for s in segs:
    out.append({
        "start": round(s.start + versatz, 2), "ende": round(s.end + versatz, 2),
        "text": s.text.strip(),
        "worte": [[round(w.start + versatz, 2), round(w.end + versatz, 2), w.word, round(w.probability, 3)]
                  for w in (s.words or [])],
    })
    print(f"{s.end + versatz:7.1f}s", file=sys.stderr, flush=True)

res = {"modell": a.modell, "compute_type": "int8", "sprache": "de",
       "rechenzeit_s": round(time.time() - t0, 1), "dauer_audio_s": round(len(audio) / 16000, 1),
       "segmente": out}
json.dump(res, open(a.ausgabe, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
w = sum(len(s["worte"]) for s in out)
print(f"Modell {a.modell}: {len(out)} Segmente, {w} Wörter, Rechenzeit {res['rechenzeit_s']} s "
      f"für {res['dauer_audio_s']} s Audio, Spitze RAM "
      f"{resource.getrusage(resource.RUSAGE_SELF).ru_maxrss / 1e6:.1f} GB")

# Zusammenführen (nach Abschnittsläufen, weil ein Gesamtlauf im Container 6,3 GB RAM brauchte
# und abbrach): python3 -I scripts/audio-s2n-transkript.py --zusammen <ordner> <ausgabe.json>
