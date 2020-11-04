// 908. Smallest Range I
// Easy

// 241

// 1167

// Add to List

// Share
// Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

// Example 1:

// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]
// Example 2:

// Input: A = [0,10], K = 2
// Output: 6
// Explanation: B = [2,8]
// Example 3:

// Input: A = [1,3,6], K = 3
// Output: 0
// Explanation: B = [3,3,3] or B = [4,4,4]
 

// Note:

// 1 <= A.length <= 10000
// 0 <= A[i] <= 10000
// 0 <= K <= 10000



var smallestRangeI = function(A, K) {
  let diff = 0
  let extremes = []
  
  if (A.length === 1) return diff
  
  // get max
  extremes[0] = Math.max(...A)
  
  // get min
  extremes[1] = Math.min(...A)
  
  // minimize max
  extremes[0] -= K
  
  // maximize min
  extremes[1] += K
  
  diff = extremes[0] - extremes[1]
  
  return diff < 0 ? 0 : diff    
};

// let A = [1];
// let K = 0;//0

let A = [0,10];
let K = 2;//6

// let A = [1,3,6];
// let K = 3;//0


console.log(smallestRangeI(A, K))
