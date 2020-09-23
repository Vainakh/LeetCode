const leastCommonMultiple = (num1, num2) => {
  let nums = num1 * num2;
  console.log(nums);
  for (let i = 1; i <= nums; i ++ ){
    console.log(nums[i])
    if (nums[i] % num1 === 0 && nums[i] % num2 === 0){
      
      return nums[i];
    }
  }
};


let num1 = 3;
let num2 = 2;

console.log(leastCommonMultiple(num1, num2))