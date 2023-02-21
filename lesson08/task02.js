/*Скопируйте код task01.js в task02.js

Продолжаем работать с предыдущей функцией

Функция принимает еще два параметра n и m

Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно

Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.*/

const arrayRandom = (numItems, m, n) => {
	let array = [];

	for (let i = 0; i <= numItems - 1; i++) {
		array.push(Math.floor(min + Math.random() * (max - min)));
	}

	return array;
}

arrayRandom(20, 86, -40);