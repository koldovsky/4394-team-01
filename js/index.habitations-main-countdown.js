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
        countdownEl.textContent = "Час вийшов!";
        localStorage.removeItem("countdownEnd");
        return;
    }
    const h = Math.floor(left / (1000 * 60 * 60));
    const m = Math.floor((left / (1000 * 60)) % 60);
    const s = Math.floor((left / 1000) % 60);
    countdownEl.textContent = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}, 1000);

