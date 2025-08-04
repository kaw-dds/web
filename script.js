// Close notification banner
function closeBanner() {
    const banner = document.querySelector('.notification-banner');
    if (banner) {
        banner.classList.add('hidden');
    }
}

// Email form submission
document.addEventListener('DOMContentLoaded', function() {
    const signupForms = document.querySelectorAll('.signup-form');
    signupForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.email-input').value;
            
            if (email && isValidEmail(email)) {
                alert('Thank you for signing up! We\'ll be in touch soon with your free trial access.');
                this.querySelector('.email-input').value = '';
            } else {
                alert('Please enter a valid university email address.');
            }
        });
    });

    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            if (email && isValidEmail(email)) {
                alert('Thank you for subscribing to our academic newsletter!');
                this.querySelector('.newsletter-input').value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.main-nav-links');
    if (navLinks) {
        navLinks.classList.toggle('mobile-open');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navLinks = document.querySelector('.main-nav-links');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (navLinks && navLinks.classList.contains('mobile-open')) {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('mobile-open');
        }
    }
});

// Add smooth scrolling for anchor links
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

// Add hover effects to dashboard items
document.querySelectorAll('.dashboard-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Animate dashboard items on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initially hide dashboard items for animation
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.dashboard-item').forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Pricing toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            const container = pricingToggle.closest('.container');
            if (this.checked) {
                container.classList.add('annual-view');
            } else {
                container.classList.remove('annual-view');
            }
        });
        // On page load, set correct state
        const container = pricingToggle.closest('.container');
        if (pricingToggle.checked) {
            container.classList.add('annual-view');
        } else {
            container.classList.remove('annual-view');
        }
    }
});

// Tab functionality for integration categories
function showCategory(categoryId) {
    // Hide all category contents
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
    }

    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Tab functionality for resource categories
function showResourceCategory(categoryId) {
    // Hide all category contents
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected category
    const selectedCategory = document.getElementById(categoryId);
    if (selectedCategory) {
        selectedCategory.classList.remove('hidden');
    }

    // Add active class to clicked tab
    event.target.classList.add('active');
}

// Add loading states for buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href && (this.href.includes('signup.html') || this.href.includes('purchase.html'))) {
                this.textContent = 'Loading...';
                this.disabled = true;
                setTimeout(() => {
                    if (this.href.includes('signup.html')) {
                        this.textContent = 'Start free trial';
                    } else {
                        this.textContent = 'Request demo';
                    }
                    this.disabled = false;
                }, 1000);
            }
        });
    });
});

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #ff6b47;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.style.opacity = '1';
        } else {
            scrollButton.style.opacity = '0';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll-to-top on page load
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Add form validation for contact forms
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ff6b47';
            isValid = false;
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    return isValid;
}

// Add search functionality (basic implementation)
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const searchTerm = prompt('What are you looking for?');
            if (searchTerm) {
                alert(`Searching for: ${searchTerm}`);
                // In a real implementation, this would redirect to search results
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeSearch);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navLinks = document.querySelector('.main-nav-links');
        if (navLinks && navLinks.classList.contains('mobile-open')) {
            navLinks.classList.remove('mobile-open');
        }
    }

    // Enter key on buttons
    if (e.key === 'Enter' && e.target.classList.contains('btn')) {
        e.target.click();
    }
});

// Add performance optimization for animations
function optimizeAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (prefersReducedMotion.matches) {
        // Disable animations for users who prefer reduced motion
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

document.addEventListener('DOMContentLoaded', optimizeAnimations);

// Purchase page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get plan from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan') || 'department';
    
    // Plan configurations
    const plans = {
        starter: {
            name: 'Starter Plan',
            description: 'Perfect for small courses',
            price: 0,
            features: [
                'Up to 50 students',
                '5 active projects',
                'Basic collaboration tools',
                'Standard templates',
                'Email support'
            ]
        },
        department: {
            name: 'Department Plan',
            description: 'For academic departments',
            price: 299,
            features: [
                'Up to 500 students',
                'Unlimited projects',
                'Advanced collaboration',
                'LMS integration',
                'Grade passback',
                'Analytics & reporting',
                'Priority support'
            ]
        },
        university: {
            name: 'University Plan',
            description: 'Complete university solution',
            price: 799,
            features: [
                'Unlimited students',
                'Cross-department projects',
                'Advanced workflows',
                'Custom integrations',
                'Institutional analytics',
                'Dedicated support'
            ]
        }
    };

    // Update plan display
    if (plans[selectedPlan]) {
        const plan = plans[selectedPlan];
        document.getElementById('plan-name').textContent = plan.name;
        document.getElementById('plan-description').textContent = plan.description;
        
        const featuresList = document.getElementById('plan-features-list');
        featuresList.innerHTML = '';
        plan.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        
        updatePricing(plan.price);
    }

    // Annual billing toggle
    const annualBilling = document.getElementById('annual-billing');
    if (annualBilling) {
        annualBilling.addEventListener('change', function() {
            const currentPrice = plans[selectedPlan].price;
            updatePricing(currentPrice);
        });
    }

    // Payment method toggle
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            document.querySelectorAll('.payment-method').forEach(pm => pm.classList.remove('active'));
            this.parentElement.classList.add('active');
            
            document.querySelectorAll('.payment-form').forEach(form => form.classList.add('hidden'));
            document.getElementById(this.value + '-form').classList.remove('hidden');
            
            // Update button text
            const purchaseBtn = document.getElementById('purchase-btn');
            if (this.value === 'invoice') {
                purchaseBtn.textContent = 'Request Invoice';
            } else {
                purchaseBtn.textContent = 'Start Free Trial';
            }
        });
    });

    // Form submission
    const purchaseForm = document.getElementById('purchase-form');
    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate required fields
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff6b47';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            // Check terms agreement
            const termsAgreement = document.getElementById('terms-agreement');
            if (!termsAgreement.checked) {
                alert('Please agree to the Terms of Service and Privacy Policy.');
                return;
            }
            
            if (isValid) {
                // Show loading state
                const purchaseBtn = document.getElementById('purchase-btn');
                const originalText = purchaseBtn.textContent;
                purchaseBtn.textContent = 'Processing...';
                purchaseBtn.disabled = true;
                
                // Simulate processing
                setTimeout(() => {
                    alert('Thank you! Your free trial has been activated. Check your email for login instructions.');
                    // In real implementation, redirect to success page or dashboard
                    window.location.href = 'dashboard.html';
                }, 2000);
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Card number formatting
    const cardNumber = document.getElementById('card-number');
    if (cardNumber) {
        cardNumber.addEventListener('input', function() {
            let value = this.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            this.value = formattedValue;
        });
    }

    // Expiry date formatting
    const expiry = document.getElementById('expiry');
    if (expiry) {
        expiry.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }
});

// Update pricing display
function updatePricing(basePrice) {
    const isAnnual = document.getElementById('annual-billing')?.checked || false;
    const subtotalElement = document.getElementById('subtotal');
    const discountLine = document.getElementById('discount-line');
    const discountAmount = document.getElementById('discount-amount');
    const totalAmount = document.getElementById('total-amount');
    
    if (basePrice === 0) {
        subtotalElement.textContent = 'Free';
        totalAmount.textContent = 'Free';
        discountLine.classList.add('hidden');
        return;
    }
    
    if (isAnnual) {
        const annualPrice = basePrice * 12;
        const discount = annualPrice * 0.25;
        const discountedAnnual = annualPrice - discount;
        
        subtotalElement.textContent = `$${annualPrice.toFixed(2)}/year`;
        discountAmount.textContent = `-$${discount.toFixed(2)}`;
        totalAmount.textContent = `$${discountedAnnual.toFixed(2)}/year`;
        discountLine.classList.remove('hidden');
    } else {
        subtotalElement.textContent = `$${basePrice.toFixed(2)}/month`;
        totalAmount.textContent = `$${basePrice.toFixed(2)}/month`;
        discountLine.classList.add('hidden');
    }
}

// Timeline animation
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });
});

// Add plan selection from pricing page
function selectPlan(planType) {
    window.location.href = `purchase.html?plan=${planType}`;
}

// Add this to pricing page buttons
document.addEventListener('DOMContentLoaded', function() {
    const planButtons = document.querySelectorAll('.plan-cta .btn');
    planButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const planCard = this.closest('.plan-card');
            const planName = planCard.querySelector('h3').textContent.toLowerCase();
            let planType = 'department';
            
            if (planName.includes('starter')) {
                planType = 'starter';
            } else if (planName.includes('university')) {
                planType = 'university';
            }
            
            selectPlan(planType);
        });
    });
});

// Duplicate brand logos for seamless scrolling
document.addEventListener('DOMContentLoaded', function() {
    const brandLogos = document.querySelector('.brand-logos');
    if (brandLogos) {
        brandLogos.innerHTML += brandLogos.innerHTML;
    }
});


// Dynamic Case Studies

const caseStudies = [
  {
    title: "Stanford Engineering: 85% Increase in Project Success",
    description: "How Stanford's School of Engineering used EduProject to transform senior capstone projects and improve student outcomes.",
    date: "Published Dec 15, 2023",
    image: "", // Optionally add image URLs here
  },
  {
    title: "MIT Research Labs: Streamlining Cross-Department Collaboration",
    description: "MIT's implementation of EduProject across multiple research labs and the resulting improvements in collaboration.",
    date: "Published Nov 28, 2023",
    image: "",
  },
  {
    title: "UC Berkeley: Scaling Project Management Across Campus",
    description: "How UC Berkeley deployed EduProject university-wide and achieved 40% improvement in academic outcomes.",
    date: "Published Nov 10, 2023",
    image: "",
  },
  {
    title: "Harvard Business School: Transforming MBA Team Projects",
    description: "Harvard Business School's journey to implementing EduProject for MBA team projects and case competitions.",
    date: "Published Oct 22, 2023",
    image: "",
  },
  {
    title: "Community College Success: Affordable Implementation",
    description: "How smaller institutions successfully implement EduProject with limited resources and technical staff.",
    date: "Published Oct 5, 2023",
    image: "",
  },
  {
    title: "International University: Global Collaboration",
    description: "Oxford University's use of EduProject to facilitate international research collaborations and student exchanges.",
    date: "Published Sep 18, 2023",
    image: "",
  },
];

function renderCaseStudies() {
  const container = document.getElementById('case-studies-list');
  if (!container) return;
  container.innerHTML = caseStudies.map(study => `
    <div class="blog-card">
      <div class="blog-image">${study.image ? `<img src="${study.image}" alt="${study.title}">` : ''}</div>
      <div class="blog-content">
        <div class="blog-category">Case Study</div>
        <h3>${study.title}</h3>
        <p>${study.description}</p>
        <div class="blog-meta">${study.date}</div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', renderCaseStudies);

// Dynamic Webinars

const webinars = [
  {
    day: "15",
    month: "Jan",
    title: "Best Practices for Academic Project Management",
    description: "Learn proven strategies for implementing project management in academic settings",
    time: "2:00 PM EST • 60 minutes",
    link: "404.html"
  },
  {
    day: "22",
    month: "Jan",
    title: "LMS Integration Deep Dive",
    description: "Technical session on integrating EduProject with your learning management system",
    time: "3:00 PM EST • 45 minutes",
    link: "404.html"
  },
  {
    day: "29",
    month: "Jan",
    title: "Faculty Training Workshop",
    description: "Interactive workshop for faculty on using EduProject effectively in their courses",
    time: "1:00 PM EST • 90 minutes",
    link: "404.html"
  },
  {
    day: "05",
    month: "Feb",
    title: "Analytics for Academic Success",
    description: "Using EduProject's analytics to improve student outcomes and track progress",
    time: "2:30 PM EST • 60 minutes",
    link: "404.html"
  }
];

function renderWebinars() {
  const container = document.getElementById('webinars-list');
  if (!container) return;
    container.innerHTML = webinars.map((webinar, idx) => `
        <div class="webinar-card" data-index="${idx}">
            <div class="webinar-date">
                <div class="date-day">${webinar.day}</div>
                <div class="date-month">${webinar.month}</div>
            </div>
            <div class="webinar-content">
                <h3>${webinar.title}</h3>
            </div>
        </div>
    `).join('');

    // Add click event to each webinar card
    container.querySelectorAll('.webinar-card').forEach(card => {
        card.addEventListener('click', function(e) {
            const idx = this.getAttribute('data-index');
            showWebinarModal(webinars[idx]);
        });
    });
}

// Add webinar modal functionality
function showWebinarModal(webinar) {
    // Remove existing modal if present
    const oldModal = document.getElementById('webinar-modal');
    if (oldModal) oldModal.remove();

    const modal = document.createElement('div');
    modal.id = 'webinar-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    modal.innerHTML = `
        <div style="background: #fff; border-radius: 12px; max-width: 400px; width: 90%; padding: 32px; position: relative; box-shadow: 0 8px 32px rgba(0,0,0,0.2);">
            <button id="close-webinar-modal" style="position: absolute; top: 12px; right: 12px; background: none; border: none; font-size: 24px; cursor: pointer;">&times;</button>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
                <div style="text-align: center;">
                    <div style="font-size: 32px; font-weight: bold; color: #ff6b47;">${webinar.day}</div>
                    <div style="font-size: 16px; color: #333;">${webinar.month}</div>
                </div>
                <div>
                    <h2 style="font-size: 22px; margin: 0 0 8px 0; color: #333;">${webinar.title}</h2>
                    <div style="font-size: 15px; color: #666; margin-bottom: 8px;">${webinar.time}</div>
                </div>
            </div>
            <p style="color: #444; margin-bottom: 24px;">${webinar.description}</p>
            <div style="text-align: center;">
                <a href="${webinar.link}" class="btn btn-primary">Register</a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal on button click or outside click
    document.getElementById('close-webinar-modal').onclick = () => modal.remove();
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.remove();
    });
}

document.addEventListener('DOMContentLoaded', renderWebinars);