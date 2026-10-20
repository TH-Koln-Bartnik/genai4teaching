# Schablone: Didaktischer Apparat nach Pearson-Vorbild (Kapitel 1–6)

Stand: 2026-10-19. Ergänzt `schablone-lernziele-kernaussagen.md`. Vorbild: Heizer, Render & Munson, *Operations Management* (Pearson), Kapitel 5 und Supplement 5.

## Entscheidungen Roman, 19.10.2026

1. Praxis-Kästen: international und deutsch bewusst gemischt (1c).
2. Leitfragen stehen zusätzlich zu den Lernzielen (2b).
3. Prompt-Übungen für Lehrende selbst und für den Einsatz mit Studierenden, gekennzeichnet (3c).
4. Jede Prompt-Übung trägt ein 4D-Kürzel (4a).
5. Lösungshinweise zu den Lernfragen stehen im Druck (5a).
6. Glossar mit Herkunftszeile bei lateinischen und griechischen Wurzeln (zunächst 6b, am 19.10. abends geändert).
7. Kapitel 6 bekommt ebenfalls Leitfragen und Lernfragen (7).
8. Leitfragen und Lernfragen werden sofort umgesetzt (8), unabhängig von der Seitenzahl-Antwort von Logos.

## Umgesetzt am 19.10.2026

**Leitfragen** (`callout-note`, Titel „Leitfragen“) direkt nach den Lernzielen, vier bis fünf Fragen, in der Reihenfolge der Kernaussagen. Eine kursive Zeile bittet um eine eigene Antwort vor dem Lesen (Pretesting-Effekt, Richland, Kornell & Kao 2009, doi:10.1037/a0016496). Die Fragen dürfen vor dem Lesen nicht sicher beantwortbar sein; gute Leitfragen treffen eine verbreitete Fehlannahme („Hilft Trinkgeld?“).

**Lernfragen** (`callout-note`, Titel „Lernfragen“) ersetzen „Zum Weiterdenken“. Drei Stufen mit fett gesetzter Zwischenzeile, Nummerierung läuft je Kapitel durch (Pandoc übernimmt Startnummern):

- *Wiederholen*: Antwort steht im Kapitel; Lösungshinweis gibt sie knapp wieder.
- *Anwenden*: Transfer auf die eigene Lehre; Lösungshinweis nennt Merkmale einer guten Antwort.
- *Beurteilen*: Abwägung oder Bewertung eines Vorschlags; Lösungshinweis nennt Kriterien und, wo vorhanden, den Befund.

Die früheren „Zum Weiterdenken“-Fragen sind wortgleich übernommen und einer Stufe zugeordnet. Letzte Zeile im Callout: „Lösungshinweise: @sec-loesungshinweise.“

**Lösungshinweise** im neuen Anhang E (`kapitel10-appendix05-loesungshinweise.qmd`, `#sec-loesungshinweise`), je Kapitel ein unnummerierter Abschnitt. Getrennt vom Kapitel, damit der Abrufversuch vor dem Nachlesen kommt (Dunlosky et al. 2013, doi:10.1177/1529100612453266). In Druck- und Online-Profil nach Anhang D eingetragen; „Online-Material zu Anhang D“ ist unnummeriert, die Buchstaben stimmen also in beiden Fassungen überein.

Offen: Kapitel 6 hat noch keine Kernaussagen; Lern- und Lösungshinweise zu den Fällen 2–4 folgen mit Romans Rohmaterial (TODO-Kommentare gesetzt).

## Noch umzusetzen

**„Anwendungsbeispiel: [Problem]“** (Kasten aus der Lehrpraxis; Name 19.10., Ausrichtung und Titelschema 20.10.2026; halbe Seite, zwei je Kapitel 1–5, Kapitel 4 drei). Der Titel benennt das Lernproblem, nicht das Werkzeug oder die Hochschule, und der Kasten ist problembasiert aufgebaut: erst das Problem ohne KI (die didaktische Ausgangslage), dann das Problem mit KI (die neue Herausforderung), dann der Lösungsansatz oder das Dilemma, zuletzt die Folgerung für wirksames Lernen (Trennung ohne/mit KI: Roman, 20.10.2026). Ein Dilemma stellt zwei berechtigte Ziele gegeneinander und zeigt, wie der Entwurf sie gewichtet, ohne die Spannung aufzulösen; eine Problemlösung zeigt einen Gestaltungszug, der das Problem entschärft. Fokus auf wirksames Lernen und auf die neue Herausforderung, die generative KI schafft. Kein eigener Ethik-Kasten (Entscheidung 20.10.2026).

Evidenzmarke im letzten Feld: *evaluiert* / *Erfahrungsbericht* / *Unterrichtsentwurf* / *Ankündigung*. Fremde Fälle mit Namen von Hochschule und Lehrenden im Text des Kastens, eigene Fälle anonymisiert in Kapitel 6. Mischung international und deutsch. Kandidaten, Originalquellen und Verteilung: `notes/lehrpraxis-kandidaten-2026-10-20.md`. Quarto-Schablone:

```markdown
::: {.callout-note title="Anwendungsbeispiel: <Problem als kurze Aussage>"}
**Problem ohne KI.** Die didaktische Ausgangslage: was das Lernen schon immer erschwert; Hochschule, Fach, Gruppe.

**Problem mit KI.** Die neue Herausforderung, die generative KI schafft oder verschärft.

**Der Lösungsansatz.** Der Gestaltungszug in zwei bis drei Sätzen.
<!-- bei einem Dilemma stattdessen: **Das Dilemma.** Zwei berechtigte Ziele und wie der Entwurf sie gewichtet. -->

**Was das für wirksames Lernen heißt.** *Erfahrungsbericht.* Ein Satz mit dem Befund aus dem Kapitel, der den Ansatz stützt oder in Frage stellt.

Quelle: [@key] (QR-Code im Druck)
:::
```

**„Ausprobiert“** (Drittelseite, zwei bis drei je Kapitel 1–5), Aufbau nach dem Heizer-„Example“ (Problem – Solution – Insight – Learning Exercise – Related Problems):

```markdown
::: {.callout-tip title="Ausprobiert: <Titel> · 4D: Description · für Lehrende"}
**Ziel.** Ein Satz.

**Prompt.** Kurz, in Monospace.

**Worauf achten.** Beobachtbares Verhalten, keine erwartete Ausgabe.

**Variante.** Eine Abwandlung; längere Fassungen online (QR).
:::
```

Kennzeichnung der Zielgruppe: „für Lehrende“ oder „mit Studierenden“. 4D-Kürzel: Delegation, Description, Discernment, Diligence.

**Glossar** (`glossar.qmd`, `#sec-glossar`, unnummeriert nach Anhang E): 40 Einträge aus `notes/glossar-stub.md`, 30 davon mit Herkunftszeile `*Herkunft:* …` als zweitem Absatz der Definition, nur bei lateinischen oder griechischen Wurzeln und nur wo sie den Begriff erhellt. Offen: Ausbau auf 60–80 Begriffe (4D, Lernmodus, Pretesting nach Kapitel 2.6), Erstnennung im Text fett, zweispaltiger Satz in 9 pt für den Druck, Fundstellen (Kap. x.y) nach der Umnummerierung prüfen.

## Weitere Heizer-Elemente zur Entscheidung

- *Ethical Dilemma*: zurückgestellt (Roman, 20.10.2026). Das Dilemma-Format geht stattdessen in die „Beispiele aus der Lehrpraxis“ ein, mit Fokus auf Lernwirkung statt Ethik.
- *Key Terms mit Seitenzahl* am Kapitelende → Zeile „Kernbegriffe“ mit Verweis ins Glossar; kostet zwei bis drei Zeilen je Kapitel.
- *Global Company Profile* (Eröffnungsfall) → erster Praxis-Kasten eines Kapitels wandert an den Kapitelanfang.
- Nicht übernommen: Randspalten-Definitionen und Student Tips (kein Randsatz im 17 × 24-Format), *Rapid Review* (leisten die Kernaussagen), *Problems* und *Using Software* (passen nicht zum Fach).
