# Status: Tabelle 3.2 (`tbl-stand-kap3`) nach Kernaussagen umgebaut (01.11.2026)

Patch per `git am` eingespielt (Branch `kapitel03-tabelle-kernaussagen`), drei offene Bewertungen geprüft, Druckfassung ergänzt, nach `main` gemergt; `docs/` (HTML, Druck-PDF als Download, EPUB) neu gerendert.

## Geändert (Patch vom Vormittag)
- `kapitel03.qmd`, Kasten „Stand der Forschung bei Drucklegung“: Pipe-Tabelle durch Grid-Tabelle ersetzt (Aufzählungen in Zellen). Spalte 2 = Kernaussagen (fett) mit tragenden Studien als Bullets; Spalte 3 = weitere Belege, je Bullet eine Kernaussage mit Studien in Klammern. Einleitung des Kastens erklärt die Punkteskala.
- Belastbarkeit je Wirkungsaussage als ●●● / ●●○ / ●○○ (TeX Gyre Pagella hat kein ★). HTML zeigt beim Überfahren „hoch/mittel/begrenzt“.
- Regel: stärkstes Design der Studien einer Aussage nach CEBMa-CAT-Leitlinie (AA/A = 3, B = 2, C–E = 1); je ein Punkt Abzug, wenn keine Studie begutachtet, Herstellerdaten, nachgewiesene Konfundierung. Theorie und Methodenkritik ohne Punkte. Stichprobengröße und Zahl der Cluster gehen nicht ein (Entscheidung Roman: strenge Regel ohne Aufwertung oder Zusatzabzug).
- `references.json`: neu `cebma2017cat`. Fehlerkorrektur `sungu2026harmteaching` (Motivation der Schülerinnen und Schüler, nicht der Lehrenden), auch in `forschungsstand.qmd`. `guan2026` nur noch online.

## Geprüft und geändert (Nachmittag)
- `brender2026reflective`: Zufallszuteilung zu SG/PR belegt (arXiv-Volltext, Abschnitt Methode); begutachtet als AIED 2026, LNCS 16584, S. 546–561, DOI 10.1007/978-3-032-29763-1_37 (Best Paper). Punkte ●●○ → ●●●. `references.json` von `document` auf `paper-conference` umgestellt, arXiv als Notiz. Springer nennt im Zitiervorschlag 2027 als Jahr; eingetragen ist 2026 (Erstveröffentlichung 27.06.2026, so auch ACM und HEP Vaud).
- `chen2026transfer`: 16-wöchiger cluster-randomisierter Versuch, 108 Studierende, China, Learning and Instruction (Abstract ScienceDirect). ●●● bleibt nach Regel. Zahl der Cluster nicht ermittelt (Volltext nicht zugänglich). Aussage präzisiert: Der Befund ist ein Vergleich (Peer stärker als allein), kein „erst dann“. Neu: „Gemeinsam verarbeitetes KI-Feedback fördert den Transfer stärker als allein verarbeitetes.“ Ebenso in `forschungsstand.qmd`.
- `chakraborty2026`: Zufallszuteilung nicht belegt (Abstract nennt „vier Experimente“; nur eine zitierende Arbeit spricht von „randomized“). ●●○ bleibt. Bei Zugang zum Volltext (Wiley, CAEE 34(4), e70223) prüfen; wenn randomisiert, ●●●.

## Druckfassung
- Befund im ersten Druck-Render: LaTeX-Tabellenzeilen brechen nicht über Seiten. Die Zeile zu Frage 1 war länger als eine Seite; dadurch blieb eine Seite leer und Lawson, Wissenschaftsrat, „Gesprochene Antworten“ und „Rolle der KI“ fehlten im PDF. Die schmale erste Spalte ließ „Gestaltungsfrage/-merkmale“ in Spalte 2 laufen.
- Lösung: Online bleibt die freigegebene Dreispalten-Tabelle (`content-visible when-format="html"`). Für Druck und EPUB steht eine Zweispalten-Fassung mit einer Zeile je Kernaussage (`unless-format="html"`), Fragen als Zwischenzeilen über beide Spalten, tragende Aussagen fett, weitere normal. Wortlaut und Punkte identisch (maschinell verglichen), nur „links“ → „oben“. Erzeugt mit `scripts/kap03-tabelle-druckfassung.py` (Datenliste plus Einbau, einmalig gelaufen); bei späteren Änderungen beide Fassungen anpassen (Tabelle ist ein Stand bei Drucklegung, ändert sich also selten).
- Ergebnis: PDF S. 94–97 (Stand nach Merge mit Kap. 1, P4, P5 und Schreibtrainer), Tabelle im Satzspiegel, nichts abgeschnitten. Kleinigkeit: Zwischenzeile „Trägt die Einbettung …“ steht allein am Fuß von S. 96 (verschiebt sich ohnehin mit jeder Textänderung davor; im Satz prüfen).

## Buchweiter Befund (nicht Teil dieses Auftrags)
- Tabellen in Kästen (Callouts) verlieren im PDF ihre Überschrift und die Schlusslinie: Pandoc setzt die Überschrift wegen `cap-location: bottom` in den `\endlastfoot` der `longtable`, und der wird im umbrechbaren `tcolorbox` nicht ausgegeben. Im PDF erscheinen 21 von 29 Tabellenüberschriften; „Tabelle 3.2“ fehlte schon im PDF vom 31.10. Abhilfe wäre eine Präambel-Regel oder Überschrift oben für Tabellen in Kästen.
- EPUB-Render meldet `ziegler2026ragtutor` als fehlende Quelle (`forschungsstand.qmd`, Z. 125).

## Offen
1. `chakraborty2026` am Volltext prüfen (s. o.).
2. Online-Seite „Forschungsstand“: Spalte „CAT-Stufe“ je Studie (optional).
3. Tabellenüberschriften in Kästen im PDF (buchweit).
