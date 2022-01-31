let formButton = document.getElementById('complet-form');
let arrows = document.getElementById('arrows');
let extraForm1 = document.querySelector('.extra-form-1');
let extraForm2 = document.querySelector('.extra-form-2');
let extraForm3 = document.querySelector('.extra-form-3');
let extraForm4 = document.querySelector('.extra-form-4');
let extraForm5 = document.querySelector('.extra-form-5');

formButton.addEventListener('click', (e) => {
	extraForm1.classList.toggle('hidden');
	extraForm2.classList.toggle('hidden');
	extraForm3.classList.toggle('hidden');
	extraForm4.classList.toggle('hidden');
	extraForm5.classList.toggle('hidden');

	formButton.classList.toggle('hidden');
	arrows.classList.toggle('hidden');
});
