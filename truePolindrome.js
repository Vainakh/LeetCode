// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 

// Constraints:

// s consists only of printable ASCII characters.

var isPalindrome = function(s) {
  
  let ascii = "abcdefghijklmnopqrstuvwxyz";
  let lString = s.toLowerCase();
  let newString = "";
  let reversedString = "";

 

  for (let i = 0; i < lString.length; i++){
    for (let j = 0; j <= ascii.length; j++){
      if (lString[i].includes(ascii[j])){
        newString += lString[i];
      }
    }
  }

  for (let k = newString.length - 1; k >= 0; k--){
    reversedString += newString[k];
  }
  console.log(lString);
  console.log(newString);
  console.log(reversedString);
  return (newString === reversedString) ? true : false;
}


console.log(isPalindrome("0P"))