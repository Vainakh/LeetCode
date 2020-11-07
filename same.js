const same = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1; i++) {
    let correctIndex = array2.indexOf(array1[i] * 2);
    if (correctIndex === -1) {
      return false;
    }
    array2.splice(correctIndex, 1);
  }
  return true;
}

let array1 = [1, 2, 3, 2];//true
let array2 = [4, 1, 9, 4];

// let array1 = [1, 2, 3];//false
// let array2 = [1, 9];

// let array1 = [1, 2, 1];//false
// let array2 = [4, 4, 1];

console.log(same(array1, array2));