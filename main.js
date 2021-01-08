let playerMove
let computerMove 

function getWinner(playerMove, computerMove) {
  if (playerMove === "Rock" && computerMove === "Rock") {
    return '0';
  } else if (playerMove === "Rock" && computerMove === "Scissors") {
    return '1';
  } else if (playerMove === "Rock" && computerMove === "Paper") {
    return '-1';
  } else if (playerMove === "Paper" && computerMove === "Rock") {
    return '1';
  } else if (playerMove === "Paper" && computerMove === "Scissors") {
    return '-1';
  } else if (playerMove === "Paper" && computerMove === "Paper") {
    return '0';
  } else if (playerMove === "Scissors" && computerMove === "Rock") {
    return '-1';
  } else if (playerMove === "Scissors" && computerMove === "Scissors") {
    return '0';
  } else if (playerMove === "Scissors" && computerMove === "Paper") {
    return '1';
  }
}

let result = getWinner();
