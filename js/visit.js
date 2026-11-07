/* jinhua.tech 访问记录 —— 匿名计数，不采集 IP / UA / 联系方式 */
(function () {
  try {
    var U = 'https://zmhvarnrdnsimkkhrlol.supabase.co';
    var K = window.JH_SB_KEY ||
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaHZhcm5yZG5zaW1ra2hybG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMjMwNzAsImV4cCI6MjEwMjU5OTA3MH0.AIEkHsNaNO1MRkGdIbhHGdUqvMtcMg1KJfqpFDnkYiU';

    var sid = sessionStorage.getItem('jh_sid');
    if (!sid) {
      sid = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      sessionStorage.setItem('jh_sid', sid);
    }

    var body = JSON.stringify({
      path: (location.pathname || '/').slice(0, 120),
      ref: (document.referrer || '').slice(0, 120),
      sid: sid
    });

    fetch(U + '/rest/v1/jh_visits', {
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        apikey: K,
        Authorization: 'Bearer ' + K,
        Prefer: 'return=minimal'
      },
      body: body
    }).catch(function () {});
  } catch (e) {}
})();
