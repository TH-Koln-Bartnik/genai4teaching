# STATUS P6 „Stützräder“: gemergt und live (03.11.2026)

Vorgeschichte: `STATUS-p6-pruefung-einbau-2026-11-03.md`. Sitzung C (02.11.2026 abends, ohne eigene Statusnotiz) hatte Szene 9 bereits eingebaut; diese Sitzung hat geprüft, gemergt und live kontrolliert. **P6 ist abgeschlossen.**

## Entscheidungen Roman (MC, 03.11.2026)

1. In dieser Sitzung mergen.
2. Überholte Branches löschen (`prompting-film-stuetzraeder`, `prompting-film-stuetzraeder-c`, `mollick-s5-token-genres`, `mollick-s5-token-genres-b`).

## Ergebnis

- Merge `prompting-film-stuetzraeder-c` → `main` ohne Konflikte, Merge-Commit `e5ef5c8`, gepusht. Bedingung aus G3 erfüllt: S5 Sitzung B war schon in `main` (`8fd193b`).
- Take Szene 9 im Repo bitgleich mit Tresorit `Audio-P6-Stuetzraeder/p6-szene09.mp3` (SHA-256 `57fa0ea0…423d`).
- `quarto render --to html` (Quarto 1.8.25): keine Warnungen, `docs/` unverändert gegenüber dem Merge-Stand (PDF/EPUB unverändert, nach dem Render zurückgeholt).
- Tests `genrefilm` + `streich-test`: 18/18. `player-pruefen.mjs`: P6 42/42, S5 36/36 (1200/390 px).
- Film 158,5 s = 2:38; Bildunterschrift „gut zweieinhalb Minuten“ passt. Untertitel Szene 9 „… auf weniger als die Hälfte.“
- Live (GitHub Pages, Kap. 2.4 `#vid-stuetzraeder`, 1200/390 px): beide Genrefilm-Player eingebettet (P6, S5), MP4 lädt (5 672 637 Bytes, 158,53 s), keine Konsolenfehler.

## Offen

- **Branch-Löschung gescheitert:** Der Git-Proxy der Sitzung lehnt `git push --delete` mit HTTP 403 ab. Die vier Branches bitte selbst auf GitHub löschen (Repo → Branches → Papierkorb-Symbol) oder in einer Sitzung mit Löschrecht.
- Kosmetik Tresorit: `Audio-P6-Stuetzraeder/p6-szene07..mp3` (doppelter Punkt) umbenennen; das Repo ist korrekt benannt.
- Diese Notiz konnte nicht in Tresorit abgelegt werden (Verbindung zum Rechner während der Sitzung abgebrochen); Projekt und Repo haben sie.

Ablage geprüft: Projekt ✓ / Tresorit ✗ (Rechner nicht verbunden) / Repo ✓
