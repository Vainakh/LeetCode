// 306. Additive Number
// Medium

// 451

// 456

// Add to List

// Share
// Additive number is a string whose digits can form additive sequence.

// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

// Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.



// Example 1:

// Input: "112358"
// Output: true
// Explanation: The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
//              1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
// Example 2:

// Input: "199100199"
// Output: true
// Explanation: The additive sequence is: 1, 99, 100, 199.
//              1 + 99 = 100, 99 + 100 = 199


// Constraints:

// num consists only of digits '0'-'9'.
// 1 <= num.length <= 35

// const additiveNumber = (nums) => {
//   let newArray = [1, 1];
//   for (let i = 0; i <= nums.length - 1; i++) {
//     console.log(Number(nums[i]));
//     console.log(Number(nums[i + 1]));
//     console.log(Number(nums[i]));
//     if (Number(nums[i]) + Number(nums[i + 1]) === Number(nums[i + 2])) {
//       newArray.push(Number(nums[i + 2]));
//     }
//   }
//   return newArray.join('') == nums;
// };

const additiveNumber = (nums) => {
  let newNums = parseInt(nums);
  console.log(newNums);
  let newArray = [1, 1];
  for (let i = 0; i <= newNums.length - 1; i++) {
    // console.log(Number(newNums[i]));
    // console.log(Number(newNums[i + 1]));
    // console.log(Number(newNums[i]));
    // if (newNums[i] + newNums[i + 1] === newNums[i + 2]) {
    //   newArray.push(newNums[i + 2]);
    // }
    console.log(newNums[i])
  }
  return newArray.join('') == nums;
};

// const additiveNumber = (nums) => {
//   let newNums = parseInt(nums);
//   let newArray = [1, 1];
//   for (let i = 0; i <= newNums.length - 1; i ++) {
//     if (newNums[i] + newNums[i + 1] === newNums[i + 2]) {
//       newArray.push(true)
//     }
//   }
//   return newArray;
// }

let nums = "112358";

console.log(additiveNumber(nums));