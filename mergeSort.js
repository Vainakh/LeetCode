//implementation with two sorted arrays
const merge = (array1, array2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while(i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      results.push(array1[i]);
      i++;
    } else {
      results.push(array2[j]);
      j++;
    }
  }
  while(i < array1.length) {
    results.push(array1[i]);
    i++;
  }
  while(j < array2.length) {
    results.push(array2[j]);
    j++;
  }
  return results;
}

const mergeSort = (array) => {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length /  2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}
//time complexity - O(n log n);
//space complexity - O(n);

// let array1 = [1, 3, 9, 10, 62, 100];
// let array2 = [1, 2, 3, 5, 6];
let array = [10, 24, 76, 73, 72, 1, 9];

// console.log(merge(array1, array2));
console.log(mergeSort(array));