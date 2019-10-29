// Задание №6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
// Программа должна спросить у пользователя число, это будет количество денег, которое он
// хочет положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
//     "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
// "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
// "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
// То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа.
'use strict';

/**
 * /**
 * Функция возвращает правильное склонение слова "рубль" в зависимости от переданной в нее суммы
 * @param {number} arg1
 * @returns {string} resultString
 */
function getNumberDeclination(arg1){
    let resultString;
    let lastNumber=getLastNumber(arg1); // запишем в переменную окончание суммы, которую ввел пользователь
    
    if (lastNumber >=5 && lastNumber <= 19){
        resultString = "рублей";
    } else if (lastNumber==0){
        resultString = "рублей";
    } else if (lastNumber >=2 && lastNumber <=4){
        resultString = "рубля";
    } else resultString="рубль";

    // Альтернативный вариант через switch
    // switch (true) {
    //     case (lastNumber >=5 && lastNumber <= 19) :
    //         resultString = "рублей";
    //         break;
    //     case (lastNumber==0):
    //         resultString = "рублей";
    //         break;
    //     case lastNumber >=2 && lastNumber <=4:
    //         resultString = "рубля";
    //         break;
    //     default: resultString="рубль"
    // }
    return resultString;
}

/**
 * функция проверяет переданное в нее число, и если оно меньше 20, то возвращает его без изменения,
 * если число больше 20, то возвращает последнюю цифру этого числа
 * @param {number} num
 * @returns {number} lastNumber
 */
function getLastNumber(num){
    let lastNumber;

    if (num<=19){
        lastNumber=num;
        return lastNumber;
    } else {
        num = String(num);
        lastNumber = num.charAt(num.length-1);
        lastNumber = parseInt(lastNumber);
        return lastNumber;
    }
}
let answerHowMuchMoney;

answerHowMuchMoney = prompt("Сколько денег вы хотите положить на счет?");
if (answerHowMuchMoney == +answerHowMuchMoney && answerHowMuchMoney.trim() ) {
    alert(`Ваша сумма в ${answerHowMuchMoney} ${getNumberDeclination(answerHowMuchMoney)} успешно зачислена!`);
}
else  if(answerHowMuchMoney !== null) {
    alert('Было введено не число, попробуйте еще раз');
}




