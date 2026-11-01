# Fachbegriffe S6 Teil 2 – Vorschläge Anhang B und Anhang C (kapitel07-appendix02-prompt-sammlung.qmd, kapitel08-appendix03-rollenspiele-simulationen.qmd)

Stand: 2026-11-01, Branch `fachbegriffe-s6-teil2`, Buchdateien unverändert (nur Vorschläge). Zeilennummern: aktueller Stand (Anhang B 3065 Zeilen, Anhang C 360 Zeilen). Alle ALT mit `grep -c -F` und Python geprüft: je genau 1 Treffer; keine Überlappung; alle 96 Ersetzungen (inkl. Nebenfunde AB-90/91, AC-90–92) lassen sich nacheinander in beliebiger Reihenfolge einspielen.

**Erstnennung bei zwei Ausgaben.** Beide Anhänge haben Teile, die nur online (`content-visible when-format="html"`) oder nur im Druck stehen. Regel hier: Die Erklärung steht an der ersten Stelle, die in Druck *und* online sichtbar ist; Begriffe, die es nur online gibt, erhalten sie an ihrer ersten Online-Stelle; wo Druck- und Online-Stelle sich ausschließen (z. B. AB-05/06, AB-41/50), stehen zwei Vorschläge. In der Spalte „Beleg“ steht „nur online“, wenn die Stelle im Druck fehlt.

**Prompt-Texte unangetastet.** Alle Prompts und Aufgabenstellungen in Anhang B stehen in Codeblöcken innerhalb der Klappkästen; keiner der Vorschläge berührt sie. Bearbeitet sind nur die Zeilen „Funktion / Didaktische Elemente / Quelle / Einsatz“, Einleitungen und Hinweiskästen (Übung AI Fluency).

## 1. Vorschläge

| Nr | Datei | Zeile | Typ | Begriff dt. | Begriff engl./Akronym | Beleg | Sicherheit |
|:--|:--|--:|:--|:--|:--|:--|:--|
| AB-01 | Anh. B | 5 | B | Eingaben an die KI | Prompts | Typ B; erste Nennung im Fließtext (Überschrift Z. 1 bleibt); Umschreibung wie Kap. 1 | – |
| AB-02 | Anh. B | 5 | C | kurzes Schema aus Rolle, Aufgabe, Format; ausführlicheres Schema | RTF, CREATE | Typ C; RTF/CREATE sind im Buch sonst nirgends erklärt (grep über alle .qmd: nur Anhang B); die Auflösungen in Z. 108 und Z. 2928 stehen nur online. „s.o.“ verweist im Druck ins Leere; @sec-prompt-components (Kap. 2) behandelt Rolle, Aufgabe, Format, Beispiele | – |
| AB-03 | Anh. B | 18 | B | Plattform zum direkten Vergleich von Sprachmodellen | LM-Arena | Typ B (Eigenname mit Kurzbeschreibung); zum neuen Namen „Arena“ s. Nebenfund B-7 | – |
| AB-04 | Anh. B | 60 | B | Abrufübungen | Retrieval Practice | Typ B; erste Nennung in Druck und online (Z. 60); dt. Begriff wie Kap. 3 („Abruf-Übungen (*retrieval practice*)“, roediger2012) | – |
| AB-05 | Anh. B | 102 | C | angepasster ChatGPT-Assistent | GPT | Typ C; nur Druck (Z. 101–103). „GPT“ meint hier einen eigenen ChatGPT-Assistenten (Link chatgpt.com/g/… in Z. 113), nicht das Modell | – |
| AB-06 | Anh. B | 113 | C | angepasster ChatGPT-Assistent | GPT | Typ C; Gegenstück zu AB-05 für die Online-Fassung (Z. 113 steht nur online, Z. 102 nur im Druck) | – |
| AB-07 | Anh. B | 229 | B | Lerngerüst | Scaffolding | Typ B; erste Stelle, die in Druck und online steht (Z. 28/110/166 nur online); Glossar: „Baugerüst“ | – |
| AB-08 | Anh. B | 232 | B | schrittweises Nachdenken | Reasoning | Typ B; Umschreibung wie Kap. 1 | – |
| AB-09 | Anh. B | 384 | B | Testeffekt; Test ohne Notenfolgen | Testing Effect; Low Stakes Test | Typ B; „Testeffekt (*testing effect*)“ wie Kap. 3 (roediger2006) | – |
| AB-10 | Anh. B | 447 | B | vereinbarte Aufgaben | Action Items | Typ B; nur online | – |
| AB-11 | Anh. B | 583 | B | Steuerung der kognitiven Belastung; Vorgaben | Cognitive Load Management; Constraints | Typ B; nur online; erste Nennung (Z. 1242 folgt) | – |
| AB-12 | Anh. B | 695 | B | sokratisches Fragen | Socratic Questioning | Typ B; nur online | – |
| AB-13 | Anh. B | 735 | B | Eigenverantwortung der Lernenden | Ownership/Agency | Typ B; nur online | – |
| AB-14 | Anh. B | 771 | B | angeleitete Reflexion; Selbstdistanzierung | Guided Reflection; Self-distancing | Typ B; nur online; „Selbstdistanzierung nach Ethan Kross“ steht in Z. 1932 | – |
| AB-15 | Anh. B | 1009 | B | erfundene Angaben der KI | Halluzinationen | Typ B (Fachjargon, Glossar-Erstnennung); im Anhang nur online (Z. 1009, 1513, 2304, 2988) | – |
| AB-16 | Anh. B | 1011 | A (Format), B | fehlerorientiertes Lernen; Überarbeiten; vergleichende Analyse | *learning from errors*; Editing; Comparative Analysis | Englisch schon da, nur kursiv; Editing/Comparative Analysis Typ B; nur online | – |
| AB-17 | Anh. B | 1056 | B | gemeinsames Erstellen; KI als Mentor | Co-Creation; AI as Mentor | Typ B; Druck und online; „AI as Mentor“ = Rollenbezeichnung bei Mollick & Mollick (mollick2024a, Abstract: „simulations, mentoring, coaching, and co-creation“) | – |
| AB-18 | Anh. B | 1126 | A (Format) | Gruppendenken; Optimismus-Fehlschluss | *groupthink*; *optimism bias* | Englisch schon da, nur kursiv. Erste Nennung in Druck und online. „Groupthink“ heißt dt. „Gruppendenken“ (so auch Z. 1201); „Konformitätsdruck“ ist nur ein Symptom | – |
| AB-19 | Anh. B | 1201 | A (Format) | Gruppendenken; Bestätigungsfehler | *groupthink*; *confirmation bias* | Englisch schon da, nur kursiv; nur online | – |
| AB-20 | Anh. B | 1203 | A (Format) | Dialektische Untersuchung | *dialectical inquiry* | Englisch schon da, nur kursiv; nur online | – |
| AB-21 | Anh. B | 1240 | A (Format) | stabile Arbeitsgrundlage | *contracting* | Englisch schon da, nur kursiv; nur online | – |
| AB-22 | Anh. B | 1242 | B | angeleitetes Erkunden | Guided Inquiry | Typ B; nur online | – |
| AB-23 | Anh. B | 1274 | A (Format) | Fehlerkultur ohne Schuldzuweisungen | *no-blame culture* | Englisch schon da, nur kursiv; nur online | – |
| AB-24 | Anh. B | 1276 | A (Format) | Reflexive Praxis | *reflective practice* | Englisch schon da, nur kursiv; nur online | – |
| AB-25 | Anh. B | 1408 | C, B | Eigenkapitalrendite; Verschuldungsgrad | ROE (*return on equity*); Leverage | Typ C/B; DuPont-Schema: ROE = Umsatzrendite × Kapitalumschlag × Leverage; nur online | – |
| AB-26 | Anh. B | 1695 | A (Format) | Vortest | *pre-testing* | Englisch schon da, nur kursiv; nur online | – |
| AB-27 | Anh. B | 1695 | A (Format) | Nachfragetechniken | *probing* | Englisch schon da, nur kursiv; nur online | – |
| AB-28 | Anh. B | 1799 | A (Format), C | risikofreie Umgebung; beste Alternative ohne Einigung; Einigungsbereich | *sandbox*; BATNA; ZOPA | Sandbox: nur kursiv. BATNA = *Best Alternative to a Negotiated Agreement* (Fisher & Ury, Getting to Yes, 1981), ZOPA = *Zone of Possible Agreement* (Verhandlungslehre); Druck und online | – |
| AB-29 | Anh. B | 1801 | B | Nachbesprechung | Debriefing | Typ B; erste Stelle in Druck und online (Z. 1276/1697 nur online); Glossar „Nachbesprechung“ | – |
| AB-30 | Anh. B | 1939 | A (Format) | kognitive Umstrukturierung | *reframing* | Englisch schon da, nur kursiv; nur online | – |
| AB-31 | Anh. B | 2133 | B | Lernende bleiben sie selbst und leiten eine KI-Figur an | Goal Play | Typ B; im Druck sonst nur in Überschrift und Quellentitel. Definition nach mollick2024a (arXiv:2407.05181): „Goal play simulations involve students playing themselves, often guiding a character in a scenario“; ebenso Anhang C, Z. 265 | – |
| AB-32 | Anh. B | 2133 | C | spezifisch, messbar, attraktiv, realistisch, terminiert | SMART | Typ C; übliche dt. Auflösung der SMART-Regel (Doran 1981) | – |
| AB-33 | Anh. B | 2135 | A (Format) | szenariobasiertes Lernen; Lernen durch Lehren | *storytelling*; *learning by teaching* | Englisch schon da, nur kursiv (keine neue Zuschreibung; „learning by teaching“ war in Teil 1 als Typ A nicht bestätigt, steht hier aber schon im Text) | – |
| AB-34 | Anh. B | 2304 | A (Format), B | genaues Lesen | *close reading* | Format + kurze Umschreibung; nur online | – |
| AB-35 | Anh. B | 2306 | A (Format) | Forschendes Lernen; Rollenspiel-Simulation; Textanalyse | *inquiry-based learning*; *persona prompting*; *close reading* | nur kursiv; zugleich fehlendes Leerzeichen nach „**Didaktische Elemente:**“ ergänzt (Nebenfund B-9); nur online | – |
| AB-36 | Anh. B | 2477 | A (Format), C | Rollenspiel; Sprachschnittstelle; klinisches Urteilsvermögen; Selbsteinschätzung | *role-play*; *voice user interface* (Voice UI); *clinical reasoning*; *self-assessment* | nur kursiv; UI wird hier erstmals im Anhang genannt und aufgelöst (*user interface*); nur online | – |
| AB-37 | Anh. B | 2636 | B, A (Format) | Kolik beim Pferd; diagnostischer Pfad | Equine Kolik; *clinical reasoning* | Typ B + kursiv; nur online | – |
| AB-38 | Anh. B | 2638 | B, A (Format) | problembasiertes Lernen; schrittweise Informationsfreigabe | Problem-Based Learning (PBL); *drip-feeding information* | Typ B (PBL schon aufgelöst, dt. ergänzt) + kursiv; nur online | – |
| AB-39 | Anh. B | 2798 | B | Modelle der KI-Kompetenz | GenAI-Literacy-Frameworks | Typ B; „KI-Kompetenz (*AI literacy*)“ wie Kap. 2; nur online | – |
| AB-40 | Anh. B | 2799 | B | Gewandtheit im Umgang mit KI | AI Fluency | Typ B; Wortlaut wie von Roman für Kap. 2 entschieden; nur online | – |
| AB-41 | Anh. B | 2801 | C | US-Berufsdatenbank | O\*NET | Typ C (*Occupational Information Network*, US-Arbeitsministerium); erste Nennung online, Z. 2827 erklärt ausführlicher | – |
| AB-42 | Anh. B | 2839 | C | Academic Cloud der Gesellschaft für wissenschaftliche Datenverarbeitung in Göttingen; Vergleichsplattform | GWDG; arena.ai | Typ C; Wortlaut wie Kap. 2 Z. 407; nur online | – |
| AB-43 | Anh. B | 2818 | A (Format) | Automatisierung | *automation* | acemoglu2025tasks, Volltext: „Automation always reduces the labor share …“ (https://economics.mit.edu/sites/default/files/2026-01/Tasks%20at%20Work%20-%20Comparative%20Advantage%2C%20Technology%20and%20Labor%20Demand.pdf; doi:10.1016/bs.heslab.2025.08.003) | bestätigt |
| AB-44 | Anh. B | 2820 | A (Format) | Augmentierung | *labor-augmenting technology* | acemoglu2025tasks, Volltext: „labor-augmenting technology and new tasks can have opposite effects“ (MIT-PDF wie AB-43); Abstract: „augment a specific labor type“ | bestätigt |
| AB-45 | Anh. B | 2822 | A (Format) | Neue Aufgaben | *new tasks* | acemoglu2025tasks, Abstract: „the central role of automation and new tasks“ (https://www.nber.org/papers/w32872) | bestätigt |
| AB-46 | Anh. B | 2852 | B | Werkzeugkasten um das Modell | Harness | Typ B; „Werkzeugkasten (*harness*)“ wie Kap. 1; nur online | – |
| AB-47 | Anh. B | 2875 | B | mehrstufige, selbstständige Webrecherche der KI | Deep Research | Typ B (Glossar-Erstnennung); nur online | – |
| AB-48 | Anh. B | 2966 | B | gestaffelte Sicherung | *Defense in Depth* | Typ B; nur online; Z. 2987 greift den Begriff wieder auf | – |
| AB-49 | Anh. B | 2970 | C | Prüfung von KI mit Dokumentenabruf | RAG (in RAGAS) | Typ C; RAG ist im Anhang sonst nicht erklärt; es2024, Titel „RAGAs: Automated Evaluation of Retrieval Augmented Generation“ (doi:10.18653/v1/2024.eacl-demo.16); nur online | – |
| AB-50 | Anh. B | 3060 | C | US-Berufsdatenbank | O\*NET | Typ C; Druck-Gegenstück zu AB-41 (Tabelle Z. 3060 steht nur im Druck) | – |
| AC-01 | Anh. C | 19 | B | Behalten | Retention | Typ B; Abschnitt „Besser behalten“ folgt | – |
| AC-02 | Anh. C | 25 | A (Format) | wiederholtes Erinnern und Anwenden | *practice testing* | Englisch schon da (in Anführungszeichen), nur kursiv; Begriff bei dunlosky2013, Abstract: „practice testing“ (wie Kap. 1, K1-03) | bestätigt |
| AC-03 | Anh. C | 27 | A | bewusstes Üben | *deliberate practice* | ericsson1993, Titel „The role of deliberate practice in the acquisition of expert performance“ (references.json; doi:10.1037/0033-295X.100.3.363). Anders als in Kap. 3 (Teil 1) wird ericsson1993 hier direkt an der Stelle zitiert | bestätigt |
| AC-04 | Anh. C | 43 | B | zwischen Über- und Unterforderung | Flow-Bereich | Typ B; Kern von csikszentmihalyi2008: Flow bei Passung von Anforderung und Können | – |
| AC-05 | Anh. C | 54 | B | Literaturdatenbank; Suchprogramm | Scopus; Publish or Perish | Typ B (Eigennamen, die ohne Zusatz wie Redewendungen wirken); Kap. 4 Z. 186 nennt Publish or Perish ebenfalls | – |
| AC-06 | Anh. C | 60 | B | schrittweises Nachdenken | Reasoning | Typ B; Umschreibung wie Kap. 1; Z. 149 hat schon „Nachdenken (Reasoning)“, steht aber später | – |
| AC-07 | Anh. C | 67 | C, B | große Sprachmodelle; simulierte Figuren | LLM (*Large Language Models*); Personas | Typ C (Wortlaut wie Kap. 1 Z. 48); erste Nennung im Fließtext (Z. 54 steht im Suchstring); Personas Typ B | – |
| AC-08 | Anh. C | 70 | B | selbstständig handelnde KI-Programme | Agenten | Typ B; erste Nennung; Agenten tragen den ganzen Anhang (Z. 120, 151, 268) | – |
| AC-09 | Anh. C | 76 | B | Anwendungsfälle | Use-Cases | Typ B | – |
| AC-10 | Anh. C | 85 | B | Lerngerüst | Scaffolding | Typ B; erste Nennung; Glossar „Baugerüst“; Begriff bei goslen2025, Titel „… for adaptive scaffolding …“ | – |
| AC-11 | Anh. C | 86 | B, A | sechs Denkhüte nach de Bono; kognitive Präsenz | Six-Thinking-Hats; *cognitive presence* | yu2025a, Titel „Exploring cognitive presence patterns in GenAI-integrated six-hat thinking technique scaffolded discussion …“ (references.json; doi:10.1186/s41239-025-00545-x) | bestätigt |
| AC-12 | Anh. C | 95 | B | Erkenntnis aus der Praxis | Lesson Learned | Typ B; erste Nennung (Z. 123, 141, 153 folgen) | – |
| AC-13 | Anh. C | 95 | A (Format), B | Herkunft der Empfehlungen; Leitplanken | *why-behind-the-hint*; Guardrails | Format + Typ B; „Leitplanke (*guardrail*)“ wie Kap. 1/3 (bastani2025) | – |
| AC-14 | Anh. C | 97 | C | virtuelle Realität; Internet der Dinge | VR; IoT | Typ C; VR wie Kap. 4 Z. 682; nofal2025/wang2025c (Titel: „virtual reality“) | – |
| AC-15 | Anh. C | 97 | C | randomisierte kontrollierte Studie | RCT, *randomized controlled trial* | Typ C wie Kap. 3 (K3-24) | – |
| AC-16 | Anh. C | 98 | C, A | höhere Denkfähigkeiten; selbstreguliertes Lernen | HOTS (*higher-order thinking skills*); SRL (*self-regulated learning*) | wang2025c, Titel „Enhancing self-regulated learning and higher-order thinking skills in virtual reality …“ (references.json; doi:10.1007/s10639-025-13557-x) | bestätigt |
| AC-17 | Anh. C | 108 | B | Sprechflüssigkeit | Fluency | Typ B; Z. 113 sagt selbst „Sprechflüssigkeit“ | – |
| AC-18 | Anh. C | 112 | B | Eingaben an die KI | Prompts | Typ B; erste Nennung im Anhang; Umschreibung wie Kap. 1 | – |
| AC-19 | Anh. C | 120 | B | mehrere zusammenarbeitende KI-Agenten | Multi-Agent-Setups | Typ B; mollick2024 beschreibt Mentor-, Investor- und Bewertungsagenten (arXiv:2407.12796) | – |
| AC-20 | Anh. C | 121 | B | Kurzpräsentationen einer Geschäftsidee | Pitches | Typ B | – |
| AC-21 | Anh. C | 123 | B | Nachbesprechungen | Debriefings | Typ B; erste Nennung; Glossar „Nachbesprechung“; mollick2024: „debriefing the simulation“ | – |
| AC-22 | Anh. C | 125 | A (Format) | grobe Ablaufkonzepte | *playbooks* | Englisch schon da, nur kursiv | – |
| AC-23 | Anh. C | 141 | B | Bindung an die Quellen; erfundene Angaben | Grounding; Halluzinationen | Typ B; erste Nennung beider Begriffe (Z. 201 umschreibt Halluzinationen erst später) | – |
| AC-24 | Anh. C | 149 | A (Format) | Nachdenken | *reasoning* | Englisch schon da, nur kursiv | – |
| AC-25 | Anh. C | 153 | B | Bewertungsraster | Rubrics | Typ B; erste Nennung (Z. 170 folgt) | – |
| AC-26 | Anh. C | 157 | B | Sicherungen | Fail-Safes | Typ B | – |
| AC-27 | Anh. C | 166 | B, C | Verbindung realer und virtueller Räume | Mixed Reality (MR) | Typ B; führt zugleich das Kürzel MR ein, das Z. 168 („MR-Szenen“) ohne Auflösung nutzt | – |
| AC-28 | Anh. C | 179 | C | Pitching vor Wagniskapitalgebern | VC (*venture capital*) | Typ C; mollick2024: „The Investor Agent is instructed to role-play a VC investor“ | – |
| AC-29 | Anh. C | 181 | B | Klassenführung | Classroom-Management | Typ B (Tabelle, Pipe-Format, Einfügung unkritisch) | – |
| AC-30 | Anh. C | 197 | B | der Mensch prüft und entscheidet | Human in the Loop | Typ B; Glossar „Debriefing und Human in the Loop“ | – |
| AC-31 | Anh. C | 248 | B | Kompetenz im Umgang mit KI | KI-Literacy | Typ B; wie Kap. 2 „KI-Kompetenz (*AI literacy*)“ | – |
| AC-32 | Anh. C | 258 | A | Wachstumsorientierung; Selbsttaktung | *growth mindset*; *self-pacing* | kestin2025, Discussion: „(iii) promoting a growth mindset“, „(vii) allowing for self-pacing“ (https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/; doi:10.1038/s41598-025-97652-6) | bestätigt |
| AC-33 | Anh. C | 268 | C | computergesteuerte Spielfigur | NPC (*non-player character*) | mollick2024, Volltext: „AI NPCs (non-player characters)“ (arXiv:2407.12796) | bestätigt |
| AC-34 | Anh. C | 274 | B | Grenzfälle; Übergaben zwischen Agenten | Edge Cases; Agenten-Handovers | Typ B | – |
| AC-35 | Anh. C | 274 | B | Vorgaben | Constraints | Typ B | – |
| AC-36 | Anh. C | 275 | B | gezielte Angriffstests | Red-Teaming | Typ B; mollick2024: „Red Teaming to see if harmful or biased results can be solicited“ | – |
| AC-37 | Anh. C | 282 | B | Prompts, die eigene Prompts erzeugen | Blueprints | mollick2024a, Abstract: „blueprints, prompts that help instructors create their own original prompts“ (doi:10.2139/ssrn.4802463) | – |
| AC-38 | Anh. C | 287 | B | wählt je Gesprächsverlauf die Tutor-Strategie | Prompt-Router | Typ B; Beschreibung wie Kap. 4 Z. 586 (chang2026) | – |
| AC-39 | Anh. C | 289 | B | Vorabfassungen ohne Begutachtung | Preprints | Typ B; erste Nennung | – |
| AC-40 | Anh. C | 291 | B | gestaltungsorientierte Forschung | Design-Science-Studien | Typ B | – |
| AC-41 | Anh. C | 308 | C | Verband der Hochschullehrerinnen und Hochschullehrer für Betriebswirtschaft | VHB | Typ C; Wortlaut wie Kap. 4 Z. 186; nur online. Erste Nennung ist das Fettlabel Z. 300; die Auflösung steht im ersten Satz danach | – |

## 2. ALT / NEU

### kapitel07-appendix02-prompt-sammlung.qmd (Anhang B, Präfix AB-)

**AB-01** (Z. 5)
ALT: `Die hier vorgestellten didaktischen Prompts wurden`
NEU: `Die hier vorgestellten didaktischen Prompts (Eingaben an die KI) wurden`

**AB-02** (Z. 5)
ALT: `(RTF oder CREATE-Schema, s.o.)`
NEU: `(das kurze Schema aus Rolle, Aufgabe und Format, RTF, oder das ausführlichere CREATE-Schema, das zusätzlich Beispiele, Vorgaben und Prüfschritte festlegt; vgl. @sec-prompt-components)`
*Hinweis: Länger als üblich (+18 Wörter), weil die Schemata im Druck sonst nie aufgelöst werden. Kürzere Variante: `(das kurze Schema aus Rolle, Aufgabe und Format, RTF, oder das ausführlichere CREATE-Schema; vgl. @sec-prompt-components)`.*

**AB-03** (Z. 18)
ALT: `Nutzen Sie dafür die LM-Arena:`
NEU: `Nutzen Sie dafür die LM-Arena (Plattform zum direkten Vergleich von Sprachmodellen):`

**AB-04** (Z. 60)
ALT: `**Didaktische Elemente:** Retrieval Practice; formative Checks;`
NEU: `**Didaktische Elemente:** Retrieval Practice (Abrufübungen); formative Checks;`

**AB-05** (Z. 102)
ALT: `seine GPT-Version nennt der Kasten`
NEU: `seine Fassung als angepasster ChatGPT-Assistent (sogenannter GPT) nennt der Kasten`

**AB-06** (Z. 113)
ALT: `Eine Online-Version (GPT) finden Sie hier:`
NEU: `Eine Online-Version als angepasster ChatGPT-Assistent (GPT) finden Sie hier:`

**AB-07** (Z. 229)
ALT: `**Didaktische Elemente**: Scaffolding (Profilkarte + Blueprint als Defaults)`
NEU: `**Didaktische Elemente**: Scaffolding (Lerngerüst: Profilkarte + Blueprint als Defaults)`

**AB-08** (Z. 232)
ALT: `Beispiele, Unsicherheit, Reasoning, Iteration)`
NEU: `Beispiele, Unsicherheit, Reasoning (schrittweises Nachdenken), Iteration)`

**AB-09** (Z. 384)
ALT: `**Didaktische Elemente:** Testing Effect; Low Stakes Test;`
NEU: `**Didaktische Elemente:** Testing Effect (Testeffekt); Low Stakes Test (Test ohne Notenfolgen);`

**AB-10** (Z. 447)
ALT: `Meeting-Notizen verdichten; Action Items extrahieren`
NEU: `Meeting-Notizen verdichten; Action Items (vereinbarte Aufgaben) extrahieren`

**AB-11** (Z. 583)
ALT: `Cognitive Load Management; gezielte Leitfragen; Beispiele/Constraints;`
NEU: `Cognitive Load Management (Steuerung der kognitiven Belastung); gezielte Leitfragen; Beispiele/Constraints (Vorgaben);`

**AB-12** (Z. 695)
ALT: `Socratic Questioning (einzeln, sequenziell)`
NEU: `Socratic Questioning (sokratisches Fragen; einzeln, sequenziell)`

**AB-13** (Z. 735)
ALT: `(Ownership/Agency).`
NEU: `(Ownership/Agency, Eigenverantwortung der Lernenden).`

**AB-14** (Z. 771)
ALT: `Guided Reflection; Self-distancing;`
NEU: `Guided Reflection (angeleitete Reflexion); Self-distancing (Selbstdistanzierung);`

**AB-15** (Z. 1009)
ALT: `Verständnis für Halluzinationen und sprachliche Schwächen`
NEU: `Verständnis für Halluzinationen (erfundene Angaben der KI) und sprachliche Schwächen`

**AB-16** (Z. 1011)
ALT: `Fehlerorientiertes Lernen (Learning from Errors); Editing; Comparative Analysis;`
NEU: `Fehlerorientiertes Lernen (*learning from errors*); Editing (Überarbeiten); Comparative Analysis (vergleichende Analyse);`

**AB-17** (Z. 1056)
ALT: `**Didaktische Elemente:** Co-Creation; Rollenspiel (AI as Mentor);`
NEU: `**Didaktische Elemente:** Co-Creation (gemeinsames Erstellen); Rollenspiel (KI als Mentor, *AI as Mentor*);`

**AB-18** (Z. 1126)
ALT: `Überwindung von Konformitätsdruck (Groupthink) und Optimismus-Fehlschluss (Optimism Bias)`
NEU: `Überwindung von Gruppendenken (*groupthink*) und Optimismus-Fehlschluss (*optimism bias*)`
*Hinweis: Ändert „Konformitätsdruck“ → „Gruppendenken“ (wie Z. 1201). Wer den Wortlaut halten will: `Überwindung von Konformitätsdruck (*groupthink*) und Optimismus-Fehlschluss (*optimism bias*)`.*

**AB-19** (Z. 1201)
ALT: `Gruppendenken (Groupthink) und Bestätigungsfehlern (Confirmation Bias)`
NEU: `Gruppendenken (*groupthink*) und Bestätigungsfehlern (*confirmation bias*)`

**AB-20** (Z. 1203)
ALT: `Dialektische Untersuchung (Dialectical Inquiry)`
NEU: `Dialektische Untersuchung (*dialectical inquiry*)`

**AB-21** (Z. 1240)
ALT: `stabilen Arbeitsgrundlage (Contracting)`
NEU: `stabilen Arbeitsgrundlage (*contracting*)`

**AB-22** (Z. 1242)
ALT: `sokratisches Coaching / Guided Inquiry`
NEU: `sokratisches Coaching / Guided Inquiry (angeleitetes Erkunden)`

**AB-23** (Z. 1274)
ALT: `ohne Schuldzuweisungen (No-Blame Culture)`
NEU: `ohne Schuldzuweisungen (*no-blame culture*)`

**AB-24** (Z. 1276)
ALT: `Reflexive Praxis (Reflective Practice)`
NEU: `Reflexive Praxis (*reflective practice*)`

**AB-25** (Z. 1408)
ALT: `zerlegen den ROE in Marge, Kapitalumschlag und Leverage`
NEU: `zerlegen die Eigenkapitalrendite (*return on equity*, ROE) in Marge, Kapitalumschlag und Leverage (Verschuldungsgrad)`

**AB-26** (Z. 1695)
ALT: `durch Simulation (Pre-Testing)`
NEU: `durch Simulation (*pre-testing*)`

**AB-27** (Z. 1695)
ALT: `Nachfragetechniken (Probing)`
NEU: `Nachfragetechniken (*probing*)`

**AB-28** (Z. 1799)
ALT: `in einer risikofreien Umgebung (Sandbox); Anwendung theoretischer Konzepte (BATNA, ZOPA)`
NEU: `in einer risikofreien Umgebung (*sandbox*); Anwendung theoretischer Konzepte (beste Alternative ohne Einigung, BATNA; Einigungsbereich, ZOPA)`

**AB-29** (Z. 1801)
ALT: `Formatives Feedback (Debriefing); Adaptives Lernen`
NEU: `Formatives Feedback (Debriefing: Nachbesprechung); Adaptives Lernen`

**AB-30** (Z. 1939)
ALT: `kognitive Umstrukturierung (Reframing)`
NEU: `kognitive Umstrukturierung (*reframing*)`

**AB-31** (Z. 2133)
ALT: `**Funktion:** Training von Methodenkompetenz (Zielsetzung, Priorisierung)`
NEU: `**Funktion:** Goal Play (Lernende bleiben sie selbst und leiten eine KI-Figur an); Training von Methodenkompetenz (Zielsetzung, Priorisierung)`

**AB-32** (Z. 2133)
ALT: `(z. B. SMART-Kriterien)`
NEU: `(z. B. SMART-Kriterien: spezifisch, messbar, attraktiv, realistisch, terminiert)`

**AB-33** (Z. 2135)
ALT: `Szenariobasiertes Lernen (Storytelling); Lernen durch Lehren (Learning by Teaching)`
NEU: `Szenariobasiertes Lernen (*storytelling*); Lernen durch Lehren (*learning by teaching*)`

**AB-34** (Z. 2304)
ALT: `am Primärtext ("Close Reading")`
NEU: `am Primärtext (*close reading*, genaues Lesen)`

**AB-35** (Z. 2306)
ALT: `**Didaktische Elemente:**Forschendes Lernen (Inquiry-Based Learning); Rollenspiel-Simulation (Persona-Prompting); Textanalyse (Close Reading)`
NEU: `**Didaktische Elemente:** Forschendes Lernen (*inquiry-based learning*); Rollenspiel-Simulation (*persona prompting*); Textanalyse (*close reading*)`

**AB-36** (Z. 2477)
ALT: `Rollenspiel-Simulation (Role-Play); Sprachbasierte Interaktion (Voice UI); Klinisches Urteilsvermögen (Clinical Reasoning); Reflexive Praxis (Self-Assessment & AI-Feedback)`
NEU: `Rollenspiel-Simulation (*role-play*); Sprachbasierte Interaktion (*voice user interface*, Voice UI); Klinisches Urteilsvermögen (*clinical reasoning*); Reflexive Praxis (*self-assessment & AI feedback*)`

**AB-37** (Z. 2636)
ALT: `(Equine Kolik); Training des diagnostischen Pfads ("Clinical Reasoning")`
NEU: `(Kolik beim Pferd, equine Kolik); Training des diagnostischen Pfads (*clinical reasoning*)`

**AB-38** (Z. 2638)
ALT: `Problem-Based Learning (PBL); Sequenzielle Informationsfreigabe (Drip-Feeding Information)`
NEU: `Problem-Based Learning (problembasiertes Lernen, PBL); Sequenzielle Informationsfreigabe (*drip-feeding information*)`

**AB-39** (Z. 2798)
ALT: `GenAI-Literacy-Frameworks als Analyserahmen`
NEU: `GenAI-Literacy-Frameworks (Modelle der KI-Kompetenz) als Analyserahmen`

**AB-40** (Z. 2799)
ALT: `Aufbau speziell des AI Fluency Frameworks.`
NEU: `Aufbau speziell des AI Fluency Frameworks (etwa: Gewandtheit im Umgang mit KI).`

**AB-41** (Z. 2801)
ALT: `(O\*NET, Prompt-Arten, systematische Evaluation`
NEU: `(US-Berufsdatenbank O\*NET, Prompt-Arten, systematische Evaluation`

**AB-42** (Z. 2839)
ALT: `in der GWDG Academic Cloud und auf arena.ai verfügbar waren`
NEU: `in der Academic Cloud der Gesellschaft für wissenschaftliche Datenverarbeitung in Göttingen (GWDG) und auf der Vergleichsplattform arena.ai verfügbar waren`

**AB-43** (Z. 2818)
ALT: `**Automatisierung (automation).**`
NEU: `**Automatisierung (*automation*).**`

**AB-44** (Z. 2820)
ALT: `**Augmentierung (labor-augmenting technology).**`
NEU: `**Augmentierung (*labor-augmenting technology*).**`

**AB-45** (Z. 2822)
ALT: `**Neue Aufgaben (new tasks).**`
NEU: `**Neue Aufgaben (*new tasks*).**`

**AB-46** (Z. 2852)
ALT: `so bleibt das Setup (die „Harness“) gleich`
NEU: `so bleibt das Setup (die „Harness“, der Werkzeugkasten um das Modell) gleich`

**AB-47** (Z. 2875)
ALT: `dann in den Deep-Research-Modus geben`
NEU: `dann in den Deep-Research-Modus (mehrstufige, selbstständige Webrecherche der KI) geben`

**AB-48** (Z. 2966)
ALT: `nach dem Prinzip *Defense in Depth* aufeinander`
NEU: `nach dem Prinzip *Defense in Depth* (gestaffelte Sicherung) aufeinander`

**AB-49** (Z. 2970)
ALT: `RAGAS (Retrieval-Augmented Generation Assessment) ist`
NEU: `RAGAS (Retrieval-Augmented Generation Assessment, Prüfung von KI mit Dokumentenabruf) ist`

**AB-50** (Z. 3060)
ALT: `aus der Datenbank O\*NET`
NEU: `aus der US-Berufsdatenbank O\*NET`
*Hinweis: Die Zeile Z. 3060 fällt derzeit aus der Tabelle heraus (Nebenfund B-2); die Ersetzung wirkt unabhängig davon.*

### kapitel08-appendix03-rollenspiele-simulationen.qmd (Anhang C, Präfix AC-)

**AC-01** (Z. 19)
ALT: `Bereiche Retention und Motivation einteilen`
NEU: `Bereiche Retention (Behalten) und Motivation einteilen`

**AC-02** (Z. 25)
ALT: `Anwenden ("practice testing") stärkt`
NEU: `Anwenden (*practice testing*) stärkt`

**AC-03** (Z. 27)
ALT: `bewusstes Üben mit gezielter Rückmeldung`
NEU: `bewusstes Üben (*deliberate practice*) mit gezielter Rückmeldung`

**AC-04** (Z. 43)
ALT: `im **Flow-Bereich** --`
NEU: `im **Flow-Bereich** (zwischen Über- und Unterforderung) --`

**AC-05** (Z. 54)
ALT: `aus einer Scopus-Suche mit Publish or Perish (v. 8)`
NEU: `aus einer Suche in der Literaturdatenbank Scopus mit dem Suchprogramm Publish or Perish (v. 8)`

**AC-06** (Z. 60)
ALT: `mehrstufige Reasoning-Prozesse übernimmt`
NEU: `mehrstufige Reasoning-Prozesse (schrittweises Nachdenken) übernimmt`

**AC-07** (Z. 67)
ALT: `in denen LLM-gestützte Personas realitätsnahe Antworten geben`
NEU: `in denen von großen Sprachmodellen (*Large Language Models*, LLM) gesteuerte Personas (simulierte Figuren) realitätsnahe Antworten geben`

**AC-08** (Z. 70)
ALT: `durch GPT-basierte Agenten gesteuerten`
NEU: `durch GPT-basierte Agenten (selbstständig handelnde KI-Programme) gesteuerten`

**AC-09** (Z. 76)
ALT: `zeigen hochschulische Use-Cases aus`
NEU: `zeigen hochschulische Use-Cases (Anwendungsfälle) aus`

**AC-10** (Z. 85)
ALT: `damit verschiebt sich Scaffolding von`
NEU: `damit verschiebt sich Scaffolding (Lerngerüst) von`

**AC-11** (Z. 86)
ALT: `etwa durch Six-Thinking-Hats -- kognitive Präsenz und`
NEU: `etwa durch Six-Thinking-Hats (sechs Denkhüte nach de Bono) -- kognitive Präsenz (*cognitive presence*) und`

**AC-12** (Z. 95)
ALT: `als Lesson Learned gilt`
NEU: `als Lesson Learned (Erkenntnis aus der Praxis) gilt`

**AC-13** (Z. 95)
ALT: `Empfehlungen (Why-behind-the-hint) und Guardrails gegen`
NEU: `Empfehlungen (*why-behind-the-hint*) und Guardrails (Leitplanken) gegen`

**AC-14** (Z. 97)
ALT: `in eine VR-Lernumgebung (IoT-Aufgaben)`
NEU: `in eine VR-Lernumgebung (virtuelle Realität, VR; Aufgaben zum Internet der Dinge, IoT)`

**AC-15** (Z. 97)
ALT: `und evaluieren das in einem RCT (n = 81)`
NEU: `und evaluieren das in einer randomisierten kontrollierten Studie (*randomized controlled trial*, RCT; n = 81)`

**AC-16** (Z. 98)
ALT: `höhere kognitive Niveaus (HOTS) und bessere Selbstregulation (SRL)`
NEU: `höhere kognitive Niveaus (*higher-order thinking skills*, HOTS) und bessere Selbstregulation (*self-regulated learning*, SRL)`

**AC-17** (Z. 108)
ALT: `verbesserte Aussprache und Fluency`
NEU: `verbesserte Aussprache und Fluency (Sprechflüssigkeit)`

**AC-18** (Z. 112)
ALT: `kombinierte vorbereitete Prompts (z. B. Problemszenarien)`
NEU: `kombinierte vorbereitete Prompts (Eingaben an die KI, z. B. Problemszenarien)`

**AC-19** (Z. 120)
ALT: `wie Multi-Agent-Setups in Sekunden`
NEU: `wie Multi-Agent-Setups (mehrere zusammenarbeitende KI-Agenten) in Sekunden`

**AC-20** (Z. 121)
ALT: `adaptives Üben von Pitches`
NEU: `adaptives Üben von Pitches (Kurzpräsentationen einer Geschäftsidee)`

**AC-21** (Z. 123)
ALT: `Bewertungsraster und Debriefings,`
NEU: `Bewertungsraster und Debriefings (Nachbesprechungen),`

**AC-22** (Z. 125)
ALT: `grobe Ablaufkonzepte erstellt (Playbooks)`
NEU: `grobe Ablaufkonzepte erstellt (*playbooks*)`

**AC-23** (Z. 141)
ALT: `Grounding reduziert Halluzinationen deutlich`
NEU: `Grounding (Bindung an die Quellen) reduziert Halluzinationen (erfundene Angaben) deutlich`

**AC-24** (Z. 149)
ALT: `mehrschrittiges "Nachdenken" (Reasoning)`
NEU: `mehrschrittiges "Nachdenken" (*reasoning*)`

**AC-25** (Z. 153)
ALT: `(Rubrics, menschliche Supervision)`
NEU: `(Rubrics bzw. Bewertungsraster, menschliche Supervision)`

**AC-26** (Z. 157)
ALT: `und Fail-Safes gegen falsche Pfade`
NEU: `und Fail-Safes (Sicherungen) gegen falsche Pfade`

**AC-27** (Z. 166)
ALT: `in Mixed-Reality-Umgebungen Lernende`
NEU: `in Mixed-Reality-Umgebungen (MR; Verbindung realer und virtueller Räume) Lernende`

**AC-28** (Z. 179)
ALT: `Entscheidungsfindung, VC-Pitching |`
NEU: `Entscheidungsfindung, Pitching vor Wagniskapitalgebern (*venture capital*, VC) |`

**AC-29** (Z. 181)
ALT: `| Classroom-Management, Verhalten`
NEU: `| Classroom-Management (Klassenführung), Verhalten`

**AC-30** (Z. 197)
ALT: `didaktische Rahmung ("Human in the Loop") schaffen`
NEU: `didaktische Rahmung ("Human in the Loop": der Mensch prüft und entscheidet) schaffen`

**AC-31** (Z. 248)
ALT: `Methodenkompetenz und KI-Literacy`
NEU: `Methodenkompetenz und KI-Literacy (Kompetenz im Umgang mit KI)`

**AC-32** (Z. 258)
ALT: `Wachstumsorientierung, explizite Schritt-für-Schritt-Scaffolds, zeitnahes Feedback und Selbsttaktung`
NEU: `Wachstumsorientierung (*growth mindset*), explizite Schritt-für-Schritt-Scaffolds, zeitnahes Feedback und Selbsttaktung (*self-pacing*)`

**AC-33** (Z. 268)
ALT: `ein weiterer Non-Player-Character (NPC) Agent spielt`
NEU: `ein weiterer Agent als computergesteuerte Spielfigur (*non-player character*, NPC) spielt`

**AC-34** (Z. 274)
ALT: `gegenüber "Edge Cases", Niveaudifferenzierung, Output-Qualität und Agenten-Handovers`
NEU: `gegenüber "Edge Cases" (Grenzfällen), Niveaudifferenzierung, Output-Qualität und Agenten-Handovers (Übergaben zwischen Agenten)`

**AC-35** (Z. 274)
ALT: `Kontexte, Beispiele, Constraints, Erinnerungen`
NEU: `Kontexte, Beispiele, Constraints (Vorgaben), Erinnerungen`

**AC-36** (Z. 275)
ALT: `durch Red-Teaming, präzise Rollenprompts`
NEU: `durch Red-Teaming (gezielte Angriffstests), präzise Rollenprompts`

**AC-37** (Z. 282)
ALT: `vor allem die Blueprints von Mollick und Mollick`
NEU: `vor allem die Blueprints (Prompts, die eigene Prompts erzeugen) von Mollick und Mollick`

**AC-38** (Z. 287)
ALT: `der lernende Prompt-Router von @chang2026`
NEU: `der lernende Prompt-Router (wählt je Gesprächsverlauf die Tutor-Strategie) von @chang2026`

**AC-39** (Z. 289)
ALT: `sind bislang nur als Preprints verfügbar`
NEU: `sind bislang nur als Preprints (Vorabfassungen ohne Begutachtung) verfügbar`

**AC-40** (Z. 291)
ALT: `A/B-Tests und Design-Science-Studien`
NEU: `A/B-Tests und Design-Science-Studien (gestaltungsorientierte Forschung)`

**AC-41** (Z. 308)
ALT: `nach dem VHB Rating 2024, Teilrating`
NEU: `nach dem VHB Rating 2024 (Verband der Hochschullehrerinnen und Hochschullehrer für Betriebswirtschaft), Teilrating`
## 3. Nicht bestätigt / bewusst weggelassen

**Nicht bestätigt (kein wörtlicher Beleg an der zitierten Quelle)**
- *Illusion von Kompetenz* (Anh. C Z. 35) → „illusion of competence/mastery“: brown2014 (S. 51–52) ist ein Buch ohne Abstract in references.json; die Seite ist nicht prüfbar. Weggelassen.
- *reflektierende Eigenarbeit* (Anh. C Z. 37) → „reflection“ (brown2014): nicht prüfbar, zudem kein fester Fachbegriff. Weggelassen.
- *kognitive Entlastung* (Anh. C Z. 258) → kestin2025 sagt „managing cognitive load“ (PMC12179260); das ist kein Nomen, das sich als Klammer eignet. Weggelassen (AC-32 übernimmt nur *growth mindset* und *self-pacing*).
- *Selbstwirksamkeit* (Anh. C Z. 73) → „self-efficacy“: nofal2025 hat in references.json kein Abstract; nicht geprüft. Weggelassen.
- *Stasis-Theorie* (Anh. B Z. 937) → „stasis theory“ (meehan2025, Quellentitel „Generative AI and Stasis Theory“): wörtlich belegt, aber nur eine Lautumschrift ohne Mehrwert. Weggelassen.
- Aus Teil 1 weiterhin nicht bestätigt: situational barriers, problem-based learning (Hattie), standardized work, Engpass (kommen in Anh. B/C nicht vor). *learning by teaching* und *problem-based learning* stehen in Anh. B schon im Text (AB-33, AB-38: nur Format bzw. dt. Umschreibung, keine neue Zuschreibung). *deliberate practice* ist in Anh. C diesmal bestätigt (AC-03, ericsson1993 direkt zitiert).

**Bewusst weggelassen**
- Alles in Codeblöcken (Prompts, Aufgabenstellungen, Übungs-Prompts der AI-Fluency-Übung), Quellentitel (z. B. „Goal Play: Help a character achieve goals“, „Co-create a case study with Copilot“), Zitate in Anführungszeichen („Never give the answer before I have tried“, „Practice like you play …“), Suchstring Anh. C Z. 54 („… GenAI OR LLM“), Überschriften (u. a. „Pre-Mortem“, „Devil’s advocate“, „After Action Review“, „Flipped Interaction“), Produkt- und Projektnamen (NotebookLM, ElevenLabs, Firefly, Sora, Suno, Talk2Transform, TEAM with AI, PitchQuest, Teuken, Qwen, Llama, KPMG, MS-Teams, Zoom, AI Pedagogy Project, Derek Bok Center).
- Schon im Satz erklärt: Prospective Hindsight (Prospektive Rückschau), Double-Loop Learning, After Action Review (AAR; „Systematische Rückschau“ steht davor), Pre-Mortem („mentale Zeitreise“), Alignment (Lernziele↔Inhalte), „unplugged“, Chunking, Spacing und Interleaving (Anh. C Z. 29/35: Erklärung folgt im selben Satz), ICAP (Buchstaben I/C/A/P sind im Satz aufgelöst), embodied GenAI („verkörperte KI-Agenten“), Challenge Cards, Learning-Loop, Flipped Interaction, 4D (Tabelle mit Leitfragen), Creation/Transparency/Deployment Diligence (Z. 3013), Faithfulness/Answer Relevancy/Context Precision/Recall (Z. 2970), Inter-Rater-Reliabilität, Regressionstest, Adversarial testen, Bias (Anh. C Z. 223: „Vorurteile und Verzerrungen“ folgt), Halluzinationen Anh. C Z. 201 (nach AC-23).
- Gängig oder Eigenname: KI, GenAI (in Anh. C Z. 49/62 aufgelöst), Hiwi, Copilot, Tutor, Feedback, Stakeholder, Setup, Workflow, Output, Avatar, Podcast, Open Source, DSGVO, A/B-Test, Think-Pair-Share, GPT in „GPT-basierte Agenten“ (Anh. C Z. 70; Glossar), Advanced Voice Mode.
- AI-Fluency-Teilkompetenzen „Platform Awareness, Task Delegation, Goal and Task Awareness, Product/Process Description, Product/Process Discernment“ (Anh. B Z. 2848 ff.): Namen aus dakan2025; Übersetzungen wären eigene Prägungen. Bei Bedarf eine Fußnote statt Klammern.
- Kleinkram aus Kürzegründen: Blueprint/Defaults (AB-07 bleibt kurz), Executive-Memo, Evidenz-Roadmap, Toolbox, Sprintzyklen, feintunen, Hint, Plan-/Hint-Mechaniken, Spieltelemetrie, Feature/Bug (Anh. C Z. 216), Prosodie (deutsches Fachwort).
- ISSN-Nummern in der Zeitschriftenliste Anh. C (nur online) ohne Bezeichnung. Optional: in Z. 308 „(die Zahlen sind die ISSN, die internationale Kennnummer jeder Zeitschrift)“ wie Kap. 4 Z. 186.
- Goal Play in Anh. C Z. 88/118: wegen des Widerspruchs (Nebenfund C-1) keine Umschreibung vorgeschlagen; die korrekte Definition steht in Anh. C Z. 265 und über AB-31 in Anh. B.

## 4. Nebenfunde

Mit ALT/NEU nur, wo eindeutig (IDs AB-90/91, AC-90–92; bei Bedarf über die Ausschlussliste von `anwenden.py` abwählen).

**Anhang B (kapitel07-appendix02-prompt-sammlung.qmd)**

B-1. Z. 13 (nur Druck): „neun Prompts … je ein bis drei“. Im Druck sichtbar sind zehn: Hiwi 3 (Aktivierungs-Coach Z. 56, System-Prompt Z. 223, Quiz-Ersteller Z. 380), Tutor 2 (Quiz me Z. 799, Sokratischer Dialog Z. 837), Copilot 3 (Fallstudie Z. 1052, Pre-Mortem Z. 1124, AI-Sandwich Z. 1557), Simulator 2 (Verhandlung Z. 1797, Zielsetzung Z. 2131). Die „übrigen 24“ stimmen (24 Tabellenzeilen + Übungszeile).

**AB-90** (Z. 13)
ALT: `Im Buch stehen neun Prompts und Aufgabenstellungen in voller Länge, je ein bis drei`
NEU: `Im Buch stehen zehn Prompts und Aufgabenstellungen in voller Länge, je zwei oder drei`

B-2. Z. 3059–3061, Tabelle `@tbl-prompts-online` zerbrochen: Vor der letzten Zeile „| Übung (alle Rollen) | AI Fluency am Berufsprofil …“ steht eine Leerzeile. Pandoc beendet die Tabelle dort; die Zeile wird zu Fließtext mit Pipes, und die Beschriftung `: Online verfügbare … {#tbl-prompts-online}` hängt an keiner Tabelle. Das erklärt die bekannte Druck-Warnung „@tbl-prompts-online“ (Status Teil 1). Mit `pandoc` an einem Minimalbeispiel nachgestellt: Ausgabe `<div class="line-block">z | w |</div><p>: Cap {#tbl-x}</p>`. Behebung: Leerzeile Z. 3059 löschen (mehrzeilig, daher kein ALT/NEU).

B-3. RTF und CREATE werden im ganzen Buch nur in Anh. B Z. 108 und Z. 2928 aufgelöst, beide nur online; „s.o.“ in Z. 5 verweist im Druck ins Leere (grep über alle .qmd). Durch AB-02 behoben.

B-4. Z. 1631 („KI, die Zukunft und Du“, nur online): Der erste Satz „Die Lehrperson verankert das Sandwich-Prinzip in der Aufgabenstellung …“ ist eine Kopie von Z. 1561 (AI-Sandwich) und passt nicht zur Aufgabe von Taylor. Vorschlag: Satz in Z. 1631 streichen (Zeile kommt zweimal vor, daher kein ALT/NEU).

B-5. Z. 1945: Der Kasten zum Methoden-Simulator (Selbstdistanzierung) trägt den Titel „Simulator: Verhandlungssimulation“ (kopiert aus Z. 1809). Vorschlag: `title="Simulator: Goal Play – Analysetechnik anwenden"`. Titelzeile kommt zweimal vor, daher kein ALT/NEU; Ersatz per Zeilennummer.

B-6. Z. 2479 (nur online): Link kaputt, eckige Klammern maskiert und Leerzeichen vor der URL; wird als Text „[AI Pedagogy Project …] (https://…)“ gedruckt.

**AB-91** (Z. 2479)
ALT: `\[AI Pedagogy Project (2025) Simulated Telephone Triage Calls\] (https://aipedagogy.org/assignment/simulated-telephone-triage-calls/)`
NEU: `[AI Pedagogy Project (2025): Simulated Telephone Triage Calls](https://aipedagogy.org/assignment/simulated-telephone-triage-calls/)`

B-7. Z. 18: „LM-Arena“ mit URL lmarena.ai; die Plattform heißt inzwischen „Arena“ (arena.ai/blog/lmarena-is-now-arena/), und die AI-Fluency-Übung im selben Anhang (Z. 2839, 2867) nutzt schon arena.ai. Vorschlag: Name und Link angleichen, sobald die neue Adresse für den Side-by-Side-Modus geprüft ist (darum kein ALT/NEU; AB-03 lässt Name und URL unverändert).

B-8. Z. 1557 (Überschrift): `'AI-Sandwich '` mit Leerzeichen vor dem schließenden Anführungszeichen; außerdem „Copilot-Aufgaben“ (Plural) statt „Copilot-Aufgabe“ wie in allen anderen Überschriften. Überschrift, daher nur Hinweis.

B-9. Z. 2306: fehlendes Leerzeichen „**Didaktische Elemente:**Forschendes“; in AB-35 mit behoben.

B-10. Z. 2137–2139: Nach `@mollickMollickMoreUsefulThingsStudentExercises` folgen noch einmal „Mollick, E. & Mollick, L. (2024).“; Autor und Jahr erscheinen dadurch doppelt. Vorschlag: die drei Zeilen streichen (mehrzeilig).

B-11. Z. 1699 und Z. 2640: „Dr. ALONSO SOUSA Santiago“ übernimmt die Großschreibung der CityU-Seite; im Buch sonst Vorname zuerst. Vorschlag „Dr. Santiago Alonso Sousa“ (Namensreihenfolge an der Quelle nicht geprüft).

**Anhang C (kapitel08-appendix03-rollenspiele-simulationen.qmd)**

C-1. „Goal Play“ in drei Bedeutungen, teils falsch belegt. (a) Z. 265 ist korrekt (Lernende bleiben sie selbst und leiten eine Figur an); mollick2024a definiert: „Goal play simulations involve students playing themselves, often guiding a character in a scenario, to achieve goals or apply specific frameworks“ (arXiv:2407.05181). (b) Z. 118 definiert „goal play“ als „zielgerichtete, auf Lernergebnisse hin entworfene Spiel- und Übungsformate“ und zitiert auch mollick2024. (c) Z. 151 nennt „mehrschrittige, agentenbasierte Orchestrierungen ("Goal Play")“ und belegt das mit mollick2024. mollick2024 („AI Agents and Education: Simulated Practice at Scale“, arXiv:2407.12796) enthält den Ausdruck „goal play“ gar nicht. (d) Z. 88 verwendet „goal play“ für Zielsetzung in Lernspielen nach goslen2025. Vorschlag: Z. 151 Klammer streichen (eindeutig), Z. 118 an die Definition von Z. 265 angleichen und nur mollick2024a zitieren, Z. 88 „Für zielorientierte Lernspiele“ statt „Für "goal play"“ (beides inhaltlich, daher ohne ALT/NEU; Roman entscheidet).

**AC-90** (Z. 151)
ALT: `agentenbasierte Orchestrierungen ("Goal Play") innerhalb`
NEU: `agentenbasierte Orchestrierungen innerhalb`

C-2. Z. 321 (nur online): „System: 2079-8954“. Die ISSN 2079-8954 gehört zu *Systems* (MDPI), nicht zur Elsevier-Zeitschrift *System* (Sprachlernforschung, ISSN 0346-251X). Beleg: https://en.wikipedia.org/wiki/List_of_MDPI_academic_journals. Welche Zeitschrift durchsucht wurde, kann nur Roman sagen (inhaltlich passt *System*); deshalb kein ALT/NEU.

C-3. Z. 327–352, Liste „Im Jahr 2025 publizierte Fachartikel“: enthält Lin (2024, @lin2024) und Zhan (2026, @zhan2026). Entweder Spalte „Jahr“ als Online-first-Jahr erläutern oder Überschrift/Methodik (Z. 54 „beschränkt auf 2025 publizierte Studien“) anpassen.

C-4. Z. 9: Das Kürzel „(R&S)“ wird eingeführt, aber nie wieder benutzt (grep: 1 Treffer).

**AC-91** (Z. 9)
ALT: `Rollenspielen und Simulationen (R&S) mit`
NEU: `Rollenspielen und Simulationen mit`

C-5. Z. 266: „Reflektion“; sonst im Anhang und Buch „Reflexion“.

**AC-92** (Z. 266)
ALT: `eine abschließende Reflektion in der Gruppe`
NEU: `eine abschließende Reflexion in der Gruppe`

C-6. Z. 49 und Z. 62 führen „generative KI (GenAI)“ zweimal ein; die zweite Klammer kann entfallen (Kleinigkeit, nicht als ALT/NEU).

## 5. Kennzahlen

- Vorschläge gesamt: 91 (Anhang B: 50, AB-01–AB-50; Anhang C: 41, AC-01–AC-41), dazu 5 Nebenfund-Ersetzungen (AB-90, AB-91, AC-90, AC-91, AC-92).
- Nach Typ (Mehrfachtypen je Eintrag einzeln gezählt): A 4 (alle bestätigt: AC-03, AC-11, AC-16, AC-32), A (Format) 24 (davon AB-43–45 zusätzlich an der Quelle bestätigt), B 56, C 19.
- Mehrwörter: Anhang B +149, Anhang C +139, gesamt +288; Nebenfunde −4 (AB-90 ±0, AC-90 −1, AC-91 −1, AB-91 −2 durch Zusammenziehen).
- Prüfskript (`python3`, je Datei): jeder ALT `count == 1`, keine Überlappung der Fundstellen, sequenzielles Einspielen aller 96 Ersetzungen fehlerfrei; kein ALT/NEU enthält Backticks oder Zeilenumbrüche. Gegenprobe mit `anwenden.py` auf Kopien in /tmp (AC-IDs bzw. AB-IDs jeweils ausgeschlossen): Anhang B „52 von 96 angewandt“ (50 + AB-90/91), Anhang C „44 von 96 angewandt“ (41 + AC-90–92); Inhalt aller Codeblöcke danach unverändert (Python-Vergleich), Zeilenzahl unverändert.
