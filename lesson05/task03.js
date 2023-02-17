/*Напишите функцию, которая принимает строку и возвращает обратную строку

Пример: "Привет мир" => "рим тевирП"*/

const reverseLine = (line) => {
	let newLine = '';

	for (let i = line.length - 1; i >= 0; i--) {
		newLine = newLine + line[i];
	}
	console.log(newLine);
}
reverseLine('vbnm');