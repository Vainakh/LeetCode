// 20. Valid Parentheses
// Easy

// 7163

// 294

// Add to List

// Share
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true


// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

let isValid = function(nums) {
  let obj = {
    '(':')',
    '[':']',
    '{':'}'
  };

  let legit = [];

  for (let i=0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      console.log(obj[nums[i]])
      legit.push(nums[i]);
    } else if (nums[i] !== obj[legit.pop()]){
      return false;
    }
  }
  return legit.length ? false : true;


};

let s = "()";

console.log(isValid(s))