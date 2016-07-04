function init() {

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
      this.innerHTML = "X";
      this.style.background = "#fdd076";
      playerTurn = false;
      gameStatus.innerHTML = "Player O, it's your turn!";
      getWinner();
    }
    else if (this.innerHTML === "" && !playerTurn) {
      this.innerHTML = "O";
      this.style.background = "#fd9977";
      playerTurn = true;
      gameStatus.innerHTML = "Player X, make your move.";
      getWinner();
    }
}

for (i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener("click", playerMove);
}

// Get winner

function getWinner() {
  if ( thereIsAWinner() || itIsATie() ) {
    console.log("End of Game!");
     if (thereIsAWinner() ) {
       console.log("There is a winner!");
        if ( playerXWins() ) {
          console.log("Player X Wins!");
          gameStatus.innerHTML = "Player X is the Winner!";
        } else {
          console.log("Player O Wins!");
          gameStatus.innerHTML = "Player O is the Winner!";
        }
     } else {
       console.log("It's a tie!");
       gameStatus.innerHTML = "It's a Tie! Everyone wins :D";
     }
  } else {
    console.log("No winner yet, continue playing...");
  }
}

function thereIsAWinner() {
  if ( playerXWins() || playerOWins() ) {
    return true;
  } else {
    return false;
  }
}

function itIsATie() {
  if ( tieGame() ) {
    return true;
  } else {
    return false;
  }
}

// Player X Wins

function playerXWins() {
  if ( xWinsHorizontal() | xWinsVertical() | xWinsDiagonal() ) {
    return true;
  } else {
    return false;
  }
}

function xWinsHorizontal() {
  if ( (allBoxes[0].innerHTML === "X" && allBoxes[1].innerHTML === "X" && allBoxes[2].innerHTML ==="X") ||
       (allBoxes[3].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[5].innerHTML ==="X") ||
       (allBoxes[6].innerHTML === "X" && allBoxes[7].innerHTML === "X" && allBoxes[8].innerHTML ==="X") ) {
   return true;
 } else {
   return false;
 }
}

function xWinsVertical() {
 if ( (allBoxes[0].innerHTML === "X" && allBoxes[3].innerHTML === "X" && allBoxes[6].innerHTML ==="X") ||
      (allBoxes[1].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[7].innerHTML ==="X") ||
      (allBoxes[2].innerHTML === "X" && allBoxes[5].innerHTML === "X" && allBoxes[8].innerHTML ==="X") ) {
  return true;
 } else {
   return false;
 }
}

function xWinsDiagonal() {
  if ( (allBoxes[0].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[8].innerHTML ==="X") ||
       (allBoxes[2].innerHTML === "X" && allBoxes[4].innerHTML === "X" && allBoxes[6].innerHTML ==="X") ) {
   return true;
  } else {
    return false;
  }
}

// Player O Wins

function playerOWins() {
  if ( oWinsHorizontal() | oWinsVertical() | oWinsDiagonal() ) {
    return true;
  } else {
    return false;
  }
}

function oWinsHorizontal() {
  if ( (allBoxes[0].innerHTML === "O" && allBoxes[1].innerHTML === "O" && allBoxes[2].innerHTML ==="O") ||
       (allBoxes[3].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[5].innerHTML ==="O") ||
       (allBoxes[6].innerHTML === "O" && allBoxes[7].innerHTML === "O" && allBoxes[8].innerHTML ==="O") ) {
   return true;
  } else {
   return false;
  }
}

function oWinsVertical() {
  if ( (allBoxes[0].innerHTML === "O" && allBoxes[3].innerHTML === "O" && allBoxes[6].innerHTML ==="O") ||
      (allBoxes[1].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[7].innerHTML ==="O") ||
      (allBoxes[2].innerHTML === "O" && allBoxes[5].innerHTML === "O" && allBoxes[8].innerHTML ==="O") ) {
  return true;
  } else {
   return false;
  }
}

function oWinsDiagonal() {
  if ( (allBoxes[0].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[8].innerHTML ==="O") ||
     (allBoxes[2].innerHTML === "O" && allBoxes[4].innerHTML === "O" && allBoxes[6].innerHTML ==="O") ) {
  return true;
  } else {
  return false;
  }
}

// tieGame

function tieGame() {
  if ( allBoxes[0].innerHTML !== "" && allBoxes[1].innerHTML !== "" && allBoxes[2].innerHTML !== "" &&
       allBoxes[3].innerHTML !== "" && allBoxes[4].innerHTML !== "" && allBoxes[5].innerHTML !== "" &&
       allBoxes[6].innerHTML !== "" && allBoxes[7].innerHTML !== "" && allBoxes[8].innerHTML !== "" ) {
  return true;
  } else {
    return false;
  }
}

}
window.addEventListener("load",init,false);
