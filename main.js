let playerMove = "Rock";
let computerMove = "Rock";

let playerMove2 = "Paper";
let computerMove2 = "Paper";

let playerMove3 = "Scissors";
let computerMove3 = "Scissors";

if (playerMove === "Rock" && computerMove === "Rock") {
  console.log("draw");
} else if (playerMove === "Rock" && computerMove === "Scissors") {
  console.log("Player wins");
} else if (playerMove === "Rock" && computerMove === "Paper") {
  console.log("Computer wins");
} else if (playerMove === "Paper" && computerMove === "Rock") {
  console.log("Player wins");
} else if (playerMove === "Paper" && computerMove === "Scissors") {
  console.log("Computer wins");
} else if (playerMove === "Paper" && computerMove === "Paper") {
  console.log("Draw");
} else if (playerMove === "Paper" && computerMove === "Rock") {
  console.log("Player wins");
} else if (playerMove === "Paper" && computerMove === "Scissors") {
  console.log("Computer wins");
} else if (playerMove === "Paper" && computerMove === "Paper") {
  console.log("Draw");
}
