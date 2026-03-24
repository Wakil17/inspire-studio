/* ========================================
   INSPIRE STUDIO — JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // --- Scroll Reveal (IntersectionObserver) ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));


    // --- Header scroll behavior ---
    const header = document.getElementById('site-header');
    let lastScrollY = 0;

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check


    // --- Hero Carousel ---
    const slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }


    // --- Mobile Navigation ---
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mainNav.classList.contains('open');

            mainNav.classList.toggle('open');
            menuToggle.classList.toggle('active');
            document.body.classList.toggle('nav-open');
            menuToggle.setAttribute('aria-expanded', !isOpen);
            menuToggle.setAttribute('aria-label', isOpen ? 'Ouvrir le menu' : 'Fermer le menu');
        });

        // Close nav on link click
        mainNav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('open');
                menuToggle.classList.remove('active');
                document.body.classList.remove('nav-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
            });
        });
    }


    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const offsetTop = targetEl.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    // --- Parallax subtle on hero (desktop only) ---
    if (window.innerWidth > 768) {
        const heroContent = document.querySelector('.hero-content');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const heroHeight = document.querySelector('.hero').offsetHeight;

            if (scrollY < heroHeight) {
                const progress = scrollY / heroHeight;
                heroContent.style.transform = `translateY(${scrollY * 0.15}px)`;
                heroContent.style.opacity = 1 - progress * 0.8;
            }
        }, { passive: true });
    }

});
