let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const masChoise = ["камень", "бумага", "ножницы"];
  const randomNumber = Math.floor(Math.random() * masChoise.length);
  const computerChoice = masChoise[randomNumber];
   
  return computerChoice; 
}
  
  
function getHumanChoice() {
    let humanChoice= prompt("Выберите: камень, бумага или ножницы").toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "камень":
            if (computerChoice === "камень") {
                return "Ничья!";
            } else if (computerChoice === "ножницы") {
                return "Вы победили! Камень бьёт ножницы!";
            } else {
                return "Вы проиграли! Бумага накрывает камень!";
            }
        case "бумага":
            if (computerChoice === "бумага") {
                return "Ничья!";
            } else if (computerChoice === "камень") {
                return "Вы победили! Бумага накрывает камень!";
            } else {
                return "Вы проиграли! Ножницы режут бумагу!";
            }
        case "ножницы":
            if (computerChoice === "ножницы") {
                return "Ничья!";
            } else if (computerChoice === "бумага") {
                return "Вы победили! Ножницы режут бумагу!";
            } else {
                return "Вы проиграли! Камень бьёт ножницы!";
            }
        default:
            return "Ошибка! Неверный выбор.";
    }
}


function playGame(){
    for (let i = 1; i <= 5; i++) {
        console.log(` Раунд: ${i}:`);
            
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        console.log(`Вы выбрали: ${humanChoice}`);
        console.log(`Комппьютер выбрал: ${computerChoice}`);
        
        const result = playRound(humanChoice, computerChoice); 
        console.log(result);
        let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Выберите: камень, бумага или ножницы").toLowerCase();
}

function generateRandomOpponentMove() {
    const availableMoves = ['камень', 'бумага', 'ножницы'];
    const randomNumber = Math.floor(Math.random() * availableMoves.length);
    return availableMoves[randomNumber];
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "камень":
            if (computerChoice === "камень") {
                return "Ничья!";
            } else if (computerChoice === "ножницы") {
                return "Вы победили! Камень бьёт ножницы!";
            } else {
                return "Вы проиграли! Бумага накрывает камень!";
            }
        case "бумага":
            if (computerChoice === "бумага") {
                return "Ничья!";
            } else if (computerChoice === "камень") {
                return "Вы победили! Бумага накрывает камень!";
            } else {
                return "Вы проиграли! Ножницы режут бумагу!";
            }
        case "ножницы":
            if (computerChoice === "ножницы") {
                return "Ничья!";
            } else if (computerChoice === "бумага") {
                return "Вы победили! Ножницы режут бумагу!";
            } else {
                return "Вы проиграли! Камень бьёт ножницы!";
            }
        default:
            return "Ошибка! Неверный выбор.";
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Раунд: ${i}:`);   
        const humanChoice = getHumanChoice();
        const computerChoice = generateRandomOpponentMove();
        
        console.log(`Вы выбрали: ${humanChoice}`);
        console.log(`Компьютер выбрал: ${computerChoice}`);
        const result = playRound(humanChoice, computerChoice); 
        console.log(result);
        
        if (result.includes("Вы победили")) {
            humanScore++;
        } else if (result.includes("Вы проиграли")) {
            computerScore++;
        }
    }

    console.log(`Финальный счет: Вы ${humanScore}, Компьютер ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Поздравляем, вы победили!");
    } else if (computerScore > humanScore) {
        console.log("Компьютер победил!");
    } else {
        console.log("Ничья!");
    }
}

playGame();

  



 
  