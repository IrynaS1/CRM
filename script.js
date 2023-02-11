'use strict';

/* Первый урок 
const nameGood = 'Чайник';

const count = 3;

const category = 'Товары для кухни';

const price = 200;

console.log('товар: ', nameGood);

console.log('общая сумма за товар: ', price * count);
*/


//Второй урок
const nameGood = prompt('Введите наименование товара');

const count = prompt('Введите количество товара');

const category = prompt('Введите категорию товара');

const price = prompt('Введите цену товара');

console.log(typeof nameGood);
console.log(typeof count);
console.log(typeof category);
console.log(typeof price);

const countNumber = Number(count);
const priceNumber = Number(price);

console.log(typeof countNumber);
console.log(typeof priceNumber);

console.log(`На складе ${countNumber} единицы товара "${nameGood}" на сумму ${priceNumber * countNumber} деревянных`);
