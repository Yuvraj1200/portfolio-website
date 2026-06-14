
/* ==========================================
   PORTFOLIO JAVASCRIPT
   Yuvraj Kale Portfolio
========================================== */

/* ==========================================
   DARK / LIGHT MODE
========================================== */

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLightMode =
        document.body.classList.contains("light-mode");

    if (isLightMode) {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☀️";

    }

    else {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "🌙";

    }

});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements =
    document.querySelectorAll(
        "section, .project-card, .metric-card, .education-card, .experience-card, .leadership-card"
    );

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

/* ==========================================
   HERO FADE-IN EFFECT
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   SMOOTH SCROLL FOR NAVIGATION
========================================== */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

/* ==========================================
   CONSOLE SIGNATURE
========================================== */

console.log(
    "%cWelcome to Yuvraj Kale's Portfolio",
    "color:#58a6ff;font-size:18px;font-weight:bold;"
);

console.log(
    "%cSoftware Development Enthusiast | Java Full Stack Developer | AI & Cloud Computing Enthusiast",
    "color:#ffffff;"
);
