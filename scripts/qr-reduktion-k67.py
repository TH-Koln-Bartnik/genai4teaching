"""QR-Codes zur Reduktion von Kap. 6 und 7 nach den drei Ringen (13.11.2026).
Kennenswert-Abschnitte stehen online, der Druck trägt einen Satz und diesen QR-Code.
Little's Law und Bullwhip sind von Kap. 6 nach Kap. 7 gezogen; ihre QR-Codes zeigen auf die neue Adresse.
Aufruf aus dem Repo-Wurzelordner: python3 scripts/qr-reduktion-k67.py (braucht qrcode, pillow, opencv)."""
from pathlib import Path
import cv2, qrcode
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BASIS = "https://th-koln-bartnik.github.io/genai4teaching/"
CODES = {
    "qr-k6-copilot": "kapitel06-rollen.html#sec-copilot",
    "qr-k6-schreiben": "kapitel06-rollen.html#sec-cyborg-writing",
    "qr-k6-programmieren": "kapitel06-rollen.html#sec-coding",
    "qr-k7-job-buddy": "kapitel07-artefakte.html#sec-fall-job-buddy",
    "qr-littles-law": "kapitel07-artefakte.html#sec-widget-littles-law",
    "qr-bullwhip": "kapitel07-artefakte.html#sec-widget-bullwhip",
}
det = cv2.QRCodeDetector()

def qr_bild(url, ziel=560):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=1, border=2)
    q.add_data(url)
    q.make(fit=True)
    m = q.make_image(fill_color="black", back_color="white").convert("1")
    k = ziel // m.size[0]  # ganzzahlige Modulgröße, damit der Code scharf bleibt
    return m.resize((m.size[0] * k, m.size[1] * k), Image.NEAREST)

for name, pfad in CODES.items():
    url = BASIS + pfad
    e = qr_bild(url)
    flaeche = Image.new("1", (600, 600), 1)
    flaeche.paste(e, ((600 - e.size[0]) // 2, (600 - e.size[1]) // 2))
    ziel = ROOT / "images" / "qr" / f"{name}.png"
    flaeche.save(ziel)
    gelesen = det.detectAndDecode(cv2.imread(str(ziel)))[0]
    assert gelesen == url, (name, gelesen)
    print(f"{name}: {url} (geprüft)")
