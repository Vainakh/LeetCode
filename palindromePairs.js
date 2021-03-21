// 336. Palindrome Pairs
// Hard

// 1722

// 167

// Add to List

// Share
// Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.

 

// Example 1:

// Input: words = ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
// Example 2:

// Input: words = ["bat","tab","cat"]
// Output: [[0,1],[1,0]]
// Explanation: The palindromes are ["battab","tabbat"]
// Example 3:

// Input: words = ["a",""]
// Output: [[0,1],[1,0]]
 

// Constraints:

// 1 <= words.length <= 5000
// 0 <= words[i].length <= 300
// words[i] consists of lower-case English letters.
// Accepted
// 113,217
// Submissions
// 326,129


var palindromePairs = function(words) {
  let result = [];
  let output = [];
 
  for (let i = 0; i < words.length; i ++) {
    let first = words[i];
      for (let j = 0; j < words.length - 1; j ++) {
        let second = words[j];
        // if (first.length <= 1 || second.length <= 1) {
        //   let firstCombFirstIndexes = words.indexOf(first);
        //   let secondCombSecondIndexes = words.indexOf(second);
          
        //   output.push([firstCombFirstIndexes, secondCombSecondIndexes])
        // } else {
        if ((first !== "" && first.length > 1) && second !== "" && second.length > 1 ) {
          if (!result.includes(first + second) || !result.includes(second + first)) {
            if (first + second === (first + second).split('').reverse().join('') || second + first === (second + first).split('').reverse().join('')) {
              let firstCombination = first + second;
              let firstCombFirstIndexes = words.indexOf(first);
              
              let secondCombination = second + first;
              let secondCombSecondIndexes = words.indexOf(second);
              
              let reverseFirstCombination = (first + second).split('').reverse().join('');
              let reverseSecondCombination = (second + first).split('').reverse().join('');
              
              if (firstCombination === reverseFirstCombination && !result.includes(firstCombination)) {
                result.push(firstCombination);
                output.push([firstCombFirstIndexes, secondCombSecondIndexes]);
              } 
              
              if (secondCombination === reverseSecondCombination && !result.includes(secondCombination)) {
                result.push(secondCombination);
                output.push([secondCombSecondIndexes, firstCombFirstIndexes]);
              } 
            }
          }
        }
      }
    }
  // }

  return output;
};

let words = ["abcd","dcba","lls","s","sssll"];
// Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

let words1 = ["bat","tab","cat"];
// Output: [[0,1],[1,0]]
// Explanation: The palindromes are ["battab","tabbat"]

let words2 = ["a",""];
// Output: [[0,1],[1,0]]

console.log(palindromePairs(words));