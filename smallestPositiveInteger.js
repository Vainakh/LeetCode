// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


const solution = (array) => {
  let newObj = {};
  let missingInRange = [];
  let max = array.sort((a, b) => b - a)[0];


  for (let i = 0; i <= max; i++) {
    if (!newObj[i]) {
      newObj[i] = 0;
    }
  }
  for (let i = 0; i < array.length; i ++) {
    if(!newObj[array[i]]) {
      newObj[array[i]] = 1;
    } else {
      newObj[array[i]] += 1;
    }
  }

  for (let key in newObj) {
    if (newObj[key] === 0 && key !== '0') {
      missingInRange.push(key);
    } else {
      continue;
    }
  }

  //add edge cases for // Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

  let final = missingInRange.sort((a, b) => b - a)[0];
  return Number(final);
};

let array = [1, 3, 6, 4, 1, 2];

console.log(solution(array));