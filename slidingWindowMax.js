
function printKMax(arr, n, k) {
  // let results = [];
  // let temp = [];
  // for (let i = -k + 1; i < n; i ++) {
  //   if (i > 0) {
  //     temp = Math.max(...arr.slice(i, i + k));
  //     results.push(temp);
  //   } else {
  //     results.push(arr[0]);
  //   }
  // }

  // return results;

  let results = [];
  let temp = [];
  for (let i = -k + 1; i < n; i ++) {
    if (i > 0) {
      temp = Math.max(...arr.slice(i, i + k));
      results.push(temp);
    } else {
      results.push(arr[0]);
    }
  }

  return results;
};

let arr = [5, 2, 3, 7, 4]; //[5, 5, 5, 7, 7, 7, 4]
// let arr = [6, 5, 3, 5, 8, 9];//6, 5, 8, 9, 9, 9
let n = arr.length;
let k = 3;

console.log(printKMax(arr, n, k));

