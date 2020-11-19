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


let num = 7;
console.log(fibNumRecursive(num));