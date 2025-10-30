document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".customer-reviews");
  const btnPrev = document.querySelector(".carousel-control-prev");
  const btnNext = document.querySelector(".carousel-control-next");

  if (!carousel || !btnPrev || !btnNext) return;

  // Прокрутка на ширину блоку
  const scrollStep = carousel.offsetWidth * 0.9;

  btnNext.addEventListener("click", () => {
    carousel.scrollBy({
      left: scrollStep,
      behavior: "smooth", // плавна прокрутка
    });
  });

  btnPrev.addEventListener("click", () => {
    carousel.scrollBy({
      left: -scrollStep,
      behavior: "smooth",
    });
  });
});