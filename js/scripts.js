// function that takes no argument but returns rock, paper, or scissors when called
function computerPlay() {
    // array of choices to randomly choose from
    let choices = ["Rock", "Paper", "Scissors"];
    // choose a choice randomly
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    // return the chosen choice
    return computerSelection;
}
function game() {
    // greet player

    // prompt user for input
    let playerSelection = prompt("Welcome to Rock, Paper, Scissors! \n Make your choice: Rock, Paper or Scissors");
    // run computer choice

    // compare user input to computer choice

    // return the evaluation result to user

    // record the score

    // display current scores

    // ask user if they want to keep playing

    // if yes then replay

    // if no then announce scores and thank for playing
}


function evaluateChoices (computerSelection, playerSelection) {

}

game();


