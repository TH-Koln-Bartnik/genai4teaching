"""QR-Code für den Online-Abschnitt Wissenstypen (Kap. 4, sec-wissenstypen; Sitzung K4, 13.11.2026).
Muster wie scripts/qr-kapitel04-videos.py: Modulgröße ganzzahlig, Prüfung mit OpenCV.
Aufruf aus dem Repo-Wurzelordner: python3 scripts/qr-wissenstypen.py"""
from pathlib import Path
import cv2, qrcode
from PIL import Image
ROOT = Path(__file__).resolve().parent.parent
URL = "https://th-koln-bartnik.github.io/genai4teaching/kapitel04-lernmechanismen.html#sec-wissenstypen"
q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=1, border=2)
q.add_data(URL); q.make(fit=True)
m = q.make_image(fill_color="black", back_color="white").convert("1")
k = 500 // m.size[0]; e = m.resize((m.size[0] * k, m.size[1] * k), Image.NEAREST)
f = Image.new("1", (540, 540), 1); f.paste(e, ((540 - e.size[0]) // 2, (540 - e.size[1]) // 2))
ziel = ROOT / "images/qr/qr-wissenstypen.png"; f.save(ziel)
assert cv2.QRCodeDetector().detectAndDecode(cv2.imread(str(ziel)))[0] == URL
print("ok", ziel)
