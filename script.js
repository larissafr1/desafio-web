document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('darkmode');
        document.querySelector('.header_navigation').classList.toggle('darkmode');
        document.querySelector('.section-news').classList.toggle('darkmode');
        document.querySelector('.price').classList.toggle('darkmode');
        document.querySelector('.section-gif').classList.toggle('darkmode');
        document.querySelector('.recomendations').classList.toggle('darkmode');
        document.querySelector('.recomendations button').classList.toggle('darkmode');
    });
});