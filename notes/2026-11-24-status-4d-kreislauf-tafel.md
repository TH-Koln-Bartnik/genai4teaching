# Status: 4D-Kreislauf, Detailtafel sichtbar (24.11.2026)

Anlass: Workshop „Rollenspiele und Simulationen mit KI in der Lehre“ (25.11.) verlinkt `interactions/4d-kreislauf.html?rolle=simulator`. Der Klick auf eine Stufe änderte nur die Tafel unter dem Diagramm, die im iframe (760 px) und auf Laptops außerhalb des Bildes lag.

Änderung in `interactions/4d-kreislauf.html` (Kopie in `docs/interactions/`):
- Ab 700 px Breite stehen Diagramm und Tafel nebeneinander (Raster, Tafel `sticky`); `main` 980 px statt 760 px.
- Darunter bleibt die Tafel unter dem Diagramm (Diagramm höchstens 440 px breit); ein Klick rollt sie ins Bild (`scrollIntoView`, `block:'nearest'`, ohne Animation bei `prefers-reduced-motion`).
- Die gewählte Stufe ist invertiert (dunkle Fläche, helle Schrift); der Engpass behält den Akzentrand.
- Einleitungssatz nennt, was die Tafel zeigt. Texte der Tafel unverändert.

Geprüft mit Playwright (Datei lokal, `?rolle=simulator`, Klick auf Diligence) bei 1200, 780 und 390 px: Tafel vollständig im Bild, kein Querscrollen, keine JS-Fehler. Nicht geprüft: Einbettung im Kapitel 5 nach dem Pages-Bau, dunkles Farbschema.

Offen (Angebot, nicht beauftragt): mehr Text je Stufe für die Rolle Simulator.
