# Status: Kosten-Raster (Kap. 2.4) und Tutor-Bot-Rechner

Stand: 30.10.2026, 11:10 · Branch `revision-2026-druck` · Prototypen: Raster https://claude.ai/artifact/E2JbnJHkep75BfTMHLtFk1 · Tutor-Bot https://claude.ai/artifact/E64N3AoEdNX7VVMuPhAZpi

## Kosten-Raster (`interactions/ki-entwicklung.html?zeige=kosten`)
Ablauf (Commit a886599): eine Schätzfrage vorab (Fragen für 30 ct im Juli 2026), Zeitstrahl der acht Preisstufen, Klick-Zeiger, Auflösung auf der letzten Stufe, Umschalter zur Treppe.
Neu (Commit f03c7a4):
- Jede Preisstufe hat eine feste eigene Farbe (o3 dunkel; dann blau, orange, türkis, gelb, rosa, grün, violett; Palette der dataviz-Vorlage, auf Farbfehlsichtigkeit geprüft hell und dunkel). Die Fläche einer Farbe zeigt, wie viel ein Schritt ausmachte; die Zeitstrahlpunkte tragen dieselben Farben und dienen als Legende.
- Großzahl in der Info-Spalte: Preis je Frage in ct (29,9 · 8,91 · 1,29 · 0,88 · 0,71 · 0,22 · 0,12 · 0,041) mit Farbfeld der Stufe; darunter Modell, Rückgang, „30 Cent kaufen N Fragen“.
- „Ein Kästchen = eine Frage zum o3-Preis …“ steht jetzt in der Quellenzeile.
- Druck `images/druck/ki-kosten-qr.png`: Farbschlüssel (Monat und Rückgang) über den vier kleinen Rastern; Bildunterschrift um einen Satz zu den Farben ergänzt.
- Kontrasthinweis: Türkis, Gelb und Rosa liegen auf hellem Grund unter 3:1; ausgeglichen durch beschriftete Zeitstrahlpunkte, Druck-Legende und Datentabelle.

## Tutor-Bot-Rechner (`interactions/tutor-kosten.html`, Commit 860f54b) — seit 30.10. in Kapitel 2.4 eingebaut
Eingaben: Studierende 150, Fragen an den Tutor-Bot pro Person und Tag 2, Tage im Semester 98 → 29.400 Fragen; Semesterkosten 8.788 US-$ (o3, Jan. 2025) → 12,11 US-$ (Juli 2026). Stufenweise Balken, linear/log, Druckzwilling `images/druck/tutor-kosten-qr.png`. Einbau-Baustein und Hinweis zum Absatz in 2.4 (rechnet noch mit 20 Fragen/Woche): Projektnotiz `claude/mollick-2026/ARBEITSNOTIZ-tutor-kosten-2026-10-30.md`.
Gemeinsame Datenquelle beider Seiten: `interactions/models/epoch-kosten.js`.

## Einbau in Kapitel 2.4 (30.10.2026, 11:40)
- Die Tutor-Sätze stehen jetzt nach dem Kosten-Raster (@fig-ki-kosten), mit Tagesrechnung: 150 × 2 × 98 = 29.400 Fragen, rund 8.800 US-$ (o3, Jan. 2025) → rund 12 US-$ (Juli 2026); je Person 59 $ bzw. 8 ct. Danach HTML-Hinweis, iframe (950 px) und Druckabbildung @fig-tutor-kosten.
- Rechner in den Stufenfarben des Rasters: `--st1 … --st7` (hell/dunkel) übernommen, `farben()` wie in ki-entwicklung.html (o3 = `--text-primary`). Alle Balken voll gefärbt, aktuelle Stufe über Band und fette Beschriftung; Großzahl in Textfarbe mit Farbfeld (Türkis/Gelb/Rosa wären als Schrift unter 3:1); Farbfelder auch in der Datentabelle.
- Druckzwilling `images/druck/tutor-kosten-qr.png` neu erzeugt; alle übrigen Druckbilder bitgleich.
- Hinweis: Im Druck (lineare Achse) sind die Balken ab Feb. 2026 nur Haarlinien, ihre Farben also kaum erkennbar.

## Offen
1. Druckbild Tutor-Rechner: lineare Achse lassen (Botschaft „fast null“) oder log-Achse (Farben aller Stufen sichtbar)?
2. Bei 380 px Breite ist der Rechner rund 1.200 px hoch, das iframe 950 px (scrollt auf dem Handy).
3. Gemini 2.5 Pro zweimal (März/Juni 2025) in der Epoch-Quelle klären; Lizenz `droodman/inference-cost`.
4. Lokale Kopie: `git fetch origin` und `git reset --hard origin/revision-2026-druck`.
