# Status Reduktion Kap. 1 und Vorwort (Sitzung K1, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md` (Z4, Z6, Z8, Abschnitt 3), `PLAN-zuspitzung-drei-ringe-2026-11-13.md` Abschnitte 2–4, `PRUEFUNG-interaktionen-2026-11-13.md` Abschnitt 11, Hinweise aus `STATUS-reduktion-k2-2026-11-13.md`. Alle Pakete hat Roman per MC freigegeben (Paketdatei `PAKETE-kuerzung-k1-2026-11-13.md`).

## Ergebnis

- **Kap. 1** (`kapitel01-einleitung.qmd`), Körper ohne Kapitelend-Apparat: 2.622 → 1.870 Druckwörter (`scripts/zaehle_druck.py`, mit Apparat 3.602 → 2.809).
  - Stützräder-Film direkt nach den Lernzielen (Z8): Anker `vid-stuetzraeder`, Player `kap02-stuetzraeder` (iframe-ID unverändert), Kasten „So entstand dieser Film“ online; Druck: Standbild `images/druck/video-stuetzraeder.png` + Selbsttest mit Verweis auf `@sec-loesung-stuetzraeder`. Der QR-Code im Standbild zeigte noch auf Kap. 2 und ist ersetzt (zeigt auf `kapitel01-einleitung.html#vid-stuetzraeder`; Skript `scripts/qr-kapitel01-reduktion.py`, auch `images/qr/qr-video-stuetzraeder.png`).
  - Verbreitung Kennenswert (Z4): Druck 154 Wörter (3 Sätze mit Fähigkeitsüberhang + Economic-Index-Satz + QR `images/qr/qr-nutzung.png`), Prüfkasten `ez-k1-1` bleibt im Druck. Online alles wie bisher inkl. Bloom-Abbildung (nur online, MC), „Höher oder tiefer“ und Making-of-Kasten. Der Druckkasten „Raten Sie zuerst“ ist entfernt.
  - Buchübersicht als Tabelle `tbl-buchuebersicht` (379 Wörter): Kapitel | Frage, die es beantwortet | Was Sie dort finden; die „Fünf Fragen“ stecken in der mittleren Spalte; Teil I/II und Anhänge aus der Vorwort-Übersicht; Schluss mit Link auf die Lernpfade und QR (`qr-galerie-vorwort.png`) zur Vorwort-Galerie (Z6). Galerie „Fünf Formate“ samt QR-Abbildung raus.
  - Schlüsselbegriffe: zehn Beispielsätze statt Definitionen.
- **Vorwort** (`index.qmd`): 1.864 → 659 Druckwörter (≈ 100 davon ein HTML-Kommentar, den der Zähler mitzählt).
  - Lernpfade Kennenswert: Druck 3 Sätze + Liniennetz `fig-lernpfade` + QR `images/qr/qr-lernpfade.png`; Selbsttest-Kasten und Linie 5 nur online.
  - „Neue Möglichkeiten“ samt Galerie nur online; „37 Beispiele“ → „In den Kapiteln dieses Buchs stecken 29 Beispiele“ (Kap. 1: 2, 2: 9, 3: 3, 4: 1, 5: 6, 6: 3, 7: 5); Linie 5 und Updates-Liste ohne Zahl; Updates-Punkt zur Galerie Kap. 1 entfernt.
  - „Übersicht“ nur online (Startseite), mit Verweis auf `@tbl-buchuebersicht`.
  - „Wie dieses Buch lehrt“: Druck Kurztext + `tbl-mechanismen` = 339 Wörter; online ganze Prosa (Satz zur Galerie gestrichen, Tabellenzeile „Galerie in Kapitel 1“ gestrichen).
- **Glossar** (`glossar.qmd`, per MC freigegeben): neu Fähigkeitsüberhang, Auslagerung des Denkens, Leitplanke, Anleitung statt Ermutigung; „Testgestütztes Lernen“ nennt jetzt häufige kleine Tests (*practice testing*).
- Beide Tabellen (Kap. 1 und Vorwort) stehen in `::: {.table-responsive}`, damit sie bei 390 px im Rahmen scrollen.

## Prüfungen

`quarto render --to html` (1.8.25) ohne Warnungen außer den bekannten OJS-Zeilennummern; keine `?@`-Verweise in `docs/`; Download-PDF/EPUB aus Git zurückgeholt. Playwright 1200/390 px (Kap. 1, Vorwort, Glossar): keine JS-Fehler, keine 404, Film-Player und „Höher oder tiefer“ laden, 10 Schlüsselbegriffe-Karten. Die Restbreite bei 390 px (Kap. 1: 20 px, Vorwort: 67 px, Glossar: 8 px) ist auf `main` vorher identisch (Navbar-Überschrift, siehe Status K2). Kein PDF-Testrender (TeX im Container fehlt).

## Repo

Branch `reduktion-k1` (Commit `0583e39`, zusammengeführt mit `main` inkl. K4 als `6906c6d`), gemergt nach `main` als `f986924`, danach mit K3 (`eafef7f`) und der K3-Statusnotiz zusammengeführt: `main` @ `ba3d46e`, gepusht.

## Hinweise an folgende Sitzungen

- **Anhang/Lösungshinweise:** Die Druckabbildung `fig-hoeher-tiefer-loesung` in `kapitel10-appendix05-loesungshinweise.qmd` verweist auf `@sec-spiel-ki-aufgaben`; dieser Abschnitt steht nur noch online, der gedruckte Kasten „Raten Sie zuerst“ ist weg. Im PDF entstünde `?@` → Druckabbildung streichen oder auf QR umstellen. `sec-loesung-stuetzraeder` wird jetzt aus Kap. 1 referenziert und bleibt.
- **PB (Welle 3):** `scripts/praxisbeispiele.py`: Stützräder-Link auf `kapitel01-einleitung.qmd#vid-stuetzraeder`, Linktext „Kapitel 1, Einleitung“; Eintrag „Galerie aus Kapitel 1“ ersetzen durch Folie mit Regelwerk und Rollenspiel (Galerie-Datei `interactions/galerie-kapitel01.html` und `images/qr/qr-galerie-kapitel01.png` sind ungenutzt). Vorwort-Galerie (`interactions/galerie-vorwort.html`, Aria-Label „Zehn Praxisbeispiele“) auf verbleibende Elemente abgleichen (Agenten-Engpass ist raus). Ändert sich die Zahl der Elemente in den Kapiteln, „29 Beispiele“ in `index.qmd` nachziehen.
- **Druck/Rechte:** `scripts/druck-abbildungsrechte.py` führt `fig-llm-nutzung-bloom`; die Abbildung steht nur noch online.

## Startauftrag nächste Sitzung

Welle 2 ist mit K4, K3 und K1 gemergt. Welle 3 nach `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, Abschnitt 5: PB (`reduktion-pb`) und Anhang/Lösungshinweise (`reduktion-anhang`), jeweils von `main` @ `ba3d46e` oder neuer, mit den Hinweisen oben.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gemergt: ja)
