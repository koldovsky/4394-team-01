import { customerReviews } from './customer-rewiews.js';

const slideTemplates = customerReviews.map(({ stars, text, person }) => 
    `<div class="customer-reviews__item">${stars}<p class="customer-reviews__text">"${text}"</p><p class="customer-reviews__person">${person}</p></div>`
);

let currentSlide = 0;

function renderCarousel() {
    const carouselItemsContainer = document.querySelector('.customer-reviews');
    if (!carouselItemsContainer) return;

    carouselItemsContainer.innerHTML = slideTemplates[currentSlide];
    if (window.matchMedia("(min-width: 640px)").matches) {
        const secondSlideIndex = (currentSlide + 1) % customerReviews.length;
        carouselItemsContainer.innerHTML += slideTemplates[secondSlideIndex];
        if (window.matchMedia("(min-width: 1024px)").matches) {
            const thirdSlideIndex = (currentSlide + 2) % customerReviews.length;
            carouselItemsContainer.innerHTML += slideTemplates[thirdSlideIndex];
        }
    }
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % customerReviews.length;
    renderCarousel();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + customerReviews.length) % customerReviews.length;
    renderCarousel();
}

renderCarousel();

const nextBtn = document.querySelector('.carousel-control-next');

nextBtn.addEventListener('click', showNextSlide)

const prevBtn = document.querySelector('.carousel-control-prev');
prevBtn.addEventListener('click', showPrevSlide);

window.addEventListener('resize', renderCarousel);