#!/usr/bin/env node
// Schnelle Sichtprüfung ohne Rendern: öffnet build/index.html in Chromium, springt in jeder Szene an Zeitpunkte
// (Anteile der Szenendauer) und speichert Bildschirmfotos. Prüft außerdem den Kontrast aller sichtbaren Texte
// gegen ihre Hintergrundfarbe (WCAG AA: 4,5 : 1, großer Text ab 24 px: 3 : 1).
//   node scripts/genrefilm/vorschau.mjs --film kap02-token-genres [--anteile 0.5,0.97] [--szenen s1,s4]
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { args, findeFilm } from "./pipeline.mjs";

// Playwright: lokal installiert oder global (im Container vorinstalliert)
let chromium;
try { ({ chromium } = await import("playwright")); }
catch { ({ chromium } = createRequire(execSync("npm root -g").toString().trim() + "/")("playwright")); }

const a = args();
const src = findeFilm(a.film);
const build = join(src, "build");
const zp = JSON.parse(readFileSync(join(build, "zeitplan.json"), "utf8"));
const anteile = String(a.anteile || "0.62").split(",").map(Number);
const nur = a.szenen ? String(a.szenen).split(",") : null;
const out = join(build, "vorschau");
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
const fehler = [];
page.on("pageerror", (e) => fehler.push(String(e)));
await page.goto("file://" + join(build, "index.html"));
await page.waitForFunction(() => !!(window.__timelines && window.__timelines.main), null, { polling: 100, timeout: 15000 });
const bericht = [];
for (const z of zp) {
  if (nur && !nur.includes(z.id)) continue;
  for (const f of anteile) {
    const t = z.start + f * z.dauer;
    const kontrast = await page.evaluate(({ id, t }) => {
      document.querySelectorAll("section.szene").forEach((s) => (s.style.display = s.id === id ? "" : "none"));
      window.__timelines.main.seek(t, false);
      const rgb = (s) => { const m = s.match(/[\d.]+/g); return m ? m.map(Number) : [0, 0, 0, 0]; };
      const lum = ([r, g, b]) => { const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const hinter = (el) => { // erste deckende Hintergrundfarbe nach oben; Verläufe: erster Farbstopp
        for (let e = el; e; e = e.parentElement) {
          const cs = getComputedStyle(e);
          const c = rgb(cs.backgroundColor); if ((c[3] ?? 1) > 0.6) return c;
          const g = cs.backgroundImage.match(/rgba?\([^)]*\)|#[0-9a-f]{6}/i);
          if (g && g[0].startsWith("rgb")) return rgb(g[0]);
          const bg = e.querySelector?.(":scope > .bg");
          if (bg) { const gb = getComputedStyle(bg); const c2 = rgb(gb.backgroundColor); if ((c2[3] ?? 1) > 0.6) return c2; const g2 = gb.backgroundImage.match(/rgba?\([^)]*\)/); if (g2) return rgb(g2[0]); }
        }
        return [255, 255, 255];
      };
      const res = [];
      document.querySelectorAll(`#${id} *`).forEach((el) => {
        const txt = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join("");
        if (!txt) return;
        let o = 1; for (let e = el; e; e = e.parentElement) o *= parseFloat(getComputedStyle(e).opacity);
        if (o < 0.9) return;
        const cs = getComputedStyle(el);
        const L1 = lum(rgb(cs.color)), L2 = lum(hinter(el));
        const k = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
        const gross = parseFloat(cs.fontSize) >= 24;
        res.push({ txt: txt.slice(0, 30), k: +k.toFixed(2), ok: k >= (gross ? 3 : 4.5) });
      });
      return res;
    }, { id: z.id, t });
    const datei = join(out, `${z.id}-${String(Math.round(f * 100)).padStart(3, "0")}.png`);
    await page.screenshot({ path: datei });
    const schlecht = kontrast.filter((k) => !k.ok);
    bericht.push(`${z.id} @${f}: ${kontrast.length} Texte, min. Kontrast ${Math.min(...kontrast.map((k) => k.k)).toFixed(2)}${schlecht.length ? "  NICHT AA: " + schlecht.map((k) => `${k.txt} (${k.k})`).join("; ") : ""}`);
  }
}
await browser.close();
writeFileSync(join(build, "kontrast.txt"), bericht.join("\n") + "\n");
console.log(bericht.join("\n"));
console.log(fehler.length ? "Seitenfehler: " + fehler.join(" | ") : "Keine Seitenfehler");
