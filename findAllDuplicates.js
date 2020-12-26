// find all elements in array that appear more than once. 

const findAllDuplicates = (array) => {
  let newObj = {};
  let results = [];
  for (let element in array) {
    if (!newObj[array[element]]) {
      newObj[array[element]] = 1;
    } else {
      newObj[array[element]] ++;
    }
  }
  
  for (let key in newObj) {
    if (newObj[key] > 1) {
      results.push(Number(key));
    }
  } 
  return results;
};

let array = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findAllDuplicates(array));