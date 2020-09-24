// 233. Number of Digit One
// Hard

// 304

// 639

// Add to List

// Share
// Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

// Example:

// Input: 13
// Output: 6 
// Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.


const numberOfDigitOne = (n) => {
  let numbers = [];
  let stringNumbers = "";
  count = 0;

  for (let i = 0; i <= n; i ++){
    numbers.push(i);
  }

  for (let j = 0; j < numbers.length; j ++){
    let currentNumber = String(numbers[j]).split(" ");
    stringNumbers += currentNumber;
  }

  for (let k = 0; k < stringNumbers.length; k += 1) {
    if (stringNumbers[k] === "1") {
      count ++;
    }
  }

  return count;
};


let n = 3184191;

console.log(numberOfDigitOne(n))
