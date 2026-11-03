# Branch-Abgleich mit `main` (03.11.2026, 11:45)

Anlass: Zwei Punkte, die die Übersicht vom 02.11. (Stand 14:55) als offen führte, waren schon in `main` (S1 „Höher oder tiefer“, Verbreitungs-Patch Kap. 1). Deshalb wurden alle 45 Remote-Branches gegen `main` (@ `bcca4f9`) geprüft: `git cherry` (inhaltsgleiche Commits) und, wo ein Commit übrig blieb, Stichprobe im Text von `main`.

**Diese Notiz ersetzt für den Branch-Stand die Übersicht vom 02.11.** Bevor eine Sitzung einen Branch „fortsetzt“: `git cherry origin/main origin/<branch>` prüfen.

## Bereits in `main` (live), Branch nur noch Rest

Verbreitungs-Patch Kap. 1 (`f0ad3e0`, `ef1d04d`, inkl. Kap. 5 „als Tutor bzw. Lernpartner“ und Forschungsstand), S1 Höher oder tiefer, S3 Bibliothek, S4 Detektor-Duell, S5 Token-Film, P6 Stützräder, Rollen-Evidenz-Kasten (2.4.4), Frontier-Begriff (`6fca58e`), Fachbegriffe/Akronyme, Kap.-2-Neugliederung, Schlüsselbegriffe Kap. 2–6, Archiv-Integration, Vorwort (Praxisbeispiele, „Wie dieses Buch lehrt“, Kürzung, Lernpfade), Kapitelauftakte, Streich-Test, Prompting-Kürzung, Anhang-B-Prompts u. a.

Löschbar (41 Branches, alle ohne eigenen Inhalt gegenüber `main`): `anhangB-prompts-neu`, `animationen-tempo`, `archiv-integration`, `fachbegriffe-erklaeren`, `fachbegriffe-s6`, `fachbegriffe-s6-teil2`, `frontier-begriff`, `kapitel01-forschungsueberblick`, `kapitel01-verbreitung`, `kapitel02-4d-p4`, `kapitel02-kessler-quelle`, `kapitel02-neugliederung`, `kapitel02-neugliederung-sitzung-b`, `kapitel03-tabelle-kernaussagen`, `kapitel04-aufgabenmodell`, `kapitel04-p5`, `kapitel04-video-aufgabenmodell`, `kapitelauftakt-kap02-03`, `kapitelauftakt-kap04-06`, `mollick-s1-hoeher-tiefer`, `mollick-s1-hoeher-tiefer-rebase`, `mollick-s3-bibliothek`, `mollick-s4-detektor`, `mollick-s5-token-genres`, `mollick-s5-token-genres-b`, `phrasencheck-kap01-03`, `prompting-film-stuetzraeder`, `prompting-film-stuetzraeder-c`, `prompting-kuerzung`, `prompting-rollen-evidenz`, `prompting-streichtest`, `s9-sprachcheck-kap01-02`, `scaling-laws`, `schluesselbegriffe-kap02-06`, `schreibtrainer-gpt-ersatz`, `tabellen-in-kaesten`, `vorwort-kuerzen`, `vorwort-lernpfade`, `vorwort-praxisbeispiele`, `vorwort-wie-dieses-buch-lehrt`, `wiss-schreiben-a-d`. (Die Sitzung darf nicht löschen: Proxy antwortet 403. Roman löscht auf GitHub.)

Nachtrag 12:15: S2-Zeilen nach G2c/G3 aktualisiert.

## Wirklich offen (Inhalt nicht in `main`)

| Branch | Stand | Was fehlt |
|---|---|---|
| `mollick-s2-podcast` | 10 Commits, Sitzung B fertig (`claude/mollick-formate/STATUS-s2-podcast-sitzungB-2026-11-03.md`) | G2c und G3 entschieden (ElevenLabs-Fassung, mergen); **Merge in eigener Sitzung** (Startprompt in der S2-Notiz) |
| `mollick-s2n-notebook` | 3 Commits | **Nicht mergen** (G2c, 03.11.): Notebook nur als Vergleich im Making-of; Branch löschbar |
| `audio-beispiele` | 2 Commits (01.11.) | Hörbeispiele Kap. 2.3.1 (Player, Transkript, Drehbuch); in `main` kein Treffer „Hörbeispiel“ in Kap. 2. Prüfen: noch gewollt? |
| `zitierstil-apa7-de` | 1 Commit (01.11.) | Offizieller APA-7-CSL mit deutscher Lokalisierung, `references.json` bereinigt; `main` hat ein anderes `apa.csl`. Entscheidung offen |

Ablage geprüft: Projekt ✓ / Tresorit ✓ / Repo ✓
