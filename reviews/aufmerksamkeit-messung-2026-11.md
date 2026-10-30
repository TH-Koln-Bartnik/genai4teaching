# Messlauf Aufmerksamkeitsbudget: Animationen im Lehrbuch

Stand: 30.10.2026, 11:23:37 · Repository-Stand `ac6bb54` (Branch `revision-2026-druck`), Kapitel 4 dafür mit Quarto 1.10.19 in einer Arbeitskopie gerendert · Werkzeug: `scripts/pruefe-aufmerksamkeit.cjs` über `scripts/pruefe-aufmerksamkeit-alle.cjs` · Ziele: `scripts/aufmerksamkeit-ziele.json` · Budget je Schritt: ≤ 1 Farbton außer Grau, ≤ 8 neue Wörter, ≤ 40 sichtbare Wörter bis zum vorletzten Schritt, genau 1 neue Gruppe.

Die Zahlen sind Messwerte, kein Urteil. Das Urteil (BESTANDEN oder ÄNDERN je Regel) fällt in Phase 2 mit der Reviewer-Karte. Für Gruppe B gelten die Kurzregeln aus `prozessanimation-lehre`, für Gruppe C nur F4, F5 und T1. „Wörter neu“ und „Gruppen neu“ misst das Skript nur bei Seiten mit `data-ab`; der Bestand hat keine, daher fehlen diese Spalten. Farbton-Klassen sind 30°-Sektoren des Farbkreises (0 = Rot, 30 = Orange, 60 = Gelb, 120 = Grün, 150 = Grüntürkis, 180 = Cyan, 210 = Blau, 270 = Violett).

## Übersicht

| Nr. | Datei | Gr. | Art | Schritte | Farbtöne max. | Farbton-Klassen (°) | Wörter Start | Wörter max. vor Ende | Wörter Ende | Schritte über Budget |
|---|---|---|---|---|---|---|---|---|---|---|
| A1 | `interactions/skill-karte.html` | A | 16 Schritte, __p7.gehe | 16 | 4 | 0, 30, 150, 210 | 52 | 258 | 258 | 16 von 16 |
| A2 | `interactions/agenten-gedaechtnis.html` | A | zeitgesteuerte Infografik, Standbild | 1 (Standbild) | 1 | 330 | 294 | 294 | 294 | 1 von 1 |
| A3 | `interactions/ki-arbeitsweisen-durchspiel.html` | A | 3 Fälle × 5 Arbeitsweisen, Adapter über die Knöpfe | 15 | 3 | 30, 150, 210 | 335 | 504 | 326 | 15 von 15 |
| A4 | `interactions/agenten-engpass.html` | A | Zeitachse; Schritte = Knopf „Schritt“ (nächstes Ereignis) bis t = 120 min | 44 | 2 | 30, 210 | 52 | 67 | 75 | 44 von 44 |
| A5-zeit | `interactions/ki-entwicklung.html?zeige=zeithorizont` | A | Diagramm Zeithorizont, Standbild | 1 (Standbild) | 1 | 210 | 116 | 116 | 116 | 1 von 1 |
| A5-kosten | `interactions/ki-entwicklung.html?zeige=kosten` | A | Kosten-Raster; Schritt 1 = Schätzfrage, danach je „Weiter“ eine Preisstufe (Probeschätzung 100) | 9 | 6 | 30, 120, 150, 210, 240, 330 | 160 | 161 | 299 | 9 von 9 |
| A5-weisen | `interactions/ki-entwicklung.html?zeige=arbeitsweisen` | A | Schema Arbeitsweisen, Standbild | 1 (Standbild) | 3 | 30, 150, 210 | 168 | 168 | 168 | 1 von 1 |
| B1-anim | `interactions/littles-law-animation.html` | B | scm-viz-Bundle, Standbild | 1 (Standbild) | 2 | 180, 210 | 67 | 67 | 67 | 1 von 1 |
| B1-ojs | `docs/kapitel04.html` | B | OJS-Widget _ojs/littles-law.qmd im gerenderten Kapitel; Schritt 1 Startbild, Schritt 2 nach Vorhersage „Nein, deutlich daneben“ | 2 | 2 | 0, 150 | 77 | 77 | 186 | 2 von 2 |
| B2 | `docs/kapitel04.html` | B | OJS-Widget _ojs/bullwhip.qmd im gerenderten Kapitel; Schritt 1 Startbild, Schritt 2 nach Vorhersage „etwa zwei- bis dreimal so stark“ | 2 | 1 | 0 | 102 | 102 | 246 | 1 von 2 |
| B3 | `interactions/galerie-animationen.html` | B | Galerie, je Beitrag ein Bild (Adapter über die Punkte) | 3 | 4 | 0, 180, 210, 330 | 70 | 76 | 139 | 3 von 3 |
| B4 | `interactions/line-widget.html` | B | Widget (über B3), Standbild | 1 (Standbild) | 2 | 0, 150 | 297 | 297 | 297 | 1 von 1 |
| C1 | `interactions/tokenizer-explorer.html` | C | Werkzeug; Farbe trennt Tokens (Lerninhalt) | 1 (Standbild) | 7 | 30, 60, 150, 180, 210, 270, 330 | 118 | 118 | 118 | 1 von 1 |
| C2 | `interactions/llm-agent-patterns-matching.html` | C | Zuordnungsübung | 1 (Standbild) | 1 | 240 | 73 | 73 | 73 | 1 von 1 |
| C3 | `interactions/llm-game-standalone.html` | C | Spiel (React/Tailwind aus CDN) | 1 (Standbild) | 5 | 0, 30, 150, 210, 270 | 125 | 125 | 125 | 1 von 1 |
| C4 | `interactions/llm-rag-agent-game.html` | C | Spiel | 1 (Standbild) | 2 | 210, 240 | 61 | 61 | 61 | 1 von 1 |
| C5 | `interactions/tutor-kosten.html` | C | Rechner __tutor, noch nicht eingebunden | 1 (Standbild) | 0 | – | 182 | 182 | 182 | 1 von 1 |

## Einzelwerte je Schritt

### A1: `interactions/skill-karte.html`

Bühne `#buehne` · 16 Schritte, __p7.gehe

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 52 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 52 sichtbare Wörter |
| 2 | 74 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 74 sichtbare Wörter |
| 3 | 76 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 76 sichtbare Wörter |
| 4 | 97 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 97 sichtbare Wörter |
| 5 | 113 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 113 sichtbare Wörter |
| 6 | 119 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 119 sichtbare Wörter |
| 7 | 131 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 131 sichtbare Wörter |
| 8 | 150 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 150 sichtbare Wörter |
| 9 | 156 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 156 sichtbare Wörter |
| 10 | 168 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 168 sichtbare Wörter |
| 11 | 194 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 194 sichtbare Wörter |
| 12 | 198 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 198 sichtbare Wörter |
| 13 | 203 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 203 sichtbare Wörter |
| 14 | 229 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 229 sichtbare Wörter |
| 15 | 258 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne, 258 sichtbare Wörter |
| 16 | 258 | 4 | 0 30 150 210 | ÄNDERN: 4 Farbtöne |

### A3: `interactions/ki-arbeitsweisen-durchspiel.html`

Bühne `#karte` · 3 Fälle × 5 Arbeitsweisen, Adapter über die Knöpfe

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 335 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 77 neue Wörter, 335 sichtbare Wörter |
| 2 | 368 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 95 neue Wörter, 368 sichtbare Wörter |
| 3 | 504 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 158 neue Wörter, 504 sichtbare Wörter |
| 4 | 473 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 140 neue Wörter, 473 sichtbare Wörter |
| 5 | 350 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 41 neue Wörter, 350 sichtbare Wörter |
| 6 | 327 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 74 neue Wörter, 327 sichtbare Wörter |
| 7 | 334 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 78 neue Wörter, 334 sichtbare Wörter |
| 8 | 459 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 138 neue Wörter, 459 sichtbare Wörter |
| 9 | 447 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 130 neue Wörter, 447 sichtbare Wörter |
| 10 | 320 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 24 neue Wörter, 320 sichtbare Wörter |
| 11 | 304 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 51 neue Wörter, 304 sichtbare Wörter |
| 12 | 348 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 87 neue Wörter, 348 sichtbare Wörter |
| 13 | 440 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 143 neue Wörter, 440 sichtbare Wörter |
| 14 | 421 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 122 neue Wörter, 421 sichtbare Wörter |
| 15 | 326 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 31 neue Wörter |

### A4: `interactions/agenten-engpass.html`

Bühne `#pa-canvas svg` · Zeitachse; Schritte = Knopf „Schritt“ (nächstes Ereignis) bis t = 120 min

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 52 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 52 sichtbare Wörter |
| 2 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 3 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 4 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 5 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 6 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 7 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 8 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 9 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 10 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 11 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 12 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 13 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 14 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 15 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 16 | 67 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 67 sichtbare Wörter |
| 17 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 18 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 19 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 20 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 21 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 22 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 23 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 24 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 25 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 26 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 27 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 28 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 29 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 30 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 31 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 32 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 33 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 34 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 35 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 36 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 37 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 38 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 39 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 40 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 41 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 42 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 43 | 56 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 56 sichtbare Wörter |
| 44 | 75 | 2 | 30 210 | ÄNDERN: 2 Farbtöne |

### A5-kosten: `interactions/ki-entwicklung.html?zeige=kosten`

Bühne `#k-kosten` · Kosten-Raster; Schritt 1 = Schätzfrage, danach je „Weiter“ eine Preisstufe (Probeschätzung 100)

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 160 | 1 | 30 | ÄNDERN: 160 sichtbare Wörter |
| 2 | 143 | 1 | 30 | ÄNDERN: 143 sichtbare Wörter |
| 3 | 148 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 148 sichtbare Wörter |
| 4 | 152 | 2 | 30 210 | ÄNDERN: 2 Farbtöne, 152 sichtbare Wörter |
| 5 | 152 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 152 sichtbare Wörter |
| 6 | 156 | 3 | 30 150 210 | ÄNDERN: 3 Farbtöne, 156 sichtbare Wörter |
| 7 | 161 | 4 | 30 150 210 330 | ÄNDERN: 4 Farbtöne, 161 sichtbare Wörter |
| 8 | 161 | 5 | 30 120 150 210 330 | ÄNDERN: 5 Farbtöne, 161 sichtbare Wörter |
| 9 | 299 | 6 | 30 120 150 210 240 330 | ÄNDERN: 6 Farbtöne |

### B1-ojs: `docs/kapitel04.html`

Bühne `.ll-widget:not(.bw-widget)` · OJS-Widget _ojs/littles-law.qmd im gerenderten Kapitel; Schritt 1 Startbild, Schritt 2 nach Vorhersage „Nein, deutlich daneben“

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 77 | 0 | – | ÄNDERN: 77 sichtbare Wörter |
| 2 | 186 | 2 | 0 150 | ÄNDERN: 2 Farbtöne |

### B2: `docs/kapitel04.html`

Bühne `.bw-widget` · OJS-Widget _ojs/bullwhip.qmd im gerenderten Kapitel; Schritt 1 Startbild, Schritt 2 nach Vorhersage „etwa zwei- bis dreimal so stark“

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 102 | 0 | – | ÄNDERN: 102 sichtbare Wörter |
| 2 | 246 | 1 | 0 | ok |

### B3: `interactions/galerie-animationen.html`

Bühne `#galerie` · Galerie, je Beitrag ein Bild (Adapter über die Punkte)

| Schritt | Wörter sichtbar | Farbtöne | Farbton-Klassen (°) | Ergebnis |
|---|---|---|---|---|
| 1 | 70 | 2 | 0 330 | ÄNDERN: 2 Farbtöne, 70 sichtbare Wörter |
| 2 | 76 | 2 | 0 330 | ÄNDERN: 2 Farbtöne, 76 sichtbare Wörter |
| 3 | 139 | 4 | 0 180 210 330 | ÄNDERN: 4 Farbtöne |

## Messgrenzen

Native Formularelemente (Schieberegler, Optionsfelder, Häkchen) zeichnet der Browser in seiner eigenen Akzentfarbe; das Skript sieht diese Farbe nicht, sie fehlt also in den Farbtonzahlen von A5, B1-ojs, B2 und B4. Standbilder zählen allen sichtbaren Text der Bühne, auch Einleitung, Quellen und Datentabellen-Überschrift; bei A5 und C liegt die Wortzahl deshalb über dem, was ein Leser als „Animation“ wahrnimmt. A2 ist zeitgesteuert und wird im Endzustand gemessen; wie viel Text während des Ablaufs gleichzeitig steht, zeigt die Messung nicht. B3 bettet `line-widget.html` als eigene Seite ein; deren Text zählt unter B4, nicht unter B3. Bei A5-kosten gibt der Adapter eine Probeschätzung von 100 ab, damit „Weiter“ freigeht.

## Auffälligkeiten für Phase 2

Kein Ziel bleibt im Budget; das ist erwartbar, weil der Bestand vor dem Regelblock entstand. Die Verstöße fallen in drei Muster. Erstens Text: Alle zwölf Ziele der Gruppen A und B zeigen schon im ersten Schritt mehr als 40 Wörter, A3 mit 335, B4 mit 297 und A2 mit 294 am meisten; A1 und A4 starten mit 52 am nächsten am Budget, A1 wächst danach Schritt für Schritt auf 258. Zweitens Kategorienfarben: A1 (4 Töne), A3 und A5-weisen (je 3: Mensch, gemeinsam, KI) und A5-kosten (bis 6, eine Farbe je Preisstufe) codieren Kategorien über Farbe (F4). Im Graustufenbild von A5-kosten sind die Preisstufen im Raster nicht mehr zu unterscheiden (F1). Drittens Bewegung: A4 ist mit 2 Tönen und 52 bis 75 Wörtern das sparsamste Ziel der Gruppe A, hat aber 44 Ereignisschritte; das Urteil hängt hier an den Bewegungsregeln „nur eine Sache bewegt sich“ und „Klick statt Zeitleiste“, nicht an der Farbe.

Für Entscheidung E1 (scm-viz-Farbrollen): Das Bundle selbst bringt im Standbild von B1-anim zwei Töne (Cyan, Blau), in B3 bringt die Galerie-Oberfläche selbst schon beim ersten Beitrag Rot und Magenta mit. Die OJS-Widgets in Kapitel 4 sind sparsamer: B2 zeigt nach der Vorhersage genau einen Ton (Rot für die Bestellungen), B1-ojs zwei (Rot, Grüntürkis). Gruppe C liegt mit 0 bis 7 Tönen weit auseinander; C1 (7 Töne) ist die im Plan begründete Ausnahme, C3 (5 Töne, Spiel aus CDN-Bibliotheken) wäre der einzige weitere Kandidat für eine Prüfung nach E2 (b).

## Bilder

Abgelegt in Tresorit unter `1-Research/06-Lehrbuch-Publikation-Logos/Projektnotizen-Claude/aufmerksamkeit-animationen/messung-2026-10-30/`: je Ziel eine Übersicht `uebersicht-<Nr.>.png` (je Schritt Farbe links, Graustufen rechts) und die Einzelbilder je Schritt in `einzelbilder-gruppe-A.zip` und `einzelbilder-gruppen-B-C.zip`. Neu erzeugen: `npm run pruefe:aufmerksamkeit -- --md reviews/aufmerksamkeit-messung-2026-11.md --bilder <ordner> --wurzel <Arbeitskopie mit gerendertem docs/kapitel04.html>`.
