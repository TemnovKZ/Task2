



let menu = document.querySelector('.header__menu');
let list = document.querySelector('.header__list');
let line = document.querySelector('.header__line');

menu.addEventListener('click', function(){
	list.classList.toggle('active');
	menu.classList.toggle('active');

});