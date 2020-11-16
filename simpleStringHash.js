//1. Simple version

// const hash = (key, arrayLength) => {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLength;
//   }
//   return total;
// }

//2. Second verison, more complex

const hash = (key, arrayLength) => {
  let total = 0;
  let weirdPrime = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * weirdPrime + value) % arrayLength;
  }
  return total;
}

// let key = "pink";
// let arrayLength = 10;//0

let key = "orangered";
let arrayLength = 10;//7

// let key = "cyan";
// let arrayLength = 10;//3

console.log(hash(key, arrayLength));

//problems with this function

//1. Only hashes strings
//2. Can be clustered
//3. Time complexity scales with length;