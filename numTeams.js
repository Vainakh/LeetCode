// 1395. Count Number of Teams
// Medium

// 569

// 97

// Add to List

// Share
// There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

// You have to form a team of 3 soldiers amongst them under the following rules:

// Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
// A team is valid if:  (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
// Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

 

// Example 1:

// Input: rating = [2,5,3,4,1]
// Output: 3
// Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
// Example 2:

// Input: rating = [2,1,3]
// Output: 0
// Explanation: We can't form any team given the conditions.
// Example 3:

// Input: rating = [1,2,3,4]
// Output: 4
 

// Constraints:

// n == rating.length
// 1 <= n <= 200
// 1 <= rating[i] <= 10^5

const numTeams = (rating) => {
  let n = rating.length;
  let triples = [];

  for (let i = 0; i < rating.length; i += 1) {
    for (let j = 0; j < rating.length; j += 1) {
      for (let k = 0; k < rating.length; k += 1) {
        if (rating[k] < n && rating[j] < n && rating[i] < n) {
          if (i < j && j < k) {
            if ((rating[i] > rating[j] && rating[j] > rating[k]) ||  (rating[i] < rating[j] && rating[j] < rating[k])) {
              let triple = [rating[i], rating[j], rating[k]];
              console.log(triple)
                if (triple.length <= 2) {
                  return 0;
                } else if (!triples.includes(triple)) {
                  triples.push(triple);
                } 
              } 
            }
          }
        }
      }
    }
  return triples.length;
}

let rating = [1,2,3,4];

console.log(numTeams(rating));
