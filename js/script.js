// Modern Personal Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            navToggle.classList.toggle('nav-toggle-open');
        });
    }
    
    // Close mobile nav when clicking on navigation links
    const navLinkElements = document.querySelectorAll('.nav-links a');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile nav if open
            if (navLinks && navLinks.classList.contains('nav-open')) {
                navLinks.classList.remove('nav-open');
                navToggle.classList.remove('nav-toggle-open');
            }
        });
    });
    
    // Active navigation highlighting for multi-page site
    function setActiveNavLink() {
        const currentPage = window.location.pathname;
        const navLinksArray = Array.from(document.querySelectorAll('.nav-links a'));
        
        navLinksArray.forEach(link => {
            link.classList.remove('active');
            const linkPath = link.getAttribute('href');
            
            // Handle index page and about/projects/contact pages
            if ((currentPage.endsWith('index.html') || currentPage === '/' || currentPage === '') && linkPath === 'index.html') {
                link.classList.add('active');
            } else if (currentPage.includes(linkPath) && linkPath !== 'index.html') {
                link.classList.add('active');
            }
        });
    }
    
    // Set active navigation on page load
    setActiveNavLink();
    
    // Scroll event listener for header background
    const header = document.querySelector('.header');
    let ticking = false;
    
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                // Add/remove header background on scroll
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
    
    // Contact form handling
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        });
    }
    
    // Utility functions
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            color: 'white',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-entry, .contact-method');
    animateElements.forEach(el => observer.observe(el));
    
    
    // Profile image error handling
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.className = 'profile-placeholder-fallback';
            placeholder.innerHTML = '👤';
            placeholder.style.cssText = `
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 4rem;
                background: linear-gradient(135deg, #2563eb, #06b6d4);
                color: white;
            `;
            
            this.parentNode.replaceChild(placeholder, this);
        });
    }
    
    // Add CSS classes for enhanced mobile navigation
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.98);
                backdrop-filter: blur(10px);
                flex-direction: column;
                padding: 1rem;
                box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
            }
            
            .nav-links.nav-open {
                display: flex;
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            
            .nav-links a.active {
                color: var(--primary-color);
                background: var(--background-alt);
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
            }
            
            .nav-toggle-open span:nth-child(1) {
                transform: rotate(45deg) translate(6px, 6px);
            }
            
            .nav-toggle-open span:nth-child(2) {
                opacity: 0;
            }
            
            .nav-toggle-open span:nth-child(3) {
                transform: rotate(-45deg) translate(6px, -6px);
            }
        }
        
        .header.scrolled {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Personal website loaded successfully! 🚀');
});

// Service Worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Only register service worker in production
        // navigator.serviceWorker.register('/sw.js');
    });
}