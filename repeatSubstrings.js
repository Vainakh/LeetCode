// 459. Repeated Substring Pattern
// Easy

// 2500

// 252

// Add to List

// Share
// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.



// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.


// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.


const repeatedSubstringPattern = function(s) {
  if (s.length < 2) return false;

  let uniqueChars = "";
  for (let i = 0; i < s.length; i++) {
   if (!uniqueChars.includes(s[i])) {
    uniqueChars += s[i];
   }
  }

  let ss = s.split(uniqueChars);
  console.log(ss);
  return ss.every(el => el === '') ? true : false;
}

// let s = "ababc";//true
let s = "abaababaab";

console.log(repeatedSubstringPattern(s));