document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide");
    showSlides(slideIndex);

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(new FormData(event.target)).toString()
        })
        .then(() => alert("Formulario enviado exitosamente."))
        .catch(error => alert("Error al enviar el formulario: " + error));
    });

    function moveSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        showSlides(slideIndex);
    }

    function showSlides(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? "block" : "none";
        });
    }

    function autoSlide() {
        moveSlide(1);
        setTimeout(autoSlide, 5000); // Cambia de imagen cada 5 segundos
    }

    document.querySelector(".prev").addEventListener("click", function() {
        moveSlide(-1);
    });

    document.querySelector(".next").addEventListener("click", function() {
        moveSlide(1);
    });

    autoSlide();
});
