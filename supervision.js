(function () {
  var data = window.SUPERVISION_DATA || [];
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>'"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]; }); };
  var PAGE = 30, shown = PAGE, year = 'all';

  var count = function (f) { return data.filter(f).length; };
  var years = Array.from(new Set(data.map(function (x) { return x.year; }))).sort(function (a, b) {
    if (a === 'Unspecified') return 1; if (b === 'Unspecified') return -1; return b.localeCompare(a);
  });
  var real = years.filter(function (y) { return y !== 'Unspecified'; });

  $('sv-stats').innerHTML = [
    [data.length, 'Theses recorded'],
    [count(function (x) { return x.role === 'Primary'; }), 'As primary supervisor'],
    [count(function (x) { return x.role === 'Co-supervisor'; }), 'As co-supervisor'],
    [real[real.length - 1] + '–' + real[0], 'Years covered']
  ].map(function (m) { return '<div class="metric"><b>' + m[0] + '</b><span>' + m[1] + '</span></div>'; }).join('');

  function chips() {
    $('year-chips').innerHTML = ['all'].concat(years).map(function (y) {
      var n = y === 'all' ? data.length : count(function (x) { return x.year === y; });
      var label = y === 'all' ? 'All years' : (y === 'Unspecified' ? 'Year n/a' : y);
      return '<button data-y="' + y + '"' + (y === year ? ' class="on"' : '') + '>' + label + '<b>' + n + '</b></button>';
    }).join('');
  }

  function render() {
    var q = $('search').value.trim().toLowerCase(), role = $('role-filter').value, sort = $('sort').value;
    var rows = data.filter(function (x) {
      return (year === 'all' || x.year === year) && (role === 'all' || x.role === role) &&
        (!q || (x.name + ' ' + x.title + ' ' + x.program).toLowerCase().indexOf(q) > -1);
    });
    var key = function (x) { return (x.date || (x.year === 'Unspecified' ? '0000' : x.year)); };
    rows.sort(function (a, b) {
      if (sort === 'az') return a.title.localeCompare(b.title);
      return sort === 'new' ? key(b).localeCompare(key(a)) : key(a).localeCompare(key(b));
    });
    $('result-count').textContent = rows.length + ' thesis' + (rows.length === 1 ? '' : 'es') + (rows.length > shown ? ' · showing ' + shown : '');
    $('record-list').innerHTML = rows.length ? rows.slice(0, shown).map(function (x) {
      return '<div class="row sv-row"><span class="when">' + (x.year === 'Unspecified' ? '—' : esc(x.year)) + '</span><div><h3>' + esc(x.title) + '</h3><p class="who"><b>' + esc(x.name) + '</b> · ' + esc(x.program) + '</p></div><span class="end chip ' + (x.role === 'Primary' ? 'blue' : '') + '">' + (x.role === 'Primary' ? 'Primary' : 'Co-supervisor') + '</span></div>';
    }).join('') : '<p class="empty">No theses match these filters.</p>';
    $('more').hidden = rows.length <= shown;
  }

  $('year-chips').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    year = b.dataset.y; shown = PAGE; chips(); render();
  });
  ['search', 'role-filter', 'sort'].forEach(function (id) { $(id).addEventListener(id === 'search' ? 'input' : 'change', function () { shown = PAGE; render(); }); });
  $('more').addEventListener('click', function () { shown += PAGE; render(); });
  chips(); render();
})();
