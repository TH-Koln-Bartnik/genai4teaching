"""QR-Codes für Kap. 1 und Vorwort nach der Reduktion (Sitzung K1, 13.11.2026).

Laiensicht: Ein QR-Code ist eine gedruckte Internetadresse, die das Smartphone abfotografiert
und öffnet. Im Druck ersetzt er Abschnitte und Filme, die nur online stehen.

1. images/qr/qr-nutzung.png    -> Kap. 1, Abschnitt „Wie verbreitet ist KI-Nutzung?“
2. images/qr/qr-lernpfade.png  -> Vorwort, Selbsttest der Lernpfade
3. images/qr/qr-video-stuetzraeder.png und der QR-Code im Druckraster
   images/druck/video-stuetzraeder.png -> Film „Stützräder“, jetzt in Kap. 1 statt Kap. 2.

Aufruf im Repo-Wurzelordner: python3 scripts/qr-kapitel01-reduktion.py
Braucht: pip install "qrcode[pil]"; zur Kontrolle opencv-python.
"""
import qrcode
from PIL import Image

BASIS = "https://th-koln-bartnik.github.io/genai4teaching/"
CODES = {
    "qr-nutzung": BASIS + "kapitel01-einleitung.html#sec-nutzung",
    "qr-lernpfade": BASIS + "#sec-lernpfade",
    "qr-video-stuetzraeder": BASIS + "kapitel01-einleitung.html#vid-stuetzraeder",
}


def code(url, rand):
    q = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, border=rand, box_size=20)
    q.add_data(url)
    q.make(fit=True)
    return q.make_image(fill_color="black", back_color="white").convert("RGB")


for name, url in CODES.items():
    rand = 4 if name == "qr-video-stuetzraeder" else 2  # Ruhezone 4 Module wie im Film-Raster
    img = code(url, rand).resize((600, 600), Image.NEAREST)
    img.save(f"images/qr/{name}.png")
    print(name, "->", url)

# Druckraster des Films: alten Code (Kap. 2) durch neuen (Kap. 1) ersetzen.
# Lage des alten Codes (ohne Ruhezone) per cv2.QRCodeDetector gemessen: x 2061–2393, y 475–807.
raster = Image.open("images/druck/video-stuetzraeder.png").convert("RGB")
x0, y0, x1, y1 = 2061, 475, 2393, 807
neu = code(CODES["qr-video-stuetzraeder"], 0)
rand_px = 18
weiss = Image.new("RGB", (x1 - x0 + 2 * rand_px, y1 - y0 + 2 * rand_px), "white")
raster.paste(weiss, (x0 - rand_px, y0 - rand_px))
raster.paste(neu.resize((x1 - x0, y1 - y0), Image.NEAREST), (x0, y0))
raster.save("images/druck/video-stuetzraeder.png")
print("Druckraster aktualisiert")
