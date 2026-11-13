# STATUS: Merge `primer-anhang` und `best-practice-vorreiter` nach `main` (13.11.2026, ca. 16:45)

Anlass: Schritt (b) aus `STATUS-zusammenfuehrung-reduktion-2026-11-13.md`. Der Branch `best-practice-vorreiter` musste vor Welle 1 (K5, K67) geklärt sein, weil er Kap. 5 und Kap. 7 ändert.

## Befund

`best-practice-vorreiter` sitzt auf `primer-anhang` (`8ae8279`). Eigene Änderungen nur in Kap. 5, Kap. 7 und einer Online-Zeile in Anhang C, dazu fünf Quellen und zwei QR-Codes. Probe-Merge: einziger Konflikt in `references.json` (beide Seiten hängten an derselben Stelle an).

## Entscheidungen Roman (MC, 13.11.)

1. **S-A „Papier im Raum, KI im Hintergrund“** (Kap. 7, `sec-bsp-papier-im-raum`): behalten als Kennenswert (online ausführlich, Druck ein Absatz + QR), angeglichen: Steckbrief „Wissensform: Verstehen“ statt „semantisch“; der Levine-Befund steht nur noch als Verweis auf Kap. 3 (`@sec-aufgaben`), ohne Zahl.
2. **S-F Astronomiekurs Harvard** (Kap. 5, `sec-kurs-integration`): Druck ein Satz + QR statt Absatz; Kasten online unverändert.
3. **P-B MIT-Schritt** (Kap. 5, „Formate nach den vier Säulen“): behalten.
4. Beide Branches jetzt mergen; Primer-Grafiken danach auf eigenem Branch.

## Umgesetzt

- `main` ← `primer-anhang` (Druckkürzung Anhang C) ← `best-practice-vorreiter`; `references.json`: Vereinigung beider Seiten, 516 Einträge, keine doppelten Schlüssel (neu: `stubbs2026astronomy`, `bokcenterideas`, `bokcenter2026fall`, `bokcenter2026summer`, `mittllcompanion`).
- Druckwörter danach: Kap. 5 8.598, Kap. 7 8.002, Anhang C 1.293.
- `quarto render --to html` (1.8.25): 36 Warnungen (die bekannten OJS-Warnungen), keine `?@` im ganzen Buch; `docs/` committet, Download-PDF/EPUB aus Git zurückgeholt (Druck-PDF nicht neu gerendert).
- Playwright 1200/390 px: Anker `#bsp-astronomie-harvard`, `#sec-bsp-papier-im-raum` und `anhang-primer.html` erreichbar, keine JS-Fehler. Querscrollen bei 390 px (Kap. 5: 753 px, Kap. 7: 646 px) bestand auf `main` vorher genauso.

## Offen

1. Primer: Druckgrafiken 0-2, C-4, D-4 und Druckzwillinge A-5/A-8, B-5/B-8, Tabellenumbrüche C.1/C.3 (Startauftrag in `claude/primer/STATUS-primer-druckkuerzung-2026-11-10.md`; jetzt Branch von `main` statt `primer-anhang`).
2. Kap. 7 nutzt außer in S-A weiter syntaktisch/semantisch/pragmatisch; Umstellung in Sitzung K67.
3. Querscrollen bei 390 px in Kap. 5 und 7 (Altbestand).
4. Branches `primer-anhang` und `best-practice-vorreiter` sind gemergt und können gelöscht werden.

## Startauftrag nächste Sitzung

Welle 1 nach `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, Abschnitt 5 (K67, K2, K5 parallel). In K67 vorher `k7-kasten-holbein` mergen.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (`main`, gemergt: ja)
