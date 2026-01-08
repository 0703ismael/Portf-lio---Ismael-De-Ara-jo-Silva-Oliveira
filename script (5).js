// Inicializar animações
AOS.init({
    duration: 1000,
    once: true
});

// Toggle de Tema
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

// Carregar tema salvo
const currentTheme = localStorage.getItem('theme') || 'light-theme';
body.className = currentTheme;
updateIcon();

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('theme', 'dark-theme');
    } else {
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('theme', 'light-theme');
    }
    updateIcon();
});

function updateIcon() {
    themeBtn.innerHTML = body.classList.contains('dark-theme') ? '☀️' : '🌙';
}

// Scroll Suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
