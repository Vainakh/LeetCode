//provided solution

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

const reverseRecursive = (string) => {
  if (string.length === 0) return "";
  return  string.slice(-1) + reverseRecursive(string.slice(0, -1));
}
let string = "awesome";

console.log(reverseRecursive(string));