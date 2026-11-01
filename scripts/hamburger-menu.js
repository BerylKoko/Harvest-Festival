// Isolated scope prevents collisions with modal.js on the same page.
(() => {
  'use strict';
  const toggle = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('navMenu');
  const close = document.getElementById('exitBtn');
  const viewport = window.matchMedia('(max-width: 1100px)');
  if (!toggle || !menu) return;

  function setMenuOpen(shouldOpen, restoreFocus = false) {
    const expanded = Boolean(shouldOpen && viewport.matches);
    menu.classList.toggle('is-open', expanded);
    menu.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
    if (restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => {
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  close?.addEventListener('click', (event) => {
    event.preventDefault();
    setMenuOpen(false, true);
  });
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('pointerdown', event => {
    if (viewport.matches && menu.classList.contains('is-open') && !event.target.closest('.navbar')) {
      setMenuOpen(false);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenuOpen(false, true);
    }
  });
  if (viewport.addEventListener) viewport.addEventListener('change', () => setMenuOpen(false));
  else viewport.addListener(() => setMenuOpen(false));
  setMenuOpen(false);
})();
