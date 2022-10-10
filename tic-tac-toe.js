// Part 1
window.onload = function () {
    let squares = document.querySelectorAll("#board div");
    for (let tile in squares) {
        squares[tile].classList.add("square");
    }
// Part 2    
    const options = ['X', 'O'];
    const nextPlayer = 0;
    var stateOfGame = board.children.length; //keeps track of tiles
    var currentPlayer;
    const cellElements = document.querySelectorAll('square');

    initialize(); 

    function initialize() {
        cellElements.forEach(square => {
            square.classList.remove(options);
            square.removeEventListener('click', tileClick);
        })    
    }

    for (var index = 0; index < stateOfGame; index++) {
        currentPlayer = board.children[index];
        currentPlayer.addEventListener('click', tileClick, {once:true});
        console.log('Tile Clicked!');
    }
    
    function tileClick() {
        currentPlayer.textContent = options[nextPlayer];
        currentPlayer.classList.add("square.X", "square.O");
        nextPlayer = nextPlayer >= options.length - 1 ? 0 : nextPlayer + 1; //condition ? exprIfTrue : exprIfFalse
        console.log(currentPlayer);
    }

// Part 3
    //change tile when mouse hovers
    const tile = document.querySelectorAll("#board div");
    tile.addEventListener("mouseover", (event) => {
        tile.forEach((event, i) => event.classList.add(hover[i]));
    })

// Part 4
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

    function checkWinner(nextPlayer) {
        return winningConditions.some(set => {
            return set.every(index => {
                return cellElements[index].classList.contains(nextPlayer);
            })
        })
    }
// Part 5
    const refreshBtn = document.querySelector("btn");
    refreshBtn.addEventListener('click', initialize);
}

