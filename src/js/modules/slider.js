import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const wrapper = document.querySelector(".intro__steps-list");

export const initSlider = () => {
	document.addEventListener("DOMContentLoaded", () => {
		const swiper = new Swiper(".swiper", {
			modules: [Navigation],
			spaceBetween: 20,

			breakpoints: {
				320: { slidesPerView: 1 },
				505: { slidesPerView: 2 },
				748: { slidesPerView: 3 },
				992: { slidesPerView: 4 },
			},

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});

		function toggleSwiper() {
			if (window.innerWidth <= 1160) {
				wrapper.classList.add("swiper-wrapper");
				swiper.allowTouchMove = true;
			} else {
				wrapper.classList.remove("swiper-wrapper");
				swiper.allowTouchMove = false;
			}
		}

		window.addEventListener("resize", toggleSwiper);
		toggleSwiper();
	});
};
