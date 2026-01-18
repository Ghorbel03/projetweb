const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("nav-open");
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            mainNav.classList.remove("nav-open");
        }
    });
});

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.hidden = false;
    contactForm.reset();
    setTimeout(() => {
        formSuccess.hidden = true;
    }, 4000);
});
