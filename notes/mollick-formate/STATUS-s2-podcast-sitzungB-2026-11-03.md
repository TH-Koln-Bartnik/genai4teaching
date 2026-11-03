# S2 Hörstück „Was Forschende über KI sagen“ – Status Sitzung B (03.11.2026)

Grundlage: `STATUS-s2-podcast-teilA-2026-11-02.md`, Auftrag S2 Abschnitt 5. Romans Blöcke (ElevenLabs Text to Dialogue, `eleven_v3`, Stability „Creative“, erweiterte Tags laut `VERTONUNG-s2-tags-erweitert-2026-11-03.md`) aus Tresorit `Audio-S2-Podcast/` (Dateinamen dort `s2-block-NN.mp3.mp3`, doppelte Endung, im Repo als `roh/s2-block-NN.mp3`).

**Ergebnis (Stand 12:15):** Fertig. Ersatzzeilen eingesetzt, Ton 7:28 min (448,4 s), Tests 8/8, mp3 committet, Branch gepusht (`146cede` + Folgecommit). **G2c entschieden, G3 entschieden** (siehe unten). Offen: Merge in neuer Sitzung.

## Befund: drei unkorrigierte Zeilen in der Aufnahme

Spracherkennung (faster-whisper small) der fünf Blöcke, Wortabgleich je Zeile gegen Hörfassung (`text`) und Erstfassung (`drehbuch`):
- Zeilen 15, 17, 23: Erstfassung 100 %, Hörfassung 67 / 43 / 68 %. Die drei Persönlichkeitsschutz-Korrekturen aus Sitzung A (science_0032, science_0010, science_0089) fehlen im Ton.
- Alle anderen 32 Zeilen: Hörfassung 85–100 % (Rest Erkennungsfehler bei Fachwörtern, z. B. „Matplot-Lippe“).
- **Ursache (Sitzung A):** `elevenlabs-bloecke.md` wurde vor den Korrekturen erzeugt und nicht erneuert; Vertonungsblatt und Tag-Blatt vom 03.11. übernahmen diesen Stand.
- **Entscheid Roman (03.11., MC): drei Ersatzzeilen** nach `Audio-S2-Podcast/NACHVERTONUNG-s2-zeilen-15-17-23-2026-11-03.md` (Text to Speech, Leas Stimme, je Zeile 2×, Dateien `s2-ersatz-zeile-15.mp3`, `-17`, `-23`).

## Repo (Branch `mollick-s2-podcast`)

Commit **def8c1a** gepusht (Schreibzugriff nachträglich freigegeben). Sicherung zusätzlich als Git-Bündel: Tresorit `Projektnotizen-Claude/mollick-formate/s2-podcast/s2-sitzungB-def8c1a.bundle`.

| Datei | Änderung |
|---|---|
| `_src/audio/s2-podcast/manifest.json` | `tts` = vertonte Fassung mit erweiterten Tags; `bloecke` (tatsächliche Aufteilung 1–6 / 7–11 / 12–20 / 21–27 / 28–35); Zeilen 15/17/23: Feld `blockfassung` (so im Block gesprochen), `tts` = korrigiert + Tags, `datei` = `s2-ersatz-zeile-NN.mp3`; `vertonung`; `ersatz_offen` |
| `scripts/audio-s2-zusammenfuegen.py` | Zeilengrenzen aus Wort-Zeitmarken der Spracherkennung statt aus Pausen (Tags erzeugen Lacher/Seufzer); Schnitt an der leisesten 20-ms-Stelle zwischen zwei Zeilen; ist der Zeilenanfang unerkannt, nur nahe am sicher erkannten Rand schneiden (Fall Zeile 32 nach `[inhales deeply]`); Ersatzzeilen mit denselben Randpausen einsetzen; Cache `asr/block-NN.json` (Schlüssel SHA-1 der Rohdatei), Rückfall Pausen/Zeichenzahl ohne faster-whisper |
| `_src/audio/s2-podcast/elevenlabs-bloecke.md` | neu aus dem Manifest; Ersatzzeilen gesondert markiert, nicht im Blockzähler (Block 03 sonst 2.041 Zeichen) |
| `tests/podcast-s2.test.mjs` | Test 8 „keine Zeile mehr in unkorrigierter Blockfassung“ – **schlägt bis zum Einschnitt bewusst fehl** (Gate vor Merge) |
| `kapitel04.qmd` (Making-of) | „vor der Vertonung korrigiert“ → „im Drehbuch korrigiert“ + Satz: Abgleich der Aufnahme per Spracherkennung zeigte die fehlenden Korrekturen; drei Zeilen nachgesprochen |
| `interactions/…html`, `docs/` | Zeitmarken, Dauer, `platzhalter: false` → Kennzeichnung „Stimmen KI-erzeugt (ElevenLabs v3); Drehbuch KI-erzeugt, ungeprüft.“ |

**Nicht committet:** `interactions/media/kap04-podcast-forschende.mp3` (enthält noch Zeilen 15/17/23 unkorrigiert; erst nach Einschnitt committen, auch `docs/interactions/media/`).

## Prüfung

- Zeitmarken, alle 35 Zeilen: jede Zeile aus der fertigen mp3 ausgeschnitten und einzeln erkannt; Anfang und Ende passen ausnahmslos zur eigenen Zeile, keine Wörter der Nachbarzeilen. Damit auch die Prüfaussagen (Zeilen 12, 28, 29) zeitlich exakt.
- `node --test`: 7/8 (CSV neu von HF geladen, Tests 6/7 laufen); Test 8 offen wie beabsichtigt.
- `quarto render kapitel04.qmd --to html` (1.8.25): 79 Warnungen, identisch mit Sitzung A.
- Playwright 1200/390 px, Klick und Tastatur: Audiodauer 437,3 s; Hervorhebung bei Zeilen 3, 17, 31 synchron; Sprung Zeile 11 korrekt; kein horizontales Scrollen; iframe 1.406 / 2.218 px; Kopier-Knopf; axe ohne Verstöße; keine Konsolenfehler. Screenshots: Tresorit `…/s2-podcast/screens-s2-b/`.

## Nach Eingang der Ersatzzeilen (ca. 10 min Agentenzeit)

1. `s2-ersatz-zeile-15/17/23.mp3` aus Tresorit nach `_src/audio/s2-podcast/roh/` (Blöcke dort ebenfalls, umbenannt).
2. `pip install faster-whisper` (für Cache-Treffer nicht nötig), `python3 scripts/audio-s2-zusammenfuegen.py ton` → Meldungen „Ersatzzeile … eingesetzt“.
3. Kontrolle wie oben (Zeilenausschnitte erkennen, Zeilen 14–18, 22–24 genau), Lautheit und Übergänge der drei Stellen anhören (Roman).
4. `node --test` 8/8, Render, Browserprüfung, mp3 (+ docs-Kopie) committen, pushen, G3.

## G3 (nach Einschnitt, MC)
(a) Merge in `main` · (b) nachbessern (welche Stelle?) · (c) Prüfaussage tauschen. Danach G2c (Fassung S2 vs. S2-N) mit Dauer 7:17 für die ElevenLabs-Fassung; Romans Vertonungszeit bitte nachtragen.

## Nachtrag 03.11., 11:40–12:15: Ersatzzeilen und Entscheide

- Romans Ersatzaufnahmen (`s2-ersatz-zeile-NN.mp3.mp3` in Tresorit, doppelte Endung): Spracherkennung je Datei 100 % Übereinstimmung mit der korrigierten Hörfassung; Dauer 16,8 / 18,3 / 11,0 s.
- `ton`-Lauf: „Ersatzzeile … eingesetzt“ für 15/17/23; Gesamtdauer 7:28. Lautheit Ersatz −18,4 … −18,8 LUFS, Nachbarn −17,2 … −18,9 (Zeilen 13/25 mit Lachern −23,5).
- Kontrolle aller 35 Zeilenausschnitte erneut: Anfang/Ende passen, Ersatzzeilen enden auf dem neuen Text.
- Tests 8/8; Render 79 Warnungen (unverändert); Browser 1200/390 px, Klick/Tastatur: Hervorhebung Zeilen 3/17/31 synchron, axe ohne Verstöße, keine Konsolenfehler, Audiodauer 448,3 s.
- Hörprobe der drei Übergänge an Roman geschickt (`s2-hoerprobe-ersatzzeilen.mp3`, Tresorit `s2-podcast/`).
- **G2c (Roman, MC): ElevenLabs-Fassung im Element, Gemini Notebook als Vergleich.** Umgesetzt: Making-of-Kasten Kap. 4 um zwei Sätze ergänzt (fast 15 min, 24 von 37 Aussagen überzogen oder ohne Beleg, vier falsche Interviewnummern; Werkzeug und Vorauswahl nicht trennbar). Branch `mollick-s2n-notebook` wird nicht gemergt (Roman kann ihn löschen).
- **G3 (Roman, MC): Merge in neuer Sitzung.** Konflikte mit `main` (Stand `229e2fa`, 102 Commits seit Abzweig): `.gitignore`, `references.json`, `kapitel10-appendix05-loesungshinweise.qmd`, `docs/kapitel04.html`, `docs/search.json`; `kapitel04.qmd` mischt sich automatisch.

## Startprompt Merge-Sitzung (zum Kopieren)

> Lies `claude/mollick-formate/STATUS-s2-podcast-sitzungB-2026-11-03.md` (Abschnitt Nachtrag) und `claude/STATUS-branch-abgleich-2026-11-03.md`. Merge den Branch `mollick-s2-podcast` in `main` (G3 entschieden): Konflikte lösen (`.gitignore` und `references.json` beide Seiten behalten, `handa2025interviewer` genau einmal; Lösungshinweise Kap. 4 beide Ergänzungen; `docs/` nicht von Hand mischen, sondern nach dem Merge Kap. 4 und Kap. 10 neu rendern), danach `node --test tests/podcast-s2.test.mjs` (CSV von HF `Anthropic/AnthropicInterviewer`), Browserprüfung `scripts/pruefe-podcast-s2.cjs`, Push, kurze Statusnotiz. Frage nur nach Push-Zugriff (Multiple Choice). Token-Disziplin: Transkripte nie ganz in den Kontext.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (Branch `mollick-s2-podcast`; gepusht, gemergt: nein)
