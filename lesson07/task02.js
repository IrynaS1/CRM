/*Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа

С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];*/

const getAverageValue = (allCashbox) => {
	let totalSumChecks = 0;

	for (let i = 0; i <= allCashbox.length - 1; i++) {
		totalSumChecks = totalSumChecks + allCashbox[i];
	}

	let averageCheck = Math.floor(totalSumChecks / allCashbox.length);
	return averageCheck;
}

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
getAverageValue(allCashbox);