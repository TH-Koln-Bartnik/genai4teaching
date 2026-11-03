"""Streich-Test (Kap. 2.4.1): Daten aus urteile.md und den beiden Quiz-Erstellern zusammenführen.

Laiensicht: Das Skript ist die Packliste des Elements. Es liest die Urteils-Tabelle,
holt den alten und den neuen Prompt aus der Versionsgeschichte des Buchs (git),
zählt die Wörter und schreibt alles an drei Stellen: in die HTML-Datei des Elements,
in den Druckkasten und in die Lösung im Anhang. So kann keine dieser Stellen
von der Tabelle abweichen.

Aufruf im Repo-Wurzelordner:
  python3 -I scripts/streich-test-daten.py notes/streich-test/urteile.md
Optionale Argumente: --alt <git-ref> (Standard df0f9bc), --neu <git-ref> (Standard origin/anhangB-prompts-neu)
"""
import argparse
import json
import re
import subprocess
import sys

ANHANG = "kapitel07-appendix02-prompt-sammlung.qmd"
HTML = "interactions/streich-test-prompting.html"
DRUCK = "_einbau/streich-test-druck.qmd"
LOESUNG = "_einbau/streich-test-loesung.qmd"


def quiz_block(ref):
    """Inhalt des Codeblocks im Abschnitt Quiz-Ersteller zum angegebenen Stand."""
    text = subprocess.run(["git", "show", f"{ref}:{ANHANG}"], capture_output=True, text=True, check=True).stdout
    start = text.index("{#sec-prompt-quiz-maker}")
    rest = text[start:]
    a = rest.index("``` markdown") + len("``` markdown")
    b = rest.index("```", a)
    return rest[a:b].strip("\n").strip()


def woerter(t):
    """Zählregel: jedes durch Leerraum getrennte Stück mit mindestens einem Buchstaben oder einer Ziffer."""
    return sum(1 for w in t.split() if re.search(r"[0-9A-Za-zÄÖÜäöüß]", w))


def lies_urteile(pfad):
    zeilen = []
    for z in open(pfad, encoding="utf-8"):
        if not re.match(r"^\| \d+ \|", z):
            continue
        teile = [t.strip() for t in z.strip().strip("|").split(" | ")]
        if len(teile) != 9:
            sys.exit(f"Tabellenzeile mit {len(teile)} statt 9 Spalten: {z[:60]}")
        nr, text, herkunft, urteil, marke, quellen, zitat, begr, neu = teile
        assert urteil in ("streichen", "behalten", "umformulieren"), urteil
        assert marke in ("Labor-Doku", "Studie", "Folklore"), marke
        assert herkunft in ("Original", "ergänzt"), herkunft
        zeilen.append(dict(nr=int(nr), text=text.replace("<br>", "\n"), herkunft=herkunft, urteil=urteil,
                           marke=marke, quellen=[q.strip() for q in quellen.split(";")], zitat=zitat,
                           begruendung=begr, neu=neu))
    return zeilen


# Reihenfolge der Anzeige: Abschnittsmarken des alten Prompts, Auslassungen, Testzeilen
ANZEIGE = [
    ("marke", "[Role/Rolle]:"), ("zeile", 1), ("zeile", 2),
    ("marke", "[Task/Aufgabe]:"), ("aus", ""), ("zeile", 3), ("aus", ""), ("zeile", 4),
    ("aus", ""), ("zeile", 5), ("aus", ""), ("zeile", 6), ("aus", ""), ("zeile", 7),
    ("aus", ""), ("zeile", 8), ("zeile", 9),
    ("marke", "[Format/Format]:"), ("aus", ""), ("zeile", 10),
]


def main():
    p = argparse.ArgumentParser()
    p.add_argument("urteile")
    p.add_argument("--alt", default="df0f9bc")
    p.add_argument("--neu", default="origin/anhangB-prompts-neu")
    a = p.parse_args()

    zeilen = lies_urteile(a.urteile)
    assert [z["nr"] for z in zeilen] == list(range(1, 11)), "erwartet Zeilen 1–10"
    alt, neu = quiz_block(a.alt), quiz_block(a.neu)

    # Jede Originalzeile muss wörtlich im alten Prompt stehen
    for z in zeilen:
        if z["herkunft"] == "Original":
            for teil in z["text"].split("\n"):
                if teil not in alt:
                    sys.exit(f"Zeile {z['nr']} nicht wörtlich im alten Prompt: {teil!r}")
        else:
            assert z["text"] not in alt
    for m in ("[Role/Rolle]:", "[Task/Aufgabe]:", "[Format/Format]:"):
        assert m in alt, m

    neu_labels = [l.split(":")[0] for l in neu.splitlines() if re.match(r"^(Ziel|Wozu|Zuerst|Material|Abnahme):", l)]
    assert neu_labels == ["Ziel", "Wozu", "Zuerst", "Material", "Abnahme"], neu_labels
    for z in zeilen:
        assert z["neu"] in ("",) + tuple(neu_labels), z["neu"]

    w_alt, w_neu = woerter(alt), woerter(neu)
    daten = dict(
        stand="2026-11-02",
        alt_ref=a.alt, neu_ref=a.neu, neu_entwurf=a.neu not in ("main", "origin/main"),
        woerter_alt=w_alt, woerter_neu=w_neu,
        aenderung_pct=round(100 * (w_neu - w_alt) / w_alt),
        alt=alt, neu=neu, anzeige=ANZEIGE, zeilen=zeilen,
    )
    js = json.dumps(daten, ensure_ascii=False, separators=(",", ":"))

    html = open(HTML, encoding="utf-8").read()
    html, n = re.subn(r"/\*DATEN-START\*/.*?/\*DATEN-ENDE\*/",
                      lambda _: "/*DATEN-START*/" + js + "/*DATEN-ENDE*/", html, flags=re.S)
    assert n == 1, "Markierung DATEN-START/ENDE fehlt im HTML"
    open(HTML, "w", encoding="utf-8").write(html)

    schreibe_druck(zeilen)
    schreibe_loesung(zeilen, w_alt, w_neu)

    print(f"alter Prompt ({a.alt}): {w_alt} Wörter; neuer Prompt ({a.neu}): {w_neu} Wörter; "
          f"Änderung {daten['aenderung_pct']} %")
    for z in zeilen:
        print(f"  {z['nr']:>2} {z['urteil']:<14} {z['marke']:<10} {z['herkunft']:<8} {z['text'][:60]!r}")
    print("Urteile:", {u: sum(z["urteil"] == u for z in zeilen) for u in ("streichen", "behalten", "umformulieren")})


def tex(t):
    """Text für LaTeX schützen (Sonderzeichen), Zeilenumbrüche innerhalb einer Zelle als \\newline."""
    ersatz = {"\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "$": r"\$", "#": r"\#", "_": r"\_",
              "{": r"\{", "}": r"\}", "~": r"\textasciitilde{}", "^": r"\textasciicircum{}"}
    t = "".join(ersatz.get(c, c) for c in t)
    return t.replace("\n", r"\newline ")


def schreibe_druck(zeilen):
    """Druckkasten: Einleitung, Tabelle mit zwei Ankreuzspalten (streichen? / Sicherheit), QR.
    Die Tabelle ist ein LaTeX-Rohblock (tabular, nicht longtable), weil lange Tabellen im Kasten nicht erlaubt sind."""
    reihen = []
    for z in zeilen:
        erg = r" \emph{(ergänzt)}" if z["herkunft"] == "ergänzt" else ""
        reihen.append(f"{z['nr']}. & {tex(z['text'])}{erg} & $\\square$ & $\\square$\\,1\\enspace$\\square$\\,2\\enspace$\\square$\\,3 \\\\[2pt]")
    tabelle = "\n".join([
        r"\par\smallskip\small",
        r"\begin{tabular}{@{}r@{\hspace{0.5em}}>{\raggedright\arraybackslash}p{\dimexpr\linewidth-15em\relax}@{\hspace{0.8em}}c@{\hspace{0.8em}}l@{}}",
        r"& \textit{Zeile} & \textit{streichen?} & \textit{Sicherheit} \\[2pt]",
        *reihen,
        r"\end{tabular}",
        r"\normalsize\par\smallskip",
    ])
    text = f"""<!-- Automatisch erzeugt von scripts/streich-test-daten.py aus notes/streich-test/urteile.md. Nicht von Hand ändern. -->
::: {{.content-visible unless-format="html"}}
```{{=latex}}
% Kasten nicht mit allein stehendem Titel am Seitenende beginnen (bedingter Seitenumbruch ohne Zusatzpaket)
\\par\\vspace{{0pt plus 14\\baselineskip}}\\pagebreak[3]\\vspace{{0pt plus -14\\baselineskip}}
```

::: {{.callout-tip title="Der Streich-Test: Was würden Sie heute streichen?"}}
Die Zeilen stammen aus dem Quiz-Ersteller, wie er 2024 im damaligen Prompt-Anhang stand. Die Zeilen dazwischen sind ausgelassen, die Zeilen 9 und 10 sind ergänzte Beispielzeilen. Kreuzen Sie an, welche Zeilen Sie bei einem heutigen Reasoning-Modell streichen würden, und wie sicher Sie sind (1 geraten, 2, 3 sicher).

```{{=latex}}
{tabelle}
```

Die Auflösung mit Quellen steht in den Lösungshinweisen (@sec-loesungshinweise). Online gibt es den Test zum Anklicken, mit Begründung je Zeile und dem neuen Prompt daneben: <https://th-koln-bartnik.github.io/genai4teaching/kapitel02-grundlagen.html#sec-streichtest>

![](images/qr/qr-streich-test.png){{width="16%"}}
:::
:::
"""
    open(DRUCK, "w", encoding="utf-8").write(text)


def schreibe_loesung(zeilen, w_alt, w_neu):
    marke = {"Labor-Doku": "■ Labor-Doku", "Studie": "● Studie", "Folklore": "▲ Folklore"}
    zitier = lambda qs: "; ".join("@" + q for q in qs)
    zeilen_md = []
    for z in zeilen:
        neu = f" Im neuen Prompt: *{z['neu']}*." if z["neu"] else ""
        zeilen_md.append(f"**{z['nr']}. {z['urteil'].capitalize()}** ({marke[z['marke']]}). {z['begruendung']}{neu} [{zitier(z['quellen'])}]")
    text = f"""<!-- Automatisch erzeugt von scripts/streich-test-daten.py aus notes/streich-test/urteile.md. Nicht von Hand ändern. -->
### Streich-Test (Kapitel 2) {{#loes-streichtest .unnumbered}}

Gestrichen werden die Zeilen 2, 3, 9 und 10; behalten werden 5 und 6; bei 1, 4, 7 und 8 bleibt der Inhalt und ändert sich die Form. Wer eine Umformulierungszeile gestrichen oder behalten hat, lag halb richtig. Merken Sie sich besonders die Zeilen, bei denen Sie „sicher“ angekreuzt und danebengelegen haben. Quellenmarken: ■ Labor-Doku (Leitfaden eines KI-Labors), ● Studie, ▲ Folklore (ein Ratschlag, den kein Leitfaden je empfahl).

{chr(10).join(z + chr(10) for z in zeilen_md)}
Der neu gefasste Quiz-Ersteller in Anhang A (@sec-prompt-quiz-maker) hat {w_neu} statt {w_alt} Wörter. Er nennt Ziel, Wozu, Zuerst (die Fragen an Sie), Material und Abnahme; das Material, also Skript oder Folien, fehlte in der alten Fassung ganz.
"""
    # Zahlen und Zeilenlisten in der Einleitung gegen die Tabelle prüfen
    nach = lambda u: [z["nr"] for z in zeilen if z["urteil"] == u]
    assert nach("streichen") == [2, 3, 9, 10] and nach("behalten") == [5, 6] and nach("umformulieren") == [1, 4, 7, 8], \
        "Einleitungssatz der Lösung an geänderte Urteile anpassen"
    open(LOESUNG, "w", encoding="utf-8").write(text)


if __name__ == "__main__":
    main()
