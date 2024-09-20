const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.askScreenPrice();
        appData.addPrices ();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isString: function (str) {
        // return typeof str === 'string' || str instanceof String
        return isNaN(str);
    },
    askScreenPrice: function() {
            let titleName = '';

            do {
                titleName = prompt("Как называется ваш проект?");
            } while (!appData.isString(titleName)) 
            
            appData.title = titleName;

            for (let i = 0; i < 2; i++) {
               let typeScreen = '';
               let price = 0;
            
                do {
                typeScreen = prompt("Какие типы экранов нужно разработать?");
                } while (!appData.isString(typeScreen))

                do {
                    price = prompt("Сколько будет стоить данная работа?");
                } while (!appData.isNumber(price))

            appData.screens.push({id: i, typeScreen: typeScreen, price: price});
            }

            for (let i = 0; i < 2; i++) {
                let nameServises = '';
                let price = 0;
                
                do {
                    nameServises = prompt ("Какой дополнительный тип услуги нужен?");
                } while (!appData.isString(nameServises))

                do {
                    price = prompt("Сколько это будет стоить?");
                } while (!appData.isNumber(price))
                
                appData.services[nameServises] = +price;
            }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)));
    },
    getTitle: function () {
        // if (!appData.title) return appData.title; // Проверка на пустую строку,
                              // Если строка пустая, title[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку (
        appData.title = appData.title.trimStart()[0].toUpperCase() + appData.title.trimStart().slice(1).replace(/ +/g, ' ').toLocaleLowerCase();
                // Пересоздаём строку на основе существующей, с заглавным первым символом, если после первого заглавного символа были пробелы удаляем их 
                // удаляем первый символ строки, чтобы не дублировался
                // после удаляем лишние пробелы в строке если есть и переводим в нижний регистр
    },
    getRollBackMessage: function (price) {
        if (price >= 30000){
            return "Скидка 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Скидка 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что-то пошло не так";
        }
    },
    logger: function () {
        console.log(appData.title);
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.start();
