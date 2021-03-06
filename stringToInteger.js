// 8. String to Integer (atoi)
// Medium

// 1825

// 10307

// Add to List

// Share
// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned.

// Note:

// Only the space character ' ' is considered a whitespace character.
// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 

// Example 1:

// Input: str = "42"
// Output: 42
// Example 2:

// Input: str = "   -42"
// Output: -42
// Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.
// Example 3:

// Input: str = "4193 with words"
// Output: 4193
// Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
// Example 4:

// Input: str = "words and 987"
// Output: 0
// Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.
// Example 5:

// Input: str = "-91283472332"
// Output: -2147483648
// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.
 

// Constraints:

// 0 <= s.length <= 200
// s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.

var myAtoi = function(str ) {
  //abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 
    let alphabet = '0123456789+-.';
    let newString = [];
    let max = (2**31) - 1;
    let min = (-2)**31;

    if (Number(str) > max) {
      return max;
    } else if (Number(str) < min){
      return min;
    }

    for (let j = 0; j < str.length; j ++ ) {
      for (let i = 0; i < alphabet.length; i ++ ) {

        if ((str[j] === "-" || str[j] === "+") && ()){

        }
        if (!alphabet.includes(str[0]) && str[0] !== " "){
          return 0;
        } 
        if (str[j] == alphabet[i]) {
          newString.push(str[j]);   
      } else {
        continue;
      }
    }
  }
    return newString.join("");
};

// let str = "4193 with words";//4193
// let str = "words and 987"//987
// let str = "42";
// let str = "-42";
// let str = "   -42"
// let str = "-91283472332";
let str = "+-12"

console.log(myAtoi(str));
