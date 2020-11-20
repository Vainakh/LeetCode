//naive solution

const fibNumRecursive = (num) => {
  if (num <= 2) return 1;
  return fibNumRecursive(num - 1) + fibNumRecursive(num - 2);
}


//memoized solution 

const fibNumMemoized = (num, memo = []) => {
  if (memo[n] !== undefined) return memo[n];
  if (num <= 2) return 1;
  let res = fibNumMemoized(n - 1, memo) + fibNumMemoized(n - 2, memo);
  memo[n] = res;
  return res;
}

//tabulation solution

const fibNumTobulation = (num) => {
  if (num <= 2) return 1;
  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}


let num = 7;
console.log(fibNumRecursive(num));