import json,re,collections
R=json.load(open('/home/claude/work/vorschlag.json'))
C=json.load(open('/home/claude/work/caps.json'))
raw={(c['file'],c['line']):c for c in C}
root='/home/claude/genai4teaching/'
byfile=collections.defaultdict(list)
for r in R:
    if r['file'].startswith('_einbau'): continue
    byfile[r['file']].append(r)
log=[]
for f,rs in byfile.items():
    L=open(root+f).read().split('\n')
    for r in sorted(rs,key=lambda x:-x['line']):
        c=raw[(r['file'],r['line'])]
        i=r['line']-1
        note=r['fussnote']
        note=re.sub(r'\s*\[(bisher|Quellenzeile)[^\]]*\]','',note).strip()
        if note.startswith('—'): note=''
        lab=('abb-' if r['kind'].startswith('fig') else 'tab-')+r['id'][4:]
        if r['id'] in ('fig-primer-eoq','fig-primer-folien'): lab+=f"-{r['line']}"
        neu=r['titel']+(f'[^{lab}]' if note else '')
        defn=f'[^{lab}]: {note}' if note else None
        if r['kind']=='fig-img':
            # find end line of image
            j=i; buf=L[i]
            while not re.search(r'\]\([^)]*\)\{[^}]*\}',buf): j+=1; buf+='\n'+L[j]
            seg='\n'.join(L[i:j+1])
            assert seg.count('!['+c['cap']+'](')==1,(r['id'],seg[:80])
            seg=seg.replace('!['+c['cap']+'](','!['+neu+'](',1)
            seg=re.sub(r'\s*fig-scap="[^"]*"','',seg)
            if r['id'] in ('fig-spacing','fig-interleaving','fig-testing-effect'):
                # drop following Quelle line
                k=j+1
                while L[k].strip()=='': k+=1
                assert L[k].startswith('*Quelle: Erstellt mit Gemini'),L[k]
                del L[j+1:k+1]
            L[i:j+1]=seg.split('\n')
            ins=j+len(seg.split('\n'))-(j-i+1)+1
        elif r['kind']=='fig-div':
            cl=c['capline']-1; e=cl+len(c['cap'].split('\n'))
            assert '\n'.join(L[cl:e])==c['cap']
            L[cl:e]=[neu]
            ins=c['end']-(e-cl-1)   # line after closing fence (0-based index = end)
        else:
            m=re.match(r'^(:\s+)(.*?)(\s*\{#tbl-[^}]*\}\s*)$',L[i])
            assert m and m.group(2)==c['cap'],(r['id'],L[i][:80])
            L[i]=m.group(1)+neu+' '+m.group(3).strip()
            ins=i+1
        if defn:
            L[ins:ins]=['',defn]
        log.append((f,r['id'],lab))
    open(root+f,'w').write('\n'.join(L))
print(len(log))
