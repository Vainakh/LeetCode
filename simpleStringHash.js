const hash = (key, arrayLength) => {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLength;
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