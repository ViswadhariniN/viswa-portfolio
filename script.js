
// ===================================
// 1. SMOOTH SCROLLING
// ===================================

document.documentElement.style.scrollBehavior = "smooth";


// ===================================
// 2. SCROLL REVEAL ANIMATIONS
// ===================================

const revealElements = document.querySelectorAll(
    ".certificate-card, .achievement-card, .PD-card, .project-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            revealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

// ===================================
// 3. BACK TO TOP BUTTON
// ===================================

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

}


/* ===================================
   4. HOMEPAGE TYPING ANIMATION
=================================== */

const typingElement = document.getElementById("typing");

if (typingElement) {

    const words = [
        "ECE Graduate",
        "Aspiring IT Professional",
        "Data Analytics Enthusiast"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (!deleting) {
            typingElement.textContent =
                currentWord.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentWord.length) {
                deleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }

        } else {
            typingElement.textContent =
                currentWord.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        }

        setTimeout(typeEffect, deleting ? 60 : 100);
    }

    typeEffect();
}
