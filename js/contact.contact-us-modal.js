// Kysten Kateryna

const form = document.querySelector('.contact-us__form');
const modal = document.querySelector('.contact-us__modal');
const closeButtons = document.querySelectorAll('.contact-us__modal-close');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  }).then(function (response) {
    if (response.ok) {
      modal.classList.add('active');
      form.reset();
    } else {
      alert('Oops! There was a problem submitting your form');
    }
  });

  closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      modal.classList.remove('active');
    });
  });
});
