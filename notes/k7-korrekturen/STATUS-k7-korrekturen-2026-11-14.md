# Status: Korrekturen Kap. 7 (14.11.2026, Sitzung k7-korrekturen)

Auftrag Roman (14.11., 08:43): Korrekturliste zu Kap. 7 „Fallbeispiele aus der Lehre“.

## Stand
- Branch `k7-korrekturen` von `pdf-testbau` @ `c0425b1`, gepusht, **am 14.11. nach `main` gemergt** (siehe unten). Zwei Commits:
  - `edc3a72` Kap. 7: Korrekturen Roman 14.11.
  - `a416ad9` Anonymisierung außerhalb Kap. 7 (BWL-Tutor, SSCM-Modul)
- Patch beider Commits (Sicherung): `claude/k7-korrekturen/k7-korrekturen-2026-11-14.patch`, auch in Tresorit. Passt auf `pdf-testbau`, `kurztitel-fussnoten` und `main` (`git apply --check` für Commit 1 geprüft).
- Druck-PDF gerendert (Quarto 1.8.25, `--profile print`, Stand nach Commit 1): Exit 0, 280 Seiten; Kap. 7 = PDF-Seiten 177–210 (gedruckt 167–200). Seiten 184, 190, 195 (gedruckt) als Bild geprüft. Auszug: Tresorit `Projektnotizen-Claude/k7-korrekturen/kapitel07-korrigiert-2026-11-14.pdf`.

## Umgesetzt
Dateien: kapitel07-artefakte.qmd, Anhang B Lösungshinweise, index.qmd, kapitel01, kapitel02, kapitel06, Anhang A (Prompt Quiz me), Lernpfad-Karte (SVG und Skript).

1. Titel nur „Fallbeispiele aus der Lehre“ (auch Vorwort-Liste, Kap.-1-Tabelle, Anhang-B-Überschrift, Lernpfad-Karte). Dateiname `kapitel07-artefakte.qmd` bleibt (URLs, QR-Codes).
2. Anonymisiert: „In einer BWL-Grundlagenveranstaltung“, „In einem englischsprachigen Modul zu Sustainable Supply Chain Management …, im Folgenden kurz Lieferkettenmodul“ (alle „SSCM“ ersetzt). Jahresangaben in Kap. 7 entfernt (Tutor, Quiz-Simulator 2025, BWL-Memory, WAGP, Karriere-Bots, Wahlpflichtmodul, Guided Project, Teaser-Unterschrift). Die „Stand 10/2026“-Kastentitel bleiben. Nach Romans Entscheidung (MC) auch außerhalb von Kap. 7: Vorwort (2 Stellen), Kap. 1 Herkunftszeile, Kap. 2, Kap. 6 (Text und Bildunterschrift `fig-tutor-bot-bwl`), Anhang A.
3. Tutor: „drei Kennzahlen, die wir erheben“ ersetzt durch drei Prüffragen, die eine Auswertung beantworten sollte; neuer Satz „Eine systematische Auswertung seiner Nutzung gibt es bisher nicht.“ Lernfragen 3 und 6 am Kapitelende samt Lösungen angepasst.
4. Praxispartner: ohne ECTS/Präsenzstunden, ohne 70/30-Prüfungsanteile und Phasenplan („überwiegend mündlich am Prototyp“); die fünf Repository-Regeln auf einen Satz verdichtet.
5. Backhaus Kaya: auf Umriss und Logik gekürzt (keine Stückzahlen, Preise, Q1–Q6). Lernfrage: „Was ginge didaktisch verloren, wenn eine generierte Fallstudie ihre Lösung, hier den Engpass, gleich im ersten Absatz nennen würde?“ Schlüsselbegriff-Beispiel „Former“ → „Mitarbeiter am falschen Arbeitsschritt“.
6. Satz „Im Modul Supply Management setzen wir die Verhandlung im Dezember 2026 …“ gestrichen.
7. Bullwhip-Lernfrage neu (Rechner statt Planspiel und Nachgespräch?), Lösung stützt sich auf Debriefing-Evidenz (tannenbaum2013debriefs, wukatok2006learning, sitzmann2011metaanalytic).
8. Nebensätze: Konkretheitsabbau („schrittweise Weg vom anschaulichen Alltagsfall zur abstrakten Formel“), Gerüst/scaffolding („vorübergehende Hilfen …, die mit wachsendem Können wieder wegfallen“).
9. CO₂: Fix lag schon auf `pdf-testbau` (Befund B3, `\newunicodechar{₂}` in `include/preamble.tex`); im neuen PDF als Tiefstellung geprüft. Romans PDF stammte vermutlich aus einem Bau vor B3. `pdf-testbau` muss also vor oder mit `k7-korrekturen` gemergt werden.
10. Postersession: nur noch „Fragen zu Zahlen, Modell und verwendeten Fachartikeln“ je Gruppe; Lösungshinweis ohne „Vorhersagen“.
11. Schlüsselbegriffe-Übung: „Herkunft: …“ → nur Kurzverweis in Klammern. Im Druck erscheint die Herkunft in der Übungstabelle ohnehin nicht.

## Entscheidungen Roman (MC, 14.11.)
- Push-Zugriff erneut anfragen → erteilt, gepusht.
- Andere Kapitel ebenfalls anonymisieren → erledigt.
- WAGP mit vollem Namen und Link zur Wochenseite `sscm-2026-student` (Teaser, nur online) bleiben.
- Ablage zusätzlich in Tresorit → erledigt.

## Hinweis für den Kurztitel-Einbau (Branch `kurztitel-fussnoten`)
`vorschlag.json` enthält noch die alten Unterschriften von `fig-druck-widget-linie` („aus dem SSCM-Modul“) und `fig-tutor-bot-bwl` („BWL Grundlagen … Januar 2026“). Beim Einbau nach ID zuordnen und Fußnotentexte anpassen: „Lieferkettenmodul“; Tutor-Fußnote ohne „Januar 2026“.

## Merge nach main (14.11., ca. 10:30, Romans Wahl „a“)
- `main` @ `01e2fdb` enthält jetzt `pdf-testbau` + `k7-korrekturen` und den parallel gemergten Stand Kap. 8 Bauanleitungen / Kap. 9 Ausblick (`db5a27d`).
- Konflikte: Kapitelliste im Vorwort und Tabelle in Kap. 1 (neuer Kap.-7-Titel plus Kap. 8/9 übernommen); sonst nur erzeugte Dateien in `docs/`.
- Weiterleitungsseite `kapitel06-fallbeispiele.html` (Quelle und docs) auf den neuen Kap.-7-Titel gesetzt.
- Gerendert nach dem Merge: PDF (`--profile print`, mit `texlive-lang-german`): Exit 0, 282 Seiten, keine `??`; EPUB Exit 0; HTML Exit 0, `docs/` neu gerendert und gepusht (online live über GitHub Pages).
- **Download-PDF und -EPUB in `docs/` nicht ersetzt** (Konvention: nur nach Rückfrage).
- `kurztitel-fussnoten` ist **nicht** gemergt; der Startauftrag der Kurztitel-Sitzung gilt weiter. `main` enthält `pdf-testbau` jetzt schon, Konflikte erwartbar bei den Unterschriften `fig-druck-widget-linie`, `fig-tutor-bot-bwl` (siehe Hinweis oben) und in `docs/`.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, `main` @ `01e2fdb`)
