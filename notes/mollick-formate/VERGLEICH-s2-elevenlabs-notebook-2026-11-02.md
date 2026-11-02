# Vergleich S2 (Drehbuch-Agent + ElevenLabs) und S2-N (Gemini Notebook) – Stand 02.11.2026

Grundlage für Gate **G2c**. Zahlen nur aus Skript- und Prüfagenten-Ausgaben: S2 aus `STATUS-s2-podcast-teilA-2026-11-02.md` und `_src/audio/s2-podcast/pruefung-drehbuch.md` (Branch `mollick-s2-podcast`), S2-N aus `STATUS-s2n-notebook-2026-11-02.md` und `_src/audio/s2n-notebook/pruefung-transkript.md` (Branch `mollick-s2n-notebook`). S2 Sitzung B (echte ElevenLabs-Tonspur) steht noch aus; Felder, die davon abhängen, sind markiert.

| | S2: Drehbuch-Agent + ElevenLabs v3 | S2-N: Gemini Notebook, Audio-Überblick |
|---|---|---|
| Was das Modell sah | Auszug per Skript: 93 Originalstellen, 3.690 Wörter | alle 125 Interviews, 179.809 Wörter |
| Dauer | Platzhalter Piper 7:07; ElevenLabs-Fassung **offen (Sitzung B)** | 14:37 (verlangt: etwa 8 min) |
| Themen | 5 | Einstieg + 5 |
| Sachaussagen (Prüfagent) | 39 | 37 |
| belegt / überzogen / nicht belegt | 33 / 6 / 0 | 13 / 23 / 1 |
| Anteil überzogen oder nicht belegt | 15 % | 65 % |
| Quellenangabe | jedes Zitat mit Transkript-ID (Prompt-Vorgabe, Format `[science_0042]`), alle IDs passend | 23 von 37 Aussagen mit Interview-Nummer (62 %); davon 19 richtig, 4 falsch (031, 077, 052, 036) |
| Häufigkeitsaussagen | unter den 6 überzogenen u. a. „fast so präsent“ und „Viele ziehen Grenzen“ (nicht eigens gezählt) | alle 11 überzogen oder nicht belegt („alle Befragten“, „extrem beliebt“, „ganz deutlich“) |
| Persönlichkeitsschutz | 3 Verkürzungen, **vor der Vertonung korrigiert** (Drehbuch ist Text) | 4 falsche Zuordnungen, 1 ergänztes „wortwörtliches“ Zitat, Geschlechtszuschreibungen, Studierende „krachend durchgefallen“ (Dritte); **nicht korrigierbar** (Audio fest), nur offenlegbar |
| Erfundenes | nichts | Begriff „Frankensteinpapiere“ (in keinem Interview) |
| Typische Schwäche mit Zeitmarke | „Viele ziehen klare persönliche Grenzen“ (Zeile 28, im Platzhalter 5:43; Zählung 12/125, davon 4 Fehltreffer) | „Interview 077 … Frankensteinpapiere“ (6:58): falsche Nummer und erfundener Begriff; Inhalt steht in Interview 039 |
| Bauzeit Agent | Drehbuch 75 s, Prüfung 5,5 min, Sitzung A gesamt nicht erfasst | Spracherkennung 20 min Rechenzeit (2 Kerne), Prüfung 7,1 min, Sitzung N-B ca. 1,5 h |
| Bauzeit Roman | Vertonung 20–25 min (geschätzt, **offen**) | ca. 15–20 min (geschätzt laut Auftrag; im Protokoll nicht erfasst) |
| Kosten | ElevenLabs bezahlter Tarif (Starter); Betrag nicht erfasst | Google-Abo laut Protokoll („Google AI Plus o. ä.“); Betrag nicht erfasst |
| Rechtelage | bezahlter ElevenLabs-Tarif für kommerzielle Nutzung (laut S2-Auftrag; hier nicht erneut geprüft) | Google beansprucht kein Eigentum am erzeugten Inhalt; keine ausdrückliche Regel zur Veröffentlichung von Audio-Überblicken; Verbot, KI-Inhalte als menschlich auszugeben (Kennzeichnung im Player erfüllt das). Wörtliche Stellen: STATUS-s2n, Abschnitt N6 |
| Stimmen | Lea / Jonas (Namen, vom Agenten gesetzt) | „Stimme 1“ / „Stimme 2“; Gemini-Stimmen vollenden einander oft die Sätze |
| Mitlesetext | Drehbuch = Transkript (exakt) | Spracherkennung, 9 Erkennungsfehler korrigiert, 3 Stellen zur Hörprobe |

**Was der Vergleich zeigt.** Dasselbe Ausgangsmaterial, zwei Wege: Der Agent mit vorab gezogenem Auszug blieb nahe an den Quellen (15 % problematisch), Gemini Notebook mit dem ganzen Material spitzte stark zu (65 %) und verwechselte jede sechste Quellennummer. Didaktisch ist S2-N das deutlichere Lehrstück für Kap. 4.1 („was die KI aus Quellen macht, wird an den Quellen geprüft“) und entspricht dem Weg, den Lehrende tatsächlich gehen würden. Dagegen stehen die Länge (14:37) und dass das Buch falsche Zuschreibungen an reale (anonyme) Teilnehmende veröffentlichen würde, die sich nicht korrigieren, nur offenlegen lassen. Der Unterschied hat zwei Ursachen, die sich hier nicht trennen lassen: Werkzeug und Vorauswahl des Materials.

**Offen bis zum vollen Vergleich:** Dauer, Hörqualität und Roman-Zeit der ElevenLabs-Fassung (S2 Sitzung B).
