(function () {
  'use strict';

  /** วันเปิดเว็บไซต์ Boorapatis Apps (commit แรกที่มีหน้า developer site) */
  const SITE_LAUNCH_DATE = '2026-06-05';
  const VISITOR_PAGE_ID = 'burapatis.github.io/app';
  const VISITOR_BADGE_URL =
    'https://visitor-badge.laobi.icu/badge?page_id=' + encodeURIComponent(VISITOR_PAGE_ID);

  function formatNumber(n) {
    return Number(n).toLocaleString('th-TH');
  }

  function updateDaysOnline() {
    const el = document.getElementById('stat-days');
    if (!el) return;
    const launch = new Date(SITE_LAUNCH_DATE + 'T00:00:00+07:00');
    const diff = Math.floor((Date.now() - launch.getTime()) / 86400000);
    el.textContent = formatNumber(Math.max(0, diff));
  }

  function updateAppCount() {
    const el = document.getElementById('stat-apps');
    if (!el) return;
    const liveApps = document.querySelectorAll('#apps .app-card:not(.coming-soon)');
    el.textContent = formatNumber(liveApps.length);
  }

  function parseVisitorCount(svg) {
    const match = svg.match(/x="571[^"]*" y="140">(\d[\d,]*)<\/text>/);
    if (!match) return null;
    const n = parseInt(match[1].replace(/,/g, ''), 10);
    return Number.isFinite(n) ? n : null;
  }

  function updateVisitorCount() {
    const el = document.getElementById('stat-visitors');
    if (!el) return;
    fetch(VISITOR_BADGE_URL, { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (svg) {
        const count = parseVisitorCount(svg);
        el.textContent = count !== null ? formatNumber(count) : '—';
      })
      .catch(function () {
        el.textContent = '—';
      });
  }

  function initSiteStats() {
    updateDaysOnline();
    updateAppCount();
    updateVisitorCount();
    setInterval(updateVisitorCount, 5 * 60 * 1000);
    setInterval(updateDaysOnline, 60 * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteStats);
  } else {
    initSiteStats();
  }
})();
