"""Unabhängiger Zweitauszug für den Test der Leserübung „Höher oder tiefer“.

Laiensicht: Damit ein Fehler im Hauptskript nicht unbemerkt bleibt, liest dieses Skript
dieselbe große CSV-Tabelle auf einem anderen Weg (Python-Standardmodul csv statt pandas,
Zeile für Zeile) und schreibt zehn Stichprobenwerte in eine kleine Prüfdatei. Der Test
tests/hoeher-tiefer.test.mjs vergleicht sie mit interactions/data/aei-hoeher-tiefer.json.

Aufruf: python3 -I scripts/aei-stichprobe.py /pfad/aei_claude_ai_2026-06-26.csv
"""
import csv, json, sys
IDS = ["16221", "680", "16120", "22389", "17031", "22444", "5663", "22691", "9328", "1592"]
werte, monat = {}, "2026-05-01"
with open(sys.argv[1], newline="", encoding="utf-8") as f:
    for z in csv.DictReader(f):
        if (z["date_start"] == monat and z["geo_id"] == "GLOBAL" and z["category_name"] == "onet"
                and z["hierarchy_level"] == "0" and z["metric_id"] == "pct" and z["node_external_id"] in IDS):
            werte[z["node_external_id"]] = float(z["value"])
        elif (z["date_start"] == monat and z["category_name"] == "overall" and z["geo_id"] in ("GLOBAL", "DEU")
              and z["metric_id"] == "use_case_coursework_pct"):
            werte["coursework_" + z["geo_id"]] = float(z["value"])
json.dump({"monat": monat, "werte": werte}, open("tests/fixtures/aei-stichprobe.json", "w"), indent=1)
print(len(werte), "Werte:", werte)
