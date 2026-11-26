// Portfolio v3 — small helpers only. Each part says what it does.

// 1) Phone menu: the ☰ button opens and closes the nav links.
var menuBtn = document.getElementById('menuBtn');
var mainNav = document.getElementById('mainNav');
menuBtn.addEventListener('click', function () {
  mainNav.classList.toggle('open'); // toggle = add if missing, remove if present
});

// Close the menu after a link is tapped, so the page is visible again.
var navLinks = mainNav.querySelectorAll('a');
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('open');
  });
});

// 2) Reveal on scroll: sections fade in gently as they appear on screen.
// The hidden state (.reveal-init) is added here, by this script — never by
// the stylesheet. If this script fails to run, no element ever gets the
// hidden class and the whole page stays visible.
var revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  revealItems.forEach(function (item) { item.classList.add('reveal-init'); });
  var watcher = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        watcher.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(function (item) { watcher.observe(item); });
}

// 3) Footer year: always shows the current year automatically.
document.getElementById('year').textContent = new Date().getFullYear();
