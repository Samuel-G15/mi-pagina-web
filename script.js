document.addEventListener('DOMContentLoaded', function () {
    // Slider functionality
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach((slider) => {
        let slides = slider.querySelectorAll('.slide');
        let index = 0;

        function showNextSlide() {
            slides[index].classList.remove('active');
            index = (index + 1) % slides.length;
            slides[index].classList.add('active');
        }

        // Initialize the first slide as active
        slides[0].classList.add('active');
    });

    // Click functionality for each box
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const overlay = box.querySelector('.overlay');
        const slider = box.querySelector('.slider');
        const slides = slider.querySelectorAll('.slide');
        let index = 0;

        box.addEventListener('click', () => {
            overlay.classList.add('hidden'); // Hide the overlay on click

            // Create an expanded slide container
            const expandedSlide = document.createElement('div');
            expandedSlide.classList.add('expanded-slide');

            // Create a close button
            const closeButton = document.createElement('button');
            closeButton.classList.add('close-button');
            closeButton.innerText = 'Cerrar';
            closeButton.addEventListener('click', () => {
                document.body.removeChild(expandedSlide);
            });

            // Add the current box image to the expanded slide
            const img = document.createElement('img');
            img.src = box.querySelector('img').src;

            expandedSlide.appendChild(img);
            expandedSlide.appendChild(closeButton);
            document.body.appendChild(expandedSlide);

            // Start the slider for the expanded view
            function showNextExpandedSlide() {
                index = (index + 1) % slides.length;
                img.src = slides[index].querySelector('img').src;
            }

            setInterval(showNextExpandedSlide, 3000); // Change slide every 3 seconds
        });
    });

    // Contact form functionality
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(event.target)).toString()
        })
        .then(() => alert('Formulario enviado exitosamente.'))
        .catch(error => alert('Error al enviar el formulario: ' + error));
    });
});
