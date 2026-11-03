#!/usr/bin/env python3
"""S2 Podcast: Suche in den Antworten der Forschenden (Anthropic Interviewer, CC BY).

In Alltagssprache: Ein Prüfer soll einzelne Aussagen an den Quellen nachsehen können, ohne die
ganzen 180.000 Wörter zu lesen. Das Skript zeigt entweder die Antworten eines Interviews oder
alle Stellen, an denen ein Suchbegriff vorkommt, jeweils mit Transkript-ID.

Aufruf:
  python3 -I scripts/interviewer-s2-suche.py <csv> id science_0042        # Antworten eines Interviews
  python3 -I scripts/interviewer-s2-suche.py <csv> wort "double-check"     # Stellen mit Begriff (Regex)
  python3 -I scripts/interviewer-s2-suche.py <csv> zaehle "hallucinat"     # nur Anzahl Interviews
  python3 -I scripts/interviewer-s2-suche.py <csv> wortlaut "exakter Text" # kommt Text wörtlich vor? wo?
Optionen: --max N (Standard 25 Treffer), --fenster W (Wörter Kontext je Seite, Standard 35)
"""
import argparse, re, sys

import pandas as pd


def antworten(text):
    stuecke = re.split(r"(?:^|\n\n)(Assistant|AI|User): ", text)
    return [stuecke[i + 1].strip() for i in range(1, len(stuecke) - 1, 2) if stuecke[i] == "User"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("csv"); ap.add_argument("modus", choices=["id", "wort", "zaehle", "wortlaut"])
    ap.add_argument("wert"); ap.add_argument("--max", type=int, default=25)
    ap.add_argument("--fenster", type=int, default=35)
    a = ap.parse_args()
    d = pd.read_csv(a.csv)
    daten = {r.transcript_id: antworten(r.text) for r in d.itertuples()}
    roh = {r.transcript_id: r.text for r in d.itertuples()}

    if a.modus == "id":
        if a.wert not in daten:
            sys.exit(f"ID {a.wert} nicht vorhanden")
        for i, t in enumerate(daten[a.wert], 1):
            print(f"[{a.wert} Antwort {i}] {t}\n")
        return
    if a.modus == "wortlaut":
        treffer = [k for k, t in roh.items() if a.wert in t]
        print(f"wörtlich in {len(treffer)} Transkript(en): {', '.join(treffer) or '-'}")
        return
    rx = re.compile(a.wert, re.I)
    ids = [k for k, v in daten.items() if any(rx.search(t) for t in v)]
    print(f"Begriff /{a.wert}/ in den Antworten von {len(ids)} von {len(daten)} Interviews")
    if a.modus == "zaehle":
        return
    n = 0
    for k in ids:
        for t in daten[k]:
            for m in rx.finditer(t):
                w = t.split()
                pos = len(t[: m.start()].split())
                aus = " ".join(w[max(0, pos - a.fenster): pos + a.fenster])
                print(f"[{k}] … {aus} …")
                n += 1
                if n >= a.max:
                    print(f"(abgebrochen nach {a.max} Treffern; --max erhöhen)")
                    return
                break


if __name__ == "__main__":
    main()
