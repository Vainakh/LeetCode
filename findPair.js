// given unsorted array and number n find if there exists a pair of elements in the array whose difference is n. true or false;

const findPair = (array, n) => {
  let results = [];
  for (let key1 in array) {
    for (let key2 in array) {
      if (array[key1] - array[key2] === n ) {
        return true;
      }
    }
  }
  return false;
};

let array = [6, 1, 4, 10, 2, 4];
let n = 2;

console.log(findPair(array, n));