// Guess Any number between 1 and 100 using do...while loop
const secretNumber = Math.floor(Math.random() * 100) + 1;  //radnomly generated number between 0 to 1 so that i multiply by 100 
let guess;
let attempts = 0;

do {
    guess = parseInt(prompt("Guess a number between 1 and 100:")); // here user entered the random number
    //parseInt is used to convert the string to an integer
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
} while (guess !== secretNumber); //it will continues until the user inputs correct number