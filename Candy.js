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


const candy = (children) => {
  let rating = 0;

  for (let i = 0; i < children.length; i ++) {
    if (children[i - 1] < children[i] && children[i] > children[i + 1]){
      rating += 2;
    } else if (children[i - 1] < children[i] ||  children[i] > children[i + 1]){
      rating += 2;
    } else {
      rating += 1;
    }
  }

  return rating;
};

let children = [1,2, 2]

console.log(candy(children));