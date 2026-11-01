"""Wortzahl je Abschnitt eines Quarto-Kapitels (Zählweise S1a, 01.11.2026).
Zählt Fließtext einschließlich Tabellen, Kästen und Druck-Bildunterschriften;
ohne iframe-Zeilen, HTML-Tags, URLs, Attribut-Klammern und Zitierschlüssel.
Aufruf: python3 zaehle_kapitel.py kapitel02.qmd"""
import re, sys
L = open(sys.argv[1], encoding='utf-8').read().split('\n')
def wc(s):
    s = re.sub(r'<[^>]+>', '', s); s = re.sub(r'https?://\S+', '', s)
    s = re.sub(r'\{[#.][^}]*\}', '', s); s = re.sub(r'@[\w:-]+', '', s)
    return len(re.findall(r'[A-Za-zÄÖÜäöüß0-9]+', s))
sec, tot = 'kopf', {}
for l in L:
    m = re.match(r'^#{1,4} .*\{#(sec-[\w-]+)', l)
    if m: sec = m.group(1); tot.setdefault(sec, 0); continue
    if '<iframe' in l or re.fullmatch(r'\s*:+.*', l): continue
    tot[sec] = tot.get(sec, 0) + wc(l)
for k, v in tot.items(): print(f'{k:32s} {v:6d}')
print('SUMME', sum(tot.values()))
