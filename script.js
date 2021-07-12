const gameBoard = (() => {
    let _gameBoard = new Array(9);

    const playerFactory = (name, mark, ai, turn) => {
        return {name, mark, ai, turn};
    };
    const player1 = playerFactory('player 1', 'X', false, True);
    const player2 = playerFactory('Player 2', 'O', false, false)
    let winner = null;
    let turns = 0;

    let board = []

    const winCombos = [
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [6,7,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [0,4,8]
    ];
    let winnerCombo = [];

    const playerTurn = (function () {
        const box = document.querySelectorAll('.box');
        box.forEach( box => {
            box.addEventListener('click', e => {
                //X player move if conditions are met
                if (player1.turn == true && gameBoard.winner == null 
                    && e.target.textContent == '' && player2.ai == false) {
                        //Adds move to array
                        board[e.target.id] = player1.mark;

                        box.textContent = player1.mark;
                        box.style.color = '#EE6C4D';

                        player1.turn = false;
                        player2.turn = true;

                        console.log(board);
                    } else if (player2.turn == true && gameBoard.winner == null
                        && e.target.textContent == '' && player2.ai == false) {
                            board[e.target.id] = player2.mark;

                            box.textContent = player2.mark;
                            box.style.color = '#98C1D9';

                            player1.turn = true;
                            player2.turn = false;

                            console.log(board);
                        } else {
                            return;
                        };

                        winCheck();

                        //box.style.opacity = '1';
            });
        });
        return {box};
    })();

    winCheck = () => {
        turns++;

        //Separates each player X | O move into 2 different arrays
        let xPlays = board.reduce((a, e, i) =>
        (e === player1.mark) ? a.concat(i) : a, []);
        let oPlays = board.reduce((a, e, i) =>
        (e === player2.mark) ? a.concat(i) : a, []);

        //Loop iterates over each winCombo array
        for(let [index, combo] of winCombos.entries()) {
            //Check if player moves index is equal to combo array index
            if (combo.every(elem => xPlays.indexOf(elem) > -1)) {
                gameBoard.winner = 'player1';
                gameBoard.winnerCombo = combo;
            } else if (combo.every(elem => oPlays.indexOf(elem) > -1)) {
                gameBoard.winner = 'player2';
                gameBoard.winnerCombo = combo;
            } else if (gameBoard.winner == null && gameBoard.winner == undefined && turns == 9) {
                gameBoard.winner = 'tie';
                gameBoard.winnerCombo = combo;
            };
        };
        //Display the winner
        console.log(turns, gameBoard.winner, winnerCombo);
        winDisplay();
        return winnerCombo;
    };
    //Resets board and display
    gameReset = () => {

    };
    console.log(board, winner, player1.turn, player2.turn);
    return {winCheck, gameReset, playerTurn, board, player2, winnerCombo};
})();


const displayController = (() => {
    const boxCtn = document.querySelector('.box-ctn');
    const box = document.querySelectorAll('.box');
    const winCtn = document.querySelector('.win-display');

    //Display winner function
    windDisplay = () => {
        for(i = 0; i < gameBoard.winnerCombo.length; i++) {
            document.getElementById(gameBoard.winnerCombo[i]).style.
            backgroundColor = 'rgba(0, 0, 0, 0.040)';
        };
    };
    //Displays the winner
    if(gameBoard.winner === 'p1') {
        
    }
})();



