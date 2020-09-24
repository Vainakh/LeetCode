var maximum69Number  = function(num) {
    
  let stringed = num.toString().split("");
  console.log(stringed);
  for (let i = 0; i < stringed.length; i += 1) {
      if(stringed[i] === "6"){
          stringed[i] = "9";
          if (stringed.join("") > num){
            return stringed.join("");
          } else {
            continue;
          }
      }
  }
  return num;
};

let num = 9999;
console.log(maximum69Number(num));