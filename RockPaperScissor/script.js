const prompt = require("prompt-sync")();


let wins = 0;
let losses = 0;
let ties = 0;

const choices = ["rock", "paper", "scissors"];
while (true) {

    const randomIndex = Math.round(Math.random() * 2);
    const ComputerChoice = choices[randomIndex];

    const choice = prompt("Enter rock, paper or scissors (or q to quit): ");

    if (choice === "q") {
        break;
    }

    if (choice === "rock" || choice === "paper" || choice === "scissors") {

        if (ComputerChoice === choice) {
            console.log("Draw");
            ties++;
        } else if (choice === "paper" && ComputerChoice === "rock" ||
            choice === "rock" && ComputerChoice === "scissors" ||
            choice === "scissors" && ComputerChoice === "paper"
        ) {
            console.log("Won!")
            wins++;

        } else {
            losses++;
            console.log("Lose!")
        }

    } else {
        console.log("Please enter a valid choice.");
        continue;
    }
}

console.log("Wins: ", wins, "Ties: ", ties, "Losses: ", losses)