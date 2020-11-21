//es5
const swap = (array, idx1, idx2) => {
  let temp = array[idx];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

//es2015
const swap = (array, idx1, idx2) => {
  [array[idx1][idx2]] = [array[idx2][idx2]];
}