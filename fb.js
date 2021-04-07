const isPalindrome = (string) => {
  for(let i = 0 ; i < string.length / 2 ; i++) {
    if(string.charAt(i) != string.charAt(string.length - i - 1))
    return false;
  }

return true;
}

let string = 'abcba'

console.log(isPalindrome(string));


