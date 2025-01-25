let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);
  
  // Update scores
  if (result === "win") playerScore++;
  else if (result === "lose") computerScore++;
  
  // Update the UI
  document.getElementById("result").textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You ${result}!`;
  document.getElementById("score").textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

// Function to get the computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine the winner
function determineWinner(player, computer) {
  if (player === computer) return "tie";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}
