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

let array1 = [1, 3, 9, 10, 62, 100];
let array2 = [1, 2, 3, 5, 6];

console.log(merge(array1, array2))