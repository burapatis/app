(function () {
  'use strict';

  /** วันเปิดเว็บไซต์ Boorapatis Apps (commit แรกที่มีหน้า developer site) */
  const SITE_LAUNCH_DATE = '2026-06-05';

  /**
   * Page Views API — รองรับ CORS จาก GitHub Pages ได้จริง
   * https://page-views-api.ratneshc.com/docs/getting-started
   */
  const PAGE_VIEWS_API = 'https://page-views-api.ratneshc.com/api/v1';
  const PAGE_VIEWS_SITE = 'burapatis.github.io';
  const PAGE_VIEWS_PATH = '/app/';

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

  function buildPageViewsUrl(endpoint) {
    const params = new URLSearchParams({
      site: PAGE_VIEWS_SITE,
      path: PAGE_VIEWS_PATH,
    });
    return PAGE_VIEWS_API + '/' + endpoint + '?' + params.toString();
  }

  function trackPageView() {
    return fetch(buildPageViewsUrl('track'), { keepalive: true }).catch(function () {});
  }

  function updateVisitorCount() {
    const el = document.getElementById('stat-visitors');
    if (!el) return;

    fetch(buildPageViewsUrl('views'))
      .then(function (r) {
        if (!r.ok) throw new Error('views request failed');
        return r.json();
      })
      .then(function (data) {
        const views = Number(data && data.views);
        el.textContent = Number.isFinite(views) ? formatNumber(views) : '—';
      })
      .catch(function () {
        el.textContent = '—';
      });
  }

  function initSiteStats() {
    updateDaysOnline();
    updateAppCount();
    trackPageView().finally(updateVisitorCount);
    setInterval(updateVisitorCount, 5 * 60 * 1000);
    setInterval(updateDaysOnline, 60 * 60 * 1000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteStats);
  } else {
    initSiteStats();
  }
})();
