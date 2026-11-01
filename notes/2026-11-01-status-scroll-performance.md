# STATUS Scroll-Performance: live (01.11.2026, ca. 21:25)

Grundlage: Diagnose `claude/feedback-2026-11-01/STATUS-scroll-ruckeln-diagnose-2026-11-01.md` (Projekt). Auftrag Roman (MC): alle Korrekturen umsetzen.

## Änderungen auf `main`
- `4eee8d3` (Quelle, Cherry-Pick auf `e628fe9` Literatur je Kapitel, konfliktfrei):
  - Kap. 3: `images/script03-lerntechniken-{spacing,interleaving,testing-effect}.png` (2816×1536, zusammen 18,9 MB) ersetzt durch `.jpg` 1800×982, q85 (184/323/171 KB; ca. 300 dpi bei 15 cm, XeLaTeX-tauglich). `kapitel03.qmd` Z. 134/140/146.
  - `loading="lazy"` für alle iframes: kapitel01 (1), kapitel02 (20), kapitel04 (1), vorwort (1), modelluebersicht (1), kapitel06-fallbeispiele (1); anhang-primer hatte es schon.
  - Titelbild `images/logos/logo-cover.jpg` (1200×435, 111 KB) statt `logo.svg` (2,1 MB, eingebettetes PNG) für `cover-image`/`image` in `_quarto.yml`. `logo.svg` bleibt im Repo, unbenutzt.
  - `include/schrift-vorladen.html` (preconnect + Stylesheet-Link Lato) über `include-in-header` (html).
- `a56153d` (`docs/`): Quarto 1.8.25 `--to html`, nur die bekannten 36 × „OJS block count mismatch“; Download-PDF/EPUB gesichert und zurückgelegt (SHA256 identisch).
- Erster Versuch (Branch `scroll-performance`, Merge `9fadd52`) wurde nicht gepusht und ist verworfen; Remote-Branch existiert nicht.

## Live-Messung (Playwright, Übertragung komprimiert, beim Öffnen)
- Startseite 2,2 → 0,7 MB; Kap. 2 1,7 → 0,7 MB (Animationen laden beim Hinscrollen, 20/20, keine JS-Fehler); Kap. 3 20,0 → 1,3 MB; Kap. 4 3,0 → 2,6 MB.
- Layout-Verschiebung beim Laden (10 Mbit/s): Kap. 1 weiterhin 0,23, Kap. 4 0,15 — das Schrift-Vorladen hat hier nichts bewirkt. Betrifft den Moment des Ladens, nicht das Scrollen.

## Offen
1. Kap. 1/4: Ursache der Verschiebung beim Laden genauer bestimmen (Kandidaten: Umbau der Einschätzungen/Einstiegsfragen durch `include/einschaetzung.html` bzw. `include/mc-frage.html`, Seitenleiste). Falls `schrift-vorladen.html` auch dann nichts bringt: wieder entfernen.
2. Optional: Dauer-Animationen in iframes pausieren, solange sie nicht sichtbar sind (`agenten-gedaechtnis`, `ki-entwicklung`, `llm-game-standalone`, `tutor-kosten`).
3. Druck-PDF: nimmt beim nächsten Druck-Render die JPGs; Abb. 3.1–3.3 im PDF ansehen.
4. Roman: Online-Fassung auf dem eigenen Rechner scrollen; ruckelt es weiter, Browser/Seite melden (dann Hardwarebeschleunigung, Edge-Effizienzmodus prüfen).

## Candidate permanent notes
- Die Dateigröße eines Bildes bestimmt die Ladezeit, seine Pixelzahl dagegen die Arbeit des Browsers beim Scrollen.
- Eingebettete Animationen, die erst beim Hinscrollen laden, kosten nur die Leser, die tatsächlich bis zu ihnen kommen.
- Eine Korrektur, deren Wirkung nicht nachgemessen wird, bleibt eine Vermutung im Code.

Ablage: Projekt `claude/feedback-2026-11-01/STATUS-scroll-performance-2026-11-01.md` ✓ / Repo `notes/2026-11-01-status-scroll-performance.md` ✓ / Tresorit – (kein Ordner verbunden)
