class First {
    constructor (str) {
        this.str = str;
    }
    hello () {
        console.log(this.str);
    }
}

class Second extends First{

}

const first = new First('Привет я метод родителя!');
// console.log(first);
first.hello();

const second = new Second('А я наследуемый метод!');
// console.log(second);
second.hello();


    