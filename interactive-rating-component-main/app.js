const submitBtn = document.querySelector('#submit-btn');
const thanksPage = document.querySelector('#thanks-page');
const mainPage = document.querySelector('#main-page');
const selectedRatingInfo = document.querySelector('#selected-info');
submitBtn.addEventListener('click', () => {
	const selectedRadio = document.querySelector('input[name="rating"]:checked');

	if (selectedRadio) {
		const selectedValue = selectedRadio.value;
		selectedRatingInfo.innerHTML = `You selected ${selectedValue} out of 5`;
		thanksPage.classList.toggle('hidden');
		mainPage.classList.toggle('hidden');
	} else {
		alert('Choose rating please :).');
	}
});
