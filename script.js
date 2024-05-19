let service1;
let servicePrice1;
let service2;
let servicePrice2;
let screens;
let screenPrice;
let adaptive;
let rollback = 15;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

let title = prompt("Как называется ваш проект?", "как-то называется");


const askScreenPrice = function() {
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные, Интерактивные");
    do {
        screenPrice = +prompt("Сколько будет стоить данная работа?");
    } while (!isFinite(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};


const getAllServicePrices = function () {
    service1 = prompt ("Какой дополнительный тип услуги нужен?"); 
    do {
        servicePrice1 = +prompt("Сколько это будет стоить?", 1000);
    } while (!isFinite(servicePrice1));
    
    service2 = prompt ("Какой дополнительный тип услуги нужен?");   
    do {
        servicePrice2 = +prompt("Сколько это будет стоить?", 1000);
    } while (!isFinite(servicePrice2));
    
    return servicePrice1 + servicePrice2;
};


function getFullPrice () {
    return screenPrice + allServicePrices;
};


function getTitle () {
    
    if (!title) return title; // Проверка на пустую строку,
                              // Если строка пустая, title[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку (
    return title.trimStart()[0].toUpperCase() + title.trimStart().slice(1).replace(/ +/g, ' ').toLocaleLowerCase();
            // Пересоздаём строку на основе существующей, с заглавным первым символом, если после первого заглавного символа были пробелы удаляем их 
            // удаляем первый символ строки, чтобы не дублировался
            // после удаляем лишние пробелы в строке если есть и переводим в нижний регистр
};


function getServicePercentPrices () {
    return Math.ceil(fullPrice - fullPrice * (rollback/100));
};


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
askScreenPrice ();
console.log(typeof screenPrice + ' '+ screenPrice);
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