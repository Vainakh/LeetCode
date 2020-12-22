const countFour = (array, n) => {
  let newObj = {};
  
  for (let key of array) {
      if (!newObj[key]) {
         newObj[key] = 1; 
      } else {
          newObj[key] += 1;
      }
  }
  
  for (let key in newObj) {
     if (newObj[key] === n) {
       return key;
     };
  }
  
  
}

let array = [10, 20, 20, 5, 5, 5, 20, 10, 2, 20, 100];
let n = 4;
