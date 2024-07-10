import dom from '../dom.js';
import data from '../data.js';
import selectWinner from '../utils/selectWinner.js';

const turnHandler = (e) => {
    //separate cell elements
    const cellEl = e.target;
    const id = cellEl.id;

    //check if cell is already marked or the game is over
    if (cellEl.innerText || dom.playerTurn.innerHTML.includes('won')) {
        return;
    }

    //mark the cell with the current player's mark
    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;

    //update internal game board data
    data.playBoard[id] = data.turn;

    //check for winner or draw
    const winResult = selectWinner(
        data.playBoard,
        data.winCombinations,
        data.turn,
    );

    if (winResult !== null) {
        dom.playerTurn.innerHTML = winResult;
        return;
    }

    //toggle current player
    data.turn = data.turn === 'O' ? 'X' : 'O';

    //update dom with the new player's turn
    dom.playerTurn.innerHTML = `It's <span>${data.turn}</span>'s turn`;
};

export default turnHandler;
