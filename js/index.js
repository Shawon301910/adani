// window scroll functionality -------------------->

window.onscroll = function () { stickyNavbar() };

var navbar = document.getElementById("navbar");

function stickyNavbar() {
    const nav = document.getElementById("navigation");
    const hidden = document.getElementById("hidden");
    const logo = document.getElementById("logo-fn");
    const bg = document.getElementById("bg-white-fn");
    if (window.scrollY > 20) {
        nav.classList.add("fixed");
        hidden.classList.add("hidden");
        logo.classList.add("logo-font");
        bg.classList.add("bg-white");
    } else {
        nav.classList.remove("fixed");
        hidden.classList.remove("hidden");
        logo.classList.remove("logo-font");
        bg.classList.remove("bg-white");
    }
};


// click and show or close nav bar
document.getElementById("show-nav").addEventListener("click", () => {
    const showContainer = document.getElementById("show-nav-container");
    showContainer.style.display = "flex";
});
document.getElementById("close-nav").addEventListener("click", () => {
    const showContainer = document.getElementById("show-nav-container");
    showContainer.style.display = "none";
});