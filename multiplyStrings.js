// 43. Multiply Strings
// Medium

// 2139

// 913

// Add to List

// Share
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.

 

// Example 1:

// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:

// Input: num1 = "123", num2 = "456"
// Output: "56088"
 

// Constraints:

// 1 <= num1.length, num2.length <= 200
// num1 and num2 consist of digits only.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.

const multiply = (nums1, nums2) => {
  let number1 = nums1.split(',').map((x) => +x);
  let number2 = nums2.split(',').map((x) => +x);
  console.log(number1);
  return number1 * number2;
};

let nums1 = "123456789";
let nums2 = "987654321";

console.log(multiply(nums1, nums2));
