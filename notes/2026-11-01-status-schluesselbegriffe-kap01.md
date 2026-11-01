# Status: Kasten „Schlüsselbegriffe“ – Probe Kapitel 1 (01.11.2026, abends)

Auftrag `claude/schluesselbegriffe/AUFTRAG-schluesselbegriffe-probe-kap01-2026-11-01.md` umgesetzt, auf `main` gepusht, online live.

## Entscheidungen Roman (MC in dieser Sitzung)
- Begriffsliste: 10 Begriffe, ohne „Generative KI“ und „Sprachmodell“ (die erklärt Kap. 2 und deckt das Grundbegriffe-Spiel ab).
- Szenen: S1–S5 + S7 (sechs Szenen; S6 „Ökonometrie-Kurs/Gallegos“ verworfen, weil fast wörtlich aus 1.3).
- Lösungen im Druck: bestehender Anhang F, umbenannt in „Lösungshinweise zu Lernfragen und Übungen“, je Kapitel ein Block „Übung zu den Schlüsselbegriffen“.
- Position: zwischen Kernaussagen und Lernfragen.
- Repo-Zugriff: Push auf `main`; Tresorit: bereits freigegebener Ordner `0_GenAI`.

## Was entstanden ist
- `kapitel01.qmd`: Anker `[]{#sb-k1-…}` an zehn Fundstellen; Kasten mit zehn Begriffen (Reihenfolge wie im Text) und Musterantworten; Fall-Zuordnung mit sechs Szenen, je Szene Herkunft und Begründung:
  1. Workshop, nur Chatfenster → Fähigkeitsüberhang (Herkunft: Workshops, 1.1)
  2. Testlauf Tutor-Bot BWL, dreimal um Lösung gebeten → Leitplanke (konstruiert nach dem Prüfkriterium in 6.2.2)
  3. Simulationsprojekt, jede Codezeile erklären → Auslagerung des Denkens (6.3.3)
  4. Bewerbungstrainer nach Lernkonzept → Erwünschte Schwierigkeiten (6.3.4)
  5. Karriere-Bot mit BA-Schnittstelle und Regelzuordnung → Werkzeugkasten (6.3.4)
  6. Professorin, kostenlose Version ohne Nachdenkphase → Reasoning (nach der Eingangsszene)
- `include/schluesselbegriffe.html`: ein Skript für alle Modi (fall, paare, stapel, luecke, reihenfolge, wiederkehr). Begriffskarten: Link zur Fundstelle, „Musterantwort zeigen“, Selbsteinstufung gewusst/halb/nicht gewusst (`localStorage`, `genai4teaching:sb:<kennung>`). Übung: Knöpfe alphabetisch, Rückmeldung ✓/✗ + Begründung, Stand „x von n richtig“, „Übung neu starten“. Wiederkehr liest frühere Kapitelseiten per `fetch` und zeigt 2–3 Karten (zuerst „nicht“, dann „halb“, sonst zufällig) mit Eingabefeld für die eigene Erklärung.
- `_filters/schluesselbegriffe.lua`: Druck = Begriffsliste mit `\pageref` (EPUB: Link „zur Fundstelle“), Papierübung als Tabelle Nr./Szene/Begriff (leer) mit Herkunft kursiv, Verweis „Lösungen: Anhang F“; Musterantworten und Begründungen entfallen im Kasten. Lösungen mit Begründung im Anhang über Platzhalter `::: {.sb-loesungen kapitel="1"}`. Alle Modi auch im Druck umgesetzt.
- `kapitel10-appendix05-loesungshinweise.qmd`: Titel geändert, Hinweissatz nur online (`html:js`), Platzhalter Kap. 1.
- `_quarto.yml`: Filter und Include eingetragen.
- `notes/schluesselbegriffe.md`: Schablone für Kap. 2–6 (Datenformat, Modi, Inhaltsregeln, Prüfschritte).

## Prüfung
- `quarto render --to html` (Quarto 1.8.25), nach Rebase auf `origin/main` erneut: 0 Warnungen außer den bekannten 36 × „OJS block count mismatch“; keine `?@`. Download-PDF/EPUB in `docs/` unverändert (aus Git zurückgeholt).
- Playwright 1200 und 390 px: keine JS-Fehler; Musterantwort auf/zu; falsche Wahl → „✗ Nicht ganz. Passend ist: …“ + Begründung; richtige Wahl per Tastatur (Enter) → „✓ Richtig.“; Einstufungen bleiben nach Neuladen; „Übung neu starten“ setzt zurück. Testseite (Kopie von Kap. 2 mit Testdaten, nicht im Repo): Wiederkehr wählt die „nicht“- und „halb“-Begriffe aus Kap. 1 zuerst; paare, stapel, lücke (Synonym „Guardrail“ akzeptiert), reihenfolge funktionieren. Der Kasten verbreitert die 390-px-Ansicht nicht; die vorhandene Verbreiterung auf 410 px (Kap. 1) bzw. 472 px (Kap. 2) kommt aus langen DOI-Links im Literaturverzeichnis und bestand schon vorher.
- PDF-Testrender (`--profile print --to pdf`, Kopie, vor dem Rebase auf den S9-Sprachcheck; der betrifft nur Wortlaut): Kasten auf Druckseite 16/17, alle zehn Seitenzahlen aufgelöst (S. 9–13), keine `??`, „Lösungen: Anhang F“; Lösungen auf S. 370. Buch 410 Seiten (vorher laut letzter Messung 406–410, je nach Stand). EPUB-Testrender: Kasten ohne Musterantworten, Links `ch005.xhtml#sb-k1-…` aufgelöst, Lösungen im Anhang.
- `texlive-fonts-extra` musste in der Cloud nachinstalliert werden (fontawesome5).

## Repo
- `main`: `8a6cbb1` (Quellen), `cef9cef` (docs/), gepusht. Kein eigener Branch (Roman: Push auf `main`).
- Vor dem Push auf `origin/main` (S9 Sprachcheck Kap. 1/2) rebased; Konflikt in `kapitel01.qmd` gelöst, indem die Anker auf den neuen Wortlaut gesetzt wurden.

## Offen
1. Roman prüft Kap. 1 online (Kasten am Kapitelende, vor den Lernfragen) und im Druck-PDF beim nächsten PDF-Render.
2. Danach Schablone auf Kap. 2–6: je Kapitel Begriffsliste (8–12) und Modus per MC wählen (Standard Fall-Zuordnung; Kap. 2 nicht Begriff ↔ Definition), Szenen per MC freigeben, ab Kap. 2 `::: {.sb-wiederkehr quellen="kapitel01.html …" druck="…"}` einfügen.
3. Seitenumfang: Der Kasten kostet in Kap. 1 gut eine Druckseite, die Lösungen ein Drittel Seite. Bei fünf weiteren Kapiteln sind das rund 7 Seiten; bei Platzdruck im Druck Musterantworten ohnehin weg, ggf. Herkunft kürzen.

## Startauftrag nächste Sitzung
„Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/schluesselbegriffe/STATUS-schluesselbegriffe-probe-kap01-2026-11-01.md` und `notes/schluesselbegriffe.md`. Übertrage den Kasten auf Kap. 2 und 3: je Kapitel Begriffsliste und Modus per MC vorschlagen (Kap. 2 nicht Begriff ↔ Definition), Szenen per MC freigeben, Wiederkehr mit `quellen=…` einbauen, rendern (HTML; PDF-Test in Kopie), Playwright 1200/390, pushen, mit `ergebnisse-sichern` sichern.“

Ablage geprüft: siehe Projektfassung (Prüfzeile wird dort nach der Ablage ergänzt).
