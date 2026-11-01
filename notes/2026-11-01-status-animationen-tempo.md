# Status S2: Tempo und Fokus bestehender Animationen, eingespielt und live (01.11.2026, ca. 15:15)

Grundlage: `claude/feedback-2026-11-01/STATUS-animationen-tempo-2026-11-01.md` (Bau-Sitzung, Patch in Tresorit `Projektnotizen-Claude/feedback-2026-11-01/animationen-tempo/`), Plan `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md`, Abschnitt S2.

## Inhalt des Patches (Bau-Sitzung, Commit `3d7c935`)
- `interactions/ki-entwicklung.html`: METR-Zeithorizont online als Klickfolge (9 Schritte, Vorhersage vorab, Bühne `#buehne1`, `window.ANIM_ZEIT`); alte Grafik nur noch für `#druck`. 725-Raster: Leitfrage `#leitfrage` über dem Raster („Wie viele Antworten auf schwierige Fragen (= Kästchen) kann ich für 30 Cent kaufen?“), Texte „Antworten“ statt „Fragen/Kästchen“.
- Acemoglu-Video 38 s → 60 s (längere Lesepausen), neu gerendert (HyperFrames 0.8.216, 1920×1080, 3,8 MB); `_src/videos/acemoglu/build.mjs`, README, QR-Bild Druck (nur Laufzeit-Text), `scripts/qr-kapitel04-videos.py`.
- `kapitel04.qmd`: Laufzeit 60 s in Videounterschrift und Druck-Bildunterschrift.
- `scripts/aufmerksamkeit-ziele.json`: A5-zeit Bühne `#buehne1`, 9 Schritte.
- Storyboard METR und Prüfprotokoll: siehe Projekt-Statusnotiz.

## Einspielen (diese Sitzung)
- `git am` des Komplett-Patches (SHA256 `2b5a982c…`) auf `origin/main` `0a48673`: konfliktfrei, Commit-Hash identisch `3d7c935`.
- **Fehler im Patch behoben** (`77bf8f2`): gewählter Vorhersage-Knopf war schwarz auf schwarz, weil `.vh .chip{color:…}` nach `.chip[aria-pressed="true"]` steht. Zusatzregel `.vh .chip[aria-pressed="true"]{color:var(--surface-1)}`.
- **Entscheidung Roman (MC):** iframe METR `900px` → `1000px` (`5c9a7d9`). Grund: Inhalt misst bei 1200 px 999 px; die gemeinsame Quellenliste unter dem Diagramm wurde um 99 px abgeschnitten (alter Stand: 895 px Inhalt in 840 px Rahmen, also schon vorher 55 px).
- Merge `83aff56` (`--no-ff`), `docs/` `2ba25cc`. Branch `animationen-tempo` auf GitHub gepusht (kann gelöscht werden).

## Render
- Quarto 1.8.25 (in der Cloud neu installiert), `--to html`, ca. 1 min. Nur die bekannten 36 × „OJS block count mismatch“; keine `?@`.
- Download-PDF und -EPUB vorher gesichert, vom Render gelöscht, unverändert zurückgelegt (SHA256 identisch).
- `docs/kapitel02.html` enthält zusätzlich den Kessler-Text aus `16c8708` (lag schon auf `main`, war nur nicht gerendert).

## Prüfung (Playwright, 1200 px und 390 px)
- Keine JS-Fehler. METR: Vorhersage (3 Knöpfe), dann 8 × Weiter bis „Schritt 9 von 9“; keine Beschriftung außerhalb des SVG; Auflösung der Vorhersage im Schlusstext.
- 725-Raster: Leitfrage sichtbar über dem Raster (beide Breiten).
- Kap. 4 `#vid-acemoglu-restrepo`: Dauer 60,0 s, 1920×1080, Bildunterschrift „Video (60 s …)“, Poster unverändert.
- Bekannt, nicht neu: bei 390 px sind die Inhalte höher als die festen Rahmen (METR 1430 px in 1000 px, Kosten 1854 px in 1100 px); abgeschnitten werden die eingeklappten Zusatzteile und die Quellenliste. Beim alten Stand genauso (1261/840, 1751/1040).

## Live (ca. 15:10)
https://th-koln-bartnik.github.io/genai4teaching/: `kapitel02.html` mit METR-iframe 1000 px und Kosten-iframe 1100 px sowie Kessler-Text; `kapitel04.html` mit „Video (60 s“; `interactions/ki-entwicklung.html` mit Knopf-Fix und Leitfrage; mp4 liefert 3 985 864 Byte.

## Offen
1. Druck-PDF/EPUB: Bildunterschrift Kap. 4 nennt 60 s; beim nächsten Druck-Render (S9/Abgabe) mitnehmen.
2. Feste iframe-Höhen auf dem Handy (s. o.): automatische Höhe für eingebettete Grafiken wäre die saubere Lösung; eigene Sitzung, falls gewünscht.
3. Bei 390 px liegt die Beschriftung „Mythos Preview“ auf der schraffierten Zone „Messgrenze 16 Std.“ (lesbar, aber eng).
4. Abstimmung S1b: Falls S1b die Absätze um Z. 626/650 in `kapitel02.qmd` verschiebt, gehen nur die beiden `height`-Werte (1000/1100) mit.
