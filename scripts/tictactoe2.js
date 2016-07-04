function init () {

// Global Variables

var gameStatus = document.querySelector('h1');

var currentPlayer = 'Player1';

var boardCount = 0;

var board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

// Get all boxes in the board

var boxes = document.querySelectorAll('box');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', playerMove);
}

// Clear Board

var clearButton = document.getElementById('clearButton');

clearButton.addEventListener("click", function() {
  location.reload();
});


// Player Moves

function playerMove(event) {
    var box =  event.target;
    //Check if this box has not been clicked before
    var isUnclickedBox = getButtonState(box.id) === null;

    if (currentPlayer === 'Player1' && isUnclickedBox) {
        box.innerHTML = 'X';
        box.style.background = 'red';
        setMove('X', button.id);
        checkForWinner();
        switchPlayerTo('Player2');

    } else if (currentPlayer === 'Player2' && isUnclickedBox) {
        box.innerHTML = 'O';
        box.style.background = 'blue';
        setMove('O', button.id);
        checkForWinner();
        switchPlayerTo('Player1');
    } else {
        console.log('Ignore click as button has been clicked before.');
    }
}

function switchPlayerTo(player) {
    //Toggle value of current player
    currentPlayer = player;

    //Update display display to show which player is next
    document.getElementById('currentTurn').innerHTML = "It is " + player + "'s turn.";

    //Change the class for all buttons on the board to affect hover color
    var boardBoxes = document.querySelectorAll('box');
    for (i = 0; i < boardBoxes.length; ++i) {
        boardBoxes[i].className = player.toLowerCase();
    }

}

function setMove(move, buttonId) {
    if (buttonId === 'b1') {
        board[0][0] = move;
    } else if (buttonId === 'b2') {
        board[0][1] = move;
    } else if (buttonId === 'b3') {
        board[0][2] = move;
    } else if (buttonId === 'b4') {
        board[1][0] = move;
    } else if (buttonId === 'b5') {
        board[1][1] = move;
    } else if (buttonId === 'b6') {
        board[1][2] = move;
    } else if (buttonId === 'b7') {
        board[2][0] = move;
    } else if (buttonId === 'b8') {
        board[2][1] = move;
    } else {
        //Set button b9
        board[2][2] = move;
    }
    boardCount++;
}

function getButtonState(buttonId) {
    if (buttonId === 'b1') {
        return board[0][0];
    } else if (buttonId === 'b2') {
        return board[0][1];
    } else if (buttonId === 'b3') {
        return board[0][2];
    } else if (buttonId === 'b4') {
        return board[1][0];
    } else if (buttonId === 'b5') {
        return board[1][1];
    } else if (buttonId === 'b6') {
        return board[1][2];
    } else if (buttonId === 'b7') {
        return board[2][0];
    } else if (buttonId === 'b8') {
        return board[2][1];
    } else {
        //return val of button b9.
        return board[2][2];
    }
}

function alertWinner(buttonValue){
    if(buttonValue === 'O'){
        alert('Game Over, Player 1 wins!');
        location.reload();
    }else {
        alert('Game Over, Player 2 wins!');
        location.reload();
    }
}

function checkForWinner() {
    //Check row 1 win
    if ((board[0][0] === board[0][1]) && (board[0][1] === board[0][2]) && (board[0][2] !== null)) {
        alertWinner(board[0][0]);
    }
    else if ((board[1][0] === board[1][1]) && (board[1][1] === board[1][2]) && (board[1][2] !== null)) {
        alertWinner(board[1][0]);
    }
    else if ((board[2][0] === board[2][1]) && (board[2][1] === board[2][2]) && (board[2][2] !== null)) {
        alertWinner(board[2][0]);
    }
    else if ((board[0][0] === board[1][0]) && (board[1][0] === board[2][0]) && (board[2][0] !== null)) {
        alertWinner(board[0][0]);
    }
    else if ((board[0][1] === board[1][1]) && (board[1][1] === board[2][1]) && (board[2][1] !== null)) {
        alertWinner(board[0][1]);
    }
    else if ((board[0][2] === board[1][2]) && (board[1][2] === board[2][2]) && (board[2][2] !== null)) {
        alertWinner(board[0][2]);
    }
    else if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[2][2] !== null)) {
        alertWinner(board[0][0]);
    }
    else if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[2][0] !== null)) {
        alertWinner(board[0][2]);
    }
    else if(boardCount === 9){
        //boardCount stores the number of spaces already filled in the board
        //If value is == 9 and not a winning combination, it is a tie.
        alert('It is a tie!');
        location.reload();
    }else {
        console.log('No winner yet!');
    }
}


}

window.addEventListener("load", init, false);
