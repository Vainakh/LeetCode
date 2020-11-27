const reverseRecursive = (string) => {
  if (string.length === 0) return "";
  return  string.slice(-1) + reverseRecursive(string.slice(0, -1));
}
let string = "awesome";

console.log(reverseRecursive(string));