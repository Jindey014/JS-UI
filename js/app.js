const navbar = document.querySelector(".nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight >= navbarHeight) {
        navbar.classList.add("fixed-nav")
    }
    else {
        navbar.classList.remove("fixed-nav")
    }
})


//set date dynamically

const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();


//top link


window.addEventListener('scroll', function () {
    const topHeight = window.pageYOffset;
    if (topHeight > 400) {
        topLink.classList.add("show-top")
    }
    else {
        topLink.classList.remove("show-top")
    }
})


//fade and scroll items

const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"

};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


//dynamic sliders

const images = [
    {
        id: "1",
        img: "images/slide2.jpeg",
        title: "First Place",
        description: "kjfkldsjfkldsjfdklsjfalkdsjflkadsf dsjfklad fjadslk fdjjkfldjflkds kldsjf akldfjad slkfajlkdfjdsklf jds kldj fdlskf"
    },
    {
        id: "2",
        img: "images/slide1.jpeg",
        title: "Second Place",
        description: "kjfkldsjfkldsjfdklsjfalkdsjflkadsf dsjfklad fjadslk fdjjkfldjflkds kldsjf akldfjad slkfajlkdfjdsklf jds kldj fdlskf"
    },
    {
        id: "3",
        img: "images/slide3.jpeg",
        title: "Third Place",
        description: "kjfkldsjfkldsjfdklsjfalkdsjflkadsf dsjfklad fjadslk fdjjkfldjflkds kldsjf akldfjad slkfajlkdfjdsklf jds kldj fdlskf"
    },
    {
        id: "4",
        img: "images/slide4.jpg",
        title: "Fourth  Place",
        description: "kjfkldsjfkldsjfdklsjfalkdsjflkadsf dsjfklad fjadslk fdjjkfldjflkds kldsjf akldfjad slkfajlkdfjdsklf jds kldj fdlskf"
    },
]

const swiperSlide = document.querySelector(".swiper-wrapper")

window.addEventListener("DOMContentLoaded", function () {
    displaySwiperImages(images)
})

function displaySwiperImages(swiperImages) {
    let swiperImage = swiperImages.map(function (item) {
        return `<div class="swiper-slide">
                        <img src=${item.img} alt="">
                        <div class="layer">
                            <h3>VIEW DETAILS</h3>
                        </div>
                    </div>`;
    })
    swiperImage = swiperImage.join("")
    swiperSlide.innerHTML = swiperImage
}





