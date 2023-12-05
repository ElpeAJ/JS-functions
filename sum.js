// Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

function sumNumbersBtn(num1, num2) {
  sum = 0;
  let numbersAdded = "";

  for (let i = num1; i <= num2; i++) {
    if (i < num2) {
      numbersAdded += `${i} + `;
    } else {
      numbersAdded += `${i} = `;
    }
    sum += i;
  }
  console.log(numbersAdded);
  return sum;
}

console.log(sumNumbersBtn(1, 10));
console.log(sumNumbersBtn(1, 3));
console.log(sumNumbersBtn(-7, 7));
