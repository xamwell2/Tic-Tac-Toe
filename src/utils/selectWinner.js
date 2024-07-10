const winner = (playBoard, winCombinations, playerTurn) => {
    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (
            playBoard[a] &&
            playBoard[a] === playBoard[b] &&
            playBoard[a] === playBoard[c]
        ) {
            return `<span>${playerTurn}</span> Won! Reset for new game`;
        }
    }

    const isDraw = playBoard.every((cell) => cell !== '');
    if (isDraw) {
        return `Game ended in a draw!`;
    }

    return null;
};

export default winner;
