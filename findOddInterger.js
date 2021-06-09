// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// function doTest(a, n) {
//   console.log("A = ", a);
//   console.log("n = ", n);
//   Test.assertEquals(findOdd(a), n);
// }
// describe('Example tests', function() {
//   doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//   doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   doTest([10], 10);
//   doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//   doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
// });


function findOdd(A) {
  let hash = {};
  let odd = 0;

  for (let num of A) {
    if (hash[num]) {
    hash[num] = hash[num] + 1;
    } else {
    hash[num] = 1;
    }
  }

  for (let prop in hash) {
    if (hash[prop] % 2 !== 0) {
      return prop;
    }
  }
};

let A = [20,1,1,2,2,3,3,5,5,4,20,4,5];

console.log(findOdd(A));
