
function printKMax(arr, n, k) {

    const result = [];

    if (k === 0){
        return result;
    }
    let temp = [];
    for (let i = k; i < n; i += 1 ){
      temp = Math.max(...arr.slice(i, i + k));
      result.push(temp);
    }

    return result;
};

let arr = [5, 2, 3, 7, 4]; //[5, 5, 5, 7, 7, 7, 4]
// let arr = [6, 5, 3, 5, 8, 9];//6, 5, 8, 9, 9, 9
let n = arr.length;
let k = 3;

console.log(printKMax(arr, n, k));

