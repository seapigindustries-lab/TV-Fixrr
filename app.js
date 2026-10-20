const BRAND_COLORS = {
  Samsung: '#1428A0', LG: '#A50034', Sony: '#000000', TCL: '#E60012',
  Hisense: '#00A651', Vizio: '#00A9E0', Panasonic: '#004BB2',
  Philips: '#0B5ED7', Toshiba: '#E4002B', Sharp: '#E8102E',
};

const logo = brand => `
  <span class="logo" style="background:${BRAND_COLORS[brand] || '#666'}">${esc(brand[0])}</span>`;

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

const step = (s, open, w) => `
  <li>
    <details class="step" ${open}>
      <summary><span class="symptom">${esc(s.symptom)}</span><strong>${esc(s.title)}</strong></summary>
      <div class="step-body">
        <code>${esc(s.menu)}</code>
        <div class="value">${esc(s.setting)}: <b>${esc(s.value)}</b></div>
        <a class="report" href="https://github.com/seapigindustries-lab/TV-Fixrr/issues/new?template=report.yml&title=${encodeURIComponent(`[Report] ${w.brand} ${w.family} — ${s.title}`)}&body=${encodeURIComponent(`**Brand:** ${w.brand}\n**Family:** ${w.family}\n**Step:** ${s.title}\n**Current menu path:** ${s.menu}\n**Current setting:** ${s.setting} → ${s.value}\n\n**What's wrong?**\n\n\n\n**Corrected steps (optional):**\n1. \n2. \n\n**Success rating (1-5, 5 = fully fixed my issue):** `)}" target="_blank" rel="noopener">↩ Report incorrect instructions</a>
      </div>
    </details>
  </li>`;

const card = (w, open) => `
  <details class="family" ${open} id="${[w.brand, w.family, w.year].join('-').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}">
    <summary class="family">${esc(w.family)}${w.year ? ' ' + esc(w.year) : ''} · ${w.models.length} models</summary>
    <div class="family-body">
      <details class="models-group" ${open}>
        <summary class="models-summary">Models</summary>
        <ul class="model-list">${w.models.map(m => `<li>${esc(m)}</li>`).join('')}</ul>
      </details>
      <ol>${w.steps.map(s => step(s, open, w)).join('')}</ol>
    </div>
  </details>`;

function render(list) {
  count.textContent = `${list.length} walkthrough${list.length === 1 ? '' : 's'}`;
  const open = list.length === 1 ? ' open' : ''; // exact find → expand fully
  const groups = {};
  list.forEach(w => (groups[w.brand] ??= []).push(w));
  results.innerHTML = Object.entries(groups).map(([brand, ws]) => `
    <details class="brand-group" ${open}>
      <summary class="brand">${logo(brand)} ${esc(brand)} (${ws.length})</summary>
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
