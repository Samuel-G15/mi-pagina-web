document.addEventListener("DOMContentLoaded", function() {
    console.log("Página cargada correctamente.");

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", async function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formObject)
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message || 'Formulario enviado correctamente.');
            } else {
                const errorResult = await response.json();
                alert(errorResult.message || 'Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
        }
    });

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