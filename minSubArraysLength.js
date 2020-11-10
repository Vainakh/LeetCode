// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and integer.
// This function should return the minimal length of contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isnt on return 0 instead.

let array1 = [2, 3, 1, 2, 4, 3];
let n1 = 7;

let array2 = [2, 1, 6, 5, 4];
let n2 = 9;

let array3 = [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19];
let n3 = 52;

let array4 = [1, 4, 16, 22, 5, 7, 8, 9, 10];
let n4 = 39;

let array5 = [1, 4, 16, 22, 5, 7, 8, 9, 10];
let n5 = 55;

let array6 = [4, 3, 3, 8, 1, 2, 3];
let n6 = 11;

let array7 = [1, 4, 16, 22, 5, 7, 8, 9, 10];
let n7 = 95;


const minSubArrayLen = (array, n) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (start < array.length) {
    if (total < n && end < array.length) {
      total += array[end];
        end++;
    } else if (total >= n) {
      minLength = Math.min(minLength, end - start);
        total -= array[start];
        start++;
    } else {
      break;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

let a = (minSubArrayLen(array1, n1));//2
let b = (minSubArrayLen(array2, n2));//2
let c = (minSubArrayLen(array3, n3));//1
let d = (minSubArrayLen(array4, n4));//3
let e = (minSubArrayLen(array5, n5));//5
let f = (minSubArrayLen(array6, n6));//2
let g = (minSubArrayLen(array7, n7));//0

// time complexity = O(n)
// space complexity = O(n)

console.log(a, b, c, d, e, f, g);
