"""Auszug aus dem Anthropic Economic Index für die „Bibliothek der Prompts“ (Kap. 4.1).

Laiensicht: Der Economic Index ist eine große Tabelle (rund 220 MB), in der Anthropic
veröffentlicht, welchen Berufen und Arbeitsaufgaben die Gespräche mit dem KI-Assistenten
Claude zugeordnet wurden, als Prozentanteil aller Gespräche eines Monats. Dieses Skript
baut daraus eine Bibliothek: Jede Berufshauptgruppe der US-Klassifikation SOC wird ein
Regal, jeder Einzelberuf ein Buch, die Buchbreite ist sein Anteil. Dazu holt es aus der
US-Berufsdatenbank O*NET die Aufgaben, die zu jedem Beruf gehören, und nimmt die fünf,
denen die meisten Gespräche zugeordnet wurden. Kein Wert stammt aus dem Gedächtnis eines
Menschen oder eines Sprachmodells.

Quellen
- Economic Index: Hugging Face, Anthropic/EconomicIndex, release_2026_06_26,
  data/aei_claude_ai_2026-06-26.csv (CC BY). Zitation: Massenkoff et al. (2026).
- O*NET 31.0 Database, task_statements.csv (CC BY 4.0, USDOL/ETA),
  https://www.onetcenter.org/database.html

Aufruf im Repo-Wurzelordner (Dateien liegen außerhalb des Repos):
    python3 -I scripts/aei-bibliothek.py <aei.csv> <task_statements.csv>
    python3 -I scripts/aei-bibliothek.py <aei.csv> <task_statements.csv> --liste <ordner>
Ergebnis: interactions/data/aei-bibliothek.json und eine Kurzprüfung auf der Konsole.
Mit --liste schreibt das Skript die englischen Texte, für die noch keine Übersetzung in
scripts/aei-bibliothek-de.json steht, als Arbeitslisten (JSON) in <ordner>.
"""
import json
import sys
from pathlib import Path

import pandas as pd

MAX_BUECHER = 40      # je Regal; der Rest wird ein Buch „weitere Berufe“
MAX_AUFGABEN = 5      # je Beruf
WURZEL = Path(__file__).resolve().parent.parent
AUSGABE = WURZEL / "interactions" / "data" / "aei-bibliothek.json"
DE_DATEI = WURZEL / "scripts" / "aei-bibliothek-de.json"
EIGENES_REGAL = "25"  # Educational Instruction and Library


def lade(aei_pfad, onet_pfad):
    spalten = ["date_start", "date_end", "geo_id", "category_name", "hierarchy_level",
               "metric_id", "value", "node_name", "node_external_id"]
    df = pd.read_csv(aei_pfad, usecols=spalten, dtype={"node_external_id": str},
                     low_memory=False)
    df = df[(df.metric_id == "pct") & df.category_name.isin(["soc_occupation", "onet"])]
    monat = df.date_start.max()
    df = df[df.date_start == monat]
    ts = pd.read_csv(onet_pfad, dtype=str)
    return df, monat, ts


def regale(df, geo):
    r = df[(df.geo_id == geo) & (df.category_name == "soc_occupation") & (df.hierarchy_level == 1)]
    r = r.sort_values(["value", "node_external_id"], ascending=[False, True]).reset_index(drop=True)
    r["rang"] = r.index + 1
    return r


def main(argv):
    if len(argv) < 2:
        sys.exit(__doc__)
    aei_pfad, onet_pfad = argv[0], argv[1]
    listen_ordner = Path(argv[argv.index("--liste") + 1]) if "--liste" in argv else None

    df, monat, ts = lade(aei_pfad, onet_pfad)
    de = json.loads(DE_DATEI.read_text(encoding="utf-8")) if DE_DATEI.exists() else {
        "gruppen": {}, "berufe": {}, "aufgaben": {}}

    welt = regale(df, "GLOBAL")
    deu = regale(df, "DEU")
    assert len(welt) == 22, f"erwartet 22 Hauptgruppen, gefunden {len(welt)}"

    # Einzelberufe weltweit (Ebene 0). node_external_id ist der 8-stellige O*NET-SOC-Code.
    b = df[(df.geo_id == "GLOBAL") & (df.category_name == "soc_occupation") & (df.hierarchy_level == 0)].copy()
    b["gruppe"] = b.node_external_id.str[:2]
    assert b.gruppe.isin(welt.node_external_id).all(), "Beruf ohne Hauptgruppe"

    # Aufgaben weltweit (Ebene 0 = O*NET-Task, node_external_id = Task-ID).
    a = df[(df.geo_id == "GLOBAL") & (df.category_name == "onet") & (df.hierarchy_level == 0)]
    aufgabe_pct = dict(zip(a.node_external_id, a.value))
    aufgabe_text = dict(zip(a.node_external_id, a.node_name))
    ts = ts[ts["Task ID"].isin(aufgabe_pct)]
    berufe_je_aufgabe = ts.groupby("Task ID")["O*NET-SOC Code"].nunique().to_dict()

    fehlend = {"gruppen": {}, "berufe": {}, "aufgaben": {}}
    regal_liste, pruef = [], []
    ohne_aufgaben = 0
    for _, g in welt.iterrows():
        code = g.node_external_id
        buecher = b[b.gruppe == code].sort_values(["value", "node_external_id"], ascending=[False, True])
        summe = round(buecher.value.sum(), 2)
        pruef.append((code, g.value, summe, round(g.value - summe, 2)))
        # Bücher mit gerundet 0,00 % gehen immer in „weitere Berufe“; sonst höchstens 40.
        sichtbar = buecher[buecher.value > 0].head(MAX_BUECHER)
        rest = buecher.drop(sichtbar.index)
        liste = []
        for _, x in sichtbar.iterrows():
            aufg = ts[ts["O*NET-SOC Code"] == x.node_external_id]["Task ID"].unique().tolist()
            aufg = sorted(aufg, key=lambda t: (-aufgabe_pct[t], int(t)))
            aufg = [t for t in aufg if aufgabe_pct[t] > 0][:MAX_AUFGABEN]
            if not aufg:
                ohne_aufgaben += 1
            for t in aufg:
                if t not in de["aufgaben"]:
                    fehlend["aufgaben"][t] = aufgabe_text[t]
            if x.node_external_id not in de["berufe"]:
                fehlend["berufe"][x.node_external_id] = x.node_name
            liste.append({
                "soc": x.node_external_id,
                "name": de["berufe"].get(x.node_external_id, x.node_name),
                "name_en": x.node_name,
                "pct": round(float(x.value), 2),
                "aufgaben": [{"id": t, "text": de["aufgaben"].get(t, aufgabe_text[t]),
                              "text_en": aufgabe_text[t], "pct": round(float(aufgabe_pct[t]), 2),
                              "berufe": int(berufe_je_aufgabe.get(t, 1))} for t in aufg],
            })
        if len(rest):
            liste.append({"soc": None, "name": "weitere Berufe", "name_en": "other occupations",
                          "pct": round(float(rest.value.sum()), 2), "anzahl": int(len(rest)),
                          "davon_null": int((rest.value == 0).sum()), "aufgaben": []})
        if code not in de["gruppen"]:
            fehlend["gruppen"][code] = g.node_name
        d = deu[deu.node_external_id == code]
        regal_liste.append({
            "soc": code, "name": de["gruppen"].get(code, g.node_name), "name_en": g.node_name,
            "pct": round(float(g.value), 2), "rang": int(g.rang),
            "pct_deu": round(float(d.value.iloc[0]), 2) if len(d) else None,
            "rang_deu": int(d.rang.iloc[0]) if len(d) else None,
            "summe_berufe": summe, "berufe_gesamt": int(len(buecher)),
            "buecher": liste,
        })

    daten = {
        "quelle": {
            "economic_index": "Anthropic Economic Index, Release 2026-06-26, aei_claude_ai_2026-06-26.csv (CC BY)",
            "bericht": "Massenkoff et al. (2026), Anthropic Economic Index report: Cadences",
            "url": "https://www.anthropic.com/economic-index",
            "onet": "O*NET 31.0 Database, task_statements.csv, USDOL/ETA (CC BY 4.0)",
            "monat": monat, "geo": "GLOBAL (Regale zusätzlich DEU)", "kennzahl": "pct",
        },
        "hinweise": [
            "Anteil = Prozent aller Gespräche des Monats, die diesem Beruf bzw. dieser Hauptgruppe "
            "zugeordnet wurden; nicht der Anteil der Menschen in diesem Beruf, die KI nutzen.",
            "Aufgabenwerte gelten für die Aufgabe, nicht für den Beruf; eine Aufgabe kann laut O*NET "
            "zu mehreren Berufen gehören (Feld 'berufe').",
            "Fehlende Zellen sind nicht veröffentlicht, nicht null. Werte sind in der Quelle auf zwei "
            "Nachkommastellen gerundet.",
        ],
        "eigenes_regal": EIGENES_REGAL,
        # Alle Einzelberufe „… Teachers, Postsecondary“ (SOC 25-1xxx), auch die nicht als Buch gezeigten.
        "hochschullehre": {
            "anzahl_veroeffentlicht": int((b.node_external_id.str.startswith("25-1")).sum()),
            "anzahl_ueber_null": int(((b.node_external_id.str.startswith("25-1")) & (b.value > 0)).sum()),
            "summe": round(float(b[b.node_external_id.str.startswith("25-1")].value.sum()), 2),
        },
        "regale": regal_liste,
    }
    AUSGABE.parent.mkdir(parents=True, exist_ok=True)
    AUSGABE.write_text(json.dumps(daten, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    # Kurzprüfung ---------------------------------------------------------------
    n_buecher = sum(len(r["buecher"]) for r in regal_liste)
    breiten = [x["pct"] for r in regal_liste for x in r["buecher"] if x["soc"]]
    eig = next(r for r in regal_liste if r["soc"] == EIGENES_REGAL)
    print(f"Monat {monat}; Regale {len(regal_liste)}; Bücher {n_buecher} "
          f"(davon {sum(1 for r in regal_liste for x in r['buecher'] if not x['soc'])} 'weitere Berufe'); "
          f"Einzelberufe veröffentlicht {len(b)}")
    print("Hochschullehre (25-1xxx):", daten["hochschullehre"])
    print(f"SOC 25 Welt: Rang {eig['rang']}, {eig['pct']} %; DEU: Rang {eig['rang_deu']}, {eig['pct_deu']} %")
    print("Top 3 Welt:", [(r["name_en"], r["pct"]) for r in regal_liste[:3]])
    print(f"Buchbreiten {min(breiten)}–{max(breiten)} %; Bücher ohne Aufgaben: {ohne_aufgaben}")
    print("Prüfsumme (Hauptgruppe − Summe Einzelberufe), größte Abweichungen:")
    for p in sorted(pruef, key=lambda p: -abs(p[3]))[:5]:
        print(f"  SOC {p[0]}: {p[1]} − {p[2]} = {p[3]}")
    print(f"Fehlende Übersetzungen: Gruppen {len(fehlend['gruppen'])}, Berufe {len(fehlend['berufe'])}, "
          f"Aufgaben {len(fehlend['aufgaben'])}")
    if listen_ordner:
        listen_ordner.mkdir(parents=True, exist_ok=True)
        for k, v in fehlend.items():
            (listen_ordner / f"fehlend-{k}.json").write_text(
                json.dumps(v, ensure_ascii=False, indent=0), encoding="utf-8")


if __name__ == "__main__":
    main(sys.argv[1:])
