let popupBg = document.querySelector('.modal-section'); // Фон попап окна
let popup = document.querySelector('.modal-form'); // Само окно
let openPopupButtons = document.querySelectorAll('.hero-button'); // Кнопки для показа окна
openPopupButtons.forEach(button => {
  // Перебираем все кнопки
  button.addEventListener('click', e => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add('active'); // Добавляем класс 'active' для фона
    popup.classList.add('active'); // И для самого окна
  });
});
