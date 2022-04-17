const navigationEl = document.querySelector('.navigation');
const mobileNavBtn = document.getElementById('nav-open');
const mobileNavIcon = document.querySelector('#nav-open .burger');

// Mobile Navigation Responsive Nav
mobileNavBtn.addEventListener('click', (e) => {
  e.preventDefault();

  navigationEl.classList.toggle('open');
  mobileNavIcon.classList.toggle('open');
});

// Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
});
