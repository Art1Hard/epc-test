const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".nav");
const MENU_OPEN_CLASS = "menuOpen";

export const initMenu = () => {
	document.addEventListener("click", (e) => {
		if (burger.contains(e.target)) {
			header.classList.add(MENU_OPEN_CLASS);
			return;
		}

		if (!nav.contains(e.target)) {
			header.classList.remove(MENU_OPEN_CLASS);
		}
	});

	window.addEventListener("resize", () => {
		if (window.innerWidth > 1160) header.classList.remove(MENU_OPEN_CLASS);
	});
};
