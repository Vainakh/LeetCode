// /* jshint esversion: 6 */

// // Solve the following prompts using recursion.

// // 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// // denoted by n!, is the product of all positive integers less than or equal to n.
// // Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// // factorial(5); // 120
// var factorial = function(n) {
//   if (n < 0) return null;
//   if (n === 0) return 1;

//   return n * factorial(n - 1);
// };

// // 2. Compute the sum of an array of integers.
// // sum([1,2,3,4,5,6]); // 21
// var sum = function(array) {
//   if (array.length === 0) return 0;

//   return array[0] + sum(array.slice(1));
// };

// // 3. Sum all numbers in an array containing nested arrays.
// // arraySum([1,[2,3],[[4]],5]); // 15
// var arraySum = function(array) {
//   let sum = 0;
//   if (!array.length) return 0;

//   for (let item of array) {
//     if (Array.isArray(item)) {
//       sum += arraySum(item);
//     } else {
//       sum += item;
//     }
//   }

//   return sum;
// };

// // 4. Check if a number is even.
// var isEven = function(n) {
//   if ( n === 0) return true;
//   if (n === 1) return false;

//   if (n > 0) {
//     return isEven(n - 2);
//   } else {
//     return isEven(-n);
//   }
// };

// // 5. Sum all integers below a given integer.
// // sumBelow(10); // 45
// // sumBelow(7); // 21
// var sumBelow = function(n) {
//   let sum = 0;
//   if (n === 0) return 0;

//   if (n > 0) {
//     sum = n - 1 + sumBelow(n - 1);
//   } else {
//     sum = n + 1 + sumBelow(n + 1);
//   }

//   return sum;
// };

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // if (y - x < 2) return [];
  if (y - x === 2) return [y - 1];

    let newRangeArray = range(x, y - 1);//3, 8
    newRangeArray.push(y - 1);
    return newRangeArray;

};

console.log(range(9, 2));

