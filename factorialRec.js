const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

let num = 7;
console.log(factorial(num));