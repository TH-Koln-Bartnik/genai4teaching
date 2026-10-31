# Status: Modellwahl in Kapitel 2.3 gebaut und gemergt (31.10.2026, ca. 17:40)

Grundlage: `claude/modellwahl/PLAN-modellwahl-kasten-2-3-2026-10-31.md` (Bauschritte 1–6) und `recherche-darstellungen-modellwahl-2026-10-31.md`.
Entscheidungen Roman (31.10., 16:35, Multiple Choice): Branch pushen **und nach Prüfung mergen**; 2.3 **auf ~450 Wörter umbauen** (Klassen-Absatz → Abb. 2, Abo-Absätze → Abb. 1, Baum ersetzt Empfehlung); Kasten mit Spalte **„Stufen (Monatspreis)“ statt „Zugang“**, Namen aktualisiert.

## Repository
Repo `TH-Koln-Bartnik/genai4teaching`. Branch `kapitel02-modellwahl` (Commit `5ed2c6c`) per Fast-Forward in **`main` gemergt und gepusht** (17:35). Zweimal neu aufgesetzt, weil `main` parallel weiterlief (Kap.-1-Merge, Umbau 2.1, Startseite). Branch ist löschbar.

| Datei | Inhalt |
|---|---|
| `kapitel02.qmd` @sec-model-choice | Fließtext ~470 Wörter: „Was für Sprachmodelle gibt es?“ (Klassen, Reasoning, offene Modelle, Rückstand 4 bzw. 6–12 Monate) · „Was kauft ein Abonnement?“ (0/20/100 €, Fußnote `[^preisstufen]`) · Setup-Absatz + `fig-reasoning-models-better` aus dem Umbau 2.1 übernommen · „Kostenfreie Zugänge über die Hochschule“ (GWDG, THKI-Lab, KI:connect gekürzt, API-Erklärung) · „Welches Modell für welche Aufgabe?“ (drei Fragen + Prüfregel) · Baum (HTML: iframe 820 px; Druck: SVG mit QR) · Kasten `tbl-modellstand` neu |
| `images/druck/modellwahl-klassen.svg` | Abb. `fig-modellklassen`, 2×2-Feld (Leistung × Kontrolle über Daten), Rückstand in Akzentfarbe; Druck und Web |
| `images/druck/modellwahl-stufen.svg` | Abb. `fig-abo-stufen`, drei Säulen (gedeckelt · 1× · ca. 5×), Achse „Kontingent: Nachrichten und Agentenzeit“, Akzent-Klammer „dasselbe große Modell mit hoher Denkstufe“ |
| `interactions/modellwahl-baum.html` | Klick-Baum: Daten (ja → Blatt Hochschulzugang) → sechs Aufgaben → Häufigkeit (täglich = +1 Stufe) → Ergebnis-Karte; Prüfregel immer sichtbar; Zurück/Neu; Link auf Modellübersicht |
| `scripts/druck-modellwahl.cjs` → `images/druck/modellwahl-baum.svg`, `images/qr/qr-modellwahl-baum.png` | Druckzwilling des Baums mit eingesetztem QR-Code (Ziel: `…/interactions/modellwahl-baum.html`) |
| `modelluebersicht.qmd` | Baum eingebunden, Tabelle wie Kasten, Lesehinweis und Änderungshistorie fortgeschrieben |
| `references.json` | neu: `mollick2026guide`, `edwards2026openclosed`, `somala2025consumergpu`, `openai2026pricing`, `anthropic2026pricing`, `google2026aiplans`, `mistral2026pricing` |
| `docs/` | HTML neu gerendert (Quarto 1.8.25), Download-PDF/EPUB unverändert zurückkopiert |

## Schritt 1: Preise und KI:connect (geprüft 31.10.)
- **OpenAI:** Free · Go 8 € · Plus 23 € · Pro 100/200/500 US-$ = 103 €/229 €/510 € inkl. MwSt. (deutsche Preisseite laut mehreren Sekundärquellen; offizielle USD-Angaben im Hilfeartikel „About ChatGPT Pro tiers“). Free/Go nutzen GPT-5.6 Luna; Spitze GPT-6 Astra, GPT-6.1 Sol.
- **Anthropic:** Free · Pro 20 US-$ · Max 100 US-$ (5×) · **Ultra 200 US-$ (10×, ersetzt Max 20×)**, Preise zzgl. Steuer (claude.com/pricing). Free: Sonnet + Haiku; Opus ab Pro; Fable in Max/Ultra bis 50 % des Wochenlimits, in Pro über Nutzungsguthaben.
- **Google** (offizielle deutsche Seite): Free · AI Plus 4,99 € · AI Pro 21,99 € · AI Ultra 99,99 € (5× Pro) / 219,99 € (20×). Spitze Gemini 4 Argon; Free nur Flash-Lite.
- **Mistral:** Le Chat heißt jetzt **Vibe**; Pro 14,99 US-$ zzgl. Steuer, Studierende 5,99 US-$.
- **KI:connect.nrw:** Changelog v1.27.0 vom 01.10.2026 bestätigt GPT-5.6 (Sol, Terra, Luna) und GPT-6 (Astra, Sol, Luna). „KI:connect-Abratung“ war schon am 18.10. entschieden (Abratung entfällt, erste Wahl in NRW).
- **Belege Abb. 2:** Edwards & Emberson (29.05.2026) 4 Monate / 8 ECI-Punkte; Somala & Emberson (15.08.2025) 6–12 Monate auf einer RTX 5090. Mollick (23.07.2026): teure Stufen kaufen „more hours of AI labor, not smarter AI“.

## Abweichungen vom Plan (bitte bestätigen)
1. **Ort:** Plan nannte @sec-capabilities; Kasten und Abo-Angaben standen in **@sec-model-choice** (2.3). Dort gebaut.
2. **Stufe 100 € statt 100–150 €:** Alle drei Anbieter liegen bei 99,99–107 €; „rund 100 €“.
3. **Recherche (Blatt 4):** Grundstufe 20 € auch für wöchentliche, geplante Aufträge, weil die 20-€-Stufen von OpenAI und Anthropic Aufgabenplanung enthalten; 100 € erst bei täglicher Nutzung. Plan hatte „100 € geplant und wiederkehrend“.
4. **Häufigkeitsregel vereinfacht:** gelegentlich und wöchentlich = Grundstufe, täglich = +1 Stufe (Blatt 6 Tutor ohne Häufigkeitsfrage).
5. **Fußnote:** „200-€-Stufen mit dem Zehn- bis Zwanzigfachen“ statt „20× bei allen drei“ (Anthropic Ultra = 10×).
6. **Kasten:** Meta- und DeepSeek-Zeilen zu einer Zeile „Offene Modelle“ (Familien ohne Versionsnummern) zusammengefasst; Microsoft-365-Copilot-Absatz und `@rogers2026`/`@vellum2025` entfallen (jetzt unzitiert in `references.json`).
7. **Abb. 2 ohne Pfeile:** Rückstand als Akzenttext; Pfeile wirkten mehrdeutig.

## Prüfung (Schritt 6)
- Render HTML: nur die 36 bekannten OJS-Warnungen; Querverweis `@fig-tutor-kosten` (nur im Druck vorhanden) durch Verweis auf @sec-capabilities ersetzt.
- Browser (Playwright): Kapitel 2.3 und Modellübersicht laden ohne JS- oder 404-Fehler; iframe in beiden klickbar; Fußnote und Querverweise aufgelöst; Klick-Baum bei 390 px ohne horizontales Scrollen, alle Pfade durchgespielt.
- Graustufenbild aller drei SVGs geprüft: lesbar, Akzent als dunkles Grau unterscheidbar.
- Kapitel 2 läuft bei 390 px weiterhin 657 px breit; Ursache ist eine Tabelle in **@sec-harness** (schon vor diesem Branch), nicht 2.3.

## Offen
1. **Druck-PDF** nicht gerendert (kein TeX in der Cloud): SVG-Einbindung über rsvg-convert, Umbruch der drei Abbildungen und Fußnote prüfen.
2. **OpenAI-Euro-Preise** einmal selbst auf chatgpt.com (deutsche Ansicht) gegenprüfen; Anthropic-Euro-Preis im Bestellvorgang ansehen (Fußnote nennt US-$ zzgl. Steuer).
3. Fließtext 2.3 liegt bei ~470 Wörtern plus Setup-Absatz aus dem Umbau 2.1 (~50 Wörter); bei Bedarf Setup-Satz und Daumenregel-Bild streichen, weil Prüfregel und Abb. 1 dasselbe sagen.
4. `rogers2026`, `vellum2025` ggf. aus `references.json` entfernen.
5. Tabelle in @sec-harness für 390 px umbrechen (andere Sitzung).
6. Branch `kapitel02-modellwahl` auf GitHub löschen.

## Nachtrag 17:55: Freigabe und Doppelbau
- **Roman (Multiple Choice):** alle sieben Abweichungen vom Plan **übernommen**; offene Punkte in neuer Sitzung.
- **Achtung Doppelbau:** Die Sitzung „P8 + Modellwahl“ (`claude/kapitel02-p8-modellwahl/STATUS-p8-modellwahl-2026-10-31.md`, Branch `kapitel02-p8-modellwahl`, Basis `8df09da`) hat um 17:00 ebenfalls mit Modellwahl 2.3 begonnen. Die Modellwahl ist seit `5ed2c6c` in `main`. Diese Sitzung soll **Teil 2 nicht weiterbauen**, sondern nur P8 (Commit `5ae7e9e`) auf `origin/main` neu aufsetzen (`git rebase origin/main`) und mergen. Ein Konflikt kann in `kapitel02.qmd` (2.1.4) und `references.json` entstehen, nicht in 2.3, solange Teil 2 nicht committet ist.

## Startauftrag für die nächste Sitzung (offene Punkte)
„Lies `claude/modellwahl/STATUS-modellwahl-2026-10-31.md`. Kläre per Multiple Choice: Setup-Absatz und Daumenregel-Bild in 2.3 behalten oder streichen; `rogers2026`/`vellum2025` entfernen. Render das Druck-PDF (Profil print) und prüfe die drei Modellwahl-Abbildungen und die Fußnote. Arbeite auf eigenem Branch von `main`.“
