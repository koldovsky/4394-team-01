import { customerReviews } from './customer-rewiews.js';

document.addEventListener('DOMContentLoaded', () => {
  const reviewsContainer = document.querySelector('.customer-reviews');
  if (!reviewsContainer) return;

  let currentIndex = 0;

  // створюємо DOM для всіх слайдів
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

  const slides = document.querySelectorAll('.customer-reviews__item');
  
// let currentSlide = 0;

// function renderCarusel() {
//     const caruselItemContainer = document.querySelector('customer-reviews__list');
//     caruselItemContainer.innerHTML = reviewsContainer[currentSlide];
// }

// function showNextSlide() {
//     currentSlide = (currentSlide + 1) % reviewsContainer.length;
//     renderCarusel();
// }

// setInterval(showNextSlide, 3000);

