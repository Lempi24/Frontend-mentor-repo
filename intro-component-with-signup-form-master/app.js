var validRegex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailInput = document.querySelector('#email');
document.querySelector('#btn').addEventListener('click', (event) => {
	event.preventDefault();
	document.querySelectorAll('.form-input').forEach((inputElement) => {
		const inputSibling = inputElement.nextElementSibling;
		if (inputElement.value === '') {
			inputElement.classList.add('invalid');
			inputSibling.classList.add('active');
			inputSibling.nextElementSibling.classList.add('active');
		}
	});
	if (!emailInput.value.match(validRegex)) {
		const emailSibling = emailInput.nextElementSibling;
		emailInput.classList.add('invalid');
		emailSibling.classList.add('active');
		emailSibling.nextElementSibling.classList.add('active');
	}
});
document.querySelectorAll('.form-input').forEach((inputElement) => {
	inputElement.addEventListener('input', () => {
		const inputSibling = inputElement.nextElementSibling;
		inputElement.classList.remove('invalid');
		inputSibling.classList.remove('active');
		inputSibling.nextElementSibling.classList.remove('active');
	});
});
