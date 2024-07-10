import turnHandler from '../handlers/turnHandler.js';

const createBoard = () => {
    // Create the container for the board
    const boardContainer = document.createElement('div');
    boardContainer.className = 'boardContainer';

    // Create 9 cells (representing the Tic-Tac-Toe board)
    let num = 0;
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = num;

        // Append the cell to the board container
        boardContainer.append(cell);

        // Add click event listener to each cell
        cell.addEventListener('click', (e) => {
            turnHandler(e); // Call turnHandler function on click
        });

        num += 1;
    }
    return boardContainer; // Return the constructed board container
};

export default createBoard;
