// function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num >= 0){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }

// function fibonacci(num) {
//   if (num <= 1) return 1;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

const fibonacci = (num) => {
  let a = 1;
  let b = 0;
  let temp = 0;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num --;
  }

  return b;
}

let num = 7;

console.log(fibonacci(num));