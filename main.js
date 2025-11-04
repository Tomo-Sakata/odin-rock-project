'use strict'

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
//humanの値
function getHumanChoice(humanChoice) {
  let humanChoiceLower = humanChoice.toLowerCase();
  return humanChoiceLower;
}

//初期スコア
let humanScore = 0;
let computerScore = 0;

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

//playRoundを5回呼ぶ
for (let i = 0; i < 5; i++) {
  const humanSelection = getHumanChoice(prompt(`battle ${i + 1}`));
  const computerSelection = getComputerChoice();
  console.log(playRound(humanSelection, computerSelection));
}

if (humanScore > computerScore) {
  console.log("human is winner!");
}
else if (humanScore < computerScore) {
  console.log("computer is winner!");
}
else {
  console.log("draw!");
}