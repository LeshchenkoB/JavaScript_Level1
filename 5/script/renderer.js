"use strict";

let renderer={
    /**
     * метод рисует шахматное поле
     */
    renderBoard() {
        let result = this.generateBoard();
        document.body.insertAdjacentHTML('afterbegin', result);
    },
    /**
     * Метод генерирует шахматную доску на основании размеров в конфиге.
     * @returns {string} сгенерированный html-код шахмматной доски
     */
    generateBoard(){
        let board = '';
        let color = '';
        let figure = '';
        for (let y = 0; y < config.rowCount; y++){
            board += '<tr>';
            for(let x = 0; x < config.colCount; x++){

                if (y == 0 || y == 9){ // если это первая или последняя строки, то пишем в ячейки буквы
                    board += `<td class="border-none">${nameColumns[x]}</td>`;
                }
                else {
                    if ((x == 0 || x == 9) ) { // если это первая или последняя колонка, то пишем в ячейки номер строки
                        board += `<td class="border-none">${nameRow[y]}</td>`;
                    }
                    else {
                        figure = '';
                        if ((y + x) % 2) { // если координаты поля четные, то цвет должен быть белый
                                color = "gray"
                            } else {
                                color = "white"
                            }
                        if (y==1) { // если восьмая горизонталь
                            figure = eightFigure[x];
                        }
                        if (y==2) { // если седьмая горизонталь
                            figure = sevenFigure[x];
                        }
                        if (y==7) { // если вторая горизонталь
                            figure = twoFigure[x];
                        }
                        if (y==8) { // если первая горизонталь
                            figure = oneFigure[x];
                        }
                        board += `<td data-x="${x}" data-y="${y}" class="${color} hov">${figure}</td>`;
                        }
                    }
                }
            }
            board += '</tr>';
        return `<table><tbody>${board}</tbody></table>`
    }
}

renderer.renderBoard();