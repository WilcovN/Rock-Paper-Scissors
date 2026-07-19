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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw! You both had " + humanChoice + ".")
    }else if ((humanChoice == "Rock" && computerChoice == "Paper") || 
    (humanChoice == "Paper" && computerChoice == "Scissors") || 
    (humanChoice == "Scissors" && computerChoice == "Rock")) {
        alert('You lose! ' + computerChoice + " beats " + humanChoice)
        computerScore += 1;
    }else {
        alert('You win! ' + humanChoice + " beats " + computerChoice)
        humanScore += 1;
    }
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        alert(`Round ${i+1} of 5`)
    }
    if (humanScore > computerScore) {
        return alert(`You won! The score is ${humanScore}:${computerScore}`)
    } else if (humanScore == computerScore){
        return alert(`It's a draw! The score is ${computerScore}:${humanScore}`)
    } else {
        return alert(`You lose! The score is ${computerScore}:${humanScore}`)
    }
}

playGame();