# Lessons Learned: Abgeschnittener Text in den Zitations-Hover-Boxen

*Notiz zum Online-Skript (Quarto-Book), erstellt am 2026-07-15, korrigiert am 2026-07-16 nach Messung im Browser.*

## Worum es geht (in einem Satz)

Wenn man im Skript mit der Maus über eine Quellenangabe fährt, öffnet sich ein kleines Vorschaufenster mit der vollständigen Literaturangabe – eine **Hover-Box** (auch *Tooltip*, wörtlich „Werkzeug-Tipp“, ein eingeblendeter Hinweiskasten). In diesen Kästchen wurde der Anfang jeder Literaturzeile links abgeschnitten.

## Der erste, falsche Verdacht (und warum er nicht stimmte)

Naheliegend war zunächst eine pauschale CSS-Regel für die Klasse `.csl-entry` (CSS = *Cascading Style Sheets*, die Sprache, die dem Browser sagt, *wie* eine Seite aussieht; CSL = *Citation Style Language*, das Format der Zitierstile). Diese Regel gab jeder Literaturangabe 2 em linken Innenabstand. Der Verdacht: Der Abstand wirkt auch in der engen Hover-Box und drängt den Text hinaus.

Diese Erklärung war falsch. Nachgemessen im Browser hatte die Box bereits `padding-left: 0px` – der Innenabstand war also gar nicht die Ursache. Die Lehre daraus steht am Ende: erst messen, dann urteilen. Eine Analogie: Man hört ein Klopfen im Motor und tauscht die Zündkerzen, obwohl das Geräusch aus dem Getriebe kommt. Ohne Blick auf das laufende System repariert man das Falsche.

## Die tatsächliche Ursache (im Browser bestätigt)

Der entscheidende Punkt liegt darin, wie die Hover-Box entsteht. Quarto nutzt die kleine Programmbibliothek **Tippy.js** für diese Einblendungen (eine *Library* ist fertiger, wiederverwendbarer Code, den man einbindet, statt ihn selbst zu schreiben – wie ein Fertigbauteil aus dem Regal). Beim Laden der Seite durchsucht ein Skript den Text nach Quellenverweisen und erzeugt für jeden eine Hover-Box. Der Inhalt ist eine **Kopie** des zugehörigen Eintrags aus dem Literaturverzeichnis: Das Skript legt ein neues `<div>` an, kopiert den Text der Literaturangabe hinein und versieht die Kopie mit **zwei** Klassen-Etiketten – `csl-entry` *und* `hanging-indent`.

Dieses zweite Etikett, `hanging-indent`, war das Problem. Zwei Regeln greifen darauf zu:

```css
/* Pandoc, fest eingebaut in jede Seite */
.hanging-indent { margin-left: 1.5em; text-indent: -1.5em; }

/* eigene Regel in include/style.css */
div.hanging-indent { margin-left: -1.5em !important; }
```

Die erste Regel ist der normale hängende Einzug: Der Block rückt 1,5 em nach rechts, die erste Zeile 1,5 em zurück – so stehen die Autorennamen bündig links, die Folgezeilen eingerückt. Die zweite Regel wurde ergänzt, um das *angezeigte* Literaturverzeichnis am Seitenrand bündig auszurichten; sie kippt den Rand mit `!important` auf **minus** 1,5 em.

Das Etikett `hanging-indent` sitzt aber eben auch auf der Kopie in der Hover-Box. Dort addieren sich nun der negative Rand (−1,5 em) und der negative Erstzeilen-Einzug (−1,5 em): Die erste Zeile beginnt rund 3 em **links außerhalb** des Kastens und wird abgeschnitten. Die Messung im Browser bestätigte es – die linke Kante des Eintrags lag 13 px außerhalb des sichtbaren Boxinhalts.

*Randnotiz zur Etymologie:* Die Maßeinheit **em** stammt aus dem Buchsatz und bezeichnete ursprünglich die Breite des Großbuchstabens „M“. Heute steht 1 em für die aktuelle Schriftgröße; der Einzug wächst also mit dem Text mit.

## Der Gegencheck, der die Diagnose absicherte

Im Schwester-Skript (dem Workshop-Skript) trat der Fehler nicht auf. Wenn die Diagnose stimmt, muss dort genau diese Einstellung anders sein. Die Messung bestätigte es Punkt für Punkt: Im Workshop hat die Hover-Box einen Rand von **+22 px** (positive 1,5 em, der Pandoc-Standard), im genai4teaching-Skript **−22 px**. Das Workshop-Skript enthält die Regel `div.hanging-indent { margin-left: -1.5em !important }` schlicht nicht. Dieselbe Ursache, dieselbe Wirkung – der eine Unterschied erklärt den ganzen Effekt. (Nebenbei: Der positive Rand ist auch der Grund, warum die Workshop-Box etwas „geräumiger“ wirkt.)

## Die Lösung

Der eigene bündige Rand des Literaturverzeichnisses (−1,5 em) soll erhalten bleiben; nur in der Hover-Box ist er schädlich. Deshalb wird er **ausschließlich innerhalb der Box** wieder auf den positiven Standardwert gesetzt – genau den Wert, den auch das Workshop-Skript nutzt. Der Selektor zielt gezielt auf die Quarto-Hover-Boxen, erkennbar am Attribut `data-theme="quarto"`. In `include/booktem.css`:

```css
.tippy-box[data-theme~="quarto"] .csl-entry {
  margin-left: 1.5em !important;
}
.tippy-box[data-theme~="quarto"] .csl-entry,
.tippy-box[data-theme~="quarto"] .csl-entry a {
  overflow-wrap: anywhere;
  word-break: break-word;
}
```

Die erste Regel hebt den negativen Rand nur in der Box auf. Die beiden folgenden Zeilen erlauben es dem Browser, sehr lange DOI- und URL-Zeichenketten notfalls mitten im Wort umzubrechen, statt sie überlaufen zu lassen. Nach der Änderung stimmt die Geometrie der genai4teaching-Box exakt mit der des Workshop-Skripts überein (Rand +22 px, erste Zeile 9 px innerhalb des Kastens, nichts abgeschnitten).

Ergänzend bleibt aus einem früheren Schritt sinnvoll: Die pauschale `.csl-entry`-Einzugsregel wurde auf `div.csl-bib-body > .csl-entry` eingegrenzt, damit der 2-em-Einzug nur im echten Literaturverzeichnis wirkt und nicht in der Kopie. Das war korrekt, aber allein nicht ausreichend – die eigentliche Klippe war der `hanging-indent`-Rand.

## Wichtig für das Ausrollen

Die Datei `include/booktem.css` ist die *Quelle*; die Website lädt aber die Kopie in `docs/include/booktem.css`, die Quarto beim Rendern erzeugt. Eine Änderung an der Quelle wird erst online sichtbar, wenn `docs/` neu gebaut (`quarto render`) oder die Kopie mitgeändert und anschließend committet und zu GitHub geschoben (`git push`) wird. Genau das war der Grund, warum ein erster Korrekturversuch „nicht wirkte“: Die Quelle war geändert, die ausgelieferte Kopie nicht neu erzeugt.

## Die verallgemeinerbaren Lehren

Erstens: Bei einem sichtbaren Darstellungsfehler zuerst das laufende System messen (im Browser die *berechneten* Stilwerte ansehen), statt aus dem Quelltext zu raten – die erste Vermutung (Innenabstand) war plausibel und trotzdem falsch. Zweitens: Ein Gegencheck an einem funktionierenden Fall grenzt die Ursache zuverlässig ein; wenn zwei Seiten sich nur in einer Einstellung unterscheiden und nur eine den Fehler zeigt, ist die Ursache gefunden. Drittens: Wird ein Baustein (hier die Kopie mit den Klassen `csl-entry` und `hanging-indent`) in einem anderen Kontext wiederverwendet, erben ihn auch Regeln, die nie für diesen Kontext gedacht waren; ein `!important` mit weitem Selektor verschärft das. Viertens: Quelle und ausgelieferte Kopie auseinanderzuhalten spart eine ganze Runde vergeblicher Fehlersuche.

---

*Transparenznotiz: Bei der Erstellung dieser Notiz wurde Claude Opus 4.8 / Cowork zur Fehlerdiagnose, zur Umsetzung der CSS-Korrektur und als Reviewer (Sprach- und Konsistenzcheck) genutzt. Die Ursache und die Wirkung der Korrektur wurden im Browser an der laufenden Website gemessen (berechnete Stilwerte, Geometrie der Hover-Box) und gegen das Workshop-Skript gegengeprüft. Alle Inhalte wurden von Roman Bartnik geprüft, überarbeitet und verantwortet.*
