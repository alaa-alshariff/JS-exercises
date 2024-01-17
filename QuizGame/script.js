const prompt = require("prompt-sync")()

console.log("Welcome to the computer Hardware Quiz!");


let correctAnswers = 0;
const questions = 3;





const answer1 = prompt("What is the brain of the computer?");
const correctAnswer1 = "CPU";


if (answer1.toUpperCase() === correctAnswer1) {
    console.log("you got it correct!");
    correctAnswers++;
} else {
    console.log("you got it Wrong!");
}

const answer2 = prompt("What is better a 3090ti or a 4060?");
const correctAnswer2 = "3090ti";


if (answer2.toLowerCase() === correctAnswer2) {
    console.log("you got it correct!");
    correctAnswers++;
} else {
    console.log("you got it Wrong!");
}


const answer3 = prompt("What is the recommended amout of RAM in 2024?");
const correctAnswer3 = "16gb";


if (answer3.toLowerCase() === correctAnswer3) {
    console.log("you got it correct!");
    correctAnswers++;
} else {
    console.log("you got it Wrong!");
}

console.log("You got", correctAnswers, "questions correct");
console.log("You scored", Math.round((correctAnswers / questions) * 100).toString() + "%");




