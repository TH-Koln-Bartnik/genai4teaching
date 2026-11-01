# S5 Audio-Beispiele Kap. 2.3.1: Status (01.11.2026, ca. 21:45)

## Entscheidungen Roman (MC, 01.11.)
- Sätze für Hörbeispiel 1 aus dem Vokabeltrainer „Words are magic“, englische Fassung (Access 1, Klasse 5): <https://lively-platypus-49f741.netlify.app/?lang=en>. Verwendet werden drei **eigene Beispielsätze der App** zu Unit 2 (AC1-U2-010, -003, -009), keine Lehrbuchsätze. Die App ist **kein Studierendenprojekt**; im Buch heißt sie neutral „ein Vokabeltrainer für Englisch in Klasse 5“, mit Link, ohne Urheber.
- Interview auf **Deutsch**, Bezug nur allgemein auf @sec-fall-job-buddy (kein Teamname).
- **Drehbuch freigegeben** (3 Sätze: Lernmodus / begeistert / geflüstert; Interview 7 Wortwechsel = 14 Zeilen, KI tritt am Ende aus der Rolle und gibt Rückmeldung).
- Player jetzt mit Platzhalter-Ton gebaut; Einbau nach Eingang der mp3.

## Erledigt (Branch `audio-beispiele`, `be9ad69`, nicht gemergt; `kapitel02.qmd` unverändert)
- `interactions/audio-beispiele-kap02.html`: je Hörbeispiel Player links (Abspielen, Positionsregler, Tempo 0,75×/1×, Kennzeichnung „Stimme(n) KI-erzeugt (ElevenLabs v3)“), Transkript rechts; der gesprochene Satz wird in der Akzentfarbe hervorgehoben, Klick auf einen Satz springt dorthin, die Liste scrollt nur in sich (vorige Zeile bleibt sichtbar). Unter 480 px untereinander. Meldet seine Höhe per `rahmen-hoehe` wie `agenten-engpass.html`. Geprüft mit Playwright: 599 px → 845 px Höhe, 358 px → 1.267 px, Hervorhebung korrekt, keine JS-Fehler.
- `_src/audio/kap02-s5/manifest.json`: einzige Quelle für Eingabetext (ElevenLabs), Transkript und Pausen je Zeile.
- `scripts/audio-s5-zusammenfuegen.py`: schneidet Stille ab, gleicht Lautheit an (−18 LUFS), setzt Pausen, fügt je Hörbeispiel eine mp3 zusammen (`interactions/media/kap02-audio-vokabeln.mp3`, `…-interview.mp3`) und schreibt die Zeitmarken in den Player. Prüft vorher, dass Transkript und Eingabetext wortgleich sind. `--platzhalter` erzeugt Testton (Interview dann 2:12 min). Platzhalter-mp3 sind **nicht** committet.
- Drehbuch: Projekt `claude/audio-beispiele-s5/DREHBUCH-audio-beispiele-kap02-2026-11-01.md`, Tresorit `Projektnotizen-Claude/audio-beispiele-s5/`, Repo `notes/audio-beispiele-s5/`.
- Einbau-Entwurf: `notes/audio-beispiele-s5/einbau-kapitel02-entwurf.md` (Text mit Art. 50 KI-VO, iframe mit Höhenmeldung, Druck-Kasten mit Transkript-Auszug und QR, Querverweis in 2.6 Diligence).

## Befunde aus der Recherche
- ElevenLabs v3: Tonfall über Tags in eckigen Klammern; SSML-Pausen (`<break>`) gehen in v3 nicht, Pausen über Auslassungspunkte, Gedankenstriche, `[pause]`. Kostenloser Tarif ohne kommerzielle Lizenz; für das Verlagsbuch einen bezahlten Tarif nutzen (Starter genügt, Audio bleibt nach Kündigung nutzbar).
- Art. 50 KI-VO gilt seit 2. August 2026: Abs. 2 maschinenlesbare Markierung (Pflicht des Anbieters), Abs. 4 Offenlegung von Deepfakes (Definition Art. 3 Nr. 60: echte Personen, Orte, Ereignisse, täuschend echt). Übergangsfrist Abs. 2 bis 2. Dezember 2026 für Altsysteme laut Sekundärquellen in Art. 111 Abs. 4 (eingefügt durch VO (EU) 2026/1744) – **am EUR-Lex-Text noch nicht geprüft** (Abruf in dieser Sitzung nicht freigegeben).

## Offen
1. **Roman:** 17 mp3 nach Drehbuch erzeugen (ElevenLabs, bezahlter Tarif, Modell v3) und in Tresorit `06-Lehrbuch-Publikation-Logos/Audio-S5/` legen (Ordner angelegt, leer).
2. Danach: Dateien nach `_src/audio/kap02-s5/roh/` kopieren, Skript ohne `--platzhalter`, anhören (Stichprobe Zeitmarken), Einbau nach Entwurf, QR-Code erzeugen, Art. 111 Abs. 4 in EUR-Lex prüfen, Render `--to html` (Download-PDF/EPUB sichern), Playwright 1200/390 px, LaTeX-Testrender für den Kasten, Diff per MC, Merge.
3. Konflikt vermeiden: S9 (Sprachcheck Kap. 2) läuft parallel an `kapitel02.qmd`; Einbau erst danach oder an anderen Zeilen.
4. Feedback-Plan korrigieren: S5 nennt die App „Studierendenprojekt“ – überholt.

## Startauftrag nächste Sitzung (wenn die mp3 in Tresorit liegen)
„Lies `claude/audio-beispiele-s5/STATUS-audio-beispiele-s5-2026-11-01.md` und baue die Hörbeispiele ein: mp3 aus Tresorit `06-Lehrbuch-Publikation-Logos/Audio-S5/` nach `_src/audio/kap02-s5/roh/` auf Branch `audio-beispiele`, `scripts/audio-s5-zusammenfuegen.py`, Einbau nach `notes/audio-beispiele-s5/einbau-kapitel02-entwurf.md`, Prüfung und Merge per MC.“

Ablage: Projekt `claude/audio-beispiele-s5/` · Tresorit `Projektnotizen-Claude/audio-beispiele-s5/` · Repo `notes/audio-beispiele-s5/`
