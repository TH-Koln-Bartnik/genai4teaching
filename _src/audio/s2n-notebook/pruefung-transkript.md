# Prüfung des Podcast-Transkripts B an den Originalquellen

Grundlage: /home/claude/daten/s2n/b/transkript-b.md (Z1–Z133); Quellen: scientists_transcripts.csv (125 Interviews, Anthropic Interviewer 2025), abgefragt nur über interviewer-s2-suche.py (id, wort, zaehle, wortlaut). Zuordnung: Interview NNN = science_(NNN−1). Alle Belegstellen unten sind mit „wortlaut“ geprüft (91 Stellen, 0 Abweichungen).

Ausgenommen als Moderation, Bild, Meinung oder Frage: Z1–Z7 (Einstiegsszenario), Z10–Z14 (Ankündigung, Bild „hyperaktiver Hilfswissenschaftler“), Z28–Z36 (Einwand und Gegenargument der Moderierenden), Z58–Z61 (Vergleich Dichter/Steuererklärung), Z90–Z98 (Fließband-Bild, Überleitung), Z118 (Frage), Z120–Z121 (Navi-Vergleich), Z125–Z133 (Empfehlung, Gedankenexperiment, Abschluss).

Eigene Zählungen (Anzahl Interviews von 125, Treffer in den Antworten): summar 39; first-scan/weed out/whittle/filter papers 4; hallucinat/fabricat/made up/fake 32; grammar 7; writer's block/blank page 1; proofread/rephrase/reword/paraphrase/grammar/wording/spellcheck 21; my voice/own voice/my own insights 3; struggl 13 (davon 3 zum Lernen); productive struggle 0; interpret 21; Frankenstein 0; 50 %/half of citations 0 („half the time“ 1).

| Nr | Stimme | Aussage (Wortlaut aus dem Transkript, gekürzt) | Z | Zeitmarke | genannte Nr. | Nr. trifft | Urteil | Beleg-IDs | Begründung |
|---|---|---|---|---|---|---|---|---|---|
| 1 | 2 | „Wir reden über 125 Interviews. Und diese Interviews wurden von Anthropic geführt und zwar mit echten Forschenden aus den MINT-Fächern.“ | Z8 | 0:50 | — | — | belegt | science_0013, science_0010, science_0015 | Zahl und Herkunft stimmen; nicht erwähnt wird, dass der Interviewer eine KI war. Unter den Befragten sind auch eine Lehrplanautorin für die Schule, ein Ingenieur in einem Umspannwerksprojekt und eine Lehrperson im Bachelor, also nicht nur Forschende im engen Sinn. |
| 2 | 1 | „es geht nicht um theoretische KI-Potenziale, sondern die Leute berichten völlig ungeschönt, wie sie … LLMs wirklich in ihrem wissenschaftlichen Alltag nutzen“ | Z9 | 1:02 | — | — | überzogen | science_0095, science_0001 | Die Interviews schildern tatsächliche Nutzung, fragen aber regelmäßig auch nach Wünschen („magic wand“), also nach Potenzialen. „Völlig ungeschönt“ lässt sich an Selbstauskünften nicht prüfen. |
| 3 | 1 | „diese Ambivalenz zieht sich wirklich durch alle Interviews“ | Z15 | 2:02 | — | — | überzogen | science_0009, science_0051 | Stichworte zu Misstrauen/Fehlern stehen in 73 von 125 Interviews, Stichworte zu Zeitgewinn in 62. Einige Befragte haben im geschilderten Projekt kaum oder gar keine KI genutzt. |
| 4 | 1 | „da nutzen Forschende KI massiv als so eine Art First-Scan-Tool. Also quasi, um das Feld erstmal zu sortieren.“ | Z17 | 2:13 | — | — | überzogen | science_0025, science_0034 | Zusammenfassen von Papers kommt in 39 Interviews vor, ausdrückliches Vorsortieren bzw. Aussortieren in 4. „Massiv“ verallgemeinert das. |
| 5 | 2/1 | „In Interview 026 … nutzt die forschende Person die KI wirklich gnadenlos, um … irrelevante Artikel einfach direkt auszusortieren. … sie liest die verbleibende Literatur dann selbst. … sie will das letzte Wort haben. Die KI ist nur der grobe Filter.“ | Z18–Z20 | 2:25–2:39 | 026 | ja | belegt | science_0025 | Die Quelle nennt KI ausdrücklich ein „first-scan“-Tool, sagt, die Person lese die Artikel danach selbst, und spricht vom „final say“, den sie zusammen mit den Mitforschenden behält. „Gnadenlos“ ist eine Ausschmückung. |
| 6 | 1/2 | „in Interview 031 … füttert die Person komplette PDFs in das Sprachmodell. … nicht nur für eine einfache Zusammenfassung … fragt sie die KI explizit nach den Unterschieden zwischen 2D- und 3D-Modellen … So spart man sich das stundenlange Suchen nach genau dem einen Absatz.“ | Z21–Z24 | 2:44–3:08 | 031 | nein (Inhalt in Interview 035 = science_0034) | überzogen | science_0034, science_0030 | Interview 031 handelt von der Herstellung von Metallpulvern, PDFs kommen dort nicht vor. Interview 035 lädt das Paper als PDF hoch und lässt es *zusammenfassen*, eingegrenzt auf 2D gegenüber 3D. Der Zweck war zu entscheiden, ob sich das Lesen lohnt, nicht eine Stelle zu finden. |
| 7 | 1/2 | „In Interview 087 wird KI dann voll fürs Brainstorming genutzt. Die sichten da hunderte von Papieren … aus reinen Effizienzgründen. … Obwohl das Vertrauen in die KI da ja noch total gering ist, wie sie im Interview zugeben. … spart halt wahnsinnig viel Zeit in dieser unscharfen Anfangsphase.“ | Z25–Z27 | 3:12–3:25 | 087 | ja | überzogen | science_0086 | Zeit, Effizienz und grobes Brainstorming in der Anfangsphase sind belegt. In der Quelle heißt es aber „not full confidence“ statt „total gering“, und Hunderte Papers zu sichten ist dort die allgemeine Arbeitsweise, nicht ausdrücklich die KI-Nutzung. |
| 8 | 2/1 | „dass Forschende versuchen, sie auch das Schreiben von Code oder die Datenverarbeitung übernehmen zu lassen. … Die KI glänzt wirklich bei Standardcode, beim Debugging und bei extrem repetitiven Aufgaben. Aber sie scheitert teilweise dramatisch an komplexer Mathematik und Physik.“ | Z38–Z41 | 4:12–4:29 | — | — | belegt | science_0095, science_0044, science_0024 | Code- und Datenstichworte stehen in 102 Interviews. Mehrere Befragte schildern Stärken bei einfachem Code und Fehler bei Mathematik und Physik, eingeschränkt durch „teilweise“. Einzelne halten KI auch beim Debugging physikalischer Fehler für ungeeignet. |
| 9 | 2/1 | „Interview 076 … die Millionen von Datenpunkten. … Die mussten komplett neu formatiert werden und es gab einfach noch keinen existierenden Code dafür. Die KI hat das ruckzuck geschrieben. Das war ein gigantischer Zeitgewinn.“ | Z42–Z44 | 4:39–4:47 | 076 | ja | überzogen | science_0075 | Millionen „events“, neue Formatierung und fehlender Code sind belegt. Laut Quelle hat KI „geholfen“, den Ablauf zu beschleunigen. „Ruckzuck geschrieben“ und „gigantisch“ spitzen das zu. |
| 10 | 1/2 | „Interview 043. Da stand jemand unter extremem Zeitdruck und musste neue APIs lernen. … die KI hat den Code dafür debugged. … weil das eher routinemäßige Aufgaben waren, gab es da laut dem Interview kaum Risiken für die eigentlichen Forschungsergebnisse.“ | Z45–Z47 | 4:56–5:03 | 043 | ja | belegt | science_0042 | Neue APIs lernen, Debugging, Arbeit „against the clock“ und „no perceived risks“ beim Debugging stehen in der Quelle. |
| 11 | 1/2 | „Interview 096. Da ging es um eine hochkomplexe Wiedereintrittssimulation … Die KI sollte eigentlich nur den bestehenden Code umstrukturieren … dabei hat sie völlig unbemerkt die physikalische Logik der Simulation verändert. … weil die KI eben keine echte Ahnung von Physik hat … völlig bizarren Fehlern.“ | Z49–Z55 | 5:17–5:40 | 096 | ja | belegt | science_0095 | Re-entry-Simulation, Refactoring, unbemerkt veränderte Physik-Funktionen, „bug or strange behaviour“ und „not fluent in maths and physics“ stehen in der Quelle. „Schwerkraft“ und „Aerodynamik“ sind Bilder der Moderierenden. |
| 12 | 2/1 | „In Interview 045 meidet die Person KI bei mathematischen Ableitungen deshalb ja auch komplett … die Fehlersuche bei komplexer Mathematik durch KI [ist] so extrem langweilig und langwierig …, dass man es besser gleich selbst macht. Man verliert am Ende mehr Zeit, als man gewinnt.“ | Z56–Z57 | 5:52–6:00 | 045 | ja | überzogen | science_0044 | Die Begründung ist belegt: Die Fehlersuche ist „very boring and length“, am Ende rechnet man selbst. Die Person ist aber „hesitant“ und hat KI „occasionally“ für Mathe genutzt, sie meidet sie also nicht „komplett“. Die Zeitbilanz („mehr Zeit verloren“) ist eine Ableitung der Moderierenden. |
| 13 | 2 | „dem absoluten zentralen Problem, mit dem eigentlich alle Befragten zu kämpfen haben“ (Vertrauenslücke) | Z62 | 6:26 | — | — | überzogen | science_0024, science_0010 | Misstrauen/Fehler kommt in 73 von 125 Interviews vor, nicht in allen. Einige Befragte vertrauen plausiblen Antworten ausdrücklich. |
| 14 | 2 | „Forschende weigern sich in den Interviews strikt, der KI die eigentliche Kernanalyse ihrer Daten zu überlassen.“ | Z64 | 6:36 | — | — | überzogen | science_0051, science_0034, science_0086 | Mehrere Befragte wollen die Interpretation selbst behalten. Andere nutzen KI ausdrücklich für die Datenanalyse („only exception is data analysis“), „strikt“ und die Verallgemeinerung stimmen also nicht. |
| 15 | 1 | „Wegen der Halluzinationen … Jeder KI-Output erfordert eine wahnsinnig strenge, menschengeführte Verifizierung.“ | Z65 | 6:47 | — | — | überzogen | science_0095, science_0024 | Prüfen ist häufig (95 Interviews, ohne check/confirm 73), Halluzinationen werden in 32 Interviews erwähnt. „Jeder Output“ und „wahnsinnig streng“ gehen darüber hinaus, denn manche prüfen nach eigener Aussage nur gelegentlich. |
| 16 | 2/1 | „In Interview 077 spricht die Person ja sogar von sogenannten Frankensteinpapieren. … Die KI erfindet da Studien, indem sie einfach reale, existierende Autorennamen nimmt und die dann mit plausibel klingenden, aber völlig frei erfundenen Titeln kombiniert.“ | Z66–Z68 | 6:58–7:14 | 077 | nein (Inhalt in Interview 039 = science_0038; ähnlich 042 = science_0041) | überzogen | science_0038, science_0041, science_0076 | Das Wort „Frankenstein“ steht in keinem Interview. Interview 077 (FPGA, geheime Umgebung) erwähnt erfundene Papers nicht. Reale Autoren mit nicht existierenden Papers schildert Interview 039, erfundene Titel Interview 042. **Persönlichkeitsschutz:** Interview 077 wird ein Begriff zugeschrieben, den die Person nicht verwendet. |
| 17 | 1/2 | „In sicherheitskritischen Umgebungen … In Interview 052 … Da werden LLM-Outputs prinzipiell nur noch als Hypothesenliste behandelt. Niemals als Fakten. Jede einzelne Behauptung muss durch Primärquellen belegt werden.“ | Z69–Z71 | 7:20–7:28 | 052 | nein (Inhalt in Interview 054 = science_0053) | belegt | science_0053, science_0051 | Interview 054 (TS/SCI-Umgebung) sagt das fast wörtlich: „hypothesis list, not as a list of facts“, ohne Primärquelle wird gestrichen. Interview 052 handelt von Pflanzenkrankheiten. **Persönlichkeitsschutz:** falsche Zuordnung zu Interview 052. |
| 18 | 2/1 | „in Interview 042 der Forscher jede von der KI generierte Gleichung wirklich Schritt für Schritt auf dem Papier nachrechnet. … Er hat halt Angst um seinen Ruf … Er sagt wortwörtlich, wenn Experten da am Ende einen Fehler finden, den die KI eingebaut hat, würde ihn das sehr schlecht aussehen lassen.“ | Z72–Z77 | 7:38–7:57 | 042 | ja | überzogen | science_0041 | Die schrittweise Prüfung („100% double-check it step-by-step“) und das „would make me look very bad“ sind belegt. „Auf dem Papier“ ist ausgeschmückt, und das „wortwörtliche“ Zitat ergänzt „den die KI eingebaut hat“, während die Quelle von falschen Herleitungen allgemein spricht. Das Geschlecht („der Forscher“, „Er“) nennt die Quelle nicht; in Z86 heißt es zur selben Person „ihrer Berichte“. **Persönlichkeitsschutz:** abgewandeltes Zitat als wörtlich ausgegeben, Geschlecht zugeschrieben. |
| 19 | 1 | „In Interview 014, da geht es um Curriculum-Entwicklung … da wird extrem kritisiert, dass die KI gefühlt jedes Mal von vorne anfängt. Sie löst mathematische Probleme ständig in einer anderen Reihenfolge.“ | Z77 | 7:57 | 014 | ja | belegt | science_0013 | Lehrplan (Precalculus-Curriculum), „starts fresh“ und die wechselnde Lösungsreihenfolge am Einheitskreis stehen in der Quelle. |
| 20 | 2/1 | „wenn ich, wie es in Interview 036 beschrieben wird, jede einzelne Zeile überprüfen muss, und da teilweise 50 Prozent der Zitate falsch sind“ | Z78–Z79 | 8:18–8:28 | 036 | nein (Inhalte in Interview 039 = science_0038 und 122 = science_0121) | überzogen | science_0038, science_0121 | „Every single line“ steht in Interview 039, „about half the time … quotes that don't exist“ in Interview 122. Interview 036 enthält beides nicht. Zwei Quellen werden zu einer zusammengezogen; Interview 122 nennt den Prozess insgesamt trotzdem „much faster“. **Persönlichkeitsschutz:** falsche Zuordnung zu Interview 036. |
| 21 | 1 | „wird sie von vielen Forschenden ganz ans Ende des wissenschaftlichen Prozesses verschoben“ (zum Schreiben, Formulieren, Aufbereiten) | Z79–Z81 | 8:28–8:50 | — | — | nicht belegt | science_0041, science_0051, science_0025 | Keine Stelle beschreibt eine Verlagerung ans Ende. Die Interviews zeigen viel KI-Nutzung gerade in der Anfangs- und Planungsphase (Literatur, Ideen). Am nächsten kommt Interview 042 (KI-Kritik am fast fertigen Entwurf). |
| 22 | 2 | „KI als Schreibhilfe ist ja extrem beliebt, um zum Beispiel Schreibblockaden zu überwinden oder Grammatik zu prüfen.“ | Z82 | 8:58 | — | — | überzogen | science_0090, science_0023 | Schreibblockade kommt in 1 Interview vor, Grammatik in 7, Überarbeitungsstichworte insgesamt in 21 von 125. Belegt ist Schreibhilfe also, „extrem beliebt“ nicht. |
| 23 | 1/2 | „In Interview 102 wird die KI total intensiv genutzt, um Absätze zu kürzen und Korrektur zu lesen. … gerade bei den vielen Berichten, die man in Juniorpositionen schreiben muss, enorm viel Zeit spart.“ | Z83–Z84 | 9:05–9:13 | 102 | ja | überzogen | science_0101 | Kürzen, Korrekturlesen, Berichte in Juniorrollen und „much faster“ sind belegt. Die Quelle sagt aber „I have experimented with models“, nicht „total intensiv“. |
| 24 | 1 | „es gibt da halt auch große Bedenken, die eigene wissenschaftliche Stimme zu verlieren. Oder sogar intellektuelle Grenzen zu überschreiten.“ | Z85 | 9:18 | — | — | überzogen | science_0072, science_0035, science_0041 | Die Sorge um die eigene Stimme bzw. die eigenen Erkenntnisse steht in 3 Interviews, die Sorge, Fremdes als eigenes auszugeben, in Interview 042. „Große Bedenken“ als allgemeiner Befund ist überzeichnet. |
| 25 | 2 | „die Person aus Interview 042 schreibt deshalb 99 Prozent ihrer Berichte komplett selbst“ | Z86 | 9:27 | 042 | ja | belegt | science_0041 | Die Quelle sagt „I still write myself 99%+“ für technische Berichte, mit KI als Kritikerin am Schluss. |
| 26 | 1/2 | „Weil der KI-Schreibstil angeblich so leicht zu erkennen ist … Die größte Angst ist, dass Kollegen das lesen und sich denken, hat das eine KI geschrieben?“ | Z87–Z88 | 9:32–9:36 | 042 (aus Z86) | ja | überzogen | science_0041 | Stil erkennbar, „Did an AI write this!?“ und die Sorge um Kunden und Kollegen sind belegt. In der Quelle ist das aber der zweite von mehreren Gründen, nicht die „größte Angst“. |
| 27 | 1 | „Interview 010 … schreibt hochregulierte, extrem analytische Berichte. Und sie wünscht sich dafür tatsächlich mehr KI-Einsatz … weil diese Berichte ohnehin extrem roboterhaft und distanziert klingen müssen. Menschliche, kreative Formulierungen wären … sogar schädlich.“ | Z89 | 9:42 | 010 | ja | überzogen | science_0009 | Der Wunsch nach KI-Hilfe beim „robotic and regulated“ Bericht ist belegt. Die Quelle begründet ihn vor allem mit menschlichen Fehlern; „quirky phrasing that might not be received well“ wird zu „sogar schädlich“ zugespitzt. |
| 28 | 1 | „Die Interviews zeigen uns nämlich ganz deutlich, der eigentliche Lernprozess besteht im Ringen mit einem Problem. In dem sogenannten produktiven Kampf. … wenn die KI den Studierenden … die fertige Lösung liefert, dann bleibt dieses tiefe Verständnis komplett auf der Strecke.“ | Z99, Z101 | 10:50–11:05 | — | — | überzogen | science_0010, science_0077, science_0001 | Den Gedanken äußern 3 Interviews (011, 078, 002). „Productive struggle“ kommt nicht vor, und von Studierenden ist dabei nicht die Rede. „Ganz deutlich“ als Befund der Interviews ist überzeichnet. |
| 29 | 2/1 | „In Interview 002 … bloßes Lesen einer KI-Antwort reicht einfach nicht aus. Man muss mit den Ideen interagieren, man muss damit spielen, um überhaupt diese neuronalen Verbindungen im Gehirn zu schaffen.“ | Z102–Z104 | 11:13–11:21 | 002 | ja | belegt | science_0001 | Die Quelle sagt das fast wörtlich („interact … and play with them … create links between big ideas in my head“). „Neuronale Verbindungen“ ist eine leichte Umdeutung. |
| 30 | 1/2 | „In der Ingenieurswissenschaft ist das genauso. Interview 011 warnt extrem davor, dass KI die Kreativität abtötet.“ | Z105–Z106 | 11:28–11:33 | 011 | ja | belegt | science_0010 | „This kills creativity“ steht in der Quelle, im Zusammenhang mit Lernen ohne „struggle“. Die Person ist Elektroingenieur bzw. Elektroingenieurin. |
| 31 | 2/1 | „wenn die KI einem angehenden Ingenieur einfach das beste Bauteil für eine Schaltung ausspuckt, dann lernt der Student ja gar nicht mehr, warum 20 andere alternative Bauteile ausscheiden würden. … Das ganze Wissen über die Grenzfälle fehlt dann.“ | Z108–Z111 | 11:39–11:50 | 011 (implizit) | ja | überzogen | science_0010 | Den Kern belegt die Quelle: Wer einen Überspannungsableiter nach KI-Empfehlung wählt, prüft die Alternativen (ABB, Hubbell, Richards) nicht. Die Quelle spricht aber von eigener Berufspraxis in einem 150-MW-Projekt; „Student“, „20 Bauteile“, „Schaltung“ und „Grenzfälle“ sind hinzugefügt. |
| 32 | 1 | „Interview 016. Da hat ein Dozent seine Studierenden für eine medizinische Fallstudie zu Prion-Erkrankungen KI nutzen lassen.“ | Z111 | 11:50 | 016 | ja | belegt | science_0015 | Die Person ist „undergraduate teacher of bioscience“; die Fallstudie zu Prion-Erkrankungen und die erlaubte KI-Nutzung sind belegt. Das Geschlecht nennt die Quelle nicht („ein Dozent“). |
| 33 | 2/1 | „das Beispiel mit dem blinden Vertrauen … Die Studierenden, die der KI blind vertraut haben, sind krachend durchgefallen. Die haben nämlich genau diese halluzinierten, erfundenen Studien zitiert.“ | Z112–Z113 | 12:01–12:03 | 016 | ja | überzogen | science_0015 | Belegt ist, dass manche Studierende KI-Angaben wörtlich übernahmen und ungenaue Details sowie falsch eingeordnete Studien zitierten. Von „durchgefallen“ steht nichts in der Quelle; sie spricht eher von falsch klassifizierten als von erfundenen Studien. **Persönlichkeitsschutz (Dritte):** Die Studierenden der befragten Lehrperson werden negativer dargestellt als in der Quelle. |
| 34 | 1 | „Die erfolgreichen Studierenden haben die KI lediglich genutzt, um intelligente Suchbegriffe zu generieren. Mit diesen Begriffen sind sie dann in professionelle Datenbanken wie PubMed gegangen“ | Z115 | 12:13 | 016 | ja | belegt | science_0015 | Die Quelle sagt „used the AI for initial general direction and then used this to craft search terms for the major databases“, PubMed wird genannt. |
| 35 | 2 | „Interview 025 … Wem eigentlich die intellektuelle Urheberschaft gehört, wenn KI beginnt, so eigenständige Forschungsschritte zu übernehmen?“ | Z116 | 12:25 | 025 | ja | belegt | science_0024 | Die Quelle fragt „I wonder about ownership … who gets the credit“ für den Fall, dass KI selbstständig forscht. |
| 36 | 1 | „Genau, davor haben viele Angst.“ (Studierende können prompten, sind aber beim Bewerten hilflos) | Z119 (zu Z118) | 12:56 | — | — | überzogen | science_0044, science_0013, science_0041 | Sorge um den Verlust eigener Fachkompetenz steht laut Themenzählung in 9 von 125 Interviews und betrifft meist die eigene Kompetenz, nicht die von Studierenden. Einzelne verneinen die Sorge ausdrücklich. |
| 37 | 2 | „Diese 125 Interviews zeichnen ein extrem klares Bild. KI ist ein unschätzbarer Beschleuniger. … Aber die wissenschaftliche Kernanalyse, die methodische Strenge und vor allem die Validierung von Fakten, das bleibt eine zutiefst menschliche Aufgabe.“ | Z122–Z124 | 13:08–13:19 | — | — | überzogen | science_0075, science_0034, science_0101 | Zeitgewinn ist in 62 Interviews erwähnt, die Bilder sind gemischt: Manche finden KI für Literatur „more of a hinderance than a help“ oder sehen keinen Grund zum Wechsel. Der Kern (Validierung durch Menschen) ist breit gestützt, „extrem klar“ und „unschätzbar“ nicht. |

## Belegstellen

### Aussage 1
- [science_0013] "I was researching what is included in a high school Precalculus class."
- [science_0010] "Recently I commissioned a 150MW BESS and substation project."
- [science_0015] "I am an undergraduate teacher of bioscience"

### Aussage 2
- [science_0095] "There are many very optimistic answers that could be given here such as revealing the secrets to how I can get the data I need every time, but I'll keep things realistic."
- [science_0001] "If we're using magic, I would like AI to take the ideas from my brain and write my entire report for me."

### Aussage 3
- [science_0009] "Other than that, I didn't use AI tools."
- [science_0051] "However, with this project I don't think I actually used any AI assistants due to my ignorance of them at the time."

### Aussage 4
- [science_0025] "AI was used as a "first-scan" tool to weed out articles that would have nothing to do with the research."
- [science_0034] "I did however start using AI to summarise papers instead of directly finding them to speed up the decision of whether it was worth me reading the whole thing."

### Aussage 5
- [science_0025] "AI was used as a "first-scan" tool to weed out articles that would have nothing to do with the research."
- [science_0025] "For the article overviews, I would still read the article myself after, I and my fellow researchers would still have the final say on including literature in our review."

### Aussage 6
- [science_0034] "I fed it the paper as a whole as a pdf."
- [science_0034] "Often I knew roughly what I wanted out of it so asked for it to summarise findings related to a small area - i.e "Summarise the findings in this paper that discuss 2D versus 3D models" in a paper that looks at modelling techniques."
- [science_0030] "The most recent research project I worked on was in my materials science lab in which worked with the production/manufacturing of reactive aluminum based powders of many different compounds."

### Aussage 7
- [science_0086] "Usually day to day this leads to me having to sift through hundreds of papers and note down interesting ideas, common views and the different ideas being tested."
- [science_0086] "This is because the ability of AI to summarise ideas is a really large time save and even though I do not have full confidence in results, it is fine in initial stages where I only need to roughly brainstorm."
- [science_0086] "It was mainly about time and efficiency."

### Aussage 8
- [science_0095] "Another area is in generating 'simple' code."
- [science_0044] "Because of prior experience with AI making frequent and heavy mistakes with more involved mathematics I am quite hesitant to get it to do this for me as it is not always right."
- [science_0024] "Sometimes I feel that AI is not a good way to debug code."

### Aussage 9
- [science_0075] "Given the huge size of the dataset (millions of individual 'events'), I used AI to help manipulate the dataset in a more efficient manner."
- [science_0075] "This required the data to be formatted in various different ways for which I did not have any existing code written."
- [science_0075] "This is why I turned to AI as it helped to speed up the process and work more efficiently."

### Aussage 10
- [science_0042] "Using AI seemed like a no-brainer at that point for productivity purposes, because learning a new API or debugging can be a time consuming process and we were often working "against the clock" with deadlines and things."
- [science_0042] "For debugging and code explanation there are no perceived "risks" or downsides to using AI in research in my opinion."

### Aussage 11
- [science_0095] "When making the re-entry simulation, sometimes when using AI to refactor code or quickly generate some functions, I did not realise it was working on a function or logic relating to the physics modelling."
- [science_0095] "I would then often encounter a bug or strange behaviour, and trace it back to somewhere the AI had poorly modelled physics in some way in a function I hadn't realised it modified."
- [science_0095] "AI is not fluent in maths and physics, not to that level."

### Aussage 12
- [science_0044] "with maths you often can not if you do not have a clear solution and finding the mistake can be very boring and length and as a result you end up doing the maths yourself anyway"
- [science_0044] "and occasionally used ai to help explain certain maths although i didnt find this very productive"

### Aussage 13
- [science_0024] "In other cases I am slightly guilty of believing what it tells me if that makes sense to me."
- [science_0010] "However, sometimes if something "seems" right, and is in the ballpark of being correct then I might trust it."

### Aussage 14
- [science_0051] "However, when it comes to key figures and interpretting what they mean for disproving/proving a hypothesis I think that this should be done by a researcher."
- [science_0034] "I used AI a lot in the data processing, FE creation, and data analysis."
- [science_0086] "The only exception is data analysis."

### Aussage 15
- [science_0095] "I would like to point out that I do stress the importance of checking the information it provided and requiring it to provide its sources of information, as it is not at a point where you would trust it blindly at all."
- [science_0024] "In other cases I am slightly guilty of believing what it tells me if that makes sense to me."

### Aussage 16
- [science_0038] "Real authors mentioned but no actual papers by them on the specific topic existed."
- [science_0041] "or when it "interpolates" URL references to pages that don't exists/"hallucinates" technical references and papers with fake titles that don't exist!"
- [science_0076] "Just a comment, AI needs to become significantly better at mathematical calculations to be useful for research in general."

### Aussage 17
- [science_0053] "As a rule of thumb I treat LLM outputs as a hypothesis list, not as a list of facts."
- [science_0053] "I break it into atomic claims and require primary corroboration, exact language in  NIST/CNSS/CIS, official vendor docs, or peer reviewed writeups, anything without a primary source is dropped."
- [science_0051] "I was researching how infectious diseases spread in agriculture."

### Aussage 18
- [science_0041] "Deriving an equation to either check my derivation, or just do it (but I will 100% double-check it step-by-step)."
- [science_0041] "very intelligent mathematicians, physicists, and electrical engineers will be seeing my equations and derivations and if they are wrong, even if it is caught and doesn't impact a project negatively in the end, it would make me look very bad!"

### Aussage 19
- [science_0013] "But it seems like the AI usually "starts fresh" every time in its process and does not follow a consistent pattern for solving problems."
- [science_0013] "But it needs to be done in the same order every time."
- [science_0013] "I needed to write a curriculum map based on the client's format, and I wanted to make sure it covered everything required for CCSS standards as well as Pennsylvania's standards."

### Aussage 20
- [science_0038] "I have to literally verify every single line myself."
- [science_0121] "To be honest, about half the time the AI will give quotes that don't exist."
- [science_0121] "But overall the process is much faster that any alternative, and it almost always finds some directly relevant material."

### Aussage 21
- [science_0041] "For technical report writing, I still write myself 99%+ but often have an AI critique and modify as a close partner/assistant and critic, especially after my draft is near final."
- [science_0051] "AI is invaluable for me in the planning stage of my projects and has made me feel more positive about doing research than before."
- [science_0025] "The beginning research phase, I would say, used a lot of AI."

### Aussage 22
- [science_0090] "On other projects we have asked for help with method development or for inspiration to get over the writer's block or paralysis that happens when beginning the creation of a technical note or a conference presentation."
- [science_0023] "I did use AI in writing, but more for spellcheck/grammar checks at the end."

### Aussage 23
- [science_0101] "Also, I have experimented with models to assist with condensing text or proof read technical paragraphs."
- [science_0101] "Junior roles often involve lots of report writing so this is a way to make that process easier."
- [science_0101] "I decided to use the AI as I find it much faster than my usual approach and the feedback I get on my outputted work has been positive from my colleagues."

### Aussage 24
- [science_0072] "I've tried this though and ultimately the sections don't sound like they are written in my voice."
- [science_0035] "With paper writing specifically, Ive avoided using AI because I wanted my own insights and findings to be communicated."
- [science_0041] "I don't want our customers or my colleagues asking that of my work, and I don't want to pass things off as my own when they're not."

### Aussage 25
- [science_0041] "For technical report writing, I still write myself 99%+ but often have an AI critique and modify as a close partner/assistant and critic, especially after my draft is near final."

### Aussage 26
- [science_0041] "Second, when an AI writes its writing style is something I can often pick up on."
- [science_0041] "It may be written well, but I quickly say "Did an AI write this!?"."
- [science_0041] "I don't want our customers or my colleagues asking that of my work, and I don't want to pass things off as my own when they're not."

### Aussage 27
- [science_0009] "Honestly, it would be nice if AI would help me write the report."
- [science_0009] "It is very robotic and regulated, and seems like a prime candidate to be handled by an unfeeling machine rather than a human being who is prone to errors and occasional quirky phrasing that might not be received well."

### Aussage 28
- [science_0010] "The thing with learning is that without struggle or alternative options being considered, it is difficult to retain information."
- [science_0077] "That initial struggle builds problem-solving intuition and a solid foundation."
- [science_0001] "For me, simply reading something isn't enough to make information useful in my brain."

### Aussage 29
- [science_0001] "For me, simply reading something isn't enough to make information useful in my brain."
- [science_0001] "I need to interact with researched ideas and play with them in order for me to be able to create links between big ideas in my head which can then be used for research."

### Aussage 30
- [science_0010] "AI usually gives the correct answer without alternative thought processes."
- [science_0010] "This kills creativity and also makes it difficult to defend decisions made about research topics."

### Aussage 31
- [science_0010] "For example, if I choose a Siemens surge arrester because an AI tool tells me to, I do not consider all possible options - ABB, Hubbell, Richards, etc."
- [science_0010] "Recently I commissioned a 150MW BESS and substation project."

### Aussage 32
- [science_0015] "I am an undergraduate teacher of bioscience and recently, one of my undergraduate groups was designing criteria for a case study, based on a rare prion disease."
- [science_0015] "This was a three week project and the students were invited to use AI in their research (though not to assume that AI is correct and always check its claims)."

### Aussage 33
- [science_0015] "Several students simply used what the AI told them, verbatim, and it showed as they had completely different results to other groups and were quoting details that were inaccurate."
- [science_0015] "were claiming research papers that were not case studies and findings from these case studies that were not accurately portrayed"
- [science_0015] "but when it came to specific papers and research (including number of citations on specific sites such as Google Scholar and PubMed) AI was way off and frequently hallucinated."

### Aussage 34
- [science_0015] "The students that approached this the way I would have done, used the AI for initial general direction and then used this to craft search terms for the major databases, which provided articles that filled in the 'blanks' of AI."

### Aussage 35
- [science_0024] "I wonder about ownership."
- [science_0024] "if let's say claude becomes able to do independent research, who gets the credit, would one need to credit it with discoveries"

### Aussage 36
- [science_0044] "Furthermore, I am hesitant to become reliant on AI for getting it to do stuff I am new to, as this way I will never learn and then what is the point of doing it in the first place"
- [science_0013] "and I am worried that if I hand over the reins, it will degrade my skill over time."
- [science_0041] "I don't worry about that at all."

### Aussage 37
- [science_0075] "I really wish AI was better equipped to help with interpreting and analysing results and/or the output of my analysis."
- [science_0034] "I looked to use AI to find papers that would answer questions I had, however the results of this were very poor and often more of a hinderance than a help."
- [science_0101] "There may be routes to improving these with AI tools but at the moment I don't feel any reason to change."

## Zusammenfassung

- **Aussagen insgesamt:** 37
- **Urteile:** belegt 13 (Nr. 1, 5, 8, 10, 11, 17, 19, 25, 29, 30, 32, 34, 35); überzogen 23 (Nr. 2, 3, 4, 6, 7, 9, 12, 13, 14, 15, 16, 18, 20, 22, 23, 24, 26, 27, 28, 31, 33, 36, 37); nicht belegt 1 (Nr. 21)
- **Aussagen mit genannter Interview-Nummer:** 23 von 37 (Nr. 26 und 31 beziehen sich ohne eigene Nennung auf die zuvor genannte Nummer und sind mitgezählt)
  - Nr. trifft ja: 19
  - Nr. trifft teilweise: 0
  - Nr. trifft nein: 4. Davon Interview 031 → Inhalt in 035; Interview 077 → Inhalt in 039 (und 042); Interview 052 → Inhalt in 054; Interview 036 → Inhalte in 039 und 122.
- **Häufigkeitsaussagen** („alle Interviews“, „alle Befragten“, „viele“, „massiv“, „extrem beliebt“, „ganz deutlich“, „extrem klares Bild“): alle 11 überzogen oder nicht belegt (Nr. 3, 4, 13, 14, 15, 21, 22, 24, 28, 36, 37). Grundlage sind die Themenzählung (z. B. Misstrauen 73, Zeitgewinn 62, Kompetenzsorge 9) und eigene zaehle-Abfragen.
- **Persönlichkeitsschutz-Befunde:**
  - Falsche Zuordnung von Aussagen zu Befragten: Nr. 6 (Interview 031), Nr. 16 (Interview 077; zugeschriebener Begriff „Frankensteinpapiere“ kommt in keinem Interview vor), Nr. 17 (Interview 052), Nr. 20 (Interview 036).
  - Nr. 18 (Interview 042): ein als „wortwörtlich“ ausgegebenes Zitat ist inhaltlich ergänzt, das Geschlecht („der Forscher“) ist zugeschrieben und in Z86 uneinheitlich.
  - Nr. 33 (Interview 016, Dritte): Studierende der befragten Lehrperson als „krachend durchgefallen“ dargestellt, was die Quelle nicht sagt.
  - Geschlechtszuschreibung ohne Grundlage auch in Nr. 32 („ein Dozent“), nicht herabsetzend.
- **Erkennung?-Fälle:** keine. Die Stockung in Z18 („um Irrelevanz… …irrelevante Artikel“) und die Wortteilung in Z102/Z103 sind verständlich und inhaltlich beurteilbar.
