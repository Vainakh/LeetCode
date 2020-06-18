let num = 14;

const numberOfSteps  = num => {
  let counter = num;

  let count = 0;
  
  for (let i = counter; i > 0; i -= 1){
    if (num === 0){
      break; 
    } else if(num % 2 !== 0){
      num = num - 1;
      count += 1;
    } else if(num % 2 === 0) {
      num = num / 2;
      count += 1;
    }
  }
  return count;
};

console.log(numberOfSteps(num));//6
console.log(numberOfSteps(8));//4
console.log(numberOfSteps(123));//12