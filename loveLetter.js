const loveLetter = (L, N) => {
  let charMap = {};
  let count = 0;

  for (let i in L ) {
    let charCode = L.charAt(i);
    if (!charMap[charCode]) {
      charMap[charCode] = 0;
    } else {
      count += 1;
    }
    charMap[charCode] += 1;
  }

  for (let i in N) {
    let charCode = N.charAt(i);
    if (charMap[charCode] > 0) {
      charMap[charCode] -= 1;
    }
    if (charMap[charCode] === 0) {
      count -= 1;
    }
    if (count === 0) {
      return true;
    }
  }
  return false;
}

let L = "i love you";
let N = " uoy evol i";

console.log(loveLetter(L, N));