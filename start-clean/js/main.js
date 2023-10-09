let chooseColor = document.querySelectorAll('.choose__color-btn');
let contentItem = document.querySelectorAll('.content-item');

chooseColor.forEach(function (element) {
	element.addEventListener('click', open)
}) 

function open(evt) {
	let target = evt.currentTarget;
	let button = target.dataset.button;
	let contentActive = document.querySelectorAll(`.${button}`);

	chooseColor.forEach(function (item){
		item.classList.remove('choose__color-btn--active')
	})

	target.classList.add('choose__color-btn--active')

	contentItem.forEach(function (item){
		item.classList.remove('content-item__active')
	});

	contentActive.forEach(function (item){
		item.classList.add('content-item__active')
	})
}