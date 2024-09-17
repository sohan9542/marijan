document.addEventListener('DOMContentLoaded', function () {
    const splide1 = document.getElementById('image-slider')

    if (splide1) {
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
    }

});



document.addEventListener('DOMContentLoaded', function () {
    const splide2 = document.getElementById('image-slider2')
    if (splide2) {
        new Splide('#image-slider2', {
            "type": "loop",
            perPage: 2,
            perMove: 1,
            gap: 10,

            pagination: false,
            breakpoints: {
                600: {
                    perPage: 1,
                },
            }
        }).mount();



    }
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

const buy = document.querySelector('.buy')
window.addEventListener('scroll', function () {
    if (buy) {
        if (window.scrollY < 500 || window.scrollY > 800) {
            // Scroll down
            buy.style.display = 'block'; // or any other CSS to hide the navbar
        } else {
            // Scroll up
            buy.style.display = 'none';
        }
    }
});

const trend = document.getElementById("trend");
const trending = document.getElementById("trending");
const toneTrigger = document.getElementById("toneTrigger");
const tone = document.getElementById("tone");
const cartTrigger = document.getElementById("cartTrigger");
const sidebar = document.getElementById("sidebar");
const closeTrigger = document.getElementById("close");

const openbar = document.getElementById("openbar");
const leftbar = document.getElementById("leftbar");
const closebar = document.getElementById("closebar");

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
    document.querySelector('body').style.overflowY = 'hidden'

})

closeTrigger.addEventListener("click", (e) => {
    sidebar.style.transform = 'translateX(100%)'
    document.querySelector('body').style.overflowY = 'scroll'
})

if (openbar) {
    openbar.addEventListener("click", (e) => {

        leftbar.style.transform = 'translateX(0)'
        document.querySelector('body').style.overflowY = 'hidden'

    })
    closebar.addEventListener("click", (e) => {
        leftbar.style.transform = 'translateX(-100%)'
        document.querySelector('body').style.overflowY = 'scroll'
    })


}





let tab1Active = 0;
const tab1 = document.querySelectorAll('.tab1');

function updateBorders() {
    tab1.forEach((item, index) => {
        if (tab1Active === index) {
            item.style.border = '2px solid black';
        } else {
            item.style.border = '2px solid transparent';
        }
    });
}

// Initialize the borders on page load
updateBorders();

// Add event listener to each button
tab1.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab1Active = index;
        updateBorders();  // Update all borders after clicking
    });
});


let tab2Active = 0;
const tab2 = document.querySelectorAll('.tab2');

function updateBorders2() {
    tab2.forEach((item, index) => {
        if (tab2Active === index) {
            item.style.border = '2px solid black';
        } else {
            item.style.border = '2px solid transparent';
        }
    });
}

// Initialize the borders on page load
updateBorders2();

// Add event listener to each button
tab2.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab2Active = index;
        updateBorders2();  // Update all borders after clicking
    });
});



let dfaqActive = 0;
const dfaq = document.querySelectorAll('.dfaq');

function updateTab() {
    dfaq.forEach((item, index) => {
        const svgD = item.querySelector('svg');
        const desc = item.querySelector('.desc');
        desc.style.overflow = 'hidden'
        if (dfaqActive === index) {
            svgD.style.transform = 'rotate(0deg)'
            desc.style.display = 'block'

        } else {
            svgD.style.transform = 'rotate(180deg)'
            desc.style.display = 'none'
        }
    });
}

// Initialize the borders on page load
updateTab();

// Add event listener to each button
dfaq.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (dfaqActive !== index) {
            dfaqActive = index;
        }
        else {
            dfaqActive = -1;
        }
        updateTab();  // Update all borders after clicking
    });
});




const sort = document.querySelector('.sort')
const sort_content = document.querySelector('.sort_content')
const av = document.querySelector('.av')
const av_content = document.querySelector('.av_content')
const price = document.querySelector('.price')
const price_content = document.querySelector('.price_content')

if (sort) {
    sort.addEventListener('click', (e) => {
        // sort_content.style.display = 'block';
        if (sort_content.style.display === 'block') {
            sort_content.style.display = 'none';
        }
        else {
            sort_content.style.display = 'block';
        }

    });

    av.addEventListener('click', () => {
        if (av_content.style.display === 'block') {
            av_content.style.display = 'none';
        }
        else {
            av_content.style.display = 'block';
        }
    })

    price.addEventListener('click', () => {
        if (price_content.style.display === 'block') {
            price_content.style.display = 'none';
        }
        else {
            price_content.style.display = 'block';
        }
    })


    document.addEventListener('click', (e) => {
        if (!sort.contains(e.target) && !sort_content.contains(e.target)) {
            sort_content.style.display = 'none';
        }
        if (!av.contains(e.target) && !av_content.contains(e.target)) {
            av_content.style.display = 'none';
        }
        if (!price.contains(e.target) && !price_content.contains(e.target)) {
            price_content.style.display = 'none';
        }
    });
}