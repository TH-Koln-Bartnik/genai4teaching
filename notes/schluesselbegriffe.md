# Schablone: Kasten „Schlüsselbegriffe“ am Kapitelende

Stand 01.11.2026, Probe in Kapitel 1 umgesetzt. Entscheidungen: Standard je Kapitel ist die Fall-Zuordnung plus Wiederkehr-Karten; als Alternativen je Kapitel stehen Stapel sortieren, Verwechslungspaare, Lückentext und Reihenfolge bereit. Das Grundbegriffe-Spiel in Abschnitt 2.1 bleibt Einstieg; der Kasten am Ende von Kap. 2 nutzt deshalb eine andere Form als Begriff ↔ Definition.

## Bausteine

- Daten nur im `.qmd`; Online-Verhalten in `include/schluesselbegriffe.html` (ein Skript für alle Modi), Druck und EPUB in `_filters/schluesselbegriffe.lua`.
- Position: Kapitelende, direkt nach dem Kasten „Kernaussagen“, vor „Lernfragen“.
- Anker an der Fundstelle jedes Begriffs im Kapiteltext: `[]{#sb-<begriff>}` direkt hinter dem Begriff (bei fett gesetzten Satzanfängen davor). Online verlinkt die Liste dorthin, im PDF steht die Seitenzahl (`\pageref`), im EPUB ein Link „zur Fundstelle“.
- Kennungen: `k<Kapitel>-<kurzname>`, Kleinbuchstaben, Umlaute ausgeschrieben (`k1-erwuenschte-schwierigkeiten`). Sie sind zugleich Speicherschlüssel im Browser: `genai4teaching:sb:<kennung>`. Nie umbenennen, sonst gehen Einstufungen der Lesenden verloren.
- Lösungen im Druck: Platzhalter `::: {.sb-loesungen kapitel="N"}` + `:::` im Anhang „Lösungshinweise zu Lernfragen und Übungen“ (`kapitel10-appendix05-loesungshinweise.qmd`), direkt vor der Überschrift des nächsten Kapitels. Der Filter setzt dort Begriff und Begründung je Aufgabe ein; online entfällt der Platzhalter.

## Quelltext (Muster Kap. 1)

```markdown
::: {.callout-note .schluesselbegriffe title="Schlüsselbegriffe"}
::: sb-begriffe
::: {.sb-begriff begriff="k1-leitplanke"}
Leitplanke (*guardrail*)

Musterantwort in ein, zwei Sätzen (nur online sichtbar, nach dem Aufdecken).
:::
:::

::: {.sb-spiel modus="fall" kapitel="1"}
::: {.sb-aufgabe loesung="k1-leitplanke" ablenker="k1-harness k1-anleitung k1-faehigkeitsueberhang"}
Szene als ein Absatz.

::: sb-herkunft
Herkunft: … (@sec-…).
:::

::: sb-begruendung
Begründung in ein, zwei Sätzen.
:::
:::
:::

::: {.sb-wiederkehr quellen="kapitel01.html" druck="k1-auslagerung k1-leitplanke"}
:::
:::
```

## Modi

| Modus | Daten je Aufgabe | Online | Druck/EPUB |
|---|---|---|---|
| `fall` (Standard) | `loesung`, `ablenker` (Kennungen aus der Liste desselben Kapitels) | Knöpfe alphabetisch, Rückmeldung + Begründung | Tabelle Nr. / Szene / Begriff (leer) |
| `paare` | wie `fall`, genau ein Ablenker | zwei Knöpfe | Tabelle, „(A oder B)“ in der Szene |
| `stapel` | am Spiel `koerbe="A\|B\|C"`, je Aufgabe `loesung="B"` | Knopf je Stapel | Ankreuztabelle |
| `luecke` | Satz mit `[ ]{.sb-luecke}`, `loesung`, optional `auch="Synonym\|engl. Begriff"` | Eingabefeld, toleranter Abgleich (Groß-/Kleinschreibung, Umlaute, Klammern) | nummerierte Sätze mit Strich |
| `reihenfolge` | geordnete Liste in richtiger Reihenfolge | Schritte gemischt, nacheinander anklicken | Schritte fest gemischt, zum Nummerieren |
| Wiederkehr | `quellen` (frühere Kapitelseiten), optional `anzahl` (Standard 3), `druck` (feste Auswahl für Papier) | 2–3 Karten: zuerst „nicht“, dann „halb“ eingestufte, sonst offene, zuletzt gewusste Begriffe, je Gruppe zufällig; Eingabefeld für die eigene Erklärung (nicht gespeichert), Musterantwort, Einstufung | Liste mit Seitenzahl |

## Regeln für Inhalte

1. 8–12 Begriffe je Kapitel, deutsch, englischer Fachbegriff kursiv in Klammern (S6-Regel); nur Begriffe, die das Kapitel selbst einführt oder ausführt.
2. 4–6 Szenen, möglichst aus der eigenen Lehre (Tutor-Bot BWL, SSCM-Simulationsprojekt, WAGP-Projekte, Praxispartner-Projekte) oder aus den Belegen des Kapitels. Herkunft immer angeben; was nach einem Prüfkriterium oder einer Empfehlung konstruiert ist, heißt „konstruiert nach …“. Nichts erfinden, was als echter Fall gelesen würde.
3. Ablenker nur aus der Liste desselben Kapitels und keiner, der ebenfalls passt. Prüfen: Würde eine Fachkollegin einen Ablenker verteidigen? Dann tauschen.
4. Szene nicht wörtlich aus dem Kapitel übernehmen (sonst prüft sie nur Wiedererkennen).
5. Keine TODO-Kommentare im Quelltext; offene Punkte gehören in den Projektplan.

## Prüfen

- `quarto render --to html` (danach Download-PDF/EPUB in `docs/` aus Git zurückholen).
- Playwright 1200 und 390 px: keine JS-Fehler, Wahl → Rückmeldung mit Begründung, Einstufung bleibt nach Neuladen, keine horizontale Verbreiterung durch den Kasten.
- Wiederkehr: nur über HTTP prüfbar (die Karten werden per `fetch` aus den Kapitelseiten gelesen; über `file://` bleibt der Bereich ausgeblendet).
- PDF-Testrender in einer Kopie (`--profile print --to pdf` leert sonst `docs/`): Kasten mit Seitenzahlen, keine `??`, Lösungen im Anhang.
