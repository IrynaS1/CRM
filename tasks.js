
// Задача с дождем
const rain = Math.round(Math.random());

if (rain === 1) {
	console.log("Пошёл дождь. Возьмите зонт!");
} else {
	console.log("Дождя нет!");
}



//Задача с экзаменами
const mathPoints = prompt("Введите кол-во баллов по математике:");

const langPoints = prompt("Введите кол-во баллов по русскому языку:");

const compSciensePoints = prompt("Введите кол-во баллов по информатике:");

const totalPoints = Number(mathPoints) + Number(langPoints) + Number(compSciensePoints);

if (totalPoints >= 256) {
	console.log("Поздравляю, вы поступили на бюджет!");
} else {
	console.log("Вы не поступили в институт на бюджет!");
}



//Задача с банкоматом
const cash = prompt("Введите сумму, которую вы хотите снять?");

if (Number(cash) < 100) {
	console.log("Минимальная сумма для снятия - 100р");
} else {
	console.log("Возьмите деньги!");
}




