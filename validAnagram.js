// Given two strings determine if words are anagrams.

function validAnagram(string1, string2){
  let first = {};
  let second = {};
// add whatever parameters you deem necessary - good luck!
  if (string1.length !== string2.length) {
      return false;
  }

  for (let i = 0; i < string1.length; i++) {
    first[string1[i]] = (first[string1[i]] || 0) + 1; 
  }

  for (let y = 0; y < string2.length; y++) {
    second[string2[y]] = (second[string2[y]] || 0) + 1;
  }

  for (let key in first) {
    if (!key in second) {
      return false;
    }

    if (first[key] !== second[key]) {
      return false;
    }
  }

  return true;
}

let string1 = "zaa";//true
let string2 = "aza";

// let string1 = "zaz";//false
// let string2 = "aza";

console.log(validAnagram(string1, string2));