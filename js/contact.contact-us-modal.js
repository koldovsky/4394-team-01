// Kysten Kateryna

const form = document.querySelector('.contact-us__form');
const modal = document.querySelector('.contact-us__modal');
const closeButtons = document.querySelectorAll('.contact-us__modal-close');

form.addEventListener ('submit', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    form.reset();
  }
)

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    modal.classList.remove('active');
  });
});