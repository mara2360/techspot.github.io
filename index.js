const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

// Event Listeners for Navigation Buttons
prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + dots.length) % dots.length;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
});

// Event Listeners for Dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-Play Functionality (Optional)
setInterval(() => {
    currentSlide = (currentSlide + 1) % dots.length;
    showSlide(currentSlide);
}, 5000); // Change slide every 5 seconds