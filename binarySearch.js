

// const binarySearch = (array, value) => {
//   let sorted = array.sort((a, b) => a - b);
//   let start = 0;
//   let end = sorted.length - 1;
//   let middle = Math.floor((start + end) / 2);
//   while (value !== sorted[middle] && start <= end) {
//     if (value < sorted[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return sorted[middle] === value ? middle : -1;
// }

// let array = [2, 5, 6, 9, 13, 15, 28, 30];
// let value = 28;

// console.log(binarySearch(array, value));


const binarySearch = (array, value) => {
  // let sorted = array.sort((a, b) => a - b);
  // let start = 0;
  // let end = array.length - 1;
  // let middle = Math.floor((start - end) / 2);
  // while(value !== sorted[middle] && start <= end) {
  //   if (value < sorted[middle]) {
  //     end = middle - 1;
  //   } else {
  //     start = middle + 1;
  //   }

  //   middle = Math.floor((start + end) / 2);
  // }

  // return value === sorted[middle] ? middle : -1;
  let sorted = array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(start + end) / 2;
  while(start <= end && value !== sorted) {
    if (value === array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor(start + end) / 2;
  }

  return value = sorted[middle] ? middle : -1;
}

let array = [2, 5, 6, 9, 13, 15, 28, 30];
let value = 9;

console.log(binarySearch(array, value));