# Video „Aufgabenmodell“ zu Tabelle 4.1 (kap04-acemoglu-restrepo.mp4)

Quelle der Szene: `data/tab-4-1.json` (Aufgaben und Begriffe aus Tabelle 4.1) → `build.mjs` erzeugt `index.html` → HyperFrames rendert den Film.

```
npm install hyperframes@0.8.216 gsap@3
mkdir -p assets && cp node_modules/gsap/dist/gsap.min.js assets/
node build.mjs && npx hyperframes check && npx hyperframes render -o kap04-acemoglu-restrepo.mp4
```

Vorschaubild = Schlussbild (t = 59,5 s); Druckbild mit QR-Code: `scripts/qr-kapitel04-videos.py`.
Stand 01.11.2026: Begriffe nach Acemoglu, Kong & Restrepo (2025) – Automatisierung, Augmentierung, neue Aufgaben (vorher Verdrängung, Produktivität, Wiedereinsetzung nach Acemoglu & Restrepo, 2019).
Stand 01.11.2026 (Feedback „zu schnell“): Zeitplan gedehnt auf 60 s. Bewegungen langsamer (Kachelwanderung 1,6 s statt 1,0 s, Abstand 1,2 s), nach jeder der drei Formen 5–7 s Standbild, Schlussbild gut 10 s. Abfolge, Layout und Schlussbild unverändert.
