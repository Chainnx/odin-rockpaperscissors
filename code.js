function getComputerChoice() {
  //random computer choice
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
function playRound(playerSelection, computerSelection) {
  //takes player amd com selection and roll rock paper scissors
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return "Equal";
  }
}
const computerSelection = getComputerChoice();
function game() {
  let playerSelection = prompt("Choose your hand(rock, paper, scissors)");
  playerSelection = playerSelection.toLowerCase();
  console.log(playRound(playerSelection, computerSelection));
}
