# STATUS Kap. 5 – Abschnitt Description ergänzt (14.11.2026, ca. 08:00)

Auftrag Roman: Kapitel 5 soll vier Abschnitte für die vier Phasen (4D) haben; Description fehlte.

## Ausgangslage
Kap. 5 (`kapitel05-4d-phasen.qmd`) hatte eigene Abschnitte für Delegation (`sec-delegation`), Discernment (`sec-hallucinations`) und Diligence (`sec-diligence`). Description steht seit dem Umbau in Kap. 2 (`sec-access`, rund 1.700 Wörter); Kap. 5 verwies nur mit einem Satz dorthin.

## Entscheidungen Roman (MC, 14.11.)
1. Kurzabschnitt mit Verweis statt Umzug oder Teilumzug; Kap. 2 bleibt unverändert.
2. Merge nach Vorschau des Textes: ja.

## Umsetzung
- Neuer Abschnitt `## Description: Wie sage ich der KI, was ich will? {#sec-description}` zwischen Delegation und Discernment, rund 150 Wörter, online und Druck gleich. Aufbau wie die drei Nachbarn (Leitfrage mit `@tbl-4d`), dann Werkvertrag (`@sec-how-to-speak`), vier Angaben (`@sec-prompt-components`), Arbeitsauftrag gegen Verhaltensbeschreibung (`@sec-prompts-teaching`), Prompts schreiben lassen (`@sec-prompts-schreiben-lassen`), Brücke zu Discernment über das Abnahmekriterium, Verweis auf `@sec-prompts`.
- Einleitung `sec-schemas`: „Dieses Kapitel folgt dem Schema in vier Abschnitten; das Handwerk des Beschreibens steht ausführlich bei den Prompts in @sec-access.“
- Abschnittsnummern online: 5.3 Delegation, 5.4 Description, 5.5 Discernment, 5.6 Diligence, 5.7 Prüfen, 5.8 Kurs-Integration (vorher 5.4 bis 5.7 eine Nummer niedriger). Andere Kapitel-HTML ändern nur diese Nummern in Verweisen.

## Prüfung
- `quarto render --to html` (1.8.25): Exit 0, 36 Warnungen (bekannte OJS-Warnungen), keine `?@` in `docs/`; Download-PDF/EPUB aus Git zurückgeholt.
- Nicht geprüft: Druck-PDF (kein Testrender), Playwright. `scripts/zaehle_druck.py` nicht gelaufen (braucht Dateiargument); Kap. 5 wächst im Druck um rund 150 Wörter.

## Offen
1. Die Überschrift ist wortgleich mit der von `sec-access` in Kap. 2 („Description: Wie sage ich der KI, was ich will?“). Falls das im Inhaltsverzeichnis stört, eine der beiden umbenennen.
2. Die Abweichung der Abschnittsnummer von „Prüfen“ zwischen PDF und HTML (bekannter Punkt) am nächsten Druck-PDF neu prüfen; die Nummern haben sich verschoben.
3. Lernziele und Kernaussagen von Kap. 5 nennen Description nicht eigens; nicht Teil dieses Auftrags.

## Ablage
Repo: Branch `k5-description`, per Fast-forward nach `main` gemergt und gepusht; Branch kann gelöscht werden. Projekt: `claude/k5-description/STATUS-k5-description-2026-11-14.md`. Tresorit: `Projektnotizen-Claude/k5-description/`.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja)
