import { customerReviews } from './customer-rewiews.js';

const slideTemplates = customerReviews.map(({ stars, text, person }) => 
    `<div class="customer-reviews__item">${stars}<p class="customer-reviews__text">"${text}"</p><p class="customer-reviews__person">${person}</p></div>`
);

let currentSlide = 0;

function renderCarusel() {
    const caruselItemsContainer = document.querySelector('.customer-reviews');
    if (!caruselItemsContainer) return;

    caruselItemsContainer.innerHTML = slideTemplates[currentSlide];
    if (window.matchMedia("(min-width: 640px)").matches) {
        const secondSlideIndex = (currentSlide + 1) % slides.length;
        carouselItemsContainer.innerHTML += slideTemplates[secondSlideIndex];
        if (window.matchMedia("(min-width: 1024px)").matches) {
            const thirdSlideIndex = (currentSlide + 2) % slides.length;
            carouselItemsContainer.innerHTML += slideTemplates[thirdSlideIndex];
        }
    }
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderCarousel();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderCarousel();
}

renderCarousel();




  

//   const slides = document.querySelectorAll('.customer-reviews__item');

//   // функція для показу конкретного слайду
//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.style.display = i === index ? 'block' : 'none';
//     });
//   }

//   // кнопки керування
//   const prevBtn = document.createElement('button');
//   prevBtn.classList.add('customer-reviews__btn', 'customer-reviews__btn--prev');
//   prevBtn.textContent = '←';

//   const nextBtn = document.createElement('button');
//   nextBtn.classList.add('customer-reviews__btn', 'customer-reviews__btn--next');
//   nextBtn.textContent = '→';

//   reviewsContainer.parentElement.appendChild(prevBtn);
//   reviewsContainer.parentElement.appendChild(nextBtn);

//   // обробники натискання
//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   });

//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   });

//   // автопрокрутка (опціонально)
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }, 5000);

//   // показати перший слайд
//   showSlide(currentIndex);