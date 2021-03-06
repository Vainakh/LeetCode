// Given an array of integers and a Number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// note that the subArray must consist of consecutive elemenets from the original array. In the first example below, [100, 200, 300] is a subarray of the original array but [100, 300] is not.


// const maxSubarraySum = (array, n) => {

//   let total = 0;
//   if (array.length < n) {
//     return null;
//   }
//   for (let i = 0; i < n; i++) {
//     total += array[i];
//   }
//   let currentSum = total;
//   for (let i = n; i < array.length; i++) {
//     currentSum += array[i] - array[i - n];
//     total = Math.max(total, currentSum);
//   }

//   return total;
// };

// function maxSubarraySum(array, n){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (array.length < n) return 0;
//   for (let i = 0; i < n; i++) tempSum += array[i];
//   maxSum = tempSum;
//   for (let i = n; i < array.length; i++) {
//     tempSum = tempSum - array[i - n] + array[i];
//     maxSum = Math.max(tempSum, maxSum);
//   }
//   return maxSum;
// }

const maxSubarraySum = (array, n) => {
  let total = 0;
  if (array.length < n) return null;
  for (let i = 0; i < n; i++) {
    total += array[i];
  }
  let current = total;
  for (let i = n; i < array.length; i++) {
    current += array[i] - array[i - n];
    total = Math.max(total, current);
  }

  return total;
};


let array =[100, 200, 300, 400];
let n = 2;
let array2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let n2 = 4;
let array3 = [-3, 4, 0, -2, 6, -1];
let n3 = 2;
let array4 = [3, -2, 7, -4, 1, -1, 4, -2, 1];
let n4 = 2;
let array5 = [2, 3];
let n5 = 3;

console.log(maxSubarraySum(array, n));

// let a = maxSubarraySum(array1, n1);//700
let b = maxSubarraySum(array2, n2);//39
// let c = maxSubarraySum(array3, n3);//5
// let d = maxSubarraySum(array4, n4);//5
// let e = maxSubarraySum(array5, n5);//null


// console.log(b);//, b, c, d, e