
// is string1 subsequence of string 2. 

const isSubsequence = (array, sequence) => {
  if (string1.length === 0) {
    return true;
  }

  let first = 0;
  let second = 0;

  while (second < string2.length) { 
    if (string2.charAt(second) === string1.charAt(first)) {
      first++;
      if (first === string1.length) return true;
    }
    second++;
  }
  return false;
}

let string1 = "hello";
let string2 = "hello world";

// let string1 = "sing";
// let string2 = "sting";

console.log(isSubsequence(string1, string2));
