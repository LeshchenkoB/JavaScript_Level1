
class Board{
    constructor() {
        this.gameTableElement=document.getElementById('game');
    }

    /**
     * Инициализация игры.
     */
    init() {
        // Выводим все ячейки.
        this.renderMap();
        // Инициализируем обработчики событий.
        this.initEventHandlers();
    };

    /**
     * Вывод ячеек в html.
     */
    renderMap() {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement('tr');
            this.gameTableElement.appendChild(tr);
            for (let col = 0; col < 3; col++) {
                let td = document.createElement('td');
                td.dataset.row = row.toString();
                td.dataset.col = col.toString();
                tr.appendChild(td);
            }
        }
    };
    /**
     * Инициализация обработчиков событий.
     */
    initEventHandlers() {
        // Ставим обработчик, при клике на таблицу вызовется функция this.cellClickHandler.
        this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event));
    }
}
window.addEventListener('load', ()=>{
    const settings = new Settings;
    const board = new Board;

    board.init();
});



class Settings{
    constructor() {
        status: 'playing';
        mapValues: [
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ];
        phase: 'X';
    }
};
//# sourceMappingURL=maps/app.js.map
