# OPTIONEN: Animationen und Interaktionen, die Fable 5.2 für die Lehre zeigen

Stand: Di 10.11.2026, 20:15 · Status: **Auswahl getroffen, nichts gebaut.** Rangfolge, Entscheidungen und Startprompts: `STATUS-auswahl-startprompts-2026-11-10.md` (ersetzt den Abschnitt „Empfehlung“ unten).
Auftrag Roman (10.11., 19:44): viele Optionen für mitreißende, lehrwirksame Animationen/Interaktionen im Skript, die Fable 5.2 eindrucksvoll zeigen; beste empfehlen; auf Lernforschung stützen. Nachtrag 20:00: Roman stellt keine eigenen Daten bereit.

## Abgleich mit dem Bestand (nicht doppelt bauen)

Schon im Buch oder in Arbeit: Token-Animation T1, Genrefilm „Nächstes Token“, Streich-Test (2.4), Detektor-Duell, „Höher oder tiefer“, Escape Room, Lernspiel LLM/RAG/Agent, Agentic-Animationen (u. a. Konzept 7 Skills), Tutor-Kosten-Rechner, Abb. 3.1 Heatmap, Podcast, Lernsongs, Statistik-Animationen (Optionen vom 03.11.). Vor dem Bau von J (Frontier) gegen `claude/frontier-begriff/` und Abb. 3.1 prüfen.

## Filter aus der Lernforschung

1. Animation schlägt Standbild im Mittel nur knapp (g = 0,226; Berney & Bétrancourt, 2016); deutlich nur, wo die Art der Veränderung selbst Lernstoff ist (Ploetzner et al., 2021).
2. Vorhersage vor der Auflösung (Brod, 2021); Geltung belegt für Faktenwissen.
3. Schritte im eigenen Tempo (Segmentierung; Rey et al., 2019).
4. Fälle vergleichen lassen, Prinzip danach nennen (Alfieri et al., 2013, d = 0,50).
5. Selbsterklärung anstoßen (Bisra et al., 2018); konstruktiv/interaktiv vor passiv (Chi & Wylie, 2014).
6. Simulationen brauchen Scaffolding (Chernikova et al., 2020).
7. Erst Problem, dann Instruktion (g = 0,36; Sinha & Kapur, 2021) – nicht für fachübergreifende Fähigkeiten belegt.

## Empfehlung (erste Fassung, 19:55; überholt durch die STATUS-Notiz)

| Nr. | Titel | Was Lesende tun | Was Fable zeigt | Evidenz | Kapitel |
|---|---|---|---|---|---|
| A | Zwei Tutoren, eine Klausur | Klausurergebnis dreier Gruppen vorhersagen; knapp 1000 Punkte wandern durch Übung und Klausur | Studie aus veröffentlichten Zahlen als datentreue Animation | Brod (2021); Inhalt: Bastani et al. (2025) | 3 |
| B | Hundert Antworten | Fehlerzahl schätzen; 100 echte Antworten auf dieselbe Frage fallen in Fächer; Temperaturregler | Agentische Kette: Abfragen, Einordnen, Prüfen, Visualisieren | Ploetzner et al. (2021); Brod (2021) | 2.2 |
| C | Sie sind der Retriever | Aus 8 Textstücken 3 für eine Frage wählen; Vergleich mit der Vektorsuche; Antwort mit falschem Stück | Spiel aus echtem Firmenmaterial (anonymisiert) | Alfieri et al. (2013); Chi & Wylie (2014) | RAG-Praxisbeispiele |
| D | Ihre Kalibrierungskurve | Sieht eigene Sicherheit gegen eigene Trefferquote über alle Einschätzungen des Buchs | Arbeit quer durch das ganze Repo, bestehende Speicherstände verbinden | Butterfield & Metcalfe (2001) | Schluss/Anhang |
| E | Bauplan zum Mitnehmen | Zeitraffer Auftrag → Plan → Code → Test → Korrektur; Prompt kopieren und aufs eigene Fach umstellen | Der Bau selbst | Sweller & Cooper (1985) | bei jeder Interaktion, gesammelt in Kap. 6 |

## Weitere Optionen

| Nr. | Titel | Kern | Evidenz | Vorbehalt |
|---|---|---|---|---|
| F | Lernplan-Simulator | Vier Lernsitzungen auf Zeitstrahl legen, Behalten am Klausurtag ablesen | Cepeda et al. (2006) | Kurve ist Lehrmodell, kennzeichnen |
| G | Prompt-Kontrastlabor | Zwei Prompts, ein Unterschied; Ausgabe vorhersagen, Unterschied erklären | Alfieri et al. (2013); Bisra et al. (2018) | Ausgaben vorab erzeugt, veralten |
| H | Antwortautomat oder Tutor | Dialogbaum, Lesende spielen die Studentin | Chernikova et al. (2020) | Schreibaufwand hoch |
| I | Erst bewerten, dann Raster | Vier Antworten ordnen; danach Streuung von 20 KI-Bewertungen mit/ohne Raster | Sinha & Kapur (2021) | Geltung für Didaktikinhalte offen; echte Läufe nötig |
| J | Frontier-Sortierspiel | Zwölf Aufgaben innen/außen einordnen | Dell'Acqua et al. (2026) | Dopplung mit Abb. 3.1 prüfen |
| K | Erklären Sie es dem Bot | Lernen durch Lehren, live | Chi & Wylie (2014) | braucht Live-Modell, nur als Link |
| L | Prüfungs-Stresstest | Schalter für Aufsicht, Mündlich, Prozessdoku | keine geprüfte Studie für die Modellwerte | gestrichen |

## Candidate permanent notes

- Animationen übertreffen Standbilder nur dort deutlich, wo die Art der Veränderung selbst der Lernstoff ist.
- Eine Vorhersage vor der Auflösung macht aus einer Animation eine Abrufübung mit Überraschung.
- Der Zufall eines Sprachmodells wird erst in der Verteilung vieler Antworten sichtbar, nicht in der einzelnen Antwort.
- Ein Chatbot ohne Leitplanken verbessert das Üben und verschlechtert die Klausur.
- Das Prinzip wirkt stärker, wenn es nach dem Fallvergleich genannt wird statt davor.
- Der dokumentierte Bau einer Interaktion überzeugt mehr vom Werkzeug als die fertige Interaktion.

## Quellen (DOIs am 10.11.2026 per Websuche geprüft; mit * aus `references.json`, geprüft 02.11.)

Alfieri, L., Nokes-Malach, T. J., & Schunn, C. D. (2013). Learning through case comparisons: A meta-analytic review. *Educational Psychologist, 48*(2), 87–113. https://doi.org/10.1080/00461520.2013.775712
Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS, 122*(26), e2422633122. https://doi.org/10.1073/pnas.2422633122
Berney, S., & Bétrancourt, M. (2016). Does animation enhance learning? A meta-analysis. *Computers & Education, 101*, 150–167. https://doi.org/10.1016/j.compedu.2016.06.005
Bisra, K., Liu, Q., Nesbit, J. C., Salimi, F., & Winne, P. H. (2018). Inducing self-explanation: A meta-analysis. *Educational Psychology Review, 30*(3), 703–725. https://doi.org/10.1007/s10648-018-9434-x
Brod, G. (2021). Predicting as a learning strategy. *Psychonomic Bulletin & Review, 28*(6), 1839–1847. https://doi.org/10.3758/s13423-021-01904-1
*Butterfield & Metcalfe (2001). https://doi.org/10.1037/0278-7393.27.6.1491
*Cepeda et al. (2006). https://doi.org/10.1037/0033-2909.132.3.354
Chernikova, O., Heitzmann, N., Stadler, M., Holzberger, D., Seidel, T., & Fischer, F. (2020). Simulation-based learning in higher education: A meta-analysis. *Review of Educational Research, 90*(4), 499–541. https://doi.org/10.3102/0034654320933544
*Chi & Wylie (2014). https://doi.org/10.1080/00461520.2014.965823
Dell'Acqua, F., McFowland, E., III, Mollick, E., Lifshitz, H., Kellogg, K. C., Rajendran, S., Krayer, L., Candelon, F., & Lakhani, K. R. (2026). Navigating the jagged technological frontier. *Organization Science, 37*(2), 403–423. https://doi.org/10.1287/orsc.2025.21838
Ploetzner, R., Berney, S., & Bétrancourt, M. (2021). When learning from animations is more successful than learning from static pictures: Learning the specifics of change. *Instructional Science, 49*. https://doi.org/10.1007/s11251-021-09541-w
Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review, 31*(2), 389–419. https://doi.org/10.1007/s10648-018-9456-4
Sinha, T., & Kapur, M. (2021). When problem solving followed by instruction works: Evidence for productive failure. *Review of Educational Research, 91*(5), 761–798. https://doi.org/10.3102/00346543211019105
*Sweller & Cooper (1985). https://doi.org/10.1207/s1532690xci0201_3
