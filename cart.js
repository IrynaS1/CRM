'use strict'

const cart = {
	items: [],
	totalPrice: 0,
	count: 0,
	getTotalPrice() {
		return this.totalPrice;
	},
	add: function (nameOfGood, priceOfGood, countOfGood = 1) {
		this.items.push(this.items.good = {
			nameOfGood,
			priceOfGood,
			countOfGood,
		});
		this.increaseCount();
		this.calculateItemPrice();
		console.log('increaseCount после добавления товаров в функции add', this.increaseCount());
		console.log('calculateItemPrice после добавления товаров в функции add', this.calculateItemPrice());
	},
	increaseCount: function () {
		for (let keyOne in this.items) {
			countOfGoods = this.items[keyOne].countOfGood;
		}
		this.count = this.count + countOfGoods;
	},
	calculateItemPrice: function () {
		let priceOfGoods = 0;
		for (let key in this.items) {
			priceOfGoods = this.items[key].priceOfGood;
		}

		let countOfGoods = 0;
		for (let keyOne in this.items) {
			countOfGoods = this.items[keyOne].countOfGood;
		}

		this.totalPrice = this.totalPrice + priceOfGoods * countOfGoods;
	},
	clear() {
		this.items = Object.create(null);
	},
	print() {
		console.log(JSON.stringify(this.items));
		console.log(this.totalPrice);
		console.log(this.count);
	},
}

cart.add('milk', 150, 2);
cart.add('salo', 300, 3);
cart.add('bread', 180, 1);
cart.print();


cart.clear();
console.log("после функции очистки объектов", cart.items);

