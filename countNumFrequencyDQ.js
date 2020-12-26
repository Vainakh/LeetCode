// Given an array and num , count the number of occurencies of the number,

function sortedFrequency(array, num){
  // add whatever parameters you deem necessary - good luck!
  let counter = 0;
  for (let element in array) {
      if (array[element] === num) {
          counter++;
      } 
  }
  return counter > 0 ? counter : -1;
}

let array = [2, 3, 2, 5, 7, 2, 2, 1, 2, 0];
let num = 2;
console.log(sortedFrequency(array, num));