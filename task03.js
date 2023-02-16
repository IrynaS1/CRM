/*Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
В качестве аргументов функция принимает 3 параметра:
Общая сумма корзины
Количество товаров в корзине
Промокод
Правила и порядок (порядок важен!) начисления скидок:
Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
Если промокод равен "METHED", то скидка 10%
Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

Порядок применения скидок должен соблюдаться*/

const calculate = (totalSum, countGoods, promoCode) => {
	let discontForGoods = 0;
	discontForTotalSum = 0;
	discontPromoCode = 0;
	discontPromoCodeSecond = 0;

	if (countGoods > 10) {
		discontForGoods = totalSum * 0.03;
	} else {
		discontForGoods = 0;
	}

	totalSum = totalSum - discontForGoods;

	console.log(totalSum);

	if (totalSum > 30000) {
		discontForTotalSum = (totalSum - 30000) * 0.15;
	} else {
		discontForTotalSum = 0;
	}

	totalSum = totalSum - discontForTotalSum;
	console.log(totalSum);

	if (promoCode === "METHED") {
		discontPromoCode = totalSum * 0.1;
	} else {
		discontPromoCode = 0;
	}

	totalSum = totalSum - discontPromoCode;
	console.log(totalSum);

	let discontSum = discontForGoods + discontForTotalSum + discontPromoCode;

	if ((totalSum - discontSum) > 2000 && promoCode === "G3H2Z1") {
		totalSum = totalSum - 500;
		return totalSum;
	} else {
		return totalSum;
	}
}

calculate(5000, 11, "MEHED");
