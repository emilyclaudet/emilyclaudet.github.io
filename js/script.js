// Emily Claudet Portfolio — Multi-page navigation & interactions

document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-toggle-open');
        });

        // Close mobile nav when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-toggle-open');
            });
        });
    }

    // --- Active Nav Highlighting (page-based) ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinkElements = document.querySelectorAll('.nav-links a');

    navLinkElements.forEach(link => {
        const href = link.getAttribute('href');

        // Match page-level links
        if (href === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && href === 'index.html') {
            link.classList.add('active');
        } else if (currentPage === 'index.html' && href === '#about') {
            // "About" link on index page — highlight based on section
        }
    });

    // --- Smooth scroll for same-page anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Header scroll effect ---
    const header = document.querySelector('.header');
    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);

    // --- Intersection Observer for animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-feature, .timeline-item, .contact-method').forEach(el => {
        observer.observe(el);
    });

    // --- Profile image error handling ---
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function () {
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%; height: 100%;
                display: flex; align-items: center; justify-content: center;
                font-size: 3rem;
                background: linear-gradient(135deg, var(--parchment), var(--paper));
                color: var(--stone);
            `;
            placeholder.textContent = 'EC';
            this.parentNode.replaceChild(placeholder, this);
        });
    }
});
