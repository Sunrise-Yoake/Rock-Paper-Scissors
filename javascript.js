function getComputerChoice() {
  const randomNumber = Math.random(); 
  
  if (randomNumber < 0.33) {
    return "камень";
  } else if (randomNumber < 0.66) {
    return "бумага";
  } else {
    return "ножницы";
  }
}
  
function getHumanChoice() {
    let humanChoice= prompt("Выберите: камень, бумага или ножницы").toLowerCase();
    return humanChoice;
}

  
  



 
  