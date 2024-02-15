document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode'); // Toggle dark mode for body
        document.querySelector('nav').classList.toggle('dark-mode'); // Toggle dark mode for nav
    });
});