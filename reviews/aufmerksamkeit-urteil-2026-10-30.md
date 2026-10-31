# Phase 2: Urteil je Animation nach der Reviewer-Karte

Stand: 30.10.2026, 17:00 · Grundlage: Messtabelle `reviews/aufmerksamkeit-messung-2026-11.md` (Stand `ac6bb54`) und die Übersichtsbilder `uebersicht-<Nr.>.png` in Tresorit `…/aufmerksamkeit-animationen/messung-2026-10-30/` · Quelltextstichproben am Stand `562d7ac` · Maßstab: Gruppe A volle Regeln F1–F7, T1–T7, A1–A5 aus `lehranimation-schritte`; Gruppe B die Kurzregeln aus `prozessanimation-lehre` (K-Farbe, K-Text, K-Grau); Gruppe C nur F4, F5, T1.

Zeichen: **B** = BESTANDEN, **Ä** = ÄNDERN, **–** = trifft auf diese Seite nicht zu, **?** = an Bildern und Stichprobe nicht prüfbar. Der Messlauf wurde nicht wiederholt. Seit `ac6bb54` hat sich nur `llm-game-standalone.html` (C3) geändert (über den Merge mit `main`); C3 muss deshalb vor einer Entscheidung neu gemessen werden.

Die Spalte „Vorschlag“ ist eine Empfehlung. Die Wahl zwischen *umbauen*, *kleine Korrektur* und *begründete Ausnahme* trifft Roman je Datei.

## Übersicht

| Nr. | Datei | Urteil | Vorschlag | Aufwand | Hauptgrund |
|---|---|---|---|---|---|
| A1 | `skill-karte.html` | ÜBERARBEITEN | umbauen (Kalibrierfall) | L | fünf Kategorienfarben mit Legende, Kontextlisten wiederholt ausgeschrieben |
| A2 | `agenten-gedaechtnis.html` | ÜBERARBEITEN | umbauen | M | zeitgesteuert, je Karte ein Absatz plus Analogie |
| A3 | `ki-arbeitsweisen-durchspiel.html` | ÜBERARBEITEN | kleine Korrektur + begründete Ausnahme für die Textmenge | M | drei Farben; ist ein Lesetext-Exponat, keine Erklär-Animation |
| A4 | `agenten-engpass.html` | ÜBERARBEITEN | kleine Korrektur, nach Gruppe B umstufen | S | keine Vorhersage, Statuszeilen zu lang; Farbe und Graustufen gut |
| A5-zeit | `ki-entwicklung.html` (Zeithorizont) | ÜBERARBEITEN | kleine Korrektur | S | keine Vorhersage, pulsierender Ring |
| A5-kosten | `ki-entwicklung.html` (Kosten-Raster) | ÜBERARBEITEN | umbauen | M | eine Farbe je Preisstufe, in Graustufen unlesbar; drei Dinge pulsieren |
| A5-weisen | `ki-entwicklung.html` (Arbeitsweisen) | ÜBERARBEITEN | kleine Korrektur | S | drei Farben doppelt zur Beschriftung, Legende |
| B1-anim | `littles-law-animation.html` | ÜBERARBEITEN | nach E1; vorher klären, ob die Seite neben dem OJS-Widget noch gebraucht wird | S | zwei Töne aus dem scm-viz-Bundle |
| B1-ojs | `_ojs/littles-law.qmd` | ÜBERARBEITEN | kleine Korrektur | S | grüner Rückmeldekasten, Anmerkung ~40 Wörter |
| B2 | `_ojs/bullwhip.qmd` | ÜBERARBEITEN (knapp) | kleine Korrektur | S | Farbe vorbildlich, nur die Anmerkung zu lang |
| B3 | `galerie-animationen.html` | ÜBERARBEITEN | kleine Korrektur am Rahmen, Inhalte nach E1 | S | Galerie-Oberfläche bringt Rot und Magenta selbst mit |
| B4 | `line-widget.html` | ÜBERARBEITEN | umbauen (Übersetzung) | M | englische Oberfläche im deutschen Buch, grüner Kasten, 297 Wörter |
| C1 | `tokenizer-explorer.html` | FREIGEBEN | begründete Ausnahme F4 | – | Farbe trennt Tokens, das ist der Lerninhalt |
| C2 | `llm-agent-patterns-matching.html` | FREIGEBEN mit Hinweis | kleine Korrektur, optional | S | Grün/Rot als Rückmeldung |
| C3 | `llm-game-standalone.html` | neu messen | offen | ? | seit dem Messlauf geändert; lädt React und Tailwind aus dem Netz |
| C4 | `llm-rag-agent-game.html` | FREIGEBEN mit Hinweis | kleine Korrektur, optional | S | Grün/Rot ohne ✓/✗ |
| C5 | `tutor-kosten.html` | FREIGEBEN | – | – | keine Farbe, nur ein kurzer Einleitungssatz |

## Gruppe A: Regelmatrix

| Regel | A1 | A2 | A3 | A4 | A5-zeit | A5-kosten | A5-weisen |
|---|---|---|---|---|---|---|---|
| F1 Graustufen lesbar | Ä | B | B | B | B | Ä | B |
| F2 eine Akzentfarbe, eine Bedeutung | Ä | Ä | Ä | Ä | B | Ä | Ä |
| F3 zweite Farbe nur begründet | Ä | B | Ä | – | – | Ä | Ä |
| F4 Kategorien ohne Farbe | Ä | B | Ä | B | B | Ä | Ä |
| F5 keine Ampelfarben | Ä | B | B | B | B | B | B |
| F6 neu / bekannt / Kontext | Ä | Ä | Ä | B | – | Ä | – |
| F7 Schlüsselwort im Akzent | ? | Ä | – | – | – | ? | – |
| T1 Startbild ohne Einleitung, mit Vorhersage | B | Ä | Ä | Ä | Ä | B | Ä |
| T2 ≤ 8 neue Wörter je Schritt | Ä | Ä | Ä | B | – | B | – |
| T3 Unterschrift ein Satz, ≤ 20 Wörter | Ä | – | Ä | Ä | – | Ä | – |
| T4 Wiederholtes als Kürzel | Ä | B | B | Ä | B | B | B |
| T5 Listen zeilenweise | Ä | B | Ä | – | – | – | – |
| T6 Hintergrund eingeklappt | B | Ä | B | Ä | B | Ä | B |
| T7 Hörsaalmodus `?hoersaal` | Ä | Ä | Ä | Ä | Ä | Ä | Ä |
| A1 Künftiges unsichtbar | Ä | B | B | B | B | Ä | – |
| A2 eine neue Gruppe je Schritt | Ä | B | Ä | B | – | B | – |
| A3 nur eine Sache bewegt sich | B | B | B | B | Ä | Ä | B |
| A4 Klick statt Zeitleiste | B | Ä | B | B | Ä | B | Ä |
| A5 letzter Schritt und `#druck` vollständig | B | B | – | B | B | B | B |

T7 fällt bei allen sieben Zielen: keine Seite kennt `?hoersaal`. Das ist ein Einzeiler je Datei und gehört in jeden Umbau.

## Gruppe A: Begründung je Datei

### A1 `skill-karte.html` · ÜBERARBEITEN · umbauen · L

F1 Ä: Die Balkenteile Kontext, Eingabe, Regel, Korrektur und Karte werden im Graustufenbild zu fast gleichen Grautönen; nur die Minutenzahlen bleiben lesbar. F2 Ä: Rot, Grün, Blau und Orange tragen vier Bedeutungen gleichzeitig, eine Stelle „jetzt“ gibt es nicht. F3 Ä: Der Gegensatz improvisiert gegen Karte wird schon durch die Lage oben/unten getragen und braucht keine Farbe. F4 Ä: Die Fußzeile ist eine Farblegende mit fünf Einträgen. F5 Ä: „Panne“ steht in Rot, „passt“ in Grün. F6 Ä: Vergangene Wochen bleiben in voller Tinte, nichts tritt zurück. F7 ?: Die Unterschrift liegt außerhalb der Bühne und ist in den Bildern nicht zu sehen. T1 B: Der Titel ist eine Behauptung, die Vorhersage steht vor dem ersten Schritt. T2 Ä: Ein Schritt bringt bis zu 26 neue Wörter, meist eine ganze Kontextliste. T3 Ä: Die erste Unterschrift hat zwei Sätze und 26 Wörter. T4 Ä: Die fünfzeilige Kontextliste steht in jeder Woche des oberen Pfads vollständig da; das ist der Lehrbuchfall für ein Kürzel. T5 Ä: Listen erscheinen als Block. T6 B: Modellannahmen stehen eingeklappt. T7 Ä. A1 Ä: Acht leere Wochenrahmen, die Zeitachse und die Legende stehen schon im Startbild. A2 Ä: Oben und unten wachsen meist im selben Schritt. A3, A4, A5 B.

Umbauvorschlag: Die Kontextliste wird einmal ausgeschrieben und danach zum Kürzel „Kontext · 5 Punkte“, die Skill-Karte ist das einzige Leitobjekt in der Akzentfarbe. Die fünf Balkenfarben weichen Schraffur, Tinte und Grau mit direkter Beschriftung, Pannen werden als ✗ in Tinte markiert. Wochenrahmen erscheinen erst, wenn sie an der Reihe sind, und oben und unten bekommen getrennte Schritte.

### A2 `agenten-gedaechtnis.html` · ÜBERARBEITEN · umbauen · M

F1 B: Das Graustufenbild bleibt vollständig lesbar. F2 Ä: Magenta markiert in allen vier Karten zugleich, im Endbild also viermal „jetzt“. F3, F4, F5 B. F6 Ä: Frühere Stufen treten nicht zurück. F7 Ä: Es gibt keine Unterschrift, die Text und Bild verbindet. T1 Ä: Unter dem Titel steht ein Erklärsatz, eine Vorhersagefrage fehlt. T2 Ä: Jede Karte bringt einen Absatz von 40 bis 50 Wörtern plus Analogie. T3 –. T4, T5 B. T6 Ä: Analogien und Quellenzeile stehen offen statt eingeklappt. T7 Ä. A1, A2, A3 B: Die Zeitleiste blendet eine Karte nach der anderen ein. A4 Ä: Der Ablauf läuft nach Zeit (0 s, 0,3 s, 1,5 s, 2,7 s), nicht nach Klick. A5 B.

Umbauvorschlag: Vier Klicks, je Klick eine Stufe in Akzentfarbe, die vorige tritt in Grau zurück. In der Karte bleibt nur die Skizze mit einer Beschriftung von höchstens acht Wörtern, der Absatz wird zur Unterschrift von einem Satz. Analogien und Quellen wandern in eingeklappte Abschnitte nach dem letzten Schritt.

### A3 `ki-arbeitsweisen-durchspiel.html` · ÜBERARBEITEN · kleine Korrektur + Ausnahme · M

F1 B: Sprecherschilder („Professorin“, „KI“, „Orchestrator“) tragen die Zuordnung auch ohne Farbe. F2 Ä: Blau, Orange und Grün stehen für Mensch, KI und Arbeitsschritte. F3 Ä: Mensch gegen KI ist hier selbst Lernziel und darf eine zweite Farbe bekommen, die Begründung fehlt aber im Storyboard. F4 Ä: Die Schrittleiste (Ziel, Planen, Ausführen …) färbt nach Zuständigkeit. F5 B. F6 Ä. F7 –. T1 Ä: Über der Bühne stehen ein Einleitungssatz und ein Fallabsatz, das Startbild hat 335 Wörter. T2 Ä: 24 bis 158 neue Wörter je Wechsel. T3 Ä. T4 B. T5 Ä: Protokolle erscheinen als Block. T6 B: Denkspur und Protokoll lassen sich zuschalten. T7 Ä. A1 B. A2 Ä: Ein Wechsel tauscht die ganze Szene. A3, A4 B. A5 –.

Die Seite ist ein Lesetext-Exponat mit echten Dialogen; deren Länge ist Inhalt, nicht Dekoration. Umbauvorschlag: Die Textmenge wird als begründete Ausnahme von T2 und T3 dokumentiert. Die Farbe wird auf den Gegensatz Mensch/KI reduziert, Grün entfällt, die Schrittleiste zeigt Zuständigkeit über Füllung (leer, schraffiert, voll). Die Startansicht zeigt nur die Schrittleiste und die Vorhersage, der Fallabsatz wird eingeklappt.

### A4 `agenten-engpass.html` · ÜBERARBEITEN · kleine Korrektur · S

F1 B: Schraffur und Lage tragen das Bild auch in Graustufen. F2 Ä: Orange markiert den Zeitzeiger und den Bilanzkasten, dazu kommen dunkelblaue Mensch-Balken. F3 –. F4 B: Prüfen, Warten und Arbeiten sind über Schraffur getrennt. F5 B. F6 B: Bei einer Zeitachse ist das Bisherige der Lerninhalt. F7 –. T1 Ä: Eine Vorhersagefrage fehlt. T2 B. T3 Ä: Die Bilanz hat rund 25 Wörter. T4 Ä: Die Statuszeile „Geprüft · Mensch ausgelastet · Agent ausgelastet · Prüfstapel“ steht zweimal dauerhaft im Bild. T5 –. T6 Ä: Modellannahmen fehlen oder stehen nicht eingeklappt. T7 Ä. A1 B: Die leeren Bahnen sind das Gerüst eines Vorher/Nachher auf einer Uhr. A2 B. A3 B: Fünf Agenten bewegen sich gleichartig, ihr Muster ist der Inhalt. A4 B: Der Knopf „Schritt“ segmentiert, allerdings in 44 Ereignisse. A5 B. Außerdem fehlt `prefers-reduced-motion`.

Die Seite ist eine Prozessanimation mit Zeitachse und passt zu den Regeln aus `prozessanimation-lehre` besser als zu Gruppe A. Umbauvorschlag: Eine Vorhersagefrage („Wer ist nach zwei Stunden der Engpass?“) vor dem Start, die Statuszeilen schrumpfen auf je eine Zahl („Mensch 70 %“), die Mensch-Balken werden Tinte. Der Schritt-Knopf springt zu drei Meilensteinen (30, 60, 120 min) statt durch 44 Ereignisse, die Bilanz wird auf 15 Wörter gekürzt.

### A5-zeit `ki-entwicklung.html?zeige=zeithorizont` · ÜBERARBEITEN · kleine Korrektur · S

F1, F2, F4, F5 B: ein Blau mit einer Bedeutung, Graustufen lesbar. T1 Ä: keine Vorhersagefrage, obwohl die Nachbaransicht eine hat. T4, T6 B. T7 Ä. A1 B: Die Ankeraufgaben links sind Achsenbeschriftung. A3 Ä: Der Ring um den jüngsten Punkt pulsiert endlos (`animation: ring … infinite`). A4 Ä: „Abspielen“ läuft nach Zeit; der Schieberegler gibt aber manuelle Kontrolle. A5 B.

Umbauvorschlag: Eine Vorhersagefrage vor dem Abspielen („Ab welchem Jahr reicht es für ein Übungsblatt mit Lösungen?“). Der pulsierende Ring wird ein ruhender Akzentring. „Abspielen“ bekommt einen Weiter-Knopf über fünf Meilensteine; der Regler bleibt.

### A5-kosten `ki-entwicklung.html?zeige=kosten` · ÜBERARBEITEN · umbauen · M

F1 Ä: Im Graustufenbild verschwimmen die acht Preisstufen zu zwei, drei Grautönen. F2 Ä: bis zu sechs Farbtöne. F3 Ä. F4 Ä: Jede Preisstufe hat eine eigene Farbe, die Zeitstrahlpunkte dienen als Legende. F5 B. F6 Ä: Ältere Stufen treten nicht zurück. F7 ?. T1 B: Aussagetitel und Schätzfrage. T2 B: je Schritt ein Stufenname. T3 Ä: Die Auflösung hat rund 45 Wörter. T4 B. T6 Ä: Der Kasten „Warum fiel der Preis …“ steht offen. T7 Ä. A1 Ä: Das leere Raster mit 725 Kästchen steht schon vor der Schätzung da und verrät die Größenordnung der Lösung. A2 B. A3 Ä: Eingabefeld, Weiter-Knopf und Zeiger pulsieren gleichzeitig endlos. A4, A5 B.

Umbauvorschlag: Die jeweils neue Preisstufe steht in Akzentfarbe, alle früheren in Tinte, die ersten Stufen in hellem Grau; damit trägt das Raster in Graustufen und braucht keine Legende. Die drei Pulsanimationen entfallen, der Weiter-Knopf wird nur einmal kurz hervorgehoben. Das Raster erscheint erst nach der Schätzung, und der Ursachenkasten wird eingeklappt.

### A5-weisen `ki-entwicklung.html?zeige=arbeitsweisen` · ÜBERARBEITEN · kleine Korrektur · S

F1 B: Jede Zelle ist beschriftet („Mensch“, „gemeinsam“, „KI“). F2 Ä: Blau, Grün, Orange. F3 Ä: Mensch/KI wäre begründbar, die dritte Farbe nicht. F4 Ä: Farbe verdoppelt die Beschriftung und braucht eine Legende. T1 Ä: keine Vorhersagefrage. T7 Ä. A4 Ä: „Abspielen“ mit Zeitleiste. Übrige Regeln B oder –.

Umbauvorschlag: Mensch wird eine weiße Zelle mit Tintenrand, gemeinsam eine schraffierte, KI eine Tintenfläche; die gerade gewählte Arbeitsweise bekommt als Zeile die Akzentfarbe. Die Legende entfällt. Statt „Abspielen“ gibt es Weiter je Zeile und vorab die Frage „Ab welcher Arbeitsweise entscheidet die KI selbst?“.

## Gruppe B: Kurzregeln

| Nr. | K-Farbe (Graustufen + 1 Akzent, keine Legende, keine Ampel) | K-Text (nur Titel über dem Bild, Anmerkung ≤ 15 Wörter) | K-Grau | Vorschlag |
|---|---|---|---|---|
| B1-anim | Ä: Cyan und Blau aus dem scm-viz-Bundle | B: nur der Aussagetitel | B | Nach E1; vorher klären, ob die Seite neben dem OJS-Widget im Buch noch vorkommt. |
| B1-ojs | Ä: Rot für die Messlinie, dazu ein grüner Kasten, wenn die Vorhersage trifft (Ampellogik) | Ä: Anmerkung rund 40 Wörter | B: durchgezogen gegen gestrichelt | Kasten immer neutral grau, Anmerkung auf einen Satz, Erklärung in den Fließtext. |
| B2 | B: ein Rot mit einer Bedeutung (verstärkte Bestellungen) | Ä: Anmerkung rund 50 Wörter | B | Anmerkung auf 15 Wörter; `accent-color` der Regler auf Tinte setzen, weil sie sonst browserblau sind. |
| B3 | Ä: Galerie-Rahmen bringt Rot und Magenta selbst mit | Ä: Absatz „Worauf es geht“ unter jedem Beitrag | B | Rahmen auf Graustufen plus Akzent, Absatz auf einen Satz. |
| B4 | Ä: Rot für den Engpass (gut), dazu ein grüner „keeps up“-Kasten | Ä: 297 Wörter, Anleitung und „Try this“ im Bild | B | Oberfläche ist englisch: übersetzen, grünen Kasten neutral, „Try this“ unter das Bild. |

Für E1 ergibt das ein klares Bild: Die OJS-Widgets (B1-ojs, B2) erfüllen die Farbregel fast schon, die Abweichungen sitzen im scm-viz-Bundle und in der Galerie-Oberfläche. Variante (b), ein Buchthema aus Graustufen und einem Akzent, beträfe damit nur B1-anim, B3 und B4.

## Gruppe C: F4, F5, T1

| Nr. | F4 | F5 | T1 | Urteil |
|---|---|---|---|---|
| C1 | begründete Ausnahme: Farbe trennt Tokens | B | B | FREIGEBEN |
| C2 | B | Ä: Grün/Rot als Rückmeldung, ein ✓ vorhanden | B | FREIGEBEN mit Hinweis |
| C3 | ? | Ä im neuen Quelltext: `text-green-*`, `text-red-*` | ? | neu messen |
| C4 | B: Pastellkarten LLM/RAG/Agent sind zusätzlich beschriftet | Ä: Grün/Rot ohne ✓/✗ | B | FREIGEBEN mit Hinweis |
| C5 | B | B | Ä (leicht): ein Einleitungssatz über dem Rechner | FREIGEBEN |

Grüne und rote Rückmeldung ist in Übungen eine verbreitete Konvention; sie wird zum Problem, wenn die Farbe allein die Bewertung trägt. Die kleinste Korrektur ist deshalb ein ✓ oder ✗ neben jeder farbigen Rückmeldung. Ein grober Verstoß im Sinn von E2 (a) liegt in Gruppe C nicht vor. Der wichtigere Befund ist keiner der Aufmerksamkeit: C3 lädt React und Tailwind aus dem Netz und läuft ohne Internet nicht, was für ein Buch mit QR-Codes über Jahre das größere Risiko ist.

## Empfehlungen zu den offenen Entscheidungen

**E2 Gruppe C:** (a) nur grobe Verstöße. Kein Ziel in C hat einen; die Grün/Rot-Rückmeldung lässt sich mit ✓/✗ in Minuten entschärfen, ohne die Seiten anzufassen.

**E3 `agenten-gedaechtnis`:** (a) Umbau auf Klick. Die vier Stufen sind bereits vier Szenen; aus der Zeitleiste werden vier Klicks, die Einblendbewegung bleibt als Übergang. Segmentieren hilft beim Behalten und Verstehen (Rey et al., 2019).

**E4 Budget:** (b) nach dem Kalibrierfall A1 anpassen. Der Messlauf zählt bei Standbildern Steuerung, Quellenzeile und Datentabelle mit; deshalb liegen auch gute Seiten wie A5-zeit (116) und B2 (102) weit über 40 Wörtern. Vor einer Anpassung der Zahl sollte das Prüfskript Steuerung und Quellen von der Bühne trennen.

## Reihenfolge für Phase 3 nach diesem Urteil

Unverändert A1 als Kalibrierfall. Danach lohnt es sich, die drei kleinen Korrekturen gebündelt in einer Sitzung zu erledigen (A4, A5-zeit, A5-weisen, dazu `?hoersaal` in allen Gruppe-A-Seiten), weil sie zusammen weniger kosten als ein einzelner Umbau. Es folgen A5-kosten, A2, A3, dann Gruppe B nach E1.

## Quelle

Rey, G. D., Beege, M., Nebel, S., Wirzberger, M., Schmitt, T. H., & Schneider, S. (2019). A meta-analysis of the segmenting effect. *Educational Psychology Review, 31*(2), 389–419. https://doi.org/10.1007/s10648-018-9456-4
