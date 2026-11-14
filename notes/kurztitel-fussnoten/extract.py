import re,json,sys
files="index.qmd kapitel01-einleitung.qmd kapitel02-grundlagen.qmd kapitel03-automation.qmd kapitel04-lernmechanismen.qmd kapitel05-4d-phasen.qmd kapitel06-rollen.qmd kapitel07-artefakte.qmd kapitel07-appendix02-prompt-sammlung.qmd anhang-primer.qmd".split()
out=[]
for f in files:
    L=open(f).read().split('\n')
    i=0
    while i<len(L):
        l=L[i]
        # image figure with id
        m=re.match(r'\s*!\[',l)
        if m:
            # gather until ]( ... ){...}
            j=i; buf=l
            while not re.search(r'\]\([^)]*\)\{[^}]*\}',buf) and j<i+15 and j+1<len(L):
                j+=1; buf+='\n'+L[j]
            mm=re.search(r'!\[(.*)\]\(([^)]*)\)\{([^}]*)\}',buf,re.S)
            if mm:
                idm=re.search(r'#((fig)-[\w-]+)',mm.group(3))
                out.append(dict(file=f,line=i+1,kind='fig-img',id=idm.group(1) if idm else None,cap=mm.group(1),src=mm.group(2),attrs=mm.group(3)))
            i=j+1; continue
        m=re.match(r'\s*(:{3,})\s*\{#(fig-[\w-]+)',l)
        if m:
            # find closing fence of same length at same nesting: naive - find caption = last non-empty para before matching close
            depth=0; j=i
            fence=m.group(1)
            k=i+1; d=1
            while k<len(L):
                s=L[k].strip()
                if re.match(r'^:{3,}\s*\{',s) or re.match(r'^:{3,}\s*\w',s): d+=1
                elif re.match(r'^:{3,}\s*$',s):
                    d-=1
                    if d==0: break
                k+=1
            # caption: last paragraph lines before k
            p=k-1
            while p>i and L[p].strip()=='' : p-=1
            e=p
            while p>i and L[p].strip()!='': p-=1
            cap='\n'.join(L[p+1:e+1])
            out.append(dict(file=f,line=i+1,kind='fig-div',id=m.group(2),cap=cap,capline=p+2,end=k+1))
            i+=1; continue
        m=re.match(r'^:\s+(.*?)\s*\{(#tbl-[^}]*)\}\s*$',l)
        if m:
            out.append(dict(file=f,line=i+1,kind='tbl',id=re.search(r'#(tbl-[\w-]+)',m.group(2)).group(1),cap=m.group(1),attrs=m.group(2)))
        i+=1
json.dump(out,open('/home/claude/work/caps.json','w'),ensure_ascii=False,indent=1)
print(len(out))
for o in out: print(o['file'][:12],o['line'],o['kind'],o['id'],len(o['cap']))
