# Status: Lernziele gekürzt, Einstiegsfragen als Multiple Choice (31.10.2026, ca. 14:30)

Auftrag Roman (31.10.): Lernziele wirken abschreckend → 3–4 Hauptpunkte je Kapitel. Start-Fragen nicht als Block, sondern als interaktive MC-Fragen, problembezogen formuliert (Problem nennen, für das das Kapitel Lösungsansätze bietet).

## Umgesetzt (Branch `einstiegsfragen-mc`, Commit `9c546de`, gepusht, nicht in `main`)

- **Lernziele** Kapitel 1–6: 1: 5→3, 2: 7→4, 3: 6→4, 4: 6→4, 5: 6→4, 6: 4→3. Energieverbrauch (Exkurs 2.6) steht nicht mehr in den Lernzielen von Kapitel 2, bleibt aber Einstiegsfrage 5.
- **Kasten „Leitfragen“ → „Einstiegsfragen“** (`callout-note .mc-block`): je Frage ein Problem aus dem Lehralltag, drei Optionen, eine richtig (`[…]{.richtig}`), Auflösung im Div `.mc-rueckmeldung` mit Abschnittsverweis. Zahl und Reihenfolge wie die alten Leitfragen (4/5/4/5/4/4), damit die Kernaussagen weiter „in derselben Reihenfolge“ passen. Position der richtigen Antwort gemischt (a 6×, b 11×, c 9×).
- **Online** (`include/mc-frage.html`, per `include-after-body`): eine Frage nach der anderen, Punkte + „Frage x von n“, Zurück/Weiter; nach der ersten Wahl gesperrt, richtige Option grün ✓, falsche rot ✗, Auflösung erscheint („Richtig geraten.“ / „Nicht ganz – das überrascht viele.“). Tastatur und Screenreader: Buttons, `aria-live`. Ohne JavaScript bleibt die Liste lesbar.
- **Druck/EPUB** (`_filters/mc-frage.lua`, behandelt Quartos `Callout`-Knoten): Fragen nummeriert 1., 2., …, Optionen a) b) c), Markierung und Auflösung entfallen (Abruf vor Nachlesen; Auflösung über die Kernaussagen).
- Kapitel 5: neue IDs `sec-durchspielen`, `sec-einfuehrung-studierende`, `sec-dokumentation`.

## Geprüft
- Volles HTML-Rendering (Quarto 1.8.25): nur die 36 bekannten OJS-Warnungen; alle Verweise in den Auflösungen aufgelöst; Download-PDF/EPUB unverändert wiederhergestellt.
- Playwright: 26 Fragen in 6 Kapiteln, je genau eine richtige Option, je Kasten eine Frage sichtbar, keine JS-Fehler; Klickpfad falsch/richtig per Screenshot geprüft.
- Druckpfad per Markdown- und EPUB-Testrender eines Kastens geprüft; PDF nicht gerendert (kein TeX im Container).

## Offen
1. Roman: Wortlaut der 26 Fragen und der Lernziele freigeben; dann Merge `einstiegsfragen-mc` → `main`.
2. Druck-PDF rendern und Umbruch der Kästen prüfen (TeX nötig).
3. `notes/schablone-leitfragen-lernfragen.md` beschreibt noch „Leitfragen“; bei Freigabe auf „Einstiegsfragen (MC)“ anpassen.
