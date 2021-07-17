// const maxNum = (array) => {
//   let max = array[0];

//   for (let i = 0; i < array.length; i ++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   return max;
// }



// const exists = (array, value) => {
//   let exists = false;
//   for (let i = 0; i < array.length; i ++) {
//     if (array[i] === value) {
//       exists = true;
//       break;
//     }
//   }
//   return exists;
// };

// const duplicate = (array) => {
//   let duplicate = false;
//   for (let i = 0; i < array.length; i ++) {
//     for (let j = 0; j < array.length; j ++) {
//       if (array[i] === array[j] && i !== j) {
//         duplicate = true;
//         break;
//       }
//     }
//   }
//   return duplicate;
// };



// f( n ) = n6 + 3n    n6 + 3n ∈ Θ( n6)
// f( n ) = 2n + 12    2n + 12 ∈ Θ( 2n )
// f( n ) = 3n + 2n    3n + 2n ∈ Θ( 3n )
// f( n ) = nn + n     nn + n ∈ Θ( nn )


// const sort = (array) => {
//   let arr = [];
//   let min = array[0];
//   let index  = 0;
//   while (arr.length <= array.length) {
//     for (let i = 0; i < array.length; i ++) {
//       if (array[i] < min && min > arr[arr.length - 1]) {
//         min = array[i];
//         arr.push(min);
//       }
//     }
//     index ++;
//   }
//   return arr;
// }

// const factorial = (n) => {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// const binarySearch = (array, value) => {
//   let sorted = array.sort((a, b) => a - b);
//   let start = 0;
//   let end = array.length - 1;
//   let middle = Math.floor(array.length / 2);
//   while (value !== sorted[middle] && start <= end) {
//     if (value < sorted[middle]) end = middle - 1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2);
//   }
//   return sorted[middle] === value ? middle : -1;
// }

// // let n = 5;
// let array = [0, 1, 4, 2, 8, 9, 5];//9
// let value = 8;
// console.log(binarySearch(array, value));


// const powerOfTwo = (n) => {
//   if (n <= 0) return 0;
//   while (n % 2 === 0) n = n / 2;
//   return n === 1;
// }

// let n = 8;
// console.log(powerOfTwo(n));

const fibonacci = (n) => {
  let a = 1;
  let b = 0;
  let temp = 0;
  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }
  return b;
}

let n = 7;

console.log(fibonacci(n));