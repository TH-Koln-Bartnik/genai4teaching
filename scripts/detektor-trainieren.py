# Detektor-Duell (Kap. 5, S4): offener Lehr-Detektor für „Mensch oder KI?“
#
# Laiensicht: Das Skript bringt einem sehr einfachen Rechenverfahren bei, menschliche
# Schüleraufsätze von KI-Texten zu unterscheiden. Es schaut nur auf neun zählbare
# Eigenschaften (Satzlängen, Wortvielfalt, Flüchtigkeitsfehler …) und gewichtet sie.
# Danach prüft es das Verfahren an Texten, die es beim Lernen nicht gesehen hat, und
# schreibt Gewichte, Spieltexte und Kennzahlen als JSON für das Browserspiel.
#
# Technisch: logistische Regression (scikit-learn) auf standardisierten Merkmalen,
# Klassengewichte „balanced“. Alle Auswahlen über festen Startwert. Keine Nachjustierung.
#
# Aufruf (Repo-Wurzel):
#   python3 -I scripts/detektor-trainieren.py \
#     --persuade-train <train.csv> --persuade-test <persuade_corpus_2.0_test.csv> \
#     --liang <all_data.json> --ki _src/detektor/ki-essays.jsonl --aus _src/detektor \
#     [--quellen-aus <datei.json>]   # optional: Volltexte der Spieltexte für den Wörtlich-Test
import argparse, hashlib, json, math, random, re, sys

import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression

SEED = 20261102

# ---------------------------------------------------------------- Merkmale
# Dieselben Regeln stehen in interactions/detektor-duell.html (script#detektor-kern).
FLUECHTIG = {
    "dont", "cant", "wont", "im", "doesnt", "isnt", "didnt", "thats", "theyre", "youre",
    "wouldnt", "couldnt", "shouldnt", "arent", "wasnt", "ive", "alot", "becuase", "beacuse",
    "thier", "definately", "recieve", "untill", "wich", "beleive", "ect", "u", "ur",
}
ICH = {"i", "me", "my", "mine", "myself"}
WORT_RE = re.compile(r"[A-Za-z]+(?:'[A-Za-z]+)*")
MERKMALE = [
    "satzlaenge_mittel", "satzlaenge_streuung", "wortvielfalt", "lange_woerter",
    "kommas_je_satz", "fluechtigkeit", "ich_anteil", "kontraktionen", "ki_wendungen",
]


def normalisiere(t):
    t = t.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    return re.sub(r"\s+", " ", t).strip()


def saetze(t):
    return [s for s in re.split(r"(?<=[.!?])\s+", t) if WORT_RE.search(s)]


def auszug(text, mind=110):
    """Erste ganze Sätze, bis mindestens `mind` Wörter erreicht sind (Wortzählung per WORT_RE)."""
    out, n = [], 0
    for s in saetze(normalisiere(text)):
        out.append(s)
        n += len(WORT_RE.findall(s))
        if n >= mind:
            break
    return " ".join(out)


def merkmale(t, wendungen):
    t = normalisiere(t)
    ss = saetze(t)
    w = WORT_RE.findall(t)
    n = max(len(w), 1)
    lens = [len(WORT_RE.findall(s)) for s in ss] or [n]
    m = sum(lens) / len(lens)
    sd = math.sqrt(sum((x - m) ** 2 for x in lens) / len(lens))
    erste = [x.lower() for x in w[:100]]
    vielfalt = len(set(erste)) / max(len(erste), 1)
    lang = sum(1 for x in w if len(x.replace("'", "")) >= 7) / n
    kommas = t.count(",") / max(len(ss), 1)
    klein_i = sum(1 for x in w if x == "i")
    klein_start = sum(1 for s in ss if re.match(r"^[^A-Za-z]*[a-z]", s))
    fehler = sum(1 for x in w if x.lower() in FLUECHTIG)
    fluechtig = 100 * (klein_i + klein_start + fehler) / n
    ich = sum(1 for x in w if x.lower() in ICH) / n
    kontr = 100 * sum(1 for x in w if "'" in x) / n
    ki = 100 * sum(1 for x in w if x.lower() in wendungen) / n
    return [m, sd, vielfalt, lang, kommas, fluechtig, ich, kontr, ki]


def ki_wendungen_ableiten(mensch, ki, k=15):
    """Wörter mit dem größten geglätteten Log-Odds-Verhältnis KI vs. Mensch (nur Trainingstexte,
    nur themengleiche eigene KI-Essays), mindestens in 5 KI-Texten. Funktionswörter ausgeschlossen."""
    stopp = set("the a an and or but of to in on for with as at by from is are was were be been it this that "
                "these those they them their there he she we you your our his her its not no so if than then "
                "can could would should will may might must do does did have has had more most also very".split())
    def zaehle(texte):
        c, df = {}, {}
        for t in texte:
            ws = [x.lower() for x in WORT_RE.findall(normalisiere(t))]
            for x in ws:
                c[x] = c.get(x, 0) + 1
            for x in set(ws):
                df[x] = df.get(x, 0) + 1
        return c, df
    cm, _ = zaehle(mensch)
    ck, dfk = zaehle(ki)
    nm, nk = sum(cm.values()), sum(ck.values())
    kand = []
    for x, f in ck.items():
        if dfk.get(x, 0) < 5 or x in stopp or len(x) < 4:
            continue
        lo = math.log((f + 0.5) / nk) - math.log((cm.get(x, 0) + 0.5) / nm)
        kand.append((lo, x))
    kand.sort(reverse=True)
    return [x for _, x in kand[:k]]


def sha(t):
    return hashlib.sha256(t.encode("utf-8")).hexdigest()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--persuade-train", required=True)
    ap.add_argument("--persuade-test", required=True)
    ap.add_argument("--liang", required=True)
    ap.add_argument("--ki", required=True)
    ap.add_argument("--aus", required=True)
    ap.add_argument("--quellen-aus")
    a = ap.parse_args()
    rng = random.Random(SEED)

    cols = ["essay_id_comp", "full_text", "holistic_essay_score", "prompt_name", "grade_level"]
    p = pd.concat([pd.read_csv(f, usecols=cols) for f in (a.persuade_train, a.persuade_test)])
    p = p.drop_duplicates("essay_id_comp")
    p = p[p.grade_level.isin([11, 12])].sort_values("essay_id_comp").reset_index(drop=True)
    aufgaben = sorted(p.prompt_name.unique())
    assert aufgaben == ["Distance learning", "Summer projects"], aufgaben

    ki = [json.loads(z) for z in open(a.ki, encoding="utf-8")]
    liang = json.load(open(a.liang, encoding="utf-8"))
    L = {}
    for x in liang:
        L.setdefault(x["domain"], []).append(x["text"])

    # --- Auswahl Spieltexte und Zurückhaltung (fester Startwert, vor jedem Training)
    spiel_mensch, rest = [], []
    for auf in aufgaben:
        g = p[p.prompt_name == auf]
        ids = list(g.essay_id_comp)
        niedrig = sorted(g[g.holistic_essay_score <= 3].essay_id_comp)
        hoch = sorted(g[g.holistic_essay_score >= 4].essay_id_comp)
        spiel_mensch += [rng.choice(niedrig), rng.choice(hoch)]
    druck_mensch = None
    halt_ki, spiel_ki = [], []
    for auf in aufgaben:
        for v in ("a", "b"):
            zelle = sorted([x["id"] for x in ki if x["aufgabe"] == auf and x["variante"] == v])
            zwei = rng.sample(zelle, 2)
            halt_ki += zwei
            spiel_ki.append(zwei[0])
    train_ki = [x for x in ki if x["id"] not in halt_ki]
    assert len(train_ki) == 32 and len(halt_ki) == 8

    mensch_train, mensch_eval = [], []
    for auf in aufgaben:
        ids = sorted(set(p[p.prompt_name == auf].essay_id_comp) - set(spiel_mensch))
        rng.shuffle(ids)
        mensch_train += ids[:200]
        mensch_eval += ids[200:350]
    # ältere KI-Texte (Liang): 80 % Training, 20 % zurückgehalten
    alt_train, alt_eval = [], []
    for dom in ("CollegeEssay_gpt3_31", "CS224N_gpt3_145"):
        idx = list(range(len(L[dom])))
        rng.shuffle(idx)
        k = round(0.8 * len(idx))
        alt_train += [(dom, i) for i in idx[:k]]
        alt_eval += [(dom, i) for i in idx[k:]]

    toefl = list(range(len(L["TOEFL_real_91"])))
    college = list(range(len(L["CollegeEssay_real_70"])))
    spiel_toefl = sorted(rng.sample(toefl, 2))
    spiel_college = sorted(rng.sample(college, 2))
    # Druckkasten: ein weiterer Mensch-Auszug (andere ID) und ein weiterer zurückgehaltener KI-Text
    druck_mensch = rng.choice(sorted(set(mensch_eval)))
    druck_ki = rng.choice(sorted(set(halt_ki) - set(spiel_ki)))

    P = p.set_index("essay_id_comp")
    text_p = lambda i: P.loc[i, "full_text"]
    text_k = {x["id"]: x["text"] for x in ki}

    # --- KI-Wendungen nur aus Trainingstexten (themengleich)
    wend = ki_wendungen_ableiten([auszug(text_p(i)) for i in mensch_train],
                                 [auszug(x["text"]) for x in train_ki])

    X, y = [], []
    for i in mensch_train:
        X.append(merkmale(auszug(text_p(i)), set(wend))); y.append(0)
    for x in train_ki:
        X.append(merkmale(auszug(x["text"]), set(wend))); y.append(1)
    for dom, i in alt_train:
        X.append(merkmale(auszug(L[dom][i]), set(wend))); y.append(1)
    X, y = np.array(X), np.array(y)
    mu, sd = X.mean(0), X.std(0)
    sd[sd == 0] = 1
    clf = LogisticRegression(class_weight="balanced", max_iter=5000, C=1.0)
    clf.fit((X - mu) / sd, y)
    coef, b0 = clf.coef_[0], clf.intercept_[0]

    def wkt(t):
        z = (np.array(merkmale(t, set(wend))) - mu) / sd
        return float(1 / (1 + math.exp(-(float(z @ coef) + b0))))

    def beitraege(t):
        z = (np.array(merkmale(t, set(wend))) - mu) / sd
        return [float(v) for v in z * coef]

    # --- Bewertung auf zurückgehaltenen Texten
    def quote(texte, ki_label):
        ps = [wkt(auszug(t)) for t in texte]
        als_ki = sum(1 for q in ps if q >= 0.5)
        n = len(ps)
        return {"n": n, "als_ki": als_ki, "anteil_als_ki": round(als_ki / n, 3),
                "richtig": (als_ki if ki_label else n - als_ki)}
    kz = {
        "mensch_persuade": quote([text_p(i) for i in mensch_eval], False),
        "ki_aktuell": quote([text_k[i] for i in halt_ki], True),
        "ki_alt": quote([L[d][i] for d, i in alt_eval], True),
        "toefl_mensch": quote(L["TOEFL_real_91"], False),
        "college_mensch": quote(L["CollegeEssay_real_70"], False),
        "training": {"mensch": len(mensch_train), "ki_eigene": len(train_ki), "ki_alt": len(alt_train)},
    }
    n_eval = sum(kz[k]["n"] for k in ("mensch_persuade", "ki_aktuell", "ki_alt"))
    richtig = sum(kz[k]["richtig"] for k in ("mensch_persuade", "ki_aktuell", "ki_alt"))
    kz["trefferquote_gesamt"] = {"n": n_eval, "richtig": richtig, "anteil": round(richtig / n_eval, 3)}

    # --- Spieltexte
    kurz = {"Distance learning": "Fernunterricht: Sollten Schülerinnen und Schüler von zu Hause aus am Unterricht teilnehmen können?",
            "Summer projects": "Sommerprojekte: Sollten Lehrkräfte oder die Schülerinnen und Schüler selbst die Ferienprojekte gestalten?"}
    def eintrag(herkunft, quelle, id_, aufgabe, text, mind=110):
        t = auszug(text, mind)
        return {"herkunft": herkunft, "quelle": quelle, "id": id_, "aufgabe": aufgabe,
                "aufgabe_de": kurz.get(aufgabe, aufgabe), "text": t, "woerter": len(WORT_RE.findall(t)),
                "p_ki": round(wkt(t), 6), "beitraege": [round(v, 6) for v in beitraege(t)]}
    r1 = [eintrag("Mensch", "PERSUADE 2.0, Klasse " + str(int(P.loc[i, "grade_level"])), i, P.loc[i, "prompt_name"], text_p(i)) for i in spiel_mensch]
    kim = {x["id"]: x for x in ki}
    r1 += [eintrag("KI", f"Claude Opus 5.5, Prompt-Variante {kim[i]['variante']}", i, kim[i]["aufgabe"], text_k[i]) for i in spiel_ki]
    rng.shuffle(r1)
    toefl_de = "TOEFL-Aufsatz (Englisch als Fremdsprache): Kochen Sie lieber selbst oder essen Sie auswärts? u. ä."
    r2 = [eintrag("Mensch", "TOEFL-Aufsatz (Englisch als Fremdsprache), Liang et al. 2023", f"TOEFL_real_91#{i}", "TOEFL", L["TOEFL_real_91"][i]) for i in spiel_toefl]
    r2 += [eintrag("Mensch", "US-College-Bewerbungsaufsatz (Muttersprache Englisch), Liang et al. 2023", f"CollegeEssay_real_70#{i}", "College", L["CollegeEssay_real_70"][i]) for i in spiel_college]
    for e in r2:
        e["aufgabe_de"] = "Prüfungsaufsatz zum Englischtest TOEFL" if e["aufgabe"] == "TOEFL" else "Bewerbungsaufsatz für ein US-College"
    rng.shuffle(r2)
    druck = [eintrag("Mensch", "PERSUADE 2.0, Klasse " + str(int(P.loc[druck_mensch, "grade_level"])), druck_mensch, P.loc[druck_mensch, "prompt_name"], text_p(druck_mensch), 70),
             eintrag("KI", f"Claude Opus 5.5, Prompt-Variante {kim[druck_ki]['variante']}", druck_ki, kim[druck_ki]["aufgabe"], text_k[druck_ki], 70)]
    rng.shuffle(druck)

    modell = {"merkmale": MERKMALE, "mittel": [float(v) for v in mu], "streuung": [float(v) for v in sd],
              "gewichte": [float(v) for v in coef], "achsenabschnitt": float(b0), "ki_wendungen": wend,
              "fluechtig": sorted(FLUECHTIG), "startwert": SEED,
              "train_ids_mensch": sorted(mensch_train), "train_ids_ki": sorted(x["id"] for x in train_ki),
              "halt_ids_ki": sorted(halt_ki)}
    pruef = []
    for t in [e["text"] for e in r1 + r2] + [auszug(text_p(i)) for i in mensch_eval[:4]] + [auszug(text_k[i]) for i in halt_ki[:4]]:
        pruef.append({"text": t, "merkmale": merkmale(t, set(wend)), "p_ki": wkt(t)})
    json.dump(modell, open(f"{a.aus}/modell.json", "w"), ensure_ascii=False, indent=1)
    json.dump({"runde1": r1, "runde2": r2, "druck": druck}, open(f"{a.aus}/spieltexte.json", "w"), ensure_ascii=False, indent=1)
    json.dump(kz, open(f"{a.aus}/kennzahlen.json", "w"), ensure_ascii=False, indent=1)
    json.dump(pruef, open(f"{a.aus}/pruef-texte.json", "w"), ensure_ascii=False, indent=1)
    if a.quellen_aus:
        q = {i: text_p(i) for i in spiel_mensch + [druck_mensch]}
        q.update({f"TOEFL_real_91#{i}": L["TOEFL_real_91"][i] for i in spiel_toefl})
        q.update({f"CollegeEssay_real_70#{i}": L["CollegeEssay_real_70"][i] for i in spiel_college})
        json.dump(q, open(a.quellen_aus, "w"), ensure_ascii=False)

    # Zusammenfassung (klein, für den Kontext)
    print("Wendungen:", ", ".join(wend))
    for m, g in zip(MERKMALE, coef):
        print(f"  {m:22s} {g:+.3f}")
    print(json.dumps(kz, ensure_ascii=False))
    for nm, rr in (("R1", r1), ("R2", r2), ("Druck", druck)):
        for e in rr:
            print(nm, e["herkunft"], e["id"], e["woerter"], "p_ki=%.3f" % e["p_ki"])


if __name__ == "__main__":
    sys.exit(main())
