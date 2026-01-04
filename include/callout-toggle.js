// callout-toggle.js
window.addEventListener('DOMContentLoaded', () => {
  // Quarto-Callouts haben die Klasse .callout; collapsible Callouts besitzen ein Toggle in der Header-Zeile.
  // Wir öffnen/schließen den Body-Container aller "collapsible" Callouts.
  function setAllCallouts(open = true) {
    document.querySelectorAll('.callout').forEach(co => {
      // Quarto rendert collapsible Callouts mit einem Header-Button, der den Body ein-/ausblendet.
      const headerBtn = co.querySelector('.callout-header button, .callout-toggle, [data-bs-toggle="collapse"]');
      const body = co.querySelector('.callout-body, .collapse'); // je nach Quarto/Bootstrap-Version
      if (!headerBtn || !body) return;

      const isOpen = body.classList.contains('show') || body.style.display !== 'none';
      if (open && !isOpen) headerBtn.click();
      if (!open && isOpen) headerBtn.click();
    });
  }

  const expandBtn = document.getElementById('expand-callouts');
  const collapseBtn = document.getElementById('collapse-callouts');

  if (expandBtn)   expandBtn.addEventListener('click', () => setAllCallouts(true));
  if (collapseBtn) collapseBtn.addEventListener('click', () => setAllCallouts(false));
});
