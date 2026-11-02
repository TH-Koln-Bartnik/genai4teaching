# Status: Anhänge A, C, D, E vom Netz genommen (02.11.2026, nachmittags)

## Auftrag Roman
Alle Anhänge außer B (Prompt-Sammlung) und F (Lösungshinweise) aus Online-Version und Gliederung nehmen; Inhalte sollen später gekürzt in die Kapitel wandern. Auf Startseite/Vorwort ankündigen: im November starke Überarbeitung, nächste stabile, komplett erneuerte Fassung Ende November.

## Entscheidungen Roman (MC in dieser Sitzung)
- Buchstaben: automatische Neu-Nummerierung. Prompt-Sammlung = **Anhang A**, Lösungshinweise = **Anhang B**.
- Mit raus: auch „Online-Material zu Anhang D“. Bleiben: Glossar, Transparenzhinweis, Schreibtrainer, Modellübersicht, Forschungsstand, Exkurs Ressourcenverbrauch.
- Querverweise auf entfernte Anhänge: streichen (Klammerverweise löschen, reine Verweissätze streichen, Inhalt bleibt).

## Umgesetzt (`main` @ `4457a73` Quellen, `2cba2c1` docs/, gepusht, live geprüft)
- `_quarto.yml`, `_quarto-web.yml`: Anhänge A, C, D, E und D-Material entfernt.
- Quelldateien nach `_archiv-anhaenge/` verschoben (Quarto ignoriert `_`-Ordner); README dort. Relative Pfade in diesen Dateien stimmen nach dem Verschieben nicht mehr.
- 48 Ersetzungen in Kap. 1–6, Glossar, Prompt-Sammlung; feste Nennungen „Anhang B“ → „Anhang A“, „Anhang F“ → „Anhang B“ (auch Streich-Test-Widget, `_einbau/`, `scripts/streich-test-daten.py`).
- Kap. 1, Fünf Fragen: Frage 3 verweist jetzt auf `@sec-agenten-praxis`, Frage 4 auf `@sec-bsp-lernsong-forecast`.
- Kap. 4 (Simulator): Satz zu Talk2Transform/Anhang C ersetzt durch „Sprachmodi, die mit Stimme statt Text arbeiten, machen solche Simulationen realistischer [@barra2024].“
- Lernpfade: Station „Praxis-Primer“ entfällt; **Linie 3 hält jetzt an Kapitel 5**; Linie 4 endet an „Anhang A“ (Prompt-Sammlung). Karte (`images/lernpfade/lernpfade-karte.svg`) und Widget neu erzeugt.
- Galerie Kap. 1: Folie ohne Link (Primer weg), Kicker „Präsentation“; `images/druck/folie-mit-regeln.png` als Ressource in `_quarto.yml`.
- Forschungsstand: Status „Anhang D“ → „online“, „Kasten, Anhang D“ → „Kasten“. Transparenz: Satz zu Transparenzabschnitten in C/D gestrichen.
- Vorwort: Kasten (nur online) „Im November 2026 wird dieses Skript stark überarbeitet“, nächste stabile Fassung Ende November 2026; Übersicht nennt sechs Kapitel und zwei Anhänge.
- Rebase auf die parallel gemergten Kap. 4–6 (Kapitelauftakt): ein Konflikt in `kapitel04.qmd` gelöst (Prüfkasten ez-k4-3 behalten, Verweis auf @sec-d-modus gestrichen).

## Prüfung
- `quarto render --to html` (1.8.25): nur die 36 bekannten OJS-Warnungen, keine `?@`-Verweise, alte Anhangseiten aus `docs/` entfernt, `search.json` ohne Treffer.
- Playwright: Seitenleiste zeigt A Prompt-Sammlung, B Lösungshinweise, Glossar, Transparenz, Online-Seiten; keine JS-Fehler; Galerie-Folie und Lernpfad-Karte geprüft.
- Live: `anhang-primer.html` → 404; Startseite zeigt Hinweis und neue Übersicht.

## Offen
1. **Download-PDF/EPUB in `docs/` sind noch der alte Stand mit allen Anhängen.** Neu rendern (`--profile print --to pdf`, dann `--to epub`; texlive-fonts-extra nötig) oder Downloads vorübergehend aus der Navigationsleiste nehmen.
2. Inhalte aus `_archiv-anhaenge/` gekürzt in die Kapitel integrieren (Rollenspiele → 4.4, Tutoren/Agenten/Arbeitsumgebung → 2 und 4.3, Primer → 4 und 6, Einschränkungen in Prompts → 2).
3. Projekt-Statusnotizen älterer Sitzungen verweisen noch auf Anhang C–E und „Anhang F“; beim Weiterarbeiten neue Buchstaben beachten.
