// function that takes no argument but returns rock, paper, or scissors when called
function computerPlay() {
    // array of choices to randomly choose from
    let choices = ["rock", "paper", "scissors"];
    // choose a choice randomly
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    // return the chosen choice
    return computerSelection;
}
function game() {
    let playerSelection;
    let computerSelection;

    // prompt user for input
    playerSelection = prompt("Make your choice: Rock, Paper or Scissors"); 

    // run computer choice
    computerSelection = computerPlay();

    // evaluate choices
    evaluateChoices(computerSelection, playerSelection);

    // display current scores
    console.log(`The current score is: Computer- ${computerScore} Player- ${playerScore}`);
    return;
}

// function to evaluate choices and return the outcome
function evaluateChoices (computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    // Rock beats scissors
    if (computerSelection === "rock" & playerSelection === "scissors") {
        console.log("You Lose! Rock beats Scissors");
        computerScore += 1;
    }
    else if (computerSelection === "scissors" & playerSelection === "rock") {
        console.log("You Win! Rock beats Scissors");
        playerScore += 1;
    }
    // Paper beats rocks
    else if (computerSelection === "paper" & playerSelection === "rock") {
        console.log("You Lose! Paper beats Rock");
        computerScore += 1;
    }
    else if (computerSelection === "rock" & playerSelection === "paper") {
        console.log("You Win! Paper beats Rock");
        playerScore += 1;
    }
    // Scissors beats paper
    else if (computerSelection === "scissors" & playerSelection === "paper") {
        console.log("You Lose! Scissors beats Paper");
        computerScore += 1;
    }
    else {
        console.log("You Win! Scissors beats Paper");
        playerScore += 1;
    }
    return;
}

function keepPlayingPrompt() {
        // ask user if they want to keep playing
        keepPlayingSelection = prompt("Do you want to keep playing?").toLowerCase();
        if (keepPlayingSelection === "yes") {
            return;
        }
        else {
            keepPlayingStatus = false;
            console.log("Thanks for playing! See you next time!");
        }
}




/// Program code
let computerScore = 0;
let playerScore = 0;
let keepPlayingStatus = true;

console.log("Welcome to the classic game of Rock, Paper, Scissors!");
while (keepPlayingStatus === true){
    game();
    keepPlayingPrompt();
}



