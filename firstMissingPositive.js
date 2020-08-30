// Given an unsorted integer array, find the smallest missing positive integer.



// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1


var firstMissingPositive = function(nums) {
   let i = 0;
   //put the element, which value is i, in position i – 1. 
   while(i < nums.length){
     if(nums[i] != i + 1 && nums[i] >= 1 && nums[i] <= nums.length && nums[nums[i] - 1] != nums[i]){ 
      let temp = nums[nums[i] - 1];
      nums[nums[i] - 1] = nums[i];
      nums[i] = temp;
      // [nums[i], nums[nums[i] - 1]] = [nums[nums[i] - 1], nums[i]]; 
     } else {
       i += 1
     }
   }
    //go through the array to find the first missing positive integer.
    for (let i = 0; i < nums.length; i += 1){
      console.log("position: " + i);
      console.log("value: " + nums[i]);
      if(nums[i] != i + 1){
        return i + 1;
      }
    }
    return nums.length + 1;
};
// Example 1:
// let nums = [1,2,0];//3
// let nums = [3,4,-1,1];//2
let nums = [7,8,9,11,12];//1
console.log(firstMissingPositive(nums));