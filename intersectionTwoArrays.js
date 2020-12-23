// 349. Intersection of Two Arrays
// Easy

// 1143

// 1399

// Add to List

// Share
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.
 

const twoArrays = (nums1, nums2) => {
  let matches = {};
  let final = [];

  for (let key in nums1) {
    if (!matches[nums1[key]]) {
      matches[nums1[key]] = 1;
    } else {
      continue;
    }
  }

  for (let key in nums2) {
    if (!matches[nums2[key]]) {
      continue;
    } else {
      matches[nums2[key]] = 0;
    }
  }
  
  for (let key in matches) {
    if (matches[key] === 0) {
      final.push(key);
    }
  }
  return final;
};

let nums1 = [4, 9, 5];
let nums2 = [9, 4, 9, 8, 4];

console.log(twoArrays(nums1, nums2));