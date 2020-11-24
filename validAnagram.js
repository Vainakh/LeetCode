// Given two strings determine if words are anagrams.

function validAnagram(string1, string2){
  let first = {};
  let second = {};

  for (let i = 0; i < string1.length; i++) {
      first[string1[i]] = (first[string1[i]] || 0 ) + 1;
  }
  for (let j = 0; j < string2.length; j++) {
    first[string2[j]] = (first[string2[j]] || 0 ) + 1;
  }
  for (let key in string1) {
    if (!key in second) {
      return false;
    }
    if(string1[key] !== string2[key]) {
      return false;
    }
  }
  return true;
}

// let string1 = "zaa";//true
// let string2 = "aza";

let string1 = "zaz";//false
let string2 = "aza";

console.log(validAnagram(string1, string2));