// ─── Topics scroll-reveal — letter by letter ─────────────────────────────────
// Each character in .topic-item is wrapped in a .topic-letter span.
// As the user scrolls through #topics, letters progressively activate
// (gray-300 → gray-700) based on how far the reading line has travelled
// through the section. Reversible on scroll up.
// ─────────────────────────────────────────────────────────────────────────────

function initTopicsReveal() {
  var items = document.querySelectorAll('.topic-item');
  if (!items.length) return;

  // ── 1. Split every item's text into individual letter spans ──────────────
  var allLetters = [];

  items.forEach(function (item) {
    var text = item.textContent;
    item.textContent = '';

    Array.from(text).forEach(function (char) {
      var span = document.createElement('span');
      span.className = 'topic-letter';
      span.textContent = char;
      item.appendChild(span);
      allLetters.push(span);
    });
  });

  var section   = document.getElementById('topics');
  var total     = allLetters.length;
  var ticking   = false;

  // ── 2. Update active letter count based on scroll position ───────────────
  function update() {
    var vh       = window.innerHeight;
    var rect     = section.getBoundingClientRect();
    // Reading line sits at 50% of the viewport
    var progress = (vh * 0.5 - rect.top) / rect.height;
    var active   = Math.round(Math.max(0, Math.min(1, progress)) * total);

    allLetters.forEach(function (letter, i) {
      letter.classList.toggle('active', i < active);
    });
  }

  // ── 3. rAF-throttled scroll handler ──────────────────────────────────────
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        update();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update,   { passive: true });
  update();
}

// ── Wait for async-loaded components before initialising ───────────────────
(function waitForTopics() {
  if (document.querySelector('.topic-item')) {
    initTopicsReveal();
    return;
  }
  var mo = new MutationObserver(function () {
    if (document.querySelector('.topic-item')) {
      mo.disconnect();
      initTopicsReveal();
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();
