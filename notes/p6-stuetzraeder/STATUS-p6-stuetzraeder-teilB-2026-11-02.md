# STATUS P6 „Stützräder“, Sitzung B (02.11.2026)

Grundlage: `STATUS-p6-stuetzraeder-teilA-2026-11-02.md`, Auftrag Sitzung B. Ergebnis: acht ElevenLabs-Takes (v4) eingebaut, Film neu gebaut (2:40), Merge von `main` in den Branch mit aufgelösten Literatur-Duplikaten, G3 entschieden. **Offen: eine Nachaufnahme (Szene 9), dann Sitzung C (kurz).**

## G3 (Roman, MC, 02.11.2026)

1. **Szene 4: Take übernehmen.** Roman hat Szene 4 mit anderem Wortlaut aufgenommen: „Die Beweisaufnahme, 2025. Der KI eine Rolle geben: kein Effekt bei neueren Modellen. Trinkgeld und Drohungen: kein messbarer Effekt. Höflichkeit: keine Wirkung. Das Gericht urteilt: bringt nichts. Die Aufkleber kommen vom Zettel.“ Manifest (Sprechtext, Untertitel), Bild (Reihenfolge Expertin – Trinkgeld – Bitte, Stempel „bringt nichts“) und `quellen.md` (Q08, Q09) angepasst. „Höflichkeit: keine Wirkung“ ist eine Vereinfachung von Meincke et al. (2025a) („hilft mal, schadet mal“); Kap. 2.4 sagt „keine verlässliche Wirkung“. In Q09 als Vereinfachung vermerkt.
2. **Szene 9: zahlfrei neu aufnehmen.** Grund: P1 (Streich-Test, live in Kap. 2.4) nennt für denselben Quiz-Ersteller 275 → 119 Wörter, P6 nannte 308 → rund 120 (andere Zählregel). Neuer Sprechtext: „Unser eigener Quiz-Prompt schrumpfte auf weniger als die Hälfte.“ Bild: „vorher“ / „weniger als ½“ (statt Wortzahlen; Grenze acht neue Bildwörter). `scripts/p6-quiz-woerter.py` zählt jetzt nach der P1-Regel (275 / 119); Vorhersage-Auflösung im Player nennt „von 275 auf 119 Wörter“.
3. **Merge erst nach S5 Sitzung B.** Der Branch enthält S5 Sitzung A (Token-Film, Kapiteltext); S5 hat noch kein ElevenLabs-MP4. Ein Merge jetzt würde den S5-Film auf der Live-Seite leer lassen.
4. **Neue Sitzung** für den Einbau der Nachaufnahme.

## Takes

Tresorit `06-Lehrbuch-Publikation-Logos/Audio-P6-Stuetzraeder/`, Dateien hießen `p6-szeneNN.mp3.mp3` (doppelte Endung), im Repo umbenannt nach `_src/videos/p6-stuetzraeder/audio/p6-szeneNN.mp3`. Szenen 1–8 committet; Szene 9 (alter Take mit „308“) nicht committet.
Länge gegenüber Platzhalter +11 bis +26 % (Szene 1: 21,1 s; Summe Film 159,9 s = 2:40). Lautheit nach Bau −17,2 LUFS.
Wortlautprüfung per automatischer Abschrift (faster-whisper small, lokal): Szenen 1–3 und 5–8 wörtlich wie Manifest (Abweichungen nur Schreibweise der Abschrift); Szene 4 abweichend (siehe G3); Szene 9 nennt „308“. Aussprache „2020“, „79 statt 18“, „14:40“ in Ordnung.

## Repo

Branch `prompting-film-stuetzraeder`:
- `f94c1d4` Merge `origin/main` (@ `afb1191`: P1 Streich-Test, Vorwort) in den Branch. `references.json`: Duplikate `kojima2022` und `tippett2010` entfernt (Fassung aus `main` bleibt), `openaireasoning` entfernt, buchweit `openai2026reasoning` (P1); `quellen.md` umgestellt. Diff gegen `main` nur noch fünf neue Einträge (`heygen2026hyperframes092`, `mollick2026rekursion`, `brown2020`, `wei2022`, `li2023emotion`). Anhang F: Konflikt aufgelöst, Lösungen in Kapitelreihenfolge (Token-Genres, Streich-Test, Stützräder).
- Folgecommit (diese Notiz): Takes 1–8, Manifest/Szenen/Drehbuch (Szene 4 und 9), `quellen.md`, Zählskript, Vertonungsblatt (Abschnitt „Nachaufnahme“), Bildunterschrift „gut zweieinhalb Minuten“ (statt „gut zwei“), Druckbild, Poster, Player-Daten.
- **Nicht committet:** `interactions/media/kap02-stuetzraeder.mp4` und die beiden VTT (Szene 9 alter Ton).

## Prüfungen

`node --test tests/genrefilm.test.mjs tests/streich-test.test.mjs`: 17/17 (u. a. keine doppelten Schlüssel, Zahlen = Quellenliste, ≤ 8 neue Bildwörter). `player-pruefen.mjs`: 42/42 OK (1200/390 px). Standbilder Szene 4 und 9 angesehen; Druckraster neu (Laufzeit 2:40). `quarto render` nicht gelaufen (Quarto im Container nicht installiert); Sitzung C rendert `kapitel02.qmd`.

## Roman: Nachaufnahme Szene 9 (ca. 3 min)

Text im Vertonungsblatt, Abschnitt „Nachaufnahme“ (Projekt `claude/prompting-primer/VERTONUNG-p6-elevenlabs-2026-11-02.md`, Repo `notes/p6-stuetzraeder/`):

`[calm, slightly echoing voice from the future] Eine Nachricht an Sie, später. [pause] Unser eigener Quiz-Prompt schrumpfte auf weniger als die Hälfte. [thoughtful] Auch die Regeln von heute gleichen nur aus, was Modelle heute noch nicht können. [pause] Wenn das nächste Modell kommt: Zettel hervorholen, Zeile für Zeile prüfen.`

Gleiche Stimme, Datei `p6-szene09.mp3` (eine Endung), Ordner `Audio-P6-Stuetzraeder/`.

## Startauftrag Sitzung C

```
Lies claude/prompting-primer/STATUS-p6-stuetzraeder-teilB-2026-11-02.md und führe „Sitzung C“ aus. Repo th-koln-bartnik/genai4teaching frisch klonen, Branch prompting-film-stuetzraeder. Neue p6-szene09.mp3 aus Tresorit 06-Lehrbuch-Publikation-Logos/Audio-P6-Stuetzraeder/ nach _src/videos/p6-stuetzraeder/audio/, Wortlaut prüfen (Abschrift), node scripts/genrefilm/bauen.mjs --film kap02-stuetzraeder --audio _src/videos/p6-stuetzraeder/audio --stimme elevenlabs, druckraster.py, Laufzeit in der Bildunterschrift prüfen, Tests, player-pruefen.mjs, quarto render kapitel02.qmd --to html, MP4/VTT committen, push. Merge nach main erst nach S5 Sitzung B (Reihenfolge per MC klären). Fragen nur als Multiple Choice; Statusnotiz in Projekt, Tresorit und Repo.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: nein)
