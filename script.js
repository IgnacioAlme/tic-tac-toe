const gameBoard = (() => {
    let gameBoard = [];
})();

const playerFactory = (name, symbol) => {
    let score = 0;
    const getName = () => console.log({name});
    const getScore = () => console.log(score);
    return {getName, getScore};
};

const gameLogic = (() => {
    const createPlayer = () => {
        player1Name = prompt('Player one name', 'Player 1');
        const player1 = playerFactory(player1Name, 'X');
        console.log(`Player one created: ${player1Name}`)

        player2Name = prompt('Player two name', 'Player 2');
        const player2 = playerFactory(player2Name, 'O');
        console.log(`Player two created: ${player2Name}`)

        return {player1, player2};
    }
    return {createPlayer};
})();

gameLogic.createPlayer();