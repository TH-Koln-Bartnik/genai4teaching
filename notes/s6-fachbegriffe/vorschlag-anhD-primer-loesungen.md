# Fachbegriffe S6 Teil 2 – Vorschläge Anhang D, Primer, Lösungshinweise (kapitel09-appendix04-fortgeschrittene-nutzungsformen.qmd, anhang-primer.qmd, kapitel10-appendix05-loesungshinweise.qmd)

Stand: 2026-11-01, Branch `fachbegriffe-s6-teil2` (origin/main @ a80086b), Buchdateien unverändert (nur Vorschläge). Zeilennummern beziehen sich auf den aktuellen Stand (Anhang D 841, Primer 658, Lösungshinweise 80 Zeilen). Jede Datei zählt als eigenes Kapitel. Alle ALT mit grep -c -F geprüft: je genau 1 Treffer; keine Überlappung. Alle Vorschläge lassen sich je Datei in beliebiger Reihenfolge einspielen (Prüfskript, Ergebnis in Abschnitt 5).

Aufruf zum Einspielen (je Datei):
`python3 notes/s6-fachbegriffe/anwenden.py notes/s6-fachbegriffe/vorschlag-anhD-primer-loesungen.md <datei.qmd> <Ausschluss-IDs>`. Das Skript wendet alle Blöcke auf jede Zieldatei an; Blöcke der jeweils anderen Dateien melden „FEHLER … Treffer: 0“ und werden übersprungen. Sauberer: die IDs der anderen Dateien in die Ausschlussliste setzen (z. B. für Anhang D alle `PR-*` und `LH-*`).

## 1. Vorschläge

| Nr | Datei | Zeile | Typ | Begriff dt. | Begriff engl./Akronym | Beleg | Sicherheit |
|:--|:--|--:|:--|:--|:--|:--|:--|
| AD-01 | AnhD | 6 | B | Eingabe an die KI | Prompt | Typ B; erstes Auftreten im Anhang; Umschreibung wie Kap. 1 („Prompts (Eingaben an die KI)“) | – |
| AD-02 | AnhD | 6 | C | sechsteiliger Bauplan | CREATE-Muster | Akronym; Auflösung in Anhang B (kapitel07-…prompt-sammlung.qmd Z. 108: Character, Request, Examples, Adjustments & Constraints, Types of output, Evaluation & Steps) | – |
| AD-03 | AnhD | 9 | C | Netzwerk Hochschuldidaktische Weiterbildung NRW | hdw nrw | Selbstdarstellung „hdw nrw – Hochschuldidaktische Weiterbildung Nordrhein-Westfalen“ (https://hochschule-bochum.de/fileadmin/public/Die-BO_Einrichtungen/BO_Akademie/Lernen_und_Lehren/hdw_nrw.pdf); im Buch nirgends aufgelöst (auch Kap. 1 Z. 108, Vorwort Z. 3) | – |
| AD-04 | AnhD | 9 | A | abgeben, beschreiben, beurteilen, verantworten | *Delegation, Description, Discernment, Diligence* | dakan2025, Titel „The AI Fluency Framework …“ (https://aifluencyframework.org/); die vier Begriffe stehen ab Z. 208 in sieben 4D-Tabellen, erklärt werden sie erst in Z. 560. Erklärzusatz, kein reiner Klammerzusatz: bitte entscheiden | bestätigt |
| AD-05 | AnhD | 14 | B | Modell mit schrittweisem Nachdenken | Reasoning-Modell | Typ B; Umschreibung wie Kap. 1 („Reasoning (schrittweises Nachdenken)“); wiederkehrend Z. 33, 190 | – |
| AD-06 | AnhD | 27 | A | Automatisierungsgrad | *levels of automation* | parasuraman2000, Titel „A model for types and levels of human interaction with automation“; Abstract: „We outline a model for types and levels of automation …“ (doi:10.1109/3468.844354; Abstract via https://vufind.lboro.ac.uk/PrimoRecord/cdi_ieee_primary_844354) | bestätigt |
| AD-07 | AnhD | 31 | B | KI, die selbständig programmiert | Coding-Agent | Typ B; Glossar plant „Programmier-Agent“ | – |
| AD-08 | AnhD | 33 | B | aus Firmenkonten | Enterprise-Nachrichten | Typ B | – |
| AD-09 | AnhD | 33 | B | mehrstufige Recherche durch einen Agenten | Deep Research | Typ B; erstes Auftreten, ausführlich erst Z. 315 | – |
| AD-10 | AnhD | 38 | A | erwünschte Schwierigkeit | *desirable difficulty* | bjork2011, Titel „… Creating desirable difficulties to enhance learning“ (references.json). Zugleich Begriffsangleich: Buch sagt sonst „erwünschte Schwierigkeit(en)“ (Kap. 1 Z. 79, Kap. 3 Z. 69, Kap. 4 Z. 269), nur hier „wünschenswerte“ | bestätigt |
| AD-11 | AnhD | 72 | C | Zitierstil | APA | Akronym; „APA-Zitierstil“ als kürzeste laienverständliche Form in der wörtlichen Rede | – |
| AD-12 | AnhD | 132 | A | kognitive Belastung | *cognitive load* | sweller2011, Titel „Cognitive load theory“ (references.json) | bestätigt |
| AD-13 | AnhD | 135 | C | dauerhafte Kennung der Publikation | DOI | Akronym (Digital Object Identifier), erstes Auftreten außerhalb der Codeblöcke; danach 7 weitere Nennungen | – |
| AD-14 | AnhD | 136 | B | einheitliches Erscheinungsbild | Corporate Design | Typ B | – |
| AD-15 | AnhD | 182 | B | Programmier-Agent von OpenAI | Codex | Typ B; Produktname ohne Erklärung | – |
| AD-16 | AnhD | 184 | B | selbst eingerichtete Assistenten in ChatGPT | Custom GPTs | Typ B | – |
| AD-17 | AnhD | 184 | B | Anbindungen an fremde Dienste | Actions | Typ B | – |
| AD-18 | AnhD | 186 | B | sortiert Treffer vorab aus | screent | Typ B; deckt zugleich „Screening“ in Z. 306 ab | – |
| AD-19 | AnhD | 217 | B | Nachbesprechung | Debrief | Typ B; erstes von sieben „**Debrief.**“-Etiketten in den Übungskästen | – |
| AD-20 | AnhD | 235 | B | frei erfundene Angaben | Halluzinationen | Typ B (Fachbedeutung eines deutschen Worts); erstes Auftreten im Anhang | – |
| AD-21 | AnhD | 239 | A | Kontextrelevanz | *context relevance* | es2024 (Ragas), Volltext Abschnitt 3: „Context relevance The context c(q) is considered relevant …“ (https://arxiv.org/pdf/2309.15217v2; doi:10.18653/v1/2024.eacl-demo.16) | bestätigt |
| AD-22 | AnhD | 239 | A | Antworttreue | *faithfulness* | es2024, Volltext: „Faithfulness refers to the idea that the answer should be grounded in the given context“ (wie AD-21) | bestätigt |
| AD-23 | AnhD | 239 | C | Frage-Antwort-Datensatz | SQuAD 2.0 | Akronym (Stanford Question Answering Dataset); rajpurkar2018, Titel „… Unanswerable Questions for SQuAD“ | – |
| AD-24 | AnhD | 239 | A | unbeantwortbare Fragen | *unanswerable questions* | rajpurkar2018, Titel „Know What You Don’t Know: Unanswerable Questions for SQuAD“; doi:10.18653/v1/p18-2124 | bestätigt |
| AD-25 | AnhD | 241 | C | Listen häufiger Fragen | FAQ | Akronym; dang2026verified, Abstract „AI-generated podcasts, FAQs and quiz-based study guides“ | – |
| AD-26 | AnhD | 241 | A | Urteilslast | *judgement burden* | dang2026verified, Abstract: „the direction depends on the judgement burden, the expertise a learner must supply to screen AI output“ (arXiv:2610.07097) | bestätigt |
| AD-27 | AnhD | 243 | A | Nachtrainieren | *fine-tuning* | perczel2025, Abstract: „fine-tuning on authentic learning data significantly improves …“ (arXiv:2510.05087). Erstes Auftreten in Z. 243 (Rechtskontext, baresel2026 deutsch); dieselbe Sache in Z. 552 | bestätigt |
| AD-28 | AnhD | 306 | B | Übersicht über ein Forschungsfeld | Scoping Review | Typ B; figalova2026evaluating, Titel „… in a conceptually complex scoping review …“ | – |
| AD-29 | AnhD | 306 | A | Übereinstimmung zwischen Lauf und Lauf | *run-to-run consistency* | figalova2026evaluating, Titel „… Recall–workload trade-offs and run-to-run consistency“ (arXiv:2608.26885) | bestätigt |
| AD-30 | AnhD | 391 | A | Schwimmbahnen | *swimlanes* | omg2014bpmn, Spezifikation 2.0.2, Abschnitt 7.2: „There are two ways of grouping the primary modeling elements through ‚Swimlanes:‘“ (Pools und Lanes) (https://www.omg.org/spec/BPMN/2.0.2/PDF). Verbindet den Text mit „Pools oder Lanes“ im Prompt Z. 421 | bestätigt |
| AD-31 | AnhD | 451 | C | Diagrammdatei, Animation, Simulation | XML, HTML, Python | Akronyme; XML wird im Anhang sonst nur im Codeblock genannt | – |
| AD-32 | AnhD | 462 | C | Prozessdatei, Diagramm als Grafik | XML, SVG | Akronyme; SVG einziges Auftreten (nur HTML-Fassung) | – |
| AD-33 | AnhD | 549 | A | überhelfen | *overassist* | teo2026ai, Titel „AI Assistants Overassist“ (arXiv:2607.21306); der Text verweist ausdrücklich auf den Titel | bestätigt |
| AD-34 | AnhD | 551 | A | Redeanteil der Lernenden | *student talk time* | perczel2025, Abstract: „doubling student talk time“ (arXiv:2510.05087) | bestätigt |
| AD-35 | AnhD | 554 | C | Technische Hochschule | ETH | Eigenname; Einheitlichkeit mit Kap. 3 (K3-21, eingespielt) | – |
| AD-36 | AnhD | 554 | B | nacheinander | Crossover-Design | Typ B; wie Kap. 3 (K3-22, eingespielt) | – |
| AD-37 | AnhD | 554 | A | selbstreguliertes Lernen | *self-regulated learning* | barth2026steering, Titel „… self-regulated learning and cognitive engagement scaffolds in CS1“; doi:10.1145/3765964.3811656; wie K3-23 | bestätigt |
| AD-38 | AnhD | 554 | A | Gerüst | *scaffolding* | hou2026comet, Titel „Adaptive Scaffolding Needs Contingency …“ (arXiv:2609.22993) | bestätigt |
| AD-39 | AnhD | 556 | A | Leitplanken | *guardrails* | eastwood2026guardrails, Titel „Guardrails or Roadblocks? …“ (arXiv:2609.29995); erstes Auftreten von „Leitplanke“ im Anhang | bestätigt |
| AD-40 | AnhD | 564 | A | Schweizer-Käse-Modell | *Swiss cheese model* | reason2000, Volltext (BMJ, PMC1070929): „The Swiss cheese model of how defenses, barriers, and safeguards may be penetrated …“; doi:10.1136/bmj.320.7237.768 | bestätigt |
| AD-41 | AnhD | 565 | A | Prompt-Muster | *prompt patterns* | white2023, Titel „A prompt pattern catalog …“; Abstract „Prompt patterns are a knowledge transfer method …“ (arXiv:2302.11382) | bestätigt |
| AD-42 | AnhD | 565 | B | vorgegebene Rolle | Persona | Typ B; white2023, Volltext: „Persona pattern gives the LLM a persona or role“ | – |
| AD-43 | AnhD | 565 | A | umgedrehte Interaktion | *flipped interaction* | white2023, Volltext: „Flipped Interaction pattern requires the LLM to …“ (arXiv:2302.11382) | bestätigt |
| AD-44 | AnhD | 663 | B | KI-Portal der NRW-Hochschulen | KI:connect.nrw | Typ B; Kap. 2 Z. 407 beschreibt den Dienst, im Anhang ohne Erklärung | – |
| AD-45 | AnhD | 670 | B | unerwünschte Weitergabe | Leak | Typ B | – |
| AD-46 | AnhD | 674 | B | KI-Kompetenz | KI-Literacy | Typ B; Kap. 2 führt „KI-Kompetenz (*AI literacy*)“ | – |
| AD-47 | AnhD | 676 | C | Übungsumgebung von Amazon Web Services | AWS | Akronym; awsacademy2026 | – |
| AD-48 | AnhD | 689 | B | gespielte Studierendentypen | Personas | Typ B; andere Bedeutung als „Persona“ in Z. 565 (Rolle des Modells) | – |
| AD-49 | AnhD | 745 | C | Modul zu nachhaltigem Lieferkettenmanagement | SSCM | Akronym; Auflösung wie Kap. 6 Z. 99 („*Sustainable Supply Chain Management* (SSCM)“); deckt „Supply-Chain-Management“ Z. 820 mit ab | – |
| AD-50 | AnhD | 749 | C | Tabelle als Textdatei | CSV | Akronym; im Prompt Z. 770 und in der 4D-Tabelle Z. 786 wieder | – |
| AD-51 | AnhD | 808 | B | Einzelbilder des Comics | Panels | Typ B | – |
| PR-01 | Primer | 3 | B | Eingaben an die KI | Prompts | Typ B; wie Kap. 1 | – |
| PR-02 | Primer | 14 | A | Nachbesprechung | *debriefing* | keiser2021, Titel „A meta-analysis of the effectiveness of the after-action review (or debrief) …“; doi:10.1037/apl0000821 (im Primer Z. 530 zitiert). Erstes Auftreten in der Tabelle; Kap. 4/6 sagen „Debriefing“ | bestätigt (Wortform *debrief* im Titel) |
| PR-03 | Primer | 29 | A | segmentierte Darstellung | *segmenting* | rey2019, Titel „A Meta-analysis of the Segmenting Effect“; doi:10.1007/s10648-018-9456-4 | bestätigt |
| PR-04 | Primer | 31 | A | Hervorhebungen | *signaling* | schneider2018, Titel „A meta-analysis of how signaling affects learning with media“; doi:10.1016/j.edurev.2017.11.001 | bestätigt |
| PR-05 | Primer | 70 | B | Animationscode zum Ausführen im Browser | Manim-Zellen für Colab | Typ B; Druckfassung (Bildunterschrift): Manim und Colab werden nur in der Online-Fassung (Z. 178, 492) erklärt | – |
| PR-06 | Primer | 93 | C | Effektstärke | d | Kürzel; erstes Auftreten (nur online); danach g, d in Z. 93, 583 | – |
| PR-07 | Primer | 95 | A | Hinweisreize | *cues* | dekoning2009, Titel „Towards a Framework for Attention Cueing in Instructional Animations …“; doi:10.1007/s10648-009-9098-7; wie Kap. 3 | bestätigt |
| PR-08 | Primer | 95 | A | Flüchtigkeitseffekt gesprochener Information | *transient information effect* | leahy2011, Titel „Cognitive load theory, modality of presentation and the transient information effect“; doi:10.1002/acp.1787 | bestätigt |
| PR-09 | Primer | 106 | C | Webseiten-Vorlage mit Vektorgrafik | HTML/SVG | Akronyme (nur online) | – |
| PR-10 | Primer | 108 | C | JavaScript im Publikationssystem Quarto | JS | Akronym (nur online) | – |
| PR-11 | Primer | 201 | A | Satz als Titel, Bild als Beleg | *assertion–evidence approach* | garner2013, Titel „… A case for the assertion–evidence approach“ (https://www.ijee.ie/articles/Vol29-6/23_ijee2791ns.pdf) | bestätigt |
| PR-12 | Primer | 211 | A | interessante, aber unwichtige Details | *seductive details* | rey2012, Titel „A review of research and a meta-analysis of the seductive detail effect“; doi:10.1016/j.edurev.2012.05.003 | bestätigt |
| PR-13 | Primer | 215 | C | dauerhafte Kennung der Publikation | DOI | Akronym; erstes Auftreten im Fließtext (in der fett gesetzten Empfehlung selbst nicht eingefügt) | – |
| PR-14 | Primer | 288 | B | Register der DOIs | Crossref | Typ B (Dienstname, nur online) | – |
| PR-15 | Primer | 344 | A | musikalische Merkhilfen | *musical mnemonics* | derksdijkman2024, Titel „Musical mnemonics in cognitively unimpaired individuals …“; doi:10.1007/s11065-023-09585-4 | bestätigt |
| PR-16 | Primer | 361 | A | Verteilungseffekt | *spacing effect* | katz2021, Titel „Optimizing song retention through the spacing effect“; doi:10.1186/s41235-021-00345-7 | bestätigt |
| PR-17 | Primer | 363 | A | Reim als Wahrheitssignal | *rhyme as reason* | mcglone2000, Titel „Birds of a Feather Flock Conjointly (?): Rhyme as Reason in Aphorisms“; doi:10.1111/1467-9280.00282 | bestätigt |
| PR-18 | Primer | 394 | B | interaktive Grafik | Widget | Typ B; erstes Auftreten | – |
| PR-19 | Primer | 512 | A | Übungstest | *practice testing* | adesope2017, Titel „Rethinking the use of tests: A meta-analysis of practice testing“; doi:10.3102/0034654316689306; wie Kap. 1 | bestätigt |
| PR-20 | Primer | 512 | B | Spiele mit Lernzweck | Serious Games | Typ B; wouters2013, Titel „… effects of serious games“ | – |
| PR-21 | Primer | 526 | A | Kopplung von Spielzug und Lernhandlung | *intrinsic integration* | habgood2011, Titel „… Exploring the Value of Intrinsic Integration in Educational Games“; doi:10.1080/10508406.2010.508029 | bestätigt |
| PR-22 | Primer | 561 | C | Wissenschaftliches Arbeiten und Grundlagen der Projektarbeit | WAGP | Akronym; Auflösung wie Kap. 6 Z. 335 | – |
| PR-23 | Primer | 587 | A | Ablenker (falsche Antwortoption) | *distractor* | doughty2024, Abstract: „… a single correct choice, and high-quality distractors“ (arXiv:2312.03173; doi:10.1145/3636243.3636256) | bestätigt |
| PR-24 | Primer | 587 | B | Textabenteuer | Interactive Fiction | Typ B; rogosch2026, Titel „… Interactive-Fiction Serious Games …“ | – |
| PR-25 | Primer | 587 | B | automatische Tests einzelner Funktionen | Unit-Tests | Typ B | – |
| PR-26 | Primer | 589 | C | Modell zur Bewertung von Lernspielen | MEEGA+ | Akronym; gresse2025, Abstract: „the MEEGA/MEEGA+ model, providing support to evaluate games in terms of motivation, user experience, and learning“ (https://journals-sol.sbc.org.br/index.php/rbie/article/view/5148). Die Langform ist portugiesischen Ursprungs und uneinheitlich, daher nur umschrieben | – |
| LH-01 | Lösungen | 8 | A | erwünschte Schwierigkeiten | *desirable difficulties* | bjork2011, Titel; Antwort nennt das Konzept, Kap. 1 Z. 79 führt es mit Englisch | bestätigt |
| LH-02 | Lösungen | 16 | B | Textbausteine | Tokens | Typ B; ohne Kap. 2 unverständlich; Umschreibung wie Kap. 2 („Token (Textbaustein)“) | – |
| LH-03 | Lösungen | 16 | A | Aufmerksamkeit | *Attention* | vaswani2017, Titel „Attention is all you need“; Schreibweise wie Kap. 2 Z. 705 („**Aufmerksamkeit** (*Attention*)“) | bestätigt |
| LH-04 | Lösungen | 35 | B | Varianten nacheinander | Crossover-Experiment | Typ B; wie Kap. 3 („also nacheinander“) | – |
| LH-05 | Lösungen | 40 | A (Format) | Automatisierung | *automation* | Englisch schon da, aber nicht kursiv; acemoglu2025tasks (wie Kap. 4 Z. 109) | bestätigt (Kap. 4) |
| LH-06 | Lösungen | 40 | A (Format) | Augmentierung | *labor-augmenting technology* | wie LH-05 (Kap. 4 Z. 110) | bestätigt (Kap. 4) |
| LH-07 | Lösungen | 40 | A (Format) | neue Aufgaben | *new tasks* | wie LH-05 (Kap. 4 Z. 111) | bestätigt (Kap. 4) |
| LH-08 | Lösungen | 45 | B | Nachbesprechung | Debriefing | Typ B; erstes Auftreten in den Lösungen (wieder Z. 68) | – |
| LH-09 | Lösungen | 64 | B | Einkauf bei zwei Lieferanten | Dual Sourcing | Typ B; auch Kap. 6 Z. 166 ohne Erklärung | – |
| LH-10 | Lösungen | 68 | B | Bestellplanspiel entlang einer Lieferkette | Beer Game | Typ B; ohne Kap. 4/6 unverständlich; sterman1989modeling | – |

## 2. ALT / NEU

### kapitel09-appendix04-fortgeschrittene-nutzungsformen.qmd (Anhang D)

**AD-01** (Z. 6)
ALT: `und kann einen Prompt nach`
NEU: `und kann einen Prompt (eine Eingabe an die KI) nach`

**AD-02** (Z. 6)
ALT: `dem CREATE-Muster schreiben.`
NEU: `einem sechsteiligen Bauplan (CREATE-Muster) schreiben.`

**AD-03** (Z. 9)
ALT: `(hdw nrw, Oktober 2026)`
NEU: `(Netzwerk Hochschuldidaktische Weiterbildung NRW, hdw nrw, Oktober 2026)`

**AD-04** (Z. 9, Erklärzusatz)
ALT: `und endet mit einer Übung, die wir im Workshop erprobt haben.`
NEU: `und endet mit einer Übung, die wir im Workshop erprobt haben, samt einer Prüftabelle nach dem 4D-Modell: abgeben, beschreiben, beurteilen, verantworten (*Delegation, Description, Discernment, Diligence*; @sec-d-tutoren).`

**AD-05** (Z. 14)
ALT: `oder "ein starkes Reasoning-Modell".`
NEU: `oder "ein starkes Reasoning-Modell" (Modell mit schrittweisem Nachdenken).`

**AD-06** (Z. 27)
ALT: `wie viel die Maschine entscheidet und wo der Mensch`
NEU: `wie viel die Maschine entscheidet (Automatisierungsgrad, *levels of automation*) und wo der Mensch`

**AD-07** (Z. 31)
ALT: `in Nutzungsdaten eines Coding-Agenten nach`
NEU: `in Nutzungsdaten eines Coding-Agenten (einer KI, die selbständig programmiert) nach`

**AD-08** (Z. 33)
ALT: `rund ein Fünftel der Enterprise-Nachrichten bereits`
NEU: `rund ein Fünftel der Enterprise-Nachrichten (aus Firmenkonten) bereits`

**AD-09** (Z. 33)
ALT: `Deep Research, Reasoning und Datenanalyse noch nie verwendet hat`
NEU: `Deep Research (mehrstufige Recherche durch einen Agenten), Reasoning und Datenanalyse noch nie verwendet hat`

**AD-10** (Z. 38)
ALT: `als wünschenswerte Schwierigkeit beschrieben haben`
NEU: `als erwünschte Schwierigkeit (*desirable difficulty*) beschrieben haben`

**AD-11** (Z. 72)
ALT: `bitte keine Fließtextwüsten, Quellen nach APA.`
NEU: `bitte keine Fließtextwüsten, Quellen im APA-Zitierstil.`

**AD-12** (Z. 132)
ALT: `Die Forschung zur kognitiven Belastung erklärt`
NEU: `Die Forschung zur kognitiven Belastung (*cognitive load*) erklärt`

**AD-13** (Z. 135)
ALT: `nennt genau eine vollständige Quelle mit DOI;`
NEU: `nennt genau eine vollständige Quelle mit dauerhafter Kennung der Publikation (DOI);`

**AD-14** (Z. 136)
ALT: `durch das Corporate Design der eigenen Hochschule ersetzt`
NEU: `durch das Corporate Design (das einheitliche Erscheinungsbild) der eigenen Hochschule ersetzt`

**AD-15** (Z. 182)
ALT: `im Skills-Katalog für Codex genutzt`
NEU: `im Skills-Katalog für Codex (Programmier-Agent von OpenAI) genutzt`

**AD-16** (Z. 184)
ALT: `**Custom GPTs** werden am 11.12.2026 abgeschaltet`
NEU: `**Custom GPTs** (selbst eingerichtete Assistenten in ChatGPT) werden am 11.12.2026 abgeschaltet`

**AD-17** (Z. 184)
ALT: `eigene Actions gehen verloren`
NEU: `eigene Actions (Anbindungen an fremde Dienste) gehen verloren`

**AD-18** (Z. 186)
ALT: `Elicit screent auf Ebene einzelner Einschlusskriterien`
NEU: `Elicit screent (sortiert Treffer vorab aus) auf Ebene einzelner Einschlusskriterien`

**AD-19** (Z. 217)
ALT: `**Debrief.** Welche Regel hat der Bot gebrochen`
NEU: `**Debrief (Nachbesprechung).** Welche Regel hat der Bot gebrochen`

**AD-20** (Z. 235)
ALT: `Halluzinationen verschwinden mit RAG nicht`
NEU: `Halluzinationen (frei erfundene Angaben) verschwinden mit RAG nicht`

**AD-21** (Z. 239)
ALT: `Findet die Suche die richtigen Stellen (Kontextrelevanz)`
NEU: `Findet die Suche die richtigen Stellen (Kontextrelevanz, *context relevance*)`

**AD-22** (Z. 239)
ALT: `was in den Stellen steht (Antworttreue)?`
NEU: `was in den Stellen steht (Antworttreue, *faithfulness*)?`

**AD-23** (Z. 239)
ALT: `Die Idee stammt aus dem Datensatz SQuAD 2.0`
NEU: `Die Idee stammt aus dem Frage-Antwort-Datensatz SQuAD 2.0`

**AD-24** (Z. 239)
ALT: `gezielt mit unbeantwortbaren Fragen prüft`
NEU: `gezielt mit unbeantwortbaren Fragen (*unanswerable questions*) prüft`

**AD-25** (Z. 241)
ALT: `KI-erzeugte Podcasts, FAQ und Quiz-Lernhilfen`
NEU: `KI-erzeugte Podcasts, Listen häufiger Fragen (FAQ) und Quiz-Lernhilfen`

**AD-26** (Z. 241)
ALT: `die Urteilslast von den Studierenden`
NEU: `die Urteilslast (*judgement burden*) von den Studierenden`

**AD-27** (Z. 243)
ALT: `erst das Nachtrainieren wäre eine Veränderung`
NEU: `erst das Nachtrainieren (*fine-tuning*) wäre eine Veränderung`

**AD-28** (Z. 306)
ALT: `für ein Scoping Review kamen`
NEU: `für ein Scoping Review (Übersicht über ein Forschungsfeld) kamen`

**AD-29** (Z. 306)
ALT: `gemessen wurde die Übereinstimmung zwischen Lauf und Lauf`
NEU: `gemessen wurde die Übereinstimmung zwischen Lauf und Lauf (*run-to-run consistency*)`

**AD-30** (Z. 391)
ALT: `Schwimmbahnen für Zuständigkeiten verwirft das Auto-Layout`
NEU: `Schwimmbahnen für Zuständigkeiten (*swimlanes*) verwirft das Auto-Layout`

**AD-31** (Z. 451)
ALT: `Die KI schreibt XML, HTML und Python;`
NEU: `Die KI schreibt Diagrammdatei (XML), Animation (HTML) und Simulation (Python);`

**AD-32** (Z. 462)
ALT: `UrbanRide-Paket (XML, SVG, Animation)`
NEU: `UrbanRide-Paket (Prozessdatei als XML, Diagramm als SVG-Grafik, Animation)`

**AD-33** (Z. 549)
ALT: `benennen es im Titel: KI-Assistenten überhelfen.`
NEU: `benennen es im Titel: KI-Assistenten überhelfen (*overassist*).`

**AD-34** (Z. 551)
ALT: `mit Redeanteilen der Lernenden von 5 bis 15`
NEU: `mit Redeanteilen der Lernenden (*student talk time*) von 5 bis 15`

**AD-35** (Z. 554)
ALT: `Programmieranfänger an der ETH Zürich durchliefen`
NEU: `Programmieranfänger an der Technischen Hochschule ETH Zürich durchliefen`

**AD-36** (Z. 554)
ALT: `im Crossover-Design Tutoren mit System-Prompts`
NEU: `im Crossover-Design, also nacheinander, Tutoren mit System-Prompts`

**AD-37** (Z. 554)
ALT: `für selbstreguliertes Lernen und für kognitive Aktivierung`
NEU: `für selbstreguliertes Lernen (*self-regulated learning*) und für kognitive Aktivierung`

**AD-38** (Z. 554)
ALT: `der sein Gerüst daran ausrichtet`
NEU: `der sein Gerüst (*scaffolding*) daran ausrichtet`

**AD-39** (Z. 556)
ALT: `weil sie die Grenze der Leitplanken zeigen`
NEU: `weil sie die Grenze der Leitplanken (*guardrails*) zeigen`

**AD-40** (Z. 564)
ALT: `dem Schweizer-Käse-Modell:`
NEU: `dem Schweizer-Käse-Modell (*Swiss cheese model*):`

**AD-41** (Z. 565)
ALT: `Die erste Schicht sind Prompt-Muster, also`
NEU: `Die erste Schicht sind Prompt-Muster (*prompt patterns*), also`

**AD-42** (Z. 565)
ALT: `wie eine Persona, eine Vorlage`
NEU: `wie eine Persona (vorgegebene Rolle), eine Vorlage`

**AD-43** (Z. 565)
ALT: `oder die umgedrehte Interaktion, bei der`
NEU: `oder die umgedrehte Interaktion (*flipped interaction*), bei der`

**AD-44** (Z. 663)
ALT: `(etwa KI:connect.nrw)`
NEU: `(etwa KI:connect.nrw, das KI-Portal der NRW-Hochschulen)`

**AD-45** (Z. 670)
ALT: `dessen Leak die Prüfung beschädigt`
NEU: `dessen Leak (unerwünschte Weitergabe) die Prüfung beschädigt`

**AD-46** (Z. 674)
ALT: `Methodenkompetenz und KI-Literacy in einem Projekt`
NEU: `Methodenkompetenz und KI-Literacy (KI-Kompetenz) in einem Projekt`

**AD-47** (Z. 676)
ALT: `wir nutzen dafür das AWS Academy Learner Lab`
NEU: `wir nutzen dafür das AWS Academy Learner Lab (Übungsumgebung von Amazon Web Services)`

**AD-48** (Z. 689)
ALT: `Drei Personas mal zwei Aufgaben`
NEU: `Drei Personas (gespielte Studierendentypen) mal zwei Aufgaben`

**AD-49** (Z. 745)
ALT: `(SSCM-Modul, verlinkt im Online-Material)`
NEU: `(Modul zu nachhaltigem Lieferkettenmanagement, SSCM, verlinkt im Online-Material)`

**AD-50** (Z. 749)
ALT: `einmal CSV mit zwei Spalten`
NEU: `einmal eine Tabelle als Textdatei (CSV) mit zwei Spalten`

**AD-51** (Z. 808)
ALT: `alle Panels in einem Serienauftrag`
NEU: `alle Panels (Einzelbilder des Comics) in einem Serienauftrag`

### anhang-primer.qmd (Praxis-Primer)

**PR-01** (Z. 3)
ALT: `Werkzeuge, Prompts und Prüfskripte veralten`
NEU: `Werkzeuge, Prompts (Eingaben an die KI) und Prüfskripte veralten`

**PR-02** (Z. 14)
ALT: `ohne Erklärung und Nachbesprechung [@wouters2013]`
NEU: `ohne Erklärung und Nachbesprechung (*debriefing*) [@wouters2013]`

**PR-03** (Z. 29)
ALT: `Segmentierte Darstellungen verbessern Behalten und Transfer`
NEU: `Segmentierte Darstellungen (*segmenting*) verbessern Behalten und Transfer`

**PR-04** (Z. 31)
ALT: `Hervorhebungen verbessern das Lernen mit Medien`
NEU: `Hervorhebungen (*signaling*) verbessern das Lernen mit Medien`

**PR-05** (Z. 70)
ALT: `die Manim-Zellen für Colab gibt es`
NEU: `die Manim-Zellen für Colab (Animationscode zum Ausführen im Browser) gibt es`

**PR-06** (Z. 93)
ALT: `gegenüber statischen Bildern (d = 0,37)`
NEU: `gegenüber statischen Bildern (Effektstärke d = 0,37)`

**PR-07** (Z. 95)
ALT: `unterscheiden @dekoning2009 Hinweisreize, die auswählen`
NEU: `unterscheiden @dekoning2009 Hinweisreize (*cues*), die auswählen`

**PR-08** (Z. 95)
ALT: `der gesprochenen Erklärung um [@leahy2011]`
NEU: `der gesprochenen Erklärung um (*transient information effect*) [@leahy2011]`

**PR-09** (Z. 106)
ALT: `HTML/SVG-Vorlage mit Prüfskript`
NEU: `Webseiten-Vorlage mit Vektorgrafik (HTML/SVG) und Prüfskript`

**PR-10** (Z. 108)
ALT: `Observable JS in Quarto`
NEU: `Observable JS (JavaScript) im Publikationssystem Quarto`

**PR-11** (Z. 201)
ALT: `mit einem Satz als Titel und einem Bild als Beleg.`
NEU: `mit einem Satz als Titel und einem Bild als Beleg (*assertion–evidence approach*).`

**PR-12** (Z. 211)
ALT: `für das Lernziel unwichtige Bilder und Details verschlechtern`
NEU: `für das Lernziel unwichtige Bilder und Details (*seductive details*) verschlechtern`

**PR-13** (Z. 215)
ALT: `an Zeitschrift und DOI lernen sie`
NEU: `an Zeitschrift und dauerhafter Kennung der Publikation (DOI) lernen sie`

**PR-14** (Z. 288)
ALT: `Quellen, alle über Crossref bestätigt`
NEU: `Quellen, alle über Crossref (Register der DOIs) bestätigt`

**PR-15** (Z. 344)
ALT: `Vorteil musikalischer Merkhilfen [@derksdijkman2024]`
NEU: `Vorteil musikalischer Merkhilfen (*musical mnemonics*) [@derksdijkman2024]`

**PR-16** (Z. 361)
ALT: `besser als nach massiertem Üben [@katz2021]`
NEU: `besser als nach massiertem Üben am Stück (Verteilungseffekt, *spacing effect*) [@katz2021]`

**PR-17** (Z. 363)
ALT: `Ein Reim lässt eine Aussage wahrer erscheinen`
NEU: `Ein Reim lässt eine Aussage wahrer erscheinen (*rhyme as reason*)`

**PR-18** (Z. 394)
ALT: `nach Lektüre, Widget und Fallstudie`
NEU: `nach Lektüre, Widget (interaktiver Grafik) und Fallstudie`

**PR-19** (Z. 512)
ALT: `wirkt das Spiel wie ein Übungstest [@adesope2017]`
NEU: `wirkt das Spiel wie ein Übungstest (*practice testing*) [@adesope2017]`

**PR-20** (Z. 512)
ALT: `waren Serious Games in einer Metaanalyse nicht`
NEU: `waren Serious Games (Spiele mit Lernzweck) in einer Metaanalyse nicht`

**PR-21** (Z. 526)
ALT: `lernten die Spielenden mit dieser Kopplung mehr`
NEU: `lernten die Spielenden mit dieser Kopplung (*intrinsic integration*) mehr`

**PR-22** (Z. 561)
ALT: `Ein Erstsemesterteam im Modul WAGP (@sec-fall-job-buddy)`
NEU: `Ein Erstsemesterteam im Modul Wissenschaftliches Arbeiten und Grundlagen der Projektarbeit (WAGP, @sec-fall-job-buddy)`

**PR-23** (Z. 587)
ALT: `4,0 % einen Ablenker, der die Lösung verriet`
NEU: `4,0 % einen Ablenker (falsche Antwortoption, *distractor*), der die Lösung verriet`

**PR-24** (Z. 587)
ALT: `Bei automatisch erzeugten Interactive-Fiction-Lernspielen`
NEU: `Bei automatisch erzeugten Interactive-Fiction-Lernspielen (Textabenteuern)`

**PR-25** (Z. 587)
ALT: `die Kompilier- und Unit-Tests übersehen`
NEU: `die Kompilier- und Unit-Tests (automatische Tests einzelner Funktionen) übersehen`

**PR-26** (Z. 589)
ALT: `Fragebögen wie MEEGA+ messen`
NEU: `Fragebögen wie MEEGA+, ein Modell zur Bewertung von Lernspielen, messen`

### kapitel10-appendix05-loesungshinweise.qmd (Lösungshinweise)

**LH-01** (Z. 8)
ALT: `Das Konzept sind die erwünschten Schwierigkeiten:`
NEU: `Das Konzept sind die erwünschten Schwierigkeiten (*desirable difficulties*):`

**LH-02** (Z. 16)
ALT: `Der Text wird in Tokens zerlegt`
NEU: `Der Text wird in Tokens (Textbausteine) zerlegt`

**LH-03** (Z. 16)
ALT: `und über Attention zueinander in Beziehung gesetzt`
NEU: `und über die Aufmerksamkeit (*Attention*) zueinander in Beziehung gesetzt`

**LH-04** (Z. 35)
ALT: `In einem Crossover-Experiment mit 1.059`
NEU: `In einem Crossover-Experiment (Varianten nacheinander) mit 1.059`

**LH-05** (Z. 40)
ALT: `Automatisierung (automation) heißt`
NEU: `Automatisierung (*automation*) heißt`

**LH-06** (Z. 40)
ALT: `Augmentierung (labor-augmenting technology) heißt`
NEU: `Augmentierung (*labor-augmenting technology*) heißt`

**LH-07** (Z. 40)
ALT: `Neue Aufgaben (new tasks) entstehen`
NEU: `Neue Aufgaben (*new tasks*) entstehen`

**LH-08** (Z. 45)
ALT: `Im Debriefing gehören auf den Tisch`
NEU: `Im Debriefing (Nachbesprechung) gehören auf den Tisch`

**LH-09** (Z. 64)
ALT: `weniger Geld für Dual Sourcing.`
NEU: `weniger Geld für Dual Sourcing (Einkauf bei zwei Lieferanten).`

**LH-10** (Z. 68)
ALT: `erleben die Studierenden im Beer Game`
NEU: `erleben die Studierenden im Beer Game (Bestellplanspiel entlang einer Lieferkette)`

## 3. Nicht bestätigt / bewusst weggelassen

**Nicht bestätigt (kein Beleg in der zitierten Quelle)**
- *produktiver Kampf* (AnhD Z. 550) → „productive struggle“: im Abstract von teo2026ai (arXiv:2607.21306) nicht enthalten; die Arbeit spricht von „intervening too early or too frequently“. Weggelassen (siehe auch Nebenfund 4).
- *Selbstwirksamkeit* (AnhD Z. 554) → „self-efficacy“: kuo2026 nur über Titel prüfbar („… differentiated chatbots on programming learning“), Begriff dort nicht belegt. Weggelassen.
- *Arbeitsgedächtnis* (AnhD Z. 132) → „working memory“, *Verarbeitungsspur* → „channel“: sweller2011 (Buch) und mayer2014 (Kapitel) nicht im Wortlaut prüfbar. Weggelassen.
- *Testmanagement / Rückfall* (AnhD Z. 567) → „regression testing“: keine zitierte Quelle. Weggelassen.
- Aus Teil 1 weiter offen: situational barriers, learning by teaching, problem-based learning, deliberate practice, standardized work, Engpass (Goldratt). In diesem Paket kommt nur „Engpass“ vor (AnhD Z. 385 ff., Primer Z. 107, Lösungen Z. 65/67), ohne Goldratt-Zitat; nichts eingefügt.

**Bewusst weggelassen**
- AnhD Z. 11 *System-Prompt*, Z. 15 *Skill-Dateien, Workflow-Vorlagen*: Erklärung folgt in Z. 80, 85 und (Arbeitsabläufe) Z. 33/472; in Z. 15 stünde die Erklärung als Klammer in einer Klammer.
- AnhD Z. 51 *RAG* (Tabelle „Eigene Quellen (RAG)“): die Tabellenzeile umschreibt schon; ausführliche Einführung in Z. 231. Ebenso Agent (Z. 20), Harness (Z. 35), MCP (Z. 92), Plugin (Z. 95), Projekt (Z. 99), BPMN (Z. 383), Notebook (Z. 387), n8n/Knoten/Workflow (Z. 471 f.), API (Z. 475), JSON (Z. 580), Q4/4B/WebLLM (Z. 743), Benchmark (Z. 549 f.), Supervisor-Architektur und Tutee-Bot (Z. 554), Cohens Kappa (Z. 572), deterministische Prüfung (Z. 566): im Satz bereits erklärt.
- AnhD Z. 188 *4B-Klasse*, *E4B*, *GB*: verweist auf @sec-d-lokal (Z. 743 erklärt die Zahl mit B); Produktnamen im datierten Kasten.
- AnhD Z. 560 *AI Fluency*: Umschreibung wie in Kap. 2 („etwa: Gewandtheit im Umgang mit KI“) stünde in Pandoc-Zitierklammern `[4D-Modell der AI Fluency, @dakan2025]` und ergäbe doppelte Klammern im Satz. Falls gewünscht, besser in AD-04 einbauen („nach dem 4D-Modell der AI Fluency (etwa: Gewandtheit im Umgang mit KI)“).
- AnhD Z. 239 *RAGAs* (Retrieval Augmented Generation Assessment, laut Abstract es2024): Werkzeugname, im Satz als „Werkzeuge wie RAGAs messen …“ umschrieben.
- AnhD Z. 175 *ZIP*, Z. 743 *JPG, WLAN, USB*, Z. 567 *TÜV*, Z. 9 ff. *PDF*, *HTML*: gängige Abkürzungen.
- AnhD Z. 186 ff. Produktnamen im datierten Kasten (NotebookLM/Gemini Notebook, Litmaps, Scite, Elicit, Gemma, Phi, Llama, Qwen, Seedream, Seedance, gpt-5-mini): Namen, keine Fachbegriffe.
- AnhD Z. 304/315 *Deep-Research-Agent*, Z. 306 *Screening*: über AD-09 und AD-18 erklärt.
- AnhD Z. 808 *Storyboard*, Z. 809 *Escape Room*: im Satz („Drehbuch“) bzw. allgemein verständlich.
- Primer Z. 7 und Z. 18 Wissensarten (Fakten-, konzeptuelles, prozedurales, metakognitives Wissen): bestätigt bei anderson2001 („factual, conceptual, procedural, metacognitive“, Übersicht https://www.bu.edu/provost/files/2013/10/Anderson-Krathwohl-Revision-to-Blooms-Taxonomy-of-Educational-Objectives.pdf), aber wörtliche Übersetzungen ohne Mehrwert (Regel wie K3 „metakognitive Rückmeldung“).
- Primer Z. 369 *Fallvergleiche* (*case comparisons*, alfieri2013) und Z. 528 *Unterstützung im Spiel* (*instructional support*, woutersvanoostendorp2013), *verteiltes Üben* (*distributed practice*, dunlosky2013): bestätigt, aber wörtliche Übersetzungen; „verteilt“ ist über PR-16 abgedeckt.
- Primer Z. 532 *Rangliste* (*leaderboard*, michinov2026, Titel): bestätigt, aber erstes Auftreten in einer Tabellenunterschrift ohne Quelle (Z. 523) und gut verständlich. Bei Bedarf: ALT `eine Rangliste in Vorlesungsquizzen` → NEU `eine Rangliste (*leaderboard*) in Vorlesungsquizzen`.
- Primer Z. 239 *Bullwhip-Effekt*: Z. 205 erklärt ihn schon über den Mustertitel („Kleine Schwankungen im Handel wachsen zum Hersteller hin“ statt „Bullwhip-Effekt: Überblick“); ein Zusatz in Z. 205 würde ein Zitatbeispiel verändern.
- Primer Z. 42 *Storyboard*: im selben Satz erklärt („eine Tabellenzeile je Schritt …“). Z. 166 Node.js, Playwright, Z. 178 Manim, Z. 195 reveal.js, Z. 301 Skill, Z. 492 Whisper, Colab, Z. 523 Gamification, Z. 563 Programmierschnittstelle: bereits erklärt.
- Primer Z. 277/575 *Benchmark*: Duden-Wort, im Kontext verständlich.
- Primer Codeblöcke (Prompt-Bausteine, Stilangabe auf Englisch, Python/Bash) und Z. 27/42 *Prüfen:*/*Nicht abgeben:* (deutsche Kursivetiketten): nicht angefasst.
- Lösungen Z. 16 *Embeddings*: im Satz erklärt („als Zahlen (Embeddings) dargestellt“). Z. 17 Halluzinationen, Z. 20 RAG, Z. 24 äußerer Harness, Z. 29 knowing that/how/with (schon kursiv, mit deutscher Klammer), Z. 41 Quick Search usw., Z. 42 Role Play/Goal Play: in der Antwort selbst erklärt.
- Lösungen Z. 25 *Discernment, Diligence*: der „weil“-Satz erklärt beide Stufen; die Frage stellt Kap. 2 selbst mit 4D-Begriffen.
- Lösungen Z. 75 Carlile *syntaktisch/semantisch/pragmatisch* → *transferring, translating, transforming* (carlile2004, Titel, bestätigt): die deutsche Klammer (übertragen, übersetzen, umformen) entspricht dem Original wörtlich; kein Mehrwert, Kap. 6 führt ebenfalls kein Englisch.
- Lösungen Z. 80 *BWL*: gängige Abkürzung.
- Lösungen: keine Stelle mit „elaborative questioning“; nichts zu ändern. Begriffe zu Testeffekt, konfirmatorischen Maßen (Z. 35), 0,37 SD (Z. 76), 15 Prozent Nutzung, Abruf nach zwei Tagen (Z. 62) stimmen mit Kap. 3, 4 und 6 überein.

## 4. Nebenfunde

1. **AnhD Z. 38, Begriffsuneinheitlichkeit:** „wünschenswerte Schwierigkeit“; im übrigen Buch durchgehend „erwünschte Schwierigkeit(en)“ (Kap. 1 Z. 79/92/152, Kap. 3 Z. 42/69/120, Kap. 4 Z. 269, Lösungen Z. 8). In AD-10 mit korrigiert.
2. **AnhD Z. 456/462 und Online-Material:** Die Übung nennt das „UrbanRide-Paket“ als Rückfallebene, erklärt aber nirgends, was es ist; laut `anhang-d-material.qmd` Z. 35 hat es (wie alle 20 Dateien der Seite, Z. 11–35 ff.) den Stand „folgt“. Auch der Beispielbericht als Rückfallebene für Ü3 (Z. 315, 367) ist dort „folgt“. Vor Drucklegung entweder Material bereitstellen oder die Rückfallebenen im Text als „in Vorbereitung“ kennzeichnen.
3. **AnhD Z. 27, Zuschreibung:** „Die Forschung zur Automatisierung nennt solche Stellen Kontrollpunkte“ mit @parasuraman2000. Parasuraman et al. sprechen von *types and levels of automation* je Funktionsstufe (Abstract, s. AD-06); „Kontrollpunkte“ (*checkpoints*) ist nicht ihr Begriff. Vorschlag (nicht als ALT/NEU, weil Formulierungsfrage): „Die Forschung zur Automatisierung fragt, an welchen Stellen das geschieht; für jede Stufe einer Aufgabe …“.
4. **AnhD Z. 550, mögliche Überdehnung:** teo2026ai (Abstract, arXiv:2607.21306) zeigt einen simulationsbasierten Benchmark (Int-Bench) mit simuliertem „student“; LLMs greifen früher und häufiger ein als Menschen und geben eher ganze Lösungen. „und zwar genau dann, wenn die Studentin kurz vor der Einsicht steht“ steht so nicht im Abstract; am Volltext prüfen oder abschwächen („früher und häufiger als menschliche Lehrende“).
5. **AnhD Z. 554, mögliche Überdehnung:** „ein Tutor, der sein Gerüst … ausrichtet, … schlägt beide starren Varianten [@hou2026comet]“. Laut Abstract (arXiv:2609.22993) erreicht CoMeT dieselbe metakognitive Anforderung wie der Nur-Fragen-Tutor und frustriert weniger, bei unveränderter Delegation und Belastung; ein Lernvorteil gegenüber beiden Varianten wird nicht berichtet. Vorschlag: „verbindet die Anforderung des strengen Tutors mit weniger Frust“.
6. **hdw nrw nirgends aufgelöst:** auch Kap. 1 Z. 108 und Vorwort Z. 3 (andere Pakete); Langform laut Netzwerk: „Hochschuldidaktische Weiterbildung Nordrhein-Westfalen“.
7. **Primer Z. 377, unerklärter Begriff:** „Klatschprobe“ steht als Prüfschritt im Arbeitsablauf, wird aber weder im Druck- noch im Online-Teil des Primers (noch sonst im Buch) erklärt. Bitte einen Halbsatz ergänzen, was geprüft wird (vermutlich: Takt und Silben passen zum Mitklatschen).
8. **Primer Z. 215, Genus von DOI uneinheitlich:** „prüfen Sie sie am DOI“ und „Führt der DOI …“ neben „fehlte … die DOI“ im selben Absatz; Z. 239 „die DOIs“, Anhang D durchgehend „jede DOI“. Eine Form festlegen.
9. **Lösungen Z. 71 vs. Z. 75 (Carlile):** Z. 71 „Wissensgrenzen zwischen Abteilungen und Organisationen“, Z. 75 „Grenzen zwischen Abteilungen einer Organisation“; Kap. 6 Z. 65 „Carlile beschreibt Organisationen“. Eine Lesart wählen (carlile2004 untersucht Grenzen zwischen Fachfunktionen in einer Organisation, Titel „… managing knowledge across boundaries“).
10. **Lösungen Z. 40 / Kap. 4 Z. 109–119:** dieselben nicht kursiven englischen Klammern (automation, labor-augmenting technology, new tasks) stehen auch in Kap. 4 und Anhang B (Z. 2820–2904); zur Einheitlichkeit im Kap.-4-Paket mitziehen.
11. **Lösungen Z. 29:** „*Knowing how* (Prozesswissen)“; Kap. 3 sagt „Wissen, wie“ bzw. „prozedurales und strategisches Können“ (Z. 88/98). Geringfügig; bei Bedarf „(prozedurales Wissen)“.

## 5. Kennzahlen

| Datei | A | A (Format) | B | C | gesamt | Mehrwörter |
|:--|--:|--:|--:|--:|--:|--:|
| Anhang D (AD-) | 19 | 0 | 20 | 12 | 51 | +148 |
| Primer (PR-) | 13 | 0 | 7 | 6 | 26 | +72 |
| Lösungshinweise (LH-) | 2 | 3 | 5 | 0 | 10 | +16 |
| **gesamt** | **34** | **3** | **32** | **18** | **87** | **+236** |

Mehrwörter = Wörter NEU minus Wörter ALT (Leerzeichen-Trennung), je Datei summiert.

Prüfung (Python, `/tmp/pruefe_vorschlag.py`): alle 87 ALT einzeilig, ohne Backtick, je genau 1 Treffer in ihrer Zieldatei (`str.count` = `grep -c -F`); Zeilennummern in Tabelle und Blockkopf stimmen mit der Fundstelle überein; keine zwei ALT überlappen sich im Dateitext; Simulation der Reihenfolge je Datei ohne Fehler. Probelauf mit `anwenden.py` auf Kopien in `/tmp/apptest/` (IDs der jeweils anderen Dateien ausgeschlossen): 51, 26 und 10 angewandt, keine Fehlermeldung. 11 Stellen liegen nur in der Online-Fassung (`content-visible when-format="html"`): AD-32, PR-06 bis PR-10, PR-14, PR-23 bis PR-26.
