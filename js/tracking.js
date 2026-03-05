// ─── FUNNEL TRACKING ─────────────────────────────────────────────────────────
// Drop your IDs below to activate. All events are wired up and ready.
//
//   GA4:     get your Measurement ID from Analytics > Admin > Data Streams
//   Clarity: get your Project ID from clarity.microsoft.com > Settings > Overview
// ─────────────────────────────────────────────────────────────────────────────

const TRACKING = {
  ga4:     '',   // e.g. 'G-XXXXXXXXXX'
  clarity: '',   // e.g. 'abcde12345'
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function ga4Event(name, params) {
  if (!TRACKING.ga4 || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

function claritySet(key, value) {
  if (!TRACKING.clarity || typeof window.clarity !== 'function') return;
  window.clarity('set', key, value);
}

// ─── Event: begin_checkout ────────────────────────────────────────────────────
// Fired when the user clicks "Start the Workshop" (data-track="begin_checkout").
// Uses event delegation so it works even though components load asynchronously.

document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-track="begin_checkout"]');
  if (!btn) return;

  ga4Event('begin_checkout', {
    currency: 'EUR',
    value: 119,
    items: [{ item_name: 'The Leadership Workshop', price: 119, quantity: 1 }],
  });

  claritySet('checkout_started', 'true');
});

// ─── Event: view_item ─────────────────────────────────────────────────────────
// Fired once when the #getreal pricing section scrolls into view.
// Components load async, so we wait for the element before observing.

function observeGetreal() {
  const el = document.getElementById('getreal');
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        ga4Event('view_item', {
          currency: 'EUR',
          value: 119,
          items: [{ item_name: 'The Leadership Workshop', price: 119, quantity: 1 }],
        });
        claritySet('viewed_pricing', 'true');
        observer.disconnect(); // fire once only
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(el);
}

(function waitForGetreal() {
  if (document.getElementById('getreal')) {
    observeGetreal();
    return;
  }
  // #getreal doesn't exist yet — watch for it to be injected by includes.js
  const mo = new MutationObserver(() => {
    if (document.getElementById('getreal')) {
      mo.disconnect();
      observeGetreal();
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
})();
