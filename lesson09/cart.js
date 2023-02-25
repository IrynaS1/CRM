'use strict'

const cart = {
	items: [],
	count: 0,
	get totalPrice() {
		return 4;
	},
	add: function (nameOfGood, priceOfGood, countOfGood = 1) {
		this.items.push(this.items.good = {
			nameOfGood,
			priceOfGood,
			countOfGood,
		});
	},
	increaseCount: function () {
		for (let keyOne in this.items) {
			countOfGoods = this.items[keyOne].countOfGood;
		}
		this.count = this.count + countOfGoods;
	},
	calculateItemPrice: function () {
		/* 
				let priceOfGoods = 0;
				priceOfGoods = this.items.map((item) => {
					item = this.items.item.priceOfGood;
					console.log('элемент item', item);
				});
				console.log('элемент priceOfGoods', priceOfGoods); */

		/* let priceOfGoods = this.items.reduce((acc, b) => acc + this.items[key].priceOfGood, 0);
		console.log('общая priceOfGoods', priceOfGoods); */

		let priceOfGoods = 0;
		for (let key in this.items) {
			priceOfGoods = this.items[key].priceOfGood;
		}

		let countOfGoods = 0;
		for (let keyOne in this.items) {
			countOfGoods = this.items[keyOne].countOfGood;
		}

		let totalPPrice = 0;
		totalPPrice = totalPPrice + priceOfGoods * countOfGoods;
		return totalPPrice;
		console.log('общее значение totalPPrice', totalPPrice);
	},
	clear() {
		this.items = Object.create(null);
	},
	print() {
		console.log(JSON.stringify(this.items));
		//console.log(this.totalPrice);
		console.log(this.count);
	},
}

cart.add('cucumber', 150, 2);
cart.add('salo', 300, 3);
cart.add('bread', 180, 1);
cart.print();


cart.clear();
console.log("после функции очистки объектов", cart.items);

