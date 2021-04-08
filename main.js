let userResponse;
let gamesPlayed = 0;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let playerChoice;
let computersChoice;
let playersName;

function selected() {
  if (document.querySelector("#Rock").checked) {
    playerChoice = "Rock";
  } else if (document.querySelector("#Paper").checked) {
    playerChoice = "Paper";
  } else if (document.querySelector("#Scissors").checked) {
    playerChoice = "Scissors";
  }

  if (playerChoice !== undefined) {
    document.querySelector(
      "#player-choice"
    ).innerText = `Player's choice is ${playerChoice}`;
  } else {
    document.querySelector("#player-choice").innerText =
      "Please choose one of the options";
  }
}

let computerChoiceArray = ["Rock", "Paper", "Scissors"];

//Computer's choice
function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  computersChoice = computerChoiceArray[randomNum];

  if (playerChoice !== undefined) {
    document.querySelector(
      "#computer-choice"
    ).innerText = `Computer choice is: ${computersChoice} `;
  } else {
    document.querySelector("#computer-choice").innerText = null;
  }
}

//Reset the game
function reset() {
  playerChoice = undefined;
  document.querySelector("#Rock").checked = false;
  document.querySelector("#Paper").checked = false;
  document.querySelector("#Scissors").checked = false;
  document.querySelector("#computer-choice").innerText = null;
  document.querySelector("#player-choice").innerText = null;
  document.querySelector("#winner").innerText = null;
}

function result() {
  if (playerChoice === "Rock" && computersChoice === "Rock") {
    draws++;
    document.querySelector("#winner").innerText = "Draw";
    document.querySelector("#game-draw").innerText = draws;
  } else if (playerChoice === "Rock" && computersChoice === "Scissors") {
    playerWins++;
    document.querySelector("#winner").innerText = "Player wins";
    document.querySelector("#playerwin").innerText = playerWins;
  } else if (playerChoice === "Rock" && computersChoice === "Paper") {
    computerWins++;
    document.querySelector("#winner").innerText = "Computer wins";
    document.querySelector("#computerwin").innerText = computerWins;
  } else if (playerChoice === "Paper" && computersChoice === "Rock") {
    playerWins++;
    document.querySelector("#winner").innerText = "Player wins";
    document.querySelector("#playerwin").innerText = playerWins;
  } else if (playerChoice === "Paper" && computersChoice === "Scissors") {
    computerWins++;
    document.querySelector("#winner").innerText = "Computer wins";
    document.querySelector("#computerwin").innerText = computerWins;
  } else if (playerChoice === "Paper" && computersChoice === "Paper") {
    draws++;
    document.querySelector("#winner").innerText = "Draw";
    document.querySelector("#game-draw").innerText = draws;
  } else if (playerChoice === "Scissors" && computersChoice === "Rock") {
    computerWins++;
    document.querySelector("#winner").innerText = "Computer wins";
    document.querySelector("#computerwin").innerText = computerWins;
  } else if (playerChoice === "Scissors" && computersChoice === "Scissors") {
    draws++;
    document.querySelector("#winner").innerText = "Draw";
    document.querySelector("#game-draw").innerText = draws;
  } else if (playerChoice === "Scissors" && computersChoice === "Paper") {
    playerWins++;
    document.querySelector("#winner").innerText = "Player wins";
    document.querySelector("#playerwin").innerText = playerWins;
  }
}

function playerName() {
  playersName = document.querySelector("#player-name-input").value;
  if (playersName.length <= 10 && /^[A-Z][a-z]*/g.test(playersName)) {
    document.querySelector("#name-restriction").style.display = "none";
    document.querySelector("#player-position").innerText = playersName;
    document.querySelector("#game-visibility").style.display = "block";
  } else if (!/^[A-Z]/.test(playersName) && playersName.length > 10) {
    document.querySelector("#name-restriction").style.display = "block";
    document.querySelector("#name-restriction").innerText =
      "Name cannot be more than 10 characther long! First letter of the username should be capitalised!";
  } else if (/[^a-zA-Z]/.test(playersName)) {
    document.querySelector("#name-restriction").style.display = "block";
    document.querySelector("#name-restriction").innerText =
      "Your player name can only contain letters!";
  } else if (!/^[A-Z]/.test(playersName)) {
    document.querySelector("#name-restriction").style.display = "block";
    document.querySelector("#name-restriction").innerText =
      "First letter of the username should be capitalised!";
  } else if (playersName.length > 10) {
    document.querySelector("#name-restriction").style.display = "block";
    document.querySelector("#name-restriction").innerText =
      "Name cannot be more than 10 characther long!";
  }
}

let submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", playerName);

let resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", reset);

let playButton = document.querySelector("#play-button");
playButton.addEventListener("click", selected);
playButton.addEventListener("click", computerChoice);
playButton.addEventListener("click", result);

// while ((userResponse = true)) {
//   let playerChoice = prompt("What is your choice?");

//   function getWinner(playerMove, computerMove) {
//     if (playerMove === "Rock" && computerMove === "Rock") {
//       draws++;
//       return "0";
//     } else if (playerMove === "Rock" && computerMove === "Scissors") {
//       playerWins++;
//       return "1";
//     } else if (playerMove === "Rock" && computerMove === "Paper") {
//       computerWins++;
//       return "-1";
//     } else if (playerMove === "Paper" && computerMove === "Rock") {
//       playerWins++;
//       return "1";
//     } else if (playerMove === "Paper" && computerMove === "Scissors") {
//       computerWins++;
//       return "-1";
//     } else if (playerMove === "Paper" && computerMove === "Paper") {
//       draw++;
//       return "0";
//     } else if (playerMove === "Scissors" && computerMove === "Rock") {
//       computerWins++;
//       return "-1";
//     } else if (playerMove === "Scissors" && computerMove === "Scissors") {
//       draw++;
//       return "0";
//     } else if (playerMove === "Scissors" && computerMove === "Paper") {
//       playerWins++;
//       return "1";
//     }
//   }

//   let computerChoiceArray = ["Rock", "Paper", "Scissors"];

//   //Generate random number
//   function computerMove() {
//     return Math.floor(Math.random() * 3);
//   }

//   let computerChoice = computerChoiceArray[computerMove()];

//   let result = getWinner(playerChoice, computerChoice);
//   alert(`Computer choice is: ${computerChoice} ` + " " + result);

//   gamesPlayed++;

//   alert(
//     `${gamesPlayed} times played. Computer wins:${computerWins} Player wins:${playerWins}`
//   );

//   let userCount = prompt(
//     "Do you want to continue playing, Yes/anything you can type?"
//   );

//   if (userCount === "Yes") {
//     userResponse = true;
//   } else {
//     break;
//   }
// }
