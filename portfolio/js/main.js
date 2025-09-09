// ES module entry: mounts all interactive behaviors.
import { initNav } from './nav.js';
import { initTheme } from './theme.js';
import { initScrollReveal } from './scroll.js';
import { initGalleryFilters } from './work-filters.js';
import { initForm } from './form.js';

initNav();
initTheme();
initScrollReveal();
initGalleryFilters();
initForm();

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
