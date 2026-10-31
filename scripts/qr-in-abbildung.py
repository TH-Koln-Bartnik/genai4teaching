"""Setzt den QR-Code rechts unten neben die Druckabbildung, damit beide im Satz zusammen fließen.
Eingabe: images/druck/<name>.png und images/qr/qr-<name>.png; Ausgabe: images/druck/<name>-qr.png."""
from pathlib import Path
from PIL import Image
ROOT = Path(__file__).resolve().parent.parent
for f in ["skill-karte", "agenten-engpass", "ki-zeithorizont", "ki-kosten", "ki-arbeitsweisen", "agenten-gedaechtnis", "ki-durchspiel", "tutor-kosten", "harness-schichten", "chatbot-zu-agent", "drei-labs-ein-bauplan", "zwischenschritt-texas", "skills-handbuch", "sitzung-und-gedaechtnis", "autonomiestufen", "vom-satz-zum-naechsten-wort"]:
    src = ROOT / f"images/druck/{f}.png"
    if not src.exists():
        continue
    im = Image.open(src).convert("RGB")
    qr = Image.open(ROOT / f"images/qr/qr-{f}.png").convert("RGB").resize((420, 420), Image.NEAREST)
    out = Image.new("RGB", (im.width + 40 + 420, max(im.height, 420)), "white")
    out.paste(im, (0, 0)); out.paste(qr, (im.width + 40, out.height - 420))
    out.save(ROOT / f"images/druck/{f}-qr.png", dpi=(300, 300))
    src.unlink()
