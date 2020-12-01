//Write a recursive function which accepts an array and a callback.The function returns true if a single value in an array returns true when passed to the callback. Otherwise return false.

const someRecursive = (array, callback) => {
  // console.log(array.slice(1));
  // console.log(callback)
  if (array.length === 0) return false;
  return (callback(array[0]) + someRecursive(array.slice(1), callback)) ? true : someRecursive(array.slice(1), callback);
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false