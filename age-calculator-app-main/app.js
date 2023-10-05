const button = document.querySelector('#btn');
//inputs
const dayInput = document.querySelector('#day');
const monthInput = document.querySelector('#month');
const yearInput = document.querySelector('#year');
//outputs
const dayOutput = document.querySelector('#daysOutput');
const monthOutput = document.querySelector('#monthsOutput');
const yearOutput = document.querySelector('#yearsOutput');
//data
const date = new Date();
let currentYear = date.getFullYear();
let day = date.getDate();
let month = date.getMonth();
yearInput.max = currentYear;
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let validate = true;
button.addEventListener('click', (e) => {
	e.preventDefault();
	document.querySelectorAll('.input').forEach((inputElement) => {
		if (inputElement.value === '') {
			// Brak wprowadzonych danych
			inputElement.nextElementSibling.classList.remove('hidden');
			inputElement.previousElementSibling.classList.add('error-color');
			inputElement.classList.add('error-border');
			validate = false;
		} else if (monthInput.value > 12) {
			// Błąd w miesiącu
			monthInput.classList.add('error-border');
			monthInput.previousElementSibling.classList.add('error-color');
			monthInput.nextElementSibling.classList.remove('hidden');
			monthInput.nextElementSibling.textContent = 'Must be a valid month';
			validate = false;
		} else if (dayInput.value > 31) {
			// Błąd w dniu
			dayInput.classList.add('error-border');
			dayInput.previousElementSibling.classList.add('error-color');
			dayInput.nextElementSibling.classList.remove('hidden');
			dayInput.nextElementSibling.textContent = 'Must be a valid day';
			validate = false;
		} else if (yearInput.value > currentYear) {
			// Błąd w roku. Musi być w przeszłości
			yearInput.classList.add('error-border');
			yearInput.previousElementSibling.classList.add('error-color');
			yearInput.nextElementSibling.classList.remove('hidden');
			yearInput.nextElementSibling.textContent = 'Must be in the past';
			validate = false;
		} else if (dayInput.value > daysInMonth[monthInput.value - 1]) {
			dayInput.classList.add('error-border');
			dayInput.previousElementSibling.classList.add('error-color');
			yearInput.classList.add('error-border');
			yearInput.previousElementSibling.classList.add('error-color');
			monthInput.classList.add('error-border');
			monthInput.previousElementSibling.classList.add('error-color');
			dayInput.nextElementSibling.classList.remove('hidden');
			dayInput.nextElementSibling.textContent = 'Must be a valid date';
			validate = false;
		}
		if (validate) {
			if (dayInput.value > day) {
				day = day + daysInMonth[month - 1];
				month = month - 1;
			}
			if (monthInput.value > month) {
				month = month + 12;
				currentYear = currentYear - 1;
			}

			const dayToPrint = day - dayInput.value;
			const monthToPrint = month - monthInput.value;
			const yearToPrint = currentYear - yearInput.value;

			if (monthToPrint <= 0) {
				monthToPrint += 12;
				yearToPrint -= 1;
			}

			dayOutput.textContent = dayToPrint;
			monthOutput.textContent = monthToPrint;
			yearOutput.textContent = yearToPrint;
		}
	});
});
