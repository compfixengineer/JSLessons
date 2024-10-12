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
const totalCountRollback = document.getElementById('total-count-rollback');

let screens = document.querySelectorAll('.screen');
let checkInputValue = false;

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    countScreens: 0,

    init: function () { 
        appData.addTitle();
        startBtn.addEventListener('click',appData.start);
        screenBtn.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('input', appData.rollbackInputRange);
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        appData.addScreens();
        appData.addServices();  
        appData.addPrices ();  
        if (checkInputValue) {
            appData.showResult();
        }
    },

    addScreens: function () {

        screens = document.querySelectorAll('.screen');

        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input'); 
            const selectName = select.options[select.selectedIndex].textContent;
            
            if (selectName !== 'Тип экранов' && +input.value !== 0) {
                checkInputValue = true;
                appData.screens.push ({
                    id: index, 
                    typeScreen: selectName, 
                    price: +select.value * +input.value,
                    countScreen: +input.value
                }); 
            } 
            return console.log(checkInputValue); 
        }) 
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);

            screens[screens.length - 1].after(cloneScreen);
    },

    addServices: function () {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }  
        })

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }  
        })
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key]/100);
        }

        for (let i = 0; i < appData.screens.length; i++) {
            appData.countScreens += +appData.screens[i].countScreen;
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        //  
        appData.servicePercentPrice = Math.ceil(appData.fullPrice + (appData.fullPrice * appData.rollback)); 
    },

    showResult: function () {
        inputTotal.value = appData.screenPrice;
        inputTotalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        inputTotalFullCount.value = appData.fullPrice;
        inputTotalCount.value = appData.countScreens;
        totalCountRollback.value = appData.servicePercentPrice;
    },

    rollbackInputRange: function () {
        rangeValue.textContent = inputRange.value + ' %'; 
        appData.rollback = parseFloat(rangeValue.textContent)/ 100;
    }, 
}

appData.init();