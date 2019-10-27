//Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.
'use strict';

/**
 * функция возвращает сумму параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getSum(a,b) {
    return (a+b);
}

/**
 * функция возвращает разность параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getDiff(a,b) {
    return (a-b);
}

/**
 * функция возвращает произведение параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getMulti(a,b) {
    return (a*b);
}

/**
 * функция возвращает частное от делелния параметров
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getQuot(a,b) {
    if (b!=0) {
        return (a/b);
    } else{
        return 0;
    }
}