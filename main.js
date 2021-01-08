let playerMove = "Rock";
let computerMove = "Rock";

let playerMove2 = "Paper";
let computerMove2 = "Paper";

let playerMove3 = "Scissors";
let computerMove3 = "Scissors";

if (playerMove && computerMove) {
  console.log("draw");
} else if (playerMove && computerMove2) {
  console.log("Player wins");
} else if (playerMove&& computerMove3) {
  console.log("Computer wins");
} else if (playerMove2 && computerMove) {
  console.log("Player wins");
} else if (playerMove2 && computerMove3) {
  console.log("Computer wins");
} else if (playerMove2 && computerMove2) {
  console.log("Draw");
} else if (playerMove3 && computerMove) {
  console.log("Computer wins");
} else if (playerMove3 && computerMove3) {
  console.log("Draw");
} else if (playerMove3 && computerMove2) {
  console.log("Player Wins");
}

