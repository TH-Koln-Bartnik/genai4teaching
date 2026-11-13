# Kürzungspakete Kap. 1 und Vorwort (Sitzung K1, 13.11.2026)

Branch `reduktion-k1` von `main` @ `a3e96a8`. Zahlen: `scripts/zaehle_druck.py`, Körper ohne Kapitelend-Apparat. Alles Gekürzte bleibt online vollständig (`content-visible when-format="html"`).

| Paket | Abschnitt | Druck vorher | Druck jetzt | Ziel |
|---|---|---:|---:|---:|
| P1 | Kap. 1, Stützräder-Film nach den Lernzielen (neu) | 0 | ≈ 300 (Text 110, Bildunterschrift, Selbsttest) | – |
| P2 | Kap. 1, `sec-nutzung` + `sec-spiel-ki-aufgaben` | 1.223 | 154 (+ Prüfkasten `ez-k1-1`) | 120 + Prüfkasten |
| P3 | Kap. 1, `sec-kapiteluebersicht` als Tabelle, Galerie „Fünf Formate“ raus | 360 | 379 | 350 |
| P4 | Vorwort, `sec-lernpfade` | 569 | ≈ 90 (+ Liniennetz) | 60 |
| P4 | Vorwort, `sec-neue-moeglichkeiten` + `sec-uebersicht` | 318 | 0 | 0 |
| P5 | Vorwort, `sec-wie-dieses-buch-lehrt` | 854 | 339 (Kurztext 70 + Tabelle) | 300 |
| P6 | Kap. 1, Schlüsselbegriffe: Begriff + *Beispiel:* | Definitionen | Beispielsätze | – |

Kap. 1 Körper: 2.622 → 1.870 Druckwörter (trotz +300 für den Film). Vorwort: 1.864 → 659 (davon ≈ 100 ein HTML-Kommentar, den der Zähler mitzählt).

## P1 Stützräder (Druck und online)

**Zum Einstieg ein Film über Ratschläge, die heute nicht mehr gelten.** „Denke Schritt für Schritt“, „Du bist ein Experte“, ein Trinkgeld von 200 Dollar: Solche Zeilen stehen noch in vielen Prompt-Sammlungen für die Lehre. Der Film „Stützräder“ erzählt in neun Genres, von den Beispiel-Prompts des Jahres 2020 bis zu den Leitfäden der KI-Labore von 2026, woher sie kamen und warum die meisten entfallen, seit die Modelle selbst schrittweise nachdenken. Eine Marke in jeder Szene zeigt, ob ein Ratschlag aus der Dokumentation eines Herstellers, aus einer Studie oder aus der Folklore stammt. Der Film nennt die alten Ratschläge ausdrücklich, bevor er sie ersetzt; solche Widerlegungstexte helfen, eine feste Vorstellung umzubauen (Tippett, 2010). Wie ein Auftrag an ein heutiges Modell aussieht, zeigt Abschnitt 2.x (`sec-access`).

Online: Vorhersage-Satz, Player `kap02-stuetzraeder` (Anker `vid-stuetzraeder`), Kasten „So entstand dieser Film“. Druck: Standbild `images/druck/video-stuetzraeder.png` (QR im Raster neu, zeigt jetzt auf Kap. 1) und Selbsttest mit Verweis auf `sec-loesung-stuetzraeder`.

## P2 Verbreitung (Druck)

**Für Studierende sind Sprachmodelle zum Standard geworden.** In einer britischen Befragung (1.054 Studierende, Dezember 2025) nutzten 95 % KI und 94 % auch für Prüfungsleistungen (Stephenson, 2026); in Deutschland nutzten im Wintersemester 2025/26 81 Prozent der Studierenden KI mindestens wöchentlich (Horstmann et al., 2026). Lehrende nutzen KI seltener und meist unsystematisch im Chatfenster (Bosse, 2026); Ethan Mollick nennt den Abstand zwischen dem, was die Modelle können, und dem, was fast alle mit ihnen tun, den **Fähigkeitsüberhang** (*capability overhang*) (Mollick, 2026). Die Online-Fassung zeigt alle Befunde und ein Spiel, in dem Sie gegen die Daten des *Anthropic Economic Index* raten, wofür Menschen KI tatsächlich nutzen: QR-Code … [QR `qr-nutzung.png`]

Danach Prüfkasten `ez-k1-1` (unverändert). Online: alle Absätze, Bloom-Abbildung, „Höher oder tiefer“ und Making-of-Kasten wie bisher. Der Druckkasten „Raten Sie zuerst“ entfällt.

## P3 Buchübersicht

Absatz „drei Fragen → vier Rollen“ (ohne den Satz zu hdw nrw), dann Tabelle `tbl-buchuebersicht`: Kapitel | Frage, die es beantwortet | Was Sie dort finden; die „Fünf Fragen“ stecken jetzt in der mittleren Spalte. Teil I/II und Anhänge A–C stammen aus der Vorwort-Übersicht. Schluss: Satz mit Link auf die Lernpfade und Satz mit QR (`qr-galerie-vorwort.png`) zur Vorwort-Galerie. Galerie „Fünf Formate“ samt QR-Abbildung raus.

## P4 Vorwort: Lernpfade, Galerie, Übersicht

Druck Lernpfade: „Sie brauchen nicht jede Etappe dieses Buchs. Wer täglich mit Agenten arbeitet, braucht vor allem die Kapitel zur Lernforschung, wer die Lernforschung kennt, vor allem die Grundbegriffe der KI; Erklärungen, die Neulingen helfen, behindern Erfahrene sogar beim Lernen (Kalyuga et al., 2003). Abb. zeigt vier Linien durch das Buch. Zu Ihrer Linie führt online ein Selbsttest mit sechs Fragen: QR …“, dann Liniennetz und QR `qr-lernpfade.png`. Der gedruckte Selbsttest-Kasten und Linie 5 stehen nur noch online.

„Neue Möglichkeiten“ samt Galerie nur online; „37 Beispiele“ → „In den Kapiteln dieses Buchs stecken 29 Beispiele“ (Zählung nach Abschnitt 3 des Zusammenführungsplans: Kap. 1: 2, Kap. 2: 9, Kap. 3: 3, Kap. 4: 1, Kap. 5: 6, Kap. 6: 3, Kap. 7: 5). Linie 5 und Updates-Liste ohne Zahl. „Übersicht“ nur online (Startseite), mit Verweis auf die Tabelle in Kap. 1.

## P5 „Wie dieses Buch lehrt“ (Druck)

Eine gute Regel lautet: Nutze selbst, was du anbietest (*eat your own dog food*). Jede Lernhilfe dieses Buchs beruht auf einem Mechanismus, den Kapitel 4 als belegt vorstellt; die Tabelle ordnet sie nach den Lernzielen Erinnern, Verstehen und Anwenden (Anderson & Krathwohl, 2001). Den größten Nutzen ziehen Sie, wenn Sie sich bei „Bevor Sie weiterlesen“ festlegen und die Lernfragen aus dem Gedächtnis beantworten, bevor Sie in Anhang B nachsehen.

Danach `tbl-mechanismen` (unverändert bis auf „Galerie in Kapitel 1“ gestrichen). Online bleibt die ganze Prosa (ohne den Satz zur Galerie).

## P6 Schlüsselbegriffe Kap. 1

Zehn Beispielsätze statt Definitionen, z. B. Auslagerung des Denkens: „*Beispiel:* Ein Student lässt die Hausübung vom Chatbot lösen, gibt sie fehlerfrei ab und kann in der Sprechstunde keinen Schritt davon erklären.“ Im Glossar fehlen vier Definitionen: Fähigkeitsüberhang, Auslagerung des Denkens, Leitplanke, Anleitung statt Ermutigung (häufige kleine Tests ≈ „Testgestütztes Lernen“).
