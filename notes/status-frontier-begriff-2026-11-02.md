# Status: Begriff „Frontier-Modell“ bereinigt (2.11.2026, ca. 16:30)

Anlass (Roman, 15:34): Der Satz in „Welches Modell?“ (@sec-model-choice) behauptete, jedes große KI-Labor biete ein großes Frontier-Modell an. Frontier-Modelle sind aber nur die jeweils deutlich leistungsstärksten Modelle; nicht jedes Labor hat eines. Das Buch nutzte „Frontier-Modell“ zudem als Klassenetikett, einschließlich des widersprüchlichen „kleinen Frontier-Modells“.

Entscheidung Roman (Multiple Choice, nach Pro/Contra-Diskussion mit Quellen): **buchweit bereinigen, Klassen heißen „großes/kleines geschlossenes Modell“**, Satz Variante A ohne Modellnamen, Glossareintrag.

## Änderungen (Branch `frontier-begriff`)
- `kapitel02.qmd` Z. 395: „große geschlossene Modelle, deren Gewichte beim Anbieter bleiben“ + Definition Frontier-Modell als Rang [@fmf2026about]; Z. 407 (KI:connect.nrw): „geschlossene Modelle großer Anbieter“ statt „Frontier-Modelle“.
- `images/druck/modellwahl-klassen.svg`: Felder „Kleines/Großes geschlossenes Modell“, „hier liegt die Frontier“ statt „Maßstab der Frontier“, Beschreibung (desc) angepasst.
- Entscheidungsbaum: `scripts/druck-modellwahl.cjs` und `interactions/modellwahl-baum.html` gleichlautend „kleines Modell“, „Modell mit Bildgenerator“, „großes Modell, hohe Denkstufe / mit Recherche-Agent / im Agentenmodus“. Kurzform, weil „geschlossenes“ in der Druckspalte mit der Stufe kollidiert und Weiche 1 die offenen Modelle schon abzweigt. `images/druck/modellwahl-baum.svg` neu erzeugt (QR unverändert).
- `modelluebersicht.qmd`: Klassen in Einleitung und Leseanleitung umbenannt; Änderungshistorie ergänzt.
- `glossar.qmd`: neuer Eintrag „Frontier-Modell“ (Rang, keine Bauart; Herkunft lat. *frons*); „Jagged Frontier“ verweist für die Herkunft darauf.
- `references.json`: `fmf2026about` (Frontier Model Forum, About us, abgerufen 2.11.2026, https://www.frontiermodelforum.org/about-us).
- `docs/` per vollständigem `quarto render --to html` (Quarto 1.8.25) neu erzeugt; Download-PDF/EPUB aus Git zurückgeholt.

## Prüfung
- Render: nur die 36 bekannten „OJS block count mismatch“; `?@` in kapitel02/glossar/modelluebersicht: 0; Quelle FMF erscheint im Literaturverzeichnis.
- Abbildung und Baum als PNG gesichtet: keine Überläufe. Klick-Baum (390 px) ohne JS-Fehler.

## Offen
1. Merge `frontier-begriff` → `main` nach Freigabe des Diffs durch Roman.
2. Druck-PDF neu rendern (TeX fehlt in der Cloud).
3. Datierter Kasten @tbl-modellstand / Modellübersicht: Claude Sonnet 5.5 ist als „klein“ geführt, liegt in aggregierten Ranglisten aber vor Gemini 4 Argon („groß“). Zuordnung prüfen.
4. Gemini 4 Argon: Ranglisten widersprechen sich (ArtificialWatch Platz 7; Metatext Okt. 2026 Platz 1 LMArena). Offizielle Arena-Seite vor einer Aussage im Buch selbst prüfen.
