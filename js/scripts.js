// function that takes no argument but returns rock, paper, or scissors when called
function computerPlay() {
    // array of choices to randomly choose from
    let choices = ["rock", "paper", "scissors"];
    // choose a choice randomly
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    // return the chosen choice
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
    // prompt user for input


    // run computer choice
    computerSelection = computerPlay();

    // print choices
    console.log(`You chose ${toTitleCase(playerSelection)}! The Computer chose ${toTitleCase(computerSelection)}!`)

    // evaluate choices
    evaluateChoices(computerSelection, playerSelection);

    // display current scores
    console.log(`The current score is: Computer- ${computerScore} Player- ${playerScore}`);
    return;
}


// function to evaluate choices and return the outcome
function evaluateChoices (computerSelection, playerSelection) {
  
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
    else if (computerSelection === "paper" & playerSelection === "scissors") {
        console.log("You Win! Scissors beats Paper");
        playerScore += 1;
    }
    else {
        console.log("It's a tie!")
    }
    return;
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

// greet the player
console.log("Welcome to the classic game of Rock, Paper, Scissors!");

// run the game
game();

// thank the player for playing
console.log("Thanks for playing! See you next time")


