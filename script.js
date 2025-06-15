// Hide navbar on scroll down, show on scroll up
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('hide');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('hide')) {
        // Scroll down
        navbar.classList.add('hide');
    } else if (currentScroll < lastScroll && navbar.classList.contains('hide')) {
        // Scroll up
        navbar.classList.remove('hide');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for hero section
const typewriterPhrases = [
    'a Programmer',
    'a Web developer',
    'a Problem Solver'
];
const typewriterElement = document.getElementById('typewriter');
let typewriterIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = typewriterPhrases[typewriterIndex];
    if (isDeleting) {
        charIndex--;
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
        typewriterElement.classList.remove('typewriter-fade-in');
        if (charIndex === 0) {
            isDeleting = false;
            typewriterIndex = (typewriterIndex + 1) % typewriterPhrases.length;
            setTimeout(typeWriter, 600);
        } else {
            setTimeout(typeWriter, 40);
        }
    } else {
        charIndex++;
        typewriterElement.textContent = currentPhrase.substring(0, charIndex);
        if (charIndex === 1) {
            typewriterElement.classList.add('typewriter-fade-in');
        }
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1200);
        } else {
            setTimeout(typeWriter, 90);
        }
    }
}

if (typewriterElement) {
    typeWriter();
} 