const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

// Добавляем обработчик на клик
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active'); // Переключаем класс для показа/скрытия меню
  menuToggle.classList.toggle('open'); // Изменяем класс кнопки для стилизации
});