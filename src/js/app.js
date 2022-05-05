const navigationEl = document.querySelector('.navigation');
const mobileNavBtn = document.getElementById('nav-open');
const mobileNavIcon = document.querySelector('#nav-open .burger');
const dropdownElements = document.querySelectorAll('.drop-down');
const allLinks = document.querySelectorAll('a:link');

// Mobile Navigation Responsive Nav
const toggleNavigation = () => {
  navigationEl.classList.toggle('open');
  mobileNavIcon.classList.toggle('open');
};

mobileNavBtn.addEventListener('click', (e) => {
  e.preventDefault();

  toggleNavigation();
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
});

// Drop Down Component

const dropdownFunc = (dropEv) => {
  let dropDownCard = dropEv.target.closest('.drop-down');
  let content = dropEv.target.closest('.drop-down').querySelector('.content');
  let btn = dropEv.target.closest('.dropdown-toggle');

  if (
    (!dropEv.target.matches('.custom-link') &&
      dropDownCard.dataset.open === 'self') ||
    btn
  ) {
    dropDownCard.classList.toggle('open');

    if (content.offsetHeight === 0) {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0px';
    }
  }
};

dropdownElements.forEach((dropDown) => {
  dropDown.addEventListener('click', (event) => dropdownFunc(event));
});

// Navigation Scroll to Section
allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    const href = link.getAttribute('href');

    if (href.includes('/') || href.includes('.html')) {
      return;
    }

    // Scroll back to top
    if (href === '#') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('nav-item-link')) {
      e.preventDefault();

      toggleNavigation();
    }
  });
});

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
