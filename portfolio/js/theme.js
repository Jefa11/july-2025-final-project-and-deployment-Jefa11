const STORAGE_KEY = 'nova-theme';

function getPreferred() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function initTheme() {
  const preferred = getPreferred();
  document.documentElement.dataset.theme = preferred;
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = current;
    localStorage.setItem(STORAGE_KEY, current);
  });
}
