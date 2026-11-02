# ElevenLabs-Blöcke für das Hörstück S2 „Was Forschende über KI sagen“

Erzeugt von `python3 scripts/audio-s2-zusammenfuegen.py bloecke` aus `manifest.json`; nicht von Hand ändern.
Modell `eleven_v3`, Werkzeug „Text to Dialogue“. Je Block: Zeilen in dieser Reihenfolge als Dialogzeilen anlegen,
Stimme nach Sprecher zuordnen (Lea / Jonas), erzeugen, als mp3 unter dem genannten Dateinamen speichern.

## Block 01 – Wofür Forschende KI tatsächlich nutzen

Datei: `s2-block-01.mp3` · Zeilen 1–6 · 1381 Zeichen

- **Lea:** [warmly] Willkommen zu einer neuen Folge. Heute geht es um einen öffentlichen Datensatz: hundertfünfundzwanzig Interviews, in denen Forschende über ihre Arbeit mit KI berichten. Geführt hat die Gespräche übrigens selbst eine KI, nämlich Claude. Jonas, du hast die Auszüge gelesen. Was fällt zuerst auf?
- **Jonas:** Wie alltäglich die Nutzung ist. Eine grobe Stichwortzählung findet Literatur und Schreiben in hundertfünf von hundertfünfundzwanzig Interviews, Code und Datenanalyse in hundertzwei. Wichtig dabei: Gezählt wird nur, ob ein Stichwort in den Antworten vorkommt. Das sind Hinweise, keine Messwerte.
- **Lea:** Beim Schreiben geht es oft um sehr Kleines. Eine Person erzählt, sie habe anfangs E-Mails an ihre Betreuung von der KI prüfen lassen, damit sie professionell klingen und trotzdem das eigene Anliegen rüberbringen.
- **Jonas:** Beim Code ist das Bild ähnlich handfest. Jemand ließ Matlab-Code eines Kollegen in Python übertragen, und die KI nutzte dabei Bibliotheken, die die Person selbst gar nicht kannte.
- **Lea:** Eine andere Person sagt, Datenanalyse sei oft mühsam und eher langweilig, also Messwertlisten durchgehen, plotten und so weiter, und genau dafür setze sie KI ein.
- **Jonas:** Aber nicht alle ziehen mit. Eine Person würde KI gern für die Datenanalyse nutzen, ist aber unsicher. Ihre Analysen seien komplex und voller Feinheiten, und wo ihr Wissen endet, frage sie lieber eine Fachperson aus der Biostatistik.

## Block 02 – Zeitgewinn – und wo er ausbleibt

Datei: `s2-block-02.mp3` · Zeilen 7–11 · 1084 Zeichen

- **Lea:** Zeitgewinn taucht in zweiundsechzig Interviews auf. Eine Person sagt, sie greife zur KI, wenn sie ein Problem schneller löst als die Suche auf Stack Overflow oder GitHub, und das sei bei rund neunzig Prozent der Probleme der Fall.
- **Jonas:** Beim Debugging wird es konkret: Die KI finde fehlende Doppelpunkte und Syntaxfehler viel schneller als ein Mensch, der eine große Codebasis durchkämmt. Und Matplotlib-Befehle nachzuschlagen sei mühsam, die KI setze sie sofort um.
- **Lea:** Es gibt aber deutliche Gegenstimmen. Jemand aus dem Labor sagt knapp: Das spart keine Zeit. Selbst wenn die KI vertrauenswürdig wäre, lasse sie sich nicht mit der Laborsoftware wie GraphPad verbinden.
- **Jonas:** Und eine andere Person meint, sie hätte KI für den Entwurf von Prototypen nutzen können. Aber der KI den ganzen Kontext zu erklären, also vorhandene Materialien und Einschränkungen am Arbeitsplatz, hätte zu viel Zeit gekostet.
- **Lea:** Für uns in der Lehre ist das ein wichtiger Punkt. Zeitgewinn ist kein Naturgesetz. Er hängt davon ab, wie viel Kontext man liefern muss und wie gut sich das Werkzeug in die vorhandene Arbeit einfügt.

## Block 03 – Prüfen statt blind vertrauen

Datei: `s2-block-03.mp3` · Zeilen 12–20 · 1713 Zeichen

- **Jonas:** Prüfen und Verifizieren kommt in fünfundneunzig Interviews vor, Misstrauen und Fehler in dreiundsiebzig. Das Thema ist also fast so präsent wie die Nutzung selbst.
- **Lea:** Die Fehlerberichte sind sehr fachspezifisch. Eine Person berichtet, die KI habe Antworten erfunden und Strukturen vorgeschlagen, die chemisch unmöglich sind, etwa fünf Bindungen an einem Kohlenstoffatom.
- **Jonas:** Und bei der Literatur: Wer nach Belegen für eine Behauptung fragt, bekomme oft falsche oder schwache Quellen. Auch die Suche in astronomischen Datenbanken klappe schlecht.
- **Lea:** Spannend sind die Prüfstrategien. Eine Person rechnet einige Werte von Hand nach, weil die KI oft Fehler mache. Nach etwa drei geprüften Werten vertraue sie ihr dann meistens.
- **Jonas:** Eine andere lässt sich Gleichungen herleiten, prüft aber nach eigener Aussage jeden Schritt hundertprozentig selbst.
- **Lea:** [thoughtful] Das erste Beispiel finde ich heikel. Drei Stichproben sind eine schmale Grundlage für Vertrauen. Und eine weitere Person räumt ein: Wenn etwas richtig wirke und ungefähr in der passenden Größenordnung liege, vertraue sie manchmal einfach.
- **Jonas:** Dazu passt die Gegenposition: Die einzige Möglichkeit, KI-Ergebnisse zu bestätigen, sei, die Arbeit selbst zu wiederholen. Dann wirke es sinnlos, die KI überhaupt zu fragen.
- **Lea:** Eine pragmatische Lösung beschreibt jemand anderes: KI für kleine, leicht überprüfbare Aufgaben nutzen, um sich auf die großen Teile des Projekts zu konzentrieren, die KI nicht bewältigt.
- **Jonas:** Das wäre eine gute Faustregel für Studierende: Gib ab, was du schnell prüfen kannst. Wo Fehler teuer sind, sieht es anders aus. Eine Person sagt, Fehler könnten Tage an Laborarbeit ruinieren, deshalb würde sie Schritt-für-Schritt-Anleitungen der KI nie ungeprüft übernehmen.

## Block 04 – Ideen, Denken und Fachkompetenz

Datei: `s2-block-04.mp3` · Zeilen 21–27 · 1444 Zeichen

- **Lea:** Ideen und Hypothesen tauchen in dreiundneunzig Interviews auf. Eine Person sagt offen, das Schwierigste sei für sie immer, überhaupt eine erste Idee zu finden, besonders in umkämpften Feldern.
- **Jonas:** Eine andere sieht die KI als Brainstorming-Partner, der schneller Ideen liefert, als man selbst suchen und umsetzen kann, wobei manche davon falsch sein können. So formuliere sie auch ihre Anweisungen an Sprachmodelle.
- **Lea:** Gleichzeitig gibt es eine Warnung: Wer sich zu sehr auf die Trainingsdaten des Werkzeugs verlässt, bekommt eher generische Ideen, so jedenfalls die Vermutung einer Person.
- **Jonas:** Jetzt eine Zahl, die man vorsichtig lesen muss. Sorge um Fachkompetenz erscheint nur in neun Interviews. Schaut man genauer hin, passt nicht jeder Treffer. Ein Zitat handelt schlicht davon, mit KI Softwareabhängigkeiten und Versionskontrolle zu verwalten.
- **Lea:** Bei der Kategorie Grenzen ist es ähnlich: Da landen auch atmosphärische Grenzschichten in Waldbrandsimulationen. Eine grobe Zählung ersetzt eben nicht das Lesen der Transkripte.
- **Jonas:** Die passenden Zitate sind aber stark. Eine Person sagt, KI helfe ihr beim Schreiben von Werkzeugen für die Datenverarbeitung, das kritische Denken solle aber allein bei ihr oder den Koautoren liegen.
- **Lea:** Und eine andere beschreibt es so: Sie habe ein mächtiges Werkzeug für komplexe Rechnungen und zum Prüfen ihrer Argumentation, das kritische Denken und Lernen leiste sie aber selbst. Es ersetze nicht, den Stoff wirklich zu verstehen.

## Block 05 – Grenzen ziehen – und was das für die Lehre heißt

Datei: `s2-block-05.mp3` · Zeilen 28–35 · 1469 Zeichen

- **Jonas:** Viele ziehen klare persönliche Grenzen. Eine Person würde nie E-Mails von der KI schreiben lassen. Sie schreibe selbst einen Entwurf und hole sich dann Vorschläge zu Wortwahl und Grammatik.
- **Lea:** Bei der Literatur ähnlich: KI-Vorschläge dienen einer Person als Sprungbrett für die eigene Recherche, und sie prüfe, ob die genannten Aufsätze echt, relevant und seriös sind.
- **Jonas:** Und es gibt Grenzen aus Gründen der Kontrolle. Jemand möchte keinen KI-Assistenten, der Praktikumsanfragen annimmt oder Termine mit Studierenden vereinbart, ohne dass er oder sie zugestimmt hat.
- **Lea:** Eine Person begründet ihre Zurückhaltung mit dem eigenen Stil: Sie möge ihre Art zu schreiben, und wenn sie KI nutze, wisse sie, dass das nicht mehr sie selbst sei.
- **Jonas:** Was heißt das für uns als Lehrende? Erstens: Die Muster ähneln dem, was wir von Studierenden kennen. Manche Befragte beschreiben sich übrigens selbst als Studierende. Zweitens: Prüfstrategien sollten wir ausdrücklich lehren, nicht nur Regeln und Verbote aufstellen.
- **Lea:** Drittens: Die Zahlen dieses Auszugs sind grobe Stichwortzählungen aus einem Interviewdatensatz. Sie zeigen, worüber gesprochen wird, aber nicht, wie gut etwas funktioniert oder wie verbreitet es insgesamt ist.
- **Jonas:** [curious] Und damit zu unserer Frage an euch: Welche Aufgaben in eurem Fach sind klein und leicht genug überprüfbar, dass Studierende sie an eine KI abgeben dürfen, und wo sollte das kritische Denken ganz bei ihnen bleiben?
- **Lea:** Schreibt uns eure Beispiele. Bis zum nächsten Mal.
