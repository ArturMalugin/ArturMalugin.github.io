document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Переключение меню при клике на бургер
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        menuToggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            menuToggle.textContent = '☰';
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navList.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navList.classList.contains('active')) {
            navList.classList.remove('active');
            menuToggle.textContent = '☰';
        }
    });

    // Эффект печатающегося текста
    const heroText = document.querySelector('.hero-text');
    const text = heroText.textContent;
    heroText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Запускаем анимацию печати
    setTimeout(typeWriter, 1000);
}); 