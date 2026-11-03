"""Wortzahl je Abschnitt wie zaehle_kapitel.py, aber nur der Druckfassung (S1b, 01.11.2026):
überspringt Blöcke ::: {.content-visible when-format="html"} und Spans [...]{.content-visible when-format="html"}.
Aufruf: python3 zaehle_druck.py kapitel02-grundlagen.qmd"""
import re, sys
L = open(sys.argv[1], encoding='utf-8').read().split('\n')
def wc(s):
    s = re.sub(r'\[[^\]]*\]\{\.content-visible when-format="html"\}', '', s)
    s = re.sub(r'<[^>]+>', '', s); s = re.sub(r'https?://\S+', '', s)
    s = re.sub(r'\{[#.][^}]*\}', '', s); s = re.sub(r'@[\w:-]+', '', s)
    return len(re.findall(r'[A-Za-zÄÖÜäöüß0-9]+', s))
sec, tot, stapel = 'kopf', {}, []
for l in L:
    m = re.match(r'^(:{3,})\s*(.*)$', l)
    if m:
        n, rest = len(m.group(1)), m.group(2)
        if rest: stapel.append((n, 'when-format="html"' in rest))
        elif stapel: stapel.pop()
        continue
    if any(h for _, h in stapel): continue
    m = re.match(r'^#{1,4} .*\{#(sec-[\w-]+)', l)
    if m: sec = m.group(1); tot.setdefault(sec, 0); continue
    if '<iframe' in l: continue
    tot[sec] = tot.get(sec, 0) + wc(l)
for k, v in tot.items(): print(f'{k:32s} {v:6d}')
print('SUMME', sum(tot.values()))
