//-------------------Счетчики на controls.htmls
const btns = document.querySelectorAll('.counter__btn');

btns.forEach(btn => {
	btn.addEventListener('click', function() {
		const direction = this.dataset.direction;
		const inp = this.parentElement.querySelector('.counter__value');
		const currentValue = +inp.value;
		let newValue;
		if (direction === 'plus') {
			newValue = currentValue + 1;
		}
		else {
			newValue = currentValue - 1;
		}
		inp.value = newValue;
	})
})


//-------------------Работа с select на controls.htmls
let select = function () {
	let selectHeader = document.querySelectorAll('.select__header');
	let selectItem = document.querySelectorAll('.select__item');
	//перебор всех selectHeader и при клике на одном из них вызывается ф-я selectToggle
	selectHeader.forEach(item => {
		item.addEventListener('click', selectToggle)
	})
	//ф-я selectToggle присваивает/удаляет класс на нужный selectHeader
	function selectToggle() {
		this.parentElement.classList.toggle('select-active');
	}
	//перебор всех selectItem и при клике на одном из них вызывается ф-я selectChoose
	selectItem.forEach(item => {
		item.addEventListener('click', selectChoose)
	})
	//ф-я selectChoose заменяет текст в select__current и удаляет класс .select-active для закрытия select
	function selectChoose() {
		let text = this.innerText;
		select = this.closest('.select');
		currentText = select.querySelector('.select__current');
		currentText.innerText = text;
		select.classList.remove('select-active');
	}
}
select();


//-------------------Работа с Rating на elements.htmls
const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
	initRatings();
}

//Основная ф-я
function initRatings() {
	let ratingActive, ratingValue;
	//Проход по каждому ratings
	for (let index = 0; index < ratings.length; index++) {
		const rating = ratings[index];
		initRating(rating);
	}
	//Инициализация конкретного rating
	function initRating(rating) {
		initRatingVars(rating);
		setRatingActiveWidth();
		//Если у rating есть класс .rating_set, то вызыв-ся ф-я
		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	//Инициализация переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	//Изменение ширины активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = (index / 0.05);
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	//Возможность указывать оценку
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener('mouseenter', function(e) {
				//Обновление переменных
				initRatingVars(rating);
				//Обновление активных звезд
				setRatingActiveWidth(ratingItem.value)
			});
			ratingItem.addEventListener('mouseleave', function(e) {
				//Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener('click', function(e) {
				//Обновление переменных
				initRatingVars(rating);
				//отобразить указанную оценку
				ratingValue.innerHTML = (index + 1).toFixed(1);
				setRatingActiveWidth();
			})
		}
	}
}


//-------------------Ползунок на controls.htmls
let slider = document.getElementById('range');

slider.addEventListener('mousemove', range);
slider.addEventListener('touchmove', range);

function range() {
	let x = slider.value;
	let color = 'linear-gradient(90deg, rgb(8, 128, 174)' + x + '%, rgb(219, 226, 234)' + x + '%)';
	slider.style.background = color;
}








