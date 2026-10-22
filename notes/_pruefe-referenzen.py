#!/usr/bin/env python3
"""Prüft die DOIs (Crossref, DataCite) und arXiv-IDs einer BibTeX-Datei und vergleicht Titel.
Aufruf: python3 notes/_pruefe-referenzen.py notes/datei.bib
Für Roman in Laiensprache: Das Skript fragt für jeden Literatureintrag bei der zentralen
DOI-Datenbank nach, ob der Eintrag existiert und ob der dort hinterlegte Titel zu unserem passt.
So fallen erfundene oder vertippte Quellen auf, bevor sie ins Buch kommen."""
import re, sys, json, urllib.request, urllib.parse, difflib, time

def norm(t):
    t = re.sub(r"[{}\\'`^\"~]", "", t or "")
    return re.sub(r"[^a-z0-9]+", " ", t.lower()).strip()

def get(url, hdr=None):
    req = urllib.request.Request(url, headers=hdr or {"User-Agent": "genai4teaching-refcheck/1.0 (mailto:roman.bartnik@th-koeln.de)"})
    with urllib.request.urlopen(req, timeout=40) as r:
        return r.read().decode("utf-8", "replace")

def crossref(doi):
    try:
        d = json.loads(get("https://api.crossref.org/works/" + urllib.parse.quote(doi)))["message"]
        return (d.get("title") or [""])[0], "crossref"
    except Exception:
        return None, None

def datacite(doi):
    try:
        d = json.loads(get("https://api.datacite.org/dois/" + urllib.parse.quote(doi)))["data"]["attributes"]
        return (d.get("titles") or [{}])[0].get("title", ""), "datacite"
    except Exception:
        return None, None

def arxiv(aid):
    try:
        x = get("https://export.arxiv.org/api/query?id_list=" + aid)
        m = re.findall(r"<title>(.*?)</title>", x, re.S)
        return (m[1].strip() if len(m) > 1 else ""), "arxiv"
    except Exception:
        return None, None

import subprocess
csl = json.loads(subprocess.run(["pandoc", sys.argv[1], "-t", "csljson"], capture_output=True, text=True, check=True).stdout)
def fields(e):
    d = {"title": e.get("title", ""), "doi": e.get("DOI"), "url": e.get("URL")}
    m = re.search(r"arXiv[:.](\d{4}\.\d{4,5})", json.dumps(e))
    if m: d["eprint"] = m.group(1)
    return d
entries = [(e["id"], fields(e)) for e in csl]
bad = 0
for key, f in entries:
    title = f.get("title", "")
    doi, eprint = f.get("doi"), f.get("eprint")
    found, src = None, None
    if eprint:
        found, src = arxiv(eprint)
    if found is None and doi:
        found, src = crossref(doi)
        if found is None:
            found, src = datacite(doi)
    if found is None and not doi and not eprint:
        print(f"-  {key}: keine DOI/arXiv-ID (URL-Quelle: {f.get('url','?')[:60]})"); continue
    if found is None:
        print(f"!! {key}: {doi or eprint} NICHT auflösbar"); bad += 1; continue
    sim = difflib.SequenceMatcher(None, norm(title), norm(found)).ratio()
    flag = "ok" if sim > 0.8 else "??"
    if flag == "??": bad += 1
    print(f"{flag} {key} [{src}] {sim:.2f} | {found[:90]}")
    time.sleep(0.3)
print(f"\n{len(entries)} Einträge, {bad} auffällig")
