'use strict';
const pillars = [...document.querySelectorAll('.pillars details')];
pillars.forEach(pillar => pillar.addEventListener('toggle', () => {
  if (pillar.open) pillars.forEach(other => { if (other !== pillar && other.open) other.open = false; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
const chapterLinks = [...document.querySelectorAll('.header nav a[href^="#"]')];
if ('IntersectionObserver' in window && chapterLinks.length) {
  const observer = new IntersectionObserver(entries => {
    const entry = entries.find(item => item.isIntersecting);
    if (!entry) return;
    chapterLinks.forEach(link => {
      if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-12% 0px -65% 0px' });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}
