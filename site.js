/* =====================================================================
   DIE GRYN — shared header, mobile menu and footer for EVERY page.
   Edit links HERE once and every page updates.
   Each page only needs:
     <div id="site-header"></div>   right after <body>
     <div id="site-footer"></div>   before </body>
     <script src="/site.js"></script> at the end
   ===================================================================== */

var NAV = [
  { label: 'MUSIC',      href: '/#music' },
  { label: 'VIDEOS',     href: '/#videos' },
  { label: 'SHOP',       href: '/#shop' },
  { label: 'NEWSLETTER', href: '/#newsletter' },
  { label: 'ABOUT',      href: '/about' },
    { label: 'SUPPORT',    href: 'https://shop.diegryn.com/support', external: true },
];

/* desktop: true = also shown in the desktop header (mobile menu shows all) */
var SOCIALS = [
  { name: 'Instagram',   icon: 'fa-instagram',  href: 'https://www.instagram.com/diegryn/', desktop: true },
  { name: 'TikTok',      icon: 'fa-tiktok',     href: 'https://www.tiktok.com/@diegryn', desktop: true },
  { name: 'YouTube',     icon: 'fa-youtube',    href: 'https://www.youtube.com/@DieGryn', desktop: true },
  { name: 'Spotify',     icon: 'fa-spotify',    href: 'https://open.spotify.com/artist/2SOlNu7uSepBZmPI4YEQA2', desktop: true },
  { name: 'Apple Music', icon: 'fa-apple',      href: 'https://music.apple.com/es/artist/die-gryn/1852066460', desktop: true },
  { name: 'Amazon Music',icon: 'fa-amazon',     href: 'https://www.amazon.com/music/player/artists/B0G1P836JN/die-gryn' },
  { name: 'Bandcamp',    icon: 'fa-bandcamp',   href: 'https://diegryn.bandcamp.com' },
  { name: 'SoundCloud',  icon: 'fa-soundcloud', href: 'https://soundcloud.com/diegryn' },
  { name: 'Facebook',    icon: 'fa-facebook',   href: 'https://www.facebook.com/diegryn/' },
  { name: 'WhatsApp',    icon: 'fa-whatsapp',   href: 'https://whatsapp.com/channel/0029Vb8FTAPEgGfShRFmF90X' }
];

var LEGAL = [
  { label: 'PRIVACY', href: '/privacy' },
  { label: 'COOKIES', href: '/cookies' },
  { label: 'TERMS',   href: '/terms' },
  { label: 'PRESS',   href: '/press' }
];

/* ---------- nothing below needs editing ---------- */
(function () {
  function socials(list) {
    return list.map(function (s) {
      return '<a href="' + s.href + '" target="_blank" rel="noopener" aria-label="' + s.name + '"><i class="fa-brands ' + s.icon + '"></i></a>';
    }).join('');
  }
  var navLinks = NAV.map(function (n) { return '<a href="' + n.href + '"' + (n.external ? ' target="_blank" rel="noopener"' : '') + '>' + n.label + '</a>'; }).join('');

  var h = document.getElementById('site-header');
  if (h) h.outerHTML =
    '<header class="header" id="header">' +
      '<a href="/" class="logo" aria-label="Die Gryn, home">DIE GRYN</a>' +
      '<nav class="nav" aria-label="Main">' + navLinks + '</nav>' +
      '<div class="socials">' + socials(SOCIALS.filter(function (s) { return s.desktop; })) + '</div>' +
      '<button class="menu-btn" aria-label="Open menu" type="button">☰</button>' +
    '</header>' +
    '<nav class="mobile-nav" id="mobile-nav" aria-label="Mobile">' +
      '<button class="mobile-close" aria-label="Close menu" type="button">✕</button>' +
      navLinks +
      '<div class="socials">' + socials(SOCIALS) + '</div>' +
    '</nav>';

  var f = document.getElementById('site-footer');
  if (f) f.outerHTML =
    '<footer><span>©' + new Date().getFullYear() + ' DIE GRYN</span>' +
    '<div class="socials footer-socials">' + socials(SOCIALS) + '</div>' +
    '<nav aria-label="Legal">' +
    LEGAL.map(function (l) { return '<a href="' + l.href + '">' + l.label + '</a>'; }).join('') +
    '</nav></footer>';

  var menu = document.getElementById('mobile-nav');
  function toggle(open) { menu.classList.toggle('open', open); }
  document.querySelector('.menu-btn').addEventListener('click', function () { toggle(true); });
  document.querySelector('.mobile-close').addEventListener('click', function () { toggle(false); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { toggle(false); }); });

  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 40 || document.body.classList.contains('solid-header')); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
