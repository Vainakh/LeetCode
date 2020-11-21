const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// function bubbleSort(array) {
//   const swap = (array, idx1, idx2) => {
//     [array[idx1][idx2]] = [array[idx2][idx1]];
//   };

//   for (let i = array.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (array[j] > array[j + 1]) {
//         swap(array, j, j + 1)
//       }
//     }
//   }
//   return array;
// };

const bubbleSort = (array) => {
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwaps = false;
      }
    }
      if (noSwaps) break;
  }
  return array;
}

// let array = [2, 15, 9, 10, 1, 11, 23, -2, 3];
let array = [8, 1, 2, 3, 4, 5, 6, 7];

console.log(bubbleSort(array));
