// const sameFrequency = (num1, num2) => {
//   let first = ("" + num1).split("").sort();
//   let second = ("" + num2).split("").sort();
//   if(first.length !== second.length) return false;
//   for (let i = 0; i < first.length; i ++) {
//     if (first[i] !== second[i]) {
//       return false;
//     }
//   }
//   return true;
// }


// let num1 = 182;//true
// let num2 = 281;

// let num1 = 34;//false
// let num2 = 14;

// let num1 = 3589578;//true
// let num2 = 5879385;

// let num1 = 22;//false
// let num2 = 222;



// let first = ("" + num1).split("").sort();
//     console.log(first)
//     let second = ("" + num2).split("").sort();
//     console.log(second)

//     if (first.length !== second.length) {
//         return false;
//     }

//     for (let i = 0; i < first.length; i += 1) {
//         for (let j = 0; j < second.length; j += 1) {
//                 if (first[i] !== second[j] && i === j) {
//                     return false;
//                 }
//             }
//         }
//         return true;
let num1 = 182;
let num2 = 281;

let num = num1.toString().split("").sort();
console.log(num);

// console.log(sameFrequency(num1, num2))