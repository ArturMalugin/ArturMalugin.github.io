// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Добавляем анимацию для всех секций
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Добавляем анимацию для карточек
document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(card => {
    observer.observe(card);
});

// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
}

// Анимации при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-card, .project-card, .contact-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Эффект неоновой подсветки при наведении
document.querySelectorAll('.btn, .skill-card, .project-card, .contact-item').forEach(element => {
    element.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--x', `${x}px`);
        this.style.setProperty('--y', `${y}px`);
    });
});

// Анимация загрузки прогресс-баров
function animateProgressBars() {
    document.querySelectorAll('.skill-progress').forEach(progress => {
        const width = progress.style.width;
        progress.style.width = '0';
        setTimeout(() => {
            progress.style.width = width;
        }, 100);
    });
}

// Запускаем анимацию прогресс-баров при загрузке страницы
document.addEventListener('DOMContentLoaded', animateProgressBars);

// Добавляем эффект параллакса для фона
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.body.style.backgroundPositionY = `${scrolled * 0.5}px`;
});

// Добавляем эффект мерцания для неоновых элементов
function addGlowEffect() {
    const elements = document.querySelectorAll('.btn, .skill-card i, .project-card h3');
    elements.forEach(element => {
        setInterval(() => {
            const currentGlow = getComputedStyle(element).getPropertyValue('--neon-shadow');
            element.style.setProperty('--neon-shadow', 
                currentGlow === 'none' ? 
                '0 0 10px var(--secondary), 0 0 20px var(--secondary), 0 0 30px var(--secondary)' : 
                'none'
            );
        }, Math.random() * 2000 + 1000);
    });
}

// Запускаем эффект мерцания
document.addEventListener('DOMContentLoaded', addGlowEffect); 