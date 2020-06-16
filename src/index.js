import './sass/main.sass';

document.addEventListener('DOMContentLoaded', () => {
	const title = document.querySelector('.section-ratingPiffIncome__title');
	window.addEventListener('load', () => {
		if (document.documentElement.clientWidth <= 1260) {
			changeText(title, 'Рейтинг ПИФов по доходности и СЧА');
		}
	});
	window.addEventListener('resize', () => {
		if (document.documentElement.clientWidth <= 1260) {
			changeText(title, 'Рейтинг ПИФов по доходности и СЧА');
		} else {
			changeText(title, 'Рейтинг ПИФов по доходности');
		}
	});

	function changeText(element, text) {
		element.innerText = text;
	}
});