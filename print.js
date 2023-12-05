// Create a function that prints to the console n1 to n2. where n1 is the first input/parameter and n2 is the second input/parameter


function printsNumbers(n1, n2) {
  let i = n1 - 1;
  while (i < n2) {
    i++;
    console.log(i);
  }
}

printsNumbers(5, 10);
