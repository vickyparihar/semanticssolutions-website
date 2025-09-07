// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.service-card, .category-card, .solution-card, .plan-card, .feature, .benefit-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Form validation and submission with Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'phone', 'service', 'message'];
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input || !input.value.trim()) {
                    isValid = false;
                    if (input) {
                        input.style.borderColor = '#e74c3c';
                        
                        // Reset border color after 3 seconds
                        setTimeout(() => {
                            input.style.borderColor = '#e0e0e0';
                        }, 3000);
                    }
                } else {
                    input.style.borderColor = '#27ae60';
                }
            });
            
            // Email validation
            const emailInput = this.querySelector('[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && !emailRegex.test(emailInput.value)) {
                isValid = false;
                emailInput.style.borderColor = '#e74c3c';
            }
            
            // Phone validation
            const phoneInput = this.querySelector('[name="phone"]');
            const phoneRegex = /^[0-9+\-\s\(\)]{10,}$/;
            if (phoneInput && !phoneRegex.test(phoneInput.value)) {
                isValid = false;
                phoneInput.style.borderColor = '#e74c3c';
            }
            
            if (isValid) {
                // Show loading message
                showMessage('Sending your message...', 'info');
                
                // Collect form data
                const formData = {
                    name: this.querySelector('[name="name"]').value,
                    email: this.querySelector('[name="email"]').value,
                    phone: this.querySelector('[name="phone"]').value,
                    company: this.querySelector('[name="company"]').value,
                    service: this.querySelector('[name="service"]').value,
                    budget: this.querySelector('[name="budget"]').value,
                    timeline: this.querySelector('[name="timeline"]').value,
                    message: this.querySelector('[name="message"]').value,
                    newsletter: this.querySelector('[name="newsletter"]').checked ? 'Yes' : 'No'
                };
                
                // Show loading message
                showMessage('Sending your message...', 'info');
                
                // Submit to Formspree AND store locally
                const form = this;
                const formDataForSubmission = new FormData(form);
                
                // Submit to Formspree for email
                fetch(form.action, {
                    method: 'POST',
                    body: formDataForSubmission,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Success - email sent via Formspree
                        showMessage(`Thank you ${formData.name}! Your message has been sent successfully. We will contact you soon via email or phone.`, 'success');
                        
                        // Store in localStorage for admin dashboard
                        try {
                            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                            submissions.push({
                                ...formData,
                                timestamp: new Date().toISOString(),
                                id: Date.now(),
                                emailSent: true
                            });
                            localStorage.setItem('formSubmissions', JSON.stringify(submissions));
                        } catch(e) {
                            console.log('Could not store form submission locally');
                        }
                        
                        // Reset form
                        form.reset();
                        
                        // Reset all border colors
                        requiredFields.forEach(field => {
                            const input = form.querySelector(`[name="${field}"]`);
                            if (input) input.style.borderColor = '#e0e0e0';
                        });
                        if (emailInput) emailInput.style.borderColor = '#e0e0e0';
                        if (phoneInput) phoneInput.style.borderColor = '#e0e0e0';
                        
                    } else {
                        // Formspree error, but still store locally
                        response.json().then(data => {
                            if (Object.hasOwnProperty.call(data, 'errors')) {
                                showMessage('Your message has been received locally. We will contact you soon at +91 90223 34441', 'success');
                            } else {
                                showMessage(`Thank you ${formData.name}! Your message has been sent successfully.`, 'success');
                            }
                            
                            // Store locally even if email failed
                            try {
                                const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                                submissions.push({
                                    ...formData,
                                    timestamp: new Date().toISOString(),
                                    id: Date.now(),
                                    emailSent: false
                                });
                                localStorage.setItem('formSubmissions', JSON.stringify(submissions));
                            } catch(e) {
                                console.log('Could not store form submission locally');
                            }
                            
                            form.reset();
                        });
                    }
                })
                .catch(error => {
                    // Network error, still store locally
                    console.error('Form submission error:', error);
                    showMessage(`Thank you ${formData.name}! Your message has been received. We will contact you soon at +91 90223 34441 or info@semanticssolutions.com`, 'success');
                    
                    // Store locally even if network failed
                    try {
                        const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
                        submissions.push({
                            ...formData,
                            timestamp: new Date().toISOString(),
                            id: Date.now(),
                            emailSent: false
                        });
                        localStorage.setItem('formSubmissions', JSON.stringify(submissions));
                    } catch(e) {
                        console.log('Could not store form submission locally');
                    }
                    
                    form.reset();
                    
                    // Reset border colors
                    requiredFields.forEach(field => {
                        const input = form.querySelector(`[name="${field}"]`);
                        if (input) input.style.borderColor = '#e0e0e0';
                    });
                    if (emailInput) emailInput.style.borderColor = '#e0e0e0';
                    if (phoneInput) phoneInput.style.borderColor = '#e0e0e0';
                });
            } else {
                showMessage('Please fill in all required fields correctly.', 'error');
            }
        });
    }

    // Show message function
    function showMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.innerHTML = message;
        let backgroundColor, textColor, borderColor;
        if (type === 'success') {
            backgroundColor = '#d4edda';
            textColor = '#155724';
            borderColor = '#c3e6cb';
        } else if (type === 'info') {
            backgroundColor = '#d1ecf1';
            textColor = '#0c5460';
            borderColor = '#bee5eb';
        } else {
            backgroundColor = '#f8d7da';
            textColor = '#721c24';
            borderColor = '#f5c6cb';
        }
        
        messageDiv.style.cssText = `
            padding: 1rem;
            margin: 1rem 0;
            border-radius: 5px;
            text-align: center;
            font-weight: 600;
            background: ${backgroundColor};
            color: ${textColor};
            border: 1px solid ${borderColor};
        `;
        
        const form = document.querySelector('.contact-form');
        if (form) {
            form.insertBefore(messageDiv, form.firstChild);
            
            // Remove message after 5 seconds
            setTimeout(() => {
                messageDiv.remove();
            }, 5000);
        }
    }

    // Counter animation for statistics
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 100;
            let count = 0;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.textContent = Math.ceil(count);
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCount();
        });
    }

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const searchableElements = document.querySelectorAll('.service-card, .category-card, .solution-card');
            
            searchableElements.forEach(element => {
                const text = element.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    element.style.display = 'block';
                } else {
                    element.style.display = 'none';
                }
            });
        });
    }

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #e74c3c;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.3s ease;
        z-index: 1000;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.opacity = '0';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    backToTopButton.addEventListener('mouseenter', () => {
        backToTopButton.style.transform = 'translateY(-3px)';
    });

    backToTopButton.addEventListener('mouseleave', () => {
        backToTopButton.style.transform = 'translateY(0)';
    });

    // Initialize tooltips if any
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: #2c3e50;
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 5px;
                font-size: 0.9rem;
                z-index: 1000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 100);
            
            this.addEventListener('mouseleave', function() {
                tooltip.remove();
            }, { once: true });
        });
    });
});
