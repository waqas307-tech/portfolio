// Portfolio v2 — small helpers only. Each part says what it does.

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
var revealItems = document.querySelectorAll('.reveal');
var watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });
revealItems.forEach(function (item) { watcher.observe(item); });

// 3) Footer year: always shows the current year automatically.
document.getElementById('year').textContent = new Date().getFullYear();
