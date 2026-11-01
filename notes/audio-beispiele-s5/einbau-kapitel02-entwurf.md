# S5 Einbau in kapitel02.qmd: Entwurf (noch nicht eingespielt)

Stelle: Ende von 2.3.1 (`#sec-capabilities`), direkt nach dem Absatz „Zum Standardumfang der großen Chat-Interfaces gehören inzwischen vier **Funktionsklassen** …“ und vor `### Welches Setup: LLM, RAG oder Agent? {#sec-patterns-usage}`.
Erst einspielen, wenn die echten mp3-Dateien zusammengefügt sind (`python3 scripts/audio-s5-zusammenfuegen.py` ohne `--platzhalter`) und der Sprachcheck S9 für Kap. 2 durch ist oder parallel nicht an diesen Zeilen arbeitet.

Offen vor dem Einbau: Die Übergangsfrist für Art. 50 Abs. 2 (2. Dezember 2026 für Systeme, die vor dem 2. August 2026 am Markt waren) laut Sekundärquellen in einem neuen Art. 111 Abs. 4, eingefügt durch VO (EU) 2026/1744 (`eu2026omnibus`); im Amtsblatt (EUR-Lex) nachlesen, bevor der Satz bleibt. Der Abruf war in der Sitzung vom 01.11. nicht freigegeben.

## Block A (Text, beide Formate)

```markdown
Was „steuerbarer Tonfall“ heißt, zeigen zwei Hörbeispiele. Im ersten spricht dieselbe synthetische Stimme drei Beispielsätze aus einem Vokabeltrainer für Englisch in Klasse 5: langsam und deutlich wie für Lernende, dann begeistert, dann geflüstert. Den Wechsel bewirken allein kurze Regieanweisungen im Eingabetext wie `[slowly]` oder `[whispers]`. Das zweite simuliert ein Vorstellungsgespräch, wie es die Interviewtrainer der Studierendenprojekte in @sec-fall-job-buddy anbieten. Die Studentin zögert, sagt „äh“ und „also“ und bricht Sätze ab; die KI-Interviewerin stellt sich als KI vor, hakt ruhig nach und gibt am Ende Rückmeldung. Personen und Gespräch sind erfunden, beide Beispiele mit ElevenLabs v3 erzeugt.

Seit dem 2. August 2026 müssen Anbieter solcher Systeme erzeugte Audioinhalte maschinenlesbar als künstlich markieren, und wer täuschend echte Inhalte über reale Personen oder Ereignisse verbreitet (*deep fake*), muss sie offenlegen [@eu2024aiact, Art. 50 Abs. 2 und 4, Art. 3 Nr. 60]. Ein erfundenes Gespräch erfundener Personen fällt kaum unter diese Definition. Gekennzeichnet ist es hier trotzdem, denn wer zuhört, kann eine synthetische Stimme von einer echten Aufnahme nicht mehr unterscheiden (@sec-diligence).
```

## Block B (nur online)

```markdown
::: {.content-visible when-format="html"}
```{=html}
<iframe loading="lazy" id="audio-beispiele-kap02" src="interactions/audio-beispiele-kap02.html" width="100%" height="870px" frameborder="0" title="Hörbeispiele: eine Stimme in drei Tonfällen und ein simuliertes Vorstellungsgespräch, jeweils mit Transkript"></iframe>
<script>
/* Der Player meldet seine Inhaltshöhe (wie agenten-engpass.html); so bleibt kein Leerraum und kein Scrollbalken. */
window.addEventListener("message", function (e) {
  var d = e.data; if (!d || d.typ !== "rahmen-hoehe") return;
  var f = document.getElementById(d.id); if (f && d.h > 200) f.style.height = (d.h + 2) + "px";
});
</script>
```
:::
```

Gemessene Höhe: 845 px bei 599 px Buchspalte, 1.267 px bei 358 px (Handy); der Startwert 870 px gilt für die Buchspalte, die Höhenmeldung passt ihn an.

## Block C (nur Druck): Kasten mit Transkript-Auszug und QR-Code

```markdown
::: {.content-visible unless-format="html"}
::: {.callout-note title="Hörbeispiel: Simulation eines Vorstellungsgesprächs (Auszug)" appearance="simple"}
**KI-Interviewerin:** Was genau interessiert Sie am Einkauf?\
**Lea:** Also … ähm … dass man, äh, mit vielen verschiedenen – Also, man verhandelt ja mit Lieferanten, und … das find ich spannend. Glaub ich.\
**KI-Interviewerin:** Sie sagen „glaube ich“. Haben Sie schon einmal etwas verhandelt, im Studium oder privat?\
**Lea:** Ähm … also, bei meinem Nebenjob im Getränkemarkt, da hab ich – nee, warte. Also, da hab ich mal mit dem Lieferanten telefoniert, weil die Lieferung zu spät war, und, äh … wir haben dann ausgemacht, dass er am Samstag noch mal kommt.

Fiktiver Dialog, Stimmen KI-erzeugt (ElevenLabs v3). Beide Hörbeispiele mit vollständigem Transkript: QR-Code scannen oder <https://th-koln-bartnik.github.io/genai4teaching/interactions/audio-beispiele-kap02.html> aufrufen.

![](images/qr/qr-audio-beispiele-kap02.png){width="25mm"}
:::
:::
```

QR-Code: `images/qr/qr-audio-beispiele-kap02.png` nach Muster der übrigen `images/qr/qr-*.png` erzeugen (Python-Paket `qrcode` oder `segno` ist in der Cloud nicht vorinstalliert, `pip install --break-system-packages segno`). Ob QR-Bilder im Kasten im LaTeX-Testrender sauber stehen, prüfen; sonst QR rechts neben den Kasten per `layout-ncol`.

## Block D: Querverweis in 2.6 Diligence

Im Absatz „Offenlegung heißt, zu sagen, wo KI mitgearbeitet hat: … Texte, Bilder oder Stimmen lesen, sehen oder hören.“ nach „hören“ ergänzen: „(Beispiel: die gekennzeichneten Hörbeispiele in @sec-capabilities)“.

## Didaktischer Apparat
Keine neue Lernfrage nötig. Optional Lernfrage zu 2.3.1: „Woran erkennt die KI-Interviewerin im Hörbeispiel, wo sie nachhaken muss, und welche Anweisung im System-Prompt würde dieses Verhalten erzeugen?“ (per MC beim Einbau entscheiden).
