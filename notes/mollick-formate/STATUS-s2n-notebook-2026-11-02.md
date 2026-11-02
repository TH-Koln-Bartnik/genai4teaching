# S2-N Hörstück aus Gemini Notebook – Status Sitzung N-B (02.11.2026)

Auftrag: `claude/mollick-formate/AUFTRAG-s2n-podcast-gemini-notebook-2026-11-02.md`, Schritte N0–N8. Vergleich mit S2: `VERGLEICH-s2-elevenlabs-notebook-2026-11-02.md`.

**Ergebnis:** Transkript, unabhängige Prüfung und Player sind fertig und geprüft. Das Hörstück aus Gemini Notebook ist deutlich freier als das S2-Drehbuch: 37 Sachaussagen, **13 belegt, 23 überzogen, 1 nicht belegt**; 23 Aussagen mit Interview-Nummer, davon **19 richtig, 4 falsch**. Kapiteltext und Druckkasten folgen erst nach G2c (Auftrag N4). Offen: G2c, drei Hörproben.

## Eingang (Romans Ablage, Tresorit `Audio-S2-Notebook/`)

- Audio `s2n-audio-2026-11-02--Gemini-Notebook-KI-Halluzinationen_und_Code-Fehler_in_der_MINT-Forschung.m4a` (AAC Stereo 44,1 kHz, 877,4 s = 14:37). Den Dateinamen hat Gemini Notebook gesetzt.
- `Protokoll Audio-Erstellung.txt` statt `s2n-protokoll.md`: Datum 02.11.2026; Konto „Google AI Plus o. ä.“ (Vorlagentext, siehe N6); m4a; Deutsch; erster Versuch; 14:37 min. Format und Länge nicht eigens vermerkt, also laut Auftrag Standardgespräch/Standardlänge angenommen. Uhrzeit fehlt (Dateizeit 10:28).
- `s2n-prompt.txt` fehlt; der Prompt steht im Protokoll und ist **zeichengenau** der Auftragsprompt (397 Zeichen, Skriptvergleich). Ob Gemini ihn unverändert übernommen hat („View custom prompt“), ist damit nicht belegt.

## Repo

Branch `mollick-s2n-notebook` (von `main` df0f9bc), gepusht, **nicht gemergt**. Commit `193e36b` (Inhalt), dazu ein Commit mit dieser Notiz und der Vergleichsnotiz in `notes/mollick-formate/`.

| Datei | Inhalt |
|---|---|
| `scripts/interviewer-s2-auszug.py`, `scripts/interviewer-s2-suche.py` | **unverändert** aus `origin/mollick-s2-podcast` (N0.2: gleiche Namen, kein Merge-Konflikt) |
| `scripts/audio-s2n-transkript.py` | faster-whisper; Abschnittslauf `--start/--ende`, Zweifelsfälle `--fenster`, Zusammenführen `--zusammen` |
| `scripts/audio-s2n-sprecher.py` | Tonhöhe je Wort (librosa pyin), k-Means 2 Gruppen, Glättung, kurze Sätze einzeln; schreibt `manifest.json`, `transkript.md` |
| `scripts/audio-s2n-daten.py` | bettet Manifest, Übung und Zählung in den Player ein |
| `_src/audio/s2n-notebook/transkript-roh.json` | Segmente mit Wortzeiten (nicht in den Kontext laden) |
| `_src/audio/s2n-notebook/transkript.md`, `manifest.json` | 133 Redebeiträge, 6 Themenabschnitte, `quelle_genannt` je Beitrag (Nummer → `transcript_id`) |
| `_src/audio/s2n-notebook/erkennung-korrekturen.json` | 9 Ersetzungen mit Begründung |
| `_src/audio/s2n-notebook/themen.json`, `zaehlung.json`, `uebung.json` | Themenwechsel, Stichwortzählung, Übungstexte |
| `_src/audio/s2n-notebook/pruefung-transkript.md` | Prüftabelle Agent B, 37 Aussagen, 91 wörtlich geprüfte Belegstellen |
| `interactions/podcast-forschende-ki-notebook.html` | Element, fünf Phasen wie S2, Daten eingebettet |
| `interactions/media/kap04-podcast-forschende-notebook.mp3` | −18 LUFS (gemessen −18,4), mono 64 kbit/s, 7,0 MB, **committet** |
| `tests/podcast-s2n.test.mjs`, `scripts/pruefe-podcast-s2n.cjs` | 8 Tests; Browserprüfung mit eigenem Range-Server und Testrahmen |

## N1 – Stichwortzählung

`interviewer-s2-auszug.py` in einem Wegwerfordner neu gerechnet: Ergebnis **identisch** mit `auszug.json` aus S2 (125 Transkripte, 179.809 Wörter, Literatur/Schreiben 105, Code/Daten 102, Ideen 93, Prüfen 95, Misstrauen 73, Zeitgewinn 62, Kompetenzsorge 9, Grenzen 12). Zuordnung `zuordnung-nr-id.csv` gegen die CSV geprüft: Interview NNN = `science_(NNN−1)`, alle 125 in Reihenfolge.

## N2 – Transkript

- **Whisper:** `large-v3`, `int8`, Deutsch, Wortzeiten. Ein Gesamtlauf brach nach Speichermangel ab (6,3 GB im Container mit 8 GB). Deshalb elf Abschnitte von 52–95 s, geschnitten in der Mitte von Sprechpausen (ffmpeg `silencedetect` −35 dB, 0,3 s), je Abschnitt ein eigener Prozess (Spitze 5,5–6,2 GB, vor allem Modell-Laden). **Rechenzeit 1.210 s** für 877 s Audio (2 CPU-Kerne). 201 Segmente, 2.350 Wörter.
- **Sprecher:** Grundfrequenz je Wort (pyin 60–420 Hz), k-Means: **Stimme 1 ≈ 181 Hz, Stimme 2 ≈ 92 Hz**; 678 Wörter ohne messbare Tonhöhe erben die Stimme davor. Glättung im Fünf-Wort-Fenster, Wechsel auf nahe Satzgrenzen geschoben, Sätze bis vier Wörter einzeln zugeordnet. 133 Redebeiträge (67/66). Die vielen Wechsel mitten im Satz sind echt: Die Gemini-Stimmen vollenden einander die Sätze (Stichprobe: „Wenn wir der KI“ 183–196 Hz, Fortsetzung ≈ 90 Hz). Bekannte Grenze: kurze Einwürfe („Absolut, ja.“) stehen teils im Beitrag der anderen Stimme.
- **Erkennungsfehler** (Neuerkennung mit `large-v3` im engen Fenster, ein Prozess, acht Fenster): Z10 verstümmelt („akademische Universität in Deutschland“ → „akademische Arbeit komplett revolutioniert, wo sie aber auch grandios scheitert“); Z47 „routilemäßige“; Z78/79 **Halluzination der Spracherkennung entfernt** („dann ist das ja auch eine Frage, die man sich dann auch noch mal überprüfen muss“, Wortwahrscheinlichkeiten 0,02–0,34, fehlt in der Neuerkennung); Z86 „aus Intellektuellen. In Interview 042“ → „aus Interview 042“ (Nummer bestätigt); Z95 „Chor“ → „Code“; dazu Z21, Z56, Z65 (siehe Hörproben). Alle 19 gesprochenen Interview-Nummern hatten Wortwahrscheinlichkeit ≥ 0,82.

### Hörprobe Roman (offen)

| Zeitmarke | Zeile | Erkannt | Eingesetzt | Frage |
|---|---|---|---|---|
| 2:44 | Z21 | „Da fittert die Person komplette PDFs“ (beide Läufe) | „füttert“ | „füttert“? |
| 5:52 | Z56 | „meide“ (Lauf 1) / „meinte“ (Lauf 2) | „meidet“ | „meidet … komplett“ oder „meinte …“? |
| 6:47 | Z65 | „Trägen der Halluzinationen“ (beide Läufe) | „Wegen“ | „Wegen“? |

Sprecher-Zweifelsfälle (kürzeste/unsicherste Beiträge, nur Beschriftung „Stimme 1/2“ betroffen): 10:42 Z95 „zu filtern und Code zu“; 5:30 Z52 „umstrukturieren, also ein bisschen aufräumen.“; 6:15 Z59 „um Matheaufgaben zu lösen.“; 3:52 Z34 „vorher wegfiltert, geht das doch verloren.“; 11:49 Z110 „Das ganze Wissen über“.

## N3 – Prüfung (Agent B)

Frischer Teilagent (general-purpose), kannte weder Prompt noch Werkzeug; bekam eine neutrale Kopie des Transkripts (ohne „Gemini“ im Kopf) und das Suchskript. 7,1 min, 25 Werkzeugaufrufe. Prompt im Wortlaut:

> Du bist Prüfer. Prüfe jede Sachaussage eines deutschen Podcast-Gesprächs an den Originalquellen.
>
> Material:
> - Transkript des Gesprächs: /home/claude/daten/s2n/b/transkript-b.md (lesen; Mitschrift per Spracherkennung, ca. 2.300 Wörter, Redebeiträge Z1–Z133 mit Zeitmarken). Lies keine anderen Dateien außer den hier genannten.
> - Quellen: 125 englische Interview-Transkripte mit Forschenden über ihre Arbeit mit KI (Anthropic Interviewer, 2025). Der Interviewer war selbst eine KI. Die CSV liegt unter /home/claude/daten/interviewer/scientists_transcripts.csv. Lies sie NIE ganz (180.000 Wörter), sondern nur über das Suchskript: […] id / wort / zaehle / wortlaut […]
> - Nummerierung: Im Gespräch heißen die Quellen „Interview 001“ bis „Interview 125“. Interview NNN entspricht transcript_id science_(NNN−1), vierstellig […]. Tabelle: /home/claude/daten/s2n/b/zuordnung-nr-id.csv.
> - Grobe Stichwortzählung (Anzahl Interviews von 125 […]): Literatur/Schreiben 105, Code/Datenanalyse 102, Ideen/Hypothesen 93, Prüfen/Verifizieren 95 (davon 62 allein durch das Wort „check“; ohne check/confirm 73), Misstrauen/Fehler 73, Zeitgewinn 62, Sorge um Fachkompetenz 9, Wunsch nach Grenzen 12. […]
>
> Auftrag:
> 1. Zerlege das Gespräch in Sachaussagen: jede Wiedergabe eines Interviews (mit oder ohne Nummer), jede Häufigkeits- oder Verallgemeinerungsaussage über die Interviews oder die Teilnehmenden, jede sonstige Behauptung über den Datensatz. Reine Moderation, Meinungen und Bilder der Moderierenden […] und Fragen ausnehmen. […]
> 2. Stufe jede Aussage ein: belegt / überzogen / nicht belegt. […] Prüfe Fachgebiete, Rollen (z. B. „Dozent“), Geschlecht und Details über Personen: Sind sie erfunden?
> 3. Quellennummern: Für jede Aussage mit genannter Interview-Nummer prüfe mit „id“, ob die Aussage unter dieser Nummer steht. Spalte „Nr. trifft“: ja / teilweise / nein. Bei „nein“ suche mit „wort“, ob der Inhalt unter einer anderen Nummer vorkommt, und nenne sie. […]
> 4. Nenne zu jeder Aussage 1–3 Belegstellen […] WÖRTLICH […]; prüfe jede Stelle mit „wortlaut“. […]
> 5. Spracherkennung: Wirkt eine Stelle verstümmelt oder sinnlos, urteile nicht über den Inhalt, sondern markiere „Erkennung?“ […].
> 6. Markiere Aussagen, die eine teilnehmende Person falsch oder herabsetzend wiedergeben (Persönlichkeitsschutz).
>
> Ausgabe: […] /home/claude/daten/s2n/b/pruefung-transkript.md mit Tabelle (Nr | Stimme | Aussage | Z | Zeitmarke | genannte Nr. | Nr. trifft | Urteil | Beleg-IDs | Begründung), Belegblöcken und Zusammenfassung […]

(Vollständiger Wortlaut im Sitzungsverlauf; die mit […] gekürzten Stellen entsprechen wörtlich dem S2-Prüfprompt in `STATUS-s2-podcast-teilA-2026-11-02.md`.)

**Ergebnis:** 37 Aussagen; **belegt 13, überzogen 23, nicht belegt 1** (Nr. 21: KI werde „von vielen Forschenden ganz ans Ende des wissenschaftlichen Prozesses verschoben“). Vergleichszählungen: **23 von 37 Aussagen nennen eine Interview-Nummer (62 %); davon trifft sie 19-mal (83 %), 4-mal nicht**: 031 → Inhalt in 035 · 077 → 039 (und 042), dazu der Begriff „Frankensteinpapiere“, der in keinem Interview steht · 052 → 054 · 036 → 039 und 122 (zwei Quellen zu einer verschmolzen). Alle 11 Häufigkeitsaussagen überzogen oder nicht belegt. „Interview 042“, die Beispielnummer aus dem Prompt, fällt zweimal; die Nummer passt beide Male zum Inhalt.
Persönlichkeitsschutz-Befunde: vier falsche Zuordnungen; Interview 042 „wortwörtliches“ Zitat ergänzt und Geschlecht zugeschrieben; Interview 016 Studierende „krachend durchgefallen“ (Dritte). Anders als in S2 lässt sich nichts korrigieren (Audio fest; N-Fallstrick: nicht nachbearbeiten); alles ist in Bilanz und Making-of offengelegt. Für G2c wichtig.
Erkennung?-Fälle: keine.

## Auswahl der drei Prüfaussagen (Regel S2 Schritt 3.4)

Regel: je eine Aussage je Urteilsstufe; innerhalb der Stufe bevorzugt Lehre, dann Prüfen, dann Schreiben; bei Gleichstand die mit genannter Nummer. Reihenfolge im Element chronologisch.
1. **Nr. 21, nicht belegt** (8:38–8:53, Z79–Z81): einzige Aussage dieser Stufe; Thema Schreiben/Arbeitsprozess. Belegstellen 0041, 0051, 0025.
2. **Nr. 33, überzogen** (12:01–12:12, Z112–Z113): Interview 016, Studierende „krachend durchgefallen“; Lehre. Belegstellen 3 × 0015.
3. **Nr. 34, belegt** (12:13–12:25, Z115): Interview 016, Suchbegriffe für PubMed; Lehre. Belegstellen 2 × 0015 (zweite Stelle per `wortlaut` ergänzt, weil Agent B nur eine nannte).
Dass 2 und 3 aus demselben Interview stammen, ist gewollt: Überzogenes und Belegtes stehen 25 Sekunden auseinander.

## N4 – Element

`interactions/podcast-forschende-ki-notebook.html`, aus dem S2-Player übernommen; Abweichungen nach Auftrag: Kennzeichnung „Gespräch und Stimmen KI-erzeugt (Gemini Notebook, Audio-Überblick, 02.11.2026); Inhalt ungeprüft; Mitlese-Text per Spracherkennung.“; Stimme 1/Stimme 2; Making-of mit Anpassungsprompt, Einstellungen, Datum, erstem Lauf, Vorverarbeitung und sieben gefundenen Schwächen; Transfer-Satz zu Gemini-Notebook-Chat („keine unabhängige Prüfung“). Kopfzeile „etwa 20 Minuten“ (14:37 Hören + Übung). Höhenmeldung mit eigener ID `podcast-forschende-ki-notebook`. Prüf-Zeitfenster aus Wortzeiten (über mehrere Redebeiträge). Nicht in `kapitel04.qmd` eingebunden (erst nach G2c).

## N5 – Prüfung

- `node --test tests/podcast-s2n.test.mjs`: **8/8** (Manifest, Nummern 001–125 und Zuordnung, Korrekturen begründet, Player = Manifest, Kennzeichnung, mp3 vorhanden, Zeitfenster, Zahlen aus Zählung, IDs und **wörtlicher** Abgleich aller Prüfstellen mit der CSV).
- Playwright 1200/390 px, Klick und Tastatur (`scripts/pruefe-podcast-s2n.cjs`, Testrahmen mit iframe wie im Buch): alle Phasen bedienbar; Audiodauer 877,4 s; Hervorhebung an drei Stichproben (Zeilen 14, 67, 120) synchron; Klick auf Zeile springt (±0,5 s); **Prüf-Zeitfenster** starten auf ±0,05 s und halten 0,2–0,3 s nach dem Ende an; Kopier-Knopf; Fokus auf Phasenüberschrift; kein horizontales Scrollen; **keine Konsolenfehler**; iframe-Höhe 1.686 px (Spalte 760 px) bzw. 2.954 px (390 px).
- axe im Element (1200 und 390 px): **keine Verstöße**.
- Quarto-Render entfällt (Element nicht eingebunden, Auftrag N5). Druck entfällt bis G2c.
- Screenshots: Tresorit `Projektnotizen-Claude/mollick-formate/s2n-notebook/screens-s2n/` (alle Phasen 1200/390, Dunkelmodus, `befunde.txt`). Dort auch `transkript.md`, `pruefung-transkript.md` und die mp3 zum Anhören.

## N6 – Nutzungsbedingungen

Abgerufen am 02.11.2026. Konto laut Protokoll „Google AI Plus o. ä.“ (Vorlagentext; **angenommen: privates Google-Konto mit Abo, kein TH-Köln-Workspace**). Für diesen Fall gelten laut Google die allgemeinen Google-Nutzungsbedingungen.

1. Hilfeseite „Learn about Gemini Notebook“, https://support.google.com/notebooklm/answer/16164461?hl=en (ohne Datum): „For other users accessing Gemini Notebook, the Google Terms of Service apply to your use of Gemini Notebook.“ (Workspace: Google Workspace Terms of Service; Workspace for Education: Education-Bedingungen.)
2. Dieselbe Seite: „Some of our services, including Gemini Notebook, allow you to generate original content. Google won't claim ownership over that content.“
3. Google-Nutzungsbedingungen, https://policies.google.com/terms?hl=en („Effective July 30, 2026“), Abschnitt „Your content“: „Some of our services allow you to generate original content.“ … „Google won’t claim ownership over that content.“
4. Dieselbe Seite, Abschnitt „Don't abuse our services“, als Missbrauch genannt: „misleading others into thinking that generative AI content was created by a human“ – die Kennzeichnung im Player deckt das ab.
5. Eine ausdrückliche Regel zur kommerziellen Veröffentlichung von Audio-Überblicken fand sich auf keiner der beiden Seiten; die Hilfeseite verlangt allgemein, Urheberrechte Dritter zu achten („Respect copyright laws“).

Keine eigene Rechtsauslegung. Offen bleiben (a) ob Logos die Veröffentlichung eines Audio-Überblicks akzeptiert, (b) welches Konto tatsächlich genutzt wurde. Daraus die G2c-Option „bei Logos nachfragen“.

## N7 – Vergleich

`VERGLEICH-s2-elevenlabs-notebook-2026-11-02.md`. Kern: S2 33/6/0 bei 3.690 Wörtern Auszug, S2-N 13/23/1 bei 179.809 Wörtern; S2-N verwechselt jede sechste Quellennummer und erfindet einen Begriff, ist aber das wirklichkeitsnähere Lehrstück. ElevenLabs-Spalte (Dauer, Roman-Zeit) offen bis S2 Sitzung B.

## Für eine spätere Sitzung (falls G2c S2-N wählt)

S2 Schritte 6–8 für diese Fassung: Kapiteltext (Zeitangabe ≈ 20 min, Befund 37/13/23/1), Druckkasten mit einer der drei Aussagen (Vorschlag Nr. 33, Interview 016), Lösung in `kapitel10-appendix05-loesungshinweise.qmd`, Making-of-Kasten; Anker `#sec-podcast-interviews` mit S2 abstimmen (beide Branches fügen an derselben Stelle ein). Bei Option (c) Vergleichszahl aus der Vergleichsnotiz.

## G2c und Hörproben – Entscheide (Roman, 02.11.2026, MC)

- **G2c: erst nach S2 Sitzung B.** Grundlage dann: diese Notiz und `VERGLEICH-s2-elevenlabs-notebook-2026-11-02.md` (ElevenLabs-Spalte nach Sitzung B ergänzen). S2 Sitzung B stellt am Ende G2c zusammen mit G3.
- **Rechte, falls S2-N gewählt wird: nur online verwenden.** Die Druckfassung erhält kein Gemini-Audio; Druckkasten dann ohne Bezug auf das Hörstück aus Gemini Notebook oder mit der S2-Fassung. Konto bleibt als privates Google-Konto mit Abo angenommen.
- **Hörproben: später nachhören.** Die drei Einsetzungen (2:44 „füttert“, 5:52 „meidet“, 6:47 „Wegen“) bleiben vorläufig; Änderung nur in `_src/audio/s2n-notebook/erkennung-korrekturen.json`, dann `audio-s2n-sprecher.py` und `audio-s2n-daten.py` neu laufen lassen.
- **Nächste Sitzung:** S2 Sitzung B (nach Romans ElevenLabs-Vertonung), Startprompt:

> Lies `claude/mollick-formate/STATUS-s2-podcast-teilA-2026-11-02.md`, Abschnitt 5 von `claude/mollick-formate/AUFTRAG-s2-interviews-podcast-2026-11-02.md` und `claude/mollick-formate/VERGLEICH-s2-elevenlabs-notebook-2026-11-02.md`. Die ElevenLabs-Blöcke liegen in Tresorit `06-Lehrbuch-Publikation-Logos/Audio-S2-Podcast/`. Baue sie ein, prüfe, ergänze in der Vergleichsnotiz die ElevenLabs-Spalte (Dauer, Roman-Zeit) und frage am Ende nach G2c und G3 (Multiple Choice). Entscheid zu S2-N vorab: falls gewählt, nur online.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (Branch `mollick-s2n-notebook`, gepusht, gemergt: nein)
