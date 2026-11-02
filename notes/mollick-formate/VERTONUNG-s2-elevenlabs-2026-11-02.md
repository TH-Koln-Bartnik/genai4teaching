# Arbeitsblatt Vertonung S2 „Was Forschende über KI sagen“ (ElevenLabs v3)

Für Roman, nach der Freigabe G2b. Geschätzter Zeitbedarf: 20–25 Minuten (Stimmen wählen 5 min, fünf Blöcke je 2–3 min, Ablage 2 min).

## 1 Einstellungen

- Konto im **bezahlten Tarif** (Starter genügt; kommerzielle Nutzung im Verlagsbuch).
- Werkzeug **Text to Dialogue**, Modell **`eleven_v3`**, Sprache Deutsch.
- Zwei Stimmen aus der Voice Library, Filter *Language: German*, *Use case: Conversational* oder *Narrative*:
  - **Lea:** weiblich, ruhig, mittlere Tonlage, deutsche Muttersprachlerin (kein Akzent).
  - **Jonas:** männlich, ruhig, etwas tiefer als Lea, deutscher Muttersprachler.
  - Kriterien: gut unterscheidbar auch bei 1,25×, ruhiges Sprechtempo, kein Radio-Werbeton. Probe: Block 01 mit zwei Kandidatenpaaren erzeugen und das Paar nehmen, bei dem man nach drei Sätzen ohne Hinsehen weiß, wer spricht. Bitte die gewählten Stimmen (Name und Voice-ID) notieren; sie kommen in die Statusnotiz.
- Regieanweisungen stehen schon im Text (`[warmly]`, `[thoughtful]`, `[curious]`); bitte nicht ergänzen. Pausen setzt das Skript; keine SSML-Pausen (gehen in v3 nicht).

## 2 Blöcke

Text zum Einfügen steht in `_src/audio/s2-podcast/elevenlabs-bloecke.md` (Repo, Branch `mollick-s2-podcast`); eine Kopie liegt neben diesem Blatt in Tresorit. Je Block die Zeilen in der angegebenen Reihenfolge als Dialogzeilen anlegen, Sprecher zuordnen, erzeugen, anhören, als mp3 speichern.

| Block | Datei | Zeilen | Zeichen | Thema |
|---|---|---|---|---|
| 01 | `s2-block-01.mp3` | 1–6 | 1.381 | Wofür Forschende KI tatsächlich nutzen |
| 02 | `s2-block-02.mp3` | 7–11 | 1.084 | Zeitgewinn – und wo er ausbleibt |
| 03 | `s2-block-03.mp3` | 12–20 | 1.713 | Prüfen statt blind vertrauen |
| 04 | `s2-block-04.mp3` | 21–27 | 1.444 | Ideen, Denken und Fachkompetenz |
| 05 | `s2-block-05.mp3` | 28–35 | 1.469 | Grenzen ziehen – und was das für die Lehre heißt |

Beim Anhören nur auf drei Dinge achten: richtige Stimme je Zeile, kein verschluckter Satz, Fremdwörter (Matlab, Python, Matplotlib, GraphPad, Stack Overflow, GitHub) verständlich. Inhaltliche Fehler im Gesagten **nicht** korrigieren: Das Hörstück ist absichtlich der ungeprüfte Erstentwurf.

Klingt ein Block zerhackt oder vertauscht er Stimmen: Rückfall Zeile für Zeile (Text to Speech, gleiche Stimmen), Dateinamen `s2-zeile-01.mp3` … `s2-zeile-35.mp3`, Ablage im Unterordner `zeilen/`.

## 3 Ablage

Tresorit `0_GenAI/1-Research/06-Lehrbuch-Publikation-Logos/Audio-S2-Podcast/` (Ordner ist angelegt). Danach Sitzung B mit dem Startprompt aus dem Auftrag:

> Lies `claude/mollick-formate/STATUS-s2-podcast-teilA-2026-11-02.md` und Abschnitt 5 von `claude/mollick-formate/AUFTRAG-s2-interviews-podcast-2026-11-02.md`. Die ElevenLabs-Blöcke liegen in Tresorit `06-Lehrbuch-Publikation-Logos/Audio-S2-Podcast/`. Baue sie ein, prüfe und frage am Ende nach G3 (Multiple Choice).
