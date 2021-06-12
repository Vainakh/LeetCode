// Write a function which returns unique value from sorted array. Some numbers could be negative.

// const countUniqueValues = (array) => {
//   if (array.length === 0) {
//     return [];
//   }
//   let i = 0;
//   for (let j = 1; j < array.length; j++) {
//     if (array[i] !== array[j]) {
//       i++;
//       array[i] = array[j];
//     }
//   }
//   return i + 1;
// };

// const countUniqueValues = (array) => {
//   let count = {};
//   let unique = [];

//   for (let i = 0; i < array.length; i ++) {
//     count[array[i]] ? count[array[i]] += 1 : count[array[i]] = 1;
//   }

//   for (let num in count) {
//     if (count[num] === 1) {
//       unique.push(num);
//     } else {
//       continue;
//     }
//   }
//   return unique;
//   console.log(count);
// };

const countUniqueValues = (array) => {
  let unique = {};
  let count = 0;
  for (let i = 0; i < array.length; i ++) {
    if (!unique[array[i]]) {
      unique[array[i]] = true;
    }
  }

  for (let num in unique) {
    count ++;
  }

  return count;
};

// let array = [1, 1, 1, 1, 1, 2];//2
// let array = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];//7
// let array = [];//0
let array = [-2, -1, -1, 0, 1];//4

console.log(countUniqueValues(array))