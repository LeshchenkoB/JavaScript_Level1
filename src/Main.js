'use strict';
window.addEventListener('load', ()=>{
    const settings = new Settings;
    const board = new Board;
    const game = new Game;
    const status = new Status;

    board.init();
    // status.setPlaying();
    game.init(board,settings,status);
});

