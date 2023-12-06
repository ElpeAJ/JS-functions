// Number Pyramid:Create a script that prints a number pyramid pattern,
// where each row contains numbers in ascending order.

function numPyramid(num) {
  number = "";
  for (let i = 0; i <= num; i++) {
    number += i;
    console.log(number);
  }
}
numPyramid(22);
