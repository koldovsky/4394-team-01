const accordions = document.querySelectorAll('.venue__accordeon-header');

accordions.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const body = item.querySelector('.venue__accordeon-body');
    const icon = button.querySelector('.venue__accordeon-icon');
    const isOpen = button.classList.contains('active');

    // Закриваємо всі інші
    document.querySelectorAll('.venue__accordeon-body').forEach(el => el.style.maxHeight = 0);
    document.querySelectorAll('.venue__accordeon-header').forEach(el => {
      el.classList.remove('active');
      el.querySelector('.venue__accordeon-icon').textContent = '+';
    });

    // Відкриваємо натиснутий, якщо був закритий
    if (!isOpen) {
      button.classList.add('active');
      icon.textContent = '-';
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});



