// Given an array of integers and a Number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// note that the subArray must consist of consecutive elemenets from the original array. In the first example below, [100, 200, 300] is a subarray of the original array but [100, 300] is not.

let array1 =[100, 200, 300, 400];
let n1 = 2;
let array2 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
let n2 = 4;
let array3 = [-3, 4, 0, -2, 6, -1];
let n3 = 2;
let array4 = [3, -2, 7, -4, 1, -1, 4, -2, 1];
let n4 = 2;
let array5 = [2, 3];
let n5 = 3;

const maxSubarraySum = (array, n) => {
  if (array.length < n) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < array.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp += array[i + j];

      if(temp > max) {
        max = temp;
      }
    }
  }

  return max;
};

// const maxSubarraySum = (array, n) => {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (array.length < n) return null;
//   for (let i = 0; i < n; i++) {
//     maxSum += array[i];
//   }
//   tempSum = maxSum;
//   for (let j = n; j < array.length; j++) {
//     tempSum = tempSum - array[j - n] + array[j];
//     maxSum = Math.max(maxSum, tempSum);
//   }

//   return maxSum;
// }

let a = maxSubarraySum(array1, n1);//700
let b = maxSubarraySum(array2, n2);//39
let c = maxSubarraySum(array3, n3);//6
let d = maxSubarraySum(array4, n4);//7
let e = maxSubarraySum(array5, n5);//null


console.log(a, b, c, d, e);