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

 
  let heading = el.querySelector('.countdown-heading');
  if (!heading) {
    heading = document.createElement('div');
    heading.className = 'countdown-heading';
    const text = 'Time left until New Year';
  
    let letterIndex = 0;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      const span = document.createElement('span');
      span.className = 'countdown-heading-letter';
      span.textContent = ch;
      if (ch !== ' ') {
       
        span.style.color = (letterIndex % 2 === 0) ? 'var(--accent-color)' : 'var(--scroll-up-color)';
        letterIndex++;
      }
      heading.appendChild(span);
    }
    el.insertBefore(heading, el.firstChild);

  
    const items = Array.from(el.querySelectorAll('.countdown-item'));
    if (items.length) {
      const row = document.createElement('div');
      row.className = 'countdown-row';
      items.forEach(i => row.appendChild(i));
      el.appendChild(row);
    }
  }

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
