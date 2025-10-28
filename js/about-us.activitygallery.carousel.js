document.addEventListener('click', (e) => {
  const modal = document.getElementById('galleryModal');
  const modalImage = document.getElementById('modalImage');

  if (!modal || !modalImage) return;

  if (e.target.matches('.activity__gallery-img img')) {
    modalImage.src = e.target.src;
    modal.classList.add('active');
  }

  if (e.target.matches('#closeGalleryModal, .gallery__modal-overlay')) {
    modal.classList.remove('active');
  }
});
