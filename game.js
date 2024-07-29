function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = (randomInt === 0) ? "rock" :
        (randomInt === 1) ? "paper" :
        (randomInt === 2) ? "scissors" :
        console.log("Computer made an impossible choice")
    console.log(computerChoice);
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
            getHumanChoice();
        }else {
            console.log(humanChoice);
            return humanChoice;
        }
    }
};

function playRound(roundCounter) {
    let humanChoice = getHumanChoice();
    console.log("code bleeds through")
    console.log(humanChoice);
    let computerChoice = getComputerChoice();


    // TODO: Optimize code, if statements should be in reverse order

    if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win Round ${roundCounter}!`)
        humanScore += 1;
    } else if(humanChoice === computerChoice) {
        alert("Tie... Play again!");
        playRound(roundCounter);
    } else {
        console.log(`You lost Round ${roundCounter}!`)
        console.log(humanChoice)
        console.log(computerChoice)
        computerScore += 1;
    }
    
};

function playGame() {
    for (let i = 1; i < 6; i++) {
        playRound(i);
    }
    
    if (humanScore > computerScore) {
        console.log("You win!")
    } else{
        console.log("Womp, womp. You lose!")
    }

    let playAgain = confirm("Would you like to play again?")


    if (playAgain === 0) {
        playGame();
    } else {
        return;
    }
};

let humanScore = 0;
let computerScore = 0;


playGame();



