//Write a recursive function which accepts an array and return a new array with all values flatten.

const flatten = (array) => {
  if (array.every((el) => !Array.isArray(el))) return array;
  return flatten(array.reduce((array, el) => {
    return array.concat(el);
  }, []));
}


console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]