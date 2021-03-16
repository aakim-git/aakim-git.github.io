

(function () {
	emailjs.init("user_MPtS5JPK7tXvTvJCNDXvM");
})();

// Used for the mobile nav button
window.onload = function () {
	document.querySelector('.icon-container').onclick = function () {
		document.querySelector('.mobile-header').classList.toggle('menu-open');
		var bars = document.querySelectorAll("#menu-icon .bar");
		
		bars.forEach(function (item) {
			if (item.classList.contains("active")) {
				item.classList.remove("active");
			}
			else {
				item.classList.add("active");
            }
		});
	}
}