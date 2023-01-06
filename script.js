const board = document.getElementById("board");
let squares = Array.from(board.getElementsByClassName("square"));
let currentPlayer = "X";

board.addEventListener("click", function(event) {
  let square = event.target;
  if (square.tagName === "DIV" && !square.textContent) {
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer.toLowerCase());
    checkWin();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
});

function checkWin() {
  let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningCombinations.length; i++) {
    let [a, b, c] = winningCombinations[i];
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      alert(`Player ${currentPlayer} wins!`);
      resetGame();
      return;
    }
  }
  if (squares.every(square => square.textContent)) {
    alert("Draw!");
    resetGame();
  }
}

function resetGame() {
  squares.forEach(square => {
    square.textContent = "";
    square.classList.remove("x", "o");
  });
  currentPlayer = "X";
}
