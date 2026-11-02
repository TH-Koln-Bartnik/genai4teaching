#!/usr/bin/env python3
"""Druckabbildung eines Genrefilms: 3 × 3 Standbilder mit Genre-Namen und QR-Code zur Filmstelle im Buch.

In Alltagssprache: Das gedruckte Buch kann keinen Film zeigen. Stattdessen stehen die neun Szenen als kleine
Standbilder nebeneinander; der QR-Code führt Lesende mit dem Handy direkt zum Film auf der Kapitelseite.
Muster wie scripts/qr-kapitel04-videos.py (ganzzahlige Modulgröße, Lesetest farbig und in Graustufen).

Aufruf (Repo-Hauptordner, nach dem Build):
  python3 scripts/genrefilm/druckraster.py --film kap02-token-genres --name token-genres
Eingabe:  _src/videos/<film>/build/standbilder/*.png, manifest.json, build/zeitplan.json
Ausgabe:  images/druck/video-<name>.png, images/qr/qr-video-<name>.png
"""
import argparse, json
from pathlib import Path
import cv2, qrcode
from PIL import Image, ImageDraw, ImageFont

REPO = Path(__file__).resolve().parents[2]
BASIS = "https://th-koln-bartnik.github.io/genai4teaching/"
FONT = "/usr/share/fonts/opentype/inter/"


def finde_film(film):
    for m in (REPO / "_src/videos").glob("*/manifest.json"):
        d = json.loads(m.read_text(encoding="utf-8"))
        if d.get("film") == film:
            return m.parent, d
    raise SystemExit(f"Kein Manifest mit film={film}")


def qr_bild(url, ziel):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=1, border=2)
    q.add_data(url); q.make(fit=True)
    m = q.make_image(fill_color="black", back_color="white").convert("1")
    k = ziel // m.size[0]
    return m.resize((m.size[0] * k, m.size[1] * k), Image.NEAREST)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--film", required=True)
    ap.add_argument("--name", required=True, help="Kurzname für Dateien, z. B. token-genres")
    a = ap.parse_args()
    src, m = finde_film(a.film)
    zp = json.loads((src / "build/zeitplan.json").read_text(encoding="utf-8"))
    dauer = zp[-1]["start"] + zp[-1]["dauer"]
    bilder = sorted((src / "build/standbilder").glob("*.png"))
    assert len(bilder) == len(m["szenen"]) == 9, "neun Standbilder erwartet"
    url = BASIS + m["kapitelseite"]

    fett, normal = ImageFont.truetype(FONT + "Inter-Bold.otf", 30), ImageFont.truetype(FONT + "Inter-Regular.otf", 28)
    W, H, LUECKE, UNTER = 640, 360, 24, 52
    raster_b = 3 * W + 2 * LUECKE
    raster_h = 3 * (H + UNTER) + 2 * LUECKE
    c = Image.new("RGB", (raster_b + 60 + 420, raster_h), "white")
    d = ImageDraw.Draw(c)
    for i, (p, s) in enumerate(zip(bilder, m["szenen"])):
        x, y = (i % 3) * (W + LUECKE), (i // 3) * (H + UNTER + LUECKE)
        bild = Image.open(p).convert("RGB").resize((W, H), Image.LANCZOS)
        c.paste(bild, (x, y))
        d.rectangle([x, y, x + W - 1, y + H - 1], outline=(170, 170, 175), width=2)
        d.text((x, y + H + 10), f"{i + 1}  {s['genre']}", font=fett, fill=(29, 29, 31))
    xq = raster_b + 60
    d.line([(raster_b + 30, 0), (raster_b + 30, raster_h)], fill=(200, 200, 205), width=3)
    q = qr_bild(url, 400).convert("RGB")
    yq = (raster_h - 400) // 2
    c.paste(q, (xq + (400 - q.size[0]) // 2, yq + (400 - q.size[1]) // 2))
    d.text((xq, yq - 60), "Film online", font=fett, fill=(29, 29, 31))
    minuten, sek = divmod(round(dauer), 60)
    d.text((xq, yq + 420), f"Laufzeit {minuten}:{sek:02d} min", font=normal, fill=(90, 90, 96))
    d.text((xq, yq + 460), "mit Haltepunkten", font=normal, fill=(90, 90, 96))
    ziel = REPO / f"images/druck/video-{a.name}.png"
    c.save(ziel, dpi=(300, 300))
    e = qr_bild(url, 500); flaeche = Image.new("1", (540, 540), 1)
    flaeche.paste(e, ((540 - e.size[0]) // 2, (540 - e.size[1]) // 2))
    qr_datei = REPO / f"images/qr/qr-video-{a.name}.png"
    flaeche.save(qr_datei)
    grau = c.convert("L"); grau.save(src / "build" / f"druck-graustufen-{a.name}.png")
    det = cv2.QRCodeDetector()
    for f in (ziel, qr_datei):
        bunt = det.detectAndDecode(cv2.imread(str(f)))[0]
        g = det.detectAndDecode(cv2.cvtColor(cv2.imread(str(f), 0), cv2.COLOR_GRAY2BGR))[0]
        print("OK " if bunt == url == g else "FEHLER", f.relative_to(REPO), bunt)
    print(f"{ziel.relative_to(REPO)}: {c.size[0]}×{c.size[1]} px, Laufzeit {minuten}:{sek:02d}")


if __name__ == "__main__":
    main()
