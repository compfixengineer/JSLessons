let screens = "Простые, Сложные, Интерактивные";
let title = "Название проекта";
let screenPrice = 100;
let rollback = 15;
let fullPrice = 3000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
     
console.log("Стоимость верстки экранов " + screenPrice + " ₽");
console.log("Стоимость разработки сайта " + fullPrice + " ₽");


screens = screens.toLowerCase();
screens = screens.split(',');
console.log(screens);
console.log("Процент отката посреднику за работу "+ fullPrice * (rollback/100)+ " ₽");



title = prompt("Как называется ваш проект?");
console.log(title);

screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные, Интерактивные");
console.log(screens);

screenPrice = +prompt("Сколько будет стоить данная работа?", 10000);
console.log(typeof screenPrice);
console.log(screenPrice);

adaptive = confirm("Нужен ли адаптив на сайте?");
console.log(adaptive);

let service1 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
fullPrice = screenPrice + servicePrice1 + servicePrice2;

// let servicePercentPrice = fullPrice - fullPrice * (rollback/100);
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));
console.log(servicePercentPrice);
//Math.ceil(servicePercentPrice)

if (fullPrice > 30000 || fullPrice == 30000){
    console.log("Скидка 10%");
} else if ((fullPrice > 15000 && fullPrice < 30000) || fullPrice == 15000) {
    console.log("Скидка 5%");
} else if (fullPrice == 0 || (fullPrice > 0 && fullPrice < 15000)) {
    console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
    console.log("Что-то пошло не так");
}