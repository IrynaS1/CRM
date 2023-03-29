'use strict';

// удаление блока рекламы
const advertising = document.querySelector('.ads');

advertising.remove();

// расположение блоков
const items = document.querySelector('.items');

const blockOne = document.querySelector('.item_one');

const blockTwo = document.querySelector('.item_five');

const blockThree = document.querySelector('.item_three');

const blockFour = document.querySelector('.item_four');

const blockFive = document.querySelector('.item_six');

const blockSix = document.querySelector('.item_two');

items.prepend(blockOne);

blockOne.after(blockTwo);

blockTwo.after(blockThree);

blockFour.after(blockFive);

// картинки в блоках
const images = document.querySelectorAll('.item__image');

const contents = document.querySelectorAll('.content');

const cloneImageSix = images[1].cloneNode(true);

const cloneImageFive = images[4].cloneNode(true);

images[1].replaceWith(images[5]);

images[4].remove();

contents[4].prepend(cloneImageSix);

contents[5].prepend(cloneImageFive);

// Наименования блоков
const titles = document.querySelectorAll('.item__title');

titles[1].textContent = 'This и прототипы объектов';

// контент
const lists = document.querySelectorAll('.props__list');

const contentTwo = lists[1];

const contentThree = lists[2];

const contentFive = lists[4];

const contentSix = lists[5];

lists[2].replaceWith(contentTwo);

contents[1].append(contentSix);

contents[5].append(contentFive);

contents[4].append(contentThree);

console.log(lists);
console.log(contents);

// строки контента
const elemOne = document.querySelectorAll('.props__item_four');

elemOne[3].after(elemOne[0]);

const elemTwo = document.querySelectorAll('.props__item_two');

elemTwo[7].after(elemTwo[8]);

elemTwo[8].after(elemTwo[9]);

// цвета
blockTwo.style.backgroundColor = '#46a75e';

blockFive.style.backgroundColor = '#466ba7';

blockSix.style.backgroundColor = '#973b3b';
