const choices = ["rock", "paper", "scissors"];

function getComputerSelection () {
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            return "Tie! Rock against Rock!";
        } else if (playerSelection === "paper") {
            return "You win! Paper beats Rock!";
        } else if (playerSelection === "scissors") {
            return "You lose! Rock beats paper!";
        } else {
            return "You did not enter a correct choice."
        }
    } else if (computerSelection === "paper") {
        if (playerSelection === "paper") {
            return "Tie! Paper against Paper!";
        } else if (playerSelection === "rock") {
            return "You lose! Paper beats Rock!";
        } else if (playerSelection === "scissors") {
            return "You win! Scissors beats paper!";
        } else {
            return "You did not enter a correct choice."
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            return "Tie! Scissors against Scissors!";
        } else if (playerSelection === "rock") {
            return "You win! Rock beats scissors!";
        } else if (playerSelection === "paper") {
            return "You lose! Scissors beats paper!";
        } else {
            return "You did not enter a correct choice."
        }
    }
}

function game() {
    let score = 0;
    const nbTry = 5;
    const div = document.createElement('div');
    div.setAttribute('id','scoreDiv');
    
    for (let i = 0; i < nbTry; i++) {
        let playerSelection = prompt("Make a choice (rock, paper, scissors): ").toLowerCase();
        result = playRound(playerSelection, getComputerSelection())
        console.log(result);
    }
}




