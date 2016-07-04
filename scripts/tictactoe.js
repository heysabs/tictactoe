// Global Variables

var allBoxes = document.getElementsByClassName('box');

var gameStatus = document.querySelector('h1');

var playerTurn = true;

// Clear Board

var clearButton = document.getElementById('clearButton');

clearButton.addEventListener("click", function() {
  location.reload(true);
});


// Player Moves

function playerMove() {
    if (this.innerHTML === "" && playerTurn) {
      this.innerHTML="<img src ='https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/cross.png'>";
      playerTurn = false;
      gameStatus.innerHTML = "Player O, it's your turn!";
      checkWinner();
    }
    else if (this.innerHTML === "" && !playerTurn) {
      this.innerHTML="<img src ='https://raw.githubusercontent.com/christkv/tic-tac-toe/master/public/img/circle.png'>";
      playerTurn = true;
      gameStatus.innerHTML = "Player X, make your move.";
      checkWinner();
    }
}

for (i = 0; i< allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", playerMove);
}

//
