// Smooth scrolling for the chevron arrows
document.querySelectorAll('.scroll-down').forEach(button => {
    button.addEventListener('click', () => {
        const nextSection = button.parentElement.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple Navigation scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.padding = '15px 0';
        header.style.background = '#fff';
    }
});