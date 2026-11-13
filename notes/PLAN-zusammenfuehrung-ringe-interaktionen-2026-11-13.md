# Zusammenführung: Drei Ringe und Interaktionen-Prüfung (13.11.2026)

Dieser Plan führt zwei Reduktionssitzungen vom 13.11. zusammen und **gilt vor beiden**, wo sie sich widersprechen:

- `claude/zuspitzung-drei-ringe/PLAN-zuspitzung-drei-ringe-2026-11-13.md` mit `ENTSCHEIDUNGEN-drei-ringe-2026-11-13.md` (Text, didaktische Reduktion nach Wiggins & McTighe und Lehner)
- `claude/interaktionen-pruefung/PRUEFUNG-interaktionen-2026-11-13.md`, Abschnitt 11, mit `PRUEFSCHEMA-interaktionen-2026-11-13.md` (eingebettete Elemente)

Beide Sitzungen gingen von `main` @ `2ba1edb` aus. Seitdem ist der Kapitelauftakt Kap. 3 gemergt (`main` @ `17c3688`), der zwei Konflikte erst erzeugt hat. Alle Entscheidungen unten hat Roman am 13.11. gegen 12 Uhr per MC getroffen.

## 1 Was zusammenpasst

Die beiden Sitzungen stützen sich in den meisten Punkten gegenseitig. Wo die Ringe einen Abschnitt verdichten, nimmt die Interaktionen-Prüfung oft genau die Elemente heraus, die ihn aufblähen: Kap. 2 „Was sich seit 2022 geändert hat“ wird auf ~500 Wörter verdichtet und verliert Autonomiestufen und Drei Labore; „Gedächtnis“ geht auf ~350 Wörter und behält nur die Animation „Vier Stufen“; „Blick ins Modell“ geht online und verliert die Texas-Animation an die Praxisbeispiele-Seite. Die Regel „jedes Beispiel lebt einmal“ deckt sich mit der Showcase-Regel O2: Centaur bis dunkle Fabrik nur in Kap. 3, PS2 Pal nur einmal in Kap. 6, das Bibliothek-Spiel geht aus Kap. 3 hinaus, und der Economic Index bleibt im Druck nur in Kap. 1. Kennenswert-Abschnitte stehen weiter online im Kapitel; Elemente, die die Interaktionen-Sitzung dort „behalten“ hat (Höher oder tiefer in Kap. 1, Making-of in Kap. 6), bleiben deshalb online sichtbar und erscheinen im Druck als Satz mit QR-Code.

## 2 Konflikte und Entscheidungen

| Nr. | Konflikt | Ringe-Sitzung | Interaktionen-Sitzung | Entscheidung 13.11. |
|---:|---|---|---|---|
| Z1 | Rechner Little's Law und Bullwhip | nur Kap. 7, Kap. 6 verweist | bleiben in Kap. 6 bei „Prüfen, ob eine KI-gebaute Simulation rechnet“ | **Kap. 7.** Kap. 6 `sec-widget-pruefen` bleibt Kern mit dem scm-visuals-Beispiel und verweist auf Kap. 7. IDs `sec-widget-littles-law` und `sec-widget-bullwhip` ziehen mit um, Verweise lösen weiter auf. |
| Z2 | Kap. 3 „Was sind unsere Aufgaben?“ | Kennenswert, ein Absatz im Druck | Heatmap und Aufgabenmodell-Video bleiben im Kapitel | **Wichtig, ~500 Druckwörter**: Aufgabenmodell-Tabelle, Befund zur Handschrift (Levine) und Befund „keine Zeit gewonnen“ im Druck, weil Lernziel 1 und die Einschätzungen `ez-k3b-1` und `ez-k4-1` daran hängen. Heatmap und Video online im Kapitel, im Druck nicht; Bibliothek der Prompts auf die Praxisbeispiele-Seite. |
| Z3 | Agenten-Engpass („Kugel A“) und Kapitelauftakt Kap. 3 | Kugel-Simulation raus | Animation raus | **Raus, Text nachziehen.** Animation, Standbild, Vorhersage-Aufforderung und Auswertungsabsatz entfallen; Kasten 2 „Die KI vervielfacht die Abgaben, nicht die Zeit zum Prüfen“ (Branch `k3b-kasten2-engpass`) schließt an „Jeder Haltepunkt kostet Zeit …“ an. Die Auflösung von `ez-k3b-3` stützt sich auf das Prinzip „die langsamste Station bestimmt den Durchsatz“ und auf Kasten 2, ohne Modellzahlen (43,5/28,5 min). Herkunftszeile der Szene Petersen („Ablauf folgt dem Modell“) und Kernaussage 7 anpassen; Lernziel 3 bleibt. |
| Z4 | Einschätzungen, deren Auflösung in einem Kennenswert-Abschnitt steht | Abschnitt geht online | Einschätzungen bleiben als Gerüst (O3) | **Prüfkasten bleibt im Druck.** Der Drucksatz des Kennenswert-Abschnitts wird um die Auflösung gebaut. Betroffen: `ez-k1-1` (Kap. 1, `sec-nutzung`), `ez-k4-3` (Kap. 6, `sec-coding`), `ez-k6-3` (Kap. 7, `sec-fall-job-buddy`); `ez-k3b-1` und `ez-k4-1` sind durch Z2 gelöst. |
| Z5 | Drei offene Annahmen (Nr. 28, 29, 35) | Skalierungsgesetze „kurz“ | Annahme: alle drei nur Praxisbeispiele | **Skalierungsgesetze bleiben** und **„Expertenwissen wird 725-mal billiger“ (Kosten je GPQA-Frage) bleibt**, beide wie bisher: Standbild im Druck, interaktiv online. **Little's-Law-Animation raus** (nur Praxisbeispiele); der Rechner trägt das Lernziel. Kap. 5 behält damit alle sechs Elemente. |
| Z6 | Vorwort-Galerie | Abschnitt „Neue Möglichkeiten“ im Druck 0 Wörter | Galerie bleibt als einziges Schaufenster | **Online im Vorwort, Druck ohne.** Die Druckabbildung entfällt; die Buchübersicht in Kap. 1 bekommt einen QR-Code zur Galerie. |
| Z7 | Semester-Simulator in Kap. 4 | Kap. 4 straffen | Simulator nach Kap. 4 statt Kap. 1 | **Abbildung + QR im Druck, Parametertabelle `#tbl-semester-simulator` nur online.** Ort: `sec-evidenz` (er rechnet mit Bastani et al., 2025, Adesope et al., 2017, und Cepeda et al., 2006). Aus dem Branch nur die Simulator-Dateien übernehmen, nicht die Änderung an `kapitel01-einleitung.qmd`. |
| Z8 | Stützräder-Film nach Kap. 1 | – | „ganz an den Anfang“ | **Direkt nach den Lernzielen**, als erstes Element des Kapiteltexts; Druck: Standbild + QR. |

Ohne eigene Frage entschieden (Regel aus den beiden Sitzungen fortgeschrieben):

- **Typgrenze.** Kap. 7 hat nach Z1 drei Rechner (T5), Kap. 2 vier Schritt-Animationen (T3). Beides überschreitet die Regel „höchstens zwei je Typ“ aus dem Prüfschema; Kap. 2 hat Roman einzeln so entschieden, für Kap. 7 gilt dieselbe Ausnahme wie zuvor in Kap. 6 (zwei variierte Beispiele stützen den Transfer). Die drei Rechner stehen in zwei Abschnitten, nicht direkt hintereinander.
- **Schlüsselbegriffe-Kästen** (Begriff + Beispielsatz, Definition nur im Glossar) werden in jeder Kapitelsitzung mit erledigt, nicht in einem eigenen Durchgang über alle Dateien; das spart einen zweiten Merge je Kapitel.
- **Druckbudget Kap. 3.** Der Kapitelauftakt hat Kap. 3 um rund 730 Druckwörter vergrößert (2.745 → 3.475). Das ist der Standardapparat jedes Kapitels und fällt nicht unter „Kap. 3 wächst nicht“, das sich auf die Ebene „Organisation“ bezog.

## 3 Ergebnis je Kapitel

Spalte „Elemente“ zählt eingebettete Interaktionen online (ohne Einschätzungs- und Prüfkästen).

| Teil | Text (Ringe) | Elemente heute → danach | Was mit den Elementen geschieht |
|---|---|---:|---|
| Vorwort | Lernpfade Kennenswert (Liniennetz als Abbildung, Texte online); „Wie dieses Buch lehrt“ ~300; Übersicht und „Neue Möglichkeiten“ nach Kap. 1 | 2 → 2 | Galerie online, im Druck ohne (Z6); Galerieinhalt und Lernpfad-Texte an die verbleibenden Elemente anpassen; „37 Beispiele“ neu zählen |
| Kap. 1 | Verbreitung Kennenswert (2–3 Sätze + Prüfkasten `ez-k1-1`); Buchübersicht als Tabelle ~350 | 2 → 2 | Stützräder-Film neu nach den Lernzielen (Z8); Höher oder tiefer online im Kennenswert-Block; Galerie „Fünf Formate“ raus, Folie mit Regelwerk und Rollenspiel auf die Praxisbeispiele-Seite |
| Kap. 2 | Harness ~500, Modellwahl ~650 mit Preisstufen, Agenten ~350, Gedächtnis ~350, Tokens ~450, Blick ins Modell online, „Informiert bleiben“ online | 15 → 9 | Autonomiestufen, Drei Labore, Sitzung und Gedächtnis, Texas → nur Praxisbeispiele; „Vom Satz zum nächsten Wort“ ganz raus (Satz „Dieselbe Kette … als Film“ umschreiben); Stützräder → Kap. 1; „Vier Stufen“ grafisch überarbeiten (eigene Sitzung) |
| Kap. 3 | Aufgaben **Wichtig ~500** (Z2); Arbeitsweisen ~450; Leitungsaufgabe Kern ohne Kugel (Z3) | 6 → 3 | Heatmap und Video online; Bibliothek → Praxisbeispiele; Schema Arbeitsweisen nur als Standbild (online und Druck); Durchspiel bleibt; Agenten-Engpass raus, Kasten 2 rein |
| Kap. 4 | Ziele ~400; Wissenstypen (Hattie) online; Lerntechniken ohne „Ausrichtung“-Liste; Evidenz Text oder Tabelle ~1.700 | 0 → 1 | Semester-Simulator in `sec-evidenz` (Z7) |
| Kap. 5 | 4D ~450; Fähigkeiten ~650 (Jagged Frontier, Skalierung kurz); Diligence ~300; Richtlinien/KI-VO online; Dokumentation ~500; Prüfen ~1.900 | 6 → 6 | keine Änderung an den Elementen (Z5) |
| Kap. 6 | Recherche ~700; Interviews ~250; Copilot ~200; Cyborg-Schreiben online; Programmieren Kennenswert (~250 + Prüfkasten `ez-k4-3`); Widget-Abschnitte → Kap. 7; Tutor-Auftakt + PS2 Pal ~650; einfache Tutoren ~300; Betrieb ~650; Echtheit ~500 | 7 → 3 | EOQ-Vergleichsvideo und Little's-Law-Animation → Praxisbeispiele; beide Rechner → Kap. 7 (Z1); Hörstück, Making-of (online), PS2 Pal bleiben |
| Kap. 7 | Typologie Erinnern/Verstehen/Anwenden statt syntaktisch/semantisch/pragmatisch; Quizspiele ~300; Lernsong ~350; Widgets ~500 mit Little's Law; Simulationen Lehrende ~450 mit Bullwhip; Job-Buddy Kennenswert (~120 + Prüfkasten `ez-k6-3`) | 3 → 5 | Rechner Little's Law und Bullwhip kommen hinzu |
| **Summe** | | **41 → 31** | |

**Druckumfang (Schätzung).** Die Ringe-Rechnung ergab ≈ 40.100 Druckwörter. Dazu kommen der Kapitelauftakt Kap. 3 (+680 netto seit `2ba1edb`), Z2 (+250), die drei Prüfkästen aus Z4 (≈ +200), Kasten 2 in Kap. 3 (+171) und die Simulator-Bildunterschrift (≈ +60); die Galerie-Abbildung im Vorwort entfällt (≈ −40). Zusammen mit dem Praxis-Primer (+1.500) landen rund **42.900 Druckwörter, etwa 240 Seiten** bei 180 Wörtern je Seite plus Abbildungen, weiter unter den rund 250 Seiten des Verlagsvertrags.

## 4 Offene Branches, die vor der jeweiligen Kapitelsitzung zu klären sind

| Branch | Stand | betrifft | Behandlung |
|---|---|---|---|
| `k3b-kasten2-engpass` | Kasten fertig, nicht gemergt | Kap. 3, `references.json` | in Sitzung K3 mergen (Z3) |
| `entfernen-agenten-engpass` | 03.11., veraltet | Kap. 3, Vorwort-Galerie, Praxisbeispiele | nicht mergen; in K3 und PB neu umsetzen |
| `claude/semester-simulator` | gebaut für Kap. 1 | Kap. 1, Praxisbeispiele | Dateien in Sitzung K4 übernehmen (Z7), Kap.-1-Änderung verwerfen |
| `k7-kasten-holbein` | nicht gemergt | Kap. 7, `references.json` | vor oder in Sitzung K67 mergen |
| `primer-anhang` | Druckkürzung Anhang C, nicht gemergt | Anhang C, Kap. 7 (4 Zeilen) | vor Sitzung K67 mergen |
| `best-practice-vorreiter` | nicht gemergt, 14 Dateien | mehrere Kapitel | vor den Kapitelsitzungen entscheiden, sonst Merge-Konflikte |
| `vorwort-galerie-14` | Galerie-Inhalt alt | `interactions/galerie-vorwort.html` | in Sitzung PB neu festlegen |

## 5 Ablauf

Jede Kapiteldatei wird genau einmal angefasst: Text nach Ringen, Elemente nach Abschnitt 3, Einschätzungen nach Z4 und Schlüsselbegriffe-Kasten in derselben Sitzung, auf einem eigenen Branch, höchstens drei Sitzungen parallel.

| Welle | Sitzung | Branch | besitzt |
|---|---|---|---|
| 1 | K67: Kap. 6 und 7 zusammen (Rechner ziehen um) | `reduktion-k67` | `kapitel06-rollen.qmd`, `kapitel07-artefakte.qmd` |
| 1 | K2 | `reduktion-k2` | `kapitel02-grundlagen.qmd` |
| 1 | K5 | `reduktion-k5` | `kapitel05-4d-phasen.qmd` |
| 2 | K4 (mit Semester-Simulator) | `reduktion-k4` | `kapitel04-lernmechanismen.qmd`, `interactions/semester-simulator.html` |
| 2 | K3 (mit Kasten 2) | `reduktion-k3` | `kapitel03-automation.qmd` |
| 2 | K1 und Vorwort | `reduktion-k1` | `kapitel01-einleitung.qmd`, `index.qmd` |
| 3 | PB: Praxisbeispiele-Seite und Galerien | `reduktion-pb` | `praxisbeispiele.qmd`, `scripts/praxisbeispiele.py`, `interactions/galerie-*.html` |
| 3 | Anhang A und Lösungshinweise | `reduktion-anhang` | `kapitel07-appendix02-prompt-sammlung.qmd`, `kapitel10-appendix05-loesungshinweise.qmd` |
| frei | Grafik „Vier Stufen des Gedächtnisses“ | `grafik-gedaechtnis` | `interactions/agenten-gedaechtnis.html` |

`references.json` ändern mehrere Sitzungen; Einträge nicht am Dateiende anhängen, sondern alphabetisch einfügen, und vor dem Merge auf `main` rebasen.

**Startauftrag je Sitzung** (Platzhalter in spitzen Klammern aus der Tabelle):

```
Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching (frisch klonen, Schreibrechte nötig).
Lies claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md
(gilt vor den beiden Einzelplänen), dazu PLAN-zuspitzung-drei-ringe-2026-11-13.md Abschnitte 2–4
und PRUEFUNG-interaktionen-2026-11-13.md Abschnitt 11 für die Einzelheiten.
Du besitzt nur <Dateien> auf Branch <Branch> von main. Zuerst offene Branches aus Abschnitt 4
mergen, die zu deiner Datei gehören. Dann umsetzen: Kennenswert-Abschnitte in einen Online-Block
(content-visible when-format="html") mit einem Drucksatz und QR-Code, Prüfkästen der Einschätzungen
bleiben im Druck (Z4); Wichtig-Abschnitte auf das Ziel verdichten; Kern unverändert; Elemente nach
Abschnitt 3 (raus heißt samt Standbild und QR); Schlüsselbegriffe-Kasten nur Begriff + Beispielsatz.
Kürzungen in Paketen per MC freigeben lassen. scripts/zaehle_druck.py vor und nach, quarto render
--to html, Playwright 1200/390 px, keine ?@-Verweise. Diff per MC, Merge, ergebnisse-sichern.
```

## 6 Quellen

Adesope, O. O., Trevisan, D. A., & Sundararajan, N. (2017). Rethinking the use of tests: A meta-analysis of practice testing. *Review of Educational Research, 87*(3), 659–701. https://doi.org/10.3102/0034654316689306

Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *PNAS, 122*(26), e2422633122. https://doi.org/10.1073/pnas.2422633122

Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. *Psychological Bulletin, 132*(3), 354–380. https://doi.org/10.1037/0033-2909.132.3.354

Weitere Quellen in den beiden Einzelplänen.
