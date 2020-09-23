// 22. Generate Parentheses
// Medium

// 5937

// 293

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]



   function generateParentheses(n){
    const result = [];
    breathFirstSearch("", 0, 0);
    return result;
  }

    function breathFirstSearch(str, left, right) {
      if (left === n && right === n) {
        result.push(str);
        return;
      }
      if (left !== n) {
        breathFirstSearch(str + "(", left + 1, right);
      }
      if (left > right) {
        breathFirstSearch(str + ")", left, right + 1);
      }
    }
  



let n = 3;
console.log(generatePerentheses(n))