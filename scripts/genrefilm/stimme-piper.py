#!/usr/bin/env python3
"""Platzhalterstimme für Genrefilme: spricht den Sprechtext jeder Szene mit Piper (offline, CC0-Stimmen).

In Alltagssprache: Solange die echten Aufnahmen (ElevenLabs) fehlen, liest eine einfache Computerstimme den Text
jeder Szene vor. Der Film wird damit schon in voller Länge gebaut und geprüft; später ersetzt man nur die Tondateien.

Aufruf (Repo-Hauptordner):
  python3 scripts/genrefilm/stimme-piper.py --film kap02-token-genres [--stimme de_DE-thorsten-high] [--modelle ~/piper-voices]
Ausgabe: <Filmordner>/audio-platzhalter/<datei>.wav (nicht committen, siehe .gitignore)
Stimmen laden: https://huggingface.co/rhasspy/piper-voices (de/de_DE/thorsten/high, de/de_DE/kerstin/low)
"""
import argparse, json, wave
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]


def finde_film(film):
    for m in (REPO / "_src/videos").glob("*/manifest.json"):
        if json.loads(m.read_text(encoding="utf-8")).get("film") == film:
            return m.parent
    raise SystemExit(f"Kein Manifest mit film={film}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--film", required=True)
    ap.add_argument("--stimme", default="de_DE-thorsten-high")
    ap.add_argument("--modelle", default=str(Path.home() / "piper-voices"))
    ap.add_argument("--tempo", type=float, default=1.0, help="length_scale: >1 langsamer")
    a = ap.parse_args()
    from piper import PiperVoice, SynthesisConfig
    src = finde_film(a.film)
    m = json.loads((src / "manifest.json").read_text(encoding="utf-8"))
    voice = PiperVoice.load(str(Path(a.modelle) / f"{a.stimme}.onnx"))
    ziel = src / "audio-platzhalter"
    ziel.mkdir(exist_ok=True)
    cfg = SynthesisConfig(length_scale=a.tempo)
    for s in m["szenen"]:
        out = ziel / f"{s['datei']}.wav"
        with wave.open(str(out), "wb") as w:
            voice.synthesize_wav(s["sprechtext"], w, syn_config=cfg)
        with wave.open(str(out)) as w:
            print(f"{out.name}: {w.getnframes() / w.getframerate():.1f} s")


if __name__ == "__main__":
    main()
