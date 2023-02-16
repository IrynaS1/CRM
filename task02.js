/*Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие



Пример:  "привет Мир" => "Привет мир"*/


const changeString = (stringLine) => {
	let firstLetter = stringLine.charAt(0).toUpperCase();

	let stringLineCut = stringLine.substring(1).toLowerCase();

	stringLine = firstLetter + stringLineCut;

	console.log(stringLine);
}

changeString('gyH JHFDC HUBN');