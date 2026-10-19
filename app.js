const q = document.getElementById('search');
const results = document.getElementById('results');
const count = document.getElementById('count');
const walkthroughs = SITE_DATA.walkthroughs;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function matches(w, text) {
  const hay = [w.brand, w.family, w.year, ...w.models,
    ...w.steps.map(s => [s.symptom, s.title, s.menu, s.setting, s.value].join(' '))].join(' ').toLowerCase();
  return text.toLowerCase().split(/\s+/).filter(Boolean).every(t => hay.includes(t));
}

function render(list) {
  count.textContent = `${list.length} walkthrough${list.length === 1 ? '' : 's'}`;
  results.innerHTML = list.map(w => `
    <article class="card" id="${[w.brand, w.family, w.year].join('-').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}">
      <h2>${esc(w.brand)} ${esc(w.family)}${w.year ? ' ' + esc(w.year) : ''}</h2>
      <p class="models">${esc(w.models.join(' · '))}</p>
      <ol>
        ${w.steps.map(s => `
          <li>
            <div><span class="symptom">${esc(s.symptom)}</span><strong>${esc(s.title)}</strong></div>
            <code>${esc(s.menu)}</code>
            <div class="value">${esc(s.setting)}: <b>${esc(s.value)}</b></div>
          </li>`).join('')}
      </ol>
    </article>`).join('') || '<p class="empty">No matching walkthroughs yet — try another brand, model, or symptom.</p>';
}

q.addEventListener('input', () => {
  const text = q.value.trim();
  render(text ? walkthroughs.filter(w => matches(w, text)) : walkthroughs);
});

document.getElementById('model-finder-list').innerHTML = Object.entries(SITE_DATA.modelFinders).map(([brand, steps]) => `
  <div class="finder"><h3>${esc(brand)}</h3><ol>${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>`).join('');

render(walkthroughs);
