const getDigit = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

const countDigit = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, countDigit(nums[i]));
  }
  return maxDigits;
}

let nums = [12, 234, 54322, 12, 988, 299];
console.log(mostDigits(nums));