// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
// -105 ≤ sequence[i] ≤ 105.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.



function almostIncreasingSequence(sequence) {
  let count = 0;
  let newArr = [];
  let sorted = sequence.sort();

  if(sequence.length < 2){
    return true;
  }
  
 for(let i = 0; i < sorted.length; i += 1){
   if(sorted[i] >= sorted[i + 1] && count === 0){
    sorted.splice(i, 1);
    count += 1; 
    newArr.push(sorted[i]); 
   
   } else {
     newArr.push(sorted[i]);
   }
}

  
 for (let i = 0; i < newArr.length; i += 1){
   console.log(newArr);
  if(sorted[i] > sorted[i + 1] || sorted[i] === sorted[i + 1]){
    return false;
  }
 }
 return true;
}

// Input:
let sequence = [1, 2, 3, 4, 3, 6];
// Output:
// false

// Input:
// let sequence = [1, 3, 2, 1];
// Expected Output:
// false


// Input:
// let sequence = [1, 3, 2];
// Expected Output:
// true


// Input:
// let sequence = [1, 2, 1, 2];
// Expected Output:
// false

// Input:
// let sequence = [3, 6, 5, 8, 10, 20, 15];
// Expected Output:
// false

// Input:
// let sequence = [1, 1, 2, 3, 4, 4];
// Expected Output:
// false

// Input:
// let sequence = [1, 4, 10, 4, 2];
// Expected Output:
// false

// Input:
// let sequence = [10, 1, 2, 3, 4, 5];
// Expected Output:
// true

// Input:
// let sequence = [1, 1, 1, 2, 3];
// Expected Output:
// false

console.log(almostIncreasingSequence(sequence));