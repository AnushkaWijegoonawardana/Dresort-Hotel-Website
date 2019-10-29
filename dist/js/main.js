var appendNumber = 4;
var prependNumber = 1;

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  // Optional parameters
  direction: "horizontal",
  loop: true,

  autoplay: {
    delay: 5000
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar"
  },

  fadeEffect: {
    crossFade: true
  }
});

if (window.matchMedia("screen and (max-width: 767px)").matches) {
  var appendNumber = 4;
  var prependNumber = 1;

  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    // Optional parameters
    direction: "horizontal",
    loop: true,

    autoplay: {
      delay: 3000
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar"
    },

    fadeEffect: {
      crossFade: true
    }
  });
}
