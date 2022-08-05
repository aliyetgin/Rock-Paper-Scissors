function getComputerChoice() {
    let random =  Math.floor(Math.random() * 3);
    if(random === 0) return 'rock';
    else if(random === 1) return 'paper';
    else return 'scissors';
}

let getUserChoice = () => window.prompt("Select one of rock, paper, scissors").toLowerCase();

let playerWinCount = 0; 
let computerWinCount = 0;

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection)  alert(`tie game score = player: ${playerWinCount} computer: ${computerWinCount}`);
    
    
    if(playerSelection === "rock"){
         if(computerSelection === "paper") {
            computerWinCount++;
            alert(`you lose! paper beats rock score = player: ${playerWinCount} computer: ${computerWinCount}`);
        } else if(computerSelection === "scissors"){
            playerWinCount++;
            alert(`you win! rock beats scissors score = player: ${playerWinCount} computer: ${computerWinCount}`);
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "rock" ) {
            playerWinCount++;
            alert(`you win! paper beats rock score = player: ${playerWinCount} computer: ${computerWinCount}`);
        } else if(computerSelection === "scissors"){ 
            computerWinCount++;
            alert(`you lose! scissors beats paper score = player: ${playerWinCount} computer: ${computerWinCount}`);
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            computerWinCount++;
            alert(`you lose! rock beats scissors score = player: ${playerWinCount} computer: ${computerWinCount}`);
        } 
        else if(computerSelection === "paper"){
            playerWinCount++;
            alert(`you win! scissors beats paperscore = player: ${playerWinCount} computer: ${computerWinCount}`);
        }
    }
}

function playGame(){ 
    while (playerWinCount != 3 && computerWinCount != 3) {
        const playerSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}
playGame();