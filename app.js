const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
console.log(getComputerChoice());

function getHumanChoice(){
    humanInput = prompt("Please enter Rock, Paper, or Scissors");
}