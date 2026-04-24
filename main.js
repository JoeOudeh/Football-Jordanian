// =============================================
// JORDANIAN FOOTBALL — MAIN JS (BILINGUAL)
// =============================================

let currentLang = localStorage.getItem('jf_lang') || 'ar';

function t(key) { return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || key; }

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(false); // apply without re-render (first render below)
  initNavbar();
  initScrollReveal();
  renderPlayers();
  renderClubs();
  renderStadiums();
  renderStandings();
  initSmoothScroll();
  animateHeroStats();
});

// =============================================
// LANGUAGE TOGGLE
// =============================================
function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('jf_lang', currentLang);
  applyLanguage(true);
}

function applyLanguage(reRender) {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');

  // Update all data-i18n text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Language button
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.querySelector('.lang-flag').textContent = t('langFlag');
    btn.querySelector('.lang-label').textContent = t('langBtn');
  }

  if (reRender) {
    renderPlayers();
    renderClubs();
    renderStadiums();
    renderStandings();
    // re-run scroll reveal on new DOM elements
    initScrollReveal();
  }
}

// =============================================
// NAVBAR
// =============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  });

  hamburger.addEventListener('click', () => {
    const open = hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
    mobileMenu.classList.toggle('show', open);
  });

  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
      mobileMenu.classList.remove('show');
    });
  });
}

function updateActiveLink() {
  const sections = ['home','players','clubs','stadiums','standings'];
  const scrollY = window.scrollY + 100;
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) current = id;
  });
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

// =============================================
// SMOOTH SCROLL
// =============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// =============================================
// SCROLL REVEAL
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  els.forEach(el => observer.observe(el));
  setTimeout(() => {
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) { el.classList.add('visible'); observer.unobserve(el); }
    });
  }, 100);
}

// =============================================
// HERO STATS COUNTER
// =============================================
function animateHeroStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const end = parseInt(el.dataset.count);
        let cur = 0;
        const step = Math.ceil(end / 50);
        const timer = setInterval(() => {
          cur = Math.min(cur + step, end);
          el.textContent = cur;
          if (cur >= end) clearInterval(timer);
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(c => observer.observe(c));
}

// =============================================
// PLAYERS
// =============================================
function renderPlayers() {
  const grid = document.getElementById('playersGrid');
  if (!grid) return;
  grid.innerHTML = PLAYERS.map((p, i) => {
    const name = currentLang === 'ar' ? p.nameAr : p.name;
    const club = currentLang === 'ar' ? p.clubAr : p.club;
    const pos  = currentLang === 'ar' ? p.positionAr : p.position;
    return `
    <article class="player-card stagger-card" style="animation-delay:${i * 0.08}s" onclick="openPlayerModal(${p.id})">
      <div class="player-card-img-wrap">
        <img class="player-card-img" src="${p.image}" alt="${name}" loading="eager"
             onerror="this.style.display='none';this.parentElement.classList.add('img-fallback')">
        <span class="player-card-pos-badge">${pos}</span>
      </div>
      <div class="player-card-body">
        <p class="player-card-name">${name}</p>
        <p class="player-card-club">${club}</p>
        <div class="player-card-stats">
          <div class="mini-stat"><div class="mini-stat-val">${p.stats.goals}</div><div class="mini-stat-lbl">${t('cardGoals')}</div></div>
          <div class="mini-stat"><div class="mini-stat-val">${p.stats.assists}</div><div class="mini-stat-lbl">${t('cardAssists')}</div></div>
          <div class="mini-stat"><div class="mini-stat-val">${p.stats.rating}</div><div class="mini-stat-lbl">${t('cardRating')}</div></div>
        </div>
      </div>
    </article>`;
  }).join('');
}

function openPlayerModal(id) {
  const p = PLAYERS.find(x => x.id === id);
  if (!p) return;
  const name = currentLang === 'ar' ? p.nameAr : p.name;
  const fullName = currentLang === 'ar' ? p.fullNameAr : p.fullName;
  const pos = currentLang === 'ar' ? p.positionAr : p.position;
  const club = currentLang === 'ar' ? p.clubAr : p.club;
  const bio = currentLang === 'ar' ? p.bioAr : p.bio;
  const nat = currentLang === 'ar' ? p.nationalityAr : p.nationality;
  const age = currentLang === 'ar' ? `${p.age} ${t('ageSuffix')}` : `${p.age} ${t('ageSuffix')}`;

  document.getElementById('modal-img').src = p.image;
  document.getElementById('modal-img').alt = name;
  document.getElementById('modal-name').textContent = name;
  document.getElementById('modal-club').textContent = `${club} · #${p.number}`;
  document.getElementById('modal-goals').textContent   = p.stats.goals;
  document.getElementById('modal-assists').textContent = p.stats.assists;
  document.getElementById('modal-matches').textContent = p.stats.matches;
  document.getElementById('modal-rating').textContent  = p.stats.rating;
  document.getElementById('modal-fullname').textContent    = fullName;
  document.getElementById('modal-position').textContent   = pos;
  document.getElementById('modal-age').textContent        = age;
  document.getElementById('modal-nationality').textContent = nat;
  document.getElementById('modal-bio').textContent = bio;

  // Update modal label text
  document.querySelector('[data-i18n="modalGoals"]').textContent   = t('modalGoals');
  document.querySelector('[data-i18n="modalAssists"]').textContent = t('modalAssists');
  document.querySelector('[data-i18n="modalMatches"]').textContent = t('modalMatches');
  document.querySelector('[data-i18n="modalRating"]').textContent  = t('modalRating');
  document.querySelector('[data-i18n="modalFullName"]').textContent = t('modalFullName');
  document.querySelector('[data-i18n="modalPosition"]').textContent = t('modalPosition');
  document.querySelector('[data-i18n="modalAge"]').textContent     = t('modalAge');
  document.querySelector('[data-i18n="modalNationality"]').textContent = t('modalNationality');
  document.querySelector('[data-i18n="modalBio"]').textContent     = t('modalBio');

  document.getElementById('playerModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePlayerModal() {
  document.getElementById('playerModal').classList.remove('active');
  document.body.style.overflow = '';
}

// =============================================
// CLUBS
// =============================================
function renderClubs() {
  const grid = document.getElementById('clubsGrid');
  if (!grid) return;
  grid.innerHTML = CLUBS.map((c, i) => {
    const name = currentLang === 'ar' ? c.nameAr : c.name;
    const city = currentLang === 'ar' ? c.cityAr : c.city;
    const achievements = currentLang === 'ar' ? c.achievementsAr : c.achievements;
    return `
    <article class="club-card stagger-card" style="animation-delay:${i * 0.08}s" onclick="openClubModal(${c.id})">
      <div class="club-card-banner" style="background:${c.bgGradient}">
        <div class="club-logo-circle">${c.emoji}</div>
      </div>
      <div class="club-card-body">
        <p class="club-card-name">${name}</p>
        <p class="club-card-city">${city}</p>
        <div class="club-achievements">
          ${achievements.slice(0,2).map(a => `<span class="achievement-badge">${a}</span>`).join('')}
        </div>
        <p class="club-card-year">${t('estLabel')} ${c.founded}</p>
      </div>
    </article>`;
  }).join('');
}

function openClubModal(id) {
  const c = CLUBS.find(x => x.id === id);
  if (!c) return;
  document.getElementById('cm-logo').textContent = c.emoji;
  document.getElementById('cm-logo').style.background = c.bgGradient;
  document.getElementById('cm-name').textContent    = currentLang === 'ar' ? c.nameAr : c.name;
  document.getElementById('cm-city').textContent    = (currentLang === 'ar' ? c.cityAr : c.city) + (currentLang === 'ar' ? '، الأردن' : ', Jordan');
  document.getElementById('cm-founded').innerHTML   = `${t('clubFounded')} <span>${c.founded}</span>`;
  document.getElementById('cm-history').textContent = currentLang === 'ar' ? c.historyAr : c.history;
  document.getElementById('cm-status').textContent  = currentLang === 'ar' ? c.statusAr : c.status;
  const trophies = currentLang === 'ar' ? c.trophiesAr : c.trophies;
  document.getElementById('cm-trophies').innerHTML  = trophies.map(tr => `<div class="trophy-item">${tr}</div>`).join('');
  document.querySelector('[data-i18n="clubHistory"]').textContent  = t('clubHistory');
  document.querySelector('[data-i18n="clubTrophies"]').textContent = t('clubTrophies');
  document.querySelector('[data-i18n="clubStatus"]').textContent   = t('clubStatus');
  document.getElementById('clubModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeClubModal() {
  document.getElementById('clubModal').classList.remove('active');
  document.body.style.overflow = '';
}

// =============================================
// STADIUMS
// =============================================
function renderStadiums() {
  const list = document.getElementById('stadiumsList');
  if (!list) return;
  const maxCap = Math.max(...STADIUMS.map(s => s.capacity));
  list.innerHTML = STADIUMS.map((s, i) => {
    const name = currentLang === 'ar' ? s.nameAr : s.name;
    const loc  = currentLang === 'ar' ? s.locationAr : s.location;
    const desc = currentLang === 'ar' ? s.descriptionAr : s.description;
    const surf = currentLang === 'ar' ? s.surfaceAr : s.surface;
    const host = currentLang === 'ar' ? s.hostClubAr : s.hostClub;
    const pct  = Math.round(s.capacity / maxCap * 100);
    return `
    <article class="stadium-card stagger-card" style="animation-delay:${i * 0.1}s">
      <div class="stadium-accent-bar">${s.emoji}</div>
      <div class="stadium-body">
        <h3 class="stadium-name">${name}</h3>
        <div class="stadium-meta">
          <span class="meta-item"><span class="mi-icon">📍</span>${loc}</span>
          <span class="meta-item"><span class="mi-icon">👥</span>${s.capacity.toLocaleString()} ${t('metaCapacity')}</span>
          <span class="meta-item"><span class="mi-icon">📅</span>${t('metaOpened')} ${s.openedYear}</span>
          <span class="meta-item"><span class="mi-icon">🌿</span>${surf}</span>
        </div>
        <div class="capacity-bar"><div class="capacity-fill" style="width:${pct}%"></div></div>
        <p style="font-size:0.72rem;color:var(--mid);margin-bottom:10px">${pct}${t('capacityLabel')} (${host})</p>
        <p class="stadium-desc">${desc}</p>
      </div>
    </article>`;
  }).join('');
}

// =============================================
// STANDINGS
// =============================================
function renderStandings() {
  const tbody = document.getElementById('standingsBody');
  if (!tbody) return;

  // Update table headers
  const hKeys = ['thPos','thTeam','thP','thW','thD','thL','thGF','thGA','thGD','thPts','thForm'];
  document.querySelectorAll('.standings-table thead th').forEach((th, i) => {
    if (hKeys[i]) th.textContent = t(hKeys[i]);
  });

  tbody.innerHTML = STANDINGS.map(row => {
    const gd = row.gf - row.ga;
    const posClass = row.pos <= 3 ? 'top-3' : (row.pos >= STANDINGS.length - 1 ? 'relegation' : '');
    const posCls   = row.pos === 1 ? 'pos-1' : row.pos === 2 ? 'pos-2' : row.pos === 3 ? 'pos-3' : '';
    const formHtml = row.form.map(f => `<span class="form-dot form-${f.toLowerCase()}"></span>`).join('');
    const teamName = currentLang === 'ar' ? row.nameAr : row.name;
    const teamCity = currentLang === 'ar' ? row.cityAr : row.city;
    return `
      <tr class="${posClass}">
        <td><span class="pos-cell ${posCls}">${row.pos}</span></td>
        <td><div class="team-cell">
          <div class="team-badge">${row.emoji}</div>
          <div><div class="team-name">${teamName}</div><div class="team-city">${teamCity}</div></div>
        </div></td>
        <td>${row.pl}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td>
        <td>${row.gf}</td><td>${row.ga}</td>
        <td style="font-weight:600;color:${gd>0?'var(--green)':gd<0?'var(--red)':'var(--mid)'}">${gd>0?'+':''}${gd}</td>
        <td><span class="pts-cell">${row.pts}</span></td>
        <td><div class="form-cell">${formHtml}</div></td>
      </tr>`;
  }).join('');
}

// =============================================
// CLOSE MODALS
// =============================================
document.getElementById('playerModal')?.addEventListener('click', function(e) {
  if (e.target === this) closePlayerModal();
});
document.getElementById('clubModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeClubModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closePlayerModal(); closeClubModal(); }
});
