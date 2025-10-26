const form = document.querySelector('.contact-us__form');
const modal = document.querySelector('.contact-us__modal');
const closeBtn = document.querySelector('.contact-us__modal-close');

form.addEventListener ('submit', function(e) {
      e.preventDefault();
      modal.classList.add('active');
      form.reset();
    }
)

closeBtn.addEventListener('click', function () {
  modal.classList.remove('active');
});