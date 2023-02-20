/*Скопируйте код task02.js в task03.js

Добавьте 4-ый опциональный параметр у функции


 4-ый опциональный параметр это строка:

если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел*/

const arrayRandom = (numItems, m, n) => {
	let array = [];

	for (let i = 0; i <= numItems - 1; i++) {
		min = Math.ceil(m);
		max = Math.floor(n);
		array.push(Math.floor(Math.random() * (max - min +1)+ min));
	}

	return array;
}

arrayRandom(20, -5, 86);