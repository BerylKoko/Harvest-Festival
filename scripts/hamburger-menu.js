// Shared responsive navigation for all festival pages.
const openButton = document.getElementById('hamburgerBtn');
const menu = document.getElementById('navMenu');
const closeButton = document.getElementById('exitBtn');
const narrow = window.matchMedia('(max-width: 760px)');
function setOpen(open, returnFocus = false) {
  if (!menu || !openButton) return;
  const expanded = Boolean(open && narrow.matches);
  menu.classList.toggle('is-open', expanded);
  menu.classList.toggle('hidden', !expanded && narrow.matches);
  openButton.setAttribute('aria-expanded', String(expanded));
  openButton.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  if (returnFocus) openButton.focus();
}
openButton?.addEventListener('click', () => setOpen(openButton.getAttribute('aria-expanded') !== 'true'));
closeButton?.addEventListener('click', event => {
  event.preventDefault();
  setOpen(false, true);
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
document.addEventListener('pointerdown', event => {
  if (narrow.matches && menu?.classList.contains('is-open') && !event.target.closest('.navbar')) setOpen(false);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('is-open')) setOpen(false, true);
});
if (narrow.addEventListener) narrow.addEventListener('change', () => setOpen(false));
else narrow.addListener(() => setOpen(false));
setOpen(false);
