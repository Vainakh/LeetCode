// should return index of the matched number or -1
function findRotatedIndex(array, number){
  // add whatever parameters you deem necessary - good luck!
  for (let num in array) {
      if (array[num] === number) {
          return Number(num);
      }
  }
  return -1;
}

let array = [3, 4, 1, 2];
let number = 4;

console.log(findRotatedIndex(array, number));