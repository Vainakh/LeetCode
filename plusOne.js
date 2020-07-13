let plusOne = function(digits) {
    let newDigits = [];

  for (let i = 0; i < digits.length; i += 1){
    if(digits[i + 1] === undefined){
      newDigits.push(digits[i] + 1);
    }else{
      newDigits.push(digits[i]);
    }
  }
  return newDigits;
};



// let digits = [1, 2, 3];
// console.log(plusOne(digits));

let digits = [4, 3, 2, 1];
console.log(plusOne(digits));