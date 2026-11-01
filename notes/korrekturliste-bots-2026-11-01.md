# Korrekturliste Schreibtrainer-Bots (BOT1–BOT8), Stand 01.11.2026

Zweck: Roman ändert die Custom GPTs selbst. Grundlage sind die Anweisungen in `Vorlagen - Lehrbeispiele/Wissenschaftliches Arbeiten Unterlagen/BOT1…BOT8.docx` (Feb. 2026) und der Abschnitt `sec-bots-quellentreue` in `kapitel04.qmd` (Zweig `wiss-schreiben-a-d`). **Nachtrag nach Rebase (01.11.):** Die parallele Sitzung hat BOT1 (Einleitung) und BOT8 (Absatz) als kopierbare Anweisungen auf `schreibtrainer.qmd` bereits korrigiert (keine Originaltexte aus dem Gedächtnis, Markierung „fiktiv“). Offen sind BOT2–BOT7; OpenAI stellt Custom GPTs am 11.12.2026 ein, die Korrekturen gelten deshalb vor allem für künftige kopierbare Fassungen.

Drei Arten von Kollision mit der Quellentreue: (A) echte Texte ohne hinterlegte Datei, (B) erfundene Quellen ohne Kennzeichnung, (C) synthetische Paper-Abschnitte ohne Kennzeichnung.

| Bot | Art | Betroffene Stelle in der Anweisung | Ersatzformulierung (Vorschlag) | Benötigte Wissensdatei |
|---|---|---|---|---|
| BOT1 Einleitung | A | Schritt 5: „GPT zeigt eine vollständige Einleitung eines echten Open-Access-Papers … Die Einleitung wird immer vollständig wiedergegeben.“ | „Zeige ausschließlich Einleitungen aus den hinterlegten Dateien und nenne Autor, Jahr, Titel und DOI. Gib den Text wörtlich aus der Datei wieder. Ist keine passende Datei vorhanden, nenne nur Titel und Link und bitte die Studierenden, die Einleitung selbst zu öffnen und hier einzufügen. Rekonstruiere niemals einen Artikeltext aus dem Gedächtnis.“ | 3–5 Open-Access-Artikel (CC-BY) aus WIng-Themen als PDF, z. B. aus SpringerOpen/EconStor; Liste mit DOI |
| BOT1 Einleitung | A | „Echte Quellen, die GPT vorschlagen darf: Schmeller (2021) …; Open-Access-Journals bei SpringerOpen / EconStor“ | „Schlage nur Quellen aus den hinterlegten Dateien vor; für weitere Quellen verweise auf die Suche nach Kapitel 4.1.2 des Lehrbuchs.“ | Schmeller (2021) als PDF hinterlegen (prüfen, ob schon vorhanden) |
| BOT1 Einleitung | B | Schritt 3: „Hintergrund (inkl. Quelle – darf für den Zweck der Übung frei erfunden sein)“ | „… darf für die Übung erfunden sein. Markiere jede erfundene Quelle in deinem Feedback als [fiktiv] und erinnere einmal daran, dass in echten Arbeiten jede Quelle auffindbar und erklärbar sein muss.“ | – |
| BOT1 Einleitung | B | Schritt 6, Mini-Quiz „Brauche ich hier eine Quelle?“ | ergänzen: „Nenne als Lösung die Art der Quelle (Studie, Statistik, Definition), keine konkreten Titel, die nicht in den Dateien stehen.“ | – |
| BOT2 Forschungsstand | A | Schritt 3: „Ich suche dir einen geeigneten Abschnitt … GPT zeigt vollständigen (!) Abschnitt“ | wie BOT1, Schritt 5 (nur aus hinterlegten Dateien, mit DOI; sonst Link und Einfügen durch Studierende) | 2–3 Literature-Review-Abschnitte bzw. qualitative Studien (OA) als PDF |
| BOT2 Forschungsstand | B | Schritt 5: „zwei (zum Zweck der Übung auch fiktive) Quellen einbaust“; Schritt 4 „Auszüge aus schlechten Arbeiten“ | Markierung [fiktiv] im Feedback wie BOT1; Schritt 4: „Kennzeichne die Auszüge als konstruierte Beispiele.“ | Datei „Studis“ (typische Fehler) prüfen, ob hinterlegt |
| BOT2 Forschungsstand | – | Widerspruch: „GPT darf NICHT … Für die eigenen Beispiele Quellen erfinden“ vs. Schritt 3/4 | Regel präzisieren: „Für eigene Beispiele erfindest du keine Quellen, die wie echte aussehen; nutze Platzhalter wie (Autor A, 2023) [fiktiv].“ | – |
| BOT3 Methoden | C | Schritt 3: zwei Passagen mit „Genau 2 Quellen pro Passage (Format: Autor Jahr)“ | „Verwende Platzhalter-Quellen (z. B. Autor A 2021) und kennzeichne beide Passagen als konstruiert.“ (Hinweis: Anweisung nennt „2 Quellen“ und später „1 Quelle“; vereinheitlichen) | – |
| BOT3 Methoden | A | Zusatz: „Bot empfiehlt 1–2 A-Journal-Methodenteile (IJPR, JOM, IJPE, POM etc.) als Vorbild“ | „Empfiehl nur Artikel aus der hinterlegten Liste mit DOI.“ | Liste mit 4–6 geprüften Methodenteilen (DOI) |
| BOT4 Literature Review | C | Schreibchallenge Runde 1–2: „Synthese aus 3–4 Studien“, „Bewertung von Methoden in 2 Studien“ | „Die Studien sind konstruierte Fallbeispiele; kennzeichne sie als fiktiv und nenne keine realen Autorennamen.“ | – |
| BOT5 Diskussion | C | Übung 3: „wie in peer-reviewed Papers … Integration von Literatur: ‚Extending the findings of Choi and Kim (2021)‘ … konkrete Zahlen … in der Fachliteratur verankert“ | „Die Abschnitte sind synthetisch. Verwende erfundene, als [fiktiv] markierte Verweise oder neutrale Platzhalter; nenne keine Zahlen als Befunde realer Studien. Weise zu Beginn der Übung einmal darauf hin.“ | – |
| BOT6 Artikelstruktur | C | Schritt 4: „wie ein Abschnitt aus einem echten wissenschaftlichen Paper (z. B. JIBS, mit einem echten Thema)“ | „… echtes Thema ja, aber erfundene, als [fiktiv] markierte Quellen; der Text ist synthetisch und wird als solcher gekennzeichnet.“ Außerdem letzte Zeile der Anweisung löschen („Möchtest du, dass ich diesen Bot jetzt direkt … schreibe?“ – Rest aus der Erstellung) | – |
| BOT7 Limitationen | – | keine Kollision (Szenarien sind erkennbar konstruiert) | optional: „Szenarien sind fiktiv; nenne keine realen Studien.“ | – |
| BOT8 Absatz | A | Schritt 4: „GPT zeigt kompletten Originalabschnitt“ aus Schmeller (2021) | „Zeige den Abschnitt wörtlich aus der hinterlegten Datei mit Seitenangabe.“ | Schmeller (2021) als PDF hinterlegen (prüfen, ob vorhanden) |
| BOT8 Absatz | B | Schritt 3: „Belege dürfen fiktiv sein … Mini-Quellen (erfunden erlaubt)“ | Markierung [fiktiv] wie BOT1 | – |

## Prüfschritt nach der Korrektur

Für BOT1, BOT2 und BOT8 die Übung aus dem Buch selbst durchführen („Prüfen, ob der Bot richtig zitiert“): drei Sätze gegen das PDF abgleichen. Erst danach die Links im Buch als „geprüft“ vermerken.

## Offen

- Für BOT2–BOT7 gibt es noch keine kopierbaren Fassungen. Nach der Korrektur auf `schreibtrainer.qmd` ergänzen.
