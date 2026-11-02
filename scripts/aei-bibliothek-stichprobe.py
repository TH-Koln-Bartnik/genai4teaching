"""Unabhängiger Zweitauszug für tests/bibliothek.test.mjs (S3, Bibliothek der Prompts).

Laiensicht: Damit ein Fehler im Hauptskript nicht unbemerkt bleibt, liest dieses Skript
dieselben Quelldateien auf einem zweiten Weg (Python-Modul csv statt pandas) und legt
eine kleine Stichprobe als Prüfdatei ab. Der Test vergleicht sie mit den Daten im Element.

Aufruf im Repo-Wurzelordner:
    python3 -I scripts/aei-bibliothek-stichprobe.py <aei.csv> <task_statements.csv>
Ergebnis: tests/fixtures/aei-bibliothek-stichprobe.json
"""
import csv
import json
import sys
from pathlib import Path

WURZEL = Path(__file__).resolve().parent.parent
ZIEL = WURZEL / "tests" / "fixtures" / "aei-bibliothek-stichprobe.json"
BERUFE = ["25-4022.00", "25-3041.00", "25-1194.00", "15-1252.00", "27-3043.00", "43-6014.00"]
REGALE = [("GLOBAL", "25"), ("DEU", "25"), ("GLOBAL", "45")]
AUFGABEN = ["22411", "17031"]


def main(aei_pfad, onet_pfad):
    werte = {}
    monat = ""
    with open(aei_pfad, newline="", encoding="utf-8") as f:
        for z in csv.DictReader(f):
            if z["metric_id"] != "pct" or z["date_start"] != "2026-05-01":
                continue
            k = (z["geo_id"], z["category_name"], z["hierarchy_level"], z["node_external_id"])
            werte[k] = float(z["value"])
            monat = z["date_start"]
    stichprobe = {"monat": monat, "berufe": {}, "regale": {}, "aufgaben": {}}
    for s in BERUFE:
        stichprobe["berufe"][s] = werte.get(("GLOBAL", "soc_occupation", "0", s))
    for g, s in REGALE:
        stichprobe["regale"][f"{g}:{s}"] = werte.get((g, "soc_occupation", "1", s))
    for t in AUFGABEN:
        stichprobe["aufgaben"][t] = werte.get(("GLOBAL", "onet", "0", t))
    # Zuordnung Aufgabe -> Berufe laut O*NET (für alle im Element verwendeten Aufgaben)
    daten = json.loads((WURZEL / "interactions" / "data" / "aei-bibliothek.json").read_text(encoding="utf-8"))
    benutzt = {a["id"] for r in daten["regale"] for b in r["buecher"] for a in b["aufgaben"]}
    zuordnung = {}
    with open(onet_pfad, newline="", encoding="utf-8") as f:
        for z in csv.DictReader(f):
            if z["Task ID"] in benutzt:
                zuordnung.setdefault(z["Task ID"], []).append(z["O*NET-SOC Code"])
    stichprobe["aufgabe_beruf"] = {k: sorted(set(v)) for k, v in sorted(zuordnung.items(), key=lambda x: int(x[0]))}
    ZIEL.parent.mkdir(parents=True, exist_ok=True)
    ZIEL.write_text(json.dumps(stichprobe, ensure_ascii=False, indent=0) + "\n", encoding="utf-8")
    print(ZIEL, len(stichprobe["aufgabe_beruf"]), "Aufgaben;", stichprobe["berufe"], stichprobe["regale"])


if __name__ == "__main__":
    main(*sys.argv[1:3])
