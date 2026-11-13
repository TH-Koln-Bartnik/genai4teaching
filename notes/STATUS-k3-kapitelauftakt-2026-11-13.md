# Status: Kapitelauftakt Kap. 3 „Prinzipien der Automation von Aufgaben“ (13.11.2026, ca. 10:10)

Auftrag Roman (13.11.2026, 09:53): einleitende Mini-Fallstudie für Kap. 3, Optionen vorlegen. Optionen: `claude/kapitelkopf-position/OPTIONEN-k3-einstiegsszene-2026-11-13.md` (A Klausuren/Kessler, B Acht Agenten/Petersen, C Hochschulleitung/Demir, D Zwei Arbeitsweisen/Hartmann–Wiesner).
Entscheidung Roman (MC): **B „Acht Agenten vor der Vorlesung“**, **voller Auftakt** nach `notes/kapitelauftakt-einschaetzungen.md`, Umsetzung in derselben Sitzung.
Nebenbefund: Der Name Kessler war schon für die Szene in Kap. 2 vergeben, Option A hätte umbenannt werden müssen.

## Basis und Ablage
- Branch `k3-kapitelauftakt` von `main` @ `2ba1edb`; Quelltext und `docs/` (Quarto 1.8.25, HTML; Download-PDF/EPUB aus Git zurückgeholt).

## Umgesetzt
**`kapitel03-automation.qmd`**
- Szene (110 Wörter): Prof. Dr. Malte Petersen, Operations Management, Wirtschaftsinformatik; acht Agenten um 8 Uhr (Folien Bestellmenge, Übungsblätter, drei bewerten fotografierte Kurztests, drei Rückmeldungen auf Projektberichte); um 9:30 wartet alles auf seine Freigabe; Rest vor der Vorlesung überflogen und freigegeben; abends eine 1, die als 7 gelesen wurde, und eine Rückmeldung zum Bericht einer fremden Gruppe. Herkunftszeile: Person erfunden, Aufgaben aus der eigenen Lehre, Ablauf nach dem Modell in 3.3.
- Einschätzungen (Reihenfolge = Lesereihenfolge):
  1. `ez-k3b-1` KI-Fehlbewertung handschriftlicher Abgaben meist durch Lesen, nicht Raster → **ja** (Levine 2026, 87 %); 3.1 nach dem Levine-Absatz.
  2. `ez-k4-1` Übungsblätter in einer Stunde → am Semesterende Zeit gewonnen → **eher nicht**; Prüfkasten stand schon in 3.1. Kopfeintrag aus Kap. 6 hierher verschoben (ID bleibt, gespeicherte Antworten bleiben erhalten). Vorher zeigte der Verweis in Kap. 6 auf `@sec-hiwi`, der Prüfkasten lag aber in Kap. 3: Sprung und Anzeige „Ihre Einschätzung vorab“ liefen ins Leere.
  3. `ez-k3b-2` Zweiter Agent prüft Rückmeldungen → ohne menschliche Freigabe an Studierende → **nein** (dunkle Fabrik nur bei maschinell prüfbaren Ergebnissen; KI-VO Anhang III Nr. 3 lit. b); 3.2 nach dem Absatz zum Durchspiel.
  4. `ez-k3b-3` Prüfkriterien vorab festlegen beschleunigt eher als weitere Agenten → **eher ja** (Lehrmodell Kugel A: neunter Agent ändert nichts, doppelt so schnelle Entscheidung 43,5 → 28,5 min; Beschleunigung durch Kriterien ist Modellannahme); 3.3 Ende.
- Lernziele 1–3 (Aufgabenmodell; Arbeitsweisen; Haltepunkte und Zahl der Agenten).
- Kernaussagen neu am Kapitelende (gab es vorher nicht), 1–7 gruppiert nach LZ1–3.
- Querverweis in 3.2 korrigiert: „Formen des Aufgabenmodells in @sec-hiwi“ → `@sec-aufgaben` (das Aufgabenmodell steht seit der neuen Gliederung in Kap. 3).

**`kapitel06-rollen.qmd`**: Kopfeintrag `ez-k4-1` entfernt, Einleitung „vier“ → „drei Aussagen“.

## Geprüft
- `quarto render --to html`: 36 Warnungen = die bekannten OJS-Warnungen; keine `?@` in Kap. 3 und 6.
- Playwright 1200/390 px, Kap. 3: je Aussage fünf Knöpfe und genau ein Prüfkasten; Klick → „Gespeichert. Auflösung in Kapitel 3.1 / 3.1 / 3.2 / 3.3“, Link auf `#pruefen-…`; nach Neuladen „Ihre Einschätzung vorab“ erhalten; keine JS-Fehler, keine 4xx. Seitenbreite bei 390 px: 450 px vorher wie nachher (Altbestand), neue Kästen 365 px. Kap. 6: drei Aussagen.
- Druckpfad nicht gesetzt (kein TeX in der Cloud).

## Offen (Entscheidung Roman)
1. Kap. 6: Die Szene (Hoffmeister) nennt noch die Übungsblätter in einer Stunde, und Lernziel 1 nennt „welche Aufgaben wegfallen, schneller werden oder neu entstehen“, beides Inhalt von Kap. 3. Kürzen oder als Rückbezug lassen?
2. Kap. 6 hat jetzt drei Einschätzungen (Schablone erlaubt 3–4). Eine vierte ergänzen?
3. Druckbudget: Kapitelkopf und Kernaussagen kommen zu Kap. 3 hinzu; gegen die Kürzungsliste rechnen.
4. Video-Titel in Kap. 3 nennt noch „Tabelle 4.1“ (`title`-Attribut des `<video>`), Anker `sb-k4-…` tragen alte Kapitelnummern; nur kosmetisch.
5. Merge nach `main` und Pages-Lauf.
