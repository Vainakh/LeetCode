const bubbleSort = (array) => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

let array = [2, 15, 9, 10, 1, 11, 23, -2, 3];

console.log(bubbleSort(array));
