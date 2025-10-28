// Marjan Batkivskiy
function init() {
  import('./global.header-burger.js');
  import('./index.customer-reviews-carousel.js');
  import('./about-us.activitygallery.carousel.js');
  import('./index.habitations.special-offers.js');
  import('./index.habitations-main-countdown.js');
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});