var swiper = new Swiper('.swiper-container__slider', {
  loop: true,
  //effect: 'fade',
  speed: 600,
  autoplay: {
  delay: 5000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

var swiper = new Swiper('.tab-swiper-container', {
  slidesPerView: 3,
  spaceBetween: 15,
  slidesPerGroup: 3,
  loop: true,
  autoplay: {
    delay: 8000
  },
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-tab',
    prevEl: '.swiper-button-prev-tab',
  },
  breakpoints: {
    // when window width is <= 320px
    // when window width is <= 480px
    480: {
      slidesPerView: 1,
      //spaceBetween: 20
    },
    // when window width is <= 640px
    992: {
      slidesPerView: 2,
      //spaceBetween: 30
    }
  }
});
(function () {
  var swiper = new Swiper('.swiper-container__partners', {
    slidesPerView: 5,
    spaceBetween: 30,
    spaceArround: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination__partners',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-partners',
      prevEl: '.swiper-button-prev-partners',
    },
  });
})();
$(function () {

  var heightMenu = $('.menu__wrapper').outerHeight();

  //window.innerWidth и window.innerHeight отвечают за размер окна браузера.
  var widthWindow = window.innerWidth;
  if (widthWindow >= 768) {
    $('.news__big').outerHeight(heightMenu);
  } else {
    //$('.news__big').outerHeight('auto');
  }


  window.onresize = function () {
    heightMenu = $('.menu__wrapper').outerHeight();

    if (widthWindow >= 768) {
      $('.news__big').outerHeight(heightMenu);
    } else if (widthWindow <= 768) {

    }


  };


});