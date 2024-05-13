let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 10000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", 1000);
let service2 = prompt ("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", 2000);
let rollback = 15;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

// 1. Function expression
let getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

// 2. Function declaration
function getFullPrice () {
    return screenPrice + allServicePrices;
};

// 3. 
function getTitle () {

    if (!title) return title; // Проверка на пустую строку,
                              // Если строка пустая, title[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку (
    return title.trimStart()[0].toUpperCase() + title.trimStart().slice(1).replace(/ +/g, ' ').toLocaleLowerCase();
            // Пересоздаём строку на основе существующей, с заглавным первым символом, если после первого заглавного символа были пробелы удаляем их 
            // удаляем первый символ строки, чтобы не дублировался
            // после удаляем лишние пробелы в строке если есть и переводим в нижний регистр
};

// 4.
function getServicePercentPrices () {
    return Math.ceil(fullPrice - fullPrice * (rollback/100));
};

// 5.
function getRollBackMessage (fullPrice) {
        if (fullPrice >= 30000){
        return "Скидка 10%";
    } else if (fullPrice >= 15000 && fullPrice < 30000) {
        return "Скидка 5%";
    } else if (fullPrice >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена";
    } else if (fullPrice < 0) {
        return "Что-то пошло не так";
    }
};

function showTypeOf (parametr) {
    console.log(parametr, typeof parametr); 
};

title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(screens);
console.log(fullPrice);
console.log(allServicePrices);
console.log(servicePercentPrice);
console.log(getRollBackMessage(fullPrice));