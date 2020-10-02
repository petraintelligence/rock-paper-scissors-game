// function that takes no argument but returns rock, paper, or scissors when called
function computerPlay() {
    // array of choices to randomly choose from
    let choices = ["Rock", "Paper", "Scissors"];
    // choose a choice randomly
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // return the chosen choice
    return randomChoice;
}




console.log(computerPlay());