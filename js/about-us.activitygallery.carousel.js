// const [zoomInBtn, zoomOutBtn] = document.querySelectorAll('.gallery__zoom-buttons button');
// const [prevBtn, nextBtn] = document.querySelectorAll('.gallery__modal-nav-buttons button');
const modal = document.getElementById('galleryModal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeGalleryModal');
const overlay = document.querySelector('.gallery__modal-overlay');

closeBtn.addEventListener('click', () => modal.classList.remove('active'));
overlay.addEventListener('click', () => modal.classList.remove('active'));

function attachGalleryHandlers(container) {
  const galleryImages = container.querySelectorAll('.activity__gallery-images img');
  galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      modal.classList.add('active');
    });
  });
}

document.body.addEventListener('htmx:afterSwap', (event) => {
  if (event.target.querySelectorAll) {
    attachGalleryHandlers(event.target);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.activity__gallery').forEach(attachGalleryHandlers);
});

