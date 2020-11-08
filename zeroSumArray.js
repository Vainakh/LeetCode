const zeroSum = (array) => {
  let start = 0;
  let end = array.length - 1;
  let newArray = [];

  while (start < end) {
    let sum = array[start] + array[end];
    if (sum === 0) {
      newArray.push([array[start], array[end]]);
    } else if (sum > 0) {
        end--;
      } else {
        start++;
      }
    }

    return newArray;
}

// let array = [-4, -3, -2, -1, 0, 1, 2, 3, 10];
let array = [-4, -3, -2, -1, 0, 5, 10];

console.log(zeroSum(array));