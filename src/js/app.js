import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/inputmask.min.js";
import "./modules/nouislider.min.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

import AirDatepicker from 'air-datepicker';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Calendar Datepicker
new AirDatepicker('#airdatepicker');

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

let inputsFields = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputsFields);

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 25,
    speed: 600,
    navigation: {
      prevEl: n.closest('.productSect').querySelector('.navArrowPrev'),
      nextEl: n.closest('.productSect').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
});


// Инициализация слайдера productCardSlider
document.querySelectorAll('.productCard').forEach(n => {
  const mySwiperProductCard = new Swiper(n.querySelector('.productCardSlider'), {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 10,
    effect: 'fade',
    autoplay: {
      delay: 1000,
    },
    disableOnInteraction: true,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: n.querySelector('.swiper-pagination'),
      clickable: true,
      type: 'bullets',
    },
  });  
  mySwiperProductCard.autoplay.stop(), n.addEventListener("mouseover", (function () {
    mySwiperProductCard.autoplay.start()

  })), n.addEventListener("mouseout", (function () {
    mySwiperProductCard.autoplay.stop()
  }));
});

var slider = document.getElementById('slider');

if (slider) {
  noUiSlider.create(slider, {
    start: [5000, 200000],
    connect: true,
    range: {
      'min': 0,
      'max': 250000
    },
  });

  var priceStart = document.getElementById('priceStart');
  var priceEnd = document.getElementById('priceEnd');
  var inputs = [priceStart, priceEnd];

  slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  // Listen to keydown events on the input field.
  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
      slider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

      var values = slider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = slider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          slider.noUiSlider.setHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            slider.noUiSlider.setHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            slider.noUiSlider.setHandle(handle, value - position);
          }

          break;
      }
    });
  });
}


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNav');
const bodyEl = document.querySelector('body');
const btnClose = document.querySelector('.headerNavCloseBtn');

const toggleMenu = function () {
  menu.classList.toggle('active');
}
const toggleBurger = function () {
  btnMenu.classList.toggle('active');
}
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});

btnClose?.addEventListener('click', function (e) {
  menuClose();
});


let headerSearchBtn = document.querySelector('.headerSearchBtn');
let headerSearch = document.querySelector('.headerSearch');
let headerSearchClose = document.querySelector('.headerSearchClose');
headerSearchBtn?.addEventListener('click', () => {
  headerSearch.classList.add('active');
  bodyOverflow();
});
headerSearchClose?.addEventListener('click', () => {
  headerSearch.classList.remove('active');
  bodyOverflow();
});


document.addEventListener('click', function (e) {
  const target = e.target;
  const its_headerSearchBtn = target == headerSearchBtn || headerSearchBtn.contains(target);
  const its_headerSearch = target == headerSearch || headerSearch.contains(target);
  const its_headerMenu = target == menu || menu.contains(target);

  if (!its_headerSearchBtn && !its_headerSearch && !its_headerMenu) {
    headerSearch.classList.remove('active');
    bodyEl.classList.remove('hidden');
  }
});


// Инициализация слайдера product-thumb-slider
const productSliderThumb = document.querySelector('.product-thumb-slider');
var mySwiperProductThumb = new Swiper(productSliderThumb, {
  slidesPerView: 4,
  spaceBetween: 1,
  direction: "horizontal",
  speed: 600,
  freeMode: true,
  watchSlidesProgress: true,
  mousewheel: true,
  breakpoints: {
    0: {
      spaceBetween: 7,
    },
    576: {
      spaceBetween: 12,
    },
    1400: {
      spaceBetween: 15,
    }
  },
});

// Инициализация слайдера product-slider
const productPageSlider = document.querySelector('.product-page-slider');
var mySwiperProductPage = new Swiper(productPageSlider, {
  slidesPerView: 1,
  spaceBetween: 5,
  speed: 600,
  freeMode: true,
  navigation: {
    prevEl: document.querySelector('.product')?.querySelector('.navArrowPrev'),
    nextEl: document.querySelector('.product')?.querySelector('.navArrowNext'),
  },
  thumbs: { // указываем на превью слайдер
    swiper: mySwiperProductThumb // указываем имя превью слайдера
  },
});

// Инициализация слайдера certSlider
const certSlider = document.querySelector('.certSlider');
var mySwiperCert = new Swiper(certSlider, {
  slidesPerView: 5,
  spaceBetween: 10,
  speed: 600,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 9,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 14,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 15,
    }
  },
});

// Инициализация слайдера certSlider
document.querySelectorAll('.certSlider').forEach(n => {
  const mySwiperCert = new Swiper(n, {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 600,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 9,
      },
      576: {
        slidesPerView: 5,
        spaceBetween: 14,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 14,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 14,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 15,
      }
    }
  });

});


const mediaQuery991 = window.matchMedia('(max-width: 991px)');

let filterBtn = document.querySelector('.filterBtn');
let shopSidebarAcordion = document.querySelector('.shopSidebarAcordion');
let filterBtnAction = document.querySelector('.filterBtnAction');
let shopSidebarSearch = document.querySelector('.shopSidebarSearch');

let accordionButtonEach = document.querySelectorAll('.accordion-button');
let accordionCollapseEach = document.querySelectorAll('.accordion-collapse');

if (mediaQuery991.matches) {
  let hasChildEach = document.querySelectorAll('.has-child');
  hasChildEach.forEach(el => {
    let closeEl = el.querySelector('.sublistReturn');
    let sublistEl = el.querySelector('.subList');
    el.addEventListener('click', () => {
      if (sublistEl.classList.contains('active')) {
        sublistEl.classList.remove('active');
      } else {
        sublistEl.classList.add('active');
      }
    });
  });
  filterBtn?.addEventListener('click', () => {
    shopSidebarAcordion.classList.toggle('active');
  });
  filterBtnAction?.addEventListener('click', () => {
    shopSidebarSearch.classList.toggle('active');
  });

  accordionButtonEach.forEach(el => {
    el.classList.add('collapsed')
  });
  accordionCollapseEach.forEach(el => {
    el.classList.remove('show')
  });

}

$(window).scroll(function () {
  if ($(this).scrollTop() > 185) {
    $('.header').addClass('fixed-on');
  }
  else if ($(this).scrollTop() < 185) {
    $('.header').removeClass('fixed-on');
  }
});


// certSlider input checked
let certSliderLableEach = document.querySelectorAll('.certSlider label');
let certCardImg = document.querySelector('.certCard img');

certSliderLableEach.forEach(el => {
  el.addEventListener('click', () => {
    certCardImg.src = el.dataset.src;
  });
});

let cartList = document.querySelector('.cartList');
let checkoutBlock = document.querySelector('.checkout');
let cartOrder = document.querySelector('.cartOrder');
let cartBack = document.querySelector('.cartBack');
let cartSmAction = document.querySelector('.cartSmAction');
let checkoutBtn = document.querySelector('.checkoutBtn');

checkoutBtn?.addEventListener('click', () => {
  cartList.classList.add('d-none');
  checkoutBlock.classList.remove('d-none');
  cartOrder.classList.remove('d-none');
  cartSmAction.classList.add('d-none');
  cartBack.classList.remove('d-none');
});

cartBack?.addEventListener('click', () => {
  cartList.classList.remove('d-none');
  checkoutBlock.classList.add('d-none');
  cartOrder.classList.add('d-none');
  cartSmAction.classList.remove('d-none');
  cartBack.classList.add('d-none');
});