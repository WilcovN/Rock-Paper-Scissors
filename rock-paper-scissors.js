console.log("Hello World")

function getComputerChoice(){
    const random_number = Math.floor(Math.random()*3);
    let computer_choice;
    switch (random_number) {
        case 0:
            computer_choice = "Rock";
            break
        case 1:
            computer_choice = "Paper";
            break
        case 2:
            computer_choice = "Scissors";
            break
    }
    return computer_choice
}

console.log(getComputerChoice())

function getHumanChoice(){
    const message = "Enter your choice for Rock Paper Scissors:";
    let human_choice = prompt(message);
    human_choice = human_choice.toLowerCase();
    switch (human_choice) {
        case "rock":
            human_choice = "Rock";
            break
        case "paper":
            human_choice = "Paper";
            break
        case "scissors":
            human_choice = "Scissors";
            break
    }
    return human_choice
}

console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;
