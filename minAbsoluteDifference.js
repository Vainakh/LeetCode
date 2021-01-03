// 1200. Minimum Absolute Difference
// Easy

// 473

// 24

// Add to List

// Share
// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr
 

// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
// Example 2:

// Input: arr = [1,3,6,10,15]
// Output: [[1,3]]
// Example 3:

// Input: arr = [3,8,-10,23,19,-4,-14,27]
// Output: [[-14,-10],[19,23],[23,27]]
 

// Constraints:

// 2 <= arr.length <= 10^5
// -10^6 <= arr[i] <= 10^6



const minAbsoluteDifference = (arr) => {
  let minDifference = [];
  let differences = []; 
  let results = [];

  for (let num1 in arr) {
    for (let num2 in arr) {
      if (arr[num1] !== arr[num2]) {
        let currentDifference = Math.abs(arr[num1] - arr[num2]);
        differences.push(currentDifference);
        minDifference = Math.min(...differences);
      }
    }
  };
  
  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < arr.length; j ++) {
      if (arr[i] - arr[j] === minDifference) {
        results.push([ arr[j], arr[i]]);
      } 
    }
  };

  return results.sort((a, b) => a[0] - b[0]);
};

let arr = [4,2,1,3];//[[1,2],[2,3],[3,4]]

console.log(minAbsoluteDifference(arr));
