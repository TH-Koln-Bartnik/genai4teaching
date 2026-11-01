# Vorschläge Fachbegriffe/Akronyme – kapitel02.qmd (Branch fachbegriffe-s6)

Stand: 2026-11-01. Nichts im Repo geändert. Alle ALT-Zeichenketten mit `grep -c -F` geprüft: jeweils genau 1 Treffer in `kapitel02.qmd`.
Zeilennummern beziehen sich auf den aktuellen Stand der Datei (891 Zeilen).
Hinweis: K2-18 und K2-19 betreffen dieselbe Zeile 293, K2-22 bis K2-24 dieselbe Zeile 382. Die ALT-Zeichenketten überlappen nicht, die Reihenfolge der Ersetzung ist also egal.

## 1. Vorschläge

| Nr | Zeile | Typ | Begriff dt. | Begriff engl. | Beleg (citekey, wo bestätigt) | Sicherheit |
|---|---|---|---|---|---|---|
| K2-01 | 6 | B | Eingabe (an das Modell) | Prompt | Definition im Kapitel selbst (Z. 535, @berryman2025); hier nur Umschreibung beim ersten Auftreten | plausibel |
| K2-02 | 52 | C | künstliche Intelligenz | KI | @eu2024aiact, Titel „… Vorschriften für künstliche Intelligenz“ (references.json; https://eur-lex.europa.eu/eli/reg/2024/1689/oj) | bestätigt |
| K2-03 | 59 | C | KI | AI (in *AI Fluency*) | @dakan2025, Titel „The AI Fluency Framework …“ (https://aifluencyframework.org/) | bestätigt |
| K2-04 | 102 | A | KI-Kompetenz | *AI literacy* | @eu2024aiact: engl. Fassung Art. 4 „AI literacy“, dt. Fassung „KI-Kompetenz“ (u. a. Erwägungsgrund 20, https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32024R1689); passt zu *AI Literacy* in Z. 103 (@pinski2024literacy, DOI 10.1016/j.chbah.2024.100062) | bestätigt |
| K2-05 | 106 | C | irische Hochschulbehörde | HEA = *Higher Education Authority* | HEA-Dokument „GenAI Fluency Framework“: „part funded by the Higher Education Authority“ (https://hub.teachingandlearning.ie/wp-content/uploads/2025/12/hea-genai-fluency-framework.pdf) | bestätigt |
| K2-06 | 114 (nur online) | C | Digitale Lehre Hub Niedersachsen | DLHN | @feil2026dlhn, Projektseite: „im Rahmen des Projektes Digitale Lehre Hub Niedersachsen (DLHN) entwickelt“ (https://hochschuledigital-niedersachsen.de/2026/03/27/ki-kompetenzrahmen-des-dlhn/) | bestätigt |
| K2-07 | 116 (nur online) | C | Organisation der Industriestaaten | OECD | @oecd2026ailit, DOI 10.1787/65cd27d4-en | bestätigt |
| K2-08 | 136 | B | kognitive Schuld / Gefälligkeit / eingeschleuste Anweisungen | *Cognitive Debt* / *Sycophancy* / *Prompt Injection* | Cognitive Debt: @kosmyna2025 (Titel, arXiv 2506.08872); Sycophancy: @koyuturk2026 (Titel, arXiv 2605.18372); Prompt Injection: kein Eintrag in references.json, Begriff in der Sicherheitsliteratur etabliert | plausibel (engl. Begriffe bestätigt, dt. Umschreibung Vorschlag) |
| K2-09 | 160 | A | Werkzeuge / Gedächtnis | *tools* / *memory* | @schick2023toolformer, Titel „… teach themselves to use tools“ (DOI 10.48550/arXiv.2302.04761); @milam2025sessions, Titel „Context engineering: Sessions, memory“ (https://www.kaggle.com/whitepaper-context-engineering-sessions-and-memory) | bestätigt |
| K2-10 | 201 | C | Anschluss (für Geräte) | USB | keine Quelle nötig, laienverständliche Umschreibung | plausibel |
| K2-11 | 206 | A | Kontextfenster | *context window* | @jurafsky2025, Kap. 7, Abschn. 7.7: „filling the full context window (of hundreds of thousands of tokens)“ (https://web.stanford.edu/~jurafsky/slp3/7.pdf) | bestätigt |
| K2-12 | 212 | A | Zeithorizont | *time horizon* | @kwa2025, Abstract: „we propose a new metric: 50%-task-completion time horizon“ (DOI 10.48550/arXiv.2503.14499) | bestätigt |
| K2-13 | 215 | A | Autonomie der Lernenden | *learner autonomy* | @holec1981 (Titel „Autonomy and foreign language learning“); Holecs Definition „the ability to take charge of one's own learning“ wird unter „learner autonomy“ geführt (https://en.wikipedia.org/wiki/Learner_autonomy); Original nicht online eingesehen | plausibel |
| K2-14 | 218 | A | sechs Stufen (der Zusammenarbeit) | *Levels of Autonomy* | @morris2024, Text: „We propose characterizing human-AI interaction paradigms with six Levels of Autonomy“, Tab. 2 „Autonomy Level 0–5“ (https://arxiv.org/html/2311.02462; https://proceedings.mlr.press/v235/morris24b.html) | bestätigt |
| K2-15 | 235 | A | Orchestrierungsschicht | *orchestration layer* | @wiesinger2024agents; Kaggle-PDF nicht direkt abrufbar, Begriff in Zusammenfassungen des Whitepapers belegt: „the orchestration layer as the cyclical process of information intake, internal reasoning and next action“ (https://www.aigl.blog/agents/) | plausibel (sekundär bestätigt) |
| K2-16 | 253 | A | Haltepunkte | *checkpoints* | @schluntz2024agents: „Agents can then pause for human feedback at checkpoints or when encountering blockers.“ (https://www.anthropic.com/engineering/building-effective-agents) | bestätigt |
| K2-17 | 261 | B | bei Bedarf geladene Gebrauchsanweisungen | Skills | Umschreibung nach Z. 724/730 und @zhang2025skills („Agent Skills“) | plausibel |
| K2-18 | 293 | B | Skalierungsgesetze | Scaling Laws | Umschreibung; Begriff in @grootendorst2025, @mollick2025 | plausibel |
| K2-19 | 293 | A | Denkzeit | *test-time compute* | @openai2024: „with more time spent thinking (test-time compute)“ (https://openai.com/index/learning-to-reason-with-llms/); @grootendorst2025, Untertitel „Exploring Test-Time Compute Techniques …“ (references.json) | bestätigt |
| K2-20 | 298 | B | Textbaustein | Token | Umschreibung nach Z. 673 (@jurafsky2025, Kap. 2) | plausibel |
| K2-21 | 326 | B | Recherche-Agenten | Research-Harnesses / Deep Research | Umschreibung; dt. Begriff „Recherche-Agent“ steht schon in Z. 386 | plausibel |
| K2-22 | 382 | B | Spitzenmodell | Frontier-Modell | Umschreibung | plausibel |
| K2-23 | 382 | A | Denkstufe | *reasoning effort* | @kotha2025 (GPT-5 Prompting Guide): „Switch to a lower `reasoning_effort`.“ (https://developers.openai.com/cookbook/examples/gpt-5/gpt-5_prompting_guide) | bestätigt |
| K2-24 | 382 | A | offene Modelle | *open-weight models* | @edwards2026openclosed: „the most capable open-weight models have lagged frontier closed models …“ (https://epoch.ai/data-insights/open-closed-eci-gap) | bestätigt |
| K2-25 | 394 | C | Nordrhein-Westfalen | NRW | @mkw2025kiconnect (Landesregierung NRW, https://www.land.nrw/…) | bestätigt |
| K2-26 | 419 | C | Technische Hochschule | RWTH (Rheinisch-Westfälische Technische Hochschule) Aachen | offizieller Name, https://www.rwth-aachen.de; Quelle im Kapitel @rwthitc2026changes | bestätigt |
| K2-27 | 488 | A | Unteragenten | *subagents* | @anthropic2025research: „the lead agent decomposes queries into subtasks and describes them to subagents.“ (https://www.anthropic.com/engineering/multi-agent-research-system) | bestätigt |
| K2-28 | 625 | A | Schaltkreis | *circuit* | @lindsey2025: „The model contains “default” circuits that cause it to decline to answer questions.“ (https://transformer-circuits.pub/2025/attribution-graphs/biology.html) | bestätigt |
| K2-29 | 700 | A | interne Merkmale | *features* | @lindsey2025: „Claude 3.5 Haiku is using genuinely multilingual features, especially in the middle layers.“ (wie K2-28) | bestätigt |

## 2. Ersetzungen (ALT → NEU)

**K2-01** (Z. 6, Kapitelauftakt; erstes Auftreten von „Prompt“. Alternative, falls die Szene unberührt bleiben soll: Z. 53 „Vor dem Prompt, der Eingabe an die KI, steht die Frage“)
ALT: `ein anderer schwört auf seinen Prompt-Anfang:`
NEU: `ein anderer schwört auf den Anfang seines Prompts, seiner Eingabe an das Modell:`

**K2-02** (Z. 52; „KI“ wird im Kapitel nirgends ausgeschrieben, Z. 151 setzt es voraus. In den Lernzielen Z. 42 bewusst nicht eingefügt, Regel E)
ALT: `Wer mit KI arbeitet, trifft vier Arten von Entscheidungen.`
NEU: `Wer mit künstlicher Intelligenz (KI) arbeitet, trifft vier Arten von Entscheidungen.`

**K2-03** (Z. 59; erstes Auftreten von „AI“)
ALT: `AI Fluency ist die Fähigkeit, effektiv, effizient, ethisch und sicher`
NEU: `AI Fluency (AI, englisch für KI) ist die Fähigkeit, effektiv, effizient, ethisch und sicher`

**K2-04** (Z. 102)
ALT: `zu Maßnahmen für die KI-Kompetenz ihres Personals`
NEU: `zu Maßnahmen für die KI-Kompetenz (*AI literacy*) ihres Personals`

**K2-05** (Z. 106; Laienbeschreibung steht schon vor dem Akronym, ergänzt wird nur der Originalname nach dem Muster von METR in Z. 212)
ALT: `Fassung der irischen Hochschulbehörde HEA, die wie dieses Buch`
NEU: `Fassung der irischen Hochschulbehörde HEA (*Higher Education Authority*), die wie dieses Buch`

**K2-06** (Z. 114, nur im Online-Block; DLHN kommt im Druck nicht vor. Sauberere Alternative: in Spalte 1 „DLHN-Kompetenzrahmen“ durch den offiziellen Titel „KI-Kompetenzrahmen Hochschule“ ersetzen, dann steht das Akronym nur hier nach der Auflösung)
ALT: `Recherche und Kriterienkatalog im Verbundprojekt Digitale Lehre Hub Niedersachsen |`
NEU: `Recherche und Kriterienkatalog im Verbundprojekt Digitale Lehre Hub Niedersachsen (DLHN) |`

**K2-07** (Z. 116, nur im Online-Block)
ALT: `EU und OECD mit Fachleuten und öffentlicher Konsultation`
NEU: `EU und die Industriestaaten-Organisation OECD mit Fachleuten und öffentlicher Konsultation`

**K2-08** (Z. 136, Kasten zum Lernspiel, beide Formate; einziges Auftreten der drei Begriffe im Kapitel. Zu bedenken: Die Umschreibungen verraten einen Teil der Spiellösungen)
ALT: `Problemen wie *Cognitive Debt*, *Sycophancy* oder *Prompt Injection*.`
NEU: `Problemen wie *Cognitive Debt* (kognitive Schuld), *Sycophancy* (Gefälligkeit) oder *Prompt Injection* (eingeschleuste Anweisungen).`

**K2-09** (Z. 160; erstes Auftreten beider Begriffe im technischen Sinn. Danach ist „(*Memory*)“ in Z. 803 doppelt; dort bezeichnet es aber den Speicher nach @milam2025sessions im Paar mit *Session* und kann deshalb bleiben)
ALT: `Sie hat Werkzeuge und Gedächtnis hinzugewonnen, und aus beiden`
NEU: `Sie hat Werkzeuge (*tools*) und Gedächtnis (*memory*) hinzugewonnen, und aus beiden`

**K2-10** (Z. 201)
ALT: `so wie USB Drucker und Kameras [@anthropic2024mcp].`
NEU: `so wie der USB-Anschluss Drucker und Kameras [@anthropic2024mcp].`

**K2-11** (Z. 206; erstes Auftreten, deutsche Erklärung steht schon da)
ALT: `Die Kontextfenster, also die Textmenge, die das Modell`
NEU: `Die Kontextfenster (*context windows*), also die Textmenge, die das Modell`

**K2-12** (Z. 212; erstes Auftreten. Die fett gesetzte Definition in Z. 279 bleibt unverändert)
ALT: `als Zeithorizont [@kwa2025; s. @sec-capabilities].`
NEU: `als Zeithorizont (*time horizon*) [@kwa2025; s. @sec-capabilities].`

**K2-13** (Z. 215)
ALT: `„Autonomie der Lernenden“ meint dagegen die Fähigkeit`
NEU: `„Autonomie der Lernenden“ (*learner autonomy*) meint dagegen die Fähigkeit`

**K2-14** (Z. 218)
ALT: `ordnen die Zusammenarbeit von Mensch und KI in sechs Stufen,`
NEU: `ordnen die Zusammenarbeit von Mensch und KI in sechs Stufen (*Levels of Autonomy*),`

**K2-15** (Z. 235)
ALT: `Google spricht von einer *Orchestrierungsschicht* [@wiesinger2024agents]`
NEU: `Google spricht von einer *Orchestrierungsschicht* (*orchestration layer*) [@wiesinger2024agents]`

**K2-16** (Z. 253; erstes Auftreten in beiden Formaten. Im Druck steht „Haltepunkte“ schon in der Bildunterschrift Z. 172; wer Regel E dort streng anwendet, setzt die Klammer zusätzlich in Z. 172)
ALT: `Jemand muss Werkzeuge anschließen, Kontext auswählen und Haltepunkte setzen.`
NEU: `Jemand muss Werkzeuge anschließen, Kontext auswählen und Haltepunkte (*checkpoints*) setzen.`

**K2-17** (Z. 261; erstes Auftreten von „Skills“, Definition erst in Z. 724)
ALT: `Anleitungsdateien, Skills, eigene Wissensbasen und Prüfregeln.`
NEU: `Anleitungsdateien, Skills (bei Bedarf geladene Gebrauchsanweisungen), eigene Wissensbasen und Prüfregeln.`

**K2-18** (Z. 293)
ALT: `Den Fähigkeitszuwachs beschreiben zwei **Scaling Laws** [@mollick2025;`
NEU: `Den Fähigkeitszuwachs beschreiben zwei **Scaling Laws** (Skalierungsgesetze) [@mollick2025;`

**K2-19** (Z. 293; einziges Auftreten von „Denkzeit“)
ALT: `je mehr „**Denkzeit**“ sie vor der Antwort`
NEU: `je mehr „**Denkzeit**“ (*test-time compute*) sie vor der Antwort`

**K2-20** (Z. 298; erstes Auftreten im Fließtext vor der Definition in Z. 673. Z. 133 „Von Prompt bis Token“ bewusst ausgelassen, weil der Satz die Begriffe des Lernspiels nur ankündigt)
ALT: `kleinere und je Token billigere Basismodelle`
NEU: `kleinere und je Token (Textbaustein) billigere Basismodelle`

**K2-21** (Z. 326)
ALT: `**Research-Harnesses** („Deep Research“) für Literatursichtung`
NEU: `**Research-Harnesses** („Deep Research“, Recherche-Agenten) für Literatursichtung`

**K2-22** (Z. 382)
ALT: `ein **großes Frontier-Modell** an und daneben`
NEU: `ein **großes Frontier-Modell** (Spitzenmodell) an und daneben`

**K2-23** (Z. 382; erstes Auftreten von „Denkstufe“)
ALT: `und wie lange, lässt sich als Denkstufe einstellen.`
NEU: `und wie lange, lässt sich als Denkstufe (*reasoning effort*) einstellen.`

**K2-24** (Z. 382. Möglich wäre zusätzlich eine Laienerklärung für „Gewichte“, etwa „ihre Gewichte, die gelernten Zahlenwerte, offen“, das sind aber 4 Wörter mehr)
ALT: `**Offene Modelle** legen ihre Gewichte offen;`
NEU: `**Offene Modelle** (*open-weight models*) legen ihre Gewichte offen;`

**K2-25** (Z. 394; NRW steht dann in Z. 419 aufgelöst)
ALT: `In Nordrhein-Westfalen ist **KI:connect.nrw** der Zugang`
NEU: `In Nordrhein-Westfalen (NRW) ist **KI:connect.nrw** der Zugang`

**K2-26** (Z. 419, Tabelle im Kasten „Stand bei Drucklegung“, beide Formate)
ALT: `KI:connect.nrw (Land NRW, RWTH Aachen)`
NEU: `KI:connect.nrw (Land NRW, Technische Hochschule RWTH Aachen)`

**K2-27** (Z. 488)
ALT: `beauftragt **Unteragenten** für die Zahlen, die Texte`
NEU: `beauftragt **Unteragenten** (*subagents*) für die Zahlen, die Texte`

**K2-28** (Z. 625)
ALT: `Im Modell ist standardmäßig ein Schaltkreis aktiv,`
NEU: `Im Modell ist standardmäßig ein Schaltkreis (*circuit*) aktiv,`

**K2-29** (Z. 700, Vertiefung)
ALT: `aktivieren sich dieselben internen Merkmale für „Kleinheit“`
NEU: `aktivieren sich dieselben internen Merkmale (*features*) für „Kleinheit“`

## 3. Nicht bestätigt, bewusst weggelassen, offen

### Nicht bestätigt
- **Standardarbeit (*standardized work*)**, Z. 727, @spear1999: Der Artikeltext bei HBR war nicht abrufbar. Regel 1 („content, sequence, timing, and outcome“) ist bekannt, ob Spear & Bowen selbst „standardized work“ schreiben, ist nicht belegt. Deshalb kein Vorschlag.
- **teilautonom**, Z. 215, @sae2021j3016: Die Norm spricht von *partial driving automation* (Stufe 2) und rät nach meiner Kenntnis vom Wort *autonomous* ab. Das stützt das Argument des Absatzes, passt aber nicht 1:1 zu „teilautonom“. Nicht an der Quelle geprüft (Norm kostenpflichtig), deshalb kein Vorschlag. Bitte prüfen, ob „wie die Normung des automatisierten Fahrens“ sachlich trägt.

### Bewusst weggelassen
- **Halluzination** (Z. 45/445/624): Das englische *hallucination* ist fast gleichlautend, die Klammer brächte keine Information.
- **Handlungsspielraum** (Z. 172/249): In den zitierten Quellen gibt es keinen festen englischen Begriff. *Agency* würde mit der 4D-Modalität „Agency“ (Z. 460) kollidieren.
- **Werkzeuganschluss** (Z. 669/742): Kein etablierter englischer Fachbegriff. @anthropic2024mcp schreibt nur beschreibend von „connecting AI assistants to the systems where data lives“.
- **Reasoning-Modelle** (Z. 293): Durch „Denkzeit“ im selben Satz schon erklärt, ausdrücklich dann in Z. 382. Z. 293 hat mit K2-18/K2-19 bereits zwei Einschübe.
- **Workflow** (Z. 210): Wird im Satz selbst definiert (@schluntz2024agents: „predefined code paths“).
- **Denkspuren** (Z. 491): Entspricht *chain of thought* (@chen2025reasoning, Abstract „Chain-of-thought (CoT)“). Weggelassen, weil „chain of thought“ in Z. 543 mit Erklärung eingeführt wird; sonst stünde es doppelt.
- **Zwischenschritte** (Z. 704): @lindsey2025 überschreibt den Dallas-Abschnitt mit „Multi-step Reasoning“ (bestätigt). Optional als „Zwischenschritte (*multi-step reasoning*)“, aus Gründen der Kürze nicht vorgeschlagen.
- **Sitzung** (Z. 206): Steht dort im Alltagssinn. Die Fachbedeutung (*Session*) ist in Z. 802 eingeführt.
- **Coding-Agent** (Z. 730): Das deutsche „Programmieragent“ steht schon in Z. 235.
- **Centaur, Cyborg, Cybernetic Teammate, Automation/Augmentation/Agency, Harness Engineering, Advance Organizer, ReAct, Eagerness-Kalibrierung, few shot, Embedding, Transformer, Pretraining**: Jeweils schon im Satz erklärt oder bereits mit dt./engl. Paar versehen.
- **O\*NET** (Z. 506): Hat schon die Laienbeschreibung „US-Datenbank“ vor dem Namen.
- **Beschwörer (*conjurer*)**: Bereits vorhanden. Herkunft geprüft: eigene Prägung von Mollick in @mollick2026charts („I added a third way to work with AI: the conjurer“). Nichts zu tun.
- **Dämmerfabrik (*twilight factory*) / dunkle Fabrik (*dark factory*)**: Bereits vorhanden. *Twilight Factory* haben laut @mollick2026agents Ethan und Lilach Mollick selbst geprägt. *Dark factory* verwendet Mollick ohne Herkunftsangabe (für die Software Factory von StrongDM); der Begriff stammt aus der Fertigung (menschenleere Fabrik, *lights-out factory*). Diese Herkunft ist nicht an einer Quelle geprüft. Nichts zu tun.

### Offen (Entscheidung des Autors)
- **DLHN**: Auflösung belegt, siehe K2-06. Das Akronym erscheint nur im Online-Block. Empfehlung: die Alternative aus K2-06 (offizieller Titel in Spalte 1).
- **GPT** (Z. 280 „GPT-4“, Z. 323, Z. 414): Steht als Teil von Produktnamen. Die Auflösung in Z. 689 („Was heißt hier GPT?“) ist bewusst als Pointe der Vertiefung gesetzt. Empfehlung: in Z. 280 nicht auflösen. Falls gewünscht, minimal „bei OpenAIs GPT-4“.
- **THKI** (Z. 394, 420): Keine offizielle Auflösung gefunden (Websuche ohne Treffer). Möglich wäre eine Laienbeschreibung: „über ihr KI-Portal THKI-Lab“. Die URL steht schon dabei.
- **CC BY-SA 4.0** (erstes Auftreten in der Tabellenunterschrift Z. 70, dann Z. 106 „unter der Lizenz CC BY-SA 4.0“): In Z. 106 ist es als „Lizenz“ beschrieben. Eine volle Auflösung (Creative Commons, Namensnennung, Weitergabe unter gleichen Bedingungen) wäre lang. Vorschlag: nichts tun oder in Z. 106 „unter der freien Lizenz CC BY-SA 4.0“.
- **AILit** (Z. 116, nur online): Name des Rahmens von OECD und EU (= AI Literacy). Nichts tun.

### Auffälligkeiten nebenbei (keine Fachbegriffsfrage, aber prüfenswert)
- **@bockeler2026harness** (Z. 261): Beim Abruf von martinfowler.com fand sich „outer harness“ und „user harness“, aber **kein „inner harness“**. Der Abruf war möglicherweise unvollständig. Bitte prüfen, ob „nennt das den inneren Harness“ von der Quelle gedeckt ist.
- **HEA** (Z. 106): Das HEA-Dokument ist englisch, nicht deutsch. Der Satz „Die Übersetzungen der Definitionen folgen der Fassung der … HEA“ stimmt also nur im Sinne von „übersetzt nach der HEA-Fassung“. Gegebenenfalls umformulieren.
