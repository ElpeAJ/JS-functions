//Develop a program that generates a random number between 1 and 100.
//Allow the user to guess the number and provide feedback on wheather the guess
//is too high, too low, or correct.

const randomNumber = Math.floor(Math.random() * 100) + 1;

let usersGuess = 2;

if (usersGuess === randomNumber) {
  console.log("Congratulations! You guessed the number.");
} else if (usersGuess < randomNumber) {
  console.log("Your guess is too low. Try a higher number.");
} else {
  console.log("Your guess is too high. Try a lower number.");
}
