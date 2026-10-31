"""Druckabbildungen und QR-Codes der vier Kapitel-4-Videos (Neufassung 31.10.2026).
Grund: Die Fassung vom 29.10. zeigte auf th-koeln-bartnik.github.io (404); richtig ist th-koln-bartnik.github.io.
Standbild = linker Teil (1920 x 1080) der alten Druckabbildung; Modulgröße ganzzahlig, damit der Code scharf bleibt.
Aufruf aus dem Repo-Wurzelordner: python3 scripts/qr-kapitel04-videos.py"""
from pathlib import Path
import cv2, qrcode
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://th-koln-bartnik.github.io/genai4teaching/kapitel04.html#"
VIDS = [("acemoglu-restrepo", "38 s"), ("making-of", "59 s"), ("eoq-vergleich", "30 s"), ("ps2pal-ablauf", "44 s")]
F = "/usr/share/fonts/opentype/inter/"
font, small = ImageFont.truetype(F + "Inter-Bold.otf", 34), ImageFont.truetype(F + "Inter-Regular.otf", 28)
det = cv2.QRCodeDetector()

def qr_bild(url, ziel):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=1, border=2)
    q.add_data(url); q.make(fit=True)
    m = q.make_image(fill_color="black", back_color="white").convert("1")
    k = ziel // m.size[0]
    return m.resize((m.size[0] * k, m.size[1] * k), Image.NEAREST)

for slug, dur in VIDS:
    url = BASE + "vid-" + slug
    e = qr_bild(url, 500); flaeche = Image.new("1", (540, 540), 1)
    flaeche.paste(e, ((540 - e.size[0]) // 2, (540 - e.size[1]) // 2))
    flaeche.save(ROOT / f"images/qr/qr-video-{slug}.png")
    pfad = ROOT / f"images/druck/video-{slug}.png"
    still = Image.open(pfad).convert("RGB").crop((0, 0, 1920, 1080))
    c = Image.new("RGB", (1920 + 460, 1080), "white"); c.paste(still, (0, 0))
    d = ImageDraw.Draw(c)
    d.line([(1920, 0), (1920, 1080)], fill=(200, 200, 205), width=3)
    q = qr_bild(url, 380).convert("RGB")
    c.paste(q, (1960 + (380 - q.size[0]) // 2, 300 + (380 - q.size[1]) // 2))
    d.text((1960, 230), "Video online", font=font, fill=(29, 29, 31))
    d.text((1960, 700), f"Laufzeit {dur}", font=small, fill=(90, 90, 96))
    c.save(pfad, dpi=(300, 300))
    for f in (pfad, ROOT / f"images/qr/qr-video-{slug}.png"):
        gelesen = det.detectAndDecode(cv2.imread(str(f)))[0]
        grau = det.detectAndDecode(cv2.cvtColor(cv2.imread(str(f), 0), cv2.COLOR_GRAY2BGR))[0]
        print("OK " if gelesen == url == grau else "FEHLER", f.name, gelesen)
