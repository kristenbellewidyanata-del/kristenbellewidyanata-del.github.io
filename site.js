// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

window.addEventListener("scroll", function () {

    const progressFill = document.getElementById("progressFill");

    if (!progressFill) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    progressFill.style.width = progress + "%";

});


// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// FADE-IN ANIMATION WHEN SCROLLING
// ==========================================

const fadeElements = document.querySelectorAll(
    ".home-section, .about-section, .ips-info-card, .goal-row, .sdg4-feature"
);

if ("IntersectionObserver" in window) {

    const fadeObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    fadeElements.forEach(function (element) {

        element.classList.add("fade-in");
        fadeObserver.observe(element);

    });

}