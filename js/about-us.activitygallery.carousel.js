const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const [zoomInBtn, zoomOutBtn] = document.querySelectorAll('.gallery__zoom-buttons button');
const closeBtn = document.getElementById('closeGalleryModal');
const [prevBtn, nextBtn] = document.querySelectorAll('.gallery__modal-nav-buttons button');

const galleryImages = document.querySelectorAll('.activity__gallery-images img');
let currentIndex = 0;
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    modal.classList.add('active');
    currentIndex = index;
    modalImage.src = img.src;
    modalImage.style.transform = 'scale(1)';
  });
});


  closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  document.querySelector('.gallery__modal-overlay').addEventListener('click', () => modal.classList.remove('active'));