// 643. Maximum Average Subarray I
// Easy

// 1029

// 140

// Add to List

// Share
// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.



// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000


// Constraints:

// n == nums.length
// 1 <= k <= n <= 105
// -104 <= nums[i] <= 104

const maxSubarray = (nums, k) => {
  let n = nums.length;

  // Check if 'k' is valid
  if (k > n) return -1;

  // Create and fill array
    // to store cumulative
    // sum. csum[i] stores
    // sum of arr[0] to arr[i]
  let newArray = new Array(n);
  newArray[0] = nums[0];

  for(let i = 1; i < n; i++) {
    newArray[i] = newArray[i - 1] + nums[i];
    console.log(newArray[i])
  }

  // Initialize max_sm as
    // sum of first subarray
  let maxSum = newArray[k - 1];
  console.log({maxSum})
  // Find sum of other
  // subarrays and update
  // max_sum if required.
  for(let i = k; i < n; i++) {
    let currSum = newArray[i] - newArray[i - k];
    if (currSum > maxSum) {
        maxSum = currSum;
    }
  }
  return maxSum / k;
};

let nums = [1,12,-5,-6,50,3];
let k = 4;

console.log(maxSubarray(nums, k));
