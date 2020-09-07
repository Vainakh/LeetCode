// # Write a method, most_frequent_bigram, that takes in a string and returns the two adjacent letters that appear the
// # most in the string.

const mostFrequentBigrams = (string) => {
  let newObj = {};

  let idx = 0;

  while(idx < string.length - 1){
    let first = string[idx];
    let second = string[idx + 1];
    let pair = first + second;

    if(!newObj[pair]){
      newObj[pair] = 1;
    } else{
      newObj[pair] = newObj[pair] + 1;
    }
    idx++;
  }

  let objValues = Object.values(newObj);
  let maxValue = objValues[0];
  
  for (let key in newObj){
    if(newObj[key] > newObj[maxValue]){
      maxValue = newObj[key];
    }
  }
  return maxValue;
};

let string = "auooauaaau";

console.log(mostFrequentBigrams(string));