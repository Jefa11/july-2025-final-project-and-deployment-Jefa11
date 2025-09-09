export function initGalleryFilters() {
  const gallery = document.getElementById('gallery');
  const buttons = document.querySelectorAll('.filters button');
  if (!gallery || !buttons.length) return;

  const setActive = (btn) => {
    buttons.forEach(b => b.classList.toggle('active', b === btn));
  };

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      setActive(btn);
      const cards = gallery.querySelectorAll('.card');
      cards.forEach(card => {
        const tags = (card.dataset.tags || '').toLowerCase();
        const show = filter === 'all' || tags.includes(filter);
        card.style.display = show ? '' : 'none';
      });
    });
  });
}
