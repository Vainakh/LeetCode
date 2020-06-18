var runningSum = function(nums) {
  let sums = [];
  
  for (let i = 0; i < nums.length; i += 1) {
    if( i === 0){
      sums.push(nums[i]);
    } else {
      sums.push(nums[i] + sums[sums.length - 1]);
    }
  }
  
  return sums;
};

nums1 = [1,2,3,4]//[1,3,6,10]
nums2 = [3,1,2,10,1]//[3,4,6,16,17]
nums3 = [1,1,1,1,1]//[1,2,3,4,5]

console.log(runningSum(nums1));
console.log(runningSum(nums2));
console.log(runningSum(nums3));