# STATUS P6 „Stützräder“: Prüfung Einbau Szene 9 (03.11.2026)

Anlass: Roman meldet die MP3s in Tresorit `06-Lehrbuch-Publikation-Logos/Audio-P6-Stuetzraeder/`; Frage: schon eingebaut?

## Befund

- **Szene 9 ist eingebaut.** Sitzung C lief am 02.11.2026 abends, ohne Statusnotiz (weder Projekt noch Tresorit noch Repo `notes/`). Branch `prompting-film-stuetzraeder-c`, Commits `0c758a0` (Szene 9 zahlfrei nachvertont, Wortzeiten gemessen, Film 2:38, MP4/VTT/Kapitelmarken/Player-Daten/Druckraster mit QR-Ruhezone 4) und `d2b3b25` (docs/ HTML gerendert). Der Branch ist auf `main` (cffb414 + S4) neu aufgesetzt (`68e3895`).
- `p6-szene09.mp3` im Repo ist bitgleich mit der Tresorit-Datei (SHA-256 `57fa0ea0…423d`, 278 996 Bytes, Tresorit-Zeitstempel 02.11. 20:04). Szenen 1–8: Größen identisch mit Tresorit.
- **Nicht gemergt.** `main` steht auf `f5a694d`. Die Merge-Bedingung aus G3 („erst nach S5 Sitzung B“) ist erfüllt: S5 Sitzung B ist in `main` (`8fd193b`, Film 3:23). Probe-Merge `prompting-film-stuetzraeder-c` → `main` ohne Konflikte (nicht committet).
- Überholte Remote-Branches: `prompting-film-stuetzraeder` (Stand Sitzung B), `mollick-s5-token-genres`, `mollick-s5-token-genres-b` (S5 liegt umgebaut in `main`).
- Kosmetik Tresorit: `p6-szene07..mp3` (doppelter Punkt); im Repo korrekt benannt.

## Plan

1. Merge `prompting-film-stuetzraeder-c` → `main`; danach `quarto render --to html` neu (docs/ beider Seiten zusammengeführt, `search.json` neu erzeugen), Tests `genrefilm`/`streich-test`, `player-pruefen.mjs`.
2. Live-Prüfung GitHub Pages Kap. 2.4 `#vid-stuetzraeder` (1200/390 px): Film lädt, Laufzeit 2:38 in Bildunterschrift, Untertitel Szene 9 „weniger als die Hälfte“, Token-Film S5 weiter intakt.
3. Statusnotiz Sitzung C nachtragen, Übersicht aktualisieren (P6 erledigt).
4. Aufräumen: die drei überholten Branches löschen (nach MC), Tresorit-Datei umbenennen (optional).

## Startauftrag (falls neue Sitzung)

```
Lies claude/prompting-primer/STATUS-p6-pruefung-einbau-2026-11-03.md und führe den Plan aus. Repo th-koln-bartnik/genai4teaching frisch klonen, prompting-film-stuetzraeder-c nach main mergen, quarto render --to html, Tests, player-pruefen.mjs, Live-Prüfung Kap. 2.4, push. Branch-Löschung nur nach MC. Statusnotiz in Projekt, Tresorit und Repo.
```

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo – (keine Repo-Änderung in dieser Prüfung)
