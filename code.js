function getComputerChoice() {
  //random computer choice
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
function playRound(playerSelection, computerSelection) {
  //takes player amd com selection and roll rock paper scissors rock>scissors>paper
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return playerCount++;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return computerCount++;
  }
}
let playerCount = 0;
let computerCount = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Choose your hand(rock, paper, scissors)");
    playerSelection = playerSelection.toLowerCase();
    playRound(playerSelection, computerSelection);
    console.log(playerCount, computerCount);
  }
  if (playerCount > computerCount) {
    console.log("You won against computer!");
  } else if (playerCount < computerCount) {
    console.log("You Lost against computer!");
  } else {
    console.log("Even");
  }
}
game();
