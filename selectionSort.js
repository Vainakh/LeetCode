// regular solution
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
    }
  }
  return array;
}

//es2015

// const selectionSort = (array) => {
//   const swap = (array, idx1, idx2) => ([array[idx1][idx2] = array[idx2][idx1]]);
//   for (let i = 0; i < array.length; i++) {
//     let min = i;
//     for (let j = 0; j < array.length; j++) {
//       if (array[min] > array[j]) {
//         min = j;
//       }
//     }
//     if (i !== min) swap(array, i, min);
//   }
//   return array;
// }

let array = [2, 5, 1, 9, 4];

console.log(selectionSort(array));