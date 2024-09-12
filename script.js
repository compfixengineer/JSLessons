let userNum = prompt("Угадай число от 1 до 100");

function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessTheNumber(guessNum) {
    const userResponse = function (userNum) {
        if (isNum(userNum)) {
            userNum = +userNum;

            if (userNum === guessNum) {
                alert("Поздравляю, Вы угадали!!!");   
            } else if (userNum < guessNum) {
                alert ("Загаданное число больше");
                userNum = prompt("Введите другое число");
                userResponse(userNum);
            } else if (userNum > guessNum) {
                alert ("Загаданное число меньше");
                userNum = prompt("Введите другое число");
                userResponse(userNum);
            } 
        } else if (userNum === null) {
                alert ("Игра окончена");
        } else {
                    alert ("Можно вводить только числа");
                    userNum = +prompt("Введите другое число");
                    userResponse(userNum);
                }      
    }
        userResponse(userNum);
}

guessTheNumber(15);
