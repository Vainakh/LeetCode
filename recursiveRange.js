const recursiveRange = (num) => {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

let num = 10;
console.log(recursiveRange(num));