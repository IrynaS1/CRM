'use strict';

/* Задача #1
Создать объект rectangle, который описывает ширину и
высоту (свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины и
высоты и два геттера для получения периметра и
площади прямоугольника

Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"
пример "40см"

По умолчанию значения высоты и ширины заданы 5 см*/

const rectangle = {
  width: 5,
  height: 5,
  get perimeter() {
    const perimeter = 2 * (this.width + this.height);
    return `${perimeter}cм`;
  },
  get square() {
    const square = this.width * this.height;
    return `${square}cм`;
  },
  set newWidth(numb) {
    this.width = numb;
  },
  set newHeight(numb) {
    this.height = numb;
  },
};

rectangle.newWidth = 100;
rectangle.newHeight = 200;

console.log(rectangle.perimeter);
console.log(rectangle.square);

