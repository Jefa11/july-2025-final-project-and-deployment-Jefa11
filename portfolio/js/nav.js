export function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  const closeOnEsc = (e) => {
    if (e.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  };
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', closeOnEsc);
}
