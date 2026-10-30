# Prüf-Plan: Bestehende Animationen im Lehrbuch gegen die Aufmerksamkeitsregeln

Stand: 30.10.2026, 17:00 (Phase 0, 1 und 2 erledigt) · Repository `genai4teaching`, Branch `revision-2026-druck`, gemessen am Commit `ac6bb54` · Maßstab: Regelblock F1–F7, T1–T7, A1–A5 aus dem Skill `lehranimation-schritte` (Kurzform in `prozessanimation-lehre`) · Werkzeug: `scripts/pruefe-aufmerksamkeit.cjs`, Sammellauf `npm run pruefe:aufmerksamkeit` · Herleitung: `claude/ARBEITSNOTIZ-aufmerksamkeit-animationen-2026-10-30.md` · Messwerte: `reviews/aufmerksamkeit-messung-2026-11.md` · Urteil: `reviews/aufmerksamkeit-urteil-2026-10-30.md`

## Bestand

Dreizehn Seiten in `interactions/` und zwei OJS-Widgets in `_ojs/`. Die Gruppen bestimmen, wie streng geprüft wird. Die Prüfaufrufe stehen jetzt in `scripts/aufmerksamkeit-ziele.json` (17 Ziele, weil A5 drei Ansichten und B1 zwei Fassungen hat).

**Gruppe A, Erklär-Animationen: volle Regeln, Umbau wahrscheinlich**

| Nr. | Datei | Kap. | Art, Steuerung | Messlauf 30.10. (Wörter Start → Ende, Farbtöne max.) |
|---|---|---|---|---|
| A1 | `skill-karte.html` (Konzept 7) | 2 | 16 Schritte, `__p7.gehe` | 52 → 258, 4 Töne |
| A2 | `agenten-gedaechtnis.html` | 2 | zeitgesteuerte Infografik, Standbild | 294, 1 Ton |
| A3 | `ki-arbeitsweisen-durchspiel.html` | 2 | 3 Fälle × 5 Szenen, Adapter über die Knöpfe | 335 → 326 (max. 504), 3 Töne |
| A4 | `agenten-engpass.html` (Konzept 6) | 2 | 44 Ereignisschritte über den Knopf „Schritt“ | 52 → 75, 2 Töne |
| A5 | `ki-entwicklung.html` | 2 | drei Ansichten: Zeithorizont, Kosten-Raster (9 Schritte), Arbeitsweisen | 116 / 160 → 299 / 168; 1 / bis 6 / 3 Töne |

**Gruppe B, Prozess- und Simulationsanimationen: Kurzregeln aus `prozessanimation-lehre`**

| Nr. | Datei | Kap. | Messlauf 30.10. |
|---|---|---|---|
| B1 | `littles-law-animation.html`, `_ojs/littles-law.qmd` | 4 | Bundle 67 Wörter, 2 Töne; OJS 77 → 186, 2 Töne |
| B2 | `_ojs/bullwhip.qmd` | 4 | 102 → 246, 1 Ton (Rot) |
| B3 | `galerie-animationen.html` | 1 | 3 Beiträge, 70 → 139, 4 Töne |
| B4 | `line-widget.html` | über B3 | 297, 2 Töne |

**Gruppe C, Übungen, Spiele, Werkzeuge: nur F4, F5, T1; Farbe darf Lerninhalt sein**

| Nr. | Datei | Kap. | Messlauf 30.10. |
|---|---|---|---|
| C1 | `tokenizer-explorer.html` | 2 | 7 Töne, begründete Ausnahme von F4 |
| C2 | `llm-agent-patterns-matching.html` | 2 | 1 Ton |
| C3 | `llm-game-standalone.html` | 2 | 5 Töne |
| C4 | `llm-rag-agent-game.html` | 2 | 2 Töne |
| C5 | `tutor-kosten.html` | 2 (seit `ac6bb54` eingebunden) | 0 Töne |

**Gruppe D, Druckzwillinge** (`images/druck/*-qr.png`): Sie werden nach jedem Umbau neu erzeugt. Der Graustufentest (F1) zählt hier doppelt, weil der Druck bis auf 20 Farbseiten schwarzweiß ist.

## Ablauf

**Phase 0, Vorbereitung: erledigt 30.10.** `scripts/pruefe-aufmerksamkeit.cjs` (Skill-Fassung plus `--json`, `--warte`, URL-Ziele, Bilder nur der Bühne), `scripts/pruefe-aufmerksamkeit-alle.cjs` (Sammellauf über lokalen HTTP-Server, Markdown-Tabelle, Bildübersicht je Ziel), `scripts/aufmerksamkeit-ziele.json`, Eintrag `pruefe:aufmerksamkeit` in `package.json`. Commits `af3d687`, `aa98474`.

**Phase 1, Messlauf: erledigt 30.10.** Alle 17 Ziele gemessen, 219 Bilder. Tabelle: `reviews/aufmerksamkeit-messung-2026-11.md`. Bilder: Tresorit `…/aufmerksamkeit-animationen/messung-2026-10-30/` (je Ziel `uebersicht-<Nr.>.png`, Einzelbilder in zwei ZIP-Archiven).

**Phase 2, Urteil: erledigt 30.10.** Ergebnis in `reviews/aufmerksamkeit-urteil-2026-10-30.md`. Die Reviewer-Karte des Skills wird je Datei angewandt: BESTANDEN oder ÄNDERN je Regel, ein Umbauvorschlag in drei Sätzen, der Aufwand als S, M oder L. Roman entscheidet je Datei zwischen „umbauen“, „kleine Korrektur“ und „begründete Ausnahme“. Grundlage sind die Übersichtsbilder und die Tabelle; der Messlauf muss dafür nicht wiederholt werden.

**Phase 3, Umbau: eine Animation je Sitzung.** Jede Sitzung startet frisch und liest nur diesen Plan und die Arbeitsnotiz. Reihenfolge:

1. **A1** als Kalibrierfall. Die Kontextlisten werden zu Kürzeln, die Kategorienfarben weichen Schraffur und Beschriftung, und die Skill-Karte wird das einzige Leitobjekt. Danach werden die Budgetzahlen geprüft.
2. **A2:** Klick statt Zeitleiste, Text zu Kürzeln.
3. **A3:** Kategorienfarben durch Form und Position ersetzen. Es bleibt eine Kontrastfarbe, falls Mensch gegen KI selbst das Lernziel ist.
4. **A4**, dann **A5**.
5. **Gruppe B** nach Entscheidung E1.
6. **Gruppe C** nur bei groben Verstößen.

Jeder Umbau durchläuft dieselben Schritte:

1. Storyboard vorlegen und freigeben lassen.
2. Umbauen.
3. Das Prüfskript muss grün melden (`npm run pruefe:aufmerksamkeit -- --nur <Nr.>`).
4. Den Druckzwilling neu erzeugen.
5. Das Kapitel als HTML rendern.
6. Sichtprüfung in Farbe und in Graustufen.

**Phase 4, Abschluss.** Der Messlauf wird wiederholt, das Ergebnis als Vorher-Nachher-Tabelle festgehalten. Falls der Kalibrierfall es nahelegt, werden die Budgetzahlen im Skill angepasst; dabei die Ergänzungen des Prüfskripts (`--json`, `--warte`, URL-Ziele, Bühnenbilder) in Anhang B des Skills übernehmen.

## Entscheidungen für Roman

- **E1 scm-viz-Farbrollen:** (a) Die Bibliothek behält ihren Styleguide, die Ausnahme wird dokumentiert. (b) Die Buchfassung bekommt ein Thema aus Graustufen und einer Akzentfarbe. (c) Die Entscheidung fällt nach dem Messlauf. **Entschieden am 30.10.: (c).** Messdaten liegen jetzt vor: Bundle 2 Töne (Cyan, Blau), Galerie-Oberfläche zusätzlich Rot und Magenta, OJS-Widgets 1 bis 2 Töne.
- **E2 Gruppe C:** (a) Sie wird nur auf grobe Verstöße geprüft. (b) Sie wird voll geprüft. Offen; einziger Kandidat neben der Ausnahme C1 ist C3 mit 5 Tönen.
- **E3 `agenten-gedaechtnis`:** (a) Umbau auf Klick. (b) Die Zeitleiste bleibt, nur der Text wird gekürzt. Offen.
- **E4 Budget:** (a) Die Faustregeln gelten wie vorgeschlagen. (b) Sie werden nach dem Kalibrierfall A1 angepasst. Offen.

## Sitzungsstand 30.10.2026, 12:30

Phase 0 und 1 erledigt. Repository `genai4teaching` mit Schreibrecht eingebunden, Tresorit-Ordner `06-Lehrbuch-Publikation-Logos` freigegeben. Kapitel 4 wurde für B1-ojs und B2 mit Quarto 1.10.19 in einer Arbeitskopie gerendert, weil `docs/kapitel04.html` im Repository vom 20.10. stammt und die OJS-Widgets noch nicht enthält; `docs/` im Repository blieb unverändert. Während des Laufs hat eine parallele Sitzung `ki-entwicklung.html` und `tutor-kosten.html` geändert (`ac6bb54`); der Lauf wurde am neuen Stand wiederholt. Hauptbefunde: Kein Ziel bleibt im Budget. Alle zwölf Ziele der Gruppen A und B starten mit mehr als 40 Wörtern; A1, A3, A5-weisen und A5-kosten codieren Kategorien über Farbe, beim Kosten-Raster verschwimmen die Preisstufen in Graustufen. Nächster Schritt: Phase 2 (Urteil je Datei) in frischer Sitzung, Eingaben nur dieser Plan, die Messtabelle und die Übersichtsbilder.

## Sitzungsstand 30.10.2026, 17:00

Phase 2 erledigt: Reviewer-Karte auf alle 17 Ziele angewandt, Ergebnis in `reviews/aufmerksamkeit-urteil-2026-10-30.md` (Übersicht, Regelmatrix Gruppe A, Kurzregeln B, F4/F5/T1 für C, Empfehlungen zu E2–E4). Kurzfassung: A1 und A5-kosten umbauen (L, M), A2 umbauen (M), A3 kleine Korrektur plus begründete Textausnahme (M), A4, A5-zeit, A5-weisen kleine Korrekturen (je S), B1-ojs und B2 nur Anmerkungen kürzen und grünen Kasten neutralisieren, B4 ist englisch und muss übersetzt werden, C1, C2, C4, C5 freigeben (C2/C4 optional ✓/✗ ergänzen). T7 (`?hoersaal`) fehlt in allen Gruppe-A-Seiten. Neue Befunde: C3 `llm-game-standalone.html` wurde nach dem Messlauf über den Merge mit `main` geändert und muss neu gemessen werden; es lädt React und Tailwind aus dem Netz. A4 passt als Prozessanimation besser zu Gruppe B. Beim Kosten-Raster verrät das leere 725er-Raster vor der Schätzung die Größenordnung der Lösung. Entscheidungen E2–E4 und die Wahl je Datei liegen bei Roman. Nächster Schritt: Phase 3 mit A1 als Kalibrierfall in frischer Sitzung; danach eine Sammelsitzung für die kleinen Korrekturen.

