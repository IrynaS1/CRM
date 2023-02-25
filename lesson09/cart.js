'use strict'

const cart = {
	items: [],
	count: 0,
	get totalPrice() {
		return this.calculateItemPrice();
	},
	add: function (nameOfGood, priceOfGood, countOfGood = 1) {
		const good = {
			nameOfGood,
			priceOfGood,
			countOfGood,
		};

		this.items.push(good);
		this.increaseCount();
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

		let tPrice = 0;
		tPrice = tPrice + priceOfGoods * countOfGoods;
		console.log('tPrice', tPrice);
		return tPrice;
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

cart.add('cucumber', 152, 2);
cart.add('salo', 300, 3);
cart.add('bread', 180, 1);
cart.print();


cart.clear();
console.log("после функции очистки объектов", cart.items);

