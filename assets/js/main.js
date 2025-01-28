// Fixed navbar after scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (this.window.scrollY > 70) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-dark");
  } else {
    navbar.classList.remove("bg-dark");
  }
});

// Dark mode toggle
// const checkbox = document.getElementById('checkbox');
// const toggoler = document.getElementById('toggoler');
// checkbox.addEventListener('change', ()=>{
//   document.body.classList.toggle('dark');
//   if(document.body.classList.contains('dark')){
//       document.getElementById('logo').src = "assets/img/logo-footer.png";
//     } else{
//       document.getElementById('logo').src = "assets/img/logo.png";
//   }
// })

// Odometer JS

// swipwer js
var swiper = new Swiper(".projectSwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    1100: {
      slidesPerView: 1.4,
      spaceBetween: 24,
    },
    1300: {
      slidesPerView: 1.8,
      spaceBetween: 24,
    },
    1500: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1700: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
  loop: true,
  autoplay: true,
});

// Company Logo Swiper
var swiper = new Swiper(".logoSwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1300: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
  loop: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 6000,
  allowTouchMove: false,
});

// Company Logo Swiper
var swiper = new Swiper(".testimonialSwiper", {
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  loop: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: true,
  speed: 1000,
  pagination: {
    el: ".pagination",
    clickable: true,
  },
});

// Navbar hide mobile menu
$(".nav-link").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// initialize wow
new WOW().init();