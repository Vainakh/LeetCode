const inverseObject = (obj) => {
  let newObj = {};

  for (let key in obj){
    newObj[obj[key]] = key;
  }
  return newObj;
};

let obj = {
  first: "one", 
  second: "two", 
  third: "three"
}

console.log(inverseObject(obj));