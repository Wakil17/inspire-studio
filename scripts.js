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


    // --- Pricing Tabs (Tarifs page) ---
    document.querySelectorAll('.pricing-card').forEach(card => {
        card.querySelectorAll('.pricing-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.dataset.tab;
                card.querySelectorAll('.pricing-tab').forEach(t => t.classList.remove('active'));
                card.querySelectorAll('.pricing-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                card.querySelector(`.pricing-tab-content[data-content="${target}"]`).classList.add('active');
            });
        });
    });


    // --- Partners Category Tabs ---
    const tabs = document.querySelectorAll('.partners-tab');
    const partnerCards = document.querySelectorAll('.partner-card');

    if (tabs.length > 0 && partnerCards.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Skip if already active
                if (tab.classList.contains('active')) return;

                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.dataset.filter;

                // Fade out all visible cards
                partnerCards.forEach(card => {
                    if (!card.classList.contains('card-hidden')) {
                        card.classList.add('card-fade-out');
                    }
                });

                // After fade-out completes, swap visibility
                setTimeout(() => {
                    let visibleIndex = 0;

                    partnerCards.forEach(card => {
                        const category = card.dataset.category;
                        const shouldShow = filter === 'all' || category === filter;

                        // Reset all animation classes
                        card.classList.remove('card-fade-out', 'card-fade-in');

                        if (shouldShow) {
                            card.classList.remove('card-hidden');
                            card.classList.add('visible');

                            // Stagger only visible cards
                            const delay = visibleIndex * 80;
                            visibleIndex++;

                            setTimeout(() => {
                                card.classList.add('card-fade-in');
                            }, delay);
                        } else {
                            card.classList.add('card-hidden');
                        }
                    });
                }, 300);
            });
        });
    }

});
