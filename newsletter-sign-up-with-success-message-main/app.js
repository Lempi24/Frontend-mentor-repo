const validRegex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailInputElement = document.querySelector('.form-input');
const main = document.querySelector('#main');
const thanks = document.querySelector('#thanks');
const error = document.querySelector('.input-error');
const thanksBtn = document.querySelector('#thanks-btn');
document.querySelector('.btn').addEventListener('click', (event) => {
	event.preventDefault();

	if (emailInputElement.value.match(validRegex)) {
		main.classList.toggle('hidden');
		thanks.classList.toggle('hidden');
	} else {
		error.classList.toggle('hidden');
		emailInputElement.style.border = 'hsl(4, 100%, 67%) 1px solid';
		emailInputElement.style.backgroundColor = 'hsla(4, 100%, 67%, 0.2)';
		emailInputElement.style.color = 'hsl(4, 100%, 67%)';
	}
});
emailInputElement.addEventListener('input', () => {
	if (!error.classList.contains('hidden')) {
		error.classList.toggle('hidden');
		emailInputElement.style.border = '1px solid hsl(231, 7%, 60%)';
		emailInputElement.style.backgroundColor = '';
		emailInputElement.style.color = 'hsl(234, 29%, 20%)';
	}
});
thanksBtn.addEventListener('click', () => {
	main.classList.toggle('hidden');
	thanks.classList.toggle('hidden');
});
