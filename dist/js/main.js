var swiper = new Swiper('.swiper-container', {
  loop: true,
  //effect: 'fade',
  speed: 600,
  //autoplay: {
  //delay: 5000,
  //},
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
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next-tab',
    prevEl: '.swiper-button-prev-tab',
  },
});