# Drehbuch: Das nächste Token – in neun Genres

Erzeugt aus `manifest.json` (einzige Quelle; Änderungen dort, dann `node scripts/genrefilm/drehbuch.mjs --film kap02-token-genres`).
Bildsprache: Graustufen + eine Akzentfarbe (#b45309; auf dunklem Grund #f59e0b); Leitobjekt: Token „Bank“ (in jeder Szene in der Akzentfarbe).
Laufzeit mit aktueller Tonspur: 165.4 s.

## Vorhersage vor dem Start

Bevor der Film startet: Was liefert ein Sprachmodell nach „Die Bank steht unter einem Baum.“?

a) Genau ein Wort, das nächste.  
b) Eine Liste möglicher nächster Tokens, jedes mit einer Wahrscheinlichkeit. **(richtig)**  
c) Den ganzen Rest des Satzes auf einmal.

Auflösung: Szene 5 (Wetterbericht) zeigt es: Das Modell gibt eine Verteilung über alle möglichen nächsten Tokens aus. Erst danach wird ein Token gezogen (Szene 6).

## Szene 1: Film noir (0.0–22.0 s)

**Idee:** Text kommt als Zeichenkette an und wird in Tokens zerlegt  
**Sprechtext (51 Wörter):** Regennacht. Ein Text kommt rein, nichts als eine Kette aus Zeichen. Das Modell rechnet nicht mit Wörtern. Es zerlegt den Text in Tokens: Wörter, Wortteile, Satzzeichen. Lieferantenbewertung? Am Textanfang fünf Stücke. Supplier evaluation? Zwei. Der Tokenizer hat sein Vokabular aus Texten gelernt, in denen Englisch überwiegt; deutsche Komposita zerfallen in Stücke.  
**Stimme:** rauchige, ruhige Erzählstimme eines Ermittlers; kurze Sätze, trocken  
**Bildtext:** „Film noir“, „Text wird zu Tokens“  
**Bild:** Schreibmaschine tippt „Lieferantenbewertung“, Schere teilt in 5 Kästchen; darunter „supplier evaluation“ in 2 Kästchen; oben klein der Satz „Die Bank steht unter einem Baum.“ als ankommende Zeichenkette (Bank in Akzentfarbe)  

| Fachaussage | Beleg |
|---|---|
| Das Modell zerlegt Text in Tokens: ganze Wörter, Wortteile oder Satzzeichen. | kapitel02-grundlagen.qmd, @sec-gpt-bedeutung, Satz 1 (@jurafsky2025, Kap. 2) |
| „Lieferantenbewertung“ = 5 Tokens, „supplier evaluation“ = 2 (o200k_base, Textanfang). | Build-Skript, gpt-tokenizer 4.1.0 (tokenwerte im Manifest); T1 Vorhersagefrage |
| Der Tokenizer hat sein Vokabular aus Texten gelernt, in denen Englisch überwiegt. | T1, Auflösung der Vorhersagefrage (interactions/vom-satz-zum-naechsten-wort.html) |

## Szene 2: Naturdokumentation (22.0–41.5 s)

**Idee:** Tokens werden zu Nummern  
**Sprechtext (49 Wörter):** Hier, in freier Wildbahn, ein Satz: Die Bank steht unter einem Baum. Sieben Tokens. Das Leerzeichen reist jeweils mit dem folgenden Wort. Jedes Token trägt eine feste Nummer, wie ein beringter Vogel. Das Token Die trägt die Nummer achttausendsiebenhundertsechsundneunzig. Unsere Bank heißt neuntausendneunhundertfünfzig. Ab jetzt zählen nur noch Zahlen.  
**Stimme:** ruhige, staunende Dokumentarstimme, leise, fast flüsternd am Anfang  
**Bildtext:** „Naturdokumentation“, „Tokens werden Nummern“  
**Bild:** Sucherrahmen mit Ecken; sieben Token-Kästchen erscheinen nacheinander, darunter ihre echten Nummern; Bank-Kästchen in Akzentfarbe  

| Fachaussage | Beleg |
|---|---|
| „Die Bank steht unter einem Baum.“ = 7 Tokens; das Leerzeichen gehört zum folgenden Token. | Build-Skript, gpt-tokenizer 4.1.0; T1 Schritt 2 und Abschnitt „Was ist echt“ |
| Jedes Token hat eine feste Nummer; „Die“ = 8796, „␣Bank“ = 9950. | kapitel02-grundlagen.qmd, @sec-gpt-bedeutung, Satz 2; Build-Skript (tokenwerte); T1 Schritt 3 |

## Szene 3: Kochshow (41.5–56.9 s)

**Idee:** Nummern werden zu Zahlenlisten (Vektoren); Bedeutung als Ort auf einer Karte  
**Sprechtext (47 Wörter):** Und jetzt zum Rezept! Aus jeder Nummer machen wir eine lange Zahlenliste, einen Vektor. Das nennt man Embedding. Die Liste beschreibt die Bedeutung als Ort auf einer Art Stadtplan. Ähnliche Wörter wohnen nah beieinander. Unsere Bank liegt noch zwischen Geld und Park. Die Karte hier ist schematisch.  
**Stimme:** gut gelaunte Fernsehköchin oder Fernsehkoch, zugewandt, flott  
**Bildtext:** „Kochshow“, „Nummer wird Zahlenliste (Vektor)“, „Geld“, „Park“, „schematisch“  
**Bild:** Rezeptkarte: 9950 → Zahlenliste mit acht schematischen Werten und „…“; daneben Stadtplan mit Punkten Geld und Park, Bank-Punkt in Akzentfarbe genau dazwischen  
**Gekennzeichnet:** Zahlenliste und Bedeutungskarte schematisch (nicht gemessen)  

| Fachaussage | Beleg |
|---|---|
| Jedes Token wird in einen Vektor übersetzt, eine lange Zahlenreihe; der Vorgang heißt Embedding. | kapitel02-grundlagen.qmd, @sec-gpt-bedeutung, Sätze 2–3 |
| Der Vektor beschreibt die Bedeutung als Ort auf einer Art Stadtplan; ähnliche Wörter liegen in der Nachbarschaft. | kapitel02-grundlagen.qmd, @sec-gpt-bedeutung, Satz 2 |
| Allein liegt „Bank“ zwischen den Nachbarschaften Geld und Park. | T1 Schritt 5 (Unterschrift „Allein liegt Bank zwischen zwei Nachbarschaften“) |

## Szene 4: Sportreportage (56.9–74.5 s)

**Idee:** Aufmerksamkeit: Baum zieht Bank Richtung Park, Blick nur zurück  
**Sprechtext (50 Wörter):** Der Spielzug des Abends: die Aufmerksamkeit! Beim Token Baum blickt das Modell zurück auf Bank. Nur zurück, nie nach vorn! Und ab Baum trägt die Rechnung die Bank in Richtung Park, weg vom Geld! Echte Modelle machen das vielfach, in vielen Schichten, mit vielen Aufmerksamkeitsköpfen. Was kommt nach dem Punkt?  
**Stimme:** Sportreporter im Stadion, schnell, steigernd, am Ende gespannt  
**Bildtext:** „Sportreportage“, „Aufmerksamkeit: nur zurück“, „Bank im Satz“  
**Bild:** Spielfeldlinien; Token-Reihe; Pfeil von Baum zurück auf Bank; auf der Karte bleibt der Bank-Punkt stehen, ein neuer Punkt „Bank im Satz“ erscheint nahe Park (wie T1)  
**Gekennzeichnet:** Aufmerksamkeit vereinfacht (ein Pfeil statt vieler Schichten und Köpfe)  

| Fachaussage | Beleg |
|---|---|
| Aufmerksamkeit: Beim Token „Baum“ blickt das Modell auf „Bank“ zurück; ab dieser Stelle trägt die Rechnung die Bedeutung „Bank im Park“ weiter (neuer Punkt „Bank im Satz“, der Bank-Punkt selbst bleibt). | kapitel02-grundlagen.qmd, Absatz „Was heißt hier GPT?“ (@vaswani2017); T1 Schritt 6 und Abschnitt „Was ist echt“, Punkt „Vereinfacht“ |
| In Modellen der GPT-Art blickt jedes Token nur auf frühere Tokens zurück. | T1, Abschnitt „Was ist echt“, Punkt „Vereinfacht“ |
| Echte Modelle rechnen in vielen Schichten mit vielen Aufmerksamkeitsköpfen. | T1, Abschnitt „Was ist echt“, Punkt „Vereinfacht“ |

**Haltepunkt nach Szene 4:** Nach „Die Bank steht unter einem Baum.“: Welchem nächsten Token gibt das Modell eher eine hohe Wahrscheinlichkeit?  
a) „Sie“ **(richtig)**  
b) „Kunden“  
c) Beide gleich  
Auflösung: „Sie“ – mit „Baum“ im Blick liegt die Bank im Park; eine Fortsetzung über Bankkunden wird unwahrscheinlich. Die nächste Szene zeigt die Lehrwerte: etwa 45 % gegen 1 %.

## Szene 5: Wetterbericht (74.5–94.6 s)

**Idee:** Vorhersage als Wahrscheinlichkeitsverteilung für das nächste Token  
**Sprechtext (43 Wörter):** Die Vorhersage für das nächste Token. Das Modell liefert kein einzelnes Wort, sondern eine Verteilung: für jedes Token im Vokabular eine Wahrscheinlichkeit. Nach unserem Satz: Sie, fünfundvierzig Prozent. Er, siebenundzwanzig. Im, fünfzehn. Und Kunden? Ein Prozent, leichter Niesel. Das sind Lehrwerte, keine Messung.  
**Stimme:** Wetteransagerin oder Wetteransager im Fernsehen, freundlich, sachlich  
**Bildtext:** „Wetterbericht“, „Vorhersage: nächstes Token“, „Lehrwerte, keine Messung“  
**Bild:** Wetterkarte mit Balken: ␣Sie 45 %, ␣Er 27 %, ␣Im 15 %, ␣Kunden 1 %; oben der Satz mit Bank in Akzentfarbe und Lücke  
**Gekennzeichnet:** Wahrscheinlichkeiten ausgedacht (Lehrwerte aus T1)  

| Fachaussage | Beleg |
|---|---|
| Am Satzende berechnet das Modell eine Wahrscheinlichkeit für jedes mögliche nächste Token; es gibt eine Verteilung aus, kein Wort. | T1 Schritt 7 und Abschnitt „Temperatur und Halluzinationen“ |
| Werte: ␣Sie 45 %, ␣Er 27 %, ␣Im 15 %, ␣Kunden 1 % – Lehrwerte, keine Messung. | T1, Abschnitt „Was ist echt“, Punkt „Ausgedacht“ |

**Haltepunkt nach Szene 5:** Wird immer das Token mit dem höchsten Balken gewählt?  
a) Ja, immer.  
b) Nein: Mit einer Temperatur über null gewinnt manchmal ein kleinerer Balken. **(richtig)**  
c) Nein: Alle Tokens haben dieselbe Chance.  
Auflösung: Die Verteilung legt die Chancen fest, gezogen wird erst danach. Bei Temperatur null gewinnt der höchste Balken, darüber manchmal ein kleinerer. Die nächste Szene zeigt beides.

## Szene 6: Quizshow (94.6–112.4 s)

**Idee:** Auswahl: Temperatur bestimmt, ob immer Platz eins gewinnt  
**Sprechtext (45 Wörter):** Die Preisfrage! Wird immer der höchste Balken gezogen? Nicht unbedingt! Bei Temperatur null gewinnt der Favorit, also Sie. Bei einer Temperatur über null gewinnt manchmal ein Token mit kleinerem Balken. Das macht Antworten abwechslungsreicher. Und merken Sie sich: Gewählt wird erst jetzt, nach der Rechnung.  
**Stimme:** Quizmoderatorin oder Quizmoderator, begeistert, mit Spannungspausen  
**Bildtext:** „Quizshow“, „Temperatur“, „gezogen“, „Beispielziehung“  
**Bild:** Vier Antwortfelder mit den Balken aus Szene 5; Drehregler Temperatur 0 und 1 (bei 1 gilt die Verteilung unverändert); Auswahlrahmen springt bei 0 auf Sie, bei 1 in einer Beispielziehung auf Er  
**Gekennzeichnet:** Auswahl bei Temperatur 1 als Beispielziehung, nicht gemessen  

| Fachaussage | Beleg |
|---|---|
| Gezogen wird erst nach der Rechnung; bei einer Temperatur über null gewinnt manchmal ein Token mit kleinerem Balken; das macht Antworten abwechslungsreicher. | T1, Abschnitt „Temperatur und Halluzinationen“; T1 Schritt 8 („Mit Temperatur gewinnt nicht immer Platz eins“) |
| Bei Temperatur null gewinnt das wahrscheinlichste Token (gierige Auswahl). | Zhao et al. (2023), A Survey of Large Language Models, arXiv:2303.18223, Abschnitt Decoding: Temperatur gegen 0 entspricht der gierigen Suche; sinngemäß T1 („über null gewinnt manchmal ein kleinerer Balken“) |

## Szene 7: Stummfilm (112.4–128.9 s)

**Idee:** Anhängen und wiederholen: Token für Token, jedes Mal mit allem gerechnet, was davor steht  
**Sprechtext (46 Wörter):** Erster Akt: Das gezogene Token wird an den Text angehängt. Zweiter Akt: Der Text, jetzt ein Token länger, ist die neue Eingabe; gerechnet wird mit allem, was davor steht. Dritter Akt: neue Verteilung, neue Auswahl. Und so fort, Token für Token, bis die Antwort fertig ist.  
**Stimme:** altmodischer, theatralischer Erzähler wie bei Zwischentiteln, gemessen  
**Bildtext:** „Stummfilm“, „Anhängen“, „Neu rechnen“, „Wiederholen“, „Modell“, „Beispiel ausgedacht“  
**Bild:** Zwischentitel-Karten mit Ornamentrahmen; dazwischen wächst der Satz: … Baum. ␣Sie → ␣ist → ␣alt → . (Bank in Akzentfarbe); Filmkorn, Vignette  
**Gekennzeichnet:** Fortsetzung „Sie ist alt.“ ist ein ausgedachtes Beispiel (echte Einzeltokens in o200k_base)  

| Fachaussage | Beleg |
|---|---|
| Das gezogene Token wird angehängt; die Schleife beginnt neu; gerechnet wird mit allem, was davor steht. | T1 Schritt 8; kapitel02-grundlagen.qmd, @sec-sprachmodell (sagt das nächste Wort gestützt auf die Wörter davor vorher, @jurafsky2025, Kap. 7, S. 2) |
| Vereinfachung: In der Praxis wird dank Zwischenspeicher (KV-Cache) nur das neue Token neu gerechnet; das Ergebnis hängt aber vom ganzen Text ab. | Hinweis Prüfagent 02.11.2026; im Film nicht behauptet, dass alles neu gerechnet wird |

**Haltepunkt nach Szene 7:** Ein Token passt nicht ganz, wird aber gezogen. Was passiert damit?  
a) Das Modell bemerkt den Fehler und löscht es.  
b) Es bleibt stehen; alle folgenden Tokens bauen darauf auf. **(richtig)**  
c) Der Satz bricht an dieser Stelle ab.  
Auflösung: Ein angehängtes Token gilt als gesetzt. Die folgenden Tokens setzen es plausibel fort, so entsteht eine flüssige, aber falsche Aussage. Die nächste Szene verhandelt genau diesen Fall.

## Szene 8: Gerichtsdrama (128.9–148.7 s)

**Idee:** Wahrscheinlich ist nicht wahr: flüssige, falsche Fortsetzung  
**Sprechtext (49 Wörter):** Hohes Gericht, die Anklage lautet: flüssig, aber falsch. Das Modell wählt, was wahrscheinlich folgt, nicht, was geprüft wahr ist. Ein plausibles, aber falsches Token gilt als gesetzt, und alle folgenden bauen darauf auf. So kann eine Halluzination entstehen: ein glatter Satz ohne Deckung. Das Urteil: Prüfen bleibt Ihre Aufgabe.  
**Stimme:** Staatsanwältin oder Richter, ernst, gemessen, mit Nachdruck am Ende  
**Bildtext:** „Gerichtsdrama“, „wahrscheinlich ≠ wahr“, „ohne Beleg“, „Beispiel ausgedacht“  
**Bild:** Holzvertäfelung in Grautönen; Satz „Die Bank steht unter einem Baum. Sie wurde 1897 gegründet.“; „1897 gegründet“ mit Stempelrahmen „ohne Beleg“; Hammer schlägt  
**Gekennzeichnet:** Fortsetzung ausgedacht (Beispiel einer flüssigen, falschen Aussage)  

| Fachaussage | Beleg |
|---|---|
| Ein Sprachmodell prüft keine Wahrheit, sondern schreibt fort, was wahrscheinlich ist. | kapitel02-grundlagen.qmd, @sec-sprachmodell, Satz 3; @sec-hallucinations, Satz 2 |
| Jedes angehängte Token gilt als gesetzt, auch ein unpassendes; die folgenden bauen darauf auf; so kann eine flüssige, falsche Aussage entstehen: eine Halluzination. | T1, Abschnitt „Temperatur und Halluzinationen“ |

## Szene 9: Märchen (148.7–165.4 s)

**Idee:** Die Kette in einem Satz; zurück zu T1  
**Sprechtext (49 Wörter):** Es war einmal ein Satz. Er wurde zu Tokens, die Tokens zu Nummern, die Nummern zu Zahlenlisten. Die Aufmerksamkeit holte den Zusammenhang, eine Verteilung verteilte die Chancen, eine Auswahl zog ein Token. Es wurde angehängt, und alles begann von vorn. Wer es noch einmal sehen will: zurück zur Animation.  
**Stimme:** warme Märchenerzählerin oder Märchenerzähler, langsam, lächelnd  
**Bildtext:** „Märchen“, „Es war einmal“, „Text“, „Tokens“, „Nummern“, „Zahlenliste“, „Aufmerksamkeit“, „Vorhersage“, „gezogen“, „Anhängen“, „Zurück zur Animation“  
**Bild:** Buchseite mit Zierinitiale; Kette der Stationen mit Kreispfeil zurück zum Anfang; Bank als Held der Geschichte in Akzentfarbe  

| Fachaussage | Beleg |
|---|---|
| Kette: Tokens → Nummern → Vektoren → Aufmerksamkeit → Wahrscheinlichkeiten → Auswahl → Anhängen → von vorn. | kapitel02-grundlagen.qmd, @sec-gpt-bedeutung; T1 Schritte 1–8 |

## Selbsttest

1. Welche Kette beschreibt, wie ein Sprachmodell das nächste Token erzeugt?  
   a) Text → Tokens → Zahlen → Wahrscheinlichkeiten → Auswahl → Anhängen **(richtig)**  
   b) Text → Wörterbuch → Bedeutung nachschlagen → Antwort  
   c) Text → Wahrscheinlichkeiten → Tokens → Anhängen  
   Erst wird zerlegt und in Zahlen übersetzt, dann gerechnet, dann gezogen und angehängt; danach beginnt die Schleife neu.
2. Warum braucht „Lieferantenbewertung“ mehr Tokens als „supplier evaluation“?  
   a) Weil Deutsch für das Modell schwerer zu verstehen ist.  
   b) Weil der Tokenizer sein Vokabular aus Texten gelernt hat, in denen Englisch überwiegt; deutsche Komposita zerfallen in Stücke. **(richtig)**  
   c) Weil das Modell deutschen Text zuerst ins Englische übersetzt.  
   Häufige englische Wörter sind oft ein einziges Token. Mehr Tokens heißt: höhere Kosten pro Text und ein schneller gefülltes Kontextfenster.
3. Warum ist eine flüssige Antwort nicht automatisch eine richtige?  
   a) Weil das Modell absichtlich täuscht.  
   b) Weil gewählt wird, was wahrscheinlich folgt, nicht, was geprüft wahr ist. **(richtig)**  
   c) Weil flüssige Antworten grundsätzlich falsch sind.  
   Das Modell schreibt fort, was wahrscheinlich ist, und prüft keine Wahrheit (Kapitel 2, Abschnitt Discernment). Prüfen bleibt Aufgabe der Lesenden.

## Tokenwerte (zur Bauzeit berechnet, o200k_base (npm gpt-tokenizer 4.1.0))

- Lieferantenbewertung: [Lie][fer][anten][bew][ertung] = 5
- supplier evaluation: [supplier][ evaluation] = 2
- Die Bank steht unter einem Baum.: 8796, 9950, 27717, 9720, 7470, 70581, 13
