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

function maxSubarraySum(array, n){
  let maxSum = 0;
  let tempSum = 0;
 
  if (array.length < n) return null; 
  for (let i = 0; i < n; i++) { 
    maxSum += array[i];
    console.log("maxSum " + maxSum)
    console.log("maxSum " + maxSum + " += " + "array[i] " + array[i]);
  }
  tempSum = maxSum;
  
  for (let i = n; i < array.length; i++) {
    console.log("tempSum " + tempSum)
    tempSum = tempSum - array[i - n] + array[i];
    console.log("tempSum" + tempSum + " - array[i - n]" + array[i - n] + " + array[i]" + array[i]);
    maxSum = Math.max(maxSum, tempSum);
    console.log("maxSum " + maxSum)
  }

  return maxSum;
}


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


let a = maxSubarraySum(array1, n1);//700
// let b = maxSubarraySum(array2, n2);//39
// let c = maxSubarraySum(array3, n3);//5
// let d = maxSubarraySum(array4, n4);//5
// let e = maxSubarraySum(array5, n5);//null


console.log(a);//, b, c, d, e