# STATUS S3 – Neue Animation Scaling Laws (01.11.2026, ca. 15:45)

Grundlage: `claude/feedback-2026-11-01/PLAN-feedback-sitzungen-2026-11-01.md`, Abschnitt S3. Einbaustelle laut `claude/feedback-2026-11-01/PLAN-kapitel02-neugliederung-4d-2026-11-01.md`: neuer Abschnitt 2.3.1, ersetzt den Absatz „Den Fähigkeitszuwachs beschreiben zwei Scaling Laws …“ (heute `kapitel02.qmd` Z. 638), nach dem METR-Zeithorizont und vor dem 725-Raster.

## Entscheidungen Roman (MC, 01.11.)
- Nächste Sitzung: **S3** (S1b war beim Start nicht möglich, der S1a-Plan lag noch nicht vor; inzwischen liegt er im Projekt).
- Repo: **Branch pushen**; das Repo wurde der Sitzung mit Schreibrecht hinzugefügt, Push funktioniert.
- Storyboard: **freigegeben wie vorgeschlagen** (8 Schritte).
- Analogie: **Prüfung** (Lernzeit vor der Prüfung = Training, Bearbeitungszeit in der Prüfung = Denkzeit beim Antworten).

## Ergebnis
Branch `scaling-laws` von `origin/main` `31450ba`. **Keine Änderung an `kapitel02.qmd`** (Einbau erst nach S1b).

| Datei | Inhalt |
|---|---|
| `interactions/scaling-laws.html` | neue Klick-Animation, 8 Schritte, Vorhersage, zwei Felder (links Training, rechts Antworten), unter 600 px untereinander; `window.ANIM`; `#druck`, `?hoersaal`; Engine der Vorlage um `data-grau-bis` erweitert (linkes Feld nur in Schritt 5–7 grau) |
| `scripts/druck-scaling-laws.cjs` | Druckzwilling + QR (Muster `druck-chatbot-zu-agent.cjs`) |
| `scripts/qr-in-abbildung.py` | Liste um `scaling-laws` ergänzt |
| `images/druck/scaling-laws-qr.png` | Druckbild mit QR (2910 × 913 px, 300 dpi); QR maschinell gelesen: `https://th-koln-bartnik.github.io/genai4teaching/interactions/scaling-laws.html` |
| `images/qr/qr-scaling-laws.png` | QR-Code |
| `references.json` | neu `kaplan2020`, `hoffmann2022`; `snell2024` korrigiert (Typ arXiv-Artikel, DOI, Datum, Titel „LLM“ groß) |
| `scripts/aufmerksamkeit-ziele.json` | Prüfziel `A-scaling` |

## Storyboard (umgesetzt)
Titel: „Modelle werden auf zwei Wegen verlässlich besser: durch mehr Rechnen beim Lernen und mehr Nachdenken beim Antworten“. Vorhersage: Was passiert mit dem Fehler, wenn man den Rechenaufwand fürs Training verzehnfacht? (richtig: sinkt jedes Mal um etwa denselben Anteil).

| Schritt | neu (Akzent) | Bildunterschrift |
|---|---|---|
| 1 | linkes Feld: Achsen ×1 … ×1000, „Rechenaufwand Training“, „Vorhersagefehler“ | Waagrecht steht der Rechenaufwand beim Training; jede Marke ist zehnmal so viel wie die vorige. |
| 2 | fünf Punkte „Modelle wachsender Größe“ | … machen beim Vorhersagen des nächsten Worts weniger *Fehler*. |
| 3 | Gerade „Skalierungsgesetz“ | … auf einer *Geraden*: Jede Verzehnfachung senkt den Fehler um denselben Anteil. |
| 4 | Gopher · 280 Mrd. (über der Linie), Chinchilla · 70 Mrd. · 4× Daten (darunter) | Bei gleichem Aufwand gewinnt das kleinere Modell mit viermal mehr Daten: *Daten und Größe* gehören zusammen. |
| 5 | rechtes Feld: „Denkzeit beim Antworten“, „Trefferquote“; links grau | … weiter verbessern: mit mehr *Denkzeit* vor der Antwort. |
| 6 | steigende Gerade + „o1 · AIME 74 % → 83 % (64 Anläufe)“ | … darauf beruhen die *Reasoning-Modelle*. |
| 7 | gestrichelte Linie „14× größeres Modell“, Schnittpunkt markiert | Bei mittelschweren Aufgaben schlägt ein kleines Modell mit Denkzeit ein *14-mal größeres* bei gleichem Rechenbudget. |
| 8 | „Hebel 1 · einmal bezahlt“, „Hebel 2 · je Antwort“; links wieder Tinte | Training kostet einmal, *Denkzeit* bei jeder Anfrage: Reasoning-Modelle sind besser, aber je Antwort teurer. + Auflösung |

Abweichungen vom freigegebenen Storyboard: Schritt 7 zeigt statt eines Pfeils „Denkzeit statt Größe“ eine gestrichelte Vergleichslinie im rechten Feld (funktioniert auch im Handy-Layout); Schritt 8 „je Antwort“ statt „bei jeder Antwort“ (Wortbudget).

Eingeklappt nach Schritt 8: Vergleich mit einer Prüfung; Lehrmodell und Annahmen; Quellen (APA). Unter dem Bild: „Kurven: Lehrmodell, schematisch. Zahlen aus den Quellen unten.“

## Quellenprüfung (im Original, 01.11.)
- Kaplan et al. (2020), arXiv:2001.08361: Loss folgt Potenzgesetz in Modellgröße, Datenmenge und Rechenaufwand, teils über mehr als sieben Größenordnungen (Abstract).
- Hoffmann et al. (2022), arXiv:2203.15556: über 400 Modelle; Modellgröße und Tokens gleich skalieren; Chinchilla 70 Mrd., gleiches Budget wie Gopher (280 Mrd.), etwa 4× mehr Daten, durchweg besser (Abstract).
- OpenAI (2024), „Learning to reason with LLMs“: Leistung steigt mit Train-time und Test-time Compute; Diagramme ohne Zahlen auf der Rechenachse; AIME 2024: 74 % (eine Antwort), 83 % (Konsens über 64).
- Snell et al. (2024), arXiv:2408.03314: im FLOPs-gleichen Vergleich schlägt Test-time Compute ein 14-mal größeres Modell, nur bei Aufgaben, die das kleine Modell schon teilweise löst; > 4× effizienter als Best-of-N.
- Weggelassen, weil nicht im Original geprüft: Exponenten der Kaplan-Gesetze, Chinchilla-Tokenzahl, Benchmark bei Snell.

## Prüfungen
- `scripts/pruefe-aufmerksamkeit.cjs interactions/scaling-laws.html`: **BESTANDEN** (max. 37 sichtbare Wörter bis Schritt 7, ≤ 8 neue, 1 Farbton, je 1 neue Gruppe); `pruefe-aufmerksamkeit-alle.cjs --nur A-scaling`: im Budget.
- Playwright 1200 px und 390 px: keine JS-Fehler; bei 390 px Felder untereinander, Beschriftungen im Bild; Vorhersage-Auflösung im Schlusstext.
- Inhaltshöhe: 760 px Breite → 700 px (Start) / 803 px (Ende); 390 px → 1148 / 1251 px; aufgeklappt 1744 / 2927 px.

## Für den Einbau nach S1b (Vorschlag, nicht eingebaut)
iframe: `<iframe src="interactions/scaling-laws.html" width="100%" height="820px" frameborder="0" title="Animation: Zwei Skalierungsgesetze – Training und Denkzeit beim Antworten"></iframe>` (aufgeklappte Hintergrundteile werden abgeschnitten, wie bei den übrigen festen iframe-Höhen).

Textvorschlag (ersetzt Z. 638 alt):
> Warum die Grenze so schnell wandert, beschreiben zwei Skalierungsgesetze (*scaling laws*) [@kaplan2020; @hoffmann2022; @openai2024; anschaulich bei @grootendorst2025]. Erstens werden Modelle verlässlich besser, je mehr Daten, Rechenleistung und Parameter ins Training fließen: Jede Verzehnfachung des Rechenaufwands senkt den Vorhersagefehler um etwa denselben Anteil [@kaplan2020], sofern Daten und Modellgröße im Gleichschritt wachsen [@hoffmann2022]. Zweitens liefert ein fertig trainiertes Modell bessere Lösungen, wenn es vor der Antwort mehr „Denkzeit“ für zusätzliche Rechenschritte erhält [@openai2024; @snell2024]; auf diesem zweiten Gesetz beruhen die Reasoning-Modelle [@gottweis2025; @schwarcz2025]. Wie bei einer Prüfung ist die Lernzeit einmal bezahlt, die Bearbeitungszeit fällt bei jeder Prüfung neu an; deshalb kosten Reasoning-Modelle je Antwort mehr.

Druck-Bildunterschrift (`{#fig-scaling-laws}`, Bild `images/druck/scaling-laws-qr.png`):
> Zwei Skalierungsgesetze: Links sinkt der Vorhersagefehler mit dem Rechenaufwand im Training auf einer Geraden (beide Achsen logarithmisch); bei gleichem Budget schneidet das kleinere, mit mehr Daten trainierte Chinchilla besser ab als Gopher. Rechts steigt die Trefferquote mit der Denkzeit beim Antworten; bei mittelschweren Aufgaben schlägt ein kleines Modell mit Denkzeit ein 14-mal größeres. Lehrmodell, schematisch; Zahlen nach @kaplan2020, @hoffmann2022, @openai2024 und @snell2024. Interaktive Fassung: QR-Code scannen oder <https://th-koln-bartnik.github.io/genai4teaching/interactions/scaling-laws.html> aufrufen.

Glossar (S6): Eintrag „Scaling Laws“ existiert (`glossar.qmd` Z. 121); S6 kann ihn auf „Skalierungsgesetz (*scaling law*)“ umstellen und auf die Animation verweisen.

## Offen
1. Einbau in `kapitel02.qmd` 2.3.1 nach S1b (Text, iframe, Druckabbildung); `docs/` rendern, live prüfen.
2. Merge-Entscheidung Branch `scaling-laws` (siehe Ablage).

## Candidate permanent notes
- Auf doppelt-logarithmischer Achse wird ein Potenzgesetz zur Geraden, auf normaler Achse sieht dasselbe Gesetz wie Abflachen aus.
- Bei gleichem Rechenbudget schlägt ein kleineres Modell mit mehr Trainingsdaten ein größeres mit weniger Daten.
- Denkzeit beim Antworten ersetzt Modellgröße nur bei Aufgaben, die das Modell schon teilweise beherrscht.
- Trainingsaufwand ist einmal bezahlt, Denkzeit fällt bei jeder Anfrage neu an und verschiebt die Kosten in die Nutzung.
