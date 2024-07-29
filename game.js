function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = (randomInt === 0) ? "rock" :
        (randomInt === 1) ? "paper" :
        (randomInt === 2) ? "scissors" :
        console.log("Computer made an impossible choice")
    return computerChoice;
};


function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");

    if (humanChoice === null || humanChoice === undefined){
        alert("No input, Please try again.");
        return getHumanChoice();
    } else {
        humanChoice = humanChoice.toLowerCase();
        if (!(humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors")) {
            alert("Invalid Input, Try again")
            return getHumanChoice();
        }else {
            return humanChoice;
        }
    }
};

function playRound(roundCounter) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();


    // TODO: Optimize code, if statements should be in reverse order

    if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`)
        console.log(`You win Round ${roundCounter}!\nYour score: ${humanScore}\nPC score: ${computerScore}`)
        
    } else if(humanChoice === computerChoice) {
        alert("Tie... Play again!");
        playRound(roundCounter);
    } else {
        computerScore += 1;
        console.log(`Human: ${humanChoice} || Computer: ${computerChoice}`)
        console.log(`You lost Round ${roundCounter}!\nYour score: ${humanScore}\nPC score: ${computerScore}`)   
    }
    
};

function playGame() {
    for (let i = 1; i < 6; i++) {
        playRound(i);
    }
    
    if (humanScore > computerScore) {
        console.log("You win!")
        console.log(`Your Score: ${humanScore} PC Score: ${computerScore}`)
    } else{
        console.log("Womp, womp. You lose!")
        console.log(`Your Score: ${humanScore} PC Score: ${computerScore}`)
    }

    let playAgain = confirm("Would you like to play again?")


    if (playAgain === 0) {
        humanScore = 0;
        computerScore = 0;
        return playGame();
    } else {
        return;
    }
};

let humanScore = 0;
let computerScore = 0;

playGame();