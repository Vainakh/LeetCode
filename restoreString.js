var restoreString = function(s, indices) {
  const array = []; 
    for(let i = 0; i < indices.length; i += 1){
     array[indices[i]] = s[i];
    }
    return array.join('')
};


// let s = "codeleet";
// let indices = [4,5,6,7,0,2,1,3];
//"leetcode"

// let s = "abc";
// let indices = [0,1,2];
//"abc"

let s = "aiohn";
let indices = [3,1,4,2,0];
//"nihao"

// let s = "aaiougrt";
// let indices = [4,0,2,6,7,3,1,5];
// "arigatou"

// let s = "art";
// let indices = [1,0,2];
// "rat"

console.log(restoreString(s, indices));