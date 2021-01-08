// let playerMove;
// let computerMove;

let playerChoice = prompt("What is your choice?");

function getWinner(playerMove, computerMove) {
  if (playerMove === "Rock" && computerMove === "Rock") {
    return "0";
  } else if (playerMove === "Rock" && computerMove === "Scissors") {
    return "1";
  } else if (playerMove === "Rock" && computerMove === "Paper") {
    return "-1";
  } else if (playerMove === "Paper" && computerMove === "Rock") {
    return "1";
  } else if (playerMove === "Paper" && computerMove === "Scissors") {
    return "-1";
  } else if (playerMove === "Paper" && computerMove === "Paper") {
    return "0";
  } else if (playerMove === "Scissors" && computerMove === "Rock") {
    return "-1";
  } else if (playerMove === "Scissors" && computerMove === "Scissors") {
    return "0";
  } else if (playerMove === "Scissors" && computerMove === "Paper") {
    return "1";
  }
}
let computerChoiceArray = ['Rock', 'Paper', 'Scissors']

function computerMove() {
    return Math.floor(Math.random () * 3);
}

console.log(computerMove());

let result = getWinner(playerChoice, computerChoiceArray[computerMove()]);
alert(result);
