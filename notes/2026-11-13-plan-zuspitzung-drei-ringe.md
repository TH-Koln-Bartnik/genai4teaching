# Plan: Zuspitzung nach drei Ringen (13.11.2026)

Grundlage: `main` @ `2ba1edb`, Druckwörter nach `scripts/zaehle_druck.py`. Schema: drei Ringe nach Wiggins und McTighe (2005), umgesetzt mit Lehners Sieben der Reduktion (2009). Jede Entscheidung hat Roman am 13.11. per MC getroffen; die Liste mit Empfehlung und Abweichungen steht in `ENTSCHEIDUNGEN-drei-ringe-2026-11-13.md`. Die Empfehlungen kamen aus einer Nutzwertanalyse (`nwa.py`, sechs Kriterien: Kernbotschaft 25 %, Handlungsrelevanz 20 %, Haltbarkeit 20 %, Evidenz 15 %, eigene Praxis 10 %, Redundanzfreiheit 10 %), die gegen gleiche Gewichte robust war: Die Gruppe „online“ blieb stabil, Verschiebungen gab es nur zwischen benachbarten Ringen.

Ringe: **Kern** bleibt im Druck vollständig. **Wichtig** kommt verdichtet in den Druck. **Kennenswert** steht online, im Druck ein Satz mit QR-Code.

## 1. Ergebnis in Zahlen

| | Druckwörter |
|---|---:|
| heute (Vorwort, Kap. 1–7, Anhang A, B) | 60.585 |
| Kürzung nach Ringen in den Abschnitten | −18.450 |
| Schlüsselbegriffe-Kästen ohne Definition | ≈ −2.000 |
| **danach** | **≈ 40.100** |
| Praxis-Primer (Anhang C, Kurzfassung) | +1.500 |

Mit dem Primer landen rund 41.600 Druckwörter, also etwa 230 Seiten bei 180 Wörtern je Seite, dazu Abbildungen. Das liegt näher am Verlagsvertrag (ca. 250 Seiten, siehe `claude/logos-vertrag-und-formatvorgaben.md`) als das Budget von 53.500 Wörtern aus dem Plan vom 03.11.

**Korrektur zu den Zahlen in den MC-Fragen.** Der Zähler rechnet den Apparat am Kapitelende (Kernaussagen, Schlüsselbegriffe, Lernfragen) dem letzten Abschnitt zu. Einige Zahlen in den Fragen waren deshalb zu hoch: „Blick ins Modell“ hat 217 statt 1.412 Wörter Text, „Wie echt ist das Gegenüber?“ 649 statt 1.761, „Was die Forschung seit 2025 zeigt“ 2.072 statt 3.110, „Kurs-Integration“ 298 statt 1.243, „Was Sie im Buch erwartet“ 360 statt 1.340. Die Ring-Entscheidungen gelten weiter. Die Zielwerte unten rechnen mit dem Text ohne Apparat; wo der Text schon unter dem Ziel liegt, bleibt er, wie er ist.

## 2. Die Kernbotschaft, an der alles hängt

Aus den Kernaussagen von Kap. 1, 4 und 7 ergibt sich der innerste Ring des Buchs. Generative KI senkt den Aufwand für Lehrmethoden, die wirken, aber Zeit kosten. Die Hauptgefahr für das Lernen ist nicht das Täuschen, sondern das Auslagern des Denkens. Über die Wirkung entscheiden Leitplanken in Aufgabe und Rückmeldung, nicht das Werkzeug und nicht der System-Prompt. Die Arbeit der Lehrenden verschiebt sich dabei vom Herstellen zum Prüfen. Jede Kürzungssitzung prüft verdichtete Abschnitte gegen diese vier Sätze: Was keinen davon belegt, anwendet oder prüfbar macht, geht in den äußeren Ring.

## 3. Querschnittsregeln

1. **Eine Typologie.** Das Buch ordnet Wissen nur noch nach Erinnern, Verstehen und Anwenden. Hatties knowing that/how/with fällt im Druck weg (Kap. 4, Kennenswert). Kap. 7 ersetzt „syntaktisch / semantisch / pragmatisch“ in den Zwischenüberschriften und Steckbriefzeilen durch dieselben drei Begriffe.
2. **Jedes Beispiel lebt einmal.** Bullwhip und Little's Law nur in Kap. 7, Kap. 6 verweist. PS2 Pal nur einmal in Kap. 6. Centaur und Cyborg nur in Kap. 3, Kap. 2 verweist. Der Economic Index erscheint im Druck nur noch in Kap. 1 als Satz mit QR-Code; das Bibliothek-Spiel in Kap. 3 geht online.
3. **Befunde stehen einmal.** Die Evidenz zu Auslagerung und Leitplanken steht vollständig in Kap. 4; Kap. 1 nennt sie knapp, Kap. 5 („Prüfen“) verweist.
4. **Technik nur so tief, wie die Didaktik sie braucht.** Chronik, Skills und MCP, Gedächtnis und Modellwahl bleiben verdichtet im Druck, die Interpretierbarkeitsstudie und die Linkliste gehen online. Die drei Preisstufen (kostenlos, Gelegenheitsnutzung, professionell) bleiben ausdrücklich im Druck, weil Lesende sie typischerweise unterschätzen.
5. **Apparat ohne Dopplung.** Schlüsselbegriffe-Kästen zeigen Begriff und Beispielsatz; die Definition steht im Glossar.
6. **Kap. 3 wächst nicht.** Die geplante vierte Ebene „Organisation“ entfällt im Druck.
7. Geltende Regeln bleiben: keine Platzhalter, keine TODO-Kommentare, Akronyme erst erklären, IDs bleiben, Kürzungen per MC in Paketen, Abschluss mit `ergebnisse-sichern`.

## 4. Kürzungsaufträge je Abschnitt

„Körper“ heißt Druckwörter ohne Kapitelend-Apparat. Abschnitte, die nicht in der Tabelle stehen, sind Kern und bleiben.

| Kap. | Abschnitt | Körper heute | Ring | Ziel |
|---|---|---:|---|---:|
| Vw | sec-lernpfade | 569 | Kennenswert | 60 |
| Vw | sec-wie-dieses-buch-lehrt | 854 | Wichtig | 300 |
| Vw | sec-uebersicht + sec-neue-moeglichkeiten | 306 | Wichtig (nach K1) | 0 |
| 1 | sec-nutzung + sec-spiel-ki-aufgaben | 1.176 | Kennenswert | 120 |
| 1 | sec-kapiteluebersicht | 360 | Wichtig | 350 |
| 2 | sec-harness | 1.058 | Wichtig | 500 |
| 2 | sec-informiert | 171 | online | 0 |
| 2 | sec-model-choice | 1.273 | Wichtig. Preisstufen bleiben | 650 |
| 2 | sec-prompts-schreiben-lassen + sec-prompting-myths | 474 | Wichtig | 300 |
| 2 | sec-agenten-praxis | 726 | Wichtig | 350 |
| 2 | sec-agenten-gedaechtnis | 707 | Wichtig | 350 |
| 2 | sec-gpt-bedeutung | 758 | Wichtig | 450 |
| 2 | sec-blick-ins-modell | 217 | Kennenswert | 60 |
| 2 | sec-energy | 205 | Wichtig | 150 |
| 3 | sec-aufgaben | 1.561 | Kennenswert | 250 |
| 3 | sec-arbeitsweisen | 730 | Wichtig | 450 |
| 3 | sec-leitungsaufgabe (ohne Kugel) | 380 | Kern | 300 |
| 4 | sec-ziele-genai | 649 | Wichtig | 400 |
| 4 | sec-wissenstypen + sec-anwendungsbeispiele | 803 | Kennenswert | 100 |
| 4 | sec-lerntechniken („Ausrichtung“-Liste raus) | 1.353 | Kern | 1.150 |
| 4 | sec-evidenz (Text oder Tabelle) | 2.072 | Kern | 1.700 |
| 5 | sec-schemas + sec-4d + sec-4d-nutzung | 715 | Wichtig | 450 |
| 5 | sec-delegation + sec-capabilities | 1.052 | Wichtig | 650 |
| 5 | sec-diligence | 428 | Wichtig | 300 |
| 5 | Richtlinien + sec-ki-vo | 564 | Kennenswert | 80 |
| 5 | sec-dokumentation | 746 | Wichtig | 500 |
| 5 | sec-pruefen + Detektor + vier Säulen | 2.514 | Kern. Dopplung raus | 1.900 |
| 5 | sec-kurs-integration | 298 | Wichtig | 298 |
| 6 | sec-recherche | 1.013 | Wichtig | 700 |
| 6 | sec-podcast-interviews | 531 | Wichtig | 250 |
| 6 | sec-copilot | 579 | Wichtig | 200 |
| 6 | sec-cyborg-writing + sec-bots-quellentreue | 1.047 | Kennenswert | 150 |
| 6 | sec-coding | 1.439 | Kennenswert | 250 |
| 6 | sec-widget-littles-law + sec-widget-bullwhip | 1.001 | nur Kap. 7 | 40 |
| 6 | sec-tutor + sec-complex-tutors | 776 | Kern. zusammengelegt | 650 |
| 6 | sec-simple-tutors | 774 | Wichtig | 300 |
| 6 | sec-tutor-betrieb | 1.125 | Wichtig | 650 |
| 6 | sec-sim-echtheit | 649 | Wichtig | 500 |
| 7 | sec-bsp-quizspiele | 543 | Wichtig | 300 |
| 7 | sec-bsp-lernsong-forecast | 556 | Wichtig | 350 |
| 7 | sec-bsp-widgets (+ Little's Law kurz) | 586 | Wichtig | 500 |
| 7 | sec-bsp-simulationen-lehrende (+ Bullwhip) | 621 | Wichtig | 450 |
| 7 | sec-fall-job-buddy | 651 | Kennenswert | 120 |
| A | Anhang A Prompt-Sammlung | 5.218 | Wichtig | 3.800 |

Zusätzlich ohne Wortziel: Kap. 3 `sec-leitungsaufgabe` ohne Kugel-Simulation; Kap. 4 `sec-lerntechniken` ohne die ältere Liste „Ausrichtung der Anpassungen“; Kap. 2 „Wie bleiben Sie informiert?“ auf eine Online-Seite; Kap. 6 DuPont-Fall nach Anhang A online.

## 5. Ablauf

Eine Sitzung je Kapiteldatei auf eigenem Branch (`ringe-k1` … `ringe-k7`, `ringe-anhang`), höchstens drei parallel, wie im Plan vom 03.11. Reihenfolge nach Gewinn und Abhängigkeit: zuerst Kap. 6 (−5.200) und Kap. 7 (Typologie, nimmt Beispiele aus Kap. 6 auf), parallel Kap. 2; dann Kap. 5, Kap. 4, Kap. 3; zum Schluss Kap. 1 und Vorwort (Buchübersicht als Tabelle), Schlüsselbegriffe, Anhang A, Lösungshinweise an gestrichene Lernfragen anpassen. Online-Fassungen der Kennenswert-Abschnitte bleiben als `content-visible when-format="html"`, nichts wird gelöscht.

**Startauftrag je Sitzung:** „Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/zuspitzung-drei-ringe/PLAN-zuspitzung-drei-ringe-2026-11-13.md`, Abschnitte 2–4, und die Entscheidungsliste daneben. Du besitzt nur `<Kapiteldatei>` auf Branch `ringe-<kürzel>`. Setze die Ringe um: Kennenswert-Abschnitte in einen Online-Block mit einem Drucksatz und QR-Code, Wichtig-Abschnitte auf das Ziel verdichten, Kern unverändert. Kürzungen in Paketen per MC freigeben lassen, `scripts/zaehle_druck.py` vor und nach, Render, Playwright 1200/390 px, Diff per MC, Merge, `ergebnisse-sichern`.“

## 6. Quellen zur didaktischen Reduktion

Lehner, M. (2009). *Viel Stoff – wenig Zeit: Wege aus der Vollständigkeitsfalle* (Werkzeugauszug „Toolbox der Reduktion“). https://fd.phwa.ch/wordpress/wp-content/uploads/2015/02/Toolbox_Reduktion_Lehner.pdf

Sundararajan, N., & Adesope, O. (2020). Keep it coherent: A meta-analysis of the seductive details effect. *Educational Psychology Review, 32*(3), 707–734. https://doi.org/10.1007/s10648-020-09522-4

Universität Bremen. (o. J.). *Stoff auswählen* [Grüner, Arnold et al., Lehner zur didaktischen Reduktion]. https://www.uni-bremen.de/inspiration-lehre-an-der-universitaet-bremen/lehre-gestalten/vorbereitung/stoff-auswaehlen

Wiggins, G., & McTighe, J. (2005). *Understanding by design* (Expanded 2nd ed.). ASCD. Auszug Kap. 1 mit Abb. 1.2 „Establishing Curricular Priorities“: https://digitallearning.newhaven.edu/wp-content/uploads/2022/04/Understanding-by-Design.pdf

Wikibooks. (o. J.). *Bildungstheoretische Didaktik* [Klafkis fünf Grundfragen der didaktischen Analyse]. https://de.wikibooks.org/wiki/Lehren,_Lernen_und_Bildung_metaphorisch_verstehen/_Denkwerkzeuge/_Didaktische_Modelle/_Bildungstheoretische_Didaktik

Ablage: Projekt `claude/zuspitzung-drei-ringe/` (PLAN, ENTSCHEIDUNGEN, nwa.py, ziel.py). Tresorit und Repo: siehe Statuszeile im Chat.
