// 135. Candy
// Hard

// 1084

// 173

// Add to List

// Share
// There are N children standing in a line. Each child is assigned a rating value.

// You are giving candies to these children subjected to the following requirements:

// Each child must have at least one candy.
// Children with a higher rating get more candies than their neighbors.
// What is the minimum candies you must give?

// Example 1:

// Input: [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
// Example 2:

// Input: [1,2,2]
// Output: 4
// Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
//              The third child gets 1 candy because it satisfies the above two conditions.


// var candy = function(ratings) {
//   var candyArr = new Array(ratings.length).fill(1);
//   for(var i=0;i<ratings.length;i++) {
//       if (ratings[i+1] > ratings[i]) {
//           candyArr[i+1] = Math.max(candyArr[i+1], candyArr[i] + 1);
//       }
//   }
//   for(var i=ratings.length-1;i>=0;i--) {
//       if (ratings[i-1] > ratings[i]) {
//           candyArr[i-1] = Math.max(candyArr[i-1],candyArr[i] + 1);
//       }
//   }
//   return candyArr.reduce((total, num) => { return total + num});
// };



const candy = (ratings) => {

  let arrCandy = new Array(ratings.length).fill(1);

  for (let i = 0; i < ratings.length; i ++) {
    if (ratings[i + 1] > ratings[i]) {
      arrCandy[i + 1] = Math.max(arrCandy[i + 1], arrCandy[i] + 1);
    }
  }

  for (let i = ratings.length - 1; i >= 0; i --) {
    if (ratings[i - 1] > ratings[i]) {
      arrCandy[i - 1] = Math.max(arrCandy[i - 1], arrCandy[i] - 1);
    }
  }

  return arrCandy.reduce((total, num) => {return total + num });
};

let ratings = [1,2,2];

console.log(candy(ratings));