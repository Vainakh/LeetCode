// Given an integer n, return any array containing n unique integers such that they add up to 0.

 

// Example 1:

// Input: n = 5
// Output: [-7,-1,1,3,4]
// Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
// Example 2:

// Input: n = 3
// Output: [-1,0,1]
// Example 3:

// Input: n = 1
// Output: [0]
 

// Constraints:

// 1 <= n <= 1000

var sumZero = function(n) {
  let newArray = [];

  if(n === 1){
    return [0];
  }

  i = 1;
  while(newArray.length < n){
    if(n % 2 === 0){
      newArray.push(i, -i);
    } else{
      newArray[0] = 0;
      newArray.push(i, -i)
    }
    i += 1;
  }
  return newArray; 
};

// let n = 5;

let n = 1;

console.log(sumZero(n));
