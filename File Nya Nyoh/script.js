document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});
