"""QR-Code für den Druckkasten „Prüfen Sie selbst“ (Hörstück S2, Kap. 4.1).
Ziel: Kapitelseite mit fester Sprungmarke #sec-podcast-interviews; Muster wie scripts/qr-kapitel04-videos.py
(Modulgröße ganzzahlig, 540 x 540 px, Lesetest mit OpenCV in Farbe und Graustufen).
Aufruf aus dem Repo-Wurzelordner: python3 scripts/qr-podcast-s2.py"""
from pathlib import Path
import cv2, qrcode
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel06-rollen.html#sec-podcast-interviews"
ZIEL = ROOT / "images/qr/qr-podcast-forschende.png"

q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=1, border=2)
q.add_data(URL); q.make(fit=True)
m = q.make_image(fill_color="black", back_color="white").convert("1")
k = 500 // m.size[0]
m = m.resize((m.size[0] * k, m.size[1] * k), Image.NEAREST)
flaeche = Image.new("1", (540, 540), 1)
flaeche.paste(m, ((540 - m.size[0]) // 2, (540 - m.size[1]) // 2))
flaeche.save(ZIEL)

gelesen = cv2.QRCodeDetector().detectAndDecode(cv2.imread(str(ZIEL)))[0]
assert gelesen == URL, f"QR nicht lesbar: {gelesen!r}"
print(f"{ZIEL.relative_to(ROOT)} -> {gelesen}")
