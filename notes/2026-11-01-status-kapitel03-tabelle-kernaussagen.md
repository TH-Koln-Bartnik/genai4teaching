# Status: Tabelle 3.2 (`tbl-stand-kap3`) nach Kernaussagen umgebaut (01.11.2026)

Branch `kapitel03-tabelle-kernaussagen`, nicht nach `main` gemergt, `docs/` nicht neu gerendert.

## Geändert
- `kapitel03.qmd`, Kasten „Stand der Forschung bei Drucklegung“: Pipe-Tabelle durch Grid-Tabelle ersetzt (Aufzählungen in Zellen). Spalte 2 = Kernaussagen (fett) mit tragenden Studien als Bullets; Spalte 3 = weitere Belege, je Bullet eine Kernaussage mit Studien in Klammern. Einleitungssatz des Kastens um die Punkteskala erweitert; Tabellentitel angepasst.
- Belastbarkeit je Wirkungsaussage als ●●● / ●●○ / ●○○ (nicht ★: TeX Gyre Pagella hat kein U+2605, ● und ○ sind vorhanden). In HTML Tooltip „hoch/mittel/begrenzt“.
- Regel: stärkstes Design der Studien einer Aussage nach CEBMa-CAT-Leitlinie (AA/A = 3, B = 2, C–E = 1); je ein Punkt Abzug, wenn keine Studie begutachtet, Herstellerdaten, nachgewiesene Konfundierung. Theorie und Methodenkritik ohne Punkte. Übertragbarkeit (Schule → Hochschule) steht in der Studienangabe.
- `references.json`: neu `cebma2017cat` (Barends, Rousseau & Briner, Hrsg., 2017, Version 1.1, URL geprüft 01.11.).
- **Fehlerkorrektur:** `sungu2026harmteaching` stand in Tabelle und Online-Seite als „senkt Motivation der Lehrenden“. Richtig: randomisiertes Feldexperiment, 193 Lehrkräfte, Türkei; senkt die intrinsische Motivation der **Schülerinnen und Schüler** um 0,11 SD (SSRN; Hechinger Report 07/2026). `forschungsstand.qmd` ebenfalls korrigiert.
- `guan2026` aus der Drucktabelle genommen (Befund nicht verifiziert), bleibt online.

## Zu prüfen (Roman)
1. Punktvergaben mit unsicherem Design: `chakraborty2026` (randomisiert?), `brender2026reflective` (Zuteilung SG/PR; AIED 2026, begutachtet → `references.json` von `document` auf Tagungsband umstellen), `chen2026transfer` (●●● trotz N = 108).
2. Strenge Regel stuft die Einbettungsaussage (Q4) auf ●●○, weil die RCTs Working Papers sind; Alternative: Konsistenz mehrerer RCTs als Aufwertung.
3. Druck-PDF nicht gerendert (TeX fehlt); Breite der Grid-Tabelle im Satzspiegel 17 × 24 cm prüfen. HTML bei 390 px breiter als Viewport (624 px), wie andere Tabellen.
4. Online-Seite „Forschungsstand“: Spalte „CAT-Stufe“ je Studie ergänzen?
