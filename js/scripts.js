

// function to determine winner
function determineWinner() {
    let winner;
    if (computerScore > playerScore){
        winner = " the Computer"
    }
    else if (playerScore > computerScore) {
        winner = "the Player"
    }
    else {
        winner = "It's a tie! Nobody wins! No participation trophies here!"
    }
    return winner;
}

// main game function
function game() {
    if (computerScore < 5 || playerScore < 5) {
        clearGameContainer();
        choicePrompt();
        startbutton.innerHTML = "Playing Single Round";
    }
}

// init global variables
let computerScore = 0;
let playerScore = 0;
let round = 1;

// Listeners
const game_nav_container = document.querySelector('#game-nav');
const instructions = document.createElement("H2");
const greeting_content = document.createTextNode("Click Start to Play");
instructions.appendChild(greeting_content);
game_nav_container.appendChild(instructions);

const startbutton = document.querySelector('#start-game');
startbutton.addEventListener("click", () => {
    game();
});

const rockbutton = document.querySelector('#rock-button');
rockbutton.addEventListener("click", () => {
    singleRound('rock');
});

const paperbutton = document.querySelector('#paper-button');
paperbutton.addEventListener("click", () => {
    singleRound('paper');
});

const scissorsbutton = document.querySelector('#scissors-button');
scissorsbutton.addEventListener("click", () => {
    singleRound('scissors');
});

// functions
function choicePrompt () {
    greeting_content.nodeValue = "Your Turn! Make Your Choice!";
}

function clearGameContainer () {
    document.getElementById('player-tag').innerHTML = " ";
    document.getElementById('computer-tag').innerHTML = " ";
}

function singleRound(playerChoice) {
    let playerSelection = playerChoice.toLowerCase();
    document.getElementById('player-tag').innerHTML = "You chose " + toTitleCase(playerChoice) + "!";

    let computerSelection = computerPlay();
    document.getElementById('computer-tag').innerHTML = ("The computer chose " + toTitleCase(computerSelection) + "!");

    greeting_content.nodeValue = evaluateChoices(computerSelection, playerSelection);
    
    startbutton.innerHTML = "Next Round?"
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


function evaluateChoices (computerSelection, playerSelection) {
    let evaluation; 
    // Rock beats scissors
    if (computerSelection === "rock" & playerSelection === "scissors") {
        computerScore += 1;
        evaluation = "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === "scissors" & playerSelection === "rock") {
        playerScore += 1;
        evaluation = "You Win! Rock beats Scissors";
    }
    // Paper beats rocks
    else if (computerSelection === "paper" & playerSelection === "rock") {
        computerScore += 1;
        evaluation = "You Lose! Paper beats Rock";
    }
    else if (computerSelection === "rock" & playerSelection === "paper") {
        playerScore += 1;
        evaluation = "You Win! Paper beats Rock";
    }
    // Scissors beats paper
    else if (computerSelection === "scissors" & playerSelection === "paper") {
        computerScore += 1;
        evaluation = "You Lose! Scissors beats Paper";
    }
    else if (computerSelection === "paper" & playerSelection === "scissors") {
        playerScore += 1;
        evaluation = "You Win! Scissors beats Paper";
    }
    else {
        evaluation = "It's a tie!";
    }
    return evaluation;
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}