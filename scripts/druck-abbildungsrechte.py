"""Eigene Neuzeichnungen für Abbildungen, deren Vorlagen keine freie Lizenz haben.

Erzeugt vier SVG-Dateien in images/druck/ im Hausstil (Graustufen plus Akzent #b45309):
  bloom-nutzung.svg        Daten: Handa et al. (2025), Anthropic Education Report
  interaktionsarten.svg    Konzept: Handa et al. (2025); eigene Beispiele
  vier-saeulen.svg         Inhalt nach Gmeiner (2025), CC BY-SA 4.0
  onet-aufgaben.svg        O*NET OnLine 25-1011.00 (CC BY 4.0), übersetzt und gekürzt

Aufruf: python3 scripts/druck-abbildungsrechte.py
"""
from pathlib import Path
from xml.sax.saxutils import escape as esc

OUT = Path(__file__).resolve().parent.parent / "images" / "druck"
FONT = "TeX Gyre Heros, Helvetica, Arial, sans-serif"
INK, GREY, MID, LIGHT, PALE, ACC = "#1b1b1b", "#767676", "#b5b5b5", "#e4e4e4", "#f2f2f2", "#b45309"


def svg(w, h, title, desc, body, comment):
    return (f'<?xml version="1.0" encoding="UTF-8"?>\n<!-- {comment} Erzeugt von scripts/druck-abbildungsrechte.py. -->\n'
            f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" '
            f'font-family="{FONT}" role="img" aria-labelledby="t d">\n'
            f'<title id="t">{esc(title)}</title>\n<desc id="d">{esc(desc)}</desc>\n'
            f'<rect width="{w}" height="{h}" fill="#ffffff"/>\n{body}</svg>\n')


def t(x, y, s, size=17, fill=INK, anchor="start", weight="normal"):
    return (f'<text x="{x}" y="{y}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" '
            f'font-weight="{weight}">{esc(s)}</text>\n')


# ---------------------------------------------------------------- Bloom
def bloom():
    # Reihenfolge von oben (höchste Stufe) nach unten; Werte in % der Gespräche (Handa et al., 2025)
    stufen = [("Erschaffen", "Aus Gelerntem etwas Neues bauen", 39.8),
              ("Bewerten", "Urteilen und das Urteil begründen", 5.5),
              ("Analysieren", "Zerlegen, Zusammenhänge erkennen", 30.2),
              ("Anwenden", "Gelerntes auf neue Fälle übertragen", 10.9),
              ("Verstehen", "Bedeutung erfassen und erklären", 10.0),
              ("Erinnern", "Fakten abrufen", 1.8)]
    W, H, x0, bar_x, scale, row = 900, 440, 60, 380, 10.5, 58
    body = ""
    oben = sum(v for _, _, v in stufen[:3])
    unten = sum(v for _, _, v in stufen[3:])
    for i, (name, besch, v) in enumerate(stufen):
        y = 40 + i * row
        hoch = i < 3
        body += t(x0 + 30, y + 20, name, 19, INK, weight="bold")
        body += t(x0 + 30, y + 42, besch, 14, GREY)
        body += f'<rect x="{bar_x}" y="{y + 6}" width="{v * scale:.1f}" height="36" fill="{ACC if hoch else MID}"/>\n'
        lab = f"{v:.1f} %".replace(".", ",")
        body += t(bar_x + v * scale + 10, y + 31, lab, 17, ACC if hoch else INK, weight="bold" if hoch else "normal")
    # Klammern links: höhere und niedrigere Denkstufen
    for (y1, y2, txt, col) in [(46, 40 + 3 * row - 10, f"höhere Stufen {oben:.1f} %".replace(".", ","), ACC),
                               (40 + 3 * row + 6, 40 + 6 * row - 10, f"niedrigere Stufen {unten:.1f} %".replace(".", ","), GREY)]:
        body += f'<path d="M{x0 + 14} {y1} H{x0} V{y2} H{x0 + 14}" fill="none" stroke="{col}" stroke-width="2"/>\n'
        body += (f'<text transform="translate({x0 - 10} {(y1 + y2) / 2}) rotate(-90)" font-size="14" fill="{col}" '
                 f'text-anchor="middle">{esc(txt)}</text>\n')
    body += t(bar_x, H - 24, "Anteil der Gespräche, in denen das Modell diese Denkleistung zeigt", 14, GREY)
    title = "Nutzung eines Sprachmodells durch Studierende nach Stufen der Bloomschen Taxonomie"
    desc = ("Balkendiagramm, sechs Stufen von oben nach unten: Erschaffen 39,8 %, Bewerten 5,5 %, Analysieren 30,2 %, "
            "Anwenden 10,9 %, Verstehen 10,0 %, Erinnern 1,8 %. Die drei höheren Stufen zusammen 75,5 %, "
            "die drei niedrigeren 22,7 %. Daten: Handa et al. 2025.")
    return svg(W, H, title, desc, body, "Abb. „Bloom-Nutzung“ (Kapitel 1, @fig-llm-nutzung-bloom). Daten: Handa et al. (2025); eigene Darstellung.")


# ---------------------------------------------------------------- Interaktionsarten
def interaktion():
    W, H = 900, 500
    cx, cy, cw, ch = 170, 70, 340, 180
    body = t(cx + cw / 2, 50, "Problem lösen", 19, INK, "middle", "bold")
    body += t(cx + cw + 20 + cw / 2, 50, "Ergebnis erstellen", 19, INK, "middle", "bold")
    zeilen = [("direkt", "Studierende wollen …", False), ("kollaborativ", "Studierende wollen …", True)]
    zellen = [[("1", "eine fertige Lösung oder Erklärung", "„Berechne den Break-even-Punkt", "für diese Zahlen.“"),
               ("2", "fertiges Material", "„Fasse diesen Fachartikel auf", "einer Seite zusammen.“")],
              [("3", "geführt ein Problem lösen", "„Führe mich durch die ABC-Analyse,", "ohne die Lösung vorwegzunehmen.“"),
               ("4", "ihre Arbeit schrittweise verbessern", "„Gib mir Rückmeldung zu meiner", "Gliederung, ich überarbeite sie.“")]]
    for r, (zname, _, akzent) in enumerate(zeilen):
        y = cy + r * (ch + 20)
        body += t(cx - 20, y + ch / 2 + 6, zname, 19, ACC if akzent else INK, "end", "bold")
        for c in range(2):
            x = cx + c * (cw + 20)
            nr, ziel, b1, b2 = zellen[r][c]
            body += (f'<rect x="{x}" y="{y}" width="{cw}" height="{ch}" rx="6" fill="{PALE}" '
                     f'stroke="{ACC if akzent else MID}" stroke-width="{3 if akzent else 1.5}"/>\n')
            body += f'<circle cx="{x + cw - 28}" cy="{y + 28}" r="15" fill="{ACC if akzent else GREY}"/>\n'
            body += t(x + cw - 28, y + 34, nr, 16, "#ffffff", "middle", "bold")
            body += t(x + 20, y + 36, "Studierende wollen …", 15, GREY)
            body += t(x + 20, y + 62, ziel, 18, INK, weight="bold")
            body += t(x + 20, y + 112, "Beispiel", 13, GREY)
            body += t(x + 20, y + 136, b1, 16, INK)
            body += t(x + 20, y + 158, b2, 16, INK)
    body += t(cx, H - 20, "Hervorgehoben: die Interaktionen, die Lehrende fördern wollen.", 14, GREY)
    title = "Vier Arten der Interaktion von Studierenden mit Sprachmodellen"
    desc = ("Zwei mal zwei Felder. Spalten: Problem lösen, Ergebnis erstellen. Zeilen: direkt, kollaborativ. "
            "1 fertige Lösung oder Erklärung, 2 fertiges Material, 3 geführtes Problemlösen, 4 schrittweise Verbesserung "
            "der eigenen Arbeit. Die kollaborative Zeile ist hervorgehoben. Konzept nach Handa et al. 2025, Beispiele eigene.")
    return svg(W, H, title, desc, body, "Abb. „Interaktionsarten“ (Kapitel 5, @fig-interaction-types). Konzept nach Handa et al. (2025); eigene Darstellung und Beispiele.")


# ---------------------------------------------------------------- Vier Säulen
def saeulen():
    W, H = 900, 290
    s = [("01", "Mündlichkeit", ["Aufgaben verlangen", "Austausch in Echtzeit,", "etwa im Gespräch"]),
         ("02", "Prozess", ["Bewertet wird auch", "der Lernweg, etwa", "Recherche, Reflexion"]),
         ("03", "Kontext", ["Aufgaben beziehen sich", "auf spezifische, nicht", "öffentliche Quellen"]),
         ("04", "Kollaboration", ["Gruppenarbeit und", "kreative Leistungen", "stehen im Vordergrund"])]
    bw, gap, x0, y0, bh = 205, 15, 20, 20, 250
    body = ""
    for i, (nr, name, zeilen) in enumerate(s):
        x = x0 + i * (bw + gap)
        body += f'<rect x="{x}" y="{y0}" width="{bw}" height="{bh}" rx="6" fill="{PALE}" stroke="{MID}" stroke-width="1.5"/>\n'
        body += f'<rect x="{x}" y="{y0}" width="{bw}" height="8" fill="{ACC}"/>\n'
        body += t(x + 20, y0 + 50, nr, 26, ACC, weight="bold")
        body += t(x + 20, y0 + 92, name, 21, INK, weight="bold")
        for j, z in enumerate(zeilen):
            body += t(x + 20, y0 + 145 + j * 26, z, 15, INK)
    title = "Vier Säulen KI-resistenter Aufgabenstellungen"
    desc = ("Vier Säulen nebeneinander: 01 Mündlichkeit, Austausch in Echtzeit; 02 Prozess, der Lernweg wird bewertet; "
            "03 Kontext, spezifische nicht öffentliche Informationen; 04 Kollaboration, Gruppenarbeit und kreative Leistungen. "
            "Nach Gmeiner 2025, CC BY-SA 4.0.")
    return svg(W, H, title, desc, body, "Abb. „Vier Säulen“ (Kapitel 5, @fig-gmeiner-pillars). Inhalt nach Bernhard Gmeiner (2025), CC BY-SA 4.0; eigene Darstellung.")


# ---------------------------------------------------------------- O*NET
def onet():
    aufgaben = [
        "Vorlesungen vorbereiten und halten",
        "Studienleistungen bewerten und benoten",
        "Diskussionen anregen und moderieren",
        "Kursmaterial erstellen (Syllabus, Übungen, Handouts)",
        "Fachlich auf dem Laufenden bleiben",
        "Curricula und Kursinhalte planen und überarbeiten",
        "Anwesenheit, Noten und Akten führen",
        "Forschen und publizieren",
        "Prüfungen erstellen, durchführen und bewerten",
        "Sprechstunden anbieten",
        "Mit dem Kollegium zusammenarbeiten",
        "Zu Studium und Berufsweg beraten",
        "Kurswebseiten erstellen und pflegen",
        "Mit Unternehmen kooperieren (Programme, Praktika)",
        "In Gremien der Hochschule mitarbeiten",
        "Lehrmaterial und Lehrbücher auswählen",
        "Literaturlisten zusammenstellen",
        "An Veranstaltungen teilnehmen (Campus, Region)",
        "Neue Kolleginnen und Kollegen betreuen",
        "Verwaltungsaufgaben übernehmen, etwa im Dekanat",
        "Bei Studierendengewinnung und Vermittlung mitwirken",
        "Studentische Organisationen beraten",
        "Abschluss-, Praxis- und Forschungsarbeiten betreuen",
        "Unternehmen und Behörden beraten",
        "Forschungsanträge schreiben",
    ]
    W, row, y0 = 900, 30, 30
    links = aufgaben[:13]
    H = y0 + len(links) * row + 20
    body = ""
    for i, a in enumerate(aufgaben):
        col, k = (0, i) if i < 13 else (1, i - 13)
        x = 20 + col * 445
        y = y0 + k * row
        if k % 2 == 0:
            body += f'<rect x="{x}" y="{y - 20}" width="430" height="{row}" fill="{PALE}"/>\n'
        body += t(x + 30, y, f"{i + 1}", 14, GREY, "end")
        body += t(x + 42, y, a, 15, INK)
    title = "25 Aufgaben von Lehrenden an Hochschulen am Beispiel Business Teachers, Postsecondary"
    desc = "Nummerierte Liste in zwei Spalten: " + "; ".join(f"{i + 1} {a}" for i, a in enumerate(aufgaben)) + \
           ". Quelle: O*NET OnLine, CC BY 4.0, übersetzt und gekürzt."
    return svg(W, H, title, desc, body, "Abb. „O*NET-Aufgaben“ (Kapitel 4, @fig-onet-tasks). Enthält Informationen aus O*NET OnLine (USDOL/ETA), CC BY 4.0; übersetzt und gekürzt.")


if __name__ == "__main__":
    for name, fn in [("bloom-nutzung", bloom), ("interaktionsarten", interaktion),
                     ("vier-saeulen", saeulen), ("onet-aufgaben", onet)]:
        (OUT / f"{name}.svg").write_text(fn(), encoding="utf-8")
        print("geschrieben:", OUT / f"{name}.svg")
