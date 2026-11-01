# S5 Audio-Beispiele Kap. 2.3.1: Drehbuch zur Freigabe (Stand 01.11.2026, ca. 21:20)

Einbaustelle: `kapitel02.qmd`, Ende 2.3.1, direkt nach dem Absatz „Zum Standardumfang der großen Chat-Interfaces gehören inzwischen vier **Funktionsklassen** …“ (Z. 339 auf `main` @ `e628fe9`). Zwei Hörbeispiele zeigen die Funktionsklasse **Audio-Modelle mit steuerbarem Tonfall**: Beispiel 1 zeigt dieselbe Stimme in drei Tonfällen, Beispiel 2 eine Rollenspiel-Simulation mit hörbarer Unsicherheit.

Arbeitsteilung (Entscheidung Roman 01.11.): Claude schreibt das Drehbuch; Roman erzeugt je Zeile eine mp3-Datei mit ElevenLabs und lädt sie in den Tresorit-Ordner; Claude fügt die Teile zusammen, setzt die Pausen, misst die Zeitmarken und baut Player mit Transkript.

## Grundsatz: eine Datei je Zeile

Jede Zeile des Drehbuchs wird eine eigene Datei. Beim Zusammenfügen kennt das Skript dann jede Satzgrenze auf die Millisekunde, und die Hervorhebung im Transkript springt exakt mit. Ein Dialog aus einem Guss (ElevenLabs „Text to Dialogue“) klänge etwas flüssiger, aber die Satzgrenzen müssten nachträglich per Spracherkennung geschätzt werden. Die Pausen **zwischen** den Zeilen setzt Claude beim Zusammenfügen (Spalte „Pause davor“); die Pausen **innerhalb** einer Zeile erzeugt das Modell aus Auslassungspunkten und Tags.

---

## Hörbeispiel 1: Drei englische Sätze, eine Stimme, drei Tonfälle

**Herkunft der Sätze.** Vokabeltrainer „Words are magic“, englische Fassung (Access 1, Klasse 5), <https://lively-platypus-49f741.netlify.app/?lang=en>. Die Sätze sind eigene Beispielsätze der App zu Unit 2 (Feld `example_en` in `en/vocab.json`, Einträge AC1-U2-010, -003, -009), keine Sätze aus dem Cornelsen-Lehrwerk. Die App kann Wörter bereits mit der Sprachausgabe des Browsers vorlesen (`speech: true`); das Hörbeispiel zeigt, was ein Audio-Modell darüber hinaus kann: den Tonfall steuern.

**Stimme (für alle drei Sätze dieselbe).** Weiblich, Mitte 30 bis Mitte 40, britisches Englisch (das Lehrwerk spielt in Brighton), warm und klar, Lehrerin oder Sprecherin von Lernmaterial. In der ElevenLabs-Stimmenbibliothek (*Voice Library*) filtern: Sprache English, Akzent British, Geschlecht female, Alter middle aged, Einsatz „educational“ oder „narration“. Dieselbe Stimme für alle drei Dateien, damit nur der Tonfall wechselt.

| Datei | Satz (deutsch in der App) | Tonfall | Regie | Eingabetext für ElevenLabs |
|---|---|---|---|---|
| `kap02-audio-vokabeln-1.mp3` | What's your favourite subject? (Was ist dein Lieblingsfach?) | Lernmodus: langsam, deutlich, freundlich | Tempo deutlich unter normal; jedes Wort vollständig, „favourite“ dreisilbig; kurze Pause (ca. 0,3 s) nach „What's“; Frageintonation am Ende steigend | `[slowly] [warmly] What's... your favourite subject?` |
| `kap02-audio-vokabeln-2.mp3` | I'm happy because it's Friday. (Ich bin froh, weil es Freitag ist.) | begeistert | Tempo normal bis leicht schnell; Betonung auf „happy“ und „Friday“; hörbares Lächeln; am Ende ein kurzes Lachen erlaubt | `[excited] I'm HAPPY because it's Friday! [laughs]` |
| `kap02-audio-vokabeln-3.mp3` | Can you bring your guitar? (Kannst du deine Gitarre mitbringen?) | verschwörerisch geflüstert (Überraschung wird geplant) | Flüstern, nah am Mikrofon; Tempo normal; kurze Pause (ca. 0,5 s) vor „guitar“ | `[whispers] Can you bring... your guitar?` |

Pause zwischen den Sätzen im zusammengefügten Hörbeispiel: je 1,2 s; Claude setzt vor jeden Satz zusätzlich die deutsche Bedeutung nur im Transkript, nicht im Ton.

---

## Hörbeispiel 2: Simulation eines Vorstellungsgesprächs (fiktiv, deutsch)

**Rahmen.** Ein KI-Interviewtrainer wie in @sec-fall-job-buddy übernimmt die Rolle einer Personalerin. Lea, Studentin im dritten Semester Wirtschaftsingenieurwesen, übt ein Gespräch für eine Werkstudentenstelle im Einkauf eines Automobilzulieferers. Die KI stellt sich zu Beginn als KI vor (Transparenz nach Art. 50 Abs. 1 KI-VO) und tritt am Ende aus der Rolle, um Rückmeldung zu geben. Personen und Gespräch sind erfunden.

**Stimmen.**
- **KI-Interviewerin:** weiblich, 40 bis 50, tiefere Stimmlage, ruhig, gleichmäßiges Tempo, freundlich-sachlich; nie hektisch, nie ironisch. Bibliotheksfilter: German, female, middle aged, „conversational“ oder „professional“.
- **Lea:** weiblich, um 20, natürlich, hellere Stimmlage als die Interviewerin, nicht kindlich, leicht nervös. Bibliotheksfilter: German, female, young, „conversational“.
- Beide Stimmen müssen sich im Klang klar unterscheiden, damit Hörende ohne Transkript folgen können.

**Allgemeine Regie für Lea.** Füllwörter („äh“, „ähm“, „also“) und Abbrüche stehen im Text, das Modell soll sie sprechen, nicht glätten. Auslassungspunkte bedeuten Zögern von etwa 0,5–1 s; `[pause]` etwa 1–1,5 s. Satzabbrüche mit „—“ abrupt, ohne Absenken der Stimme. Umgangssprachliche Verkürzungen („studier“, „hab“, „find“) bleiben so stehen.

**Allgemeine Regie für die KI.** Ganze Sätze, keine Füllwörter, kurze Pause nach jedem Satz. Nachfragen ohne Wertung im Tonfall; ruhig auch dort, wo Lea stockt.

| Nr. | Datei | Sprecherin | Pause davor | Regie | Eingabetext für ElevenLabs |
|---|---|---|---|---|---|
| 01 | `kap02-audio-interview-01-ki.mp3` | KI | 0 s | freundlich, einladend, normales Tempo | `[calm] [friendly] Guten Tag. Ich bin eine KI und übernehme heute die Rolle der Personalerin. Sie bewerben sich als Werkstudentin im Einkauf. Erzählen Sie mir zuerst etwas über sich.` |
| 02 | `kap02-audio-interview-01-lea.mp3` | Lea | 0,8 s | nervös, schneller Start, dann stockend; „dritten“ nach kurzem Suchen | `[nervous] Äh, ja, also... ich bin Lea, ich studier Wirtschaftsingenieurwesen in Gummersbach, im... äh, im dritten Semester. Und, ähm, ich hab mich beworben, weil... also, weil mich Einkauf interessiert.` |
| 03 | `kap02-audio-interview-02-ki.mp3` | KI | 0,7 s | ruhig, interessiert, keine Ungeduld | `[calm] Was genau interessiert Sie am Einkauf?` |
| 04 | `kap02-audio-interview-02-lea.mp3` | Lea | 1,2 s | suchend; bricht den ersten Satz ab; „Glaub ich“ leise, unsicher | `[hesitant] Also... ähm... dass man, äh, mit vielen verschiedenen — Also, man verhandelt ja mit Lieferanten, und... das find ich spannend. [quietly] Glaub ich.` |
| 05 | `kap02-audio-interview-03-ki.mp3` | KI | 0,8 s | ruhig, freundlich nachhakend; leichte Betonung auf „verhandelt“ | `[calm] Sie sagen „glaube ich“. Haben Sie schon einmal etwas verhandelt, im Studium oder privat?` |
| 06 | `kap02-audio-interview-03-lea.mp3` | Lea | 1,0 s | lange Denkpause, dann Selbstkorrektur („nee, warte“), danach flüssiger und sicherer | `[thinking] Ähm... [pause] also, bei meinem Nebenjob im Getränkemarkt, da hab ich — nee, warte. Also, da hab ich mal mit dem Lieferanten telefoniert, weil die Lieferung zu spät war, und, äh... wir haben dann ausgemacht, dass er am Samstag noch mal kommt.` |
| 07 | `kap02-audio-interview-04-ki.mp3` | KI | 0,7 s | anerkennend, ruhig; Betonung auf „konkret“ | `[warmly] Das ist ein gutes Beispiel. Was haben Sie in dem Telefonat konkret gesagt?` |
| 08 | `kap02-audio-interview-04-lea.mp3` | Lea | 0,9 s | etwas sicherer, aber Satzende verläuft im Nichts | `Also, ich hab gesagt, dass, ähm, dass wir am Wochenende sonst kein Wasser mehr haben, und... dass das für uns, also für den Markt, echt teuer wird. Und dann hat er... [trailing off] ja.` |
| 09 | `kap02-audio-interview-05-ki.mp3` | KI | 0,7 s | ruhig, fasst zusammen, dann Frage | `[calm] Sie haben also mit den Folgen für Ihren Markt argumentiert. Wie ist das Gespräch ausgegangen?` |
| 10 | `kap02-audio-interview-05-lea.mp3` | Lea | 0,8 s | kurz, leicht stolz; „zufrieden“ mit kleinem Lächeln | `Ähm, er kam am Samstag um acht. Und, äh... der Chef war, also, [slightly proud] zufrieden.` |
| 11 | `kap02-audio-interview-06-ki.mp3` | KI | 0,8 s | ruhig, Abschluss ankündigend | `[calm] Gut. Eine letzte Frage: Wo sehen Sie bei sich noch Lernbedarf?` |
| 12 | `kap02-audio-interview-06-lea.mp3` | Lea | 1,2 s | Seufzer, dann vorsichtig; Satz bricht ab | `[sighs] Hm... also, Excel vielleicht? Ich kann so die Grundlagen, aber Pivot-Tabellen, äh... da müsste ich noch —` |
| 13 | `kap02-audio-interview-07-ki.mp3` | KI | 1,0 s | Wechsel aus der Rolle: etwas langsamer, sachlich-zugewandt wie eine Trainerin; nach „Rückmeldung“ 0,5 s Pause | `[calm] [slowly] Danke. Ich verlasse jetzt die Rolle. Rückmeldung: Ihre stärkste Antwort war das Telefonat mit dem Lieferanten, weil Sie Anlass, Argument und Ergebnis genannt haben. Beginnen Sie das nächste Mal mit diesem Beispiel. Die Füllwörter kamen vor allem am Satzanfang. Eine kurze Pause wirkt dort ruhiger.` |
| 14 | `kap02-audio-interview-07-lea.mp3` | Lea | 0,8 s | erleichtert, verlegenes Lachen | `[laughs nervously] Okay. Noch mal von vorn?` |

---

## Anleitung zur Erzeugung (ElevenLabs, Stand 01.11.2026)

1. **Tarif.** Für ein Verlagsbuch einen bezahlten Tarif nutzen: Der kostenlose Tarif enthält keine kommerzielle Lizenz, alle bezahlten Tarife schon (außer bei Beta-Diensten), und Audio aus der bezahlten Zeit bleibt auch nach einer Kündigung nutzbar (ElevenLabs Help Center, „Can I publish the content I generate on the platform?“). Starter (ca. 5–6 US-$ im Monat, 30.000 Credits) reicht; ein Monat genügt.
2. **Modell.** In „Text to Speech“ das Modell **Eleven v3** wählen (oder neuer, falls angeboten). Nur v3 und neuer verstehen die Tags in eckigen Klammern. SSML-Pausen wie `<break time="1s"/>` funktionieren dort nicht; Pausen entstehen aus Auslassungspunkten, Gedankenstrichen und `[pause]`.
3. **Stimmen.** Drei Stimmen aus der Stimmenbibliothek nach den Profilen oben wählen und für alle Zeilen beibehalten. Keine geklonte Stimme einer realen Person verwenden.
4. **Einstellungen.** Stabilität zuerst auf „Natural“; klingen Lea-Zeilen zu glatt (Füllwörter verschluckt), auf „Creative“ stellen. Sprechtempo auf Standard lassen; das Tempo steuern die Tags.
5. **Erzeugen.** Je Zeile den Eingabetext aus der Tabelle einfügen (ohne die Backticks), zwei bis drei Varianten erzeugen und die beste behalten. Prüffragen beim Anhören: Sind alle Füllwörter hörbar? Bleibt die KI-Stimme in jeder Zeile ruhig? Klingt das Englisch britisch? Stimmt der Wortlaut genau mit dem Text überein (das Transkript wird wörtlich angezeigt)?
6. **Format und Namen.** mp3 in der Standardqualität (44,1 kHz, 128 kbit/s) herunterladen und exakt wie in der Spalte „Datei“ benennen.
7. **Ablage.** Alle 17 Dateien in den Tresorit-Ordner `06-Lehrbuch-Publikation-Logos/Audio-S5/` legen (Claude legt ihn an). Danach Bescheid geben; Claude übernimmt Zusammenfügen, Lautheitsausgleich, Zeitmarken und Einbau.

Umfang: rund 2.070 Zeichen Eingabetext in 17 Dateien (per Skript gezählt); mit je drei Varianten rund 6.200 Zeichen, gut ein Fünftel des Starter-Kontingents (wie viele Credits v3 je Zeichen abrechnet, auf der Tarifseite prüfen). Erwartete Laufzeit: Beispiel 1 ca. 10 s, Beispiel 2 ca. 2 min (304 gesprochene Wörter).

---

## Darstellung und Kennzeichnung (zur Information, Umsetzung nach Eingang der Dateien)

- **Online:** je Hörbeispiel ein Player links, Transkript rechts; der gerade gesprochene Satz wird hervorgehoben, ein Klick auf einen Satz springt dorthin. Bei 390 px Breite stehen Player und Transkript untereinander. Datei `interactions/audio-beispiele-kap02.html` als iframe, Medien unter `interactions/media/`.
- **Kennzeichnung im Player und im Text:** „Fiktiver Dialog, Stimmen KI-erzeugt (ElevenLabs v3)“ bzw. „Stimme KI-erzeugt“. Der Buchtext erwähnt die Transparenzpflichten aus Art. 50 KI-VO (gilt seit 2. August 2026; die maschinenlesbare Markierung nach Abs. 2 ist Pflicht des Anbieters, für Systeme, die schon vorher am Markt waren, ab 2. Dezember 2026) und verweist auf 2.6 Diligence. Der Gesetzestext wird vor dem Einbau in EUR-Lex (VO (EU) 2024/1689, geändert durch VO (EU) 2026/1744) geprüft.
- **Druck:** Kasten mit Transkript-Auszug (Zeilen 03–08 des Interviews) und QR-Code auf die Online-Fassung.

## Offene Fragen an Roman (per MC)
1. Drehbuch freigeben oder ändern.
2. Beschreibung der App im Buch: Die App ist kein Studierendenprojekt, wie im Feedback-Plan vermerkt. Wie soll der Text sie nennen?
