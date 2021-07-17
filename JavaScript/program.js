//global scope

var e = 10;
function sum(a) {
  return function(b) {
    return function(c) {
      //outer function
      return function(d) {
        //local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4));// log 20


var e = 10;
function sum(a) {
  return function sum2(b) {
    return  function sum3(c) {
      return function sum4(d) {
        return a + b + c + d + e;
      }
    }
  }
}

let sum2  = sum(2);
let sum3 = sum2(3);
let sum4 = sum3(4);
let sum5 = sum4(5);
console.log(sum5);