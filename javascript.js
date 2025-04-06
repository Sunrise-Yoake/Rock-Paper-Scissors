document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const choices = document.querySelectorAll('.choice');
    const humanScoreElement = document.getElementById('human-score');
    const computerScoreElement = document.getElementById('computer-score');
    const roundResultElement = document.getElementById('round-result');
    const gameResultElement = document.getElementById('game-result');
    const resetButton = document.getElementById('reset-btn');
    
    //переменные
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;
    
    updateScores();
    roundResultElement.textContent = "Choose your weapon!";
    // функция для выбора
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            if (round <= 5) {
                const humanChoice = choice.id;
                playRound(humanChoice);
            }
        });
    });
    
    resetButton.addEventListener('click', resetGame);
    // функция для выбора Компьютера
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
    
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(humanChoice, computerChoice);
        
        if (result.includes('You win')) humanScore++;
        if (result.includes('Computer wins')) computerScore++;
        
        roundResultElement.textContent = `Round ${round}: You chose ${humanChoice}, computer chose ${computerChoice}. ${result}`;
        updateScores();
        
        round++;
    
        if (round > 5) {
            endGame();
        }
    }
    
    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        }
        
        if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'paper' && computerChoice === 'rock') ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }
        
        return 'Computer wins!';
    }
    
    function updateScores() {
        humanScoreElement.textContent = `You: ${humanScore}`;
        computerScoreElement.textContent = `Computer: ${computerScore}`;
    }
     // Завершение игры
    function endGame() {
        let finalMessage;
        
        if (humanScore > computerScore) {
            finalMessage = "You won the game!";
        } else if (computerScore > humanScore) {
            finalMessage = "Computer won the game!";
        } else {
            finalMessage = "The game ended in a tie!";
        }
        
        gameResultElement.textContent = finalMessage;
        
        choices.forEach(choice => {
            choice.style.opacity = '0.6';
            choice.style.cursor = 'not-allowed';
        });
    }
     // Начать игру заново
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        round = 1;
        
        updateScores();
        roundResultElement.textContent = "Choose your weapon!";
        gameResultElement.textContent = "";

        choices.forEach(choice => {
            choice.style.opacity = '1';
            choice.style.cursor = 'pointer';
        });
    }
});