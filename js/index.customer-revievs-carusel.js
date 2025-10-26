import { customerReviews } from './customer-rewiews.js';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.customer-reviews');

  if (!reviewsContainer) return;

  customerReviews.forEach(({ stars, text, person }) => {
    const item = document.createElement('div');
    item.classList.add('customer-reviews__item');
    item.innerHTML = `
      ${stars}
      <p class="customer-reviews__text">"${text}"</p>
      <p class="customer-reviews__person">${person}</p>
    `;
    reviewsContainer.appendChild(item);
  });
});

let currentSlide = 0;

function renderCarusel() {
    const caruselItemContainer = document.querySelector('customer-reviews__item');
    caruselItemContainer.innerHTML = slides[currentSlide];
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderCarusel();
}

setInterval(showNextSlide, 3000);

