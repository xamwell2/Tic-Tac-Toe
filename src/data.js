const data = {
    // Indicates the current player's turn, starting with player "O"
    turn: 'O',

    // Represents the Tic-Tac-Toe board as an array of strings
    // Each cell can be "", "O", or "X"
    // The game starts with all cells empty

    playBoard: ['', '', '', '', '', '', '', '', ''],

    winCombinations: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], //rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], //columns
        [0, 4, 8],
        [2, 4, 6], //diagonals
    ],
};

export default data;
