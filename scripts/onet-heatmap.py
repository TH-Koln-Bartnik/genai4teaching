"""Daten für die interaktive Abbildung 3.1 „Was für Aufgaben erledigen Lehrende?“ (Kap. 3).

Laiensicht: Die Abbildung zeigt die 25 Aufgaben, die die US-Berufsdatenbank O*NET für
Hochschullehrende der Wirtschaftswissenschaften (Business Teachers, Postsecondary,
25-1011.00) auflistet, als farbige Tabelle (Heatmap): je dunkler eine Zelle, desto größer
der Wert. Dieses Skript liest zwei öffentliche Tabellen, zieht die Zahlen für genau diese
25 Aufgaben heraus und schreibt sie in eine kleine JSON-Datei (ein Textformat für Daten);
dieselben Zahlen setzt es in die Webseite interactions/onet-heatmap.html ein. Kein Wert
stammt aus dem Gedächtnis eines Menschen oder eines Sprachmodells.

Quellen:
- O*NET 31.0 Database (CC BY 4.0, USDOL/ETA), https://www.onetcenter.org/database.html:
  task_statements.csv (Aufgabentexte), task_ratings.csv (Wichtigkeit IM 1–5, Häufigkeit
  FT in sieben Stufen, befragt wurden Stelleninhaber, Stand 08/2019).
- Anthropic Economic Index, Hugging Face Anthropic/EconomicIndex, release_2026_06_26,
  data/aei_claude_ai_2026-06-26.csv (CC BY); Zitation Massenkoff et al. (2026). Werte je
  O*NET-Aufgabe weltweit (geo_id GLOBAL, category_name onet, hierarchy_level 0).
  Kooperationsmuster nach Handa et al. (2025), https://doi.org/10.48550/arXiv.2503.04761.

Aufruf im Repo-Wurzelordner (die großen CSV-Dateien liegen außerhalb des Repos):
    python3 -I scripts/onet-heatmap.py <aei.csv> <task_statements.csv> <task_ratings.csv>
Ergebnis: interactions/data/onet-heatmap.json, aktualisierter Datenblock in
interactions/onet-heatmap.html und eine Kurzprüfung auf der Konsole.
"""
import json
import re
import sys
from pathlib import Path

import pandas as pd

BERUF = "25-1011.00"
MONAT = "2026-05-01"  # jüngster Monat im Release vom 26.06.2026
WURZEL = Path(__file__).resolve().parent.parent
AUSGABE = WURZEL / "interactions" / "data" / "onet-heatmap.json"
SEITE = WURZEL / "interactions" / "onet-heatmap.html"

# Deutsche Kurzfassungen, wortgleich mit der Druckabbildung images/druck/onet-aufgaben.svg
# (übersetzt und gekürzt; USDOL/ETA hat diese Änderungen weder geprüft noch gebilligt).
DE = {
    "5662": "Vorlesungen vorbereiten und halten",
    "5663": "Studienleistungen bewerten und benoten",
    "5667": "Diskussionen anregen und moderieren",
    "5665": "Kursmaterial erstellen (Syllabus, Übungen, Handouts)",
    "5670": "Fachlich auf dem Laufenden bleiben",
    "5668": "Curricula und Kursinhalte planen und überarbeiten",
    "5666": "Anwesenheit, Noten und Akten führen",
    "5681": "Forschen und publizieren",
    "5664": "Prüfungen erstellen, durchführen und bewerten",
    "5669": "Sprechstunden anbieten",
    "5673": "Mit dem Kollegium zusammenarbeiten",
    "5671": "Zu Studium und Berufsweg beraten",
    "20058": "Kurswebseiten erstellen und pflegen",
    "5674": "Mit Unternehmen kooperieren (Programme, Praktika)",
    "5676": "In Gremien der Hochschule mitarbeiten",
    "5672": "Lehrmaterial und Lehrbücher auswählen",
    "5678": "Literaturlisten zusammenstellen",
    "5677": "An Veranstaltungen teilnehmen (Campus, Region)",
    "21108": "Neue Kolleginnen und Kollegen betreuen",
    "5679": "Verwaltungsaufgaben übernehmen, etwa im Dekanat",
    "5675": "Bei Studierendengewinnung und Vermittlung mitwirken",
    "5682": "Studentische Organisationen beraten",
    "5680": "Abschluss-, Praxis- und Forschungsarbeiten betreuen",
    "5683": "Unternehmen und Behörden beraten",
    "5684": "Forschungsanträge schreiben",
}

AEI_METRIKEN = {
    "pct": "anteil",
    "collaboration_bucket_automation_pct": "automatisierung",
    "collaboration_bucket_augmentation_pct": "augmentierung",
    "collaboration_directive_pct": "anweisung",
    "collaboration_feedback_loop_pct": "rueckkopplung",
    "collaboration_task_iteration_pct": "ueberarbeiten",
    "collaboration_learning_pct": "lernen",
    "collaboration_validation_pct": "pruefen",
    "collaboration_none_pct": "ohne",
    "use_case_work_pct": "arbeit",
    "use_case_coursework_pct": "studium",
    "use_case_personal_pct": "privat",
    "human_only_time_mean": "zeit_ohne_ki_h",
    "human_with_ai_time_mean": "zeit_mit_ki_min",
    "ai_autonomy_mean": "autonomie",
}


def lade_aei(pfad):
    spalten = ["date_start", "geo_id", "category_name", "hierarchy_level", "metric_id", "value",
               "node_external_id"]
    df = pd.read_csv(pfad, usecols=spalten, dtype={"node_external_id": str})
    return df[(df.geo_id == "GLOBAL") & (df.category_name == "onet") & (df.hierarchy_level == 0)
              & (df.date_start == MONAT)]


def main(argv):
    aei_pfad, ts_pfad, tr_pfad = argv[:3]
    ts = pd.read_csv(ts_pfad, dtype=str)
    ts = ts[ts["O*NET-SOC Code"] == BERUF]
    ids = ts["Task ID"].tolist()
    assert len(ids) == 25 and set(ids) == set(DE), "O*NET-Aufgabenliste weicht ab"

    tr = pd.read_csv(tr_pfad, dtype=str)
    tr = tr[tr["O*NET-SOC Code"] == BERUF].copy()
    tr["v"] = tr["Data Value"].astype(float)
    im = tr[tr["Scale ID"] == "IM"].set_index("Task ID")["v"]
    ft = tr[tr["Scale ID"] == "FT"].pivot_table(index="Task ID", columns="Category", values="v")
    unterdrueckt = sorted(set(tr[tr["Recommend Suppress"] == "Y"]["Task ID"]))

    aei = lade_aei(aei_pfad)
    alle = aei[aei.metric_id == "pct"].copy()
    n_aufgaben = len(alle)
    alle["rang"] = alle.value.rank(ascending=False, method="min").astype(int)
    rang = alle.set_index("node_external_id")["rang"]
    mine = aei[aei.node_external_id.isin(ids)].pivot_table(
        index="node_external_id", columns="metric_id", values="value")

    aufgaben = []
    for nr, row in enumerate(ts.itertuples(index=False), start=1):
        tid = row[2]
        a = None
        if tid in mine.index and pd.notna(mine.loc[tid].get("pct")):
            m = mine.loc[tid]
            a = {neu: (None if pd.isna(m.get(alt)) else round(float(m.get(alt)), 2))
                 for alt, neu in AEI_METRIKEN.items()}
            a["rang"] = int(rang[tid])
        aufgaben.append({
            "nr": nr, "id": tid, "de": DE[tid], "en": row[3], "typ": row[4],
            "befragte": int(row[5]),
            "wichtigkeit": round(float(im[tid]), 2),
            "haeufigkeit": [round(float(ft.loc[tid, str(k)]), 1) for k in range(1, 8)],
            "aei": a,
        })

    beob = [x for x in aufgaben if x["aei"]]
    woechentlich = [x for x in aufgaben if sum(x["haeufigkeit"][3:]) > 50]
    daten = {
        "_hinweis": "Erzeugt von scripts/onet-heatmap.py; nicht von Hand ändern.",
        "beruf": {"code": BERUF, "name": "Business Teachers, Postsecondary"},
        "monat": "Mai 2026",
        "n_aufgaben_index": n_aufgaben,
        "onet_stand": "08/2019",
        "onet_unterdrueckt": unterdrueckt,
        "aufgaben": aufgaben,
    }
    AUSGABE.parent.mkdir(parents=True, exist_ok=True)
    AUSGABE.write_text(json.dumps(daten, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    if SEITE.exists():
        html = SEITE.read_text(encoding="utf-8")
        block = json.dumps(daten, ensure_ascii=False, separators=(",", ":"))
        neu, n = re.subn(r'(<script id="heatmap-daten" type="application/json">)(.*?)(</script>)',
                         lambda mt: mt.group(1) + block + mt.group(3), html, flags=re.S)
        assert n == 1, "Datenblock in onet-heatmap.html nicht gefunden"
        SEITE.write_text(neu, encoding="utf-8")

    # Kurzprüfung
    for x in aufgaben:
        s = sum(x["haeufigkeit"])
        assert 99.0 <= s <= 101.0, (x["id"], s)
        if x["aei"]:
            b = x["aei"]["automatisierung"] + x["aei"]["augmentierung"]
            assert 99.0 <= b <= 101.0, (x["id"], b)
    print(f"{len(aufgaben)} Aufgaben, davon {len(beob)} im Economic Index ({MONAT}, "
          f"{n_aufgaben} Aufgaben insgesamt); {len(woechentlich)} Aufgaben erledigt die Mehrheit "
          f"mindestens mehrmals pro Woche; O*NET-Unterdrückung empfohlen: {unterdrueckt or 'keine'}")
    for x in beob:
        a = x["aei"]
        print(f"  {x['nr']:>2} {x['de'][:44]:<44} Anteil {a['anteil']:.2f} % Rang {a['rang']:>4} "
              f"Autom. {a['automatisierung']:.0f} % Studium {a['studium']:.0f} %")


if __name__ == "__main__":
    main(sys.argv[1:])
