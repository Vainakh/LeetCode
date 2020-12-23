const treasure = (array) => {
  let comb1 = ["NORTH", "SOUTH"];
  let comb2 = ["EAST", "WEST"];
  let comb3 = ["SOUTH", "NORTH"];
  let comb4 = ["NORTH", "SOUTH"]
  
  for (let i = 0; i < array.length - 1; i++) {
      let current = array[i];
      let next = array[i + 1];
      console.log(i);
      console.log(current, next);
      
      if (   [current, next].toString() === comb1.toString() 
          || [current, next].toString() === comb2.toString() 
          || [current, next].toString() === comb3.toString()
          || [current, next].toString() === comb4.toString()) {
          array.splice(i, 2);
          i = -1;
      }
  }
  return array;
};

let array = ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "SOUTH", "NORTH", "WEST"];

console.log(treasure(array))