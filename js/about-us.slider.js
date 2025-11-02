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
    const activeSlide = allSlides[currentIndex];
    if (!activeSlide) return;

    const containerCenter = container.offsetWidth / 2;
    const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
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

  if (window.innerWidth > 600) {
    // Десктопна логіка без змін
    const totalSlides = slides.length;
    setTimeout(() => {
      if (currentIndex < totalSlides) {
        currentIndex = totalSlides * 2 - 1;
        updateSliderPosition(false);
      } 
    }, 500); 
  } else {
    // Мобільна версія — робимо цикл через клоновані слайди
    const totalSlides = slides.length;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
      updateSliderPosition(false); // без анімації, щоб не було ривка
    }
  }
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);

window.addEventListener('resize', () => {
  if (window.innerWidth <= 600) currentIndex = 0; // початок для мобільного
  updateSliderPosition(false);
});

window.addEventListener('resize', () => updateSliderPosition(false));

updateSliderPosition(false);










