let id = 1;
fetch('data.json')
	.then((response) => response.json())
	.then((data) => {
		data.forEach((item) => {
			const summaryComponent = document.getElementById(`${id}`);

			const divElement = document.createElement('div');
			divElement.className = 'badge';

			const imgElement = document.createElement('img');
			imgElement.src = item.icon;
			imgElement.alt = item.category;

			const bElement = document.createElement('b');
			bElement.textContent = item.category;

			const b2Element = document.createElement('b');
			b2Element.textContent = `${item.score} / 100`;

			divElement.appendChild(imgElement);
			divElement.appendChild(bElement);

			summaryComponent.appendChild(divElement);
			summaryComponent.appendChild(b2Element);

			id++;
		});
	})
	.catch((error) => {
		console.error('Błąd podczas pobierania danych:', error);
	});
