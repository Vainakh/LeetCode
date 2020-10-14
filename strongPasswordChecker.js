// 420. Strong Password Checker
// Hard

// 228

// 717

// Add to List

// Share
// A password is considered strong if below conditions are all met:

// It has at least 6 characters and at most 20 characters.
// It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
// It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
// Write a function strongPasswordChecker(s), that takes a string s as input, and return the MINIMUM change required to make s a strong password. If s is already strong, return 0.

// Insertion, deletion or replace of any one character are all considered as one change.


var strongPasswordChecker = function(s) {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  let capChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let digits = "1234567890";

  //length
  if (s.length < 6 || s.length > 20) {
   return false 
  }

  //contains lowercase char
  // for (let i = 0; i <= s.length; i ++) {
  //   console.log(s[i]);
  //   for (let j = 0; j <= chars.length; j += 1) {
  //     console.log(chars[j]);
  //     if (!s.includes(chars[j]) || ((chars[j]) === chars[j - 1] && char[j] === chars[j + 1])) {
  //       return false;
  //     // } else {
  //     //   return true;
  //     }
  //   }
  // }

  //contains uppercase char
  for (let i = 0; i <= s.length; i ++) {
    console.log(s[i]);
    for (let k = 0; k <= capChars.length; k += 1) {
      console.log(capChars[k]);
      if (!s.includes(chars[k]) || ((chars[k]) === chars[k - 1] && char[k] === chars[k + 1])) {
        return false;
      // } else {
      //   return true;
      }
    }
  }

  // //contains digit
  // for (let i = 0; i <= s.length; i ++) {
        console.log(s[i]);
  //   for (let y = 0; y <= digits.length; y += 1) {
          console.log(digits[y])
  //     if (!s.includes(chars[y]) || ((chars[y]) === chars[y - 1] && char[y] === chars[y + 1])) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // }

  // return true;

};

let s = "Fomalgaut1";

console.log(strongPasswordChecker(s));