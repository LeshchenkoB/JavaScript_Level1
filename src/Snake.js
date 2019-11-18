class Snake {
    constructor() {
        this.possibleDirections = ['down', 'up', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    /**
     * @param{Settings} settings настройки игры
     */
    init(settings){
        this.settings = settings;
    }

    /**
     * Меняем направление движения.
     * @param {string} newDirection направление может быть down, up, left, right.
     * @throws {Error} при передаче не корректного направления выбрасывается ошибка.
     */
    changeDirection(newDirection) {
        if (!this.possibleDirections.includes(newDirection)) {
            throw new Error('Передано не верное направление. Вы передали: ' + newDirection);
        }
        if (this.isPassedOppositeDirection(newDirection)) {
            return;
        }
        this.direction = newDirection;
    }

    /**
     * Метод проверяет, является ли переданное направление, противоположным
     * тому куда сейчас движется змейка.
     * @param {string} newDirection новое направление, может быть up, down, right, left.
     * @returns {boolean} true если новое направление противоположно текущему,
     * иначе false.
     */
    isPassedOppositeDirection(newDirection) {
        if (this.direction == 'down' && newDirection == 'up') {
            return true;
        }
        if (this.direction == 'up' && newDirection == 'down') {
            return true;
        }
        if (this.direction == 'left' && newDirection == 'right') {
            return true;
        }
        if (this.direction == 'right' && newDirection == 'left') {
            return true;
        }
        return false;
    }

    /**
     * Метод осуществляет шаг змейки. Добавляет ячейку перед существующим
     * положением головы и удаляет одну ячейку в хвосте.
     */
    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y,
        };
        switch (this.direction) {
            case "down":
                newHeadCoords.y++;
                if (newHeadCoords.y > this.settings.rowsCount){ // если врезаемся в стену снизу, появляемся сверху
                    newHeadCoords.y = 1;
                }
                break;
            case "up":
                newHeadCoords.y--;
                if (newHeadCoords.y == 0) { // если врезаемся в стену сверху, появляемся снизу
                    newHeadCoords.y = this.settings.rowsCount;
                }
                break;
            case "left":
                newHeadCoords.x--;
                if (newHeadCoords.x == 0) { // если врезаемся в стену слева, появляемся справа
                    newHeadCoords.x = this.settings.colsCount;
                }
                break;
            case "right":
                newHeadCoords.x++;
                if (newHeadCoords.x > this.settings.colsCount){ // если врезаемся в стену справа, появляемся слева
                    newHeadCoords.x = 1;
                }
                break;
        }
        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    /**
     * Метод проверяет съела ли змея сама себя
     * Выполняется после осуществления шага
     * @returns {boolean} true если змейка съедает сама себя, иначе false.
     */
    isEatMyself(){
        let currentHeadCoords = this.body[0];
        for (let i = 1; i < this.body.length; i++){
            if (currentHeadCoords.x == this.body[i].x && currentHeadCoords.y == this.body[i].y){
                return true;
            }
        }
        return false;
    }
    /**
     * Метод дублирует в массиве объектов представляющих тело змейки
     * последнюю ячейку, т.е. в массиве в конце оказываются два
     * одинаковых объекта. Когда метод performStep в самом конце
     * удаляет последний элемент массива, он удаляет сдублированный
     * объект, таким образом тело змейки растет.
     */
    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y,
        };
        this.body.push(newBodyLastCell);
    }
}