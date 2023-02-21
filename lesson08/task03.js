/*Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


 4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел*/

const arrayRandom = (numItems, m, n, param) => {
	let array = [];

	if (param === 'even') {
		for (let i = 0; i <= numItems - 1; i++) {
			let randomNumber = (Math.floor(min + Math.random() * (max - min))) * 2;
			array.push(randomNumber);
		}
	} else {
		for (let i = 0; i <= numItems - 1; i++) {
			let randomNumber = Math.floor(min + Math.random() * (max - min)) * 2 + 1;
			array.push(randomNumber);
		}
	}

	return array;
}

arrayRandom(20, -5, 86, 'even');