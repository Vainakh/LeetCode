const productOfArray = (array) => {
  if (array.length === 0) return 1;
  return array.shift() * productOfArray(array);
}

let array = [1, 2, 3];//6
console.log(productOfArray(array));