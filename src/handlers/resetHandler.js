import dom from '../dom.js';
import data from '../data.js';

const resetHandler = () => {
    //clear all cells
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = '';
        cellEl.classList = 'cell';
    });

    // Reset the playBoard and set player turn to "X"
    data.playBoard = Array(9).fill('');
    data.turn = 'X';
    dom.playerTurn.innerHTML = `Your <span>X</span> turn`;
};

export default resetHandler;
