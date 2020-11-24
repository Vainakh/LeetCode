// Given two strings determine if words are anagrams.

// function validAnagram(string1, string2){
//   let first = {};
//   let second = {};

//   for (let i = 0; i < string1.length; i++) {
//       first[string1[i]] = (first[string1[i]] || 0 ) + 1;
//   }
//   for (let j = 0; j < string2.length; j++) {
//     first[string2[j]] = (first[string2[j]] || 0 ) + 1;
//   }
//   for (let key in string1) {
//     if (!key in second) {
//       return false;
//     }
//     if(string1[key] !== string2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;
  const lookup = {};
  for (let i = 0; i < string1.length; i++) {
    lookup[string1[i]] ? lookup[string1[i]] += 1 : lookup[string1[i]] = 1;
  }
  for (let j = 0; j < string2.length; j++) {
    if (!lookup[string2[j]]) {
      return false;
    } else {
      lookup[string2[j]] -= 1;
    } 
  }
  console.log(lookup);
  return true;
}

let string1 = "zaa";//true
let string2 = "aza";

// let string1 = "zaz";//false
// let string2 = "aza";

console.log(validAnagram(string1, string2));