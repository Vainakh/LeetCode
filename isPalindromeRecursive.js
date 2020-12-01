//function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
//   return false;
// }

const isPalindromeRecursive = (string) => {
  if (string.length === 0) return "";
  if (string.length === 1) return true;
  if (string.length === 2 && string[0] === string[1]) return true;

  if (string.slice(0,1) !== string.slice(-1)) {
    return false;
  } 
  let str = string.substring(1,string.length -1)
  return isPalindromeRecursive(str);  
}

let string = "level";

console.log(isPalindromeRecursive(string));
console.log(isPalindromeRecursive('awesome')) // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false