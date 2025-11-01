const sliderTrack = document.querySelector('.about-us__slider-track');
const slides = Array.from(document.querySelectorAll('.about-us__slider-container'));
const prevBtn = document.getElementById('leftArrow');
const nextBtn = document.getElementById('rightArrow');

let currentIndex = slides.length; 


slides.forEach(slide => sliderTrack.appendChild(slide.cloneNode(true)));
slides.forEach(slide => sliderTrack.insertBefore(slide.cloneNode(true), sliderTrack.firstChild));

const allSlides = Array.from(document.querySelectorAll('.about-us__slider-container'));

function getSlidesPerView() {
  return window.innerWidth <= 900 ? 1 : 3;
}

function updateSliderPosition(animate = true) {
  const slideWidth = allSlides[0].offsetWidth + 30;
  sliderTrack.style.transition = animate ? 'transform 0.5s ease' : 'none';
  const offset = -currentIndex * slideWidth;
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

function moveNext() {
  currentIndex++;
  updateSliderPosition();

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
  updateSliderPosition();

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















