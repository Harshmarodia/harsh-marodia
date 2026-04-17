// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Hover effect for links
    const links = document.querySelectorAll('a, .btn, .skill-tag');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorOutline.style.background = 'rgba(0, 242, 255, 0.1)';
            cursorOutline.style.borderColor = 'var(--accent)';
        });
        link.addEventListener('mouseleave', () => {
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.background = 'transparent';
            cursorOutline.style.borderColor = 'var(--primary)';
        });
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll('.reveal-up');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Parallax Effect for Mesh Balls
window.addEventListener('scroll', () => {
    const balls = document.querySelectorAll('.mesh-ball');
    const scrollY = window.scrollY;
    
    balls.forEach((ball, index) => {
        const speed = (index + 1) * 0.2;
        ball.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Smooth magnetic effect for Hero Image (Subtle)
const heroImage = document.querySelector('.hero-image-wrapper');
if (heroImage) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        const moveX = (mouseX - centerX) / 50;
        const moveY = (mouseY - centerY) / 50;
        
        heroImage.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
    });
}
