const title = document.getElementsByTagName('h1')[0];
const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];
const screenBtn = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll('div > .number') // или ".other-items.number"
const rangeValue = document.querySelector('.rollback span'); // или span[class=range-value]
const inputRange = document.querySelector('.rollback input[type=range]');
const inputTotal = document.getElementsByClassName('total-input')[0];
const inputTotalCount = document.getElementsByClassName('total-input')[1];
const inputTotalCountOther = document.getElementsByClassName('total-input')[2];
const inputTotalFullCount = document.getElementsByClassName('total-input')[3];
let screen = document.querySelectorAll('.screen');


console.log(title);
console.log(startBtn);
console.log(resetBtn);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(rangeValue);
console.log(inputRange);
console.log(inputTotal);
console.log(inputTotalCount);
console.log(inputTotalCountOther);
console.log(inputTotalFullCount);
console.log(screen);


