function linearSearch(array, value){
  // add whatever parameters you deem necessary - good luck!
  for (let i = 0; i < array.length; i++) {
      if (array[i] === value) return i;
  }
  return -1;
}

let array = [10, 15, 20, 25, 30];
let value = 15;

console.log(linearSearch(array, value));