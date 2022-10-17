



let menu = document.querySelector('.header__menu');
let list = document.querySelector('.header__list');

menu.addEventListener('click', function(){
	document.body.classList.toggle ('lock');
	list.classList.toggle('active');
	menu.classList.toggle('active');
});

list.addEventListener('click', function() {
	document.body.classList.remove ('lock');
	list.classList.remove('active');
	menu.classList.remove('active');
});

window.onscroll = () => {
	if(window.scrollY > 0){
		document.querySelector('.header').classList.add('sticky');
	} else {
		document.querySelector('.header').classList.remove('sticky');
	}
}