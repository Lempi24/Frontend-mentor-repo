const questionElements = document.querySelectorAll('.question');
let prevClickedElement;
let prevAnswer;

questionElements.forEach((questionElement) => {
	questionElement.addEventListener('click', () => {
		toggleAnswer(questionElement);
	});
});

function toggleAnswer(questionElement) {
	const answerElement = questionElement.nextElementSibling;
	const arrowIcon = questionElement.querySelector('.arrow-icon');

	if (prevClickedElement !== questionElement) {
		checkIfActive(prevAnswer);
		if (prevClickedElement) {
			prevClickedElement.style.color = 'hsl(240, 6%, 50%)';
			prevClickedElement.style.fontWeight = '400';
			prevAnswer.classList.remove('active');
			prevClickedElement.querySelector('.arrow-icon').style.transform =
				'rotate(0deg)';
		}

		questionElement.style.color = 'hsl(238, 29%, 16%)';
		questionElement.style.fontWeight = 'bold';

		if (answerElement) {
			answerElement.classList.add('active');
			prevAnswer = answerElement;
			prevClickedElement = questionElement;
			arrowIcon.style.transform = 'rotate(180deg)';
		}
	} else {
		checkIfActive(answerElement);
		questionElement.style.color = 'hsl(240, 6%, 50%)';
		questionElement.style.fontWeight = '400';
		prevClickedElement = null;
		prevAnswer = null;
		arrowIcon.style.transform = 'rotate(0deg)';
	}
}

function checkIfActive(answerElement) {
	if (answerElement && answerElement.classList.contains('active')) {
		answerElement.classList.remove('active');
	}
}
