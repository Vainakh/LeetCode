// given an array of 1s and 0s. return number of zeroes.

function countZeroes(array){
  // add whatever parameters you deem necessary - good luck!!!
  let counter = 0;
  for (let num in array) {
      if (array[num] === 0) {
          counter++;
      }
  }
  return counter;
}

let array = [1,1,1,0,1,0,1];
console.log(countZeroes(array));