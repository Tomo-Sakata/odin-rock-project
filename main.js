'use strict'

//create buttons
const rockButton = document.createElement("button");
const scissorsButton = document.createElement("button");
const paperButton = document.createElement("button");

rockButton.textContent = "rock";
scissorsButton.textContent = "scissors";
paperButton.textContent = "paper";

document.body.appendChild(rockButton);
document.body.appendChild(scissorsButton);
document.body.appendChild(paperButton);

//create result
const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

function updateScore () {
  scoreDiv.textContent = `score: human: ${humanScore} computer: ${computerScore}`
  const winnerDiv = document.createElement("div");
  if (humanScore === 5) {
  winnerDiv.textContent = "human is winner!"
  document.body.appendChild(winnerDiv);
  stopGame();
  }
  else if (computerScore === 5) {
    winnerDiv.textContent = "computer is winner!"
    document.body.appendChild(winnerDiv);
    stopGame();
  }
  else {}
}

//stop the game
function stopGame() { 
  rockButton.disabled = true;
  scissorsButton.disabled = true;
  paperButton.disabled = true;
}

//click rockButton
rockButton.addEventListener("click", () => { 
  const result = playRound("rock", getComputerChoice());
  resultDiv.textContent = result
  updateScore();
});

//click scissorsButton
scissorsButton.addEventListener("click", () => { 
  const result = playRound("scissors", getComputerChoice());
  resultDiv.textContent = result
  updateScore();
});

//click paperButton
paperButton.addEventListener("click", () => { 
  const result = playRound("paper", getComputerChoice());
  resultDiv.textContent = result
  updateScore();
});

//create score
let humanScore = 0;
let computerScore = 0;
const scoreDiv = document.createElement("div")
document.body.appendChild(scoreDiv);
scoreDiv.textContent = `score: human: ${humanScore} computer: ${computerScore}`

//computerの値
function getComputerChoice() {
  //computerがランダム数値を返す
  let randomScore = Math.random();

  //3倍して、小数点以下を切り捨てて、0,1,2にする
  let tripleScore = randomScore * 3;
  let intScore = Math.floor(tripleScore);

  //0→rock 1→scissors 2→paper
  if (intScore === 0) {
    return "rock";
  } 
  else if (intScore ===1) {
    return "scissors";
  }
  else {
    return "paper";
  }
}

//1ラウンドの戦い
function playRound (humanChoice, computerChoice) {
//computer勝利
if (humanChoice === "rock" && computerChoice === "paper" || 
    humanChoice === "scissors" && computerChoice === "rock" ||
    humanChoice === "paper" && computerChoice === "scissors") 
    {
    //computerに1点
    computerScore += 1;
    return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
//human勝利
else if (humanChoice === "rock" && computerChoice === "scissors" || 
    humanChoice === "scissors" && computerChoice === "paper" ||
    humanChoice === "paper" && computerChoice === "rock")
    {
      //humanに1点
      humanScore += 1;
      return `You win! ${humanChoice} beats ${computerChoice}`;
    }
//あいこ
else 
    {
      return "It's a draw!"
    } 
}