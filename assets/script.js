"use strict";

(() => {
	const slides = [
		{
			image: "slide1.jpg",
			tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
		},
		{
			image: "slide2.jpg",
			tagLine:
				"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		},
		{
			image: "slide3.jpg",
			tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
		},
		{
			image: "slide4.png",
			tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
		},
	];

	let currentSlide = 0;
	const PATH_TO_SLIDE = "/assets/images/slideshow/";

	const elBanner = document.querySelector("#banner");
	const elImg = elBanner.querySelector(".banner-img");
	const elTagline = elBanner.querySelector(".banner-tagline");
	const elDotsContainer = elBanner.querySelector(".dots");

	function setSlide() {
		elImg.src = PATH_TO_SLIDE + slides[currentSlide]["image"];
		elTagline.innerHTML = slides[currentSlide]["tagLine"];

		//set dot
		document.querySelector(".dot_selected").classList.remove("dot_selected");
		document
			.querySelectorAll(".dot")
		[currentSlide].classList.add("dot_selected");

		// #a11y Don't do this if autoplay feature is implemented later
		elTagline.focus();
	}

	// insert arrow button
	const elPrevBtn = document.createElement("button");
	elPrevBtn.classList.add("arrow", "arrow_left");
	elPrevBtn.innerHTML = "<img src='/assets/images/arrow_left.png' alt='Aller à la slide précédente'>";
	elBanner.prepend(elPrevBtn);

	const elNextBtn = document.createElement("button");
	elNextBtn.classList.add("arrow", "arrow_right");
	elNextBtn.innerHTML = "<img src='/assets/images/arrow_right.png' alt='Aller à la slide suivante'>";
	elBanner.append(elNextBtn);

	// insert dots
	const dotFragment = document.createDocumentFragment();
	let firstDot = true;

	for (const dot of slides) {
		const dotToInsert = document.createElement("div");
		if (firstDot) {
			dotToInsert.classList.add("dot_selected");
			firstDot = false;
		}
		dotToInsert.classList.add("dot");
		dotFragment.appendChild(dotToInsert);
	}

	elDotsContainer.appendChild(dotFragment);

	// set event listener
	elNextBtn.addEventListener("click", (e) => {
		if (currentSlide !== slides.length - 1) {
			currentSlide++;
		} else {
			currentSlide = 0;
		}
		setSlide();
	});

	elPrevBtn.addEventListener("click", (e) => {
		if (currentSlide !== 0) {
			currentSlide--;
		} else {
			currentSlide = slides.length - 1;
		}
		setSlide();
	});
})();
