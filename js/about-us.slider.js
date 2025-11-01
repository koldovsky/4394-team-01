const sliderTrack = document.querySelector('.about-us__slider-track');
const slides = Array.from(document.querySelectorAll('.about-us__slider-container'));
const prevBtn = document.getElementById('leftArrow');
const nextBtn = document.getElementById('rightArrow');

let currentIndex = slides.length;

slides.slice(0, -1).forEach(slide => sliderTrack.appendChild(slide.cloneNode(true)));
slides.slice(0, -1).forEach(slide => sliderTrack.insertBefore(slide.cloneNode(true), sliderTrack.firstChild));

const allSlides = Array.from(document.querySelectorAll('.about-us__slider-container'));

function getSlidesPerView() { return window.innerWidth <= 600 ? 1 : 3; }


function updateSliderPosition(animate = true) {
  const slide = allSlides[0];
  if (!slide) return;

  sliderTrack.style.transition = animate ? 'transform 0.5s ease' : 'none';

  if (window.innerWidth <= 600) {
    const container = sliderTrack.parentElement;

    // активний слайд
    const activeSlide = allSlides[currentIndex];
    if (!activeSlide) return;

    // кількість клонованих слайдів перед оригінальними
    const clonesBefore = slides.length - 1; 

    // компенсуємо клоновані слайди
    const correctedOffsetLeft = activeSlide.offsetLeft - clonesBefore * (activeSlide.offsetWidth + 10); // 10 = gap
    const containerCenter = container.offsetWidth / 2;
    const slideCenter = correctedOffsetLeft + activeSlide.offsetWidth / 2;

    const offset = containerCenter - slideCenter;
    sliderTrack.style.transform = `translateX(${offset}px)`;
  } else {
    // Десктоп
    const slideWidth = slide.offsetWidth;
    const gap = 30;
    const offset = -currentIndex * (slideWidth + gap);
    sliderTrack.style.transform = `translateX(${offset}px)`;
  }
}

function moveNext() { 
  currentIndex++;
  updateSliderPosition(true);

  const totalSlides = slides.length;
  setTimeout(() => { 
    if (currentIndex >= totalSlides * 2) { 
      currentIndex = totalSlides;
      updateSliderPosition(false);
    } 
  }, 500); 
} 

function movePrev() {
  currentIndex--;
  updateSliderPosition(true);

  const totalSlides = slides.length;
  setTimeout(() => {
    if (currentIndex < totalSlides) {
      currentIndex = totalSlides * 2 - 1;
      updateSliderPosition(false);
    } 
  }, 500); 
} 

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

window.addEventListener('resize', () => updateSliderPosition(false));

updateSliderPosition(false);










