var state;

document.addEventListener("DOMContentLoaded", function() {
  //DOMContentLoaded = event we are listening for after HTML is loaded
  state = initializeGame();
  var container = document.querySelector('.container');
  console.log(container);
  convertToBoard(container);
  container.addEventListener('click', handleClick);
  var clearButton = document.getElementById("clear-button");
  clearButton.addEventListener('click', clearBoard);
});

/**
 * Set up the initial game state from a fresh object
 */
function initializeGame() {
  var defaultBoard = [[null, null, null],
                      [null, null, null],
                      [null, null, null]];

  var defaultState = {
    currentPlayer: 'X',
    turn: 0,
    over: false,
    board: defaultBoard
  };
  
  return defaultState;
}

function continueGame() {
  state = initializeGame();
  var currentState = {
    currentPlayer: 'O',
    turn: 1,
    over: false,
    board: defaultBoard
  };
  return currentState;
}  

/**
 * Covert the divs to a 2-dimensional array
 * @param {Node} container - a dom node container holding the board of divs
 */
function convertToBoard(container) {
  var columns = container.children;
  for (let colIdx = 0; colIdx < 3; colIdx++) {
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      container.children[colIdx].children[rowIdx].id = rowIdx + "|" + colIdx;
      container.children[colIdx].children[rowIdx].className = 'cell';
    }
  }
}

/**
 * Click handler for allowing players to take turns
 * @param {Object} event - a DOM click event
 */
function handleClick(event) {
  var node = event.target;
  if (node.className === 'cell' && !state.over) {

    playTurn(node);
    processResult('X');
    processResult('O');
  }
}



/**
 * Check if an event target is an eligible game node,
 *   if so, execute a player's turn
 * @param {Object} cell - a tic-tac-toe cell (div)
 */
function playTurn(cell) {
  if (cell.innerText === '') {
    //if there is innertext in the cell, you can't change it
    //if its empty, its an elligible spot to put X or O
    cell.innerText = state.currentPlayer;
    state.turn++;
    var coordinates = cell.id.split('|');
    //takes a string and turns it to an array
    //"0|0".split -> splits into [0,0]
    var row = coordinates[0];
    var col = coordinates[1];
    state.board[row][col] = state.currentPlayer;
    if (state.currentPlayer === "X") {
      state.currentPlayer = "O";
    } else {
      state.currentPlayer = "X";
    }
    //update the array and presentation of the board
    //updates the board with X's and O's
  }
}

function processResult(currentPlayer) {
  var winner = '';
  if (state.board[0][0] === currentPlayer && state.board[0][1] === currentPlayer && state.board[0][2] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
    winner= currentPlayer;
  }
  if (state.board[1][0] === currentPlayer && state.board[1][1] === currentPlayer && state.board[1][2] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }   
  if (state.board[2][0] === currentPlayer && state.board[2][1] === currentPlayer && state.board[2][2] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  if (state.board[0][0] === currentPlayer && state.board[1][0] === currentPlayer && state.board[2][0] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  if (state.board[0][1] === currentPlayer && state.board[1][1] === currentPlayer && state.board[2][1] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  if (state.board[0][2] === currentPlayer && state.board[1][2] === currentPlayer && state.board[2][2] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  if (state.board[0][0] === currentPlayer && state.board[1][1] === currentPlayer && state.board[2][2] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  if (state.board[0][2] === currentPlayer && state.board[1][1] === currentPlayer && state.board[2][0] === currentPlayer) {
    console.log(currentPlayer + " WINS!!");
     winner= currentPlayer;
  }
  return winner;
}

function clearBoard() {
  console.log("Start New Game");
  //get all of the cells inside the container
  //make inner text = ''
  //state.board = array of arrays of null
  document.querySelectorAll(".cell").forEach(function(cell) {
  cell.innerText='';
});

}









//still need to know 
//who won
//how to reset the game