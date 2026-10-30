'use strict';
// Keep the six-area selector exclusive in browsers without native details grouping.
const pillars = [...document.querySelectorAll('.pillars details')];
pillars.forEach(pillar => pillar.addEventListener('toggle', () => {
  if (pillar.open) pillars.forEach(other => { if (other !== pillar && other.open) other.open = false; });
}));
document.getElementById('year').textContent = new Date().getFullYear();
