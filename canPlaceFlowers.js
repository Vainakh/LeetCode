// 605. Can Place Flowers
// Easy

// 1212

// 421

// Add to List

// Share
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

const canPlaceFlowers = (flowerbed, n) => {
  let results = {};
  let final = [];
  
  if (flowerbed.length === 1) return true;
  
  for (let number in flowerbed) {
    if (!results[flowerbed[number]]) {
      results[flowerbed[number]] = 1;
    } else {
      results[flowerbed[number]] += 1;
    }
  }

  if (flowerbed[0] = 1) {
    results[1] += n;
    results[0] -= n;
  } else if (flowerbed[0] = 0) {
    results[0] += n;
    results[1] -= n;
  }

  let zeros = results[0];
  let ones = results[1];
  
  while (final.length < flowerbed.length) {
    for (let result in results) {
      if (flowerbed[0] === 1) {
        if (Number(result) % 2 === 0) {
          final.push(1);
        } else {
          final.push(0);
        }
      } else if (flowerbed[0] === 0) {
        if (Number(result) % 2 !== 0) {
          final.push(0);
        } else {
          final.push(1);
        }
      }
    }
  }
  
  console.log({ones}, {zeros})
};

let flowerbed = [0, 1, 0, 1, 0];
let n = 2;
//true

console.log(canPlaceFlowers(flowerbed, n));

// while (flowerbed.length > 1 && count > 0) {
  //   if (flowerbed[0] === 1) {
  //     for (let key in results) {
  //       if (Number(key) % 2 === 0 && Number(key) === 1) {
  //         final.push(1);
  //         count--;
  //       } else if ((Number(key) % 2 !== 0 && Number(key) === 0)) {
  //         final.push(0);
  //         count--;
  //       }
  //     }
  //   }
  //   flowerbed.length--;
  // }
  
