const init = () => {
  const openModals = document.querySelectorAll('.modal-open-btn') ?? [];
  const closeModals = document.querySelectorAll('.modal-close-btn') ?? [];
  const modal = document.getElementById('modal');

  if (!modal) return;

  openModals.forEach((openModal) => {
    openModal.addEventListener('click', () => {
      modal.setAttribute('open', 'true');
    });
  });

  closeModals.forEach((closeModal) => {
    closeModal?.addEventListener('click', () => {
      modal.removeAttribute('open');
    });
  });
};

init();
