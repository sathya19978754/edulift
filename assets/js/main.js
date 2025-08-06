// EduLift Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeNavigation();
    initializeModals();
    initializeCartFunctionality();
    initializeForms();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
}

function handleSearch() {
    const searchInput = document.querySelector('.search-box input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Implement search functionality
        console.log('Searching for:', query);
        // You can redirect to search results page or filter content
        alert(`Searching for: ${query}`);
    }
}

// Modal functionality
function initializeModals() {
    // Switch between login and signup tabs
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    
    if (switchToSignup) {
        switchToSignup.addEventListener('click', function(e) {
            e.preventDefault();
            signupTab.click();
        });
    }
    
    if (switchToLogin) {
        switchToLogin.addEventListener('click', function(e) {
            e.preventDefault();
            loginTab.click();
        });
    }
    
    // Form validation for login
    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleLogin();
        });
    }
    
    // Form validation for signup
    const signupForm = document.querySelector('#signup form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSignup();
        });
    }
}

function handleLogin() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!username || !password) {
        showAlert('Please fill in all fields', 'error');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(username)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate login process
    showAlert('Login successful!', 'success');
    
    // Close modal
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    if (loginModal) {
        loginModal.hide();
    }
    
    // Update UI to show logged in state
    updateUserState(true);
}

function handleSignup() {
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showAlert('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showAlert('Please enter a valid email address', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showAlert('Passwords do not match', 'error');
        return;
    }
    
    if (password.length < 8) {
        showAlert('Password must be at least 8 characters long', 'error');
        return;
    }
    
    // Simulate signup process
    showAlert('Account created successfully!', 'success');
    
    // Close modal
    const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
    if (loginModal) {
        loginModal.hide();
    }
    
    // Update UI to show logged in state
    updateUserState(true);
}

// Cart functionality
function initializeCartFunctionality() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartCount = document.querySelector('.cart-count');
    
    // Initialize cart from localStorage
    let cart = JSON.parse(localStorage.getItem('edulift_cart')) || [];
    updateCartCount(cart.length);
    
    // Add to cart button handlers
    const addToCartButtons = document.querySelectorAll('[data-bs-target="#addToCartModal"]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can pass course data here
            const courseData = {
                id: 'data-analyst',
                name: 'Data Analyst',
                price: 1737,
                originalPrice: 10447,
                image: 'course-image-url'
            };
            showAddToCartModal(courseData);
        });
    });
}

function showAddToCartModal(courseData) {
    // Update modal content with course data
    const modal = document.getElementById('addToCartModal');
    if (modal) {
        // Update course details in modal
        // This would be done dynamically based on courseData
        console.log('Showing add to cart modal for:', courseData);
    }
}

function proceedToCheckout() {
    // Close the add to cart modal
    const addToCartModal = bootstrap.Modal.getInstance(document.getElementById('addToCartModal'));
    if (addToCartModal) {
        addToCartModal.hide();
    }
    
    // Redirect to payment page
    window.location.href = 'payment/index.html';
}

function updateCartCount(count) {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = count;
        
        // Add animation
        cartCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);
    }
}

// Form handling
function initializeForms() {
    // Payment form handling
    const paymentMethodRadios = document.querySelectorAll('input[name="paymentMethod"]');
    paymentMethodRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            handlePaymentMethodChange(this.value);
        });
    });
    
    // Card number formatting
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            this.value = formatCardNumber(this.value);
        });
    }
    
    // Expiry date formatting
    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function() {
            this.value = formatExpiryDate(this.value);
        });
    }
    
    // CVV validation
    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function() {
            this.value = this.value.replace(/\D/g, '').substring(0, 4);
        });
    }
}

function handlePaymentMethodChange(method) {
    const cardDetails = document.querySelector('.card-details');
    
    if (method === 'card' && cardDetails) {
        cardDetails.style.display = 'block';
    } else if (cardDetails) {
        cardDetails.style.display = 'none';
    }
}

function formatCardNumber(value) {
    // Remove all non-digits
    value = value.replace(/\D/g, '');
    
    // Add spaces every 4 digits
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    // Limit to 19 characters (16 digits + 3 spaces)
    return value.substring(0, 19);
}

function formatExpiryDate(value) {
    // Remove all non-digits
    value = value.replace(/\D/g, '');
    
    // Add slash after 2 digits
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    
    return value;
}

function processPayment() {
    // Validate payment form
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    
    if (!selectedPaymentMethod) {
        showAlert('Please select a payment method', 'error');
        return;
    }
    
    if (selectedPaymentMethod.value === 'card') {
        if (!validateCardForm()) {
            return;
        }
    }
    
    // Simulate payment processing
    showAlert('Processing payment...', 'info');
    
    setTimeout(() => {
        // Redirect to success page
        window.location.href = '../payment-success/index.html';
    }, 2000);
}

function validateCardForm() {
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardName = document.getElementById('cardName').value;
    
    if (!cardNumber || !expiryDate || !cvv || !cardName) {
        showAlert('Please fill in all card details', 'error');
        return false;
    }
    
    // Remove spaces from card number for validation
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    
    if (cleanCardNumber.length < 13 || cleanCardNumber.length > 19) {
        showAlert('Please enter a valid card number', 'error');
        return false;
    }
    
    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        showAlert('Please enter a valid expiry date (MM/YY)', 'error');
        return false;
    }
    
    if (cvv.length < 3 || cvv.length > 4) {
        showAlert('Please enter a valid CVV', 'error');
        return false;
    }
    
    return true;
}

// Animation and UI enhancements
function initializeAnimations() {
    // Smooth scroll for anchor links
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
    document.querySelectorAll('.testimonial-card, .course-card').forEach(el => {
        observer.observe(el);
    });
}

// Utility functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type = 'info') {
    // Create alert element
    const alert = document.createElement('div');
    alert.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    alert.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(alert);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 5000);
}

function updateUserState(isLoggedIn) {
    const loginBtn = document.querySelector('.btn-login');
    
    if (isLoggedIn && loginBtn) {
        loginBtn.innerHTML = '<i class="fas fa-user-circle"></i>';
        loginBtn.title = 'User Profile';
        
        // You can add more user state updates here
        localStorage.setItem('edulift_user_logged_in', 'true');
    }
}

// Loading states
function showLoading(element) {
    if (element) {
        element.disabled = true;
        element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    }
}

function hideLoading(element, originalText) {
    if (element) {
        element.disabled = false;
        element.innerHTML = originalText;
    }
}

// Export functions for global use
window.proceedToCheckout = proceedToCheckout;
window.processPayment = processPayment;
window.showAlert = showAlert;
