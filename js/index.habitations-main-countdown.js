// Kononenko Vladyslav
const countdownEl = document.querySelector('.countdown');
let countDownDuration = localStorage.getItem("countDownDuration");
if (!countDownDuration) {
    countDownDuration = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem("countDownDuration", countDownDuration);
} else {
    countDownDuration = parseInt(countDownDuration, 10);
}
localStorage.setItem("countdown", countDownDuration);
setInterval(() => {

    const left = countDownDuration - Date.now();
    if (left <= 0) {
        countDownDuration = Date.now() + 24 * 60 * 60 *1000;
        localStorage.setItem("countDownDuration", countDownDuration);
        return;
    }
    const h = Math.floor(left / (1000 * 60 * 60));
    const m = Math.floor((left / (1000 * 60)) % 60);
    const s = Math.floor((left / 1000) % 60);

    const hours = h.toString().padStart(2, "0");
    const minutes = m.toString().padStart(2, "0");
    const seconds = s.toString().padStart(2, "0");

    countdownEl.innerHTML = `
    <p class="countdown__part countdown__hours">${hours}</p>
    <p class="countdown__separator">:</p>
    <p class="countdown__part countdown__minutes">${minutes}</p>
    <p class="countdown__separator">:</p>
    <p class="countdown__part countdown__seconds">${seconds}</p>
  `;
}, 1000);

