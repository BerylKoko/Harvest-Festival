(() => {
  const trigger = document.querySelector('#hamburgerBtn');
  const navigation = document.querySelector('#navMenu');
  const dismiss = document.querySelector('#exitBtn');
  const mobile = window.matchMedia('(max-width: 760px)');
  if (!trigger || !navigation) return;
  function render(expanded) {
    const visible = mobile.matches && expanded;
    navigation.classList.toggle('hidden', !visible && mobile.matches);
    navigation.classList.toggle('show', visible);
    trigger.setAttribute('aria-expanded', String(visible));
  }
  trigger.addEventListener('click', () => render(trigger.getAttribute('aria-expanded') !== 'true'));
  if (dismiss) dismiss.addEventListener('click', () => { render(false); trigger.focus(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') render(false); });
  mobile.addEventListener('change', () => render(false));
  render(false);
})();