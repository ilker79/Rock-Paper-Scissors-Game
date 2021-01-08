let userResponse;
let gamesPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let draw = 0;

while ((userResponse = true)) {
  let playerChoice = prompt("What is your choice?");

  function getWinner(playerMove, computerMove) {
    if (playerMove === "Rock" && computerMove === "Rock") {
      return "0";
      draws++;
    } else if (playerMove === "Rock" && computerMove === "Scissors") {
      return "1";
      playerWins++;
    } else if (playerMove === "Rock" && computerMove === "Paper") {
      return "-1";
      computerWins++;
    } else if (playerMove === "Paper" && computerMove === "Rock") {
      return "1";
      playerWins++;
    } else if (playerMove === "Paper" && computerMove === "Scissors") {
      return "-1";
      computerWins++;
    } else if (playerMove === "Paper" && computerMove === "Paper") {
      return "0";
      draw++;
    } else if (playerMove === "Scissors" && computerMove === "Rock") {
      return "-1";
      computerWins++;
    } else if (playerMove === "Scissors" && computerMove === "Scissors") {
      return "0";
      draw++;
    } else if (playerMove === "Scissors" && computerMove === "Paper") {
      return "1";
      playerWins++;
    }
  }

  let computerChoiceArray = ["Rock", "Paper", "Scissors"];

  function computerMove() {
    return Math.floor(Math.random() * 3);
  }
  let computerChoice = computerChoiceArray[computerMove()];

  let result = getWinner(playerChoice, computerChoice);
  alert(`Computer choice is: ${computerChoice} ` + " " + result);

  gamesPlayed++;

  alert(
    `${gamesPlayed} times played. Computer wins:${computerWins} Player wins:${playerWins}`
  );

  let userCount = prompt(
    "Do you want to continue playing, Yes/anything you can type?"
  );

  if (userCount === "Yes") {
    userResponse = true;
  } else {
    break;
  }
}
