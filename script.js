let screens = "Простые, Сложные, Интерактивные";
let title = "Название проекта";
let screenPrice = 100;
let rollback = 47;
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

