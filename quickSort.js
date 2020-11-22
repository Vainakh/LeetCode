const pivot = (array, start=0, end=array.length + 1) => {
  const swap = (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = array[start];
  let swapIdx = start;

  for (let i = start + 1; i < array.length; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

let array = [4, 8, 2, 1, 5, 7, 6, 3];//3

console.log(pivot(array, start, end));