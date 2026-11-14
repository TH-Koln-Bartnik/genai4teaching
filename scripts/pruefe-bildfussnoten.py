# Prüft im Druck-PDF, ob die Fußnote einer Abbildungs- oder Tabellenunterschrift auf
# derselben Seite steht wie die Unterschrift.
#
# Laiensicht: Seit 14.11.2026 tragen Abbildungen und Tabellen einen Kurztitel; Beschreibung,
# Quelle und Legende stehen in einer Fußnote. Steht eine Abbildung unten auf der Seite, kann
# LaTeX die Fußnote auf die Folgeseite schieben. Das Skript listet diese Fälle, damit man sie
# im Satz von Hand behebt (z. B. Absatz kürzen oder Abbildung verschieben). Jede Textänderung
# davor verschiebt die Umbrüche; deshalb nach jedem Druck-Render erneut laufen lassen.
#
# Aufruf: python3 -I scripts/pruefe-bildfussnoten.py docs/downloads-genai4teaching.pdf
# Braucht pdftotext (poppler-utils).
import re, subprocess, sys

pdf = sys.argv[1]
text = subprocess.run(["pdftotext", "-layout", pdf, "-"], capture_output=True, text=True, check=True).stdout
seiten = text.split("\f")
kopf = re.compile(r"^\s*(Abbildung|Tabelle) ([0-9A-Z]+(?:\.[0-9]+)?)\.\s")
treffer = 0
for nr, seite in enumerate(seiten, 1):
    zeilen = seite.split("\n")
    for i, z in enumerate(zeilen):
        m = kopf.match(z)
        if not m or "Verzeichnis" in seite[:400]:
            continue
        # Unterschrift kann zwei Zeilen haben; die Fußnotenziffer steht am Ende
        stueck = z.rstrip()
        if i + 1 < len(zeilen) and zeilen[i + 1].strip() and not kopf.match(zeilen[i + 1]) \
                and not zeilen[i + 1].strip().isdigit():
            stueck += " " + zeilen[i + 1].strip()
        f = re.search(r"\S(\d+)$", stueck)
        if not f:
            continue
        lauf = f.group(1)
        # Titel kann mit einer Jahreszahl enden („2025–2026“ + Fußnote 7 = „20267“)
        ziffer = lauf[4:] if len(lauf) >= 5 else lauf if len(lauf) <= 2 else None
        if not ziffer:
            continue
        # Fußnotenbereich unterhalb der Unterschrift: Zeile, die nur aus der Ziffer
        # besteht oder mit ihr und Abstand beginnt
        unten = "\n".join(zeilen[i + 1:])
        if not re.search(rf"(?m)^\s{{0,8}}{ziffer}(\s*$|\s{{2,}}\S)", unten):
            treffer += 1
            print(f"PDF-Seite {nr}: {m.group(1)} {m.group(2)} – Fußnote {ziffer} steht nicht auf dieser Seite")
print(f"{treffer} Fälle" if treffer else "Alle Fußnoten stehen bei ihrer Unterschrift.")
