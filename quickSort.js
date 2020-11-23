const pivot = (array, start = 0, end = array.length + 1) => {
  const swap = (array, i, j) => {
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

const quickSort = (array, left=0, right = array.length-1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //left
    quickSort(array, left, pivotIndex - 1);
    //right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};
let array = [4, 8, 2, 1, 5, 7, 6, 3, -5, 100];//3

// console.log(pivot(array, start, end));
console.log(quickSort(array));


//time complexity - best, average - O(n log n); worst - O(n);
//space complexity - O(log n);
