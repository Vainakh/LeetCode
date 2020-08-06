var maxProduct = function(nums) {
  let sorted = nums.sort(function(a,b){return a - b});
  
  let num1 = sorted[sorted.length - 1];
  let num2 = sorted[sorted.length - 2];
  
  let max = (num1 - 1) * (num2 - 1);
  return max;
};


// let nums = [3,4,5,2]; //12
// let nums = [1,5,4,5]; //16
let nums = [10,2,5,2]; //36

console.log(maxProduct(nums));