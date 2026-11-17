/* Optional live data from published Google Sheets (see data-config.js).
   If no CSV URL is set, the content already written in each HTML page is kept. */
(async function () {
  var cfg = window.SITE_DATA_CONFIG || {};
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var setSource = function (id, live) { var el = document.getElementById(id); if (el && live) el.textContent = 'Live from Google Sheets'; };

  var blog = document.getElementById('blog-list');
  if (blog) {
    var rows = window.BLOG_POSTS || [], live = false;
    try { var x = await window.loadPublishedCsv(cfg.blogCsv); if (x && x.length) { rows = x; live = true; } } catch (e) { console.warn('Blog: using local data', e); }
    blog.innerHTML = rows.map(function (p) {
      var url = p.url || ('post.html?slug=' + encodeURIComponent(p.slug));
      return '<a class="card" href="' + esc(url) + '"><span class="kicker">' + esc(p.date) + ' · ' + esc(p.tag || 'Note') + '</span><h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p><span class="more">Read →</span></a>';
    }).join('');
  }

  var talks = document.getElementById('speaking-list');
  if (talks && cfg.speakingCsv) {
    try {
      var r = await window.loadPublishedCsv(cfg.speakingCsv);
      if (r && r.length) {
        setSource('speaking-source', true);
        talks.innerHTML = r.map(function (t) {
          return '<div class="row"><span class="when">' + esc(t.year) + '</span><div><h3>' + esc(t.event) + '</h3><p>' + esc(t.role) + (t.topic ? ' · ' + esc(t.topic) : '') + '</p></div>' + (t.url ? '<a class="end" href="' + esc(t.url) + '">Source ↗</a>' : '<span></span>') + '</div>';
        }).join('');
      }
    } catch (e) { console.warn('Talks: using local data', e); }
  }

  var books = document.getElementById('books-list');
  if (books && cfg.booksCsv) {
    try {
      var b = await window.loadPublishedCsv(cfg.booksCsv);
      if (b && b.length) {
        setSource('books-source', true);
        books.innerHTML = b.map(function (k) {
          return '<article class="card book"><div class="cover">' + (k.cover ? '<img src="' + esc(k.cover) + '" alt="Cover: ' + esc(k.title) + '" loading="lazy">' : esc(k.title)) + '</div><div><span class="kicker">' + esc(k.year) + ' · ' + esc(k.publisher) + '</span><h3>' + esc(k.title) + '</h3><p>' + esc(k.authors) + (k.pages ? ' · ' + esc(k.pages) + ' pages' : '') + (k.isbn ? ' · ISBN ' + esc(k.isbn) : '') + '</p>' + (k.url ? '<a class="small" href="' + esc(k.url) + '">View book ↗</a>' : '') + '</div></article>';
        }).join('');
      }
    } catch (e) { console.warn('Books: using local data', e); }
  }
})();
