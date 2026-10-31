# Status P7: Einbau der Praxis-Primer (31.10.2026, 17:00)

Grundlage: `claude/PLAN-primer-lehrende-2026-10-30.md` (Abschnitt 8, P7), Status P1/P2, P4, P6. Branch `primer-lehrende` (von `main` `03f3bbf`). Status: **freigegeben und nach `main` gemergt (31.10.2026, 17:50; `2578206` + Render `3ee5c0f`).** `docs/` neu gerendert in der README-Reihenfolge; das Download-PDF ist die Druckvorlage.

## Entscheidungen Roman (31.10.2026)

1. **Freigabe** von Anhang E einschließlich Primer C (neu) und Primer D (anonymisierte F6-Befunde).
2. **Umfang:** Arbeitsablauf und Prüfliste je Primer nur online, im Druck ein Verweissatz (Ziel: rund 15 statt 20 Seiten). Prinzip, Weiche-Tabellen, Empfehlungen, Umsetzung und Lücke bleiben gedruckt.
3. **Kürzung in frischer Sitzung.**

## Startauftrag nächste Sitzung (Kürzung Anhang E)

> Lies `notes/2026-10-31-status-p7-primer-einbau.md` im Repository `genai4teaching` (Branch `main`). Setze in `anhang-primer.qmd` für die Primer A–D die Blöcke „Arbeitsablauf mit KI“ und „Prüfliste“ in `::: {.content-visible when-format="html"}` und ergänze im Druck je einen Satz, dass Ablauf und Prüfliste in der Vollfassung online stehen (QR-Code der Primer-Abbildung). Die QR-Abbildung steht in allen vier Primern erst nach der Prüfliste; der Verweissatz nennt sie deshalb mit `@fig-…`. Danach Druck-PDF rendern (`quarto render --profile print --to pdf --output-dir /tmp/print`), Seitenzahl von Anhang E messen, Tabellenumbrüche E.1–E.3 prüfen (ggf. `tbl-pos` oder Kürzung), dann `quarto render` nach README, Download-PDF ersetzen, Statusnotiz fortschreiben, Merge nach `main`. Tresorit-Ordner `0_GenAI` per Multiple Choice freigeben lassen.

## Erledigt

- **Primer C Lernsongs neu geschrieben** (P3 war nicht bearbeitet worden; Entscheidung Roman 31.10.: jetzt schreiben, Umsetzung am Forecast-Song aus Kapitel 6). Grundlage: Regelwerk Lernsongs (28.10.), Prompt-Vorlagen und Durchläufe (29.10.), Kapitel 6.1.2. Weiche-Tabelle `@tbl-primer-lernsongs`, sechs Empfehlungen, Ablauf, Prüfliste (10), Umsetzung, Lücke; online: Evidenz, drei Songtypen, Textprobe EOQ-Jingle, Prompt-Baustein, Stilangabe (Suno v6), Whisper-Prüfskript. Rund 1.050 Druckwörter.
- **Neuer Anhang E „Praxis-Primer für Lehrende“** (`anhang-primer.qmd`): Einleitung, Primer 0, A, B, C, D. In `_quarto.yml` und `_quarto-web.yml` nach Anhang D eingetragen; Lösungshinweise werden damit Anhang F. Im Text kommt „Anhang E/F“ nicht als fester Buchstabe vor.
- **Querverweise:** Kapitel 6.1.3 → `@sec-primer-lernspiele` (Patch aus P6), Kapitel 6.1.2 → `@sec-primer-lernsongs` (neuer Satz). C.7/C.8 waren schon nur online (QR `qr-anhang-c-literatur`), nichts zu tun. Einen Lernsong-Kasten in 4.1 gibt es nicht; kein Verweis nötig.
- **Literatur:** 45 Einträge in `references.json` eingefügt (16 aus P1, 9 aus P4, 15 aus P6, 5 neu für Primer C über Crossref: `calvert2001`, `mcglone2000`, `conditschultz2015`, `lehmann2018`, `alfieri2013`). `journal-article` → `article-journal`. Dubletten: `wouters2013`, `wecker2012` vorhanden; `chen2000` = `chen2000quantifying` (Primer B umgestellt). Nicht zitiert, daher nicht übernommen: `arnab2015`, `qudratullah2007`, `sawyer2016`. Bestehende Einträge unverändert in Reihenfolge und Format.
- **QR-Codes:** `scripts/qr-primer.mjs` erzeugt alle vier (`images/qr/qr-primer-*.png`), dekodiert und geprüft.
- **Dateien:** `interactions/eoq-bestellmenge.html`, `images/druck/eoq-bestellmenge.svg`, `images/druck/folie-{ohne,mit}-regeln.png`, `downloads/primer/` (Prüfskript Animationen, zwei Test-Foliensätze, Folien-Skill, `whisper_pruefung.py`).
- **Render:** HTML ohne Warnungen außer den bekannten 36 OJS-Zeilennummern; alle Querverweise lösen auf. Druck-PDF (`--profile print`) läuft durch: Anhang E belegt **20 Druckseiten** (S. 291–310), Primer A ≈ 4, B ≈ 3,5, C ≈ 3,5, D ≈ 5,5. `docs/` ist auf dem Branch nicht neu gerendert; das geschieht beim Merge.

## Bewusst nicht gemacht

- Download `regelwerk-lernspiele.md` und der Link darauf in Primer D: Das Regelwerk enthält Teamnummern und interne Entscheidungsnotizen; Veröffentlichung erst nach bereinigter Fassung und Freigabe der F6-Befunde.

## Offen für Roman

1. Seitenumfang und Freigabe: entschieden (oben); Kürzung folgt.
2. Vor dem Druck am Original lesen: Calvert (2001) und Lehmann & Seufert (2018) (nur online zitiert), Wouters et al. (2013), Sitzmann (2011), Keiser & Arthur (2021), Chen et al. (2020).
3. Whisper-Lauf an einer echten Suno-Aufnahme steht aus (Primer C nennt ihn nicht als erledigt).

## Nebenbefunde

- Kapitel 2, Absatz „Was für Sprachmodelle gibt es?“: Im PDF steht „Tabelle ??“ (Verweis auf eine nur online vorhandene Tabelle); betrifft die laufende Sitzung zum Modellwahl-Kasten.
- Tabellen der Primer brechen im PDF über Seitenwechsel (E.1, E.2, E.3); bei der Druckprüfung gezielt prüfen.
