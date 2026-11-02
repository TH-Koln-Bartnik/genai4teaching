# Genrefilm-Pipeline (S5, wiederverwendbar für S6)

Ein Genrefilm erklärt eine Kette von Ideen in neun kurzen Szenen, jede in einem anderen Filmgenre. Die Bilder sind Programmcode (HTML/CSS + GSAP), HyperFrames filmt sie ab; die Stimme kommt als eine Tondatei je Szene. **Die Tondateien bestimmen den Takt:** Jede Szene dauert so lange wie ihre Aufnahme plus 0,6 s Luft. Wer die Stimme austauscht (Piper → ElevenLabs), baut einfach neu.

## Bausteine

| Datei | Aufgabe |
|---|---|
| `_src/videos/<film>/manifest.json` | einzige Quelle: Szenen (Genre, Idee, Sprechtext, v3-Text mit Tags, Bildtext, Belege), Vorhersage, Haltepunkte, Selbsttest, Making-of, Videoformat, Ton |
| `_src/videos/<film>/szenen.mjs` | je Szene eine Funktion `(ctx) => ({html, css, js})`; `ctx.wt("Wort")` liefert den Zeitpunkt, an dem das Wort gesprochen wird; optional `tokenwerte()` für berechnete Werte |
| `scripts/genrefilm/komposition.mjs` | setzt die Szenen auf eine Zeitleiste (HyperFrames-Komposition, Genre-Karte je Szene) |
| `scripts/genrefilm/pipeline.mjs` | Zeitplan aus Audiolängen, Tonspur (−16 LUFS, Übergangston), Mux (H.264 CRF 23 veryfast), Untertitel, Kapitelmarken, Standbilder, Poster, Player-Daten |
| `scripts/genrefilm/bauen.mjs` | Hauptskript: `--film <id> --audio <ordner> [--stimme piper|elevenlabs] [--probe 10] [--ohne-render]` |
| `scripts/genrefilm/wortzeiten.py` | misst mit faster-whisper, wann jedes Wort in den Takes fällt, und schreibt `<audio>/wortzeiten.json`; Bildereignisse (`ctx.wt`) und Untertitel folgen dann der echten Stimme statt einer Schätzung aus der Textposition (bei ElevenLabs bis 1,7 s Unterschied). Listet zugleich Abweichungen vom Sprechtext (Wortlautprüfung). Passt eine Liste nicht zur Länge des Takes, gilt wieder die Schätzung. |
| `scripts/genrefilm/stimme-piper.py` | Platzhalterstimme je Szene nach `<film>/audio-platzhalter/` (nicht committen) |
| `scripts/genrefilm/vorschau.mjs` | Bildschirmfotos ohne Rendern + Kontrastprüfung (WCAG AA) aller sichtbaren Texte |
| `scripts/genrefilm/drehbuch.mjs` | `drehbuch.md` und Vertonungsblatt aus dem Manifest |
| `scripts/genrefilm/druckraster.py` | Druckabbildung 3 × 3 Standbilder + QR, Lesetest farbig/grau |
| `interactions/genrefilm-player.html` | Player für alle Genrefilme: `?film=<id>`; Filmdaten als JSON-Block je Film (vom Build geschrieben) |
| `tests/genrefilm.test.mjs` | prüft jedes Manifest unter `_src/videos/*/` (9 Szenen, 35–55 Wörter, ≤ 8 neue Bildwörter, Belege, v3 = Sprechtext), Zeitplan und Untertitel |

## Neuer Film (z. B. S6)

1. Ordner `_src/videos/s6-<name>/` mit `manifest.json` (Struktur wie S5, eigene `film`-ID) und `szenen.mjs` (neun Funktionen; Hilfen `F`, `ein`, `kopf` aus S5 kopieren oder importieren).
2. `python3 scripts/genrefilm/stimme-piper.py --film <id>` → Platzhalter.
3. `node scripts/genrefilm/bauen.mjs --film <id> --audio _src/videos/s6-<name>/audio-platzhalter --probe 10`, dann ohne `--probe`.
4. `node scripts/genrefilm/vorschau.mjs --film <id> --anteile 0.5,0.97` → Bilder und Kontrast in `build/`.
5. `python3 scripts/genrefilm/druckraster.py --film <id> --name <kurzname>`; `node scripts/genrefilm/drehbuch.mjs --film <id> --vertonung <pfad>`.
6. Echte Stimme: Takes nach `_src/videos/<film>/audio/`, `python3 scripts/genrefilm/wortzeiten.py --film <id> --audio _src/videos/<film>/audio` (Wortlaut prüfen), dann bauen mit `--stimme elevenlabs`.
7. Im Player ist nichts zu ändern; der Build hängt den JSON-Block des neuen Films an.

## Werkzeuge

HyperFrames 0.9.2 (npm, Apache-2.0), GSAP 3, gpt-tokenizer 4.1.0, ffmpeg ≥ 6, Piper (`pip install piper-tts`, Stimmen `de_DE-thorsten-high`, CC0), Playwright (Vorschau), Python: Pillow, qrcode, opencv-python-headless, faster-whisper (Wortzeiten, Modell „small“). Renderzeit im Container (2 Kerne, keine GPU): Faktor ≈ 3,8 (10 s Film in 38 s), S5 gesamt ≈ 10 min.
