// Temperature Conversion:Write a program that converts 
// temperatures between Fahrenheit and Celsius. 
// Ask the user for the temperature and the desired conversion.


function convert() {
  let temperature = prompt("Enter a temperature value: ");
  let unit = prompt("Enter a desired conversion (celsius/fahrenheit): ");

  let cal = `${(temperature - 32) * (5 / 9)}° ${unit}`;
  let fah = `${temperature * (9 / 5) + 32}° ${unit}`;
  if (unit == "celsius") {
    console.log(cal);
    return cal;
  } else {
    console.log(fah);
    return fah;
  }
}

let user = convert();


// Number Pyramid:Create a script that prints a number pyramid pattern, 
// where each row contains numbers in ascending order.

function numPyramid(num) {
  number = "";
  for (let i = 0; i <= num; i++) {
    number += i;
    console.log(number);
  }
}
numPyramid(20);