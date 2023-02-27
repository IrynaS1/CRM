'use strict';

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(nameOfGood, priceOfGood, countOfGood = 1) {
    const good = {
      nameOfGood,
      priceOfGood,
      countOfGood,
    };

    this.items.push(good);
    this.increaseCount();
  },
  increaseCount() {
    const countOfGoods = this.items.reduce((acc, item) =>
      acc + item.countOfGood, 0);

    this.count = countOfGoods;
  },
  calculateItemPrice() {
    const totalPriceOfGoods = this.items.reduce((acc, item) =>
      acc + item.priceOfGood * item.countOfGood, 0);

    return totalPriceOfGoods;
  },
  clear() {
    this.items = Object.create(null);
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
    console.log(this.count);
  },
};

cart.add('cucumber', 152, 2);
cart.add('salo', 300, 3);
cart.add('bread', 180, 1);
cart.print();


cart.clear();
console.log('после функции очистки объектов', cart.items);

