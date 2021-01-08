let userResponse;

while (userResponse = true) {
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
   userCount = prompt('Do you want to continue playing?') 
    if (userCount === "Yes") { 
        return true
   } else {
       return false
   }

  }
  let computerChoiceArray = ["Rock", "Paper", "Scissors"];

  function computerMove() {
    return Math.floor(Math.random() * 3);
  }
  let computerChoice = computerChoiceArray[computerMove()];
  // console.log(computerMove());

  let result = getWinner(playerChoice, computerChoice);
  alert(`Computer choice is: ${computerChoice} ` + " " + result);
}   


