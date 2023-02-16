/*Напишите функцию, которая принимает строку и возвращает обратную строку

Пример: "Привет мир" => "рим тевирП"*/

const reverseLine = (line) => {

	console.log(line.length);

	let i = line[0];

	for (i = 0; i <= line.length - 1; i++) {
		line[i] = line[length - 1];

	}
	console.log(line);
}

reverseLine('vbnm');