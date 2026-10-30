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
// On a phone, open service details immediately after the tapped button.
// Desktop retains a tab list and a single adjacent detail panel.
document.querySelectorAll('.offer-explorer').forEach(explorer => {
  const tabsContainer = explorer.querySelector('.offer-tabs');
  const panelContainer = explorer.querySelector('.offer-panels');
  const tabs = [...tabsContainer.querySelectorAll('button')];
  const panels = [...panelContainer.querySelectorAll('[role="tabpanel"]')];
  const mobile = window.matchMedia('(max-width: 620px)');
  const hint = explorer.querySelector('.explorer-top > p');
  let active = 0;
  const render = () => {
    tabs.forEach((tab, i) => {
      const selected = i === active;
      if (mobile.matches) {
        tab.setAttribute('aria-expanded', String(selected));
        tab.querySelector('b').textContent = selected ? '−' : '+';
        tab.tabIndex = 0;
      } else {
        tab.setAttribute('aria-selected', String(selected));
        tab.querySelector('b').textContent = '↗';
        tab.tabIndex = selected ? 0 : -1;
      }
      panels[i].hidden = !selected;
    });
  };
  const layout = () => {
    active = mobile.matches ? null : 0;
    panelContainer.hidden = mobile.matches;
    tabsContainer.setAttribute('role', mobile.matches ? 'group' : 'tablist');
    if (mobile.matches) tabsContainer.removeAttribute('aria-orientation');
    else tabsContainer.setAttribute('aria-orientation', 'vertical');
    tabs.forEach((tab, i) => {
      if (mobile.matches) {
        tab.removeAttribute('role');
        tab.removeAttribute('aria-selected');
        panels[i].setAttribute('role', 'region');
        panels[i].classList.add('offer-panels');
        tab.after(panels[i]);
      } else {
        tab.setAttribute('role', 'tab');
        tab.removeAttribute('aria-expanded');
        panels[i].setAttribute('role', 'tabpanel');
        panels[i].classList.remove('offer-panels');
        panelContainer.append(panels[i]);
      }
    });
    hint.textContent = mobile.matches ? 'Toca un servicio para abrir su explicación.' : 'Selecciona una pieza y mira qué hago con ella.';
    render();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      active = mobile.matches && active === index ? null : index;
      render();
    });
    tab.addEventListener('keydown', event => {
      if (mobile.matches) return;
      let next;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); active = next; render(); tabs[next].focus(); }
    });
  });
  mobile.addEventListener('change', layout);
  layout();
});
const homeMobile = window.matchMedia('(max-width: 620px)');
const homeScopeLayout = () => document.querySelectorAll('.home-scope, .phone-fold').forEach(scope => { scope.open = !homeMobile.matches; });
homeMobile.addEventListener('change', homeScopeLayout);
homeScopeLayout();
