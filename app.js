(() => {
  const M = window.MENU || { cafe: {}, categories: [] };
  const $ = s => document.querySelector(s);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const price = n => Number(n || 0).toLocaleString('ru-RU').replace(/,/g, ' ');
  const params = new URLSearchParams(location.search);
  const table = params.get('stol') || params.get('t');

  // ---- sarlavha
  document.title = `${M.cafe.name || 'Menyu'} — Menyu`;
  $('#cafeName').textContent = M.cafe.name || 'Menyu';
  $('#tagline').textContent = M.cafe.tagline || '';
  const pills = [];
  if (table) pills.push(`<div class="table-pill"><span class="dot"></span> Stol №${esc(table)}</div>`);
  if (M.cafe.wifi) pills.push(`<div class="table-pill">📶 Wi-Fi: ${esc(M.cafe.wifi)}</div>`);
  if (M.cafe.phone) pills.push(`<a class="table-pill" href="tel:${esc(M.cafe.phone.replace(/\s/g, ''))}">📞 ${esc(M.cafe.phone)}</a>`);
  $('#pills').innerHTML = pills.join('');
  $('#footNote').innerHTML = `${esc(M.cafe.name || '')} · Buyurtma berish uchun ofitsiantni chaqiring 🙋`;

  // ---- menyu
  let query = '';
  const visual = (i, ci, cls = 'visual') => {
    const c = ci < 4 ? `c${ci}` : '';
    const inner = i.image ? `<img src="${esc(i.image)}" alt="" loading="lazy">` : `<span class="emoji">${esc(i.emoji || '🍽️')}</span>`;
    return `<div class="${cls} ${c}">${inner}</div>`;
  };

  function card(i, ci, ii, idx) {
    return `<article class="card ${i.available === false ? 'off' : ''}" data-ci="${ci}" data-ii="${ii}" tabindex="0" style="animation-delay:${Math.min(idx, 8) * 35}ms">
      <div style="position:relative">
        ${visual(i, ci)}
        ${i.popular && i.available !== false ? '<span class="badge">🔥 Ommabop</span>' : ''}
        ${i.available === false ? '<span class="sold">Hozir mavjud emas</span>' : ''}
      </div>
      <div class="body">
        <h3 class="name">${esc(i.name)}</h3>
        ${i.weight ? `<span class="weight">${esc(i.weight)}</span>` : ''}
        <p class="desc">${esc(i.desc)}</p>
        <div class="foot"><span class="price">${price(i.price)} <small>so'm</small></span></div>
      </div>
    </article>`;
  }

  function render() {
    const q = query.trim().toLowerCase();
    $('#tabs').innerHTML = M.categories.map((c, ci) =>
      `<button class="tab" data-tab="${ci}">${esc(c.icon)} ${esc(c.name)} <span class="count">${c.items.length}</span></button>`).join('');
    const html = M.categories.map((c, ci) => {
      const list = c.items.map((i, ii) => ({ i, ii }))
        .filter(({ i }) => !q || i.name.toLowerCase().includes(q) || (i.desc || '').toLowerCase().includes(q))
        .sort((a, b) => (b.i.available !== false) - (a.i.available !== false));
      if (!list.length) return '';
      return `<section class="section" id="cat-${ci}" data-cat="${ci}">
        <h2 class="section-title">${esc(c.icon)} ${esc(c.name)} <small>${list.length} ta</small></h2>
        <div class="grid">${list.map(({ i, ii }, idx) => card(i, ci, ii, idx)).join('')}</div>
      </section>`;
    }).join('');
    $('#menu').innerHTML = html || `<div class="empty"><div>🔍</div>"${esc(query)}" bo'yicha hech narsa topilmadi</div>`;
    observe();
  }

  let observer;
  function observe() {
    observer?.disconnect();
    observer = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setTab(e.target.dataset.cat)),
      { rootMargin: '-80px 0px -65% 0px' });
    document.querySelectorAll('.section').forEach(s => observer.observe(s));
    setTab('0');
  }
  function setTab(id) {
    document.querySelectorAll('.tab').forEach(t => {
      const on = t.dataset.tab === id;
      t.classList.toggle('active', on);
      if (on) t.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    });
  }

  // ---- batafsil oyna
  function openItem(ci, ii) {
    const i = M.categories[ci].items[ii];
    $('#sheetBody').innerHTML = `
      ${visual(i, ci, 'visual detail-visual')}
      <h2 class="detail-name">${esc(i.name)}</h2>
      ${i.weight ? `<div class="weight">${esc(i.weight)}</div>` : ''}
      <p class="detail-desc">${esc(i.desc)}</p>
      <div class="detail-foot">
        <span class="price">${price(i.price)} <small>so'm</small></span>
        ${i.available === false ? '<span class="detail-off">Hozir mavjud emas</span>' : (i.popular ? '<span class="detail-pop">🔥 Ommabop</span>' : '')}
      </div>`;
    $('#backdrop').hidden = false;
    $('#sheet').classList.add('open');
    $('#sheet').setAttribute('aria-hidden', 'false');
  }
  function closeSheet() {
    $('#sheet').classList.remove('open');
    $('#sheet').setAttribute('aria-hidden', 'true');
    $('#backdrop').hidden = true;
  }

  document.addEventListener('click', e => {
    const tab = e.target.closest('[data-tab]');
    if (tab) {
      if (!document.getElementById(`cat-${tab.dataset.tab}`)) { query = ''; $('#search').value = ''; render(); }
      document.getElementById(`cat-${tab.dataset.tab}`)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const c = e.target.closest('.card');
    if (c) return openItem(+c.dataset.ci, +c.dataset.ii);
    if (e.target.closest('#closeSheet') || e.target.id === 'backdrop') closeSheet();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSheet();
    if (e.key === 'Enter' && e.target.classList?.contains('card')) openItem(+e.target.dataset.ci, +e.target.dataset.ii);
  });
  let st;
  $('#search').addEventListener('input', e => { clearTimeout(st); st = setTimeout(() => { query = e.target.value; render(); }, 150); });

  render();
})();
