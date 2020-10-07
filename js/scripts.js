// function that takes no argument but returns rock, paper, or scissors when called
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}


// function for running a single game
function singleRound() {
    let playerSelection;
    let computerSelection;

    answers = ["rock", "paper", "scissors"];
    acceptableAnswer = false;

    while (acceptableAnswer === false) {
        playerSelection = prompt("Make your choice: Rock, Paper or Scissors").toLowerCase(); 
        if (answers.includes(playerSelection)) {
            acceptableAnswer = true;
        }
        else {
            console.log("Please choose 'Rock', 'Paper' or 'Scissors'")
        }
    }

    computerSelection = computerPlay();

    console.log(`You chose ${toTitleCase(playerSelection)}! The Computer chose ${toTitleCase(computerSelection)}!`)

    evaluateChoices(computerSelection, playerSelection);

    console.log(`The current score is: Computer- ${computerScore} Player- ${playerScore}`);
    return;
}


// function to evaluate choices and return the outcome
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

// function to prompt the player to keep playing
function keepPlayingPrompt() {
        answers = ["yes", "no"];
        acceptableAnswer = false;

        while (acceptableAnswer === false) {
            keepPlayingSelection = prompt("Do you want to play the best of 5 rounds? (Yes or No)").toLowerCase();
            if (answers.includes(keepPlayingSelection)) {
                acceptableAnswer = true;
            }
            else {
                console.log("Please choose 'Yes' or 'No'")
            }
        }

        if (keepPlayingSelection === "yes") {
            return;
        }
        else {
            keepPlayingStatus = false;
            console.log("Thanks for playing! See you next time!");
        }
}

// function to title case strings
function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
}

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
    while (keepPlayingStatus === true & round < 5){
        singleRound();

        if (round === 1) {
            keepPlayingPrompt();
        }

        round += 1;
    }
    let winner = determineWinner();
    console.log(`The overall winner is.... \n ${winner}!!!!`);
}







// init global variables
let computerScore = 0;
let playerScore = 0;
let keepPlayingStatus = true;
let round = 1;

const game_nav_container = document.querySelector('#game-nav');
const instructions = document.createElement("H2");
const greeting_content = document.createTextNode("Click Start to Play");
instructions.appendChild(greeting_content);
game_nav_container.appendChild(instructions);


const startbutton = document.querySelector('#start-game');
startbutton.addEventListener("click", () => {
    choicePrompt();
    clearGameContainer();
    startbutton.innerHTML = "Playing Single Round";}
);


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

    startbutton.innerHTML = "Play Again?"
}
