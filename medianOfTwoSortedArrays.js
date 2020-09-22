// 4. Median of Two Sorted Arrays
// Hard

// 7923

// 1233

// Add to List

// Share
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// Follow up: The overall run time complexity should be O(log (m+n)).

 

// Example 1:


 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

var findMedianSortedArrays = function(nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;

  let nums = [...nums1, ...nums2];

  let len = nums.length;

  let medianeven = (nums[Math.floor(len/2) - 1] + nums[Math.ceil(len/2)])/2;
  let medianodd = nums[Math.floor(len/2)];
  return (len % 2 === 0) ?  medianeven : medianodd;
};



  //  Input: 
  //  let nums1 = [1,3]; 
  //  let nums2 = [2];
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: 
// let nums1 = [1,2]
// let nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
// Example 3:

// Input: 
// let nums1 = [0,0]
// let nums2 = [0,0]
// Output: 0.00000
// Example 4:

// Input: 
// let nums1 = [];
// let nums2 = [1];
// Output: 1.00000
// Example 5:

// Input:
//  let nums1 = [2];
//  let nums2 = [];
// Output: 2.00000

// Input;
  // let nums1 = [1,3];
  // let nums2 = [2,7];

//Input;
let nums1 = [];
let nums2 = [2,3];

console.log(findMedianSortedArrays(nums1, nums2))