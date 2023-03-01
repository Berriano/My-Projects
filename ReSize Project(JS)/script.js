'use strict';



//------------ Qry Slctrs ---------------- //


const tabs = document.querySelectorAll('.services__tab');

const tabsContainer = document.querySelector('.services__tab--container');

const tabsContent = document.querySelectorAll('.services__content');


const header = document.querySelector('.header');

const nav = document.querySelector('.nav');

const container = document.querySelector('.container');


const button = document.querySelectorAll('.btn');




//------------------ Tabbed Services Section ---------------------- //




/// not adding the event listener to each tab, but to the container



tabsContainer.addEventListener('click', function (e) {


	/// Tab change content


	const clicked = e.target.closest('.services__tab');

	if (!clicked) return;





	tabsContent.forEach(tab => tab.classList.remove('services__content--active'));



	document.querySelector(`.services__content--${clicked.dataset.tab
		}`).classList.add('services__content--active');


}

);




/// tab transition


const scaler = function (e) {

	const clicked = e.target;


	clicked.style.transform = this;



}



const transitioner = function (e) {

	const clicked = e.target;


	clicked.style.transition = this;


}




button.forEach(btn => btn.addEventListener('mouseenter', scaler.bind('scale(1.2) translateY(-0.4rem)')));

button.forEach(btn => btn.addEventListener('mouseenter', transitioner.bind('all 0.2s')));


button.forEach(btn => btn.addEventListener('mouseleave', scaler.bind('scale(1)')))




// -------------------------  Sticky navigation  ------------------------- //


const stickyNav = function (entries) {


	const [entry] = entries;

	if (!entry.isIntersecting) {

		nav.classList.add('sticky');

	}

	else

		nav.classList.remove('sticky');


}

const options = {

	root: null,
	threshold: 0.01,
	rootMargin: `-${nav.getBoundingClientRect().height}px`



}



const navObserver = new IntersectionObserver(stickyNav, options);


navObserver.observe(header);


