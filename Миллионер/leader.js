"use strict";

let leader = {
    /**
     * Метод формирует вопрос и принимает ответ от пользователя. Сразу проверяет ответ на правильность и
     * выводит null, если пользователь нажал "Отмена", true, если ответ верный и false, если ответ неверный
     * @param question
     * @returns {null|boolean}
     */
    askQuestion(question) {
        let variations = "";
        for (let key in question){
            if (key != "quest" && key != "answerTrue" && key != "score"){ // если это не текст вопроса, не вариант правильного ответа и не счет
                variations += `${key} : ${question[key]}\n`;    // сформируем массив вопросов
            }
        }
        let answer = parseInt(prompt(`${question['quest']}\n${variations}\nТекущий счет: ${game.score} рублей.`));
        if(isNaN(answer)){  //если пользователь нажмет Отмену
            return null;
        }
        if (answer === question['answerTrue']) {   // если ответ правильный
            return true;
        }
        return false; // если ответ неверный
    }
}