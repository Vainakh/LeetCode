const insertionSort = (array) => {
  let next;
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

let array = [2, 7, 1, 23, 9, 11, 54];

console.log(insertionSort(array));