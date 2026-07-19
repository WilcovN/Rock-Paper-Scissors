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
            computer_choice = "Scissor";
            break
    }
    return computer_choice
}

console.log(getComputerChoice())

