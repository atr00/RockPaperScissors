const choices = ["rock", "paper", "scissors"];
const btn_rock = document.querySelector("#rock");
const btn_paper = document.querySelector("#paper");
const btn_scissors = document.querySelector("#scissors");
const btn_reset = document.querySelector("#reset");
const disp_score = document.querySelector("#score");
let play_btns = [btn_paper, btn_rock, btn_scissors];

let score = 0;
let play_count = 0;
const nbTry = 5;

function getComputerSelection () {
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    return computerSelection;
}

function playRound(playerSelection) {
    if (play_count++ < 5) {
        let computerSelection = getComputerSelection();
        if (computerSelection === "rock") {
            if (playerSelection === "rock") {
                play_count--;
            } else if (playerSelection === "paper") {
                score++;
            } else if (playerSelection === "scissors") {
                // pass
            } else {
                console.log('Wrong input');
            }
        } else if (computerSelection === "paper") {
            if (playerSelection === "paper") {
                play_count--;
            } else if (playerSelection === "rock") {
                // pass;
            } else if (playerSelection === "scissors") {
                score++;;
            } else {
                console.log('Wrong input');
            }
        } else if (computerSelection === "scissors") {
            if (playerSelection === "scissors") {
                play_count--;
            } else if (playerSelection === "rock") {
                score++;
            } else if (playerSelection === "paper") {
                // pass
            } else {
                console.log('Wrong input');
            }
        }
        console.log(`Player chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);   
        disp_score.textContent = `Score: ${score}/${play_count}`
    } 
    if (play_count >= 5) {
        if (score > 2) {
            disp_score.textContent = "You win!!";
        } else {
            disp_score.textContent = "You lose!!";
        }
    }
 
}

function reset() {
    score = 0;
    play_count = 0;
    disp_score.textContent = `Score: ${score}/${play_count}`
}


btn_reset.addEventListener('click', reset);

for (btn of play_btns) {
    btn.addEventListener('click', (e) => playRound(e.target.id));
}


    



