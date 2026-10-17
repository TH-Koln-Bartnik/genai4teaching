# Herkunft des Bundles

`scm-viz.js` und `scm-viz.css` sind der Offline-Build (`npm run build`, esbuild) der Animationsbibliothek
*scm-visuals* („Editorial Process“) von Roman Bartnik, Stand 2026-09-19 (Dashboard-Commit 8e5e0c3).
Quelle auf dem Arbeitsrechner: `0_GenAI/2-Teach/34-Animations-OM-SCM/scm-visuals-current/`.
Das Bundle enthält alle 28 lauffähigen Animationen mit Szenarien und Beschriftungen (de/en/ja); die
Galerie in Kapitel 1 (`../galerie-animationen.html`) ruft daraus zwei auf: `bottleneck-queue` und
`milk-run-emissions`. Keine Laufzeitabhängigkeiten, keine Netzverbindung.

Aktualisieren: im Bibliotheks-Repo `npm run build`, dann die beiden Dateien aus `dist/` hierher kopieren.
