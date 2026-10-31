// Druckzwillinge, QR-Codes und Daten-CSV für skill-karte, agenten-engpass und ki-entwicklung.
// Aufruf aus dem Repo-Wurzelordner: node scripts/druck-agenten-animationen.cjs (braucht playwright und qrcode),
// danach python3 scripts/qr-in-abbildung.py, das den QR-Code rechts unten in die Abbildung setzt.
const { chromium } = require('playwright');
const QR = require('qrcode');
const fs = require('fs');
const path=require('path'); const REPO=path.resolve(__dirname,'..')+'/';
const R='file://'+REPO+'interactions/';
const BASE='https://th-koln-bartnik.github.io/genai4teaching/interactions/';
(async () => {
  const b = await chromium.launch();
  async function shot(url, sel, out, w){ const p=await b.newPage({viewport:{width:w,height:900},deviceScaleFactor:2.5});
    await p.goto(R+url); await p.waitForTimeout(1200); await p.locator(sel).first().screenshot({path:REPO+'images/druck/'+out}); await p.close(); }
  await shot('skill-karte.html#druck','svg#buehne','skill-karte.png',1000);
  await shot('agenten-engpass.html#druck','svg#buehne','agenten-engpass.png',1000); // Kugel-Fassung (30.10.2026): Bilanz bei t = Standbild, beide Laufzettel
  await shot('ki-entwicklung.html?zeige=zeithorizont#druck','#c1','ki-zeithorizont.png',920);
  await shot('ki-entwicklung.html?zeige=kosten#druck','#k2bild','ki-kosten.png',920); // Treppe und vier kleine Raster
  await shot('ki-entwicklung.html?zeige=arbeitsweisen#druck','#c3','ki-arbeitsweisen.png',920);
  await shot('ki-arbeitsweisen-durchspiel.html#druck','#druckblatt','ki-durchspiel.png',1000);
  await shot('tutor-kosten.html#druck','#c','tutor-kosten.png',920); // Kapitel 2.4, @fig-tutor-kosten
  // Daten als CSV
  const p=await b.newPage(); await p.goto(R+'ki-entwicklung.html'); const d=await p.evaluate(()=>window.__ki);
  fs.mkdirSync(REPO+'data',{recursive:true});
  fs.writeFileSync(REPO+'data/metr-time-horizon-1-1.csv','modell,veroeffentlicht,spitzenmodell,horizont_min,ki95_unten_min,ki95_oben_min\n'+d.METR.map(r=>[JSON.stringify(r.n),r.d,r.s,r.v,r.lo,r.hi].join(',')).join('\n')+'\n');
  fs.writeFileSync(REPO+'data/epoch-gpqa-kosten-75.csv','modell,datum,genauigkeit_prozent,kosten_cent_je_frage\n'+d.EPOCH.map(r=>[JSON.stringify(r.n),r.d,r.a,r.c].join(',')).join('\n')+'\n');
  await b.close();
  for (const [f,u] of [['skill-karte','skill-karte.html'],['agenten-engpass','agenten-engpass.html'],['ki-zeithorizont','ki-entwicklung.html?zeige=zeithorizont'],['ki-kosten','ki-entwicklung.html?zeige=kosten'],['tutor-kosten','tutor-kosten.html'],['ki-arbeitsweisen','ki-entwicklung.html?zeige=arbeitsweisen'],['ki-durchspiel','ki-arbeitsweisen-durchspiel.html']])
    await QR.toFile(REPO+'images/qr/qr-'+f+'.png', BASE+u, { errorCorrectionLevel: "M", margin: 2, width: 600, color: { dark: "#000000", light: "#ffffff" } });
})();
