// Character Frequency Counter:
// Implement a function that takes a string
// as an input and counts the frequency of
// each character. Print the results.

const character = "123456";

function countchar(char, len) {
  const freq = {};
  for (let inc = 0; inc < len; inc++) {
    const key = character[inc];
    if (freq[key]) {
      freq[key] += 1;
    } else {
      freq[key] = 1;
    }
  }
  return freq;
}

const count = countchar(character, 4);
console.log(count);

// console.log(character[1]);
