const title = document.getElementsByTagName('h1')[0].textContent;
// console.log(title[0].textContent);
const handlerBtn = document.getElementsByClassName('handler_btn')
const screenBtn = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll(".other-items.percent");
const otherItemsNumber = document.querySelectorAll('div > .number') // или ".other-items.number"
const inputRange = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback span'); // или span[class=range-value]
const totalInput = document.getElementsByClassName('total-input');
let screen = document.querySelectorAll('.screen');


console.log(title);
console.log(handlerBtn);
console.log(screenBtn);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(inputRange);
console.log(rangeValue);
for (let i = 0; i < totalInput.length; i++) {
    console.log(totalInput[i]);
}
console.log(screen);


