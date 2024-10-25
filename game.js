function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    let computerChoice = (randomInt === 0) ? "rock" :
        (randomInt === 1) ? "paper" :
        (randomInt === 2) ? "scissors" :
        console.log("Computer made an impossible choice")
    return computerChoice;
};

function getHumanChoice() {
    return new Promise ((resolve) => {
    
        playerChoice.addEventListener('click', (event) =>{
            let target = event.target;
            let humanChoice = '';

            switch (target.id) {
                case 'rock':
                    humanChoice = 'rock'
                    break;
                case 'paper':
                    humanChoice = 'paper'
                    break;
                case 'scissors':
                    humanChoice = 'scissors'
                    break;
                default:
                    break;
            }
            resolve(humanChoice);
        }, { once: true });
    });
};

async function playRound() {
    let humanChoice = await getHumanChoice();
    let computerChoice = getComputerChoice();


    // TODO: Optimize code, if statements should be in reverse order

    if ((humanChoice === "rock" && computerChoice === "scissors")|| 
    (humanChoice === "paper" && computerChoice === "rock")||
    (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        updateDisplay('Player', 'Nemesis', humanChoice, computerChoice);
        return 'win'
        
    } else if(humanChoice === computerChoice) {
        updateDisplay('Player', 'Nemesis', humanChoice, 0);
        return 'tie';
    } else {
        updateDisplay('Nemesis', 'Player', computerChoice, humanChoice);
        return 'lose';
    }
    
};

function updateDisplay(winner, loser, winningChoice, losingChoice){
    if (losingChoice === 0) {
        round_result.textContent = `Both ${winner} and ${loser} chose ${winningChoice}`
        round_flavor.textContent = `No attack connected!`
    } else {
        round_result.textContent = `${winner}'s ${winningChoice} beats ${loser}'s ${losingChoice}`
        round_flavor.textContent = `${winner} strikes ${loser} for 20 damage!`
    }
}

function updateVictor(winner, loser){
        round_result.textContent = `${winner} deals the killing blow`
        round_flavor.textContent = `${loser} slain!`
}

function shakeIcon(player){
    if (player === 0) {
        nemesisHealthBar.style.width = nemesisHP + '%';
        nemesis_icon.classList.add('shake')
        setTimeout(() => {
            nemesis_icon.classList.remove('shake');
        }, 500);
    } else {
        heroHealthBar.style.width = nemesisHP + '%';
        hero_icon.classList.add('shake')
        setTimeout(() => {
            hero_icon.classList.remove('shake');
        }, 500);
    }
}

async function playGame() {

    while (!(heroHP === 0) && !(nemesisHP === 0)) {
        const result = await playRound();
        if (result === 'win'){
            nemesisHP -= 20;
            nemesisHealthBar.style.width = nemesisHP + '%';
            shakeIcon(0);
        } else if (result === 'lose') {
            heroHP -= 20;
            heroHealthBar.style.width = heroHP + '%';
            shakeIcon(1);
        }
    }

    if (heroHP > nemesisHP) {
        updateVictor('Player', 'Nemesis');
    } else{
        updateVictor('Nemesis', 'Player');
    }

    resetBtn.style.visibility = 'visible';
};

function resetGame() {
    heroHP = 100;
    nemesisHP = 100;
    round_flavor.textContent = '';
    round_result.textContent = '';
    heroHealthBar.style.width = heroHP + '%';
    nemesisHealthBar.style.width = nemesisHP + '%';
    resetBtn.style.visibility = 'hidden';
    document.addEventListener('DOMContentLoaded',() => {
        playGame();
    });
    
}

const playerChoice = document.querySelector(".action-container");
const heroHealthBar = document.querySelector('.hero-health');
const nemesisHealthBar = document.querySelector('.nemesis-health');
const resetBtn = document.querySelector('.reset');

const round_result = document.querySelector('.round-result');
const round_flavor = document.querySelector('.round-flavor');

const nemesis_icon = document.querySelector('.icon.nemesis');
const hero_icon = document.querySelector('.icon.hero');

console.log(playerChoice);
let heroHP = 100;
let nemesisHP = 100;


document.addEventListener('DOMContentLoaded',() => {
    playGame();
});

resetBtn.addEventListener('click', () => {
    resetGame();
});



