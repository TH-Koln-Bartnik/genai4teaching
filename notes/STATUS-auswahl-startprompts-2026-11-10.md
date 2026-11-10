# STATUS: Auswahl und Startprompts – Fable-Interaktionen

Stand: Di 10.11.2026, 20:10 · Status: **Auswahl getroffen, nichts gebaut.**
Gehört zu: `claude/fable-interaktionen/OPTIONEN-fable-interaktionen-2026-11-10.md` (Evidenz und Quellen dort).

## Entscheidungen Roman (10.11., 20:00–20:04)

- Roman stellt **keine eigenen Daten** bereit. Alles entsteht bei Claude: veröffentlichte Studienzahlen, erfundenes und so gekennzeichnetes Material, Eingaben der Lesenden.
- Ziel: möglichst interessant, eindrucksvoll, interaktiv.
- Gebaut werden **zuerst der Semester-Simulator, dann „Zwei Tutoren, eine Klausur“**, je in eigener neuer Sitzung.
- Notizen nach Repo `genai4teaching` und Tresorit.

## Rangfolge (ersetzt die Empfehlung in der OPTIONEN-Notiz)

1. **Semester-Simulator** (neu): Lesende spielen Professorin Albers (Kap. 1), 120 Studierende, zwölf Wochen, je Woche eine Entscheidung; Klausur am Ende. Lehrmodell, Stellgrößen an Quellen gebunden und offengelegt. Evidenz: Chernikova et al. (2020).
2. **Zwei Tutoren, eine Klausur**: Vorhersage, dann knapp tausend Punkte durch Übung und Klausur. Daten: Bastani et al. (2025). Evidenz: Brod (2021).
3. **Sie sind der Retriever**: mit erfundenem Handbuch einer fiktiven Firma (statt Firmenmaterial).
4. **Vierzig Antworten**: unabhängige Fable-Instanzen in der Bausitzung (statt Workstation/API); Tokenaufwand hoch.
5. **Antwortautomat oder Tutor**: Dialogbaum.
6. **Ihre Kalibrierungskurve**: aus gespeicherten Einschätzungen der Lesenden.

„Bauplan zum Mitnehmen“ (Zeitraffer des Baus + kopierbarer Prompt) wird Anhang jeder Interaktion, keine eigene Option. Gestrichen: L (Prüfungs-Stresstest, keine Evidenz).

## Startprompt Sitzung 1 – Semester-Simulator

```
Baue den „Semester-Simulator“ für das Logos-Lehrbuch (Repo genai4teaching).
Lies zuerst im Projekt: claude/fable-interaktionen/STATUS-auswahl-startprompts-2026-11-10.md
und OPTIONEN-fable-interaktionen-2026-11-10.md; dazu die Einstiegsszene mit Professorin Albers in Kap. 1
und eine bestehende Interaktion im Repo als Muster für Einbettung, Speicherung und Druckfassung.

Idee: Lesende spielen Professorin Albers. 120 Studierende als Punkte, zwölf Wochen, je Woche eine
Entscheidung (z. B. Chatbot frei / Tutor mit Leitplanken / Abrufübung / Aufsicht / nichts ändern).
Punkte lernen, kürzen ab oder steigen aus; am Ende Klausur und Rückblick auf die eigenen Züge.

Vorgaben:
1. Ich stelle keine Daten bereit. Jede Stellgröße des Modells ist entweder an eine geprüfte Quelle
   gebunden (u. a. Bastani et al. 2025: −17 % nach Entzug des ungeschützten Chatbots; Testeffekt und
   verteiltes Üben aus references.json) oder als Annahme gekennzeichnet und per Regler verstellbar.
   Tafel „Was dieses Modell annimmt“ im Bild. Nichts als Messung ausgeben, was Modell ist.
2. Vorhersage vor dem ersten Lauf (Klausurschnitt schätzen), Auflösung am Ende; Schritte im eigenen
   Tempo; Graustufen plus eine Akzentfarbe; höchstens acht neue Bildwörter je Schritt.
3. Eine HTML-Datei, kein Server, kein Live-Modell; fester Zufallsstartwert, damit Läufe wiederholbar sind.
4. Druckfassung: Standbild mit QR wie bei den anderen Interaktionen.
5. Kasten „Bauplan zum Mitnehmen“: Zeitraffer des Baus und kopierbarer Prompt zum Umstellen aufs eigene Fach.
6. Prüfungen wie im Repo üblich (Playwright, axe, Kontrast); frischer Prüfagent prüft jede Zahl gegen die Quelle.
7. Erst eine klickbare Skizze mit drei Wochen zeigen und meine Freigabe per Multiple Choice einholen,
   dann ausbauen.
8. Am Ende: STATUS-Notiz ins Projekt, Skill ergebnisse-sichern (Projekt, Tresorit, Repo), Fragen an mich
   immer als Multiple Choice, Ordnerzugriff im Dialog anfragen.
```

## Startprompt Sitzung 2 – Zwei Tutoren, eine Klausur

```
Baue die Interaktion „Zwei Tutoren, eine Klausur“ für das Logos-Lehrbuch (Repo genai4teaching), Kap. 3.
Lies zuerst im Projekt: claude/fable-interaktionen/STATUS-auswahl-startprompts-2026-11-10.md und
OPTIONEN-fable-interaktionen-2026-11-10.md; dazu die STATUS-Notiz des Semester-Simulators (gleiche
Bildsprache, gleiche Einbettung).

Idee: Lesende sagen das Klausurergebnis dreier Gruppen vorher (kein Zugang, Chatbot ohne Leitplanken,
Tutor mit Leitplanken). Danach wandern knapp tausend Punkte Schritt für Schritt durch Übungsphase und
Klausur; die eigene Vorhersage bleibt als Marke im Bild.

Vorgaben:
1. Ich stelle keine Daten bereit. Alle Zahlen aus Bastani et al. (2025),
   https://doi.org/10.1073/pnas.2422633122 – Originalarbeit lesen (Google Scholar, „Alle Versionen“),
   jede Zahl mit Fundstelle in einer Prüftabelle. Was die Arbeit nicht berichtet, wird nicht gezeigt.
2. Vorhersage vor der Auflösung, Schritte im eigenen Tempo, Graustufen plus eine Akzentfarbe,
   höchstens acht neue Bildwörter je Schritt; Grenzen der Studie (eine Schule, Mathematik) im letzten Schritt.
3. Eine HTML-Datei, kein Server; Druckfassung als Standbild mit QR.
4. Kasten „Bauplan zum Mitnehmen“ wie beim Simulator.
5. Prüfungen wie im Repo üblich; frischer Prüfagent prüft Zahlen und Aussagen gegen die Arbeit.
6. Am Ende: STATUS-Notiz ins Projekt, Skill ergebnisse-sichern, Fragen als Multiple Choice.
```
