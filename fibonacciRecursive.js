const fibNum = (num) => {
  if (num <= 2) return 1;
  return fibNum(num - 1) + fibNum(num - 2);
}

let num = 7;

console.log(fibNum(num));