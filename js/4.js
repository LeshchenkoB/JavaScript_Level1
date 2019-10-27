//Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.
'use strict';

/**
 * функция возвращает сумму параметров
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
function getSum(arg1 ,arg2) {
    return (arg1+arg2);
}

/**
 * функция возвращает разность параметров
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
function getDiff(arg1,arg2) {
    return (arg1-arg2);
}

/**
 * функция возвращает произведение параметров
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
function getMulti(arg1,arg2) {
    return (arg1*arg2);
}

/**
 * функция возвращает частное от делелния параметров
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number}
 */
function getQuot(arg1,arg2) {
    if (arg2!=0) {
        return (arg1/arg2);
    } else{
        return 0;
    }
}

// задание №5 Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций (использовать функции из задания 4) и вернуть полученное значение.

/**
 * функция возвращает результат функции, в зависимости от введенного типа операций
 * @param {number} arg1
 * @param {number} arg2
 * @param {string}operation
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation){
    let result;
    switch (operation) {
        case "+":
            result = getSum(arg1 ,arg2);
            break;
        case "-":
            result = getDiff(arg1,arg2);
            break;
        case "*":
            result = getMulti(arg1,arg2);
            break;
        case "/":
            result = getQuot(arg1,arg2);
            break;
    }
    return result;
}
console.log(mathOperation(5,6, "*"));