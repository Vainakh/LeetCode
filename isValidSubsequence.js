// function isValideSubsequence(array, sequence) {
//   for (let i = 0; i < sequence.length; i += 1){
//     for (let j = 0; j < array.length; j += 1){
//     if(!array.includes(sequence[i])){
//       return false;
//     }
//   }
// }
//   return true;
// }


// let array = [5, 1, 22, 25, 6, -1, 8, 10];
// let sequence = [1, 6, -1, 10];

// console.log(isValideSubsequence(array, sequence));


// function isValideSubsequence(array, sequence) {
//   let arrIdx = 0;
//   let seqIdx = 0;

//   while(arrIdx < array.length && seqIdx < sequence.length){
//     if (array[arrIdx] === sequence[seqIdx]){
//       seqIdx += 1;
//     }
//       arrIdx += 1;
//   }
//   return seqIdx === sequence.length;
// }

// let array = [5, 1, 22, 25, 6, -1, 8, 10];
// let sequence = [1, 6, -1, 10];

// console.log(isValideSubsequence(array, sequence));


// function isValideSubsequence(array, sequence){
//   let seqIdx = 0;
//   for (const value of array){
//     if(seqIdx === sequence.length){
//       break;
//     }
//       if(sequence[seqIdx] === value){
//         seqIdx += 1;
//       } 
//   }
//   return seqIdx === sequence.length;
// }

// let array = [5, 1, 22, 25, 6, -1, 8, 10];
// let sequence = [1, 6, -1, 10];

// console.log(isValideSubsequence(array, sequence));
