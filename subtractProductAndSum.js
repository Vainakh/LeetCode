// Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15
// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21
 

// Constraints:

// 1 <= n <= 10^5


var subtractProductAndSum = function(n) {
    let newArray = Array.from(String(n), Number);
    let sum = 0;
    let product = 1;

    for (let i = 0; i < newArray.length; i += 1){
      sum += newArray[i];
      product *= newArray[i];
    }
    return product - sum;
};

// let n = 234; //15
let n = 4421; //21

console.log(subtractProductAndSum(n));