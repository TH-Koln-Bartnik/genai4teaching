# Kapitelauftakt: Szene, Einschätzungen, Auflösung im Text (Probe Kap. 1, 01.11.2026)

Entscheidung Roman (01.11.2026): Variante „Hybrid“ nach Lehrbuchvorbildern Daft (Organization Theory and Design) und Pinto (Project Management); Frageformat Einschätzung statt Multiple Choice; zuerst Kapitel 1 als Probe.

## Reihenfolge am Kapitelanfang
1. `# Titel`
2. `::: kapitel-gliederung` / `:::` – im Druck automatisch „In diesem Kapitel“ mit den Abschnitten (Ebene 2); online entfällt sie (Seitenleiste).
3. Einstiegsszene, 80–120 Wörter: benannte Person, konkretes Dilemma, eine Komplikation; deckt die Themen der Einschätzungen ab. Darunter kursiv die Herkunft (z. B. „aus Workshops zusammengesetzt“).
4. `{{< pagebreak >}}` – im Druck beginnt hier Seite 2.
5. Kasten `{.callout-note .ez-block title="Bevor Sie weiterlesen: Wie sehen Sie das?"}` mit 3–4 `::: {.einschaetzung #ez-kN-i}`: Aussage als Absatz, darunter `[Auflösung in @sec-…]{.ez-verweis}`. Richtige Antworten mischen (nicht alle „nein“).
6. Kasten `{.callout-note .lernziele title="Lernziele: Nach diesem Kapitel können Sie …"}`, nummeriert 1–3/4, mit Hinweis, dass die Kernaussagen danach geordnet sind.

## Im Text
An der Stelle, die die Aussage beantwortet, direkt nach dem Absatz:

    ::: {.callout-tip .ez-pruefen title="Ihre Einschätzung prüfen"}
    *„Aussage wörtlich“* []{.ez-ihre data-ez="ez-kN-i"}

    **Auflösung: ja / eher ja / eher nicht / nein.** Zwei, drei Sätze Begründung.
    :::

## Kapitelende
Kernaussagen gruppiert: `**Zu Lernziel 1: Stichwort**`, darunter die Aussagen (fortlaufend nummeriert).

## Technik
- `_filters/einschaetzung.lua`: Druck/EPUB nummerieren die Aussagen, setzen die Skala „stimme zu 1 – 2 – 3 – 4 – 5 stimme nicht zu“ zum Ankreuzen, Verweis in Klammern; `.ez-ihre` entfällt; füllt `kapitel-gliederung`.
- `include/einschaetzung.html` (online): Skala mit fünf Knöpfen, Wahl im Browser gespeichert (`localStorage`, Schlüssel `genai4teaching:ez:<id>`), danach „Gespeichert. Auflösung in …“ mit Sprung direkt zum Prüfkasten; dort „Ihre Einschätzung vorab: …“. Keine Sofort-Auflösung (Aufmerksamkeitsfenster bleibt bis zur Textstelle offen).
- Stand 02.11.2026: Kap. 1–6 nach dieser Schablone (je vier Aussagen, IDs `ez-k1-…` bis `ez-k6-…`; Kap. 6 = `kapitel06-fallbeispiele.qmd`). Die Multiple-Choice-Technik (`_filters/mc-frage.lua`, `include/mc-frage.html`, Einträge in `_quarto.yml`) ist entfernt.
- Szenen-Personen (alle erfunden, als Komposit gekennzeichnet): Kap. 1 Albers (Technische Mechanik), Kap. 2 Kessler (Statistik, Psychologie), Kap. 3 Brandt (Kostenrechnung), Kap. 4 Hoffmeister (Produktionslogistik, Maschinenbau), Kap. 5 Sauer (Studiendekan, Marketing), Kap. 6 Arnold (neu berufen, Wirtschaftsingenieurwesen; Module und Projekte aus der eigenen Lehre). Neue Szenen nehmen andere Fächer und Rollen.

- Kap. 2 seit der Neugliederung nach dem 4D-Modell (S1b, 01.11.2026): Reihenfolge im Kopf folgt der Lesereihenfolge `ez-k2-3` (2.3.1 Fähigkeiten), `ez-k2-1` (2.3.2 Setup), `ez-k2-4` (2.4.5 Prompt-Mythen), `ez-k2-2` (2.5 Discernment). Die IDs bleiben, damit gespeicherte Antworten erhalten bleiben; die Druck-Nummerierung folgt der Position im Kasten.

## Begründung (Kurzfassung)
Vorab-Fragen verbessern das Behalten (St. Hilaire, Chan & Ahn, 2024, https://doi.org/10.3758/s13423-023-02353-8), auch verteilt vor einzelnen Textteilen (Kliegl & Bäuml, 2024, https://doi.org/10.1007/s00426-024-02042-8). Für Meinungsaussagen statt Wissensfragen ist der Effekt nicht eigens geprüft; die Aussagen hier haben eine belegte Auflösung und funktionieren damit wie Wissensfragen in Aussageform.

- Nachtrag 13.11.2026 (neue Gliederung): Kap. 3 `kapitel03-automation.qmd` hat jetzt den Auftakt nach Schablone, Szene Prof. Dr. Malte Petersen (Operations Management, Wirtschaftsinformatik; acht Agenten). IDs `ez-k3b-1` bis `ez-k3b-3` und `ez-k4-1` (aus `kapitel06-rollen.qmd` verschoben, weil die Auflösung in Kap. 3 steht). `kapitel06-rollen.qmd` hat seither drei Aussagen; Szene (Hoffmeister) und Lernziel 1 ohne Übungsblätter und Aufgabenmodell.
