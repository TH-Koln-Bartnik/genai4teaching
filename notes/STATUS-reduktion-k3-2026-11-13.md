# Status Reduktion Kap. 3 (Sitzung K3, 13.11.2026)

Grundlage: `claude/zuspitzung-drei-ringe/PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md` (Z2, Z3), `PLAN-zuspitzung-drei-ringe-2026-11-13.md` Abschnitte 2–4, `PRUEFUNG-interaktionen-2026-11-13.md` Abschnitt 11, `STATUS-reduktion-k2-2026-11-13.md`. Alle Kürzungen hat Roman am 13.11. per MC in vier Paketen freigegeben.

## Ergebnis

`kapitel03-automation.qmd`: **3.646 → 2.325 Druckwörter** laut `scripts/zaehle_druck.py` (vorher nach dem Merge von Kasten 2). Der Zähler rechnet die 117 Wörter der Beispielsätze im Schlüsselbegriffe-Kasten mit, die im Druck nicht erscheinen; tatsächlich sind es also ≈ 2.210.

| Abschnitt | vorher | nachher | Inhalt im Druck |
|---|---:|---:|---|
| Kapitelkopf (Szene, Einschätzungen, Lernziele) | 328 | 332 | Herkunftszeile Petersen: „Ablauf ist konstruiert nach dem Prinzip der langsamsten Station (@sec-leitungsaufgabe)“ |
| sec-aufgaben (Wichtig) | 1.698 | 621 | ≈ 485 Text + 2 Prüfkästen (ez-k3b-1, ez-k4-1): Einstieg, Aufgabenmodell, Tab. 3.1, Levine, „keine Zeit gewonnen“ |
| sec-arbeitsweisen (Wichtig) | 808 | 559 | ≈ 480 + Prüfkasten ez-k3b-2; Schema statisch, Durchspiel mit QR, Probieren-Kasten gekürzt |
| sec-leitungsaufgabe (Kern) + Apparat | 812 | 813 | ≈ 240 Text + Kasten 2 + ez-k3b-3 + Kernaussagen + Begriffsliste |

**Paket 1 (Aufgaben).** Die Bibliothek der Prompts ist ganz raus, mit Element, Raten-Kasten, QR, Datenfußnote, „Die Daten zeigen …“ und „So entstand diese Bibliothek“; der Anker `sec-bibliothek-prompts` existiert nicht mehr. Heatmap mit Bildunterschrift, AEI-Befund (9 von 25, 60 %, 92 %) und das Aufgabenmodell-Video stehen nur noch online; das Druckbild `onet-aufgaben.svg` und das Video-Standbild entfallen. Die vierte Form (capital-augmenting) und Verdrängung/Wiedereinsetzung stehen nur online.

**Paket 2 (Arbeitsweisen).** Online stehen der 4D-Modalitäten-Absatz, Cybernetic Teammate (P&G), die zwei weiteren Fälle und der Hinweis zu den Denkspuren. Das Schema ist online und im Druck dasselbe Standbild, ohne Interaktion und ohne QR (`images/druck/ki-arbeitsweisen.png`, aus `ki-arbeitsweisen-qr.png` zugeschnitten, mit `fig-alt`). Der Durchspiel-Absatz enthält nur noch Beschwörer/Orchestrator und dunkle Fabrik, die Dämmerfabrik-Anlässe sind kürzer, „Probieren Sie mal“ hat zwei Sätze.

**Paket 3 (Leitungsaufgabe).** Der Agenten-Engpass ist raus: Animation, Standbild `fig-agenten-engpass`, Vorhersage-Aufforderung und Auswertungsabsatz mit 19,5/43,5/28,5 min. Der Absatz „Jeder Haltepunkt kostet Zeit …“ endet jetzt mit dem Prinzip der langsamsten Station. Kasten 2 („Die KI vervielfacht die Abgaben, nicht die Zeit zum Prüfen“, aus Branch `k3b-kasten2-engpass`) folgt direkt darauf, danach der Regelabsatz mit Verweis auf @sec-widget-littles-law (Kap. 7). Die Auflösung von ez-k3b-3 kommt ohne Modellzahlen aus. Kernaussage 7 nennt die langsamste Station; Lernziel 3 bleibt.

**Paket 4 (Schlüsselbegriffe).** Kap. 3 hat zum ersten Mal einen eigenen Kasten, ohne Spiel: Centaur und Cyborg (`k2-centaur-cyborg`, Kennung beibehalten), Beschwörer, Orchestrator, Dämmerfabrik, dunkle Fabrik (`k3b-…`, Anker im Text). Jeder Begriff hat nur einen Beispielsatz. Das Glossar hat dafür zwei neue Einträge: „Beschwörer, Dämmerfabrik und dunkle Fabrik“ und „Orchestrator und Unteragenten“ (MC).

Elemente online: 6 → 3 (Heatmap, Video Aufgabenmodell, Durchspiel).

## Prüfungen

`quarto render --to html` (1.8.25) zeigte nur die bekannten OJS-Zeilennummer-Warnungen. Keine `?@`-Verweise in `docs/`, Download-PDF/EPUB aus Git zurückgeholt. Playwright 1200/390 px: keine JS-Fehler, 2 iframes + 1 Video, Kasten mit „Beispiel zeigen“ funktioniert. Bei 390 px läuft Tab. 3.1 rund 60 px über den Rand; das war in `main` schon so und gehört in die CSS-Sitzung (siehe Status K2). Nach dem Merge wurde auf `main` noch einmal gerendert: ergab keine Änderung.

## Repo

Branch `reduktion-k3` (Merge `k3b-kasten2-engpass` → `c5e97f9`, Kapitel `397914b`, Glossar `a5f276b`), gemergt nach `main` als `55ecaac` (mit K4 und „Wissenstypen entfernt“), gepusht. `references.json`: nur die Einträge aus `k3b-kasten2-engpass` (reimers2026books, codreanu2026science, sapkota2026), Vereinigung ohne Dubletten (520 Einträge).

## Hinweise an folgende Sitzungen

- **PB (Welle 3):** `praxisbeispiele.qmd` / `scripts/praxisbeispiele.py` verlinken „Im Buch“ noch auf `kapitel03-automation.qmd#sec-bibliothek-prompts` (Anker weg) und `#vid-acemoglu-restrepo` (bleibt, online). Bibliothek der Prompts, Agenten-Engpass und Schema Arbeitsweisen auf „Nur hier“ umstellen. Die Vorwort-Galerie (`interactions/galerie-vorwort.html`) führt den Agenten-Engpass noch. Branch `entfernen-agenten-engpass` kann gelöscht werden.
- **Anhang/Lösungshinweise:** Die Abbildung `fig-bibliothek-loesung` in `kapitel10-appendix05-loesungshinweise.qmd` hat keine Aufgabe mehr in Kap. 3; sie entfernen oder auf die Praxisbeispiele-Seite umstellen. Kap. 3 hat weiter keine Lernfragen und keinen `sb-loesungen`-Platzhalter (der Kasten hat kein Spiel).
- **Druckabbildungen:** `scripts/druck-abbildungsrechte.py` führt `fig-onet-tasks` noch als Druckabbildung; im Druck gibt es sie nicht mehr. `images/druck/agenten-engpass-qr.png`, `onet-aufgaben.svg`, `video-acemoglu-restrepo.png`, `qr-bibliothek-prompts.png`, `qr-onet-heatmap.png` werden in Kap. 3 nicht mehr genutzt (nicht gelöscht).
- **Kap. 6:** Der Kasten von Kap. 6 enthält weiter Automatisierung, Augmentierung und neue Aufgaben mit Ankern in Kap. 3; das passt.
- **CSS:** Tab. 3.1 bei 390 px (zusätzlich zu Navbar und URLs aus Status K2).

## Startauftrag nächste Sitzung

Welle 2 ist mit K4 und K3 gemergt; offen ist K1 + Vorwort (`reduktion-k1`), danach Welle 3 (PB, Anhang). Startauftrag K1 nach `PLAN-zusammenfuehrung-ringe-interaktionen-2026-11-13.md`, Abschnitt 5, mit `main` ab `55ecaac`; dazu die Hinweise oben für PB und Anhang.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja)
