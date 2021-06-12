const maxNums = (nums) => {
  let current = 0;
  let max = 0;

  if (nums.length < 1) return 0;

  for (let i = 0; i < nums.length; i ++) {
   if (nums[i] > 0 && (nums[i + 1] || nums[i - 1])) {
    current += 1;
    max = Math.max(max, current);
   }
  }

  return max;
};

// let nums = [1, 0, 1, 1, 1, 0, 0];
// let nums = [];
// let nums = [0, 0, 0, 0];
// let nums = [1, 1, 1, 1, 1];

console.log(maxNums(nums));