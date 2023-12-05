// Factorial Calculator:Write a function that calculates the factorial of a given number.
// DO NOT USE PROMPT, I WANT ONLY 1 CONSOLE.LOG, YOUR FUNCTION MUST BE REUSEABLE, AND MUST RETURN A VALUE

function factorial(numGiven) {
  let factorial = 1;
  if (numGiven > 1) {
    for (let i = numGiven; i >= 1; i--) {
      factorial *= i;
    }
  } else {
    return `${numGiven} is not greater than 1`;
  }
  console.log(`${numGiven} ! = `);
  return factorial;
}

console.log(factorial(6));
console.log(factorial(10));
console.log(factorial(-6));
console.log(factorial(0));
