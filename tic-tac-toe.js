// Part 1
window.onload = function () {
    let squares = document.querySelectorAll("#board div");
    for (let tile = 0; tile < squares.length; tile++) {
        squares[tile].classList.add("square");
    }
// Part 2    
    const options = ['X', 'O'];
    let currentPlayer = 0;
    var stateOfGame = board.children.length; //keeps track of tiles
    var nextPlayer;

    for (var index = 0; index < stateOfGame; index++) {
        nextPlayer = board.children[index];
        nextPlayer.addEventListener('click', tileClick);
    }
    
    function tileClick() {
        if (this.textContent == "") { //prevents the tiles from changing players
            this.textContent = options[currentPlayer];
            this.classList.add(options[currentPlayer]);
        }
        if (checkWinner(squares)) {
            updateWinner.classList.add('you-won');
            updateWinner.innerHTML = `Congratulations! ${options[currentPlayer]} is the Winner!`;
        }
        currentPlayer = currentPlayer >= options.length - 1 ? 0 : currentPlayer + 1; //condition ? exprIfTrue : exprIfFalse
    }

// Part 3
    //change tile when mouse hovers
    for (let colour = 0; colour < squares.length; colour++) {
        squares[colour].onmouseover = function() {
            this.classList.add('hover');
        }
        squares[colour].onmouseout = function() {
            this.classList.remove('hover');
        }
    }

// Part 4
    let updateWinner = document.querySelector('#status');
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4 ,6],
    ];

    function checkWinner(squares) {
        for (let comb of winningConditions) {
            if (squares[comb[0]].textContent == squares[comb[1]].textContent && 
                squares[comb[1]].textContent == squares[comb[2]].textContent &&
                squares[comb[0]].textContent != "") {
                    return true;
                } 
        } 
        return false;
    }

// Part 5
    const refreshBtn = document.querySelector('.btn');
    refreshBtn.addEventListener('click', e => {
        e.preventDefault();
        document.querySelectorAll('#board div').forEach(square => {
            square.innerHTML = "";
            square.className = 'square'});
            //square.classList.remove("X");
            //square.classList.remove('O')}); 
        updateWinner.classList.remove('you-won');
        updateWinner.textContent = "Move your mouse over a square and click to play an X or an O.";
        //console.log("button clicked!");
    });
}

