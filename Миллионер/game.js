"use strict";
let game = {
    score: 0,
    nextQueestionIndex: 0,

    /**
     * Запускает игру.
     */
    run() {
        // если вопросов больше нет
        if (!this.isQuestionIndex()) {
            alert(`Поздравляю, ты ответил на все вопросы! Твой выйгрыш составил ${this.score} рублей.`);
            this.score=0;
            this.nextQueestionIndex=0;
            if (confirm("Хотите сыграть еще раз?")){
                this.run();
            }
            return;
        }
        //
        let result = leader.askQuestion(questions[this.nextQueestionIndex]);
        // проверяем ответ пользователя
        // Если игрок ответил правильно
        if (result){
            this.score += questions[this.nextQueestionIndex]['score'];
            this.nextQueestionIndex++;
            alert(`Поздравляю! Это правильный ответ\nУ тебя на счету ${this.score} рублей`);
            this.run();
        }
        // Если игрок сказал что хочет выйти, то игра заканчивается.
        if (result === null) {
            alert(`Игра окончена.\nВаш выйгрыш составил ${this.score} рублей`);
            return;
        }
        // Если игрок ответил неправильно.
        if (!result) {
            this.score=0;
            this.nextQueestionIndex=0;
            alert(`Это неправильный ответ.\nВаш выйгрыш составил ${this.score} рублей`);
            return;
        }
    },
    /**
     * Метод проверяет содержится ли объекте вопросов еще вопрос, и возвращает
     * true, если вопросы еще есть и false, если вопросов уже нет
     * @returns {boolean}
     */
    isQuestionIndex() {                     //есть ли еще вопросы?
        return questions[this.nextQueestionIndex] !== undefined
    },

// Этот метод выполняется при открытии страницы.
    init() {
        console.log("Приветствую тебя. Для начала игры набери game.run() и нажмите Enter. ");
    }
};

game.init();