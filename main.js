'use strict'

function getComputerhoice() {
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

console.log(getComputerhoice())