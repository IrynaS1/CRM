/*Напишите функцию генератор  массива случайных чисел в файле task01.js

Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;*/

const arrayRandom = (numItems) => {
	let array = [];

	for (let i = 0; i <= numItems - 1; i++) {
		array.push(Math.ceil(Math.random() * 100));
	}

	return array;
}

arrayRandom(20);