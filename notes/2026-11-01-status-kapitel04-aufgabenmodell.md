# Status Kap. 4.1.1 „Was sind unsere Aufgaben?“ – Aufgabenmodell (01.11.2026, ca. 09:30)

## Auftrag (Roman)
Originalbegriffe immer in Klammern; Einführung der drei Begriffe auf eine zentrale Quelle stützen (Acemoglu et al., Tasks at Work) statt Sammelbeleg am Absatzende; Umbenennung aus Sicht der Lehrenden: Automation / Augmentation / Neue Aufgaben statt Verdrängung / Produktivität / Wiedereinsetzung.

## Umgesetzt, gemergt: `main` = `c5b72ca` (Branches `kapitel04-aufgabenmodell` `f756f5f`, `kapitel04-video-aufgabenmodell` `c5b72ca`, beide in main, löschbar)
- `kapitel04.qmd`: neuer Einführungsabsatz mit @acemoglu2025tasks; **Automatisierung** (automation), **Augmentierung** (labor-augmenting technology), **neue Aufgaben** (new tasks); vierte Form (capital-augmenting technology) ausdrücklich ausgeklammert; ein Satz zur Arbeitsmarkt-Sicht (displacement effect, reinstatement). `@acemoglu2019; @autor2015` an dieser Stelle entfernt (im Buch sonst nicht mehr zitiert).
- Tabelle 4.1: Spalte „Form“, Zeilen mit Originalbegriff in Klammern, Legende neu, Quelle = Aufgabenmodell nach @acemoglu2025tasks.
- Folgeabsätze, Kernaussage oben, Zusammenfassung Nr. 2, Lernfragen 2 und 5, Video-title und Bildunterschriften angepasst.
- `kapitel10-appendix05-loesungshinweise.qmd`: Lösungen 2, 5, 8 angepasst.
- `references.json`: `acemoglu2025tasks` (Handbook of Labor Economics, Bd. 6, S. 1–114, Elsevier, DOI 10.1016/bs.heslab.2025.08.003; Arbeitspapier NBER WP 32872, DOI 10.3386/w32872).
- **Video neu gerendert** (HyperFrames 0.8.216, 38 s, 1920×1080): Kacheln/Legende „Automatisierung – Aufgabe wandert zur KI“, „Augmentierung – KI unterstützt, Aufgabe geht schneller“, „Neue Aufgaben – entstehen durch KI“; Fußzeile „Schema nach Acemoglu, Kong & Restrepo (2025)“. `hyperframes check` bestanden (nur Altwarnungen zu Pausen und Schriftgröße der Kachel-Etiketten). Vorschaubild = Schlussbild; Druckbild mit QR-Code neu, QR farbig und grau dekodiert.
- Video-Quellen jetzt im Repo: `_src/videos/acemoglu/` (build.mjs, data/tab-4-1.json, README mit Render-Befehlen).
- `docs/` mit Quarto 1.8.25 neu gerendert (HTML); 0 Warnungen außer 36 × „OJS block count mismatch“ (Altbestand Kap. 4). Download-PDF/EPUB zurückgelegt (Stand unverändert). Sichtprüfung 1280 px: Absatz und Tabelle korrekt.

## Begriffe im Original (geprüft am MIT-PDF des Kapitels)
automate work / automation (§3.2); labor-augmenting technology (§5.5); new tasks (§5.4); displacement effect (S. 20); task reinstatement (§3.3).

## Offen
0. **Website noch nicht aktualisiert (Stand 09:45):** Pages-Deployment für `d933cd7` scheitert, weil das Deployment von `f756f5f` bei GitHub als „in progress“ hängt. Roman: GitHub → Actions → „pages build and deployment“ (`d933cd7`) → „Re-run all jobs“; alternativ veröffentlicht der nächste Push den Stand. Danach prüfen: `kapitel04.html` enthält „Augmentierung“, mp4 hat 2 876 214 Byte.
1. Making-of-Video (59 s) zeigt historisch die alte Fassung (Protokoll vom 29.10.); bewusst unverändert.
2. Zitierstil: Buchkapitel erscheinen als „Titel: (vol. 6, 1–114)“ mit „eds.“ – betrifft alle Kapitel-Einträge (bjork1994, sweller2011 …), Ursache apa.csl/Locale; vor Logos-Abgabe prüfen.
3. Druck-PDF weiterhin nicht gerendert (TeX fehlt in Cloud).
4. Tabelle 4.1 bei 390 px weiterhin zu breit (bekannter Punkt); neue Spalte 1 ist etwas länger.

## Startauftrag nächste Sitzung
Zuerst Punkt 0 prüfen (Website live?). Dann nächster Punkt aus `claude/status-branches-2026-11-01.md` → Offene Punkte, oder Zitierstil Buchkapitel (Punkt 2).

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓ (gepusht, gemergt: ja, `main` = `d933cd7`)
