// Project Data
const projectData = {
    1: {
        title: "Brand Identity Kit",
        category: "Branding",
        description: "A comprehensive brand identity kit designed for a startup client, including logo variations, typography, color palette, and corporate stationary concepts.",
        client: "Startup Client",
        year: "2026",
        image: "Assets/Branding/Branding1.jpeg"
    },
    2: {
        title: "Premium Business Card Design",
        category: "Business Card",
        description: "Elegant corporate business card designed with high-end print finishes in mind, focusing on clean typography and aesthetic branding layout.",
        client: "IT Hub Software Solutions",
        year: "2025",
        image: "Assets/Business card/Business card.jpeg"
    },
    3: {
        title: "Minimalist Brand Logo",
        category: "Logo",
        description: "A clean, vector-based logo design focused on minimalist style and brand memorability. Perfect for modern digital applications.",
        client: "Maxgen Technologies",
        year: "2026",
        image: "Assets/logo/logo.jpeg"
    },
    4: {
        title: "Event Promotional Poster",
        category: "Posters",
        description: "A high-impact promotional poster designed for local venues and corporate events, optimized for both digital displays and print.",
        client: "Bhavnagar Local Venue",
        year: "2025",
        image: "Assets/Poster/Poster.jpeg"
    },
    5: {
        title: "Trainer Spotlight Post",
        category: "Social Media",
        description: "Professional layout design introducing gym certified trainers and their training philosophies.",
        client: "Active Life Gym",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym1.jpeg"
    },
    6: {
        title: "Supplements Guide Graphic",
        category: "Social Media",
        description: "Educational visual graphics details on natural vitamins and health supplements for muscle recovery.",
        client: "Health & Fitness Co.",
        year: "2025",
        image: "Assets/Social Media/Gym/Gym2.jpeg"

    },
    7: {
        title: "Weekly Fitness Challenge",
        category: "Social Media",
        description: "High-engagement social media layout encouraging gym followers to participate in a 7-day push-up challenge.",
        client: "Fitness Studio",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym3.jpeg"
    },
    8: {
        title: "Nutritional Advice Infographic",
        category: "Social Media",
        description: "Clean visual infographic explaining pre-workout nutrition and hydration choices for maximum athletic performance.",
        client: "Health & Fitness Co.",
        year: "2025",
        image: "Assets/Social Media/Gym/Gym4.jpeg"
    },
    9: {
        title: "Energy & Stamina Gym Post",
        category: "Social Media",
        description: "A dynamic social media graphic promoting energy booster drinks and stamina building workouts, utilizing bold contrast colors.",
        client: "Active Life Gym",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym5.jpeg"
    },
    10: {

        title: "Gym Membership Promo",
        category: "Social Media",
        description: "Attractive promotional post advertising special seasonal discount memberships and fitness classes.",
        client: "Iron Clad Gym",
        year: "2025",
        image: "Assets/Social Media/Gym/Gym6.jpeg"
    },
    11: {
        title: "Strength Training Tips",
        category: "Social Media",
        description: "A list-style visual graphic showcasing core exercises for building overall back and shoulder strength.",
        client: "Iron Clad Gym",
        year: "2025",
        image: "Assets/Social Media/Gym/Gym7.jpeg"
    },
    12: {
        title: "Morning Workout Routine",
        category: "Social Media",
        description: "Clean, visual tips post highlighting the scientific benefits of early morning gym routines.",
        client: "Fitness Studio",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym8.jpeg"

    },
    13: {
        title: "Cardio Training Guide",
        category: "Social Media",
        description: "Social media visual guide focusing on high-intensity interval training (HIIT) benefits and cardio tips.",
        client: "Active Life Gym",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym9.jpeg"
    },
    14: {
        title: "Power & Strength Motivation",
        category: "Social Media",
        description: "Inspiring social media post layout highlighting physical strength and regular workout motivation for gym members.",
        client: "Iron Clad Gym",
        year: "2026",
        image: "Assets/Social Media/Gym/Gym10.jpeg"
    },
    15: {
        title: "Holi Fitness Campaign Post",
        category: "Social Media",
        description: "A creative gym post themed around the Holi festival, merging traditional colors with modern fitness motivation.",
        client: "Fitness Studio",
        year: "2025",
        image: "Assets/Social Media/Gym/Gym11.jpeg"

    },
    16: {
        title: "Gourmet Dish Spotlight",
        category: "Social Media",
        description: "A premium social media layout featuring restaurant signature gourmet dishes with elegant typography.",
        client: "Spice Route Bistro",
        year: "2025",
        image: "Assets/Social Media/Food/food1.jpeg"
    },
    17: {
        title: "Healthy Meal Plan Promo",
        category: "Social Media",
        description: "Vibrant visual post promoting keto-friendly meal plans and direct food delivery options.",
        client: "Green Apron Kitchen",
        year: "2026",
        image: "Assets/Social Media/Food/food2.jpeg"
    },
    18: {
        title: "Dessert Special Ad",
        category: "Social Media",
        description: "Mouth-watering visual graphic highlighting bakery special desserts and weekend pastry offers.",
        client: "Sweet Treats Bakery",
        year: "2025",
        image: "Assets/Social Media/Food/food3.jpeg"
    },
    19: {
        title: "Cafe Drinks Promotion",
        category: "Social Media",
        description: "Warm-toned aesthetic social media banner showcasing hot brewing coffee and iced beverages.",
        client: "The Daily Brew Cafe",
        year: "2026",
        image: "Assets/Social Media/Food/food4.jpeg"
    },
    20: {
        title: "Snowy Manali Travel Package",
        category: "Social Media",
        description: "A breathtaking promotional banner highlighting adventure activities and tour packages in snow-capped Manali.",
        client: "Wanderlust Travels",
        year: "2025",
        image: "Assets/Social Media/Travel/Travel1.jpeg"
    },
    21: {
        title: "Kasol Explorer Tour",
        category: "Social Media",
        description: "Social media visual guide outlining a travel itinerary for Kasol and scenic riverside camp packages.",
        client: "Wanderlust Travels",
        year: "2026",
        image: "Assets/Social Media/Travel/Travel2.jpeg"
    },
    22: {
        title: "Golden Temple Amritsar Package",
        category: "Social Media",
        description: "Rich heritage-focused visual advertising a spiritual tour package to Amritsar and local sight-seeing.",
        client: "Travel Agency",
        year: "2025",
        image: "Assets/Social Media/Travel/Travel3.jpeg"
    },
    23: {
        title: "Festive Holiday Greeting",
        category: "Social Media",
        description: "Warm and inviting social media greeting card design for major traditional festivals, reflecting brand warmth.",
        client: "Bhavnagar Local Client",
        year: "2026",
        image: "Assets/Social Media/other/festival.jpeg"
    },
    24: {
        title: "Trendy Eyewear Promo",
        category: "Social Media",
        description: "Minimalist fashion graphic highlighting summer collection sunglasses and custom spectacle frames.",
        client: "Spectra Eyewear",
        year: "2025",
        image: "Assets/Social Media/other/Glasses.jpeg"
    },
    25: {
        title: "Pregnancy Awareness Infographic",
        category: "Social Media",
        description: "High-risk pregnancy awareness infographic designed for healthcare clinics using clean typography and informative icons.",
        client: "Care Clinic",
        year: "2026",
        image: "Assets/Social Media/other/Health.jpeg"
    },
    26: {
        title: "Luxury Salon Branding Ad",
        category: "Social Media",
        description: "Sleek and aesthetic social media post promoting facial care, spa sessions, and beauty makeover packages.",
        client: "Serene Beauty Salon",
        year: "2025",
        image: "Assets/Social Media/other/Salon.jpeg"
    },
    27: {
        title: "Homm14 Brand Identity",
        category: "Branding",
        description: "A complete brand identity design for Homm14 Bakery & Coffee, featuring a warm orange color scheme, modern custom typography, creative packaging design, and a curated social media visual kit.",
        client: "Homm14 Bakery & Coffee",
        year: "2026",
        image: "Assets/Branding/Branding2.jpeg"
    },
    28: {
        title: "Homm14 Stationery & Collaterals",
        category: "Branding",
        description: "Custom stationery and marketing collateral design for Homm14, including high-quality coffee loyalty cards, promotional campaigns, and brand-aligned Instagram story templates.",
        client: "Homm14 Bakery & Coffee",
        year: "2026",
        image: "Assets/Branding/Branding3.jpeg"
    },
};

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const themeToggle = document.getElementById('themeToggle');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const categoryGrid = document.getElementById('categoryGrid');
const categoryExpanded = document.getElementById('categoryExpanded');
const seeMoreBtns = document.querySelectorAll('.btn-see-more');
const backToCategories = document.getElementById('backToCategories');
const expandedCategoryTitle = document.getElementById('expandedCategoryTitle');
const subFilterButtons = document.getElementById('subFilterButtons');
const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const contactForm = document.getElementById('contactForm');

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }
});

function animateCursorFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursorFollower);
}

if (cursor && cursorFollower) {
    animateCursorFollower();
}

// Add hover effects for cursor
const hoverElements = document.querySelectorAll('a, button, .portfolio-item');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = 'scale(2)';
        if (cursorFollower) cursorFollower.style.transform = 'scale(1.5)';
    });

    el.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = 'scale(1)';
        if (cursorFollower) cursorFollower.style.transform = 'scale(1)';
    });
});

// Sticky Navbar with Background Change
function handleScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleScroll);

// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);

        if (target) {
            // Calculate offset for fixed navbar
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 80;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = targetPosition - navbarHeight - 20;

            // Smooth scroll with offset
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update URL without jumping
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
        }
    });
});

// Active Navigation Link on Scroll
function updateActiveNav() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 80;
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + navbarHeight + 50;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Mobile Hamburger Menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        if (navLinks) navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger) hamburger.classList.remove('active');
        if (navLinks) navLinks.classList.remove('active');
    });
});

// Dark/Light Mode Toggle
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleDarkMode);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Category Overview -> Expanded Category View
const categoryNames = {
    'branding': 'Branding',
    'businessCard': 'Business Card',
    'logo': 'Logo',
    'posters': 'Posters',
    'social-media': 'Social Media'
};

let currentCategory = null;

// Initialize all portfolio items as hidden on load so only the selected
// category is rendered/laid out when the expanded view is opened.
portfolioItems.forEach(item => {
    item.classList.add('hidden');
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
});

function filterExpandedItems(category, subfilter) {
    let visibleIndex = 0;
    portfolioItems.forEach((item) => {
        const itemCategory = item.getAttribute('data-category');
        const itemSub = item.getAttribute('data-subcategory');
        const categoryMatch = itemCategory === category;
        const subMatch = subfilter === 'all' || itemSub === subfilter;

        if (categoryMatch && subMatch) {
            item.classList.remove('hidden');
            const delay = visibleIndex * 50;
            visibleIndex++;
            // Defer so the display change from 'hidden' can take effect before animating
            requestAnimationFrame(() => {
                setTimeout(() => {
                    item.classList.add('fade-in');
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, delay);
            });
        } else {
            // Hide immediately to avoid flashing the entire grid layout
            item.classList.remove('fade-in');
            item.classList.add('hidden');
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
        }
    });
}

function showCategoryExpanded(category) {
    currentCategory = category;

    if (categoryGrid) categoryGrid.style.display = 'none';
    if (categoryExpanded) categoryExpanded.classList.add('active');
    if (expandedCategoryTitle) expandedCategoryTitle.textContent = categoryNames[category] || category;

    // Only Social Media has subcategories
    if (subFilterButtons) {
        if (category === 'social-media') {
            subFilterButtons.classList.add('active');
            subFilterBtns.forEach(b => b.classList.remove('active'));
            const allBtn = document.querySelector('.sub-filter-btn[data-subfilter="all"]');
            if (allBtn) allBtn.classList.add('active');
        } else {
            subFilterButtons.classList.remove('active');
        }
    }

    filterExpandedItems(category, 'all');

    if (categoryExpanded) categoryExpanded.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

seeMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        showCategoryExpanded(category);
    });
});

if (backToCategories) {
    backToCategories.addEventListener('click', () => {
        if (categoryExpanded) categoryExpanded.classList.remove('active');
        if (categoryGrid) {
            categoryGrid.style.display = 'grid';
            categoryGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        currentCategory = null;
    });
}

subFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        subFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const subfilter = btn.getAttribute('data-subfilter');
        filterExpandedItems(currentCategory, subfilter);
    });
});

// Modal Functionality
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project || !modal) return;

    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = project.image;
        modalImage.alt = project.title;
        modalImage.title = "Click to view full image in a new tab";
        modalImage.onclick = () => {
            window.open(project.image, '_blank');
        };
    }
    setText('modalTitle', project.title);
    setText('modalCategory', project.category);
    setText('modalDescription', project.description);
    setText('modalClient', project.client);
    setText('modalYear', project.year);

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openModal(projectId);
    });
});

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
        closeModal();
    }
});

// Scroll-Triggered Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

let animationCounter = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add a small delay for visual effect
            setTimeout(() => {
                entry.target.classList.add('animated');
                animationCounter++;
                console.log(`Animation triggered: ${animationCounter} - ${entry.target.className}`);
            }, 100);

            // Unobserve after animation to improve performance
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animate-on-scroll elements
const animateElements = document.querySelectorAll('.animate-on-scroll');
console.log(`Found ${animateElements.length} elements to animate`);
animateElements.forEach((el, index) => {
    // Add stagger delay based on element position
    el.style.transitionDelay = `${(index % 5) * 0.1}s`;
    observer.observe(el);
});

// Add stagger animation classes
function addStaggerAnimations() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.05}s`;
    });

    // Add stagger for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    // Add stagger for education cards
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });

}

addStaggerAnimations();

// Parallax Effect (rAF-throttled so it stays smooth on long scrolls)
let parallaxTicking = false;
function handleParallax() {
    if (parallaxTicking) return;
    parallaxTicking = true;
    window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        parallaxTicking = false;
    });
}

window.addEventListener('scroll', handleParallax, { passive: true });

// Contact Form Validation and Submission
// -----------------------------------------------------------------------------
// FormSubmit.co relays messages to the portfolio owner. It requires a one-time
// activation: the first submission sends a confirmation email to ADMIN_EMAIL;
// the owner must click "Activate Form" before deliveries succeed.
const ADMIN_EMAIL = 'niralipanara18@gmail.com';
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/' + ADMIN_EMAIL;
const FORM_MIN_INTERVAL_MS = 15000;
const FORM_TIMEOUT_MS = 12000;
const MAILTO_MAX_URL_LEN = 1800;
let lastFormSubmitAt = 0;

function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    if (email.length > 254) return false;
    const emailRegex = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,63}$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    if (!phone) return true;
    if (typeof phone !== 'string') return false;
    if (phone.length < 7 || phone.length > 20) return false;
    return /^[0-9+\-\s()]+$/.test(phone);
}

function buildContactDetailsText(name, email, phone, projectType, message) {
    return [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Project Type: ${projectType}`,
        '',
        'Message:',
        message
    ].join('\r\n');
}

function buildMailtoFallback(name, email, phone, projectType, message) {
    const subject = `Portfolio inquiry from ${name}`;
    const body = buildContactDetailsText(name, email, phone, projectType, message);
    return 'mailto:' + ADMIN_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);
}

function copyContactDetails(name, email, phone, projectType, message) {
    const text = buildContactDetailsText(name, email, phone, projectType, message);
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            resolve();
        } catch (err) {
            reject(err);
        } finally {
            document.body.removeChild(textarea);
        }
    });
}

function openMailtoLink(url) {
    const link = document.createElement('a');
    link.href = url;
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showContactFallback(name, email, phone, projectType, message) {
    const mailtoUrl = buildMailtoFallback(name, email, phone, projectType, message);
    if (mailtoUrl.length <= MAILTO_MAX_URL_LEN) {
        openMailtoLink(mailtoUrl);
    }

    copyContactDetails(name, email, phone, projectType, message)
        .then(() => {
            showNotification(
                'Could not send automatically. Your message was copied — paste it into an email to ' + ADMIN_EMAIL + '.',
                'error',
                8000
            );
        })
        .catch(() => {
            showNotification(
                'Could not send automatically. Please email ' + ADMIN_EMAIL + ' with your name, email, and message.',
                'error',
                8000
            );
        });
}

function parseFormSubmitResponse(text) {
    if (!text) return null;
    try {
        return JSON.parse(text);
    } catch (e) {
        return null;
    }
}

function initContactFormConfig() {
    const nextInput = document.getElementById('formNextUrl');
    if (nextInput && window.location.protocol !== 'file:') {
        const baseUrl = window.location.href.split('#')[0].split('?')[0];
        nextInput.value = baseUrl + '?sent=1#contact';
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('sent') === '1') {
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        if (window.history.replaceState) {
            const cleanUrl = window.location.pathname + window.location.hash;
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }
}

if (contactForm) {
    initContactFormConfig();

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        if (window.location.protocol === 'file:') {
            showNotification(
                'The contact form must be opened from a hosted website (not as a local file). Please deploy the site or email ' + ADMIN_EMAIL + ' directly.',
                'error',
                8000
            );
            return;
        }

        const nameEl = document.getElementById('name');
        const emailEl = document.getElementById('email');
        const phoneEl = document.getElementById('phone');
        const projectTypeEl = document.getElementById('projectType');
        const messageEl = document.getElementById('message');
        const honeypotEl = document.getElementById('_honey');
        const subjectEl = document.getElementById('formSubject');

        const name = (nameEl && nameEl.value || '').trim();
        const email = (emailEl && emailEl.value || '').trim();
        const phone = (phoneEl && phoneEl.value || '').trim();
        const projectType = (projectTypeEl && projectTypeEl.value || '').trim();
        const message = (messageEl && messageEl.value || '').trim();
        const honeypot = (honeypotEl && honeypotEl.value || '').trim();

        if (honeypot) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            return;
        }

        if (!name || !email || !projectType || !message) {
            showNotification('Please fill in all required fields', 'error');
            return;
        }
        if (name.length < 2 || name.length > 80) {
            showNotification('Please enter a valid name (2-80 characters).', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        if (!isValidPhone(phone)) {
            showNotification('Please enter a valid phone number (digits, spaces, + - only).', 'error');
            return;
        }
        if (message.length < 10) {
            showNotification('Message is too short. Please add a few more details.', 'error');
            return;
        }
        if (message.length > 2000) {
            showNotification('Message is too long (max 2000 characters).', 'error');
            return;
        }

        const now = Date.now();
        if (now - lastFormSubmitAt < FORM_MIN_INTERVAL_MS) {
            const wait = Math.ceil((FORM_MIN_INTERVAL_MS - (now - lastFormSubmitAt)) / 1000);
            showNotification(`Please wait ${wait}s before sending another message.`, 'error');
            return;
        }

        const subjectLine = `New portfolio inquiry from ${name}`;
        if (subjectEl) {
            subjectEl.value = subjectLine;
        }

        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalContent = submitBtn ? submitBtn.innerHTML : '';
        const restoreButton = () => {
            if (submitBtn) {
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
            }
        };
        if (submitBtn) {
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;
        }

        const abortController = new AbortController();
        const timeoutId = setTimeout(() => {
            abortController.abort();
        }, FORM_TIMEOUT_MS);

        const payload = {
            name: name,
            email: email,
            phone: phone || 'Not provided',
            projectType: projectType,
            message: message,
            _subject: subjectLine,
            _replyto: email,
            _template: 'table',
            _captcha: 'false'
        };

        fetch(FORM_ENDPOINT, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            signal: abortController.signal,
            body: JSON.stringify(payload)
        })
            .then(response => {
                clearTimeout(timeoutId);
                return response.text().then(text => ({
                    ok: response.ok,
                    status: response.status,
                    data: parseFormSubmitResponse(text),
                    raw: text
                }));
            })
            .then(result => {
                const successFlag = result.data && (
                    result.data.success === 'true' || result.data.success === true
                );

                if (result.ok && successFlag) {
                    lastFormSubmitAt = Date.now();
                    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                    restoreButton();
                    return;
                }

                const serverMessage = result.data && result.data.message
                    ? String(result.data.message)
                    : '';

                if (/activation/i.test(serverMessage)) {
                    showNotification('Form requires activation. Redirecting you to complete the setup...', 'info', 4000);
                } else {
                    showNotification('Submitting via backup method...', 'info', 2000);
                }

                setTimeout(() => {
                    contactForm.submit();
                }, 1000);
            })
            .catch(error => {
                clearTimeout(timeoutId);
                console.error('Contact form AJAX error, falling back to standard submit:', error);
                showNotification('Submitting via backup method...', 'info', 2000);
                setTimeout(() => {
                    contactForm.submit();
                }, 1000);
            });
    });
}

// Notification System
function showNotification(message, type, durationMs) {
    const displayMs = typeof durationMs === 'number' ? durationMs : 3000;
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#43e97b' : '#f5576c'};
        color: white;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10001;
        animation: slideIn 0.3s ease;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, displayMs);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy Loading Images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// Performance Optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    handleScroll();
    updateActiveNav();
    handleParallax();
}, 10);

window.removeEventListener('scroll', handleScroll);
window.removeEventListener('scroll', updateActiveNav);
window.removeEventListener('scroll', handleParallax);
window.addEventListener('scroll', optimizedScrollHandler);

// Initialize animations on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger initial animations for elements already in viewport
    setTimeout(() => {
        const visibleElements = document.querySelectorAll('.animate-on-scroll');
        visibleElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Check if element is in viewport
            if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
                el.classList.add('animated');
            }
        });
    }, 200);
});

// Console welcome message
console.log('%c Welcome to Nirali\'s Portfolio! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px;');
console.log('%c Built with ❤️ using HTML, CSS, and JavaScript ', 'color: #667eea; font-size: 12px;');

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    setTimeout(() => {
        preloader.classList.add('loaded');
    }, 500);
});

// Scroll Progress Indicator
const scrollProgressEl = document.getElementById('scrollProgress');
function updateScrollProgress() {
    if (!scrollProgressEl) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) {
        scrollProgressEl.style.width = '0%';
        return;
    }
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgressEl.style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// Typing Animation for Hero Tagline
const taglineText = "Transforming ideas into stunning visual experiences through creativity, passion, and meticulous attention to detail.";
const taglineElement = document.getElementById('heroTagline');
let charIndex = 0;

function typeWriter() {
    if (!taglineElement) return;
    if (charIndex < taglineText.length) {
        taglineElement.innerHTML += taglineText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 30);
    }
}

// Start typing animation after preloader
if (taglineElement) {
    setTimeout(typeWriter, 1000);
}

// Animated Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}

// Counter Observer
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

function toggleBackToTop() {
    if (!backToTopBtn) return;
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleBackToTop);

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Magnetic Button Effect
const magneticBtns = document.querySelectorAll('.magnetic-btn');

magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
    });
});

// Reveal Text Animation on Scroll
const revealTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.reveal-text').forEach(el => {
    revealTextObserver.observe(el);
});

// System Theme Preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (!localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme',
        prefersDarkScheme.matches ? 'dark' : 'light'
    );
}

// Keyboard Navigation for Hamburger
if (hamburger) {
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.click();
        }
    });
}

// Skill Progress Bars Animation
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                const width = progressBar.getAttribute('data-width');
                setTimeout(() => {
                    progressBar.style.width = width + '%';
                }, 200);
            }
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(skill => {
    skillObserver.observe(skill);
});
