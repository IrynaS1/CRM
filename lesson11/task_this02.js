'use strict';

/* Задача #2
Продолжим работу в cart.js из предыдущего урока
Методы объекта cart не должны обращаться к объекту по имени
В объект cart добавьте сеттер setDiscount и свойство discount
Сеттер setDiscount будет принимать promocode
если promocode будет строка METHED, то в discount будет добавляться значение 15
если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
метод calculateItemPrice должен учитывать скидку равную процентному значению
discount*/

const cart = {
  items: [],
  count: 0,
  discount: 0,
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
    let totalPriceOfGoods = this.items.reduce((acc, item) =>
      acc + item.priceOfGood * item.countOfGood, 0);

    console.log('totalPriceOfGoods до скидки', totalPriceOfGoods);

    if (this.discount !== 0) {
      totalPriceOfGoods -= Math.round(totalPriceOfGoods *
       (this.discount / 100));
    }

    console.log('totalPriceOfGoods после применения скидки', totalPriceOfGoods);

    return totalPriceOfGoods;
  },
  setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
    }
    if (promocode === 'NEWYEAR') {
      this.discount = 21;
    }
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
cart.setDiscount('METHED');
cart.print();


cart.clear();
console.log('после функции очистки объектов', cart.items);
