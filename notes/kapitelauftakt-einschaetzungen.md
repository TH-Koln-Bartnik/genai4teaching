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
- Stand 01.11.2026: Kap. 1–3 nach dieser Schablone (je vier Aussagen, IDs `ez-k1-…` bis `ez-k3-…`). Kap. 4–6 nutzen noch `mc-frage` (Multiple Choice); Filter `_filters/mc-frage.lua`, `include/mc-frage.html` und die Einträge in `_quarto.yml` erst nach dem Umbau von Kap. 6 entfernen.

## Begründung (Kurzfassung)
Vorab-Fragen verbessern das Behalten (St. Hilaire, Chan & Ahn, 2024, https://doi.org/10.3758/s13423-023-02353-8), auch verteilt vor einzelnen Textteilen (Kliegl & Bäuml, 2024, https://doi.org/10.1007/s00426-024-02042-8). Für Meinungsaussagen statt Wissensfragen ist der Effekt nicht eigens geprüft; die Aussagen hier haben eine belegte Auflösung und funktionieren damit wie Wissensfragen in Aussageform.
