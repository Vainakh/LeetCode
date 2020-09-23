const matchingPairs = (n, array) => {
  let sorted = array.sort((a, b) => a - b);
  let pairs = 0;

  for (let i = 0; i < n - 1; i += 1){
    if (sorted[i] === sorted[i + 1]){
      pairs ++;
      i ++;
    }
  }
  
  return pairs;
}


let n = 9;
let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(matchingPairs(n, array));//3