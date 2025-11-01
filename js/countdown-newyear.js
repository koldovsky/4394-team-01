function initCountdown() {
  const el = document.querySelector('.about-us__countdown');
  if (!el) return; 

  console.log('countdown-newyear: init');

  function getNextNewYear() {
    const now = new Date();
    const year = now.getFullYear();
    
    return new Date(year + 1, 0, 1, 0, 0, 0);
  }

  const target = getNextNewYear();

  function pad(v) {
    return String(v).padStart(2, '0');
  }

  let timer = null;
  function update() {
    const now = new Date();
    let diff = Math.floor((target - now) / 1000); 
    if (diff <= 0) {
      el.textContent = "Happy New Year!";
      if (timer) clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (24 * 3600));
    diff -= days * 24 * 3600;
    const hours = Math.floor(diff / 3600);
    diff -= hours * 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff - minutes * 60;

    const dEl = el.querySelector('[data-unit="days"]');
    const hEl = el.querySelector('[data-unit="hours"]');
    const mEl = el.querySelector('[data-unit="minutes"]');
    const sEl = el.querySelector('[data-unit="seconds"]');
    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(minutes);
    if (sEl) sEl.textContent = pad(seconds);
  }


  update();
  timer = setInterval(update, 1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCountdown);
} else {
 
  initCountdown();
}
