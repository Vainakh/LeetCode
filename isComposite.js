// # Write a method, composite?, that takes in a number and returns a boolean indicating if the number
// # has factors besides 1 and itself
// #
// # Example:
// #
// # composite?(9)     # => true
// # composite?(13)    # => false

const isComposite = (num) => {
  i = 2;
  while (i < num){
    if(num % i === 0){
      return true;  
    } 
    i++ 
  }
  return false;
};

let num = 9;
// let num = 13;

console.log(isComposite(num))