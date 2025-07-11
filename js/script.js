window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".transparent-navbar");
    if (window.scrollY > 100) {
    navbar.classList.add("bg-dark");
    } else {
    navbar.classList.remove("bg-dark");
    }});

