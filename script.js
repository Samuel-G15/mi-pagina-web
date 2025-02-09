// script.js

document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");
    
    // Funcionalidad del slider
    const slides = document.querySelector(".slides");
    const slide = document.querySelectorAll(".slide");
    let index = 0;

    function showNextSlide() {
        index++;
        if (index >= slide.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(showNextSlide, 3000);
});