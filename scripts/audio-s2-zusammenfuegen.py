#!/usr/bin/env python3
"""S2 Podcast „Was Forschende über KI sagen“ (Kap. 4.1): Manifest, ElevenLabs-Blöcke, Tonspur, Player-Daten.

In Alltagssprache: Das Drehbuch wird zu einer Liste von Sprechzeilen (Manifest). Daraus entstehen
(1) die Textblöcke, die Roman in ElevenLabs „Text to Dialogue“ einfügt, (2) eine mp3-Tonspur –
entweder aus Romans Aufnahmen oder, bis diese vorliegen, mit den freien Computerstimmen Piper –
und (3) die Zeitmarken, mit denen der Player den gerade gesprochenen Satz hervorhebt. Weil das
Skript die Teile selbst aneinanderhängt, kennt es jede Satzgrenze.

Aufruf im Repo-Hauptordner:
  python3 scripts/audio-s2-zusammenfuegen.py manifest [--neu]   # Manifest aus drehbuch-erstfassung.md (einmalig)
  python3 scripts/audio-s2-zusammenfuegen.py bloecke            # elevenlabs-bloecke.md schreiben
  python3 scripts/audio-s2-zusammenfuegen.py ton --platzhalter  # Piper-Ton, mp3, Zeitmarken, Player-Daten
  python3 scripts/audio-s2-zusammenfuegen.py ton                # dasselbe mit ElevenLabs-Blöcken aus roh/
  python3 scripts/audio-s2-zusammenfuegen.py daten              # nur Player-Daten neu schreiben (Zeitmarken bleiben)
Benötigt ffmpeg/ffprobe; für --platzhalter zusätzlich piper-tts und die Stimmen
de_DE-kerstin-low und de_DE-thorsten-high (Ordner per --stimmen oder PIPER_STIMMEN).

Echte Aufnahmen (Sitzung B): Roman liefert je Block eine mp3 (Dateinamen aus elevenlabs-bloecke.md)
nach _src/audio/s2-podcast/roh/. Innerhalb eines Blocks sind die Sprecherwechsel nicht markiert; das
Skript sucht die Pausen (ffmpeg silencedetect) und ordnet sie den Zeilengrenzen zu. Findet es nicht
genug Pausen, verteilt es die Blockdauer nach Zeichenzahl und meldet das. Rückfall: Einzeldateien
je Zeile (Feld „datei“) in roh/zeilen/, wie bei den Audio-Beispielen Kap. 2.
"""
import argparse, hashlib, json, os, re, subprocess, sys, tempfile
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "_src/audio/s2-podcast"
HTML = REPO / "interactions/podcast-forschende-ki.html"
AUSGABE = "interactions/media/kap04-podcast-forschende.mp3"
RATE = 24000
MAX_BLOCK = 1900
PAUSE_SPRECHER, PAUSE_THEMA = 0.35, 1.0

STIMMEN = {"lea": "de_DE-kerstin-low", "jonas": "de_DE-thorsten-high"}

# ---------- Zahlwörter (nur 0–999, genügt für das Drehbuch) ----------
EINER = "null eins zwei drei vier fünf sechs sieben acht neun zehn elf zwölf dreizehn vierzehn fünfzehn sechzehn siebzehn achtzehn neunzehn".split()
ZEHNER = {2: "zwanzig", 3: "dreißig", 4: "vierzig", 5: "fünfzig", 6: "sechzig", 7: "siebzig", 8: "achtzig", 9: "neunzig"}


def zahlwort(n):
    if n < 20:
        return EINER[n]
    if n < 100:
        z, e = divmod(n, 10)
        return ZEHNER[z] if e == 0 else ("ein" if e == 1 else EINER[e]) + "und" + ZEHNER[z]
    h, r = divmod(n, 100)
    kopf = "hundert" if h == 1 else EINER[h] + "hundert"
    return kopf + ("" if r == 0 else ("eins" if r == 1 else zahlwort(r)))


def zahlen_aussprechen(s):
    s = re.sub(r"(\d+)\s*Prozent", lambda m: zahlwort(int(m.group(1))) + " Prozent", s)
    return re.sub(r"\b\d{1,3}\b", lambda m: zahlwort(int(m.group(0))), s)


def woerter(s):
    """Gesprochene Wörter ohne Tags, Satzzeichen und Zahlenschreibweise (für Abgleich Eingabetext ↔ Transkript)."""
    s = re.sub(r"\[[^\]]*\]", " ", s)
    s = zahlen_aussprechen(s).lower().replace("’", "'")
    return re.findall(r"[a-zäöüß']+", s)


def ff(*args):
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", *args], check=True)


def dauer(pfad):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of",
                          "default=nw=1:nk=1", str(pfad)], capture_output=True, text=True, check=True)
    return float(out.stdout.strip())


# ---------- 1 Manifest aus dem Drehbuch ----------
TAGS = {  # sparsame v3-Tags (englisch), Zeile -> Tag; Zeilennummer ab 1
    1: "[warmly]",
    17: "[thoughtful]",
    34: "[curious]",
}


def manifest_bauen(neu):
    ziel = SRC / "manifest.json"
    if ziel.exists() and not neu:
        sys.exit("manifest.json existiert schon (einzige Quelle). Mit --neu überschreiben.")
    roh = (SRC / "drehbuch-erstfassung.md").read_text(encoding="utf-8")
    themen, zeilen, thema = [], [], None
    aenderungen = []
    for absatz in [a.strip() for a in roh.split("\n\n") if a.strip()]:
        m = re.match(r"## Thema: (.+)", absatz)
        if m:
            thema = f"t{len(themen) + 1}"
            themen.append({"id": thema, "titel": m.group(1).strip()})
            continue
        m = re.match(r"(Lea|Jonas): (.+)", absatz, re.S)
        if not m:
            sys.exit(f"Unbekannter Absatz: {absatz[:60]}")
        nr = len(zeilen) + 1
        wer, text = m.group(1).lower(), " ".join(m.group(2).split())
        ids = re.findall(r"science_\d{4}", text)
        anzeige = re.sub(r"\s*\[science_\d{4}\]", "", text)
        if anzeige != text:
            aenderungen.append(f"Zeile {nr}: Transkript-ID(s) {', '.join(ids)} nicht gesprochen (ins Feld ids)")
        tts = zahlen_aussprechen(anzeige)
        if tts != anzeige:
            zahlen = re.findall(r"\b\d+\b", anzeige)
            aenderungen.append(f"Zeile {nr}: Zahl(en) {', '.join(zahlen)} im Eingabetext ausgeschrieben")
        if nr in TAGS:
            tts = TAGS[nr] + " " + tts
            aenderungen.append(f"Zeile {nr}: v3-Tag {TAGS[nr]} vorangestellt (nicht gesprochen)")
        vorher = zeilen[-1] if zeilen else None
        pause = 0.3 if vorher is None else (PAUSE_THEMA if vorher["thema"] != thema else PAUSE_SPRECHER)
        zeilen.append({"nr": nr, "datei": f"s2-zeile-{nr:02d}.mp3", "sprecher": wer, "thema": thema,
                       "pause": pause, "tts": tts, "text": anzeige, "ids": ids,
                       "drehbuch": text})
    out = {
        "hinweis": "Einzige Quelle für das Hörstück S2 (Kap. 4.1, @sec-podcast-interviews). 'drehbuch' = Absatz der "
                   "unveränderten Erstfassung (mit IDs), 'text' = Anzeige im Transkript, 'tts' = Eingabetext für "
                   "ElevenLabs v3 (Zahlen ausgeschrieben, Tags in eckigen Klammern), 'pause' = Sekunden Stille davor, "
                   "'ids' = genannte Transkript-IDs (nicht gesprochen), 'pruef' = Nr. der Prüfaussage. "
                   "Werkzeug: python3 scripts/audio-s2-zusammenfuegen.py",
        "titel": "Was Forschende über KI sagen",
        "kennzeichnung": "Stimmen KI-erzeugt (ElevenLabs v3); Drehbuch KI-erzeugt, ungeprüft.",
        "ausgabe": AUSGABE,
        "sprecher": {"lea": "Lea", "jonas": "Jonas"},
        "themen": themen,
        "sprechbarkeit": aenderungen,
        "zeilen": zeilen,
    }
    ziel.write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{len(zeilen)} Zeilen, {len(themen)} Themen, {len(aenderungen)} Sprechbarkeits-Änderungen -> {ziel.relative_to(REPO)}")


def lade():
    return json.loads((SRC / "manifest.json").read_text(encoding="utf-8"))


# ---------- 2 Blöcke für ElevenLabs Text to Dialogue ----------
def bloecke_bilden(m):
    """Blöcke <= MAX_BLOCK Zeichen; bevorzugt an Themengrenzen, sonst an Sprecherwechseln."""
    bl, akt = [], []
    laenge = lambda zs: sum(len(z["tts"]) + 8 for z in zs)
    for z in m["zeilen"]:
        if akt and (akt[-1]["thema"] != z["thema"] or laenge(akt + [z]) > MAX_BLOCK):
            bl.append(akt); akt = []
        akt.append(z)
    if akt:
        bl.append(akt)
    return bl


def bloecke_schreiben():
    m = lade()
    bl = bloecke_bilden(m)
    t = ["# ElevenLabs-Blöcke für das Hörstück S2 „Was Forschende über KI sagen“", "",
         "Erzeugt von `python3 scripts/audio-s2-zusammenfuegen.py bloecke` aus `manifest.json`; nicht von Hand ändern.",
         "Modell `eleven_v3`, Werkzeug „Text to Dialogue“. Je Block: Zeilen in dieser Reihenfolge als Dialogzeilen anlegen,",
         "Stimme nach Sprecher zuordnen (Lea / Jonas), erzeugen, als mp3 unter dem genannten Dateinamen speichern.", ""]
    for i, b in enumerate(bl, 1):
        zeichen = sum(len(z["tts"]) for z in b)
        thema = next(x["titel"] for x in m["themen"] if x["id"] == b[0]["thema"])
        t += [f"## Block {i:02d} – {thema}", "", f"Datei: `s2-block-{i:02d}.mp3` · Zeilen {b[0]['nr']}–{b[-1]['nr']} · {zeichen} Zeichen", ""]
        for z in b:
            t.append(f"- **{m['sprecher'][z['sprecher']]}:** {z['tts']}")
        t.append("")
        if zeichen > 2000:
            sys.exit(f"Block {i} hat {zeichen} Zeichen (> 2000)")
    (SRC / "elevenlabs-bloecke.md").write_text("\n".join(t), encoding="utf-8")
    print(f"{len(bl)} Blöcke, größter {max(sum(len(z['tts']) for z in b) for b in bl)} Zeichen -> elevenlabs-bloecke.md")


# ---------- 3 Ton ----------
def piper_zeile(z, ziel, stimmen):
    modell = Path(stimmen) / (STIMMEN[z["sprecher"]] + ".onnx")
    text = re.sub(r"\[[^\]]*\]", "", z["tts"]).strip()
    wav = ziel.with_suffix(".wav")
    subprocess.run([sys.executable, "-m", "piper", "-m", str(modell), "-f", str(wav)], input=text.encode(),
                   check=True, capture_output=True)
    return wav


def normieren(roh, ziel):
    rand = "silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.05"
    ff("-i", str(roh), "-af", f"{rand},areverse,{rand},areverse,loudnorm=I=-18:TP=-2:LRA=11",
       "-ar", str(RATE), "-ac", "1", str(ziel))


def stille(sek, ziel):
    ff("-f", "lavfi", "-i", f"anullsrc=r={RATE}:cl=mono", "-t", f"{sek:.3f}", str(ziel))


def pausen_im_block(pfad, n_grenzen):
    """Mitten der längsten Pausen (>= 0,25 s) im Block, zeitlich sortiert."""
    p = subprocess.run(["ffmpeg", "-hide_banner", "-i", str(pfad), "-af", "silencedetect=n=-40dB:d=0.25", "-f", "null", "-"],
                       capture_output=True, text=True)
    starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", p.stderr)]
    ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", p.stderr)]
    paare = [(e - s, (s + e) / 2) for s, e in zip(starts, ends)]
    beste = sorted(paare, reverse=True)[:n_grenzen]
    return sorted(mitte for _, mitte in beste)


def ton(platzhalter, stimmen):
    m = lade()
    fehler = [f"Zeile {z['nr']}: Transkript weicht vom Eingabetext ab" for z in m["zeilen"] if woerter(z["tts"]) != woerter(z["text"])]
    if fehler:
        print("\n".join(fehler)); sys.exit("Abbruch.")
    zeiten = {}
    hinweise = []
    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        teile, t = [], 0.0
        if platzhalter or (SRC / "roh/zeilen").is_dir():
            rohdir = SRC / "roh-platzhalter"
            rohdir.mkdir(exist_ok=True)
            for z in m["zeilen"]:
                if platzhalter:
                    # Zwischenspeicher je Eingabetext: nur geänderte Zeilen neu sprechen
                    kenn = hashlib.sha1((z["sprecher"] + z["tts"]).encode()).hexdigest()[:10]
                    wav = rohdir / f"s2-zeile-{z['nr']:02d}-{kenn}.wav"
                    if not wav.exists():
                        piper_zeile(z, wav, stimmen)
                    roh = wav
                else:
                    roh = SRC / "roh/zeilen" / z["datei"]
                    if not roh.exists():
                        sys.exit(f"Fehlt: {roh}")
                teil = tmp / f"z{z['nr']:02d}.wav"
                normieren(roh, teil)
                pa = tmp / f"p{z['nr']:02d}.wav"; stille(z["pause"], pa)
                d = dauer(teil)
                start = t + z["pause"]; t = start + d
                zeiten[z["nr"]] = (round(start, 2), round(t, 2))
                teile += [pa, teil]
        else:
            for i, b in enumerate(bloecke_bilden(m), 1):
                roh = SRC / "roh" / f"s2-block-{i:02d}.mp3"
                if not roh.exists():
                    sys.exit(f"Fehlt: {roh}")
                teil = tmp / f"b{i:02d}.wav"
                normieren(roh, teil)
                d = dauer(teil)
                pa = tmp / f"bp{i:02d}.wav"; stille(b[0]["pause"], pa)
                start = t + b[0]["pause"]
                grenzen = pausen_im_block(teil, len(b) - 1)
                if len(grenzen) < len(b) - 1:
                    gesamt = sum(len(z["text"]) for z in b); acc, grenzen = 0, []
                    for z in b[:-1]:
                        acc += len(z["text"]); grenzen.append(d * acc / gesamt)
                    hinweise.append(f"Block {i}: zu wenige Pausen, Zeitmarken nach Zeichenzahl verteilt")
                marken = [0.0] + grenzen + [d]
                for z, a, e in zip(b, marken, marken[1:]):
                    zeiten[z["nr"]] = (round(start + a, 2), round(start + e, 2))
                t = start + d
                teile += [pa, teil]
        aus = tmp / "ende.wav"; stille(0.6, aus); teile.append(aus)
        liste = tmp / "liste.txt"
        liste.write_text("".join(f"file '{p}'\n" for p in teile))
        ziel = REPO / m["ausgabe"]; ziel.parent.mkdir(parents=True, exist_ok=True)
        kennz = ("Platzhalter: Computerstimmen Piper (CC0). " if platzhalter else "") + m["kennzeichnung"]
        ff("-f", "concat", "-safe", "0", "-i", str(liste), "-c:a", "libmp3lame", "-b:a", "64k", "-ac", "1",
           "-id3v2_version", "3", "-metadata", f"title={m['titel']}", "-metadata", f"comment={kennz}", str(ziel))
        gesamt = dauer(ziel)
    for z in m["zeilen"]:
        z["start"], z["ende"] = zeiten[z["nr"]]
    m["dauer"] = round(gesamt, 2)
    m["platzhalter"] = platzhalter
    (SRC / "manifest.json").write_text(json.dumps(m, ensure_ascii=False, indent=1), encoding="utf-8")
    for h in hinweise:
        print(h)
    print(f"{len(m['zeilen'])} Zeilen, {gesamt:.1f} s ({gesamt / 60:.1f} min) -> {m['ausgabe']}")
    daten_schreiben()


# ---------- 4 Player-Daten ----------
def daten_schreiben():
    m = lade()
    if not (SRC / "uebung.json").exists():
        print("uebung.json fehlt noch: Player-Daten nicht geschrieben."); return
    ueb = json.loads((SRC / "uebung.json").read_text(encoding="utf-8"))
    ausz = json.loads((SRC / "auszug.json").read_text(encoding="utf-8"))
    n = ausz["pruefung"]["transkripte"]
    zeilen = []
    for z in m["zeilen"]:
        e = {"sprecher": z["sprecher"], "text": z["text"], "thema": z["thema"], "start": z.get("start", 0), "ende": z.get("ende", 0)}
        if z.get("pruef"):
            e["pruef"] = z["pruef"]
        zeilen.append(e)
    themen = []
    for t in m["themen"]:
        erste = next(z for z in m["zeilen"] if z["thema"] == t["id"])
        themen.append({"id": t["id"], "titel": t["titel"], "start": erste.get("start", 0)})
    pruefung = []
    for a in ueb["pruefung"]:
        z = next(z for z in m["zeilen"] if z["nr"] == a["zeile"])
        pruefung.append({**a, "sprecher": z["sprecher"], "start": z.get("start", 0), "ende": z.get("ende", 0)})
    V = ueb["vorhersage"]
    for o in V["optionen"]:
        o["zahl"] = ausz["themen"][o["thema"]]["interviews"]
    V["n"] = n
    V["regler"]["zahl"] = ausz["themen"][V["regler"]["thema"]]["interviews"]
    meta = {**ueb["meta"], "titel": m["titel"], "src": str(Path(m["ausgabe"]).relative_to("interactions")),
            "dauer": m.get("dauer", 0), "platzhalter": m.get("platzhalter", True),
            "kennzeichnung": ("Stimmen KI-erzeugt (vorläufig Piper); Drehbuch KI-erzeugt, ungeprüft."
                              if m.get("platzhalter", True) else m["kennzeichnung"])}
    daten = {"meta": meta, "sprecher": m["sprecher"], "themen": themen, "zeilen": zeilen,
             "vorhersage": V, "pruefeinleitung": ueb["pruefeinleitung"], "pruefung": pruefung,
             "bilanz": ueb["bilanz"], "transfer": ueb["transfer"]}
    html = HTML.read_text(encoding="utf-8")
    block = json.dumps(daten, ensure_ascii=False, indent=1).replace("</", "<\\/")
    neu, k = re.subn(r'(<script type="application/json" id="podcastdaten">)(.*?)(</script>)',
                     lambda x: x.group(1) + "\n" + block + "\n" + x.group(3), html, flags=re.S)
    if k != 1:
        sys.exit("Datenblock id=podcastdaten nicht gefunden.")
    HTML.write_text(neu, encoding="utf-8")
    print(f"Player-Daten geschrieben: {HTML.relative_to(REPO)}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("schritt", choices=["manifest", "bloecke", "ton", "daten"])
    ap.add_argument("--neu", action="store_true")
    ap.add_argument("--platzhalter", action="store_true")
    ap.add_argument("--stimmen", default=os.environ.get("PIPER_STIMMEN", "/home/claude/piper"))
    a = ap.parse_args()
    if a.schritt == "manifest":
        manifest_bauen(a.neu)
    elif a.schritt == "bloecke":
        bloecke_schreiben()
    elif a.schritt == "ton":
        ton(a.platzhalter, a.stimmen)
    else:
        daten_schreiben()


if __name__ == "__main__":
    main()
