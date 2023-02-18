/*Напишите функцию filter()

функция принимает в параметрах 2 массива

Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
Результат функции: массив из всех студентов, которые сдали экзамен.
*/

const filter = (arr1, arr2) => {
	let arr3 = [];

	for (let i = 0; i <= arr1.length - 1; i++) {
		if (arr2.includes(arr1[i])) {
			arr3.push(arr1[i]);
		}
	}
	return arr3;
}

let arr1 = ['Petrov', 'Ivanov', 'Sidorov', 'Gribov', 'Motin'];
let arr2 = ['Sidorov', 'Ivanov', 'Gribov'];

filter(arr1, arr2);