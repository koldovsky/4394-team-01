const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const imageWrapper = document.querySelector('.image-wrapper');
const closeBtn = document.getElementById('closeGalleryModal');
const overlay = document.querySelector('.gallery__modal-overlay');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let scale = 1;
let currentIndex = 0;
const galleryImages = Array.from(document.querySelectorAll('.activity__gallery-images img'));

galleryImages.forEach((img, i) => {
  img.addEventListener('click', () => {
    modalImage.src = img.src;
    modal.classList.add('active');
    scale = 1;
    imageWrapper.style.transform = `scale(${scale})`;
    currentIndex = i;
  });
});

const closeModal = () => modal.classList.remove('active');
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

zoomInBtn.addEventListener('click', () => {
  scale += 0.2;
  imageWrapper.style.transform = `scale(${scale})`;
});

zoomOutBtn.addEventListener('click', () => {
  scale = Math.max(0.2, scale - 0.2);
  imageWrapper.style.transform = `scale(${scale})`;
});

const showImage = (index) => {
  if (index < 0) index = galleryImages.length - 1;
  if (index >= galleryImages.length) index = 0;
  currentIndex = index;
  modalImage.src = galleryImages[currentIndex].src;
  scale = 1;
  imageWrapper.style.transform = `scale(${scale})`;
};

prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
nextBtn.addEventListener('click', () => showImage(currentIndex + 1));
