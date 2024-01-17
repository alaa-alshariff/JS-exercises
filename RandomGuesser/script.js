const prompt = require("prompt-sync")()

const target = Math.round(Math.random() * 100);
console.log(target);

let guesses = 0;

while (true) {
    const guess = Number(prompt("Guess the number (0-100): "));
    if (guess > target) {
        console.log("Your guess is too high");
        guesses++;
    } else if (guess < target) {
        console.log("Your guess is too low");
        guesses++;
    } else {
        console.log("You guessed it");
        break;
    }
}

console.log("You guessed it in ", guesses + 1, "tries!");
