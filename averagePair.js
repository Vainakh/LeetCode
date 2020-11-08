// Find average values in array equal to target. May be more than one.

// Time O(n);
// Space O(1);

///multiple pointers
const averagePair = (array, target) => {
  let start = 0
  let end = array.length - 1;
  while (start < end) {
    let avg = (array[start] + array[end]) / 2 
    if (avg === target) return true;
    else if (avg < target) start++
    else end--
  }
  return false;
};

let array = ([1, 2, 3]);//true
let target = 2.5;

console.log(averagePair(array, target));