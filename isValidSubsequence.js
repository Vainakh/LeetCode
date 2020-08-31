const isValidSubsequence = (array, sequence) => {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length){
    if (array[arrIdx] === sequence[seqIdx]){
      seqIdx++;
    }
    arrIdx++;
  }
  return seqIdx === sequence.length;
}


// let array = [1, 4, 8, 5, 10, 6]
// let sequence = [1, 4, 6];


let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, 10];

console.log(isValidSubsequence(array, sequence));