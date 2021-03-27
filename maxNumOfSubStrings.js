// 1520. Maximum Number of Non-Overlapping Substrings
// Hard

// 336

// 44

// Add to List

// Share
// Given a string s of lowercase letters, you need to find the maximum number of non-empty substrings of s that meet the following conditions:

// The substrings do not overlap, that is for any two substrings s[i..j] and s[k..l], either j < k or i > l is true.
// A substring that contains a certain character c must also contain all occurrences of c.
// Find the maximum number of substrings that meet the above conditions. If there are multiple solutions with the same number of substrings, return the one with minimum total length. It can be shown that there exists a unique solution of minimum total length.

// Notice that you can return the substrings in any order.

 

// Example 1:

// Input: s = "adefaddaccc"
// Output: ["e","f","ccc"]
// Explanation: The following are all the possible substrings that meet the conditions:
// [
//   "adefaddaccc"
//   "adefadda",
//   "ef",
//   "e",
//   "f",
//   "ccc",
// ]
// If we choose the first string, we cannot choose anything else and we'd get only 1. If we choose "adefadda", we are left with "ccc" which is the only one that doesn't overlap, thus obtaining 2 substrings. Notice also, that it's not optimal to choose "ef" since it can be split into two. Therefore, the optimal way is to choose ["e","f","ccc"] which gives us 3 substrings. No other solution of the same number of substrings exist.
// Example 2:

// Input: s = "abbaccd"
// Output: ["d","bb","cc"]
// Explanation: Notice that while the set of substrings ["d","abba","cc"] also has length 3, it's considered incorrect since it has larger total length.
 

// Constraints:

// 1 <= s.length <= 10^5
// s contains only lowercase English letters.


var maxNumOfSubstrings = function(s) {
  let substringArray = [];
  let maxCount = 0;
  let output = [];
  // find all possible substrings;
  // define if statement to filter
    // set count to calculate number of possible substrings with each substring
    //account for number of consecutive occurences of the same character

  for (let i = 0; i <= s.length; i ++) {
  let start = s[i];
  let currentSubString = s.substring(start, i)
    if (currentSubString) {
      substringArray.push(currentSubString); 
    } 
  }
  // console.log(substringArray);
  let currentCount = 0;
  console.log(currentCount);
  for (let substring of substringArray) {
    
    if (string.includes(substring)) {
      currentCount += 1;
      if (maxCount < currentCount) {
        maxCount = currentCount;
        if (substring.length < output[output.length - 1]) {
          console.log({substring})
          output.push(substring);
        }
      }
    }
  } 
    
  return output;
};

let string = "abbaccd";
console.log(maxNumOfSubstrings(string));