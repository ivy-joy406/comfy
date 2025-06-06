// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-collapse').classList.toggle('show');
});

// FAQ accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
        
        // Close other open items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
    });
});

// Testimonials slider functionality
function scrollTestimonials(direction) {
    const slider = document.querySelector('.testimonials-slider');
    const cardWidth = document.querySelector('.testimonial-card').offsetWidth;
    const scrollAmount = cardWidth + 20;

    if (direction === 'next') {
        slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'prev') {
        slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
}