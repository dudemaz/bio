const btn = document.querySelector('.theme');
const mainElement = document.querySelector('main');
btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        btn.classList.add('active');
    }
});