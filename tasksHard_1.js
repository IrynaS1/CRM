//Задача с налогами
const profit = prompt("Введите сумму дохода для расчета налога");

let tax;

if (Number(profit) < 15000) {
	tax = Number(profit) * 0.13;
} else if (15000 < Number(profit) && Number(profit) < 50000) {
	tax = Number(profit) * 0.2;
} else {
	tax = Number(profit) * 0.3;
}

console.log("Налог составляет: ", tax);


//Задача с прогрессивными налогами
const profitPerson = prompt("Введите сумму дохода для расчета прогрессивного налога");

let taxPerson;

if (Number(profitPerson) < 15000) {
	taxPerson = Number(profitPerson) * 0.13;
} else if (15000 < Number(profitPerson) && Number(profitPerson) < 50000) {
	taxPerson = (Number(profitPerson) - 15000) * 0.2;
} else {
	taxPerson = (Number(profitPerson) - 50000) * 0.3;
}

console.log("Налог по прогрессивной шкале составляет: ", taxPerson);