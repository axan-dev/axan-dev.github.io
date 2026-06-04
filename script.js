document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // PRELOADER (LOADING SCREEN) TYPING EFFECT
    // ==========================================
    const preloaderAccent = document.getElementById('preloader-accent');
    const preloaderText = document.getElementById('preloader-text');
    const preloader = document.getElementById('preloader');
    const preloaderWord = "AXANDR";
    let preloaderCharIndex = 0;

    function typePreloader() {
        if (!preloaderText || !preloaderAccent || !preloader) return;

        if (preloaderCharIndex < preloaderWord.length) {
            const char = preloaderWord.charAt(preloaderCharIndex);
            if (preloaderCharIndex === 0) {
                preloaderAccent.textContent = char;
            } else {
                preloaderText.textContent += char;
            }
            preloaderCharIndex++;
            setTimeout(typePreloader, 300); // Typing speed (slowed down from 150ms)
        } else {
            // Typing finished, wait 1200ms and fade out preloader (increased from 600ms)
            setTimeout(() => {
                preloader.classList.add('fade-out');
                document.body.classList.remove('loading');
            }, 1200);
        }
    }

    if (preloader) {
        // Kickoff preloader typing after 300ms
        setTimeout(typePreloader, 300);
    }
    // ==========================================
    // MOBILE NAVIGATION TOGGLE
    // ==========================================
    const menuBtn = document.getElementById('menu-btn');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.toggle('active');
            
            // Toggle hamburger icon between bars and X mark
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });

        // Close menu when a navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navbar.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-xmark');
                }
            });
        });
    }

    // ==========================================
    // CRAWLER-FRIENDLY DYNAMIC TYPING EFFECT
    // ==========================================
    const typedTextSpan = document.getElementById('typed-text');
    const interests = [
        "Computer Systems",
        "Web Development",
        "Mobile Development",
        "Internet of Things",
        "Cyber Security"
    ];
    let interestIndex = 0;
    let charIndex = typedTextSpan ? typedTextSpan.textContent.trim().length : 0;
    let isDeleting = true; // Start with deleting the pre-rendered text for a smooth transition
    let typingSpeed = 100;

    function typeEffect() {
        if (!typedTextSpan) return;

        const currentWord = interests[interestIndex];
        
        if (isDeleting) {
            // Deleting character
            typedTextSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster deleting speed
        } else {
            // Typing character
            typedTextSpan.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Standard typing speed
        }

        // State control
        if (!isDeleting && charIndex === currentWord.length) {
            // Word fully typed, pause before deleting
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            // Word deleted, move to the next word
            isDeleting = false;
            interestIndex = (interestIndex + 1) % interests.length;
            typingSpeed = 500; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    // Kickoff typing effect after a small delay
    if (typedTextSpan) {
        setTimeout(typeEffect, 1000);
    }

    // ==========================================
    // DYNAMIC SCROLL SPY (ACTIVE NAV LINK)
    // ==========================================
    const sections = document.querySelectorAll('section');
    
    function scrollSpy() {
        let scrollPosition = window.scrollY + 180; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', scrollSpy);

    // ==========================================
    // CONTACT FORM INTERCEPTION
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values for processing (could be sent to server/API)
            const nameInput = contactForm.querySelector('input[type="text"]').value;
            
            // Show alert representing successful interaction
            alert(`Terima kasih, ${nameInput}! Pesan Anda telah berhasil dikirim (simulasi). Saya akan segera menghubungi Anda kembali.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});
