// Bibliothek der Prompts: Phasen, Listenansicht, Karten, Auflösung.
// Laiensicht: Dieses Skript steuert alles außer dem 3D-Raum. Der Raum (Three.js) steckt
// als Text in der Seite und wird erst geladen, wenn jemand „Rundgang starten“ klickt;
// bis dahin kostet er weder Rechenzeit noch Grafikspeicher.
import { MAKING_OF, VORLAGE } from "./texte.js";

const D = JSON.parse(document.getElementById("daten").textContent);
const $ = (s) => document.querySelector(s);
const fmt = (x, d = 2) => x.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d });
const pz = (x) => `${fmt(x)} %`;
const MONATE = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const [jahr, mon] = D.quelle.monat.split("-").map(Number);
const MONAT = `${MONATE[mon - 1]} ${jahr}`;
const EIGEN = D.eigenes_regal;
const eigen = D.regale.find((r) => r.soc === EIGEN);
const reduziert = matchMedia("(prefers-reduced-motion: reduce)").matches;
const SCHLUESSEL = "genai4teaching:s3:ansicht";

document.querySelectorAll("[data-monat]").forEach((e) => (e.textContent = MONAT));

// ---------- Höhe an die Kapitelseite melden ----------
function hoeheMelden() {
  const h = Math.ceil(document.getElementById("bibliothek").getBoundingClientRect().height) + 4;
  try { if (parent !== window) parent.postMessage({ typ: "rahmen-hoehe", id: "bibliothek-der-prompts", h }, "*"); } catch (e) { /* ohne Rahmen */ }
}
new ResizeObserver(hoeheMelden).observe(document.getElementById("bibliothek"));

// ---------- Phasen ----------
let schritt = 1;
function zeige(n) {
  schritt = Math.max(schritt, n);
  for (let i = 1; i <= 5; i++) {
    if (i <= schritt) document.getElementById("p" + i).hidden = false;
    const li = document.querySelector(`.phasen li[data-schritt="${i}"]`);
    if (i === n) li.setAttribute("aria-current", "step"); else li.removeAttribute("aria-current");
  }
  hoeheMelden();
}

// Phase 1: Vorhersage (nur im Arbeitsspeicher)
const tipp = { rang: null, anteil: null };
const rR = $("#tipp-rang"), rA = $("#tipp-anteil");
const zeigeTipp = () => {
  $("#tipp-rang-o").textContent = "Platz " + rR.value;
  $("#tipp-anteil-o").textContent = fmt(Number(rA.value), 1) + " %";
  rR.setAttribute("aria-valuetext", "Platz " + rR.value);
  rA.setAttribute("aria-valuetext", fmt(Number(rA.value), 1) + " Prozent");
};
rR.addEventListener("input", zeigeTipp); rA.addEventListener("input", zeigeTipp); zeigeTipp();
$("#tipp-fest").addEventListener("click", () => {
  tipp.rang = Number(rR.value); tipp.anteil = Number(rA.value);
  rR.disabled = rA.disabled = true; $("#tipp-fest").disabled = true;
  $("#tipp-fest").textContent = `Tipp festgehalten: Platz ${tipp.rang}, ${fmt(tipp.anteil, 1)} %`;
  zeige(2);
  document.getElementById("p2").scrollIntoView({ block: "nearest", behavior: reduziert ? "auto" : "smooth" });
});

// ---------- Ansichtswahl ----------
const webgl = (() => { try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch (e) { return false; } })();
let ansicht = "3d";
try { const g = localStorage.getItem(SCHLUESSEL); if (g === "liste" || g === "3d") ansicht = g; } catch (e) { /* kein Speicher */ }
if (!webgl || reduziert) ansicht = "liste";
function setzeAnsicht(a, merken) {
  ansicht = a;
  $("#ansicht-3d").setAttribute("aria-pressed", a === "3d");
  $("#ansicht-liste").setAttribute("aria-pressed", a === "liste");
  $("#ansicht-3d-box").hidden = a !== "3d";
  $("#ansicht-liste-box").hidden = a !== "liste";
  if (merken) try { localStorage.setItem(SCHLUESSEL, a); } catch (e) { /* kein Speicher */ }
  hoeheMelden();
}
$("#ansicht-3d").addEventListener("click", () => setzeAnsicht("3d", true));
$("#ansicht-liste").addEventListener("click", () => setzeAnsicht("liste", true));
if (!webgl) { $("#ansicht-3d").disabled = true; $("#ansicht-3d").title = "Ihr Browser unterstützt kein WebGL"; }
setzeAnsicht(ansicht, false);

// ---------- Listenansicht ----------
let geo = "welt";
function aufgabenHTML(b) {
  if (!b.aufgaben.length) return `<p class="klein" style="margin:2px 0 8px">Keine Aufgabe dieses Berufs mit veröffentlichtem Anteil über 0,00 %.</p>`;
  return `<ol class="aufgaben">${b.aufgaben.map((a) => `<li>${esc(a.text)} <span class="zahl">(${pz(a.pct)})</span>${a.berufe > 1 ? ` <span class="klein">· gehört zu ${a.berufe} Berufen</span>` : ""}<br><span class="en" lang="en">${esc(a.text_en)}</span></li>`).join("")}</ol>`;
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
function regalWert(r) { return geo === "welt" ? { pct: r.pct, rang: r.rang } : { pct: r.pct_deu, rang: r.rang_deu }; }
function baueListe() {
  const regale = [...D.regale].sort((a, b) => regalWert(a).rang - regalWert(b).rang);
  const max = Math.max(...regale.map((r) => regalWert(r).pct));
  const maxBuch = Math.max(...D.regale.flatMap((r) => r.buecher.filter((b) => b.soc).map((b) => b.pct)));
  const ul = $("#liste"); ul.innerHTML = "";
  regale.forEach((r) => {
    const w = regalWert(r);
    const li = document.createElement("li");
    li.dataset.soc = r.soc;
    if (r.soc === EIGEN && schritt >= 3) li.classList.add("eigen");
    li.innerHTML = `<button type="button" class="regalknopf" aria-expanded="false"><span class="rang">${w.rang}.</span><span class="name"><span class="pfeil" aria-hidden="true">▸</span>${esc(r.name)}</span><span class="zahl">${pz(w.pct)}</span><span class="balken" aria-hidden="true"><span style="width:${(100 * w.pct / max).toFixed(2)}%"></span></span></button>`;
    const knopf = li.querySelector("button");
    knopf.addEventListener("click", () => {
      const auf = knopf.getAttribute("aria-expanded") === "true";
      knopf.setAttribute("aria-expanded", String(!auf));
      knopf.querySelector(".pfeil").textContent = auf ? "▸" : "▾";
      if (auf) { li.querySelector(".buecher")?.remove(); hoeheMelden(); return; }
      const bu = document.createElement("ul"); bu.className = "buecher";
      r.buecher.forEach((b) => {
        const bl = document.createElement("li");
        if (!b.soc) {
          bl.innerHTML = `<p class="klein" style="margin:4px 2px">${b.anzahl} weitere Berufe, zusammen ${pz(b.pct)}${b.davon_null ? ` (davon ${b.davon_null} mit gerundet 0,00 %)` : ""}.</p>`;
        } else {
          bl.innerHTML = `<button type="button" class="buchknopf" aria-expanded="false"><span><span class="pfeil" aria-hidden="true">▸</span>${esc(b.name)}</span><span class="zahl">${pz(b.pct)}</span><span class="balken" aria-hidden="true"><span style="width:${Math.max(0.5, 100 * b.pct / maxBuch).toFixed(2)}%"></span></span></button>`;
          const bk = bl.querySelector("button");
          bk.addEventListener("click", () => {
            const o = bk.getAttribute("aria-expanded") === "true";
            bk.setAttribute("aria-expanded", String(!o));
            bk.querySelector(".pfeil").textContent = o ? "▸" : "▾";
            if (o) bl.querySelector(".aufgaben, p.klein")?.remove();
            else bk.insertAdjacentHTML("afterend", `<p class="klein" style="margin:2px 0 0" lang="en">${esc(b.name_en)} · SOC ${b.soc}</p>${aufgabenHTML(b)}`);
            hoeheMelden();
          });
        }
        bu.appendChild(bl);
      });
      li.appendChild(bu);
      hoeheMelden();
    });
    ul.appendChild(li);
  });
  $("#geo-hinweis").textContent = geo === "welt"
    ? "Regale nach Anteil weltweit. Bücher und Aufgaben zeigen immer weltweite Werte."
    : "Regale nach Anteil der Gespräche aus Deutschland. Bücher und Aufgaben zeigen weltweite Werte.";
  hoeheMelden();
}
function setzeGeo(g) { geo = g; $("#geo-welt").setAttribute("aria-pressed", g === "welt"); $("#geo-deu").setAttribute("aria-pressed", g === "deu"); baueListe(); }
$("#geo-welt").addEventListener("click", () => setzeGeo("welt"));
$("#geo-deu").addEventListener("click", () => setzeGeo("deu"));
baueListe();
function oeffneInListe(soc) {
  const li = document.querySelector(`#liste li[data-soc="${soc}"]`);
  const k = li?.querySelector(".regalknopf");
  if (k && k.getAttribute("aria-expanded") !== "true") k.click();
  k?.focus({ preventScroll: true });
  li?.scrollIntoView({ block: "nearest" });
}

// ---------- Zum Regal springen ----------
const sprung = $("#sprung");
D.regale.forEach((r) => sprung.insertAdjacentHTML("beforeend", `<option value="${r.soc}">${r.rang}. ${esc(r.name)} (${pz(r.pct)})</option>`));
sprung.addEventListener("change", () => {
  const soc = sprung.value; if (!soc) return;
  if (ansicht === "liste" || !raum) oeffneInListeOderStart(soc);
  else raum.springe(soc);
});
function oeffneInListeOderStart(soc) {
  if (ansicht === "3d" && !raum) { starte3D().then(() => raum && raum.springe(soc)); return; }
  oeffneInListe(soc);
}

// ---------- 3D-Raum (erst nach Klick laden) ----------
let raum = null;
const buehne = $("#buehne");
const karte = document.createElement("div");
karte.className = "karte"; karte.hidden = true; karte.setAttribute("role", "dialog"); karte.setAttribute("aria-live", "polite");
karte.setAttribute("aria-label", "Karte zum gewählten Regal oder Buch");
function zeigeKarte(html, fokus) {
  karte.innerHTML = `<button type="button" class="zu" aria-label="Karte schließen (Esc)">×</button>${html}`;
  karte.hidden = false;
  karte.querySelector(".zu").addEventListener("click", schliesseKarte);
  if (fokus) karte.querySelector(".zu").focus({ preventScroll: true });
}
function schliesseKarte() { karte.hidden = true; raum?.markiereBuch(null); raum?.fokus(); }
function buchKarte(regal, b) {
  if (!b.soc) return `<h3>${b.anzahl} weitere Berufe</h3><p class="en">Regal: ${esc(regal.name)}</p><p>Zusammen <span class="zahl">${pz(b.pct)}</span> der Gespräche${b.davon_null ? `; ${b.davon_null} davon mit gerundet 0,00 %` : ""}. In der Listenansicht einzeln nicht aufgeführt.</p>`;
  return `<h3>${esc(b.name)}</h3><p class="en" lang="en">${esc(b.name_en)} · SOC ${b.soc} · Regal: ${esc(regal.name)}</p>
    <p><strong class="zahl">${pz(b.pct)}</strong> der Gespräche im ${MONAT} wurden diesem Beruf zugeordnet.</p>
    ${b.aufgaben.length ? `<p style="margin:6px 0 0">Häufigste Aufgaben dieses Berufs (Anteil an allen Gesprächen; der Wert gilt für die Aufgabe, nicht für den Beruf):</p>` : ""}${aufgabenHTML(b)}`;
}
function regalKarte(regal) {
  return `<h3>${regal.rang}. ${esc(regal.name)}</h3><p class="en" lang="en">${esc(regal.name_en)} · ${pz(regal.pct)} · ${regal.buecher.length} Bücher</p>
    <ul class="buchwahl">${regal.buecher.map((b, i) => `<li><button type="button" data-i="${i}"><span>${esc(b.soc ? b.name : b.anzahl + " weitere Berufe")}</span><span class="zahl">${pz(b.pct)}</span></button></li>`).join("")}</ul>`;
}
const callbacks = {
  onBuch(soc, i) {
    const r = D.regale.find((x) => x.soc === soc);
    zeigeKarte(buchKarte(r, r.buecher[i]), false);
  },
  onRegal(soc, fokus) {
    const r = D.regale.find((x) => x.soc === soc);
    zeigeKarte(regalKarte(r), fokus);
    karte.querySelectorAll(".buchwahl button").forEach((k) => k.addEventListener("click", () => {
      const i = Number(k.dataset.i); raum.markiereBuch(soc, i); zeigeKarte(buchKarte(r, r.buecher[i]), true);
    }));
  },
  onOrt(text) { ort.textContent = text; },
  onEsc() { if (!karte.hidden) { schliesseKarte(); return true; } return false; },
};
const ort = document.createElement("div"); ort.className = "ort"; ort.setAttribute("aria-live", "polite");
async function starte3D() {
  if (raum) return;
  const startKnopf = $("#start-3d");
  startKnopf.disabled = true; startKnopf.textContent = "Raum wird aufgebaut …";
  try {
    if (!window.BibliothekRaum) {
      const s = document.createElement("script");
      s.textContent = document.getElementById("raum-quelle").textContent;
      document.head.appendChild(s);
    }
    raum = window.BibliothekRaum.start(buehne, D, callbacks, { reduziert });
    buehne.querySelector(".start").remove();
    buehne.appendChild(ort); buehne.appendChild(karte);
    raum.fokus();
    window.__bibliothek = raum; // für den Prüflauf (Bildrate)
  } catch (e) {
    console.warn("3D nicht verfügbar, Listenansicht", e);
    setzeAnsicht("liste", false); $("#ansicht-3d").disabled = true;
  }
}
$("#start-3d").addEventListener("click", starte3D);
if (buehne.dataset.poster) buehne.style.backgroundImage = `url(${buehne.dataset.poster})`;

// ---------- Auflösung ----------
const AUSWAHL = D.aufloesung_buecher || [];
$("#zur-aufloesung").addEventListener("click", () => {
  if (tipp.rang === null) { tipp.rang = Number(rR.value); tipp.anteil = Number(rA.value); }
  const dR = tipp.rang - eigen.rang, dA = tipp.anteil - eigen.pct;
  const rangText = dR === 0 ? "genau getroffen" : `${Math.abs(dR)} Plätze ${dR > 0 ? "zu weit hinten" : "zu weit vorn"}`;
  const anteilText = Math.abs(dA) < 0.5 ? "fast genau getroffen" : `${fmt(Math.abs(dA), 1)} Prozentpunkte ${dA > 0 ? "zu hoch" : "zu niedrig"}`;
  const drei = AUSWAHL.map((soc) => eigen.buecher.find((b) => b.soc === soc)).filter(Boolean);
  $("#aufloesung").innerHTML = `
    <dl class="vergleich">
      <dt>Ihr Tipp</dt><dd>Platz ${tipp.rang}, ${fmt(tipp.anteil, 1)} %</dd>
      <dt>Weltweit, ${MONAT}</dt><dd>Platz ${eigen.rang} von 22, ${pz(eigen.pct)} der Gespräche</dd>
      <dt>Aus Deutschland</dt><dd>Platz ${eigen.rang_deu} von 22, ${pz(eigen.pct_deu)}</dd>
      <dt>Ihr Abstand</dt><dd>Platz: ${rangText}; Anteil: ${anteilText}</dd>
    </dl>
    <p>Vor dem Bildungsregal stehen nur ${D.regale.filter((r) => r.rang < eigen.rang).map((r) => esc(r.name)).join(" sowie ")}. Das Regal hat ${eigen.berufe_gesamt} Bücher; die breitesten sind keine Lehrberufe im engeren Sinn:</p>
    <div class="drei">${drei.map((b) => `<article><h3>${esc(b.name)}</h3><p class="klein" style="margin:0" lang="en">${esc(b.name_en)}</p><p style="margin:4px 0 0"><strong class="zahl">${pz(b.pct)}</strong> · Rang ${eigen.buecher.indexOf(b) + 1} im Regal</p>${b.aufgaben.length ? `<ul>${b.aufgaben.slice(0, 2).map((a) => `<li>${esc(a.text)} <span class="zahl">(${pz(a.pct)})</span></li>`).join("")}</ul>` : ""}</article>`).join("")}</div>
    <p>${esc(befund())}</p>`;
  zeige(3);
  baueListe();
  if (ansicht === "3d" && raum) { raum.markiereRegal(EIGEN); raum.springe(EIGEN); }
  else if (ansicht === "liste") oeffneInListe(EIGEN);
  document.getElementById("p3").focus({ preventScroll: true });
  document.getElementById("p3").scrollIntoView({ block: "nearest", behavior: reduziert ? "auto" : "smooth" });
});
$("#zur-bilanz").addEventListener("click", () => { zeige(4); document.getElementById("p4").focus({ preventScroll: true }); });
$("#zum-transfer").addEventListener("click", () => { zeige(5); document.getElementById("p5").focus({ preventScroll: true }); });

// Befund aus den Daten: Was macht das Bildungsregal so breit?
function befund() {
  const bs = eigen.buecher.filter((b) => b.soc);
  const top = bs[0], a = top.aufgaben[0];
  const hl = D.hochschullehre;
  return `Von den ${pz(eigen.pct)} des Regals entfallen ${pz(top.pct)} auf ${top.name}` +
    (a ? `, davon allein ${pz(a.pct)} auf die Aufgabe „${a.text}“` : "") +
    `. Die ${hl.anzahl_ueber_null} Bücher der Hochschullehrenden einzelner Fächer kommen zusammen auf ${pz(hl.summe)}.`;
}

// ---------- Bilanz, Transfer, Quelle ----------
$("#bilanz-bib").textContent = "Ein großes Regal heißt nicht, dass der Beruf besonders betroffen ist: " +
  "Das Bildungsregal ist vor allem deshalb breit, weil viele Gespräche Auskunfts- und Rechercheaufgaben betreffen, die O*NET dem Bibliotheksberuf zuordnet.";
$("#vorlage").textContent = VORLAGE;
$("#making-of").textContent = MAKING_OF;
$("#kopieren").addEventListener("click", async () => {
  let ok = false;
  try { await navigator.clipboard.writeText(VORLAGE); ok = true; } catch (e) {
    const r = document.createRange(); r.selectNodeContents($("#vorlage"));
    const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    try { ok = document.execCommand("copy"); } catch (e2) { ok = false; }
  }
  $("#kopiert").textContent = ok ? "kopiert" : "Bitte markieren und mit Strg+C kopieren";
});
$("#quelle").innerHTML = `Daten: <a href="${D.quelle.url}" target="_blank" rel="noopener">Anthropic Economic Index</a>, Release 26.06.2026, Gespräche mit Claude.ai im ${MONAT}, Kennzahl „Anteil der Gespräche“ (CC BY); Massenkoff et al. (2026). Berufe nach US-Klassifikation SOC; deutsche Namen gekürzt übersetzt. Enthält Informationen aus der <a href="https://www.onetcenter.org/database.html" target="_blank" rel="noopener">O*NET 31.0 Database</a> des U.S. Department of Labor, Employment and Training Administration (USDOL/ETA), verwendet unter der Lizenz CC BY 4.0; übersetzt und gekürzt, USDOL/ETA hat diese Änderungen weder geprüft noch gebilligt. O*NET® ist eine Marke von USDOL/ETA.`;
hoeheMelden();
