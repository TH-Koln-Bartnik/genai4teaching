"""Erzeugt die zwei statischen Abbildungen zur Modellwahl in Kapitel 2.3 als SVG (Graustufen).
Aufruf aus dem Repo-Wurzelordner: python3 scripts/modellwahl-grafiken.py
Ausgabe: images/modellwahl/modellwahl-stufen.svg, images/modellwahl/modellwahl-klassen.svg
Danach node scripts/druck-modellwahl.cjs (rendert die SVG als PNG für Buch und Web).
Werte: Stufen und Kontingente nach den Preisseiten von OpenAI, Anthropic und Google (Stand 31.10.2026);
Zeitverzug nach Edwards & Emberson (2026) und Somala & Emberson (2025). Schematisch, nicht maßstäblich
außer dem Verhältnis 1 : 5 der Kontingente.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "images" / "modellwahl"
OUT.mkdir(parents=True, exist_ok=True)

TINTE, GRAU, HELL, FLAECHE, GRUND = "#1b1b1b", "#6b6b6b", "#d9d9d9", "#efefef", "#ffffff"
FONT = 'font-family="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"'


def text(x, y, s, size=17, weight=400, fill=TINTE, anchor="middle", extra=""):
    return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" {extra}>{s}</text>'


def svg(w, h, inhalt, titel):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" {FONT}>'
            f'<title>{titel}</title><rect width="{w}" height="{h}" fill="{GRUND}"/>' + "".join(inhalt) + "</svg>\n")


# ---------- Abb. 1: Was ein Abo kauft ----------
def stufen():
    W, H, BASIS = 1000, 560, 400
    e = []
    e.append('<defs><pattern id="schraffur" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">'
             f'<rect width="8" height="8" fill="{GRUND}"/><line x1="0" y1="0" x2="0" y2="8" stroke="{GRAU}" stroke-width="3"/></pattern></defs>')
    # y-Achse
    e.append(f'<line x1="90" y1="{BASIS}" x2="90" y2="40" stroke="{GRAU}" stroke-width="1.5"/>')
    e.append(f'<path d="M84,52 L90,36 L96,52" fill="none" stroke="{GRAU}" stroke-width="1.5"/>')
    e.append(text(52, 220, "Kontingent je Woche", 16, 400, GRAU, "middle", 'transform="rotate(-90 52 220)"'))
    e.append(f'<line x1="90" y1="{BASIS}" x2="960" y2="{BASIS}" stroke="{TINTE}" stroke-width="2"/>')
    spalten = [
        # x-Mitte, Höhe, Füllung, Faktor, Stichworte, Preis, Bezeichnung
        (230, 24, "url(#schraffur)", "eng begrenzt", ["Grenzen schnell erreicht"], "0 €", "kostenlos"),
        (530, 70, GRAU, "1 ×", ["Recherche-Agent", "Projekte"], "rund 20 €", "Gelegenheitsnutzung"),
        (830, 350, TINTE, "5 ×", ["lange Agentenläufe", "mehrere Agenten", "gleichzeitig"], "rund 100 €", "professionelle Nutzung"),
    ]
    for x, h, fill, faktor, worte, preis, name in spalten:
        top = BASIS - h
        e.append(f'<rect x="{x-110}" y="{top}" width="220" height="{h}" fill="{fill}" stroke="{TINTE}" stroke-width="1.5"/>')
        if h > 200:  # Stichworte in den Balken (weiß)
            e.append(text(x, top + 44, faktor, 30, 700, GRUND))
            for i, w in enumerate(worte):
                e.append(text(x, top + 90 + i * 24, w, 17, 400, GRUND))
        else:
            e.append(text(x, top - 14 - 24 * len(worte), faktor, 26 if faktor.endswith("×") else 18, 700, TINTE))
            for i, w in enumerate(worte):
                e.append(text(x, top - 10 - 24 * (len(worte) - 1 - i), w, 17, 400, TINTE))
        e.append(text(x, BASIS + 32, preis, 21, 700))
        e.append(text(x, BASIS + 56, name if preis == "0 €" else name + " · je Monat", 16, 400, GRAU))
    # Modellzeile: links kleinere Modelle, rechts eine gemeinsame Zelle
    y0 = BASIS + 82
    e.append(f'<rect x="120" y="{y0}" width="220" height="44" rx="6" fill="{FLAECHE}" stroke="{HELL}"/>')
    e.append(text(230, y0 + 28, "kleinere Modelle", 17))
    e.append(f'<rect x="420" y="{y0}" width="520" height="44" rx="6" fill="{FLAECHE}" stroke="{TINTE}" stroke-width="1.5"/>')
    e.append(text(680, y0 + 28, "im Kern dieselben Spitzenmodelle, hohe Denkstufe", 17, 650))
    e.append(text(90, y0 + 28, "Modell", 15, 400, GRAU, "end"))
    return svg(W, H, e, "Was ein Abo kauft: drei Stufen, vor allem mehr Kontingent")


# ---------- Abb. 2: Modellklassen im 2×2-Feld ----------
def klassen():
    W, H = 1000, 620
    L, R, O, U = 130, 950, 30, 530          # Zeichenfläche
    MX, MY = (L + R) // 2, (O + U) // 2
    e = []
    e.append('<defs><marker id="pfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">'
             f'<path d="M0,0 L10,5 L0,10 z" fill="{TINTE}"/></marker>'
             '<marker id="achse" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
             f'<path d="M0,0 L10,5 L0,10 z" fill="{GRAU}"/></marker></defs>')
    # Achsen
    e.append(f'<line x1="{L}" y1="{U+18}" x2="{R}" y2="{U+18}" stroke="{GRAU}" stroke-width="1.5" marker-end="url(#achse)"/>')
    e.append(text(L, U + 44, "kleiner", 16, 400, GRAU, "start"))
    e.append(text(R, U + 44, "größer", 16, 400, GRAU, "end"))
    e.append(text(MX, U + 70, "Leistung des Modells", 17, 650, TINTE))
    e.append(f'<line x1="{L-18}" y1="{U}" x2="{L-18}" y2="{O}" stroke="{GRAU}" stroke-width="1.5" marker-end="url(#achse)"/>')
    e.append(text(L - 40, U, "beim Anbieter", 16, 400, GRAU, "start", f'transform="rotate(-90 {L-40} {U})"'))
    e.append(text(L - 40, O, "in eigener Hand", 16, 400, GRAU, "end", f'transform="rotate(-90 {L-40} {O})"'))
    e.append(text(L - 66, MY, "Kontrolle über die Daten", 17, 650, TINTE, "middle", f'transform="rotate(-90 {L-66} {MY})"'))
    # Felder
    felder = [
        (L, O, "Kleines offenes Modell", "läuft auf dem eigenen Rechner", FLAECHE, HELL),
        (MX, O, "Großes offenes Modell", "auf Servern der Hochschule oder des Landes", FLAECHE, HELL),
        (L, MY, "Kleines Frontier-Modell", "Mini- oder Flash-Variante, oft kostenlos", FLAECHE, HELL),
        (MX, MY, "Großes Frontier-Modell", "Spitzenmodell in der Cloud des Anbieters", "#e2e2e2", TINTE),
    ]
    g = 14
    for x, y, t, u, fill, rand in felder:
        e.append(f'<rect x="{x+g}" y="{y+g}" width="{MX-L-2*g}" height="{MY-O-2*g}" rx="10" fill="{fill}" stroke="{rand}" stroke-width="1.5"/>')
        e.append(text(x + (MX - L) // 2, y + 112, t, 21, 700))
        e.append(text(x + (MX - L) // 2, y + 140, u, 16, 400, GRAU))
    # Zeitverzug: von der Spitze zu den offenen Modellen
    fx, fy = MX + (MX - L) // 2, MY + g + 40          # Oberkante Frontier-Feld (Mitte)
    e.append(f'<line x1="{fx+60}" y1="{MY+g+30}" x2="{fx+60}" y2="{MY-g-30}" stroke="{TINTE}" stroke-width="2.5" marker-end="url(#pfeil)"/>')
    e.append(text(fx + 74, MY + 6, "≈ 4 Monate später", 17, 650, TINTE, "start"))
    e.append(f'<line x1="{MX+g+40}" y1="{MY+g+40}" x2="{MX-g-50}" y2="{MY-g-40}" stroke="{TINTE}" stroke-width="2.5" marker-end="url(#pfeil)"/>')
    e.append(text(MX - 40, MY + 6, "≈ 6–12 Monate später", 17, 650, TINTE, "end"))
    return svg(W, H, e, "Vier Modellklassen nach Leistung und Kontrolle über die Daten")


(OUT / "modellwahl-stufen.svg").write_text(stufen(), encoding="utf-8")
(OUT / "modellwahl-klassen.svg").write_text(klassen(), encoding="utf-8")
print("geschrieben:", *(p.relative_to(ROOT) for p in sorted(OUT.glob("*.svg"))))
