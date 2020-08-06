let moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {    
    if (nums[i] > nums[i + 1]){
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      } else if(nums[i] < 1){
        nums.splice(i, 1);
        nums.push(i);
      }  
  }   
  return nums;
};



let nums = [0,0,1];
console.log(moveZeroes(nums));
