// Create a function that checks if the input/parameter is an even number.


function isItEven(i) {
  while (i >= 0) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
    break;
  }
}

isItEven(4);
isItEven(3);
isItEven(50);