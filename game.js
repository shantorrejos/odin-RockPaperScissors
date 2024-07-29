function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = (randomInt === 0) ? "Rock" :
        (randomInt === 1) ? "Paper" :
        (randomInt === 2) ? "Scissors" :
        console.log("Computer made an impossible choice")
    return computerChoice;
};

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
};

function playRound(roundCounter) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    roundCounter += 1;


    if ((humanChoice === "Rock" && computerChoice === "Scissors")|| 
    (humanChoice === "Paper" && computerChoice === "Rock")||
    (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log(`You win Round ${roundCounter}!`)
        humanScore += 1;
    } else {
        console.log(`You lost Round ${roundCounter}!`)
        computerScore += 1;
    }
    
};

function playGame() {
    for (let i = 0; i < 4; i++) {
        playRound(i);
    }
    
    if (humanScore > computerScore) {
        console.log("You win!")
    } else{
        console.log("Womp, womp. You lose!")
    }

    let playAgain = confirm("Would you like to play again?")

    if (playAgain = true) {
        playGame();
    } else {
        return;
    }
};


let humanScore = 0;
let computerScore = 0;


