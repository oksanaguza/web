document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".btn");

    button.addEventListener("click", function () {
        alert("Redirecting to Shop!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        breakpoints: {
            1024: { perView: 2 },
            768: { perView: 1 },
        },
    }).mount();

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

});
