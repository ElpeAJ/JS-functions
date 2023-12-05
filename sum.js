// Create a function that sum the values in-between two numbers. eg calcFunc(1,3) returns 6. ie. 1+2+3.

// sum = 0;
// function sumNumbersBtn(n1, n2) {
//   for (let i = n1; i <= n2; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }

// sumNumbersBtn(1, 10);

sum = 0;
function sumNumbersBtn(num1, num2) {
  for (let i = num1; i <= num2; i++) {
    if (i < num2) {
      console.log(`${i} +`);
    } else {
      console.log(`${i} = `);
    }
    sum += i;
  }
  console.log(sum);
}

sumNumbersBtn(1, 10);
