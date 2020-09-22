// 7. Reverse Integer
// Easy

// 3718

// 5821

// Add to List

// Share
// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function(x) {
  
  let array = x.toString().split("");
  let reversed = [];

  if (array.length > 4){
    return 0;
  }

  for (let i = array.length; i >= 0; i --){
    if (array[i] === "0" &&  array[i + 1] === '0'){
      continue;
    } else if ( array[i] === "-"){
      reversed[0] = array[i];
    } else {
      reversed.push(array[i]);
    }
  }
  return reversed.join("");
};

// let x = 123;
// 321
// let x = -123; 
// -321
// let x = 120;
//21
// let x = 901000;
//109
let x = 1534236469;
//0

console.log(reverse(x));