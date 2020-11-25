const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

let base = 2;
let exponent = 2;

console.log(power(base, exponent));