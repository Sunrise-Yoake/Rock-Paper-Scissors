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
    switch(humanChoice) {
        case 'камень':
            if(computerChoice === 'камень') {
                console.log('Ничья');
            } else if (computerChoice === 'ножницы') {
                console.log('Вы победили! Камень бьёт ножницы!');
                humanScore++;
            } else {
                console.log('Вы проиграли! Бумага накрывает камень!');
                computerScore++;
            }
            break;
        case 'бумага':
            if(computerChoice  === 'бумага') {
                console.log('Ничья');
            } else if (computerChoice === 'камень') {
                console.log('Вы победили! Бумага накрывает камень!');
                humanScore++;
            } else {
                console.log('Вы проиграли! Ножницы режут бумагу!');
                computerScore++;
            }
            break;
        case 'ножницы':
            if(computerChoice === 'ножницы') {
                console.log('Ничья');
            } else if (computerChoice === 'бумага') {
                console.log('Вы победили! Ножницы режут бумагу!');
                humanScore++;
            } else {
                console.log('Вы проиграли! Камень бьёт ножницы!');
                computerScore++;
            }
        break;
    }   
}

  
  



 
  