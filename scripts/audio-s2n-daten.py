#!/usr/bin/env python3
"""S2-N: Player-Daten für interactions/podcast-forschende-ki-notebook.html schreiben.

In Alltagssprache: Der Player ist eine einzige HTML-Datei ohne Nachladen. Dieses Skript
packt Transkript (manifest.json), Übungstexte (uebung.json) und die Stichwortzählung
(zaehlung.json) in einen JSON-Block innerhalb der Datei. Zahlen kommen nur aus diesen
Dateien, nicht von Hand.

Aufruf (im Repo-Hauptordner):  python3 -I scripts/audio-s2n-daten.py
"""
import json, re, sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SRC = REPO / "_src/audio/s2n-notebook"
HTML = REPO / "interactions/podcast-forschende-ki-notebook.html"
MP3 = "media/kap04-podcast-forschende-notebook.mp3"


def main():
    m = json.loads((SRC / "manifest.json").read_text(encoding="utf-8"))
    ueb = json.loads((SRC / "uebung.json").read_text(encoding="utf-8"))
    zae = json.loads((SRC / "zaehlung.json").read_text(encoding="utf-8"))
    n = zae["pruefung"]["transkripte"]

    pruef_nach_zeile = {a["zeile"]: a["nr"] for a in ueb["pruefung"]}
    zeilen = []
    for z in m["zeilen"]:
        e = {"sprecher": z["sprecher"], "text": z["text"], "thema": z["thema"], "start": z["start"], "ende": z["ende"]}
        if z["nr"] in pruef_nach_zeile:
            e["pruef"] = pruef_nach_zeile[z["nr"]]
        zeilen.append(e)
    themen = []
    for t in m["themen"]:
        erste = next(z for z in m["zeilen"] if z["thema"] == t["id"])
        themen.append({"id": t["id"], "titel": t["titel"], "start": erste["start"]})
    pruefung = []
    for a in ueb["pruefung"]:
        z = next(z for z in m["zeilen"] if z["nr"] == a["zeile"])
        # Prüfphase: Zeitfenster der Aussage (Standard: ganze Zeile; optional enger)
        pruefung.append({**a, "sprecher": z["sprecher"], "start": a.get("start", z["start"]),
                         "ende": a.get("ende", z["ende"])})
    V = ueb["vorhersage"]
    for o in V["optionen"]:
        o["zahl"] = zae["themen"][o["thema"]]["interviews"]
    V["n"] = n
    V["regler"]["zahl"] = zae["themen"][V["regler"]["thema"]]["interviews"]
    dauer = m["zeilen"][-1]["ende"] if not m.get("dauer") else m["dauer"]
    meta = {**ueb["meta"], "titel": m["titel"].replace(" (Gemini Notebook)", ""), "src": MP3,
            "dauer": dauer, "platzhalter": False}
    sprecher = {k: v["name"] for k, v in m["stimmen"].items()}
    daten = {"meta": meta, "sprecher": sprecher, "themen": themen, "zeilen": zeilen,
             "vorhersage": V, "pruefeinleitung": ueb["pruefeinleitung"], "pruefung": pruefung,
             "bilanz": ueb["bilanz"], "transfer": ueb["transfer"]}
    html = HTML.read_text(encoding="utf-8")
    block = json.dumps(daten, ensure_ascii=False, indent=1).replace("</", "<\\/")
    neu, k = re.subn(r'(<script type="application/json" id="podcastdaten">)(.*?)(</script>)',
                     lambda x: x.group(1) + "\n" + block + "\n" + x.group(3), html, flags=re.S)
    if k != 1:
        sys.exit("Datenblock id=podcastdaten nicht gefunden.")
    HTML.write_text(neu, encoding="utf-8")
    print(f"Player-Daten geschrieben: {HTML.relative_to(REPO)} ({len(zeilen)} Zeilen, {len(themen)} Themen, "
          f"{len(pruefung)} Prüfaussagen, Dauer {dauer:.1f} s)")


if __name__ == "__main__":
    main()
