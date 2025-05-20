// Guess Any number between 1 and 100 using do...while loop
const secretNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

do {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;
    if (guess < secretNumber) {
        alert("Too low! Try again.");
    } else if (guess > secretNumber) {
        alert("Too high! Try again.");
    } else if (guess === secretNumber) {
        alert("Congratulations! You guessed the number in " + attempts + " attempts.");
    } else {
        alert("Invalid input. Please enter a number.");
    }
} while (guess !== secretNumber);