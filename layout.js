/* Shared header + footer for every page. Edit the menu here once. */
(function () {
  var NAV = [
    ['bio.html', 'About'],
    ['research.html', 'Research'],
    ['publications.html', 'Publications'],
    ['books.html', 'Books'],
    ['supervision.html', 'Supervision'],
    ['speaking.html', 'Talks'],
    ['blog.html', 'Blog'],
    ['cv.html', 'CV']
  ];
  var ALIAS = { 'project.html': 'research.html', 'code.html': 'research.html', 'papers.html': 'publications.html', 'post.html': 'blog.html' };
  var here = location.pathname.split('/').pop() || 'index.html';
  var active = ALIAS[here] || here;

  var header = document.createElement('header');
  header.className = 'site-header';
  header.innerHTML =
    '<a class="skip" href="#main">Skip to content</a>' +
    '<div class="wrap">' +
    '<a class="brand" href="index.html"><i>YAS</i><span>Yuita Arum Sari<small>Informatics · Universitas Brawijaya</small></span></a>' +
    '<button class="menu-btn" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
    '<nav class="nav" id="site-nav">' +
    NAV.map(function (n) { return '<a href="' + n[0] + '"' + (n[0] === active ? ' class="active" aria-current="page"' : '') + '>' + n[1] + '</a>'; }).join('') +
    '<a class="cta" href="index.html#contact">Contact</a></nav></div>';
  document.body.prepend(header);

  var footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML =
    '<div class="wrap"><span>© ' + new Date().getFullYear() + ' Yuita Arum Sari, Ph.D.</span>' +
    '<nav><a href="mailto:yuita@ub.ac.id">Email</a>' +
    '<a href="https://scholar.google.com/citations?user=J5gQoNcAAAAJ&hl=en">Google Scholar</a>' +
    '<a href="https://www.scopus.com/authid/detail.uri?authorId=57189058237">Scopus</a>' +
    '<a href="https://sinta.kemdiktisaintek.go.id/authors/profile/6181778">SINTA</a>' +
    '<a href="https://id.linkedin.com/in/yuitaarumsari">LinkedIn</a>' +
    '<a href="code.html">Code &amp; data</a></nav></div>';
  document.body.append(footer);

  var btn = header.querySelector('.menu-btn'), nav = header.querySelector('.nav');
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') nav.classList.remove('open'); });
})();
