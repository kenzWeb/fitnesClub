const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-icon');
const ourBlock = document.querySelectorAll('.our-slide');
const ourExtra = document.querySelectorAll('.our__slider-extra');
const body = document.body;

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('_active')
		menuBtn.classList.toggle('_active')
		body.classList.toggle('_lock')
	})
}

ourBlock.forEach(item => {
	item.addEventListener('click', e => {
		item.querySelector('.our__slider-extra').classList.toggle('more')
	})
})

// Slider

const Ourrswiper = new Swiper('.our-slider', {
	spaceBetween: 30,
	slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }

});

const InstructorsSwiper = new Swiper('.instructors-slider', {
	spaceBetween: 80,
	slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
	breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    575: {
      slidesPerView: 2,
      spaceBetween: 30
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

const TestimonailSwiper = new Swiper('.testimonial-slider', {
	parallax:true,
	speed: 1500,

	spaceBetween: 10,
	slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});