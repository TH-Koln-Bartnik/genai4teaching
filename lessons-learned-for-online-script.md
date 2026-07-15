# Lessons Learned: Zu viel Rand in den Zitations-Hover-Boxen

*Notiz zum Online-Skript (Quarto-Book), erstellt am 2026-07-15.*

## Worum es geht (in einem Satz)

Wenn man im Skript mit der Maus über eine Quellenangabe fährt, öffnet sich ein kleines Vorschaufenster mit der vollständigen Literaturangabe – eine **Hover-Box** (auch *Tooltip*, wörtlich „Werkzeug-Tipp“, ein eingeblendeter Hinweiskasten). In diesen Kästchen war der Rand zu groß, und lange Links (DOI, URL) wurden am Rand abgeschnitten.

## Das Problem in Alltagssprache

Eine Literaturangabe im *gedruckten* Verzeichnis bekommt bewusst einen hängenden Einzug: Die erste Zeile steht ganz links, alle Folgezeilen sind eingerückt. So findet das Auge die Autorennamen schnell untereinander. In CSS – der Sprache, die dem Browser sagt, *wie* eine Webseite aussehen soll (CSS = *Cascading Style Sheets*, „kaskadierende Gestaltungsvorlagen“) – wird dieser Einzug über zwei Angaben erzeugt: einen linken Innenabstand (`padding-left`) und einen negativen Erstzeilen-Einzug (`text-indent`), die sich gegenseitig ausgleichen.

Der Fehler lag darin, dass diese Einzugs-Regel **pauschal für jede Literaturangabe** galt – gekennzeichnet durch die CSS-Klasse `.csl-entry` (CSL = *Citation Style Language*, das Format, in dem Zitierstile wie APA definiert sind). Quarto verwendet dieselbe Bausteinklasse aber an zwei ganz verschiedenen Orten: einmal im großen Literaturverzeichnis am Kapitelende, und einmal im engen Vorschaukästchen beim Überfahren einer Quelle.

Die Analogie: Es ist, als hätte man eine Vorschrift „Jeder Tisch bekommt zwei Meter Abstand zur Wand“ erlassen – sinnvoll im großen Speisesaal (Literaturverzeichnis), aber unbrauchbar in der winzigen Abstellkammer (Hover-Box), wo der Tisch dann halb in der Wand steckt. Genau das passierte: Der feste Innenabstand von 2 em fraß die schmale Kastenbreite auf, und weil lange DOI-Links nicht umbrechen durften, verschwand ihr Ende hinter dem Rand.

*Randnotiz zur Etymologie:* Die Maßeinheit **em** kommt aus dem Buchdruck und bezeichnete ursprünglich die Breite des Großbuchstabens „M“ in der jeweiligen Schrift – daher der Name. Heute steht 1 em für die aktuelle Schriftgröße; der Einzug wächst also mit dem Text mit.

## Die Ursache, technisch

Dieselbe Regel stand **doppelt** im Projekt – einmal in `include/booktem.css` und einmal in `include/style.css`:

```css
.csl-entry {
  padding-left: 2em;
  text-indent: -2em;
}
```

Der Selektor `.csl-entry` (der Teil vor der Klammer, der bestimmt, *worauf* die Regel zielt) ist zu weit gefasst: Er trifft jede Literaturangabe, egal ob im Verzeichnis oder in der Hover-Box.

## Die Lösung

Der Trick ist, die Einzugs-Regel nur noch dort greifen zu lassen, wo sie hingehört – im *angezeigten* Literaturverzeichnis. Quarto verpackt dieses in einen Container mit der Klasse `csl-bib-body` (*bibliography body*, „Verzeichnis-Körper“). Der Selektor `div.csl-bib-body > .csl-entry` liest sich als „nur die Einträge, die direkt in diesem Verzeichnis-Container stecken“ – das Zeichen `>` bedeutet „direktes Kind von“. Die Hover-Box hat diesen Container nicht als Elternteil und bleibt darum unberührt.

In `include/booktem.css` steht die pauschale Regel nun ersetzt durch:

```css
/* Hanging indent only in the displayed bibliography */
div.csl-bib-body > .csl-entry {
  padding-left: 2em;
  text-indent: -2em;
}
```

Die doppelte Regel in `include/style.css` wurde ersatzlos gelöscht, damit sie den engeren Selektor nicht wieder aushebelt.

Zusätzlich sichern zwei Zeilen die langen Links in der Hover-Box ab. Sie erlauben dem Browser, DOI- und URL-Text notfalls mitten im Wort umzubrechen, statt ihn abzuschneiden (`overflow-wrap: anywhere` und `word-break: break-word` heißt sinngemäß „lieber irgendwo umbrechen als überlaufen lassen“). Der Selektor zielt gezielt auf die Quarto-Hover-Boxen, erkennbar am Attribut `data-theme="quarto"`:

```css
/* Prevent DOI and URL text from being clipped in citation hover boxes */
.tippy-box[data-theme~="quarto"] .csl-entry,
.tippy-box[data-theme~="quarto"] .csl-entry a {
  overflow-wrap: anywhere;
  word-break: break-word;
}
```

*Randnotiz:* Die Kästchen heißen im Code `tippy-box`, nach **Tippy.js** – der kleinen Programmbibliothek, die Quarto für diese Einblendungen nutzt. Eine *Library* („Bibliothek“) ist fertiger, wiederverwendbarer Code, den man einbindet, statt ihn selbst zu schreiben – wie ein Fertigbauteil im Regal statt einer Eigenanfertigung.

## Ergebnis

Die Hover-Referenzen verhalten sich jetzt praktisch wie im Workshop-Skript: kompakter Rand, nichts wird abgeschnitten. Der hängende Einzug bleibt im Kapitel-Literaturverzeichnis erhalten, wo er gebraucht wird.

Damit die Änderung online sichtbar wird, muss das Skript neu gebaut (`quarto render`) und der `docs/`-Ordner nach GitHub geschoben werden.

## Die verallgemeinerbare Lehre

Eine Gestaltungsregel sollte so eng gefasst sein wie ihr Zweck. Wird derselbe Baustein (`.csl-entry`) an mehreren Orten wiederverwendet, darf man ihn nicht pauschal ansprechen, sondern nur im gewünschten Kontext (`div.csl-bib-body > .csl-entry`). Und dieselbe Regel an zwei Stellen zu pflegen (hier `booktem.css` und `style.css`) rächt sich früher oder später – eine Quelle der Wahrheit genügt.

---

*Transparenznotiz: Bei der Erstellung dieser Notiz wurde Claude Opus 4.8 / Cowork zur Fehlerdiagnose, zur Umsetzung der CSS-Korrektur und als Reviewer (Sprach- und Konsistenzcheck) genutzt. Die Selektoren wurden gegen den tatsächlich gerenderten HTML-Code im `docs/`-Ordner geprüft. Alle Inhalte wurden von Roman Bartnik geprüft, überarbeitet und verantwortet.*
