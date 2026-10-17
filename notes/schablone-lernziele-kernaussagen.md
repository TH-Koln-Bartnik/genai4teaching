# Schablone: Lernziele, Kernaussagen, Zum Weiterdenken (Kapitel 1–5)

Stand: 2026-10-17. Entwurf für die Druckfassung. Die Einfügung in die Kapiteldateien übernimmt der Hauptprozess; diese Datei ändert keine bestehende Datei.

## Teil (a): Quarto-Schablone

### Kapitelanfang

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- …
- …
- …
:::
```

### Kapitelende

```markdown
::: {.callout-tip title="Kernaussagen"}
1. …
2. …
3. …
:::

::: {.callout-note title="Zum Weiterdenken"}
1. …
2. …
:::
```

Hinweise zur Form: Lernziele sind Infinitivsätze, die den Satzanfang „Nach diesem Kapitel können Sie …“ fortsetzen (also „… erklären, warum …“, nicht „Sie wissen, dass …“). Kernaussagen sind vollständige, zitierfähige Sätze ohne Verweise auf Abschnittsnummern. Die Fragen „Zum Weiterdenken“ sind Abruf- und Transferfragen im Sinne des testgestützten Lernens (Kapitel 3): Sie verlangen, Inhalte aus dem Kapitel aus dem Gedächtnis zu holen und auf die eigene Lehre anzuwenden; sie sind nicht durch Nachschlagen einer Stelle zu beantworten. Für den PDF-Druck gelten die Callout-Stile aus `include/preamble.tex` (tcolorbox, breakable), also kein zusätzlicher LaTeX-Code nötig.

## Teil (b): Vorschläge je Kapitel

### Kapitel 1 – Einleitung (`kapitel01.qmd`, `#sec-einleitung`)

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- die zwei Lehrprobleme benennen, bei denen generative KI helfen kann: begrenzte Zeit für individuelle Förderung und der hohe Aufwand wirksamer Lehrmethoden;
- die drei Ebenen Modell, App und Harness unterscheiden und begründen, warum kostenlose oder automatisch gewählte Modellvarianten für Lehraufgaben oft nicht ausreichen;
- an Beispielen beschreiben, welche Aufgaben in Recherche, Aufgabenerstellung und Forschung Sprachmodelle inzwischen übernehmen und wo Fachwissen zur Prüfung der Ergebnisse unverzichtbar bleibt;
- die Befunde zur Nutzung durch Studierende einordnen und erklären, warum Hochschulen Prüfungsleistungen anpassen und KI-Kompetenz vermitteln müssen;
- das Risiko der kognitiven Entlastung („verkümmernde Muskeln“) mit dem Konzept der erwünschten Schwierigkeiten verbinden.
:::
```

```markdown
::: {.callout-tip title="Kernaussagen"}
1. Generative KI ist für die Lehre ein Kraftverstärker: Der Berg bleibt, aber mit dem E-Bike kommt man weiter. Sie senkt vor allem den Aufwand für Methoden, die didaktisch wirksam, aber zeitintensiv sind.
2. „KI nutzen“ heißt zunehmend, Aufgaben an Agenten zu delegieren. Ergebnisqualität hängt von der Kombination aus starkem Modell, passender Oberfläche und Werkzeugkasten (Harness) ab; wer am Modell spart, spart meist am Ergebnis.
3. Der Mehrwert entsteht erst durch eigenes Fachwissen und Erfahrung im kritischen Umgang mit dem Werkzeug. Auch starke Modelle vertreten falsche Ergebnisse überzeugend.
4. Studierende nutzen Sprachmodelle längst flächendeckend, besonders für Schreibaufgaben und Prüfungsleistungen, fühlen sich aber auf den produktiven Umgang schlecht vorbereitet.
5. Die Hauptgefahr ist nicht das Täuschen, sondern die Auslagerung des Denkens. Lehre muss erwünschte Schwierigkeiten erhalten, auch wenn zu Hause starke Modelle verfügbar sind.
:::

::: {.callout-note title="Zum Weiterdenken"}
1. Welche Lehrmethode haben Sie in den letzten Semestern aus Zeitgründen nicht umgesetzt, obwohl Sie von ihrer Wirkung überzeugt sind? Welchen Teil des Aufwands könnte ein Sprachmodell übernehmen, und welcher Teil muss bei Ihnen bleiben?
2. Erklären Sie ohne Nachschlagen den Unterschied zwischen Modell, App und Harness an einem Beispiel aus Ihrem Fach. Welche Ebene fehlt den kostenlosen Zugängen Ihrer Hochschule?
3. Bei welcher Aufgabe in Ihrer Lehrveranstaltung würde ein Studierender durch KI-Nutzung am meisten an Lernwirkung verlieren? Woran würden Sie das erkennen?
:::
```

### Kapitel 2 – Grundbegriffe (`kapitel02.qmd`, `#sec-grundbegriffe`)

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- in Laiensprache erklären, wie ein Sprachmodell Text in Tokens zerlegt, als Zahlen verarbeitet und Wort für Wort neuen Text erzeugt;
- die drei Nutzungsmuster LLM, RAG und Agent unterscheiden und für eine Lehraufgabe das passende Muster auswählen;
- beschreiben, warum Sprachmodelle halluzinieren und welche Folgen das für den Einsatz in der Lehre hat;
- die Jagged Frontier erklären und daraus ableiten, warum Sprachmodelle bei ähnlich schwierigen Aufgaben sehr unterschiedlich gut abschneiden;
- die Bausteine eines guten Prompts (Rolle, Aufgabe, Format, Beispiele) anwenden und belegen, welche verbreiteten Prompt-Tricks nichts bringen;
- die Größenordnung des Energieverbrauchs einer Anfrage einordnen und die wichtigsten Argumente der Debatte wiedergeben.
:::
```

```markdown
::: {.callout-tip title="Kernaussagen"}
1. Ein Sprachmodell sagt das nächste Wort voraus. Aus Tokens, Embeddings und Attention entsteht Text, der plausibel klingt, aber keine eingebaute Wahrheitsprüfung hat.
2. Kontext entscheidet über Nutzen: Ein Modell allein antwortet aus dem Trainingswissen, mit RAG bekommt es ein Bücherregal, als Agent einen Werkzeugkoffer. Für die Lehre ist meist das Setup mit eigenem Material der richtige Einstieg.
3. Halluzinationen sind kein Betriebsunfall, sondern folgen aus der Funktionsweise. Gegenmittel sind Eingrenzung des Inputs, Musterlösungen und systematische Prüfung.
4. Die Fähigkeiten der Modelle bilden eine zerklüftete Grenze. Wer sie nicht kennt, wird mit KI schlechter als ohne.
5. Gute Prompts sind präzise, strukturiert, mit Beispielen und iterativ. Höflichkeit, Drohungen und Trinkgeld ändern nichts; wer das Modell wie eine junge Hilfskraft anleitet, kommt weiter.
6. Der Energieverbrauch einer einzelnen Anfrage ist gering, der Gesamtbedarf der Infrastruktur wächst stark. Beides stimmt, und die Steuerung ist eine politische Aufgabe.
:::

::: {.callout-note title="Zum Weiterdenken"}
1. Ein Studierender fragt Sie, warum der Chatbot eine Quelle erfunden hat, die es nicht gibt. Erklären Sie es ihm in drei Sätzen ohne die Wörter „Token“ und „Wahrscheinlichkeit“, dann noch einmal mit.
2. Nehmen Sie eine typische Aufgabe aus Ihrer Lehre und spielen Sie durch: Was antwortet ein reines Sprachmodell, was ein Modell mit Ihrem Skript als Material, was ein Agent mit Internetzugang? Wo liegt jeweils das Risiko?
3. Welche Aufgabe in Ihrem Fach liegt vermutlich außerhalb der Jagged Frontier? Wie würden Sie das prüfen, bevor Sie Studierende damit arbeiten lassen?
:::
```

### Kapitel 3 – Didaktische Ziele und Mechanismen (`kapitel03.qmd`, `#sec-didaktik`)

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- erklären, warum wirksame Lehrmethoden an Hochschulen bekannt, aber selten umgesetzt sind, und welche Rolle situative Barrieren wie Zeitmangel spielen;
- begründen, warum Chatbots ohne didaktische Bremsen dem Lernen eher schaden, mit Bezug auf erwünschte Schwierigkeiten, kognitive Belastung und Wachstumsdenken;
- die drei Wissensstufen nach Hattie (knowing that, knowing how, knowing with) unterscheiden und je Stufe einen passenden KI-Einsatz nennen;
- die drei Lerntechniken verteiltes und gemischtes Lernen, testgestütztes Lernen und fragebasierte Ausarbeitung beschreiben und erklären, wie Sprachmodelle deren Vorbereitungsaufwand senken;
- die ICAP-Rangfolge (interaktiv vor konstruktiv vor aktiv vor passiv) auf die Gestaltung von KI-gestützten Lernaktivitäten anwenden.
:::
```

```markdown
::: {.callout-tip title="Kernaussagen"}
1. Das Problem der Hochschullehre ist nicht fehlendes Wissen über gute Lehre, sondern fehlende Zeit, sie umzusetzen. Genau hier kann generative KI ansetzen.
2. Chatbots sind darauf gebaut, hilfreich zu sein, nicht darauf, Lernen zu fördern. Ohne Anpassung nehmen sie Lernenden die Schwierigkeiten ab, die das Lernen ausmachen.
3. Welcher KI-Einsatz sinnvoll ist, hängt vom Wissenstyp ab: Abrufübungen und Erklärungen für Faktenwissen, dialogisches Coaching und durchgearbeitete Beispiele für Prozesswissen, Szenarien und Rollenspiele für Transfer.
4. Verteiltes Üben, häufige Abruftests und Warum-Fragen sind die am besten belegten Lerntechniken. Ihr Haken ist der Aufwand, und den können Sprachmodelle drastisch senken.
5. Interaktion schlägt Konstruktion schlägt aktive Beteiligung schlägt passives Zuhören. Eine KI-Lernaktivität ist umso wirksamer, je weiter oben sie auf dieser Leiter steht.
:::

::: {.callout-note title="Zum Weiterdenken"}
1. Ordnen Sie drei Lernziele Ihrer Veranstaltung den Stufen knowing that, knowing how und knowing with zu. Welche Stufe kommt bei Ihnen zu kurz, und welche KI-gestützte Methode aus diesem Kapitel würde sie stärken?
2. Erklären Sie ohne Nachschlagen, warum ein Chatbot, der sofort die richtige Antwort gibt, dem Testeffekt entgegenwirkt. Wie müsste der Bot stattdessen reagieren?
3. Wo in Ihrem Semesterplan könnten Sie mit geringem Aufwand verteiltes und gemischtes Üben einbauen, wenn ein Sprachmodell die Aufgabenvarianten liefert?
:::
```

### Kapitel 4 – Vier Szenarien der Nutzung (`kapitel04.qmd`, `#sec-szenarien`)

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- die vier Rollen Hiwi, Copilot, Tutor und Simulator unterscheiden und eigene Anwendungsideen einer Rolle zuordnen;
- mit dem Dreiklang Verdrängung, Produktivität und Wiedereinsetzung einschätzen, welche Aufgaben Lehrender durch KI wegfallen, schneller werden oder neu entstehen;
- Recherchewerkzeuge nach den zwei Fragen „einmalig oder iterativ“ und „Liste oder Analyse“ einordnen und ein passendes Werkzeug für eine Literaturaufgabe wählen;
- Grade der KI-Nutzung beim Schreiben unterscheiden und erklären, warum auch Nicht-Informatiker mit Sprachmodellen Lernwerkzeuge programmieren können;
- die vier Vorteile eines KI-Tutors nennen und beschreiben, wie Musterlösungen als Input Halluzinationen eindämmen;
- Role Play und Goal Play unterscheiden und begründen, warum Simulationen Rahmung und Nachbesprechung durch Lehrende brauchen.
:::
```

```markdown
::: {.callout-tip title="Kernaussagen"}
1. Vier Rollen ordnen die Praxis: Als Hiwi nimmt die KI Arbeit ab, als Copilot ermöglicht sie, was wir allein nicht könnten, als Tutor begleitet sie Lernende, als Simulator stellt sie Übungssituationen bereit.
2. Technik ersetzt Tätigkeiten, nicht Berufe. In der Lehre verdrängt KI vor allem Standardisiertes, macht Kernaufgaben produktiver und schafft neue Aufgaben wie Qualitätskontrolle und Kursdesign. Ob am Ende Zeit gespart wird, ist offen.
3. Bei der Literaturrecherche entscheidet nicht der Markenname, sondern das Muster: einmalige Suche oder iterativer Prozess, Trefferliste oder zusammenfassende Analyse.
4. Schreiben und Programmieren mit KI sind Cyborg-Tätigkeiten. Der Lernwert hängt davon ab, wie viel die Studierenden selbst verstehen und verantworten müssen.
5. Ein guter KI-Tutor passt sich an, gibt sofort Rückmeldung, hält Lernende aktiv und entlastet Lehrende. Er braucht Musterlösungen als Input und systematische Qualitätstests, sonst produziert er überzeugende Fehler.
6. Simulationen wirken, wenn Lehrende sie rahmen und nachbesprechen. Die KI kann aus der Rolle fallen; der Mensch bleibt in der Schleife.
:::

::: {.callout-note title="Zum Weiterdenken"}
1. Nehmen Sie Ihre eigene Aufgabenliste einer typischen Semesterwoche und sortieren Sie jede Aufgabe nach Verdrängung, Produktivität oder Wiedereinsetzung. Welche neue Aufgabe kommt bei Ihnen dazu, die Sie heute noch nicht einplanen?
2. Entwerfen Sie aus dem Gedächtnis einen Tutor-Prompt für ein Konzept Ihres Fachs. Welche drei didaktischen Bremsen bauen Sie ein, und woher bekommt der Tutor seine Musterlösungen?
3. Welche Berufssituation Ihrer Absolventinnen und Absolventen eignet sich für ein Role Play, welche für ein Goal Play? Was muss im Debriefing unbedingt zur Sprache kommen?
:::
```

### Kapitel 5 – Empfehlungen zur Umsetzung (`kapitel05.qmd`, `#sec-umsetzung`)

```markdown
::: {.callout-note title="Lernziele"}
Nach diesem Kapitel können Sie …

- ein Vorgehen beschreiben, um eigene Aufgaben mit einem Sprachmodell durchzuspielen und daraus Anpassungen abzuleiten;
- eine Einführung der Studierenden planen, die praktisch, häufig und niedrigschwellig ist;
- die vier Säulen Mündlichkeit, Prozessorientierung, Kontextualisierung und Kollaboration erklären und eine eigene Prüfungsleistung danach umbauen;
- die zentralen Elemente aktueller Hochschulrichtlinien zur KI-Nutzung wiedergeben, einschließlich der Grenzen von Detektionssoftware;
- Studierenden eine praktikable Form der Dokumentation ihrer KI-Nutzung vorgeben;
- einen bestehenden Kurs in Phasen mit KI als Hiwi, Copilot und Lernhilfe ergänzen und die Risiken mit Gegenmaßnahmen versehen.
:::
```

```markdown
::: {.callout-tip title="Kernaussagen"}
1. Der erste Schritt ist Ausprobieren: eigene Aufgaben in ein starkes Modell geben, Input eingrenzen, Prompts anpassen und prüfen, wo die KI gut ist und wo nicht.
2. Studierende lernen den Umgang mit KI durch häufiges, über das Semester verteiltes Üben in Präsenz, nicht durch eine Theorieeinführung.
3. Die Homework Apocalypse ist real, aber beherrschbar. Prüfungen werden wieder aussagekräftig durch Mündlichkeit, Prozessorientierung, Kontextualisierung und Kollaboration. KI-Detektoren sind dafür kein Mittel.
4. Hochschulrichtlinien konvergieren: Eigenständigkeitserklärung anpassen, Verdachtsfälle im Gespräch klären, keine automatisierte Bewertung, Prüfungsformate didaktisch weiterentwickeln. Wirksam werden sie nur, wenn sie bekannt sind und diskutiert werden.
5. Dokumentation der KI-Nutzung muss praktikabel sein: eine Stichwortliste, eine Übersicht nach Arbeitsphase oder Werkzeug oder ein Reflexionstagebuch; ein vollständiges Protokoll jeder Interaktion ist es nicht.
:::

::: {.callout-note title="Zum Weiterdenken"}
1. Nehmen Sie Ihre wichtigste schriftliche Prüfungsleistung und wenden Sie aus dem Gedächtnis die vier Säulen darauf an. Welche Säule lässt sich mit geringstem Aufwand nächstes Semester einziehen?
2. Was steht in der Richtlinie Ihrer eigenen Hochschule zu KI in Prüfungen? Falls Sie es nicht wissen: Was müsste nach diesem Kapitel darin stehen?
3. Entwerfen Sie für eine Ihrer Veranstaltungen eine Drei-Phasen-Struktur (Hiwi, Copilot, Lernhilfe). Welches Risiko aus dem Kapitel trifft Ihren Kurs am stärksten, und welche Gegenmaßnahme planen Sie?
:::
```

## Teil (c): Einfügung

Der Lernziele-Kasten kommt unmittelbar nach der H1-Überschrift und vor dem ersten Absatz beziehungsweise der ersten H2-Überschrift des Kapitels; in Kapitel 1, 3 und 5 also direkt vor `## KI als Hilfe für die Lehre`, `## Was für Ziele verfolgen wir …` und `## Typische Aufgaben …`, in Kapitel 2 und 4 nach dem kurzen Einstiegstext und vor der ersten H2. Kernaussagen und Zum Weiterdenken kommen ans Kapitelende, vor dem letzten Abschnitt, wenn dieser ein Ausblick oder eine Materialsammlung ist (Kapitel 1: vor `## Kapitelübersicht`; Kapitel 5: vor `## Wie bleiben Sie informiert?`), sonst als Abschluss nach dem letzten Absatz (Kapitel 2 nach dem Energie-Abschnitt, Kapitel 3 nach dem Seminarbeispiel, Kapitel 4 nach Goal Play). Die Einfügung erfolgt durch den Hauptprozess nach Abschluss der laufenden Kapitelrevisionen, damit die Kernaussagen gegen den dann gültigen Text geprüft werden können.
