// onScroll animation js initialize
AOS.init();

// owl carousel initialize
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 2,
                nav: true,
            },
            500: {
                items: 3,
                nav: true,
            },
            600: {
                items: 4,
                nav: true,
            },
            1000: {
                items: 5,
                nav: true,
            },
            1300: {
                items: 7,
                nav: true,
            }
        }
    });
});

// window scroll functionality -------------------->

window.onscroll = function () { stickyNavbar() };

var navbar = document.getElementById("navbar");

function stickyNavbar() {
    const nav = document.getElementById("navigation");
    const hidden = document.getElementById("hidden");
    const logo = document.getElementById("logo-fn");
    const bg = document.getElementById("bg-white-fn");
    const overlay = document.getElementById("mushkilon-section");
    if (window.scrollY > 20) {
        nav.classList.add("fixed");
        hidden.classList.add("hidden");
        logo.classList.add("logo-font");
        bg.classList.add("bg-white");
        overlay.style.paddingTop = "60px"
    } else {
        nav.classList.remove("fixed");
        hidden.classList.remove("hidden");
        logo.classList.remove("logo-font");
        bg.classList.remove("bg-white");
        overlay.style.paddingTop = "0px"
    }
};



// click and show or close nav bar -------------------->

document.getElementById("show-nav").addEventListener("click", () => {
    const showContainer = document.getElementById("show-nav-container");
    showContainer.style.display = "flex";
});
document.getElementById("close-nav").addEventListener("click", () => {
    const showContainer = document.getElementById("show-nav-container");
    showContainer.style.display = "none";
});



// footer functionality -------------------->

let isSiteMapClick = true;

const siteMap = document.getElementById("siteMap");
const arrowFo = document.getElementById("arrow-fo");
const siteMapLinkContainer = document.getElementById("siteMap-link-container");
siteMap.addEventListener("click", () => {
    if (!isSiteMapClick) {
        arrowFo.classList.remove("rotate-90");
        siteMapLinkContainer.classList.add("hidden")
        siteMapLinkContainer.classList.remove("flex")
        isSiteMapClick = true;
    }
    else {
        arrowFo.classList.add("rotate-90");
        siteMapLinkContainer.classList.add("flex")
        siteMapLinkContainer.classList.remove("hidden")
        isSiteMapClick = false;
    }
})