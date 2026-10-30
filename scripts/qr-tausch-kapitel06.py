"""Tauscht den QR-Code in den drei Druckabbildungen von Kapitel 6 aus (gleiche Stelle, gleiche Größe).
Der alte Code wird gefunden (OpenCV), weiß überdeckt und durch den neuen ersetzt; die Beschriftung darunter bleibt.
Eingabe: scripts/qr-kapitel06.json (von qr-kapitel06.mjs). Danach wird jeder Code wieder gelesen und gegen die URL geprüft."""
import json
from pathlib import Path
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
M = json.loads((ROOT / "scripts/qr-kapitel06.json").read_text())
det = cv2.QRCodeDetector()
for name, q in M.items():
    pfad = ROOT / f"images/druck/{name}.png"
    bild = cv2.imread(str(pfad))
    alt, pts, _ = det.detectAndDecode(bild)
    if alt == q["url"]:
        print(name, "schon aktuell"); continue
    p = pts.reshape(-1, 2); x0, y0 = p.min(0); x1, y1 = p.max(0)
    seite = int(round(max(x1 - x0, y1 - y0)))
    n = q["n"]; modul = seite // n; neu = modul * n
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    ox, oy = int(round(cx - neu / 2)), int(round(cy - neu / 2))
    rand = 4 * modul  # Ruhezone
    im = Image.open(pfad).convert("RGB")
    a = np.array(im)
    a[int(y0) - rand:int(y1) + rand, int(x0) - rand:int(x1) + rand] = 255
    m = np.array(q["bits"], dtype=np.uint8).reshape(n, n)
    kachel = np.kron(1 - m, np.ones((modul, modul), dtype=np.uint8)) * 255
    a[oy:oy + neu, ox:ox + neu] = kachel[..., None]
    Image.fromarray(a).save(pfad, dpi=(300, 300))
    gelesen = det.detectAndDecode(cv2.imread(str(pfad)))[0]
    print(name, "OK" if gelesen == q["url"] else "FEHLER", gelesen, f"({n} Module à {modul} px)")
