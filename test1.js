function countPairs(numbers, k) {
  // Write your code here
  let pairs = [];
  
  for (let i = 0; i < numbers.length; i ++){
      for (let j = 1; j < numbers.length; j ++){
        let pair = [numbers[i], numbers[j]];
          if (numbers[i] + k === numbers[j] && numbers[i] !== numbers[j] && i < j){   
          pairs.push([numbers[i], numbers[j]])
          i ++;
          j ++;
      }
       
    }
  }
  return pairs.length;
}

let numbers = [ 1, 1, 2, 2, 3, 3];

let k = 1;

console.log(countPairs(numbers, k));