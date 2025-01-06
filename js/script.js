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
    isError: false,

    init: function () { 
        this.addTitle();
        startBtn.addEventListener('click',this.checkEror.bind(appData));
        resetBtn.addEventListener('click',this.reset.bind(appData));
        screenBtn.addEventListener('click', this.addScreenBlock);
        inputRange.addEventListener('input', this.rollbackInputRange.bind(appData));
    },
    
    checkEror: function () {
        
        screens = document.querySelectorAll('.screen');
        
        this.isError = false;

            screens.forEach((screen) => { // function
                const select = screen.querySelector('select');
                const input = screen.querySelector('input');

                if (select.value === '' || input.value === '') {
                    this.isError = true;
                }
            })
            if (!this.isError) {
                this.start();
                this.disabled();
            } 
    },

    disabled: function () {
        screens = document.querySelectorAll('.screen');
        startBtn.style = 'display: none';
        resetBtn.style = 'display: flex';
        screenBtn.disabled = true;
        screens.forEach((screen) => { 
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
                    select.disabled = true;
                    input.disabled = true;
           })
    },

    enabled: function () {
        startBtn.style = 'display: flex';
        resetBtn.style = 'display: none';
        screenBtn.disabled = false;
    },

    reset: function () {
        this.resetAppData();
        this.resetOtherItems();
        this.enabled();
        this.resetMainTotal();
        this.deleteScreen();
        this.resetRollbackRange();
    },

    deleteScreen: function () {
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
                if (index > 0 ) {
                    screen.remove();
                } 
            select.disabled = false;   
            input.disabled = false;
            select.value = '';
            input.value = '';            
            }); 
    },

    resetMainTotal: function () {
        inputTotal.value = 0;
        inputTotalCountOther.value = 0;
        inputTotalFullCount.value = 0;
        inputTotalCount.value = 0;
        totalCountRollback.value = 0;
    },

    resetOtherItems: function () {
        otherItemsPercent.forEach((item) => { // function 
            const check = item.querySelector('input[type=checkbox]');

            if (check.checked) {
                check.checked = false;
            }  
        })

        otherItemsNumber.forEach((item) => { // function
            const check = item.querySelector('input[type=checkbox]');

            if (check.checked) {
                check.checked = false;
            }  
        });
    },

    resetAppData: function () {
        this.screens = [];
        this.screenPrice = 0;
        this.rollback = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.fullPrice = 0;
        this.servicePercentPrice = 0;
        this.servicesPercent = {};
        this.servicesNumber = {};
        this.countScreens = 0;
    },

    addTitle: function () {
        document.title = title.textContent;
    },

    start: function () {
        this.addServices();
        this.addScreens();  
        this.addPrices ();  
        this.showResult();
    },

    
    addScreens: function () {

        screens = document.querySelectorAll('.screen');

        screens.forEach((screen, index) => { //function
            const select = screen.querySelector('select');
            const input = screen.querySelector('input'); 
            const selectName = select.options[select.selectedIndex].textContent;
            
                this.screens.push ({
                    id: index, 
                    typeScreen: selectName, 
                    price: +select.value * +input.value,
                    countScreen: +input.value
                }); 
            }); 
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);

            screens[screens.length - 1].after(cloneScreen);
    },

    addServices: function () {
        otherItemsPercent.forEach((item) => { // function 
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }  
        })

        otherItemsNumber.forEach((item) => { // function
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }  
        })
    },

    addPrices: function () {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key]/100);
        }

        for (let i = 0; i < this.screens.length; i++) {
            this.countScreens += +this.screens[i].countScreen;
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        //  
        this.servicePercentPrice = Math.ceil(this.fullPrice + (this.fullPrice * this.rollback)); 
    },


    showResult: function () {
        inputTotal.value = this.screenPrice;
        inputTotalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        inputTotalFullCount.value = this.fullPrice;
        inputTotalCount.value = this.countScreens;
        totalCountRollback.value = this.servicePercentPrice;
    },

    rollbackInputRange: function () {
        rangeValue.textContent = inputRange.value + ' %'; 
        this.rollback = parseFloat(rangeValue.textContent) / 100;
        
    }, 

    resetRollbackRange: function () {
        rangeValue.textContent = 0 + '%'
        inputRange.value = 0
    }
}

appData.init();