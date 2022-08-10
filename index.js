const buttons = document.querySelectorAll('button');
buttons.forEach(btn => btn.addEventListener("click", playRound)); 

function getComputerChoice() {
    let random =  Math.floor(Math.random() * 3);
    if(random === 0) return 'rock';
    else if(random === 1) return 'paper';
    else return 'scissors';
}

let playerWinCount = 0; 
let computerWinCount = 0; 

const div = document.getElementById("display-div");

function playRound(event){
    div.textContent = "";
    let playerSelection = event.target.textContent.toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
   
    const result = document.createElement("p");
    if(playerSelection === computerSelection)  {
        result.textContent = `tie game`;
        div.appendChild(result);
    }
    
    if(playerSelection === "rock"){
         if(computerSelection === "paper") {
            result.textContent = `you lose! paper beats rock`;
            div.appendChild(result);
            computerWinCount++;
        } else if(computerSelection === "scissors"){
            result.textContent = `you win! rock beats scissors`;
            div.appendChild(result);
            playerWinCount++;
        }
    }

    if(playerSelection === "paper"){
        if(computerSelection === "rock" ) {
            result.textContent = `you win! paper beats rock`;
            div.appendChild(result);
            playerWinCount++;
        } else if(computerSelection === "scissors"){ 
            result.textContent = `you lose! scissors beats paper`;
            div.appendChild(result);
            computerWinCount++;
        }
    }

    if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            result.textContent = `you lose! rock beats scissors`;
            div.appendChild(result);
            computerWinCount++;
        } 
        else if(computerSelection === "paper"){
            result.textContent = `you win! scissors beats paper`;
            div.appendChild(result);
            playerWinCount++;
        }
    }
    isOver();
    displayScore();
}

const sc_div = document.getElementById("score-div");
const score = document.createElement("p");

function displayScore(){
  score.textContent = `Score: you = ${playerWinCount} vs computer ${computerWinCount}`;
  sc_div.textConten = "";
  sc_div.appendChild(score);
}

function isOver(){
    if(playerWinCount === 5 ||  computerWinCount === 5){
      buttons.forEach(btn => btn.removeEventListener("click", playRound));

      const winner = playerWinCount === 5 ? "you" : "computer";
      const announcement = document.createElement("p");
      announcement.textContent = `${winner} won!!`;
      div.appendChild(announcement);
    }
}