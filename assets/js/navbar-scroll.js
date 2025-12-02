document.addEventListener("scroll", function () {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 200) {
        nav.classList.add("navbar-scrolled");
    } else {
        nav.classList.remove("navbar-scrolled");
    }
});