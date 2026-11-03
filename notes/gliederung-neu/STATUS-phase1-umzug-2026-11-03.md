# STATUS Phase 1 „Umzug“ (03.11.2026, vorgezogen vom 04.11.)

Auftrag: Startauftrag Phase 1 aus `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md`, Abschnitt 8, plus Linktexte in `scripts/praxisbeispiele.py`. Sitzung ab 12:24, Claude Opus 5.5, einzige Sitzung an Kapiteldateien.

## Entscheidungen (MC, Roman)
- Repo mit Push-Zugriff; Tresorit lesen und schreiben.
- S2 (`mollick-s2-podcast`) **vor** dem Umzug gemergt.
- Diff des Umzugs freigegeben, Merge in `main`.

## Ergebnis
`main` steht auf `4006a9c`.

| Schritt | Commit |
|---|---|
| S2 gemergt: `.gitignore` beide Seiten, `references.json` nach `id` vereinigt (`vallverdu2025`, `handa2025interviewer` neu, je einmal), Lösungshinweise Kap. 4 beide Ergänzungen; Tests 8/8 mit CSV von HF | `808c52f` |
| reine Verschiebung (`scripts/umzug/umzug_phase1.py`) | `9909051` |
| Rahmen: `_quarto.yml`, Weiterleitungen, Verweise, Lernpfade, Anhang B, QR-Codes | `c3b9b71` |
| `docs/` neu gerendert (Quarto 1.8.25, `--to html`), PDF/EPUB aus Git zurückgeholt | `4006a9c` |

### Neue Kapitelfolge (Druckwörter nach `scripts/zaehle_druck.py`)

| Teil | Datei | Titel | Druck | Inhalt (Herkunft) |
|---|---|---|---:|---|
| – | index.qmd | Vorwort | 1.852 | Übersicht jetzt sieben Kapitel in zwei Teilen |
| I | kapitel01-einleitung.qmd | Einleitung | 3.602 | unverändert |
| I | kapitel02-grundlagen.qmd | Grundlagen von KI und LLMs | 9.094 | Kopf + Apparat alt 2; 2.1 `sec-definitionen` (+ `sec-sprachmodell`, `sec-harness`, dazu `sec-durchspielen` und `sec-informiert` aus alt 5 als Unterabschnitte); 2.2 `sec-model-choice`; 2.3 `sec-access` mit Unterabschnitten; 2.4 neu `sec-erweitertes-llm` (`sec-patterns-usage`, `sec-agenten-praxis` ohne Engpass, `sec-agenten-gedaechtnis`); 2.5 `sec-energy` (bis K2b); 2.6 `sec-vertiefung` (`sec-gpt-bedeutung`, `sec-blick-ins-modell`) |
| I | kapitel03-automation.qmd | Prinzipien der Automation von Aufgaben | 2.598 | 3.1 `sec-aufgaben` („Was sind unsere Aufgaben?“ ab Bibliothek, mit `tbl-acemoglu`, Video, Einschätzung `ez-k4-1`); 3.2 `sec-arbeitsweisen`; 3.3 `sec-leitungsaufgabe` (Agenten-Engpass aus alt 2.7.3). Kein Kopf/Apparat (keine Platzhalter); 3.4 Organisation fehlt bis K3b |
| I | kapitel04-lernmechanismen.qmd | Lern- und Wirkmechanismen | 6.422 | alt 3 vollständig; „Ausrichtung nach Lernforschung“ (alt 5) als Unterabschnitt am Ende von `sec-lerntechniken`; Evidenz bleibt 4.5 |
| II | kapitel05-4d-phasen.qmd | Phasen der Arbeit mit generativer KI (4D) | 8.323 | Kopf + Apparat alt 5; `sec-schemas` (4D); AI-Fluency-Übung aus Anhang A (online, Druck 0); 5.x `sec-delegation` + `sec-capabilities` + `sec-einfuehrung-studierende` mit Beispiel; `sec-hallucinations`; `sec-diligence` + Richtlinien + `sec-ki-vo` + `sec-dokumentation`; `sec-pruefen` mit Detektor-Duell und Formaten; `sec-kurs-integration` (Entscheid E6 in K5) |
| II | kapitel06-rollen.qmd | Rollen der KI: Hiwi, Copilot, Tutor, Simulator | 12.437 | alt 4 ohne Aufgabenverlagerung; unter `sec-hiwi` bleiben die vier Zeilen zu Zeitanteilen Lehrender; S2-Podcast unter `sec-recherche` |
| II | kapitel07-artefakte.qmd | Artefakte: Fallbeispiele aus der Lehre | 7.891 | alt 6 vollständig (Gliederung nach Artefakten in K7) |
| Anh. | kapitel07-appendix02-prompt-sammlung.qmd | A Prompts | 5.218 | ohne AI-Fluency-Übung; Skript leitet deren alte Anker nach Kap. 5 weiter |
| Anh. | kapitel10-appendix05-loesungshinweise.qmd | B Lösungshinweise | 3.001 | Kapitelfolge 1, 2, 4, 5, 6, 7 mit neuen Titeln; Kap. 3 folgt mit K3b |
| | **Summe** | | **60.438** | vorher 60.410 |

Prüfstein Wortsumme: Der Fließtext ist zeilengleich (Skript prüft die Multimenge aller Nicht-Überschriftenzeilen; einzige neue Zeilen: `kapitel-gliederung` in Kap. 3). Die +28 Druckwörter kommen aus der neuen Übersicht im Vorwort (+23) und den Kapiteltiteln in Anhang B (+9); −4, weil „Was sind unsere Aufgaben?“ jetzt eine ID trägt und das Zählskript Überschriften mit ID nicht zählt.

### Rahmen
- `_quarto.yml`: `part:` „Teil I: Grundlagen“ (Kap. 1–4), „Teil II: Anwendungen“ (Kap. 5–7); Praxisbeispiele-Seite (Profil web) folgt nach Teil II.
- Weiterleitungen `kapitel01.html` … `kapitel06-fallbeispiele.html` im Repo-Wurzelverzeichnis, als `resources` nach `docs/` kopiert; Ankertabelle aller 251 alten IDs in `scripts/umzug/ankertabelle.json` (alt 2: 28 Anker nicht im Hauptziel, alt 4: 9, alt 5: 2). Ohne JavaScript: Liste der neuen Kapitel.
- Verweise: 209 Dateiverweise in 44 Dateien nach Anker umgesetzt (`scripts/umzug/verweise_dateien.py`); eingetippte Nummern in Vorwort, Glossar, Transparenz, Kap. 3/4/5/7, sieben Interaktionen, Anhang B, Forschungsstand-Seite (`scripts/umzug/verweise_nummern.py`); `ez-k4-1` verweist weiter auf `@sec-hiwi` (Auflösung steht jetzt in `sec-aufgaben`, siehe Offen).
- Praxisbeispiele: Linktexte „Kapitel N, …“ in `scripts/praxisbeispiele.py` aus dem Link abgeleitet, Seite neu erzeugt (37 Beispiele); Galerie-Etiketten in `galerie-vorwort.html` und `galerie-kapitel01.html` ebenso.
- Lernpfade k1–k7: Karte (`scripts/lernpfade/lernpfade_karte.py`), Widget-Fragment und Linientexte in `interactions/lernpfade.html` und Vorlage, Druckkarte `images/lernpfade/lernpfade-karte.svg`. Linie 2 überspringt jetzt Kap. 2 (4D steht in Kap. 5), Linie 3 überspringt 4.1–4.4, Linie 4: 1 → 4.5 → 6 → 7 → Anhang A.
- QR-Codes mit geänderter Adresse neu erzeugt: Streich-Test, Detektor-Duell, Rollen-Evidenz, Kompetenzrahmen, Podcast, AI-Fluency, 4D-Kreislauf, vier Videostandbilder.
- Eigenfehler behoben: Der Umschreiber traf zunächst auch `galerie-kapitel01.html`; zurückgesetzt, Muster verschärft.

## Prüfungen
- Render: nur die 36 bekannten OJS-Warnungen; kein `?@`, keine unaufgelösten Verweise (ein fehlender Leerabsatz vor `sec-model-choice` war die einzige Ursache im Zwischenstand).
- Tests: `npm test` 34/34; Podcast, Streich-Test, Detektor, Genrefilm 31/31; `scripts/pruefe-podcast-s2.cjs` ohne Konsolenfehler.
- Playwright 1200/390 px auf Vorwort, sieben Kapiteln, Anhang B, Praxisbeispielen, Lernpfaden: keine Konsolenfehler, keine 404. Waagerechtes Scrollen bei 390 px wie vor dem Umzug, nur verteilt (Kap. 2 122, Kap. 4 234, Kap. 5 363, Kap. 6 258, Kap. 7 256 px).
- Alte Adressen (13, davon 12 mit Anker): alle landen auf der richtigen Seite, Anker vorhanden.
- Live auf GitHub Pages **nicht** geprüft (Abruf brauchte eine Freigabe, die unbeantwortet blieb).

## Offen
1. Live-Prüfung: https://th-koln-bartnik.github.io/genai4teaching/kapitel03-automation.html und eine alte Adresse, etwa `kapitel04.html#sec-coding`.
2. `ez-k4-1` (Kopf Kap. 6) verweist mit „Auflösung in @sec-hiwi“, die Auflösung steht jetzt in Kap. 3 `sec-aufgaben` → in K3b oder K6 entscheiden.
3. Kapitelapparat folgt dem alten Kapitel: Einschätzungen, Lernziele, Kernaussagen, Schlüsselbegriffe und Lernfragen von alt 2 nennen 4D, Delegation, Halluzination, Diligence (jetzt Kap. 5); Anker `#sb-k2-…` der Fundstellen liegen teils in Kap. 5, Wiederholungskarten verlinken dann ohne Sprung. Kap. 5 wiederholt Begriffe aus Kap. 6 (`k4-debriefing`), das erst danach kommt. → K2a/K5/K6.
4. Begriffs-IDs (`k3-…`, `k4-…`, `k6-…`) und `kapitel="N"` der Lernspiele behalten die alten Nummern (Schlüssel, nicht sichtbar).
5. `scripts/druck-abbildungen.mjs` (QR in Druckabbildungen Höher-tiefer, Bibliothek, Bullwhip, Little's Law) und QR in den Filmen S5/P6 zeigen auf alte Adressen; Weiterleitung greift. Neu erzeugen in Phase 3 mit dem Druck-Render.
6. Kap. 7 `sec-fallbeispiele`-Einleitung, Kap. 5 Kopf (`sec-umsetzung`), Kap. 2 Lernziele: Texte beschreiben noch die alten Kapitel → Phase 2.
7. Roman: Branches auf GitHub löschen (Liste Phase 0), dazu jetzt `mollick-s2-podcast`, `mollick-s2n-notebook`, `umzug-phase1`.
8. Leere Datei `.schreibtest_claude` im Tresorit-Ordner `0_GenAI` (aus Phase 0) löschen.

## Startauftrag nächste Sitzungen (Phase 2, ab 04.11., höchstens drei parallel)
> Projekt Logos-Lehrbuch, Repo TH-Koln-Bartnik/genai4teaching. Lies `claude/gliederung-neu/PLAN-umsetzung-neue-gliederung-2026-11-03.md`, Abschnitte 2 (dein Kapitel), 3 und 4, und `claude/gliederung-neu/STATUS-phase1-umzug-2026-11-03.md` (Abschnitte „Neue Kapitelfolge“ und „Offen“). Du besitzt nur `<Datei>` auf Branch `umbau-<Kürzel>`. Kläre per MC Repo-Schreibzugriff und Tresorit-Freigabe. Ziel-Wortzahl laut Budget; Kürzungen als nummerierte Liste in Paketen per MC freigeben lassen, neue Quellen vor dem Einbau per Crossref prüfen, dann Render, Playwright, Diff per MC, Merge, `ergebnisse-sichern`. Quarto per `pip install --break-system-packages quarto-cli==1.8.25`.

Startreihenfolge 04.11. (keine Abhängigkeit): K3a (Quellen Kap. 3, ohne Datei), K2a (`kapitel02-grundlagen.qmd`), K4 (`kapitel04-lernmechanismen.qmd`).

## Candidate permanent notes
- Ein Umzug von Buchabschnitten lässt sich beweisen, wenn die Multimenge der Textzeilen vor und nach der Verschiebung gleich bleibt.
- Weiterleitungen mit Ankertabelle halten gedruckte QR-Codes gültig, auch wenn ihre Ziele das Kapitel wechseln.
- Ein Suchmuster für Dateinamen braucht eine Grenze, die Bindestriche ausschließt, sonst ändert es Namen, die den gesuchten nur enthalten.
- Der Apparat eines Kapitels (Lernziele, Begriffe, Lernfragen) ist an Inhalte gebunden und wird beim Umzug von Abschnitten stillschweigend falsch.

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht `fa1c03c` und folgende Notiz-Commits, gemergt: ja – S2, Umzug Phase 1 in `main`; nicht gemergt und löschbar: `umzug-phase1` (identisch mit `main`), `mollick-s2n-notebook`; offen: `zitierstil-apa7-de` für Phase 3)
