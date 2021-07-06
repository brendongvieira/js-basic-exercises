// FizzBuzz
// Divisible by 3 => 'Fizz',
// Divisible by 5 => 'Buzz',
// Divisible by 3 and 5 => 'FizzBuzz',
// If not a number => 'Not a number',
// If not divisible by 3 neither by 5 => Input

let resultOne = fizzBuzz(15);
console.log(resultOne);

function fizzBuzz(input) {
  if (typeof input !== "number") return "Not a number!";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";

  return input;
}

// Reverse a string

let newStr = "";

function reverseAString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  console.log(newStr);
}

let resultTwo = reverseAString("brendon");

// Convert Celsius to Fahrenheit

function convertToFahrenheit(value) {
  return value * 1.8 + 32;
}

let resultThree = convertToFahrenheit(1);
console.log(`The value in Fahrenheit is ${resultThree}`);
