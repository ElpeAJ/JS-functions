// console.log(5);
// console.log(null);
// console.log(typeof ());
// console.log(typeof (12345n));
// console.log("Aba");
// // console.log(typeof (2 ** 54 - 1));

// //  JavaScript
// //  programming language / interactive
// //  var / let / const
// //  operators
// //  data Types

// /*loops (while/for/if else)
//  console.log()
//  boolean / numbers / string
//  paranthesis ()
//  curly braces {}
//  return
//  function calling*/
// console.log(2 ** 2);
// console.log("hi" + " " + "ya");
// console.log("Gift 24");
// console.log("24" + "24"); //string concatenation

// let num = 50;
// console.log(num);
// console.log(typeof num);
// console.log(num + num); // math calculation
// console.log(50 +50);

// let phrase = "50";
// console.log(phrase);
// console.log(typeof phrase);

// console.log(phrase + phrase); //string concatenation
// console.log("50" + "50");

// console.log(`Gift ${num}`);

// let num = 50;
// console.log(num + num);

// console.log("hellorywtbwbtr".toUpperCase());

function countryIs(country) {
  // let country = "BRAZIL"; // "BRASIL" // "BRasil" //"BraSIL"
  country = country.toLowerCase();
  // if (country === "Brasil" || country === "BRASIL" || country === "BRAsil") {
  if (country === "brasil" || country === "brazil") {
    return "You're welcome";
  } else {
    return "What do want here?";
  }
}

console.log(countryIs("Nigeria"));
// countryIs("Nigeria");

// let phrase = "Hello".startsWith("H");
// console.log(phrase);
// 1 + 1 === 2;
// 5 == 3;
// Adwoa = 1;

// let ran = Math.random();
// ran = ran.toString()
// console.log(ran.slice(2, 10, 1));
// let ran = Math.random();
// console.log(ran);

// ran = ran * 100000;
// console.log(ran);

// ran = Math.floor(ran);
// console.log(ran);

// console.log(value);

let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Tuesday":
    console.log("second day of the week");
    break;
  default:
    console.log("Some other");
}

function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(5);
console.log(result);

let numbers = [1, 4, 9];
let squares = numbers.map(function (num) {
  return num * num;
});

console.log(squares);

let fruits = ["apple", "orange", "banana"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let person = {
  name: "Elpe",
  age: 26,
  canSpeak: true,
  nation: "Ghana",
  getInfo() {
    console.log(`${person.name}`);
    return `${person.name}`;
  },
};

console.log(person.getInfo());
