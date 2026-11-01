"""Commit 2 (S1b, 01.11.2026): Kapitel 2 nach Variante B, gekürzt nach Liste N1–N38.
Baut kapitel02.qmd aus Zeilenblöcken des Stands vor der Neugliederung (fdb087a) und neuem Text.
L(a, b) = unveränderte Originalzeilen a..b; T(...) = neuer oder gekürzter Text (Nr. der Kürzungsliste im Kommentar)."""
Aufruf aus dem Repo-Wurzelordner: git show fdb087a:kapitel02.qmd > /tmp/k2-alt.qmd; python3 notes/kapitel02-neugliederung/schritt2.py /tmp/k2-alt.qmd kapitel02.qmd
import re, sys
A = open(sys.argv[1], encoding='utf-8').read().split('\n')
def L(a, b): return '\n'.join(x for x in A[a-1:b] if x is not None)
QRU = 'QR-Code scannen oder <https://th-koln-bartnik.github.io/genai4teaching/interactions/{0}> aufrufen.'
def BU(n, text, ziel):
    """Druck-Bildunterschrift in Originalzeile n kürzen; Bildpfad und Attribute bleiben."""
    m = re.search(r'\]\((images/[^)]+)\)(\{[^}]*\})', A[n-1]); assert m, n
    A[n-1] = '![' + text + ' ' + QRU.format(ziel) + '](' + m.group(1) + ')' + m.group(2)
# Nachkürzung auf −25 % Druckumfang (S1b): Bildunterschriften, die N38 nicht erfasst hatte
BU(370, 'Mehr Agenten machen den Menschen zum Engpass. Standbild bei Minute 22 von acht gleichzeitig abgegebenen Aufgaben: Kugel A liegt in der Ablage „Zu entscheiden“, während die Agenten kaum zu tun haben; allein ist sie nach 24 Minuten fertig, als achte von acht nach 43,5 Minuten, davon 19,5 Minuten Warten (Lehrmodell, keine Messung). Interaktive Fassung:', 'agenten-engpass.html')
BU(668, 'Was ein Tutor-Bot im Semester kostet: 150 Studierende stellen je 2 Fragen pro Tag an 98 Tagen (29.400 Fragen), jede zum Preis einer GPQA-Diamond-Frage beim günstigsten Modell mit 75 % richtigen Antworten; von rund 8.800 US-$ (o3, Januar 2025) auf rund 12 US-$ (GPT-5.6 Luna, Juli 2026). Nur Größenordnung. Daten: @emberson2026. Interaktive Fassung mit eigenen Kurszahlen:', 'tutor-kosten.html')
BU(696, 'Mit jeder Arbeitsweise gibt der Mensch mehr Arbeitsschritte an die KI ab; „fragt“ markiert, wo der Agent in der Dämmerfabrik einen Menschen hinzuholt (Konzeptschema nach @dellacqua2023, @mollick2024d, @mollick2026charts und @mollick2026agents; Zuordnung der Schritte eigene Lesart). Interaktive Fassung:', 'ki-entwicklung.html?zeige=arbeitsweisen')
BU(418, 'Die Sitzung schreibt alles mit, das Gedächtnis behält nur das Verdichtete: Ein Statistik-Tutor baut den Kontext aus der laufenden Sitzung, Kernpunkte wandern ins Gedächtnis, und am vierten Abend holt er nur das Passende zurück (eigene Darstellung nach @milam2025sessions; schematisch). Die Fassung zum Durchklicken:', 'sitzung-und-gedaechtnis.html')
BU(402, 'Vom Spickzettel zum prüfbaren Archiv: Die vier Stufen unterscheiden sich darin, was wann ins Kontextfenster gelangt, von der Anleitungsdatei (alles von Anfang an) bis zum Dateisystem (nur das gezielt Gesuchte) (schematische Darstellung). Die animierte Fassung:', 'agenten-gedaechtnis.html')
BU(331, 'Ein Skill lädt sein Wissen erst, wenn es gebraucht wird: zuerst nur Name und Kurzbeschreibung, dann die Anleitung des passenden Skills, Zusatzdateien nur bei Bedarf, wie Inhaltsverzeichnis, Kapitel und Anhang eines Handbuchs (eigene Darstellung nach @zhang2025skills; schematisch). Die Fassung zum Durchklicken:', 'skills-handbuch.html')
BU(241, 'Vor der Antwort entsteht im Modell ein Zwischenschritt, der nie im Text steht: Aus „Dallas“ wird intern „Texas“ und daraus „Austin“; ersetzen Forschende „Texas“ durch „California“, antwortet das Modell „Sacramento“ (eigene Darstellung nach @lindsey2025 und @anthropic2025tracing; Claude 3.5 Haiku, stark vereinfacht). Die Fassung zum Durchklicken:', 'zwischenschritt-texas.html')
BU(220, 'Ein Sprachmodell rechnet mit Zahlen, nicht mit Wörtern: Der Satz wird in Tokens mit festen Nummern zerlegt (echte Werte, Tokenizer o200k_base), über die Aufmerksamkeit rückt „Bank“ durch „Baum“ in die Nachbarschaft von „Park“, und aus einer Wahrscheinlichkeitsverteilung wird das nächste Token gezogen (eigene Darstellung; Bedeutungskarte und Werte schematisch). Die Fassung zum Durchklicken:', 'vom-satz-zum-naechsten-wort.html')
# Absätze
A[138] = 'Wie viel Autonomie ein Modell bekommt, entscheiden die Menschen, die es einsetzen, nicht das Modell.\n@morris2024 ordnen die Zusammenarbeit von Mensch und KI in sechs Stufen, von „keine KI“ bis zum vollständig selbstständigen Agenten, und betonen, dass für Bildung und Prüfungen auch die unterste Stufe ihren Platz behält.'
A[139] = A[140] = None
A[171] = 'Der Harness ist zugleich der Regler der Autonomie: Welche Werkzeuge er anbietet, ob ein Werkzeug nur lesen oder auch schreiben darf und wo der Ablauf auf eine Freigabe wartet, legt den **Handlungsspielraum** des Modells fest.\nWer den Harness pflegt, betreibt *Harness Engineering*; @hashimoto2026adoption, der den Begriff geprägt hat, versteht darunter, aus jedem Fehler eines Agenten eine dauerhafte Verbesserung seiner Umgebung zu machen, damit der Fehler nicht wiederkehrt.'
A[172] = A[173] = A[175] = None
A[374] = 'Die praktische Umsetzung steht in Anhang D: Arbeitsumgebung und Skills in @sec-d-arbeitsumgebung, eigene Quellen in @sec-d-quellen, Agenten für die akademische Suche mit ihren Kontrollpunkten in @sec-d-agenten, automatisierte Abläufe in @sec-d-workflows; wie Studierende eine solche Quellenanbindung mit Unternehmen selbst aufbauen, zeigt @sec-fall-unternehmen.'
A[375] = None
A[103] = None   # Russell-Satz (Architektur/Programm) entfällt
A[92] = '::: {.tabelle-scroll}\n' + A[92]; A[99] = A[99] + '\n:::'   # Fuhrwerk-Tabelle scrollbar (390 px)
A[547] = '::: {.tabelle-scroll}\n' + A[547]; A[557] = A[557] + '\n:::'   # Modellstand-Tabelle scrollbar (390 px)
A[210] = 'Sie führt in acht Schritten vom Satz „Die Bank steht unter einem Baum.“ zum nächsten Wort.'
def T(s): return s.strip('\n')
QR = 'QR-Code scannen oder <https://th-koln-bartnik.github.io/genai4teaching/interactions/{0}> aufrufen.'

teile = [
# ---------------- Kapitelkopf ----------------
T('# Grundbegriffe und vier Kompetenzen {#sec-grundbegriffe}'), L(2, 14),
L(27, 31), L(15, 19), L(33, 37), L(21, 25), L(38, 38),            # Einschätzungen in Lesereihenfolge
T(r'''
::: {.callout-note .lernziele title="Lernziele: Nach diesem Kapitel können Sie …"}
1. das 4D-Modell als Ordnung für die Arbeit mit KI erklären und Modell, Harness und Agent abgrenzen;
2. mit der Jagged Frontier begründen, welche Aufgaben einer Lehrveranstaltung an die KI gehen, und dafür Setup (LLM, RAG, Agent), Modell und Arbeitsweise wählen (Delegation);
3. einen Prompt aus Rolle, Aufgabe, Format und Beispielen bauen und verbreitete Prompt-Tricks als wirkungslos erkennen (Description);
4. in Laiensprache erklären, warum Sprachmodelle halluzinieren, Ergebnisse prüfen und Verantwortung, Offenlegung und Energiebedarf einordnen (Discernment, Diligence).

*Die Kernaussagen am Kapitelende sind nach diesen vier Zielen geordnet. Die Vertiefung zur Technik in @sec-vertiefung setzen sie nicht voraus; sie kann übersprungen werden.*
:::
'''),
# ---------------- 2.1 Vier Kompetenzen ----------------
T(r'''
## Mit KI arbeiten: vier Kompetenzen {#sec-schemas}

Wer mit KI arbeitet, trifft vier Arten von Entscheidungen.
Vor dem Prompt steht die Frage, was überhaupt an die KI geht, dann die Beschreibung der Aufgabe, nach der Antwort die Prüfung des Ergebnisses und über allem die Verantwortung dafür.
Ein Schema, das diese Schritte ordnet, macht aus einer Sammlung von Tipps eine Arbeitsweise, und weil es keine Werkzeuge nennt, übersteht es den nächsten Modellwechsel.
Dieses Kapitel folgt dem Schema: Nach den Grundbegriffen in @sec-definitionen beantwortet jeder Abschnitt eine der vier Fragen, und die Technik im Inneren der Modelle steht am Ende als Vertiefung.
'''),                                                              # N2
L(870, 884),                                                       # 4D-Definition und Tabelle
T(r'''
Dakan und Feller nennen die vier D ausdrücklich vernetzte Kompetenzen, keine Reihenfolge [@dakan2025].
In ihrem Kurs für Lehrende verbinden sie die vier aber zu zwei Schleifen [@dakan2025teaching], und daraus baut dieses Buch einen Kreislauf[ (@fig-4d-kreislauf)]{.content-visible unless-format="html"}[, den die Abbildung unten zum Anklicken zeigt]{.content-visible when-format="html"}.
Die äußere Schleife zwischen **Delegation und Diligence** ist strategisch und läuft einmal je Vorhaben: Was soll die KI übernehmen, und welche Pflichten folgen daraus?
Sie läuft in beide Richtungen, denn eine Pflicht zur Offenlegung oder zur Prüfung verändert, was man sinnvoll abgibt.
Die innere Schleife zwischen **Description und Discernment** dreht sich in jedem Arbeitsgang viele Male: beschreiben, erzeugen lassen, prüfen, nachbessern.
Das Buch liest die vier D damit als Stufen eines Arbeitsablaufs; es folgt der Lehrpraxis der Autoren, nicht dem Wortlaut ihrer Definition.
'''),                                                              # N4
L(899, 909),
T(r'''
### Wie dieses Kapitel und das Buch das Schema nutzen {#sec-4d-nutzung}

In diesem Kapitel tragen die vier Hauptabschnitte nach den Grundbegriffen je eine der vier Kompetenzen im Titel.
Im übrigen Buch endet jede der vier Rollen in @sec-szenarien mit einem Absatz, der den Kreislauf für diese Rolle durchläuft und die Stufe benennt, an der er am ehesten reißt; die Übungen in @sec-d-modus tragen je eine 4D-Tabelle, und die Prompt-Sammlung in @sec-prompts liefert Material für die Stufe Description.

```{=html}
<span id="sec-schemas-rahmen"></span>
```

::::: {.callout-note title="Warum AI Fluency?"}
Artikel 4 der KI-Verordnung verpflichtet Hochschulen, die KI-Systeme bereitstellen, zu Maßnahmen für die KI-Kompetenz ihres Personals, sagt aber nicht, worin diese Kompetenz besteht; der Digital-Omnibus vom Juli 2026 hat die Pflicht entschärft und die Definition nicht nachgeliefert [@eu2024aiact; @eu2026omnibus] (@sec-ki-vo).
Die Lücke füllen Kompetenzrahmen; einen Überblick über die Forschung zu *AI Literacy* gibt @pinski2024literacy.
Von fünf neueren Rahmen für die Hochschullehre[ (@tbl-kompetenzrahmen)]{.content-visible when-format="html"}[, die die Online-Fassung vergleicht,]{.content-visible unless-format="html"} arbeitet dieses Buch mit *AI Fluency* von Rick Dakan und Joseph Feller: Es ordnet nach dem Arbeitsprozess, nennt keine Werkzeuge und führt als einziger die Verantwortung gegenüber Dritten als eigene Kompetenz.
Alle fünf verlangen, dass Lernende KI-Ergebnisse kritisch beurteilen, kaum einer sagt, wie; die Prüfmethoden liefert dieses Buch dort nach, wo sie gebraucht werden (@sec-hallucinations).
Die Übersetzungen der Definitionen folgen der Fassung der irischen Hochschulbehörde HEA, die wie dieses Buch unter der Lizenz CC BY-SA 4.0 steht.

:::: {.content-visible when-format="html"}
'''),                                                              # N1
L(846, 856),
T(r'''
::::

:::: {.content-visible unless-format="html"}
![Vergleich der fünf Kompetenzrahmen (Zielgruppe, Ordnungsprinzip, Entstehung) in der Online-Fassung: QR-Code scannen oder <https://th-koln-bartnik.github.io/genai4teaching/kapitel02.html#sec-schemas-rahmen> aufrufen.](images/qr/qr-kompetenzrahmen.png){#fig-qr-kompetenzrahmen width="32%" fig-align="center"}
::::
:::::
'''),
# ---------------- 2.2 Grundbegriffe ----------------
T(r'''
## Grundbegriffe: Modell, Harness und Agent {#sec-definitionen}

Dieser Abschnitt klärt die drei Begriffe, ohne die keine der vier Fragen zu stellen ist, und zwar nur so tief, wie es für die didaktische Nutzung nötig ist.
'''),                                                              # N2
L(53, 68),                                                         # Lernspiel Grundbegriffe
T(r'''
### Was ein Sprachmodell tut {#sec-sprachmodell}

Generative KI ist ein Teilgebiet der KI, also des Versuchs, menschliches Denken und Verhalten nachzubilden [@russell2021]; dieses Buch verwendet KI, generative KI (GenAI) und Sprachmodell weitgehend synonym.
Ein **Sprachmodell** (*Large Language Model*, LLM) ist ein Rechensystem, das das nächste Wort in einer Wortkette vorhersagt, gestützt auf die Wörter davor [@jurafsky2025, Kap. 7, S. 2]; generativ heißt es, weil es auf diese Weise Texte erzeugt, die es vorher nicht gab.
Dabei prüft es keine Wahrheit, sondern schreibt fort, was wahrscheinlich ist; daraus folgen seine Stärken ebenso wie seine erfundenen Quellen (@sec-hallucinations).
Wie aus Text Zahlen und aus Zahlen das nächste Wort werden, zeigt die Vertiefung in @sec-gpt-bedeutung.

### Was sich seit 2022 geändert hat {#sec-harness}

Wer 2022 mit ChatGPT gearbeitet hat und 2026 einem Agenten einen Rechercheauftrag gibt, erlebt zwei verschiedene Werkzeuge.
Am Prinzip des Sprachmodells hat sich dabei wenig geändert; gewachsen ist vor allem die Schicht um das Modell herum.
Sie hat Werkzeuge und Gedächtnis hinzugewonnen, und aus beiden folgt ein Drittes: Das Modell darf mehr Arbeitsschritte selbst wählen.
Für diese Schicht setzt sich der Name **Harness** durch, für das, was beim Arbeiten aus Modell und Harness entsteht, der Name **Agent**.
Die folgende Animation baut den Weg in acht Schritten auf.
'''),                                                              # N34, N29
L(78, 85),
T('![Gewachsen ist die Schicht um das Modell: Werkzeuge und Gedächtnis kommen hinzu, daraus folgt eine Arbeitsschleife, über deren Schritte das Modell selbst entscheidet; Freigaben und Haltepunkte im Harness regeln seinen Handlungsspielraum (schematische Darstellung). Die Fassung zum Durchklicken: ' + QR.format('harness-schichten.html') + '](images/druck/harness-schichten-qr.png){#fig-harness-schichten width="100%" fig-pos="htbp"}'),  # N38
L(87, 104),
T(r'''
**Ausgangspunkt: das Modell allein.**
Um 2022 war das Chatfenster die ganze Schnittstelle: Das Modell lieferte Text, Nachrechnen, Quellensuche und Prüfen blieben bei uns, und mit dem Fenster vergaß es das Gespräch.
Im Bild des Fuhrwerks war es ein Pferd ohne Geschirr.

**Erster Ermöglicher: Werkzeuge.**
Statt einer Antwort schreibt das Modell eine strukturierte Bitte, etwa „rechne 17 × 23“; ein gewöhnliches Programm führt sie aus und legt das Ergebnis zurück in den Text, den das Modell weiterschreibt.
Dass Sprachmodelle selbst lernen können, wann sich ein solcher Aufruf lohnt, zeigten @schick2023toolformer.
Seit Ende 2024 schließt das Model Context Protocol (MCP) beliebige Dienste nach demselben Muster an, so wie USB Drucker und Kameras [@anthropic2024mcp].
Ein **Werkzeug** ist also ein Programm, das das Modell anfordern, aber nicht selbst ausführen kann (Vertiefung: @sec-agenten-praxis).

**Zweiter Ermöglicher: Gedächtnis.**
RAG legt dem Modell passende Stellen aus eigenen Dokumenten vor [@lewis2020], die Kontextfenster sind von wenigen Seiten auf ganze Bücher gewachsen, und eine Anleitungsdatei trägt Regeln und Zwischenstände von einer Sitzung in die nächste (Vertiefung: @sec-agenten-gedaechtnis).

**Die Folge: Autonomie im Vorgehen.**
Mit Werkzeugen und Gedächtnis wird aus einem Durchgang eine Schleife: Das Modell plant einen Schritt, ruft ein Werkzeug auf, liest das Ergebnis und plant den nächsten; @yao2023react nennen dieses Wechselspiel aus Denken und Handeln ReAct.
@schluntz2024agents ziehen daraus die Grenze, die für dieses Buch gilt: In einem **Workflow** folgen Modell und Werkzeuge vorgegebenen Pfaden, ein **Agent** steuert seinen Ablauf und seine Werkzeugnutzung selbst.
Das Wort kommt vom lateinischen *agere*, handeln, in Gang bringen.
Wie weit diese Selbststeuerung reicht, misst METR als Zeithorizont [@kwa2025; s. @sec-capabilities].

„Autonom“ verlangt eine Einschränkung: Das griechische *autónomos* heißt, sich selbst das Gesetz (*nómos*) geben, und das tut ein Agent nicht, denn das Ziel setzt der Mensch.
Wir nennen solche Systeme deshalb **teilautonom**, wie die Normung des automatisierten Fahrens [@sae2021j3016], und sprechen von **Autonomie im Vorgehen**; „Autonomie der Lernenden“ meint dagegen die Fähigkeit, das eigene Lernen zu steuern [@holec1981].
'''),                                                              # N29, N5
L(138, 149),
T('![Wie selbstständig eine KI arbeitet, entscheiden die Menschen, die sie einsetzen: sechs Stufen von der Handkorrektur ohne KI bis zum Agenten, der eine Aufgabe allein erledigt (eigene Darstellung nach @morris2024, Tabelle 2; Beispiele aus der Hochschullehre ergänzt). Die Fassung zum Durchklicken: ' + QR.format('autonomiestufen.html') + '](images/druck/autonomiestufen-qr.png){#fig-autonomiestufen width="100%" fig-pos="htbp"}'),  # N38
L(151, 152),
T(r'''
**Der Name für das Gewachsene: Harness.**
Anthropic definiert den **Harness** als das System, das ein Modell als Agent handeln lässt: Er nimmt Eingaben entgegen, ruft Werkzeuge auf und gibt Ergebnisse zurück [@grace2026evals].
Das englische *harness* ist das Geschirr eines Zugpferds; dasselbe Pferd zieht mit anderem Geschirr einen Pflug oder eine Kutsche, und dasselbe Modell wird mit anderem Harness zum Lerntutor oder zum Karriereberater.
Google spricht von einer *Orchestrierungsschicht* [@wiesinger2024agents], OpenAI beim Programmieragenten Codex von Harness [@bolin2026codex], Anthropic vom „Gehirn“ aus Modell und Harness [@martin2026managed]; gemeint ist dasselbe Bauteil.
'''),                                                              # N6
L(161, 168),
T('![Drei Labore, ein Bauplan: Eine Schleife ruft das Modell immer wieder auf und lässt seine Werkzeugaufrufe ausführen, bis wieder der Mensch entscheidet. Jeder Harness enthält Annahmen darüber, was das Modell nicht kann (eigene Darstellung nach @wiesinger2024agents, @bolin2026codex und @martin2026managed; schematisch). Die Fassung zum Durchklicken: ' + QR.format('drei-labs-ein-bauplan.html') + '](images/druck/drei-labs-ein-bauplan-qr.png){#fig-drei-labs width="100%" fig-pos="htbp"}'),  # N38
L(170, 174), L(176, 176),                                          # N7: Satz mit @tbl-harness-wandel und Tabelle entfallen
T(r'''
Die Grenze zwischen Modell und Harness wandert allerdings: Jeder Harness enthält Annahmen darüber, was das Modell nicht allein kann, und bessere Modelle machen manche davon überflüssig [@martin2026managed]; Logan Kilpatrick von Google DeepMind sagt, das Modell fresse den Harness [@sequoia2026kilpatrick].
Die Aufgaben bleiben, gleich wer sie erledigt: Jemand muss Werkzeuge anschließen, Kontext auswählen und Haltepunkte setzen.

Die Fachbegriffe des ganzen Buches mit ihrer Herkunft stehen im [Glossar](glossar.qmd).
'''),                                                              # N8
# ---------------- 2.3 Delegation ----------------
T(r'''
## Delegation: Was übernimmt die KI? {#sec-delegation}

Delegation fragt, was der Mensch übernimmt und was die KI (@tbl-4d).
Die Antwort hat drei Teile, die den Unterkompetenzen des Modells entsprechen: wissen, was die Modelle können (@sec-capabilities), Setup und Modell kennen (@sec-patterns-usage, @sec-model-choice) und die Arbeit zwischen Mensch und KI verteilen (@sec-arbeitsweisen).
Den größten Teil des Harness liefert dabei der Hersteller; @bockeler2026harness nennt das den inneren Harness und stellt ihm den äußeren gegenüber, den die Nutzenden selbst bauen: Anleitungsdateien, Skills, eigene Wissensbasen und Prüfregeln.
An diesem äußeren Harness gestalten Lehrende und Studierende; ein Übungstutor (@sec-fall-tutor-bwl), ein Karriereberater (@sec-fall-job-buddy) und eine Quellenanbindung mit Praxispartnern (@sec-fall-unternehmen) laufen auf denselben großen Modellen und unterscheiden sich in Anleitung, Quellen und Grenzen.
Unsere Rolle verschiebt sich dabei: Wir setzen das Ziel, legen fest, wo der Agent anhält, und prüfen, was zurückkommt; OpenAI fasst das in den Leitsatz „Humans steer. Agents execute.“ [@lopopolo2026harness].

### Was die Modelle können – und was nicht {#sec-capabilities}

Was Sprachmodelle können, ist sehr uneinheitlich und **verändert sich schnell**.
Mollick und Kollegen sprechen von einer „**Jagged Technological Frontier**“, einer zerklüfteten Technik-Grenze: Zwei Aufgaben von ähnlicher Schwierigkeit für Menschen können auf verschiedenen Seiten der Grenze liegen; die eine löst die KI auf menschlichem Niveau oder besser, an der anderen scheitert sie [@dellacqua2023].
In ihrem Experiment mit Consultants brachte KI bei den meisten von 18 Beratungsaufgaben große Vorteile; bei einer gezielt außerhalb der Grenze gewählten Aufgabe lagen die Consultants mit KI dagegen 19 Prozentpunkte seltener richtig als ohne [@dellacqua2023].
'''),                                                              # N9
L(602, 608),                                                       # Prüfkasten ez-k2-3; N20: Liste entfällt
T('Zugleich wächst, was sich an die Modelle delegieren lässt.'),
L(621, 629),
T('![KI-Agenten bewältigen immer längere Aufgaben: 50-%-Zeithorizont der Modelle 2019–2026 auf logarithmischer Achse, mit Trend ab 2023 (gestrichelt) und Lehraufgaben ähnlicher Dauer zur Orientierung (eigene Zuordnung). Über 16 Stunden ist die Messung nicht mehr verlässlich. Daten: METR (2026), Stand 8. Mai 2026. Interaktive Fassung: ' + QR.format('ki-entwicklung.html?zeige=zeithorizont') + '](images/druck/ki-zeithorizont-qr.png){#fig-performance width="100%" fig-pos="htbp"}'),  # N38
L(631, 631),
L(637, 640),                                                       # N21: Peer-Review, Turing-Test, Callcenter entfallen
T(r'''
Wie schnell die Preise fallen, zeigt eine Auswertung von Epoch AI.
Die niedrigsten Kosten, mit denen ein Modell 75 % der Fragen des GPQA Diamond richtig beantwortet, einer Sammlung von 198 naturwissenschaftlichen Multiple-Choice-Fragen auf Promotionsniveau, sanken von 29,9 US-Cent je Frage im Januar 2025 auf 0,04 Cent im Juli 2026, um den Faktor 725 oder 99,9 % in 17 Monaten [@emberson2026].
Als mögliche Gründe nennt Epoch AI, ohne sie einzeln nachzuweisen, kleinere und je Token billigere Basismodelle unter den Reasoning-Modellen, weniger Denk-Token je Frage und den Wettbewerb, der den Aufpreis des ersten Modells auf einem Leistungsniveau rasch abschmelzen lässt [@emberson2026].
'''),                                                              # N22
L(646, 653),
T('![Expertenwissen wird 725-mal billiger: niedrigste Kosten je Frage, mit denen ein Modell 75 % des GPQA Diamond richtig beantwortet, Januar 2025 bis Juli 2026 (logarithmische Achse). Darunter als Raster: Ein Kästchen ist eine Frage zum o3-Preis vom Januar 2025, gefüllt ist, was 30 Cent zum jeweiligen Zeitpunkt kaufen; der letzte Sprung (−66 %) bringt mit 479 Kästchen mehr als alle früheren zusammen. Rasterdarstellung nach einer Idee von @mollick2026charts. Daten: Emberson & Roodman (2026), Epoch AI. Interaktive Fassung: ' + QR.format('ki-entwicklung.html?zeige=kosten') + '](images/druck/ki-kosten-qr.png){#fig-ki-kosten width="100%" fig-pos="htbp"}'),  # N38
L(655, 670),
L(673, 673),                                                       # N23: Satz „exponentielles Wachstum“ entfällt
T(r'''
### Welches Setup: LLM, RAG oder Agent? {#sec-patterns-usage}

Schlau sein allein reicht nicht: Auch das klügste Modell hilft nur, wenn es den **Kontext unserer Aufgabe kennt**.
Diesen Kontext geben wir ihm auf zwei Arten, bildlich gesprochen mit ein paar **Büchern oder einem Werkzeugkoffer** [@huyen2025, Kapitel 6].
Bei **RAG (Retrieval-Augmented Generation)** holt das System passende Stellen aus zusätzlichen Dokumenten wie Fachtexten, Statistiken oder Gesetzesbüchern und legt sie dem Modell zur Antwort vor: Die KI ist das Gehirn, die Dokumentsammlung das Bücherregal.
Ein Agent beschafft sich Informationen dagegen selbst, mit Werkzeugen wie der Websuche.
Die Unterschiede zwischen dem reinen Sprachmodell, dem Modell mit Bücherregal und dem Modell mit Werkzeugkoffer übt das folgende Spiel.
'''),                                                              # N11
L(255, 273),
T(r'''
Die drei Muster liegen auf einer Skala, und an ihr zählt, wer den Ablauf bestimmt: in einem Workflow das Programm, in einem Agenten das Modell [@roucher2024smolagents].
Ein Chatbot, der vor jeder Antwort passende Stellen aus den Skripten holt, bleibt auf der untersten Stufe, denn die Suche läuft immer, gleich was das Modell schreibt.
RAG macht das Modell kundiger, nicht selbstständiger.
'''),                                                              # N11
L(278, 293),
T('![Vom Chatbot zum Agenten wächst vor allem der Spielraum des Modells über den Ablauf: Im Chatbot und beim festen Abruf eigener Quellen ändert die Antwort nichts am Ablauf (☆☆☆), als Router wählt das Modell einen Abzweig (★☆☆), mit Werkzeugen das Werkzeug (★★☆), in der Schleife aus Denken, Handeln und Beobachten den nächsten Schritt (★★★) (Skala nach @roucher2024smolagents, Bildfolge nach @grootendorst2025agents; schematisch). Die Fassung zum Durchklicken: ' + QR.format('chatbot-zu-agent.html') + '](images/druck/chatbot-zu-agent-qr.png){#fig-chatbot-zu-agent width="100%" fig-pos="htbp"}'),  # N38
L(295, 297),
T(r'''
### Welches Modell? {#sec-model-choice}

**Was für Sprachmodelle gibt es?** Hinter der Flut an Produktnamen stehen wenige Klassen, und zwei Fragen sortieren sie: Wie leistungsfähig ist das Modell, und wer hat die Daten in der Hand (@fig-modellklassen)? Jedes große KI-Labor bietet ein **großes Frontier-Modell** an und daneben **kleine Varianten**, die schneller und billiger sind und in den kostenlosen Zugängen den Standard stellen. Die großen Modelle sind **Reasoning-Modelle**: Sie denken vor der Antwort in mehreren Schritten nach, und wie lange, lässt sich als Denkstufe einstellen. **Offene Modelle** legen ihre Gewichte offen; Hochschulen betreiben sie auf eigenen Rechnern, und die Daten bleiben im Haus. Die besten offenen Modelle lagen 2026 im Mittel vier Monate hinter der Frontier [@edwards2026openclosed], Modelle für eine einzelne Grafikkarte sechs bis zwölf Monate [@somala2025consumergpu].
'''),                                                              # N30
L(520, 522),
T(r'''
**Was kauft ein Abonnement?** Die großen Anbieter staffeln ihre Preise in drei Stufen: kostenlos, rund 20 € und rund 100 € im Monat.[^preisstufen] Der Schritt auf 20 € öffnet das große Modell mit hoher Denkstufe, den Recherche-Agenten und die Arbeit in Projekten; der Schritt auf 100 € kauft kaum ein klügeres Modell, sondern Menge, etwa das Fünffache an Nachrichten und Agentenzeit (@fig-abo-stufen) [@mollick2026guide]. Wer beurteilen will, was die Modelle können, etwa für die eigenen Prüfungen, bezahlt deshalb ein bis zwei Monate lang die 20-€-Stufe; die kostenlosen Zugänge zeigen ein zu schwaches Bild.
'''),                                                              # N30
L(524, 528),
T(r'''
[^preisstufen]: Stand Oktober 2026, Monatspreise einschließlich Mehrwertsteuer. 20-€-Stufe: ChatGPT Plus 23 €, Google AI Pro 21,99 €, Claude Pro 20 US-$ zuzüglich Steuer; 100-€-Stufe: ChatGPT Pro 103 €, Google AI Ultra 99,99 €, Claude Max 100 US-$ zuzüglich Steuer; weitere Stufen und Mistral in @tbl-modellstand. Ohne persönliches Abo geht es über den Hochschulzugang, über die API mit Abrechnung nach Verbrauch (s. den Tutor-Kosten-Rechner in @sec-capabilities) oder mit offenen Modellen auf eigener Hardware. Quellen: @openai2026pricing, @anthropic2026pricing, @google2026aiplans, @mistral2026pricing.

**Kostenfreie Zugänge über die Hochschule.** Hochschulen und Länder stellen Lehrenden Modelle beider Klassen bereit, die GWDG etwa über die Academic Cloud (https://chat-ai.academiccloud.de/), die TH Köln über das THKI-Lab (https://ki.th-koeln.de/login.php). In Nordrhein-Westfalen ist **KI:connect.nrw** der Zugang der ersten Wahl (https://chat.kiconnect.nrw/): Anmeldung mit dem Hochschul-Login, Frontier-Modelle über Verträge des Landes, offene Modelle auf landeseigenen Rechnern, Modellwechsel in jedem Chat und ein API-Zugang für eigene Werkzeuge [@mkw2025kiconnect; @kiconnect2026inferenz; @persike2025apikeys]. Eine API (*Application Programming Interface*) ist die Schnittstelle, über die Programme statt Menschen mit dem Modell sprechen (@sec-d-quellen, @sec-d-tutoren). Vor dem Einsatz lohnt der Blick, welche Modellgeneration hinter einem Hochschulzugang steht: Wer eine ältere Generation oder eine kleine Variante nutzt, fährt mit dem Fahrrad auf der Autobahn und bekommt ein falsches Bild davon, was die Modelle können.
'''),                                                              # N30, N25
L(532, 572),
T(':::::: {.content-visible when-format="html"}'),                 # N18: Kurs-Bot nur online
L(573, 583), L(587, 587),
T(r'''
::::::

[Wie ein Kurs-Bot über die Materialien vieler Lehrveranstaltungen aussieht und warum er erst durch begleiteten Einsatz in der Veranstaltung wirkt, zeigt ein Anwendungsbeispiel aus Lübeck in der Online-Fassung dieses Abschnitts [@tobor2026usecases].]{.content-visible unless-format="html"}
'''),                                                              # N19: LM-Arena → Modellübersicht
T(r'''
### Wer macht was: Arbeitsweisen von Centaur bis dunkle Fabrik {#sec-arbeitsweisen}

Wer welchen Schritt einer Aufgabe übernimmt, ist die dritte Delegationsfrage.
Das 4D-Modell unterscheidet drei Formen der Zusammenarbeit, die es *Modalitäten* nennt [@dakan2025]: In der **Automation** führt die KI eine Aufgabe aus, die der Mensch festgelegt hat; in der **Augmentation** erledigen Mensch und KI sie gemeinsam und im Wechsel; in der **Agency** richtet der Mensch eine KI ein, die später selbstständig handelt, oft für andere (nicht zu verwechseln mit den Formen des Aufgabenmodells in @sec-hiwi).
Der Hiwi aus @sec-szenarien arbeitet in der Automation, der Copilot in der Augmentation, Tutor und Simulator in der Agency.

Feiner unterscheidet die Studie zur Jagged Frontier [@dellacqua2023]. Der **Centaur** teilt die Aufgabe: Er überlässt der KI die Teilprobleme innerhalb der Grenze und konzentriert sich selbst auf den Rest.
Der **Cyborg** arbeitet in ständigem Wechsel mit der KI und nutzt ihre Rückmeldungen laufend.
Beide setzen voraus, dass der Mensch die Stärken und Schwächen des Modells kennt.
Eine spätere Studie des weitgehend selben Teams mit 776 Beschäftigten von Procter & Gamble fand, dass Einzelne mit KI-Unterstützung teils das Leistungsniveau ganzer Teams erreichten; die KI wirkte als „**Cybernetic Teammate**“ [@dellacqua2025].

Mit stärkeren Agenten kommen Arbeitsweisen hinzu, in denen der Mensch nicht mehr in jeder Schleife sitzt.
Als **Beschwörer** (*conjurer*) ruft er Agenten bei Bedarf herbei, weist ihnen Arbeit zu und bewertet, was zurückkommt, ohne den Weg dorthin zu begleiten.
Mollick hält das für die leistungsfähigste Arbeitsweise, die aber neue Risiken bringt, weil niemand mehr genau sieht, wie die KI zu ihren Ergebnissen kommt [@mollick2026charts].
Am Ende der Reihe steht die **dunkle Fabrik** (*dark factory*): Menschen legen fest, was entstehen soll, Maschinen führen aus und prüfen; das trägt nur dort, wo eine Maschine feststellen kann, ob ein Ergebnis stimmt, etwa bei Software mit automatischen Tests [@mollick2026agents].
Dazwischen liegt die **Dämmerfabrik** (*twilight factory*): Agenten arbeiten, aber ein vermittelnder Agent holt Menschen hinzu, wenn eine Freigabe nötig ist, Fachwissen fehlt, die Ideen zu gleichförmig werden oder eine Entscheidung interessant ist [@mollick2026agents].
Für die Lehre wiegt der letzte Anlass am schwersten: Wer nur Freigaben und Ausnahmen bearbeitet, übt nie das Urteilen, das eine gute Freigabe voraussetzt, und die Fachleute, die künftig prüfen sollen, wachsen nicht nach [@mollick2026agents].
Das folgende Schema ordnet die fünf Arbeitsweisen den Schritten einer Aufgabe zu.
'''),                                                              # N3, N25, N31
L(688, 698),
T(r'''
Das folgende Durchspiel zeigt die fünf Arbeitsweisen an einer einzigen Aufgabe, einem Übungsblatt zur optimalen Bestellmenge mit vier Gruppenvarianten.
Als Centaur lässt die Professorin nur den Aufgabentext formulieren, als Cyborg entwickelt sie die Aufgabe in zwölf kurzen Wechseln mit der KI.
Als Beschwörer schreibt sie einen einzigen Auftrag; ein **Orchestrator**, ein Programm, das eine Aufgabe zerlegt, verteilt und die Teile wieder zusammenführt, beauftragt **Unteragenten** für die Zahlen, die Texte und die Prüfung [@schluntz2024agents; @anthropic2025research] (griechisch *orchēstra*, der Tanzplatz vor der Bühne; der Orchestrator ordnet, wer wann auftritt).
In der Dämmerfabrik fragt ein Vermittler-Agent die Professorin bei den vier Anlässen; in der dunklen Fabrik bestehen alle Blätter die maschinelle Prüfung und werden doch still leichter, weil der Prüfer misst, ob die Lösungen stimmen, nicht ob die Aufgaben fordern.
Die Online-Fassung spielt zwei weitere Fälle durch: Rückmeldungen auf Projektberichte, bei denen die KI-Verordnung menschliche Aufsicht verlangt [@eu2024aiact, Anhang III Nr. 3 lit. b] (@sec-ki-vo), und die Aktualisierung einer Vorlesung.
Die Denkspuren darin sind angenähert; auch echte Denkspuren geben nicht verlässlich wieder, wie ein Modell zu seinem Ergebnis kommt [@chen2025reasoning].
'''),                                                              # N24
L(711, 718),
T('![Dieselbe Aufgabe in fünf Arbeitsweisen: Je mehr die KI übernimmt, desto weniger spricht der Mensch und desto mehr sprechen die Agenten miteinander. Dialoge nachgestellt und gekürzt, Denkspuren angenähert, Zähler als Lehrmodell (Muster nach @schluntz2024agents). Interaktive Fassung mit zwei weiteren Fällen: ' + QR.format('ki-arbeitsweisen-durchspiel.html') + '](images/druck/ki-durchspiel-qr.png){#fig-ki-durchspiel width="100%" fig-pos="htbp"}'),  # N38
L(720, 721),
L(917, 928),                                                       # Kasten Delegation an einem Berufsprofil
# ---------------- 2.4 Description ----------------
T(r'''
## Description: Wie sage ich der KI, was ich will? {#sec-access}

Description fragt, wie wir der KI klar sagen, was wir wollen (@tbl-4d): welches Ergebnis, welche Art der Zusammenarbeit und welches Verhalten.
Die Unterabschnitte führen vom Zugang über die Bausteine eines Prompts bis zu den Prompts für die Lehre.
'''),
L(731, 739),
T(r'''
**Wie** spreche ich mit dem LLM?
In einem modernen Märchen von N. K. Jemisin erfüllen gefangene Götter ihren Wächtern jeden Wunsch, sind ihnen aber nicht wohlgesonnen: Den Baum, der im Weg liegt, kann man schließlich auch durch einen Vulkanausbruch beseitigen.
In dieser neuen Midas-Erzählung wird Präzision zentral, und dasselbe raten die wichtigsten Empfehlungen zum Prompting.

Ein **Prompt** ist die Eingabe, die an ein Sprachmodell geht, um eine bestimmte Antwort zu erhalten; wie er formuliert ist, entscheidet oft über die Qualität der Antwort.
Die Kunst, solche Eingaben zu bauen, heißt **Prompt Engineering** [@berryman2025].
Eine neuere Analyse unterscheidet **drei Effekte** der Prompt-Gestaltung [@vallverdu2025]: Über Prompts steuern wir den Inhalt der Aufgabe (**operativ**), die „Aufmerksamkeit“ des Sprachmodells (**epistemisch**) und die Risiken des Ergebnisses (**sozio-ethisch**).
Stärkere Sprachmodelle übernehmen einen Teil dieser Steuerung; in agentischen Workflows mit mehreren Agenten rückt sie aber nur auf eine höhere Ebene [s. etwa @gottweis2025 für ein Beispiel].
'''),                                                              # N26
L(755, 759),
T('Die Chain-of-Thought-Methode lässt das Modell seine Überlegungen Schritt für Schritt zeigen; so können wir besser nachsteuern und das Ergebnis an unsere Ziele anpassen.'),  # N35
L(763, 805),
T(r'''
Wie ein neuer Sportwagen bringen **stärkere Modelle mit den größeren Fähigkeiten auch neue Anfälligkeiten**.
Sie gehen selbst schrittweise vor; wer es ihnen trotzdem vorschreibt, senkt teils die Leistung, weil er ein starkes Modell zu unnötigen Denkschritten zwingt, statt es aus seinem Vorwissen antworten zu lassen [@meincke2025a].
Und weil sie sich genauer an Anweisungen halten, folgen sie auch falschen genauer [@anthropic2025c; @google2025].
'''),                                                              # N27
L(810, 812),
T(r'''
**Didaktische Prompts sollen den Studierenden das Leben gezielt schwer machen.** Für die Lehre ergänzen wir Prompts um didaktische Hürden, die etwa verhindern, dass sofort eine Lösung erscheint, denn eigenes Nachdenken in Fragen und sokratischem Dialog hilft, das Gelernte zu behalten [@roediger2012].
Wie das geht, zeigen @sec-didaktik und @sec-szenarien; viele konkrete Prompts und Aufgabenstellungen sammelt Anhang B (@sec-prompts).
'''),                                                              # N35
L(817, 833),
# ---------------- 2.5 Discernment ----------------
T(r'''
## Discernment: Wie beurteile ich, was die KI liefert? {#sec-hallucinations}

Discernment fragt, wie wir beurteilen, was die KI liefert (@tbl-4d).
Die Grundlage ist ein nüchterner Befund: Ein Sprachmodell prüft keine Wahrheit, und über sein eigenes Vorgehen gibt es nicht verlässlich Auskunft.

**Können wir das Modell fragen, wie es zu einem Ergebnis gekommen ist?** Eher nicht.
Eine Studie des KI-Labors Anthropic, die mit neuen Methoden in ein Modell hineinschaut, fand bei einfachen Rechnungen wie der Quadratwurzel von 0,64 klare interne Rechenschritte; bei schwierigeren, etwa dem Kosinus einer großen Zahl, gab das Modell Rechnungen an, für die keine internen Prozesse erkennbar waren [@lindsey2025].
Es konstruiert dann plausible, aber unbegründete Erklärungen, ein Verhalten, das als „motiviertes Denken“ (*motivated reasoning*) bezeichnet wird.
Weitere Befunde dieser Studie stellt die Vertiefung vor (@sec-blick-ins-modell).

**Was kann zu Halluzinationen führen?** Die erfundene Literaturangabe aus dem Kapitelauftakt hat einen erkennbaren Mechanismus.
Im Modell ist standardmäßig ein Schaltkreis aktiv, der die Antwort verweigert, wenn Informationen fehlen; erkennt das Modell einen bekannten Namen, hemmt ein konkurrierender Mechanismus diese Verweigerung und gibt die Antwort frei.
Kennt das Modell den Namen, aber nicht die gesuchte Tatsache, entsteht eine Halluzination: Nach einem Fachartikel des bekannten Forschers Karpathy gefragt, nennt es einen erfundenen Titel, bei weniger bekannten Namen sagt es, die Antwort nicht zu kennen [@lindsey2025].

Wie man Ergebnisse prüft, zeigt dieses Buch dort, wo es gebraucht wird: in der Prüfregel der Modellwahl (@sec-model-choice), beim Tutor (@sec-tutor-betrieb) und bei KI-gebauten Simulationen (@sec-widget-pruefen).
'''),                                                              # N16, N17, N37
L(510, 516),
# ---------------- 2.6 Diligence ----------------
T(r'''
## Diligence: Verantwortung, Offenlegung, Ressourcen {#sec-diligence}

Diligence fragt, wie wir KI verantwortlich und offen einsetzen (@tbl-4d): mit Sorgfalt beim Erzeugen, mit Offenlegung gegenüber anderen und mit Prüfung, bevor ein Ergebnis oder ein System freigegeben wird.

Die Technik verschiebt die Verantwortung, sie nimmt sie nicht ab.
Das zeigt das Gedächtnis eines Agenten (@sec-agenten-gedaechtnis): Ein Fehler, der einmal dort steht, wirkt in allen folgenden Sitzungen fort, die menschliche Prüfung vorgeschlagener Änderungen wird leicht zum Abnicken, und eine Versionsgeschichte zeigt, *wer* etwas geändert hat, nicht, *ob* es stimmt [@bridgwater2026dream].
Wer mehr Änderungen erzeugen lässt, als er lesen kann, hat kein geprüftes Gedächtnis, sondern ein ungeprüftes mit Freigabestempel.

Offenlegung heißt, zu sagen, wo KI mitgearbeitet hat: gegenüber Studierenden, wenn Material oder Feedback mit KI entsteht, und gegenüber allen, die mit KI erzeugte Texte, Bilder oder Stimmen lesen, sehen oder hören.
Welche Pflichten die KI-Verordnung dafür vorsieht, steht in @sec-ki-vo.

### Ressourcenverbrauch der Modelle {#sec-energy}

Studierende fragen regelmäßig nach dem Energiehunger der KI, und zwischen „Weltuntergang“ und „keinerlei Problem“ lohnt ein Blick auf die Größenordnungen.
Eine einzelne Textanfrage ist billig: Schätzungen von 2025 liegen zwischen 0,3 Wattstunden für ein großes Chat-Modell und 0,03 Wattstunden für kleine Modelle, also etwa so viel wie zehn Sekunden Video-Streaming [@odonnell2025; @you2025; @elsworth2025].
Teuer sind die komplexen Aufträge: Ein hochwertiges Video von fünf Sekunden kann rund eine Kilowattstunde kosten, so viel wie eine Stunde Mikrowelle, und weil die Nutzerzahlen schneller wachsen als die Effizienz, übersteigt der Energiebedarf der Anfragen inzwischen den des Trainings [@odonnell2025; @spencer2025].
Rechenzentren und KI machten 2024 nach Schätzungen der IEA nur drei bis fünf Prozent des globalen Energieverbrauchs aus [@ritchie2024; @spencer2024]; Sorge bereitet die Prognose, nach der sich der Verbrauch der Rechenzentren bis 2030 verdreifachen könnte, oft aus fossilen Quellen [@odonnell2025; @spencer2025].
Gefordert ist deshalb Transparenz der Anbieter über ihren Energiebedarf, damit Politik und Nutzer die Kosten abschätzen können [@odonnell2025].
Für die Lehre heißt das: Eine Seminarsitzung mit Chat-Nutzung fällt energetisch nicht ins Gewicht; wer Bilder, Videos oder lange Agentenläufe erzeugen lässt, sollte das wissen und gegenüber den Studierenden benennen.
'''),                                                              # N15, N36
L(938, 948),
# ---------------- 2.7 Vertiefung ----------------
T(r'''
## Vertiefung: Was im Modell und im Harness passiert {#sec-vertiefung}

*Dieser Abschnitt vertieft die Technik hinter den Grundbegriffen und kann übersprungen werden; die Kernaussagen setzen ihn nicht voraus.*
Er zeigt, wie ein Modell rechnet, was die Forschung in seinem Inneren findet und wie Skills, Werkzeuganschluss und Gedächtnis den Harness eines Agenten ausfüllen.

### Tokens, Zahlen, Aufmerksamkeit {#sec-gpt-bedeutung}
'''),
L(206, 222),
T(r'''
**Was heißt hier GPT?** Die drei Buchstaben stehen für *Generative Pre-trained Transformer*.
*Pre-trained* heißt, dass das Modell zuerst mit riesigen Textmengen **vortrainiert** wurde (**Pretraining**), und zwar *selbstüberwacht* (*self-supervised*): Die Aufgabe, das jeweils nächste Token vorherzusagen, steckt im Text selbst, niemand muss Lösungen beschriften.
Danach bewerten Menschen verschiedene Antworten des Modells, und es lernt, die bevorzugten zu erzeugen (*Reinforcement Learning from Human Feedback*, **RLHF**); so wird aus einem Textfortsetzer ein Assistent.
*Transformer* heißt das Rechenverfahren im Kern, und sein Herzstück ist die **Aufmerksamkeit** (*Attention*): Für jedes Token gewichtet das Modell, welche anderen Tokens für seine Bedeutung am wichtigsten sind; so zieht „Baum“ im Beispielsatz die „Bank“ in Richtung Park, wie Schritt 6 der Animation zeigt.
Der Fachartikel von 2017, der das Verfahren vorstellte, trägt den knappen Titel „Attention is all you need“ [@vaswani2017].
'''),                                                              # N10
L(245, 245),                                                       # N34
T(r'''
### Blick ins Modell {#sec-blick-ins-modell}

Eine Studie des KI-Labors Anthropic hat mit neuen Methoden nachgezeichnet, was in einem Sprachmodell zwischen Eingabe und Antwort geschieht [@lindsey2025].
Das Modell nutzt **einen gemeinsamen Bedeutungsraum für verschiedene Sprachen**: Bei der Frage nach dem „Gegenteil von klein“ auf Englisch, Französisch oder Chinesisch aktivieren sich dieselben internen Merkmale für „Kleinheit“ und „Gegenteil“, und erst spät wird die Antwort in die Zielsprache übersetzt.
Es **plant mehrere Wörter im Voraus**: Soll eine Gedichtzeile auf ein bestimmtes Reimwort enden, wählt es dieses Wort früh und baut die Zeile darauf hin.
Und es **rechnet auf parallelen Pfaden**: Bei einer Addition schätzt ein Pfad die Größenordnung, ein anderer bestimmt die letzte Ziffer; schaltet man diesen ab, bleibt nur die grobe Schätzung.

Zwischen Eingabe und nächstem Token entstehen so Zwischenschritte, die nie im Text erscheinen.
Gefragt nach der Hauptstadt des Bundesstaats, in dem Dallas liegt, bildet das Modell intern zuerst „Texas“ und kommt erst darüber auf „Austin“ [@lindsey2025; @anthropic2025tracing].
Dass es über solche Schritte selbst nicht verlässlich Auskunft gibt, zeigt @sec-hallucinations.
'''),                                                              # N16
L(233, 243),
T('### Agenten in der Praxis: Skills und Werkzeuganschluss {#sec-agenten-praxis}'),
L(300, 307),
T(r'''
Die Produktion kennt dieses Prinzip als Standardarbeit, bei der jede Tätigkeit nach Inhalt, Reihenfolge, Zeit und Ergebnis festgelegt ist, damit jede Verbesserung auf einem bekannten Stand aufsetzt [@spear1999]; ein Skill ist Standardarbeit für den Agenten.
Wer einen Skill teilt, lässt ihn vorher von einer zweiten Person lesen, denn er verbreitet seinen Fehler ebenso vollständig wie seine Verbesserungen.
'''),                                                              # N12: Skill-Karte entfällt
L(321, 333),
T(r'''
Der **Werkzeuganschluss** über MCP (@sec-harness) ist für Lehrende die Stelle, an der die KI aufhört, ein Textfenster zu sein, und in unseren Systemen handelt: im Bibliothekskatalog, auf der Lernplattform, im Kalender.

Eigene Quellen sind der Sonderfall, der in der Lehre am häufigsten gebraucht wird: als Projekt oder Notebook im Chat-Interface mit Skript, Übungsblättern und Musterlösungen oder als eigener Tutor, der über RAG auf einer Dokumentablage sitzt [@lewis2020].
Ob die KI aus den Quellen antwortet oder doch aus dem Training, prüft man mit Fragen, deren Antwort in den Quellen bewusst anders lautet als im Allgemeinwissen; diese Prüfidee kehrt in @sec-d-quellen und @sec-d-tutoren wieder.

Die Konsequenz der Delegation ist weniger technisch als organisatorisch.
Die Forschung zur Automatisierung hat lange vor den Sprachmodellen beschrieben, dass sich für jede Stufe einer Aufgabe getrennt festlegen lässt, wie viel die Maschine entscheidet und wo der Mensch das Steuer behält [@parasuraman2000].
Für Agenten in der Lehre heißt das: Wir legen vor dem Start fest, an welchen Punkten der Ablauf anhält und auf uns wartet, bei einer Literaturrecherche etwa beim Quellenkorb, beim Rechercheplan und bei der Stichprobe von Aussagen, die wir gegen das Original halten.
Je länger die Strecke ohne Blick, desto wichtiger werden diese Punkte.

Jeder Haltepunkt kostet Zeit, und diese Zeit lässt sich nicht vervielfachen: Agenten kann man parallel starten, ihre Ergebnisse landen aber auf demselben Schreibtisch. Wie verschieden weit Organisationen dabei sind, zeigen Nutzungsdaten eines Coding-Agenten: Bei seinen Organisationskunden arbeiten 67,4 % ohne parallele Agenten, bei OpenAI selbst steuern 28,6 % fünf oder mehr Agenten gleichzeitig [@johnston2026the; Belege und Grenzen in @sec-d-modus]. Das folgende Modell verfolgt eine einzelne Aufgabe, Kugel A, durch Auftrag, Recherche, Entscheidung, Rechnung und Freigabe, einmal allein und einmal als achte von acht Aufgaben, die der Mensch auf einmal abgibt; jede Aufgabe bekommt dabei ihren eigenen Agenten.
'''),                                                              # N33, N13
L(349, 372),
T(r'''
Kugel A wartet länger auf den Menschen, als alle Agenten zusammen an ihr arbeiten: 19,5 gegen 16 Minuten. Vor dem Menschen füllt sich die Ablage, sobald die Kugeln schneller zurückkommen, als er entscheidet, denn der Durchsatz eines Ablaufs richtet sich nach seiner langsamsten Station; ein neunter Agent ändert daran nichts. Entscheidet der Mensch doppelt so schnell, ist Kugel A nach 28,5 statt 43,5 Minuten fertig. Für die Lehre folgt daraus eine einfache Regel: Wir starten nur so viele Agenten, wie wir in der verfügbaren Zeit ernsthaft prüfen und entscheiden können, und wir beschleunigen Entscheidungen, indem wir ihre Kriterien vorab festlegen, nicht indem wir sie überspringen. Wie man Bestand, Durchsatz und Wartezeit an einer solchen Station rechnet, zeigt das Little's-Law-Widget in @sec-widget-littles-law.
'''),                                                              # N13
L(374, 377),
T(r'''
### Gedächtnis: Was ein Agent von einer Sitzung in die nächste mitnimmt {#sec-agenten-gedaechtnis}

Ein Sprachmodell erinnert sich nicht.
Alles, was es bei einer Antwort berücksichtigt, steht in seinem **Kontextfenster**: Prompt, bisheriger Gesprächsverlauf, hochgeladene Dateien und die Ergebnisse seiner Werkzeuge (lateinisch *contexere*, zusammenweben; der Kontext ist das Gewebe, in dem ein Satz erst Sinn ergibt).
Das Kontextfenster ist ein Schreibtisch, kein Archiv: Was darauf liegt, sieht das Modell vollständig, was nicht darauf liegt, existiert für die Antwort nicht, und am Ende der Sitzung wird der Tisch abgeräumt.
Ein Agent, der ein Semester lang Feedback schreibt, braucht deshalb ein Archiv und eine Regel, was wann auf den Tisch kommt.
Alles auf einmal hinzulegen ist keine Lösung, denn ein voller Tisch kostet bei jeder Antwort Rechenzeit und Geld (@sec-gpt-bedeutung).

Für diese Regel haben sich vier Stufen herausgebildet, die die folgende Abbildung nebeneinanderstellt: eine Anleitungsdatei, die der Agent zu Beginn jeder Sitzung liest, bis sie den Tisch füllt; Werkzeuge, mit denen er selbst entscheidet, wann er eine Erinnerung notiert, nachliest oder ändert; Skills, von denen zunächst nur Name und Kurzbeschreibung auf dem Tisch liegen [@zhang2025skills]; und ein gewöhnlicher Ordner mit Textdateien, den der Agent durchsucht und pflegt wie jedes andere Verzeichnis.
Der rote Faden: immer weniger vorab auf den Tisch, immer gezielter bei Bedarf aus dem Archiv.
Die vierte Stufe hat einen Nebeneffekt, der für die Lehre wichtiger ist als für die Technik: Einen Ordner mit Textdateien können Menschen öffnen, lesen und korrigieren.
'''),                                                              # N14
L(396, 404),
T(r'''
Wie aus Gesprächen überhaupt Erinnerungen werden, beschreiben @milam2025sessions mit zwei Speichern.
Die **Sitzung** (*Session*) hält ein Gespräch vollständig und in Reihenfolge fest; aus ihr baut der Agent vor jeder Antwort den Kontext neu.
Das **Gedächtnis** (*Memory*) bewahrt über viele Sitzungen hinweg nur das Verdichtete: Kernpunkte werden herausgezogen, mit dem Vorhandenen zusammengeführt, Veraltetes wird ersetzt, und in der nächsten Sitzung holt der Agent nur das Passende zurück.
'''),                                                              # N32
L(410, 420),
T(r'''
Ein Gedächtnis ist etwas anderes als RAG: Bei RAG liest das Modell in Dokumenten, die wir ausgewählt haben; ins Gedächtnis schreibt der Agent selbst, und was er heute notiert, bestimmt, was er morgen für wahr hält.
Die Anbieter sichern das mit den Mitteln jedes gemeinsam bearbeiteten Dokuments: Eine Änderung wird abgewiesen, wenn inzwischen eine andere Sitzung geschrieben hat, jede Änderung hinterlässt eine Version, und ein Speicher lässt sich nur zum Lesen einbinden, sodass ein Agent die Hausregeln kennt, aber nicht ändern kann [@anthropic2026memorystores].

Wann der Agent ins Gedächtnis schreibt, ist die zweite Gestaltungsfrage.
Auf Stufe 2 geschieht es *in-band*, mitten in der Sitzung, so wie man ein Laborbuch während des Versuchs führt.
Seit Mai 2026 gibt es zusätzlich Läufe *out-of-band*, bei Anthropic „Dreaming“ genannt: Ein eigener Durchgang liest den Speicher und frühere Sitzungen und schlägt eine überarbeitete Fassung vor, über deren Übernahme der Betreiber entscheidet [@anthropic2026dreaming].
Donald Schön unterschied bei Berufspraktikern *reflection-in-action*, das Umsteuern mitten im Handeln, von *reflection-on-action*, dem Blick zurück, wenn die Arbeit ruht [@schon1983]; Reflexion kommt vom lateinischen *reflectere*, zurückbeugen.
Lerntagebuch und Nachbesprechung eines Praktikums sind genau diese beiden Formen, und die zweite hat ohne die erste wenig Stoff.
Was daraus für die Verantwortung folgt, steht in @sec-diligence.

::::: {.content-visible when-format="html"}
'''),                                                              # N32, N14, N15, N28
L(444, 453),
T(r'''
:::::

[Ein konstruiertes Anwendungsbeispiel in der Online-Fassung zeigt, wie ein falscher Eintrag im Gedächtnis ein Semester lang das Feedback prägt.]{.content-visible unless-format="html"}
'''),                                                              # N28
L(454, 461),
# ---------------- Kernaussagen (7) und Lernfragen ----------------
T(r'''
::: {.callout-tip title="Kernaussagen"}
**Zu Lernziel 1: Vier Kompetenzen und Grundbegriffe**

1. Mit KI arbeiten heißt, vier Fragen zu beantworten: Was übernimmt die KI (Delegation), wie sage ich, was ich will (Description), wie beurteile ich das Ergebnis (Discernment), und wie setze ich sie verantwortlich ein (Diligence)? Die äußere Schleife entscheidet einmal je Vorhaben, was die KI übernimmt und welche Pflichten folgen, die innere dreht sich in jedem Arbeitsgang.
2. Ein Sprachmodell sagt das nächste Wort voraus und hat keine eingebaute Wahrheitsprüfung. Werkzeuge und Gedächtnis sitzen im Harness um das Modell, und der Harness legt fest, wie viel Handlungsspielraum das Modell bekommt.

**Zu Lernziel 2: Delegation**

3. Kontext entscheidet über Nutzen: Ein Modell allein antwortet aus dem Trainingswissen, mit RAG bekommt es ein Bücherregal, als Agent einen Werkzeugkoffer. Für die Lehre ist meist das Setup mit eigenem Material der richtige Einstieg.
4. Die Fähigkeiten der Modelle bilden eine zerklüftete Grenze. Wer sie nicht kennt, wird mit KI schlechter als ohne; je mehr Schritte der Mensch an Agenten abgibt, vom Centaur bis zur dunklen Fabrik, desto mehr hängt daran, dass er das Urteilen weiter übt.

**Zu Lernziel 3: Description**

5. Gute Prompts sind präzise, strukturiert, mit Beispielen und iterativ. Höflichkeit, Drohungen und Trinkgeld ändern nichts; wer das Modell wie eine junge Hilfskraft anleitet, kommt weiter.

**Zu Lernziel 4: Discernment und Diligence**

6. Halluzinationen sind kein Betriebsunfall, sondern folgen aus der Funktionsweise. Gegenmittel sind Eingrenzung des Inputs, Musterlösungen und systematische Prüfung.
7. Der Energieverbrauch einer einzelnen Anfrage ist gering, der Gesamtbedarf der Infrastruktur wächst stark. Beides stimmt, und die Steuerung ist eine politische Aufgabe.
:::
'''),
L(969, 991),
]
txt = '\n\n'.join(teile)
txt = re.sub(r'\n{3,}', '\n\n', txt).strip() + '\n'
# Lernfragen 1 und 8 greifen auf die Vertiefung zurück
for alt, neu in [
    ('1. Beschreiben Sie in drei Schritten, wie ein Sprachmodell aus einem Prompt eine Antwort erzeugt.',
     '1. Beschreiben Sie in drei Schritten, wie ein Sprachmodell aus einem Prompt eine Antwort erzeugt (Vertiefung, @sec-vertiefung).'),
    ('und an welcher Stelle prüfen Sie, was er sich gemerkt hat?',
     'und an welcher Stelle prüfen Sie, was er sich gemerkt hat (Vertiefung, @sec-vertiefung)?')]:
    assert txt.count(alt) == 1, alt
    txt = txt.replace(alt, neu)
open(sys.argv[2], 'w', encoding='utf-8').write(txt)
