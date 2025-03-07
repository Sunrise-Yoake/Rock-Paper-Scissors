let humanScore = 0;
let computerScore = 0;

function generateRandomOpponentMove() {
  const masChoise = ["камень", "бумага", "ножницы"];
  const randomNumber = Math.floor(Math.random() * masChoise.length);
  const computerChoice = masChoise[randomNumber];
   
  return computerChoice; 
}
  
  
function getHumanChoice() {
    let humanChoice= prompt("Выберите: камень, бумага или ножницы").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice,computerChoice){

}

  
  



 
  