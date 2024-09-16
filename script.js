const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function () {
        appData.askScreenPrice()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getAllServicePrices()
        appData.title = appData.getTitle()
        appData.logger()
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    askScreenPrice: function() {
        appData.title = prompt("Как называется ваш проект?", "как-то называется")
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Cложные, Интерактивные")
        
        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice))
    
        appData.adaptive = confirm("Нужен ли адаптив на сайте?")
    },
    getAllServicePrices: function () {
        let sum = 0

        for (let i = 0; i < 2; i++) {
            let price = 0

            if (i === 0) {
                appData.service1 = prompt ("Какой дополнительный тип услуги нужен?")
            } else if (i === 1) {
                appData.service2 = prompt ("Какой дополнительный тип услуги нужен?")
            }

            do {
                price = prompt("Сколько это будет стоить?", 1000)
            } while (!appData.isNumber(price))

            sum += +price    
        }
            return sum
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: function () {
        return Math.ceil(appData.fullPrice - (appData.fullPrice * (appData.rollback/100)))
    },
    getTitle: function () {
        // if (!appData.title) return appData.title; // Проверка на пустую строку,
                              // Если строка пустая, title[0] вернёт undefined, а у undefined нет метода toUpperCase(), поэтому мы получим ошибку (
        return appData.title.trimStart()[0].toUpperCase() + appData.title.trimStart().slice(1).replace(/ +/g, ' ').toLocaleLowerCase();
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
        for (let key in appData) {
            console.log(key + ' - ' + appData[key])
        }
    }
}

appData.start();
