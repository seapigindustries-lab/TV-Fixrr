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

const step = (s, open) => `
  <li>
    <details class="step" ${open}>
      <summary><span class="symptom">${esc(s.symptom)}</span><strong>${esc(s.title)}</strong></summary>
      <div class="step-body">
        <code>${esc(s.menu)}</code>
        <div class="value">${esc(s.setting)}: <b>${esc(s.value)}</b></div>
      </div>
    </details>
  </li>`;

const card = (w, open) => `
  <details class="family" ${open} id="${[w.brand, w.family, w.year].join('-').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}">
    <summary class="family">${esc(w.family)}${w.year ? ' ' + esc(w.year) : ''} · ${w.models.length} models</summary>
    <div class="family-body">
      ${w.models.map(m => `
        <details class="model" ${open}>
          <summary class="model">${esc(m)}</summary>
          <div class="model-body"><ol>${w.steps.map(s => step(s, open)).join('')}</ol></div>
        </details>`).join('')}
    </div>
  </details>`;

function render(list) {
  count.textContent = `${list.length} walkthrough${list.length === 1 ? '' : 's'}`;
  const open = list.length === 1 ? ' open' : ''; // exact find → expand fully
  const groups = {};
  list.forEach(w => (groups[w.brand] ??= []).push(w));
  results.innerHTML = Object.entries(groups).map(([brand, ws]) => `
    <details class="brand-group" ${open}>
      <summary class="brand">${esc(brand)} (${ws.length})</summary>
      <div class="brand-body">${ws.map(w => card(w, open)).join('')}</div>
    </details>`).join('') || '<p class="empty">No matching walkthroughs yet — try another brand, model, or symptom.</p>';
}

q.addEventListener('input', () => {
  const text = q.value.trim();
  render(text ? walkthroughs.filter(w => matches(w, text)) : walkthroughs);
});

document.getElementById('model-finder-list').innerHTML = Object.entries(SITE_DATA.modelFinders).map(([brand, steps]) => `
  <div class="finder"><h3>${esc(brand)}</h3><ol>${steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol></div>`).join('');

render(walkthroughs);
