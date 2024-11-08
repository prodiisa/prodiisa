// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos
    showSlide(currentSlide);
});
