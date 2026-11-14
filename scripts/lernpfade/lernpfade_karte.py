"""Erzeugt den U-Bahn-Plan der Lernpfade als SVG.

Aufruf: python3 lernpfade_karte.py <ausgabe.svg> [--fragment]
--fragment: nur das <svg>-Element mit Klassen, ohne eingebettete Stile
            (für das Online-Widget, das die Farben per CSS setzt).
"""
import math
import sys

GAP = 8      # Abstand paralleler Linien
BREITE = 5   # Linienstärke

# Stationen: Schlüssel -> (x, y, Beschriftung, Ausrichtung, dx, dy, Link, Knoten)
ST = {  # 04.11.2026: neue Gliederung, sieben Kapitel in zwei Teilen (Phase 1 Umzug)
    "k1":  (140, 280, "1 Einleitung",       "end", -28, 6, "kapitel01-einleitung.html#sec-einleitung", True),
    "k2":  (260, 140, "2 Grundlagen",       "end", -6, -26, "kapitel02-grundlagen.html#sec-grundbegriffe", False),
    "k3":  (390, 140, "3 Automation",       "start", 6, -26, "kapitel03-automation.html#sec-automation", False),
    "k4":  (390, 420, "4.1–4.4 Lernmechanismen", "middle", 0, 38, "kapitel04-lernmechanismen.html#sec-didaktik", False),
    "e45": (520, 280, "4.5 Evidenz",        "start", -14, 58, "kapitel04-lernmechanismen.html#sec-evidenz", True),
    "k5":  (650, 140, "5 Vier Phasen (4D)", "middle", 0, -26, "kapitel05-4d-phasen.html#sec-umsetzung", False),
    "k6":  (780, 280, "6 Rollen",           "middle", 0, 50, "kapitel06-rollen.html#sec-szenarien", True),
    "k7":  (910, 280, "7 Fallbeispiele",    "middle", 0, -30, "kapitel07-artefakte.html#sec-fallbeispiele", True),
    "anh": (1040, 420, "Anhang A",           "middle", 0, 38, "kapitel07-appendix02-prompt-sammlung.html#sec-prompts", False),
}

LINIEN = {
    1: ["k1", "k2", "k3", "k4", "e45", "k5", "k6", "k7"],
    2: ["k1", "k3", "k4", "e45", "k5", "k6", "k7"],   # 04.11.2026: 4D steht jetzt in Kap. 5, Linie 2 überspringt Kap. 2
    3: ["k1", "k2", "k3", "e45", "k5", "k6", "k7"],
    4: ["k1", "e45", "k6", "k7", "anh"],
}
NAMEN = {
    1: "Neu in KI und Lernforschung",
    2: "Erfahren mit KI",
    3: "Vertraut mit Lernforschung",
    4: "Vertraut mit beidem",
}
STIL = {  # Graustufen; Unterscheidung über Helligkeit und Strichmuster
    1: ("var(--l-dunkel)", None),
    2: ("var(--l-dunkel)", "11 6"),
    3: ("var(--l-hell)", None),
    4: ("var(--l-hell)", "0.1 9"),
}

def seg_key(a, b):
    return tuple(sorted((a, b)))

# Welche Linien teilen welches Gleis?
gleise = {}
for nr, folge in LINIEN.items():
    for a, b in zip(folge, folge[1:]):
        gleise.setdefault(seg_key(a, b), []).append(nr)

def versatz(a, b, nr):
    """Versatz der Linie nr senkrecht zum Gleis a->b (feste Orientierung je Gleis)."""
    s = sorted((a, b))
    (x1, y1), (x2, y2) = ST[s[0]][:2], ST[s[1]][:2]
    dx, dy = x2 - x1, y2 - y1
    l = math.hypot(dx, dy)
    nx, ny = -dy / l, dx / l
    teil = sorted(gleise[seg_key(a, b)])
    i = teil.index(nr)
    o = (i - (len(teil) - 1) / 2) * GAP
    return nx * o, ny * o

def schnitt(p1, d1, p2, d2):
    det = d1[0] * d2[1] - d1[1] * d2[0]
    if abs(det) < 1e-9:
        return None
    t = ((p2[0] - p1[0]) * d2[1] - (p2[1] - p1[1]) * d2[0]) / det
    return p1[0] + t * d1[0], p1[1] + t * d1[1]

def pfad(nr):
    folge = LINIEN[nr]
    pts = []
    for i, s in enumerate(folge):
        x, y = ST[s][:2]
        if i == 0:
            ox, oy = versatz(s, folge[1], nr)
            pts.append((x + ox, y + oy))
            continue
        if i == len(folge) - 1:
            ox, oy = versatz(folge[i - 1], s, nr)
            pts.append((x + ox, y + oy))
            continue
        a, c = folge[i - 1], folge[i + 1]
        o1 = versatz(a, s, nr)
        o2 = versatz(s, c, nr)
        d1 = (x - ST[a][0], y - ST[a][1])
        d2 = (ST[c][0] - x, ST[c][1] - y)
        p = schnitt((x + o1[0], y + o1[1]), d1, (x + o2[0], y + o2[1]), d2)
        if p is None:  # gerade durch: kleiner Versatzsprung unter dem Stationssymbol
            pts.append((x + o1[0], y + o1[1]))
            pts.append((x + o2[0], y + o2[1]))
        else:
            pts.append(p)
    return "M " + " L ".join(f"{px:.1f} {py:.1f}" for px, py in pts)

def svg(fragment=False):
    W, H = 1120, 560
    o = []
    o.append(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" '
             f'class="lernpfade-karte" role="img" aria-labelledby="lp-titel lp-desc">')
    o.append('<title id="lp-titel">Lernpfade durch das Buch</title>')
    o.append('<desc id="lp-desc">Liniennetz mit vier Lernpfaden. Alle Linien halten an Kapitel 1, '
             'Abschnitt 4.5, Kapitel 6 und Kapitel 7. Linie 1 hält an allen Hauptkapiteln, Linie 2 '
             'überspringt Kapitel 2, Linie 3 überspringt die Abschnitte 4.1 bis 4.4, '
             'Linie 4 geht von der Einleitung direkt zur Evidenz und endet in der Prompt-Sammlung in Anhang A.</desc>')
    if not fragment:
        o.append('<style>'
                 'svg{--l-dunkel:#111111;--l-hell:#8c8c94;--grund:#ffffff;--tinte:#111111;--akzent:#c81e0f;}'
                 'text{font-family:"TeX Gyre Heros",Inter,Helvetica,Arial,sans-serif;fill:var(--tinte);}'
                 '</style>')
    # Linien: erst helle (4, 3), dann dunkle, jeweils mit weißer Unterlage für Kreuzungen
    for nr in (4, 3, 2, 1):
        d = pfad(nr)
        farbe, dash = STIL[nr]
        o.append(f'<g class="linie" data-linie="{nr}">')
        o.append(f'<path d="{d}" fill="none" stroke="var(--grund)" stroke-width="{BREITE + 4}" '
                 f'stroke-linejoin="round" stroke-linecap="round"/>')
        da = f' stroke-dasharray="{dash}"' if dash else ""
        o.append(f'<path d="{d}" fill="none" stroke="{farbe}" stroke-width="{BREITE}" '
                 f'stroke-linejoin="round" stroke-linecap="round"{da}/>')
        o.append('</g>')
    # Stationen
    for key, (x, y, txt, anc, dx, dy, link, knoten) in ST.items():
        linien = [n for n, f in LINIEN.items() if key in f]
        # Das Widget liegt in interactions/; Kapitel liegen eine Ebene höher.
        ziel = f"../{link}" if fragment else link
        o.append(f'<a href="{ziel}" target="_top" class="station" data-linien="{" ".join(map(str, linien))}">')
        if knoten:
            o.append(f'<circle cx="{x}" cy="{y}" r="18" fill="var(--grund)" stroke="var(--akzent)" stroke-width="4"/>')
        else:
            o.append(f'<circle cx="{x}" cy="{y}" r="11" fill="var(--grund)" stroke="var(--l-dunkel)" stroke-width="3"/>')
        o.append(f'<text x="{x + dx}" y="{y + dy}" text-anchor="{anc}" font-size="19" font-weight="600">{txt}</text>')
        o.append('</a>')
    # Legende
    ly = 515
    for i, nr in enumerate((1, 2, 3, 4)):
        x0 = (30, 335, 565, 860)[i]
        farbe, dash = STIL[nr]
        da = f' stroke-dasharray="{dash}"' if dash else ""
        o.append(f'<g class="legende" data-linie="{nr}">')
        o.append(f'<line x1="{x0}" y1="{ly}" x2="{x0 + 44}" y2="{ly}" stroke="{farbe}" stroke-width="{BREITE}" stroke-linecap="round"{da}/>')
        o.append(f'<text x="{x0 + 56}" y="{ly + 6}" font-size="16"><tspan font-weight="700">{nr}</tspan> {NAMEN[nr]}</text>')
        o.append('</g>')
    o.append(f'<circle cx="52" cy="40" r="11" fill="var(--grund)" stroke="var(--akzent)" stroke-width="4"/>')
    o.append('<text x="74" y="46" font-size="16">Station auf allen vier Wegen</text>')
    o.append('</svg>')
    return "\n".join(o)

FARBEN = {"--l-dunkel": "#111111", "--l-hell": "#8c8c94", "--grund": "#ffffff",
          "--tinte": "#111111", "--akzent": "#c81e0f"}

if __name__ == "__main__":
    frag = "--fragment" in sys.argv
    out = svg(frag)
    if not frag:  # Druckfassung: feste Farben, da nicht jeder SVG-Renderer CSS-Variablen kennt
        out = out.split("<style>")[0] + out.split("</style>")[1] if "<style>" in out else out
        for k, v in FARBEN.items():
            out = out.replace(f"var({k})", v)
        out = out.replace('<text ', '<text font-family="TeX Gyre Heros, Inter, Helvetica, Arial, sans-serif" fill="#111111" ')
    with open(sys.argv[1], "w", encoding="utf-8") as f:
        f.write(out)
