// 20. Valid Parentheses
// Easy

// 5675

// 238

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:


 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// Input: 
let nums1 = "()"
// Output: true
// Example 2:

// Input: 
let nums2 = "()[]{}"
// Output: true
// Example 3:

// Input: 
let nums3 = "(]"
// Output: false
// Example 4:

// Input: 
let nums4 = "([)]"
// Output: false
// Example 5:

// Input: 
let nums5 = "{[]}"
// Output: true

// const isValid = (nums2) => {

//   let obj = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
//   };
    
//   let pairs = [];

//   for (let i = 0; i < nums2.length; i ++ ){
//     if (obj[i]){
//       pairs.push(nums2[i])
//     } else {
//       if(nums2[i] !== pairs.pop()){
//         return false;
//       }
//     }
//   }
//   return (pairs.length === 0);
// };

// let isValid = function(nums) {
//   let obj = {
//     '(':')',
//     '[':']',
//     '{':'}'
//   };

//   let legit = []; 

//   for (let i=0; i < nums.length; i++) {
//     if (obj[nums[i]]) {
//       legit.push(nums[i]);
//     } else if (nums[i] !== obj[legit.pop()]){
//       return false;
//     } 
//     if (legit.length > nums.length - i) {
//       return false;
//     }
//   }
//   return legit.length ? false : true;
// };

const isValid = (str) => {
  const result = [];
  let stringArray = str.split("");
  for (let i = 0; i < stringArray.length; i++){
    if (stringArray[i] === "(") {
      result.push("(");
    } else {
      result.pop();
    }
  }
  return result.length === 0;
}

let str = "([)]";
console.log(isValid(str));


