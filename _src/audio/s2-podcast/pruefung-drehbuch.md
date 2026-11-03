# Prüfung des Drehbuchs „Wofür Forschende KI tatsächlich nutzen" an den Originalquellen

Geprüfte Datei: `drehbuch-erstfassung.md`. Quelle: Anthropic Interviewer, Teildatensatz Scientists (125 Transkripte, `scientists_transcripts.csv`), abgefragt nur über `scripts/interviewer-s2-suche.py`. Jede unten zitierte Belegstelle wurde mit `wortlaut` geprüft (Treffer im genannten Transkript). Absatz-Nr. = Redebeiträge, durchgezählt ab 1, ohne Themenzeilen. Zählungen wurden mit `zaehle` und denselben Stichwortlisten wie in `interviewer-s2-auszug.py` (THEMEN, mit Wortanfangsgrenze `\b`) nachgerechnet; alle Zahlen im Drehbuch ließen sich reproduzieren.

Ausgenommen: Moderationsfloskeln, Fragen, Meinungen der Moderierenden (u. a. Abs. 11, Abs. 17 „Das erste Beispiel finde ich heikel …", Abs. 20 „Faustregel", Abs. 32 „Die Muster ähneln …", Abs. 33, Abs. 34). Abs. 17 wird unter Persönlichkeitsschutz besprochen.

| Nr | Sprecher | Aussage | Abs. | Urteil | Beleg-IDs | Begründung |
|---|---|---|---|---|---|---|
| 1 | Lea | „ein öffentlicher Datensatz: 125 Interviews, in denen Forschende über ihre Arbeit mit KI berichten" | 1 | belegt | README, Zählung | Der Teildatensatz Scientists umfasst 125 Transkripte; die Teilnehmenden haben der Veröffentlichung zugestimmt. Einige Befragte sind Studierende (vgl. Nr. 39), was das Drehbuch selbst anmerkt. |
| 2 | Lea | „Geführt hat die Gespräche übrigens selbst eine KI, nämlich Claude." | 1 | belegt | science_0000 (u. v. a.) | Der Interviewer stellt sich in 122 von 125 Transkripten als Claude vor. |
| 3 | Jonas | „Literatur und Schreiben in 105 von 125 Interviews, Code und Datenanalyse in 102" | 2 | belegt | Zählung | Mit den Stichwortlisten reproduziert (105 bzw. 102). |
| 4 | Jonas | „Gezählt wird nur, ob ein Stichwort in den Antworten vorkommt." | 2 | belegt | Skript | Das Auszugsskript prüft je Interview nur, ob ein Stichwort in den Antworten der Befragten vorkommt (ja/nein). |
| 5 | Lea | „sie habe anfangs E-Mails an ihre Betreuung von der KI prüfen lassen, damit sie professionell klingen und trotzdem das eigene Anliegen rüberbringen" | 3 | belegt | science_0001 | Sinngemäß so in der Quelle. |
| 6 | Jonas | „ließ Matlab-Code eines Kollegen in Python übertragen, und die KI nutzte dabei Bibliotheken, die die Person selbst gar nicht kannte" | 4 | belegt | science_0024 | Sinngemäß so in der Quelle. |
| 7 | Lea | „Datenanalyse sei oft mühsam und eher langweilig, also Messwertlisten durchgehen, plotten und so weiter, und genau dafür setze sie KI ein" | 5 | belegt | science_0086 | Sinngemäß so; in der Quelle ist Datenanalyse die einzige Ausnahme von der sonstigen Zurückhaltung. |
| 8 | Jonas | „würde KI gern für die Datenanalyse nutzen, ist aber unsicher … komplex und voller Feinheiten … frage sie lieber eine Fachperson aus der Biostatistik" | 6 | belegt | science_0033 | Kern stimmt. Der in der Quelle genannte Hauptgrund (die KI-Ergebnisse ließen sich ohne die Statistikerin nicht prüfen) fehlt; die Person nutzt KI zugleich intensiv für Literaturrecherche. |
| 9 | Lea | „Zeitgewinn taucht in 62 Interviews auf." | 7 | belegt | Zählung | Reproduziert (62). |
| 10 | Lea | „greife zur KI, wenn sie ein Problem schneller löst als die Suche auf Stack Overflow oder GitHub, und das sei bei rund 90 Prozent der Probleme der Fall" | 7 | belegt | science_0001 | Wörtlich sinngemäß. |
| 11 | Jonas | „finde fehlende Doppelpunkte und Syntaxfehler viel schneller … Matplotlib-Befehle nachzuschlagen sei mühsam, die KI setze sie sofort um" | 8 | belegt | science_0023 | Sinngemäß so in der Quelle. |
| 12 | Lea | „Es gibt aber deutliche Gegenstimmen. Jemand aus dem Labor sagt knapp: Das spart keine Zeit. Selbst wenn die KI vertrauenswürdig wäre, lasse sie sich nicht mit der Laborsoftware wie GraphPad verbinden" | 9 | überzogen | science_0082 | „This doesn't save time" bezieht sich nur auf komplexe Datenanalyse und folgt aus der Begründung, man müsste alles nachprüfen; als knappes Pauschalurteil dargestellt. Die Person nutzt KI durchaus zum schnellen Gegenprüfen von Rechnungen. |
| 13 | Jonas | „hätte KI für den Entwurf von Prototypen nutzen können … den ganzen Kontext zu erklären … hätte zu viel Zeit gekostet" | 10 | belegt | science_0029 | Sinngemäß so in der Quelle. |
| 14 | Jonas | „Prüfen und Verifizieren kommt in 95 Interviews vor, Misstrauen und Fehler in 73." | 12 | belegt | Zählung | Reproduziert (95 bzw. 73). |
| 15 | Jonas | „Das Thema ist also fast so präsent wie die Nutzung selbst." | 12 | überzogen | Zählung | Die 95 beruhen auf sehr allgemeinen Stichwörtern („check", „confirm"); allein „check" trifft 62 Interviews. Mit den engeren Begriffen (verif, validat, double-check, cross-check, fact-check) sind es 73. Aus Stichworttreffern folgt keine vergleichbare „Präsenz" des Themas. |
| 16 | Lea | „Die Fehlerberichte sind sehr fachspezifisch." | 13 | überzogen | science_0041, science_0082, science_0038 | Es gibt fachspezifische Berichte, aber ein erheblicher Teil betrifft allgemeine Fehler wie erfundene Quellen und Zitate (Stichwort „hallucinat" in 23 Interviews, oft zu Literaturangaben). |
| 17 | Lea | „habe Antworten erfunden und Strukturen vorgeschlagen, die chemisch unmöglich sind, etwa fünf Bindungen an einem Kohlenstoffatom" | 13 | belegt | science_0054 | Sinngemäß so in der Quelle. |
| 18 | Jonas | „Wer nach Belegen für eine Behauptung fragt, bekomme oft falsche oder schwache Quellen. Auch die Suche in astronomischen Datenbanken klappe schlecht" | 14 | belegt | science_0065 | Sinngemäß so in der Quelle. |
| 19 | Lea | „rechnet einige Werte von Hand nach, weil die KI oft Fehler mache. Nach etwa drei geprüften Werten vertraue sie ihr dann meistens" | 15 | belegt | science_0032 | Sinngemäß so. Kontext: Die Werte dienen nur dazu, eine Formel zu vermuten, die die Person danach ohne KI beweist (siehe Persönlichkeitsschutz). |
| 20 | Jonas | „lässt sich Gleichungen herleiten, prüft aber nach eigener Aussage jeden Schritt hundertprozentig selbst" | 16 | belegt | science_0041 | Sinngemäß so in der Quelle. |
| 21 | Lea | „Wenn etwas richtig wirke und ungefähr in der passenden Größenordnung liege, vertraue sie manchmal einfach" | 17 | belegt | science_0010 | Kern stimmt („seems right", „ballpark", „might trust"). Der vorausgehende Satz „I do check information" und das triviale Beispiel (Einheitenumrechnung) fehlen. |
| 22 | Jonas | „Die einzige Möglichkeit, KI-Ergebnisse zu bestätigen, sei, die Arbeit selbst zu wiederholen. Dann wirke es sinnlos, die KI überhaupt zu fragen" | 18 | überzogen | science_0105 | Die Quelle bezieht das ausdrücklich auf Datenanalyse und Auswertung; dieselbe Person vertraut KI bei Schritt-für-Schritt-Laborvorbereitung und nutzt sie viel. Als allgemeine „Gegenposition" zu KI-Ergebnissen verallgemeinert. |
| 23 | Lea | „KI für kleine, leicht überprüfbare Aufgaben nutzen, um sich auf die großen Teile des Projekts zu konzentrieren, die KI nicht bewältigt" | 19 | belegt | science_0050 | Sinngemäß so in der Quelle. |
| 24 | Jonas | „Fehler könnten Tage an Laborarbeit ruinieren, deshalb würde sie Schritt-für-Schritt-Anleitungen der KI nie ungeprüft übernehmen" | 20 | belegt | science_0045 | Sinngemäß so in der Quelle. |
| 25 | Lea | „Ideen und Hypothesen tauchen in 93 Interviews auf." | 21 | belegt | Zählung | Reproduziert (93). |
| 26 | Lea | „das Schwierigste sei für sie immer, überhaupt eine erste Idee zu finden, besonders in umkämpften Feldern" | 21 | belegt | science_0086 | Sinngemäß so in der Quelle. |
| 27 | Jonas | „Brainstorming-Partner, der schneller Ideen liefert … manche davon falsch … So formuliere sie auch ihre Anweisungen an Sprachmodelle" | 22 | belegt | science_0026 | Sinngemäß so in der Quelle. |
| 28 | Lea | „Wer sich zu sehr auf die Trainingsdaten des Werkzeugs verlässt, bekommt eher generische Ideen, so jedenfalls die Vermutung einer Person" | 23 | überzogen | science_0089 | Die Vermutung (generische Ideen, „likely cause") stimmt, aber in der Quelle stützt sich das Werkzeug zu stark auf seine Trainingsdaten; das Drehbuch macht daraus ein Verhalten der Nutzenden. |
| 29 | Jonas | „Sorge um Fachkompetenz erscheint nur in 9 Interviews." | 24 | belegt | Zählung | Reproduziert (9). |
| 30 | Jonas | „nicht jeder Treffer passt. Ein Zitat handelt schlicht davon, mit KI Softwareabhängigkeiten und Versionskontrolle zu verwalten" | 24 | belegt | science_0024, science_0029 | Trifft zu; thematisch passen nur 3 der 9 Treffer (science_0005, science_0077, science_0089), die übrigen sind Fehltreffer über „dependen…". |
| 31 | Lea | „Bei der Kategorie Grenzen … landen auch atmosphärische Grenzschichten in Waldbrandsimulationen" | 25 | belegt | science_0095 | Fehltreffer über „boundar…" in der Grenzen-Zählung, so in der Quelle. |
| 32 | Jonas | „KI helfe ihr beim Schreiben von Werkzeugen für die Datenverarbeitung, das kritische Denken solle aber allein bei ihr oder den Koautoren liegen" | 26 | belegt | science_0005 | Sinngemäß so in der Quelle. |
| 33 | Lea | „mächtiges Werkzeug für komplexe Rechnungen und zum Prüfen ihrer Argumentation, das kritische Denken und Lernen leiste sie aber selbst. Es ersetze nicht, den Stoff wirklich zu verstehen" | 27 | belegt | science_0077 | Sinngemäß so; die Person spricht über Lehrveranstaltungen (Physik, Java), nicht über ein Forschungsprojekt. |
| 34 | Jonas | „Viele ziehen klare persönliche Grenzen." | 28 | überzogen | Zählung, science_0077, science_0012, science_0050 | Die Grenzen-Stichwörter treffen 12 von 125 Interviews, davon sind 4 Fehltreffer (science_0026, 0050, 0095, 0121). Einzelne weitere Grenzziehungen ohne Stichwort kommen vor, „viele" ist durch die Zählung nicht gedeckt. |
| 35 | Jonas | „würde nie E-Mails von der KI schreiben lassen. Sie schreibe selbst einen Entwurf und hole sich dann Vorschläge zu Wortwahl und Grammatik" | 28 | belegt | science_0001 | Sinngemäß so in der Quelle. |
| 36 | Lea | „KI-Vorschläge dienen … als Sprungbrett für die eigene Recherche, und sie prüfe, ob die genannten Aufsätze echt, relevant und seriös sind" | 29 | belegt | science_0087 | Sinngemäß so in der Quelle. |
| 37 | Jonas | „möchte keinen KI-Assistenten, der Praktikumsanfragen annimmt oder Termine mit Studierenden vereinbart, ohne dass er oder sie zugestimmt hat" | 30 | belegt | science_0091 | Sinngemäß so; in der Quelle „students and other staff", begründet mit Kontrollverlust. |
| 38 | Lea | „Sie möge ihre Art zu schreiben, und wenn sie KI nutze, wisse sie, dass das nicht mehr sie selbst sei" | 31 | belegt | science_0037 | Sinngemäß so in der Quelle. |
| 39 | Jonas | „Manche Befragte beschreiben sich übrigens selbst als Studierende" | 32 | belegt | science_0105, science_0032, science_0049 | Mehrere Befragte bezeichnen sich als „student researcher" oder Studierende. |

## Belegstellen

### Aussage 1
- [README] "All participants provided informed consent for public release of their raw interview transcripts."
- [Zählung] "in den Antworten von 105 von 125 Interviews" (Ausgabe von `zaehle`; Gesamtzahl der Transkripte 125)

### Aussage 2
- [science_0000] "I'm Claude, an AI user researcher at Anthropic, and I'm here to learn about your experiences using AI in your scientific work."

### Aussage 3
- [Zählung Literatur/Schreiben] "Begriff /\b(?:literature|paper|manuscript|writing|write|wrote|draft|summari|proofread|grant|abstract|citation)/ in den Antworten von 105 von 125 Interviews"
- [Zählung Code/Daten] "Begriff /\b(?:code|coding|python|script|programm|debug|data analys|analyz|analys|statistic|dataset)/ in den Antworten von 102 von 125 Interviews"

### Aussage 4
- [Skript interviewer-s2-auszug.py] `user = [t for rolle, t in paare if rolle == "User"]` … `"themen": {k: bool(rx[k].search(utext)) for k in THEMEN}`

### Aussage 5
- [science_0001] "Initially, I would use AI to check over emails I was writing to send to my advisor. These had to sound professional while getting my intended point across, and the tools provided by AI helped greatly with this."

### Aussage 6
- [science_0024] "One example was using it to rewrite some code my colleague had written in matlab into python. AI was able to do it cleanly using libraries I didn't know about."

### Aussage 7
- [science_0086] "The only exception is data analysis. Usually this step can be tedious and sometimes more on the boring side (parsing through lists of readings, plotting etc..) and I have employed AI to help with coding/data analysis."

### Aussage 8
- [science_0033] "I would like to use AI tools in data analysis, but I'm unsure of doing so. A lot of the data analysis that I do is complex and nuanced, but where I reach my limit I usually rely on a specialist - a biostatistician - to fill in the gaps."
- [science_0033] "Because I don't know what the biostatistician sees or the tools they use to analyze the information well enough, I can't fact-check an AI that I was analyzing my data to make sure it was correct."
- [science_0033] "AI models can do the searching a lot faster - and even though I know the results can't always be trusted - an error-prone search at a quicker pace gets me further than a slow methodical search in the time I have available to dedicate to the task."

### Aussage 9
- [Zählung Zeitgewinn] "Begriff /\b(?:save time|saves time|saved time|saving time|time-saving|time saving|faster|quicker|speed up|sped up|efficien)/ in den Antworten von 62 von 125 Interviews"

### Aussage 10
- [science_0001] "I usually decided to use AI when it would solve a problem quicker than a traditional approach (ie checking stack overflow/github). In general this is the case for 90% of problems."

### Aussage 11
- [science_0023] "AI is much faster for things like debugging than manually combing through a large codebase, as it catches things like missing colons or syntax errors much faster than a human could."
- [science_0023] "It's also great for doing things like graph plotting, as looking up specific matplotlib commands is tedious and takes time, whereas an AI can implement them straight away"

### Aussage 12
- [science_0082] "The problem with using AI here is that firstly, it's not trustworthy for the advanced math or conceptual understanding of the experimental context, so if I used it, I would have to double-check everything it did at which point I may as well have done it myself to begin with."
- [science_0082] "This doesn't save time. Even if it were trustworthy, it doesn't integrate with my lab software tools such as GraphPad."
- [science_0082] "I use AI to double-check my work on those days when I'm a bit tired/etc. and I want to make sure I'm not, say, off by a factor of 1000 accidentally"

### Aussage 13
- [science_0029] "but it was also highly dependent on materials / resources we already had available at my work, and it would've taken a lot of time to give AI all the context of what we were working with / the constraints from my environment and workplace."

### Aussage 14
- [Zählung Prüfen] "Begriff /\b(?:verif|double-check|double check|check|validat|cross-check|fact-check|confirm)/ in den Antworten von 95 von 125 Interviews"
- [Zählung Misstrauen] "Begriff /\b(?:hallucinat|fabricat|made up|make up|makes up|incorrect|wrong|mistake|inaccura|unreliab|not trust|n't trust|distrust|skeptic|sceptic)/ in den Antworten von 73 von 125 Interviews"

### Aussage 15
- [Zählung nur „check"] "Begriff /\bcheck/ in den Antworten von 62 von 125 Interviews"
- [Zählung engere Prüfbegriffe] "Begriff /\b(?:verif|double-check|double check|validat|cross-check|fact-check)/ in den Antworten von 73 von 125 Interviews"
- [Zählung Literatur/Schreiben, zum Vergleich] "in den Antworten von 105 von 125 Interviews"

### Aussage 16
- [science_0041] "Similarly it's frustrating whenever the AI is seemingly 100% confident in itself but is wrong, or when it "interpolates" URL references to pages that don't exists/"hallucinates" technical references and papers with fake titles that don't exist!"
- [science_0082] "My coworker also experienced it hallucinating scientific citations."
- [science_0038] "tried like I said but there are many errors and hallucinations, links to fake papers."

### Aussage 17
- [science_0054] "A lot of the time AI would hallucinate answers to things, suggest structures which are chemically impossible (e.g. 5 bonds around carbon), or not interpret the question correctly."

### Aussage 18
- [science_0065] "If I ask for example, "give me references for this claim in the literature" I've found the answers given are often incorrect or not very good."
- [science_0065] "AI is also very bad at searching through astronomical databases."

### Aussage 19
- [science_0032] "I have to verify a few of these values by hand though usually, as the AI often makes a mistake, but once I have checked 3 or so, I usually have faith in the AI."
- [science_0032] "Once I do that, I will try and prove/derive the formula. I try and do this without any AI, because one, it's more satisfying, and two, if it's not so easy that I can derive it straight away, the AI normally gets it wrong."

### Aussage 20
- [science_0041] "Deriving an equation to either check my derivation, or just do it (but I will 100% double-check it step-by-step)."

### Aussage 21
- [science_0010] "However, sometimes if something "seems" right, and is in the ballpark of being correct then I might trust it."
- [science_0010] "I do check information - sometimes information is not available in AI tools such as specific values from datasheets which are only distributed under an NDA so that information cannot be used."
- [science_0010] "For example, if an AI tells me that 50kg is 120lbs, I would not question it too much."

### Aussage 22
- [science_0105] "I havent used AI for data analysis because I am unsure of the results it will yield, and the only way to confirm/deny the results from AI is to repeat the work myself, so it feels pointless to ask an AI."
- [science_0105] "The AI can easily absorb information of how to perform an SDS-PAGE and repeat it back in a different format (such as a step by step procedure) which allows me to trust it more."

### Aussage 23
- [science_0050] "It was a big project with a tight deadline. I figured that AI would be suited to these small, easily checkable tasks. That way, I could focus on the larger parts of the project that AI couldn't handle"

### Aussage 24
- [science_0045] "It's also an area where mistakes can ruin days of work, so I wouldn't trust AI for any step-by-step lab instructions without cross-checking everything."

### Aussage 25
- [Zählung Ideen] "Begriff /\b(?:idea|brainstorm|hypothes|creativ|inspir|novel)/ in den Antworten von 93 von 125 Interviews"

### Aussage 26
- [science_0086] "The most difficult part when it comes to research projects, for me, is always coming up with an initial idea. I struggle to brainstorm ideas and especially in contested fields it can be difficult."

### Aussage 27
- [science_0026] "think of the AI tools as a "brainstorming partner" (this is how I tend to try to write instructions for any LLMs I use) that can come up with ideas (some of which may be wrong) at a much quicker than I individually can search and implement."

### Aussage 28
- [science_0089] "A very general point would be an over-reliance on the tool's training data that could compromise the user's intended purpose and the integrity of their usage of the response when using GenAI tools, especially in academia."
- [science_0089] "This is the likely cause of the generic ideas that I mentioned earlier."
- [science_0089] "The training data dictates the response to be perfectly industry standard / professional level, when most students using GenAI tools for programming classes and assignments have a barebones understanding of the language."

### Aussage 29
- [Zählung Fachkompetenz] "Begriff /\b(?:deskill|de-skill|atroph|critical thinking|over-reli|overreli|over reli|dependen|lazy|lose the abilit|lose my|lose our|lose skill|losing skill)/ in den Antworten von 9 von 125 Interviews"

### Aussage 30
- [science_0024] "Another way I used it was to help me manage system things such as dependencies, the virtual environment, version control."
- [science_0029] "I guess I could've used AI in help for designing the prototypes, but it was also highly dependent on materials / resources we already had available at my work"

### Aussage 31
- [science_0095] "This can be due to atmospheric boundary layer interactions, artificial 'wind' generated by the flames themselves, as well as topological changes such as the influence of hills and valleys."

### Aussage 32
- [science_0005] "Having said that, I think AI is very useful for helping me write the tools to process my data, I just think the critical thinking should be done solely by me (or my coauthors)."

### Aussage 33
- [science_0077] "I have this powerful tool to help me work through complex calculations and check my reasoning, but I'm still doing the critical thinking and learning. It's enhanced my problem-solving process without replacing my need to truly understand the material."

### Aussage 34
- [Zählung Grenzen] "Begriff /\b(?:boundar|guardrail|draw the line|off-limits|off limits|wouldn't let|would never|never let|never use|wouldn't trust|not comfortable|uncomfortable)/ in den Antworten von 12 von 125 Interviews"
- [science_0077] "I set clear boundaries around AI to preserve essential learning steps."
- [science_0050] "For example, if AI was able to produce its own mathematical theorems and push the boundaries of science, it would be a great help" (Beispiel für einen Fehltreffer)

### Aussage 35
- [science_0001] "I would never ask AI to write emails for me. I would write an initial email with the information I wanted to convey, then ask an AI for suggestions of wording and grammar."

### Aussage 36
- [science_0087] "For the literature review I would use AI suggestions as a springboard to do my own research and I would verify that the papers it suggested were real, relevant and reputable."

### Aussage 37
- [science_0091] "Some sort of Admin assistant could also be helpful, but then I think you start to lose control of knowing the limits of your work boundaries."
- [science_0091] "I don't want to accept all the applications from researchers around the world who wanted to do an internship, or let students and other staff book meetings with my AI assistant without my consent."

### Aussage 38
- [science_0037] "In terms of writing, although i know it can be helpful for formatting or sometimes editing, I like my style of writing and if I use AI I know it's not me."
- [science_0037] "I am quite sceptical of using AI for research/ writing as for research, I worry it will miss out something crucial, so i prefer to do it myself."

### Aussage 39
- [science_0105] "As a student researcher, many of my project themes are decided for me."
- [science_0032] "I feel like 'project' is too strong a word, as I am only a student researcher."
- [science_0049] "as a student I want to perform a lot of the work"

## Zusammenfassung

- Geprüfte Aussagen: 39
- belegt: 33
- überzogen: 6 (Nr. 12, 15, 16, 22, 28, 34)
- nicht belegt: 0

Alle zitierten Transkript-IDs passen zu den Aussagen; Fachgebiete und Rollen (Labor, Chemie, Astronomie, Biostatistik, Betreuung) sind nicht erfunden. Alle Zahlen im Drehbuch lassen sich mit den Stichwortlisten reproduzieren. Die überzogenen Stellen betreffen Verallgemeinerungen („viele", „fast so präsent", „sehr fachspezifisch") und drei Zitate, deren Einschränkung oder Bezugspunkt in der Quelle verloren geht.

### Persönlichkeitsschutz-Befunde

1. **science_0032 (Abs. 15 und 17), verkürzt und möglicherweise herabsetzend.** Lea nennt das Vorgehen „heikel" und „eine schmale Grundlage für Vertrauen". In der Quelle dienen die drei nachgerechneten Werte nur dazu, eine Formel zu vermuten; diese beweist die Person anschließend ausdrücklich ohne KI. Ohne diesen Kontext erscheint die Person leichtgläubiger, als sie sich selbst beschreibt.
2. **science_0010 (Abs. 17), verkürzt.** „vertraue sie manchmal einfach" lässt den vorausgehenden Satz „I do check information" weg. Durch die Rahmung als „heikel" wirkt die Person nachlässiger, als die Quelle es hergibt.
3. **science_0089 (Abs. 23), falsch wiedergegeben.** Die Person beschreibt, dass das Werkzeug sich zu stark auf seine Trainingsdaten stützt; das Drehbuch schreibt ihr eine Aussage über Nutzende zu, die sich auf Trainingsdaten verlassen. Nicht herabsetzend, aber eine Verschiebung des Gemeinten.
4. **science_0082 (Abs. 9), zugespitzt.** „sagt knapp: Das spart keine Zeit" stellt eine begründete, auf komplexe Datenanalyse begrenzte Aussage als pauschales Urteil dar; die Person nutzt KI für andere Aufgaben. Nicht herabsetzend.
5. **science_0105 (Abs. 18), zugespitzt.** Als allgemeine „Gegenposition" dargestellt, obwohl die Person KI für Lernen, Laborvorbereitung, Schreiben und Brainstorming häufig nutzt. Nicht herabsetzend.

Keine Befunde zu erfundenen Personenmerkmalen. Das Geschlecht ergibt sich im Drehbuch nur grammatisch aus „Person"; Abs. 30 ist neutral formuliert.
