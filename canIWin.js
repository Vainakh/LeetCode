// 464. Can I Win
// Medium

// 1189

// 195

// Add to List

// Share
// In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.

// What if we change the game so that players cannot re-use integers?

// For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.

// Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise return false. Assume both players play optimally.

 

// Example 1:

// Input: maxChoosableInteger = 10, desiredTotal = 11
// Output: false
// Explanation:
// No matter which integer the first player choose, the first player will lose.
// The first player can choose an integer from 1 up to 10.
// If the first player choose 1, the second player can only choose integers from 2 up to 10.
// The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
// Same with other integers chosen by the first player, the second player will always win.
// Example 2:

// Input: maxChoosableInteger = 10, desiredTotal = 0
// Output: true
// Example 3:

// Input: maxChoosableInteger = 10, desiredTotal = 1
// Output: true

//input -> integers
//output -> boolean
//constrains -> 
//edgecases -> desired total 0 || desiredTotal < maxChoosableInteger,  

const canIWin = (maxChoosableInteger, desiredTotal) => {
  let first = 0;
  let firstUsed = [];
  let second = 0;
  let secondUsed = [];
  let sum = 0;
  
  if (desiredTotal <= maxChoosableInteger) return true; 
  for (let i = 0; i <= maxChoosableInteger; i++) { 
    first = i; 
    for (let j = 0; j < maxChoosableInteger; j ++) { 
      second = j;
      
    //make sure range value is available only for one time use
      
      if (first !== second && !firstUsed.includes(first) && !secondUsed.includes(second) && sum <= desiredTotal) {
        
        // console.log({firstUsed})
       
        // console.log({secondUsed})
        sum += first;
        firstUsed.push(first);
        sum += second;
        secondUsed.push(second);
      } 
    }
  }
  console.log({first});
  console.log({second});
  console.log({sum});
  if (sum > desiredTotal) {
    return false;
  } else {
    return true;
  }
};

let maxChoosableInteger = 4;
let desiredTotal = 6;

console.log(canIWin(maxChoosableInteger, desiredTotal));