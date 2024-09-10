document.addEventListener('DOMContentLoaded', function () {
    new Splide('#image-slider', {
        "type": "loop",
        perPage: 4,
        perMove: 1,
        gap: 10,

        pagination: false,
        breakpoints: {
            600: {
                perPage: 1,
            },
        }
    }).mount();
});

let lastScrollTop = 0;
const navbar = document.getElementById(
    'navbar'); // Replace 'yourNavbarId' with the actual ID of your navbar element

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && window.scrollY > 500) {
        // Scroll down
        navbar.style.transform = 'translateY(-100%)'; // or any other CSS to hide the navbar
    } else {
        // Scroll up
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
});

const trend = document.getElementById("trend");
const trending = document.getElementById("trending");
const toneTrigger = document.getElementById("toneTrigger");
const tone = document.getElementById("tone");
const cartTrigger = document.getElementById("cartTrigger");
const sidebar = document.getElementById("sidebar");
const closeTrigger = document.getElementById("close");

trend.addEventListener("mouseenter", (e) => {
    trending.style.height = "auto"
    trending.style.borderTop = "1px solid rgba(0,0,0,0.1)"
})
trending.addEventListener("mouseenter", (e) => {
    trending.style.height = "auto"
    trending.style.borderTop = "1px solid rgba(0,0,0,0.1)"
})
trend.addEventListener("mouseleave", () => {
    trending.style.height = "0px"
    trending.style.borderTop = "none"
})
trending.addEventListener("mouseleave", () => {
    trending.style.height = "0px"
    trending.style.borderTop = "none"
})


toneTrigger.addEventListener("mouseenter", (e) => {
    console.log('mouseengter')

    tone.style.height = "auto"
    tone.style.borderTop = "1px solid rgba(0,0,0,0.1)"
})
tone.addEventListener("mouseenter", (e) => {
    tone.style.height = "auto"
    tone.style.borderTop = "1px solid rgba(0,0,0,0.1)"
})
toneTrigger.addEventListener("mouseleave", () => {
    tone.style.height = "0px"
    tone.style.borderTop = "none"
})
tone.addEventListener("mouseleave", () => {
    tone.style.height = "0px"
    tone.style.borderTop = "none"
})



cartTrigger.addEventListener("click", (e) => {

    sidebar.style.transform = 'translateX(0)'

})

closeTrigger.addEventListener("click", (e) => {
    sidebar.style.transform = 'translateX(100%)'
})