const swiper = new Swiper('.swiper-1', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiper2= new Swiper('.swiper-brands', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});


const swiper3= new Swiper('.swiper-main-prods', {
  loop: false,
  slidesPerView: 2,
  spaceBetween: 20,
  init: true,
  breakpoints: {
    768: {
      init: false,
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});