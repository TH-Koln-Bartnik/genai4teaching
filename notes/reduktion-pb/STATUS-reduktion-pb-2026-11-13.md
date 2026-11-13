# Status: Praxisbeispiele-Seite und Galerien nach den Kapitelsitzungen (Sitzung PB, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md` (Abschnitte 3 und 5), `claude/interaktionen-pruefung/PRUEFUNG-interaktionen-2026-11-13.md` Abschnitt 11, Hinweise aus den Statusnotizen K1, K2, K3, K4 und K67. Sitzung besaß nur `praxisbeispiele.qmd`, `scripts/praxisbeispiele.py`, `interactions/galerie-*.html`.

## Entscheidungen Roman (MC, 13.11. gegen 18 Uhr)

| Paket | Entscheidung |
|---|---|
| A Links und „Nur hier“ | Verlagerte Elemente enden mit „Nur auf dieser Seite. Zum Thema im Buch: [Abschnitt]“ (Rückweg ins Buch bleibt) |
| B Ergänzungen | alle vier: Semester-Simulator (Kap. 4), Hörstück Forschende (Kap. 6), O*NET-Heatmap (Kap. 3), Link zum Little's-Law-Rechner (Kap. 7) |
| Aufräumen | Agenten-Engpass auch von der Praxisbeispiele-Seite gestrichen; `interactions/galerie-kapitel01.html` gelöscht |
| Vorwort-Galerie | neun Beiträge, kein Ersatz für den Agenten-Engpass |
| Diff | gemergt |

## Was geändert wurde

- **Praxisbeispiele-Seite** (37 → 40 Einträge, sechs Gruppen): Stützräder → `kapitel01-einleitung.qmd#vid-stuetzraeder` („Kapitel 1, Einleitung“); Bullwhip-Rechner → `kapitel07-artefakte.qmd#sec-widget-bullwhip`; neuer Link-Eintrag Little's-Law-Rechner (Kap. 7); Semester-Simulator → `kapitel04-lernmechanismen.qmd#semester-simulator`; Hörstück (iframe-id `podcast-forschende-ki`, damit die Höhenmeldung greift) → `#sec-podcast-interviews`; O*NET-Heatmap (iframe-id `onet-heatmap`; Kopfskript wertet jetzt auch `onet-heatmap-hoehe` aus) → `#sec-aufgaben`.
- **„Nur auf dieser Seite“** (11): Bibliothek der Prompts (→ Kap. 3 Aufgaben), Agenten-Muster erkennen (neu gefunden: steht nicht mehr in Kap. 2; → Kap. 2 Welches Setup), EOQ-Vergleichsvideo (→ Kap. 6 Programmieren), Little's-Law-Animation (→ Kap. 7 Rechner), Texas (→ Kap. 2 Blick ins Modell), Autonomiestufen und Drei Labore (→ Kap. 2 Harness), Sitzung und Gedächtnis (→ Kap. 2 Gedächtnis), Schema Arbeitsweisen (→ Kap. 3 Arbeitsweisen), Folie mit Regelwerk (ohne Link), Rollenspiel-Karte (→ Kap. 6 Role Play).
- **Gestrichen:** „Vom Satz zum nächsten Wort“, Agenten-Engpass.
- **Galerie Kap. 1 ersetzt:** Gruppe „Folie und Rollenspiel“ mit zwei neuen Eintragsarten im Skript: `bild` (Folie `images/druck/folie-mit-regeln.png`, Formel nach @chen2000quantifying) und `karte` (Szenario-Karte als Tabelle, @barton2026poster; @tobor2026usecases, S. 40–42). Die Seite hat dadurch ein kleines Literaturverzeichnis.
- Kopftext der Seite: Satz zu „Nur hier“-Beispielen ergänzt; Gruppen „Filme, Hörstück und Erklärvideos“ und „Vier Diagramme …“ angepasst.
- **Vorwort-Galerie** (`interactions/galerie-vorwort.html`): Agenten-Engpass-Folie entfernt; `<title>`, Aria-Label und Kommentar auf „Neun“. Alle neun Links lösen auf.
- **„29 Beispiele“ in `index.qmd` stimmt** (Kap. 1–7: 2 + 9 + 3 + 1 + 6 + 3 + 5 = 29); nicht geändert.

## Prüfungen

`quarto render --to html` (1.8.25): nur die bekannten OJS-Warnungen; keine `?@`-Verweise in `docs/`; Download-PDF/EPUB aus Git zurückgeholt; `docs/`-Diff nur Praxisbeispiele, Galerie, search.json. Alle 27 Kapitel-Links der Seite und 9 Galerie-Links zeigen auf existierende IDs. Playwright 1200/390 px (Praxisbeispiele, Vorwort, Galerie allein): 30 iframes und 6 Videos auf der Seite, keine JS-Fehler, keine 404; Galerie zählt 9 Beiträge. Querscrollen bei 390 px auf der Praxisbeispiele-Seite nur durch zwei lange URLs im neuen Literaturverzeichnis (bekanntes URL-Thema der CSS-Sitzung), im Vorwort durch eine Tabelle aus K1 (nicht diese Sitzung).

## Repo

Branch `reduktion-pb` (Commit `fb1191b`), gepusht; per Fast-forward nach `main` @ `fb1191b`, gepusht.

## Hinweise an andere Sitzungen

- **K1/Vorwort (`index.qmd`):** iframe-Titel der Galerie lautet noch „Galerie: Zehn Praxisbeispiele …“ (Zeile 24) → „Neun“.
- **Skripte (nicht dieser Sitzung):** `scripts/umzug/verweise_nummern.py` liest noch `interactions/galerie-kapitel01.html` und bricht bei erneutem Lauf ab (Datei gelöscht); `scripts/qr-kapitel01.mjs` erzeugt den QR auf die gelöschte Galerie; `images/qr/qr-galerie-kapitel01.png` ungenutzt. In `_quarto.yml` nennt der Kommentar zu `images/druck/folie-mit-regeln.png` noch „Galerie Kap. 1“; die Ressource bleibt nötig bzw. wird über die Praxisbeispiele-Seite ohnehin kopiert.
- **Branches:** `claude/semester-simulator`, `entfernen-agenten-engpass` und `vorwort-galerie-14` sind überholt und können gelöscht werden.
- **CSS:** lange URLs im Literaturverzeichnis bei 390 px.
- Offen aus K4: Adesope et al. (2017) am Original prüfen; iframe-Höhe des Simulators (2350 px) auch auf der Praxisbeispiele-Seite fest, da das Element keine Höhe meldet.

## Startauftrag nächste Sitzung

Welle 3 läuft weiter mit „Anhang A und Lösungshinweise“ (`reduktion-anhang`, Dateien `kapitel07-appendix02-prompt-sammlung.qmd`, `kapitel10-appendix05-loesungshinweise.qmd`) nach Plan Abschnitt 5 und den Hinweisen „Anhang/Lösungshinweise“ in den Statusnotizen K1, K2, K3, K4, K67; dazu den iframe-Titel in `index.qmd` (siehe oben) in einer kleinen Sitzung oder bei der nächsten Vorwort-Änderung nachziehen.

## Candidate permanent notes

- Eine Sammelseite für alle Beispiele eines Buchs braucht für jedes Beispiel einen Rückweg ins Buch, auch für Beispiele, die nur dort stehen.
- Wer Elemente aus Kapiteln verlagert, muss die Sammelseite gegen die Kapitel zählen und nicht gegen die eigene Liste, sonst bleiben verwaiste Verweise stehen.
- Eine Galerie verliert durch ein gestrichenes Beispiel weniger als durch einen Lückenfüller, der ein schon vorhandenes Format wiederholt.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, main @ fb1191b)
