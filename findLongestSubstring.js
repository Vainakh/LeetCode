// write a function calle findLongestSubstring , which accepts a string and returns the length of the longest substring with all distict characters. //time complexity O(n);

const findLongestSubstring = (string) => {
  let start = 0;
  let seen = {};
  let longest = 0;
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }

  return longest;
}

let a = findLongestSubstring("");//0
let b = findLongestSubstring("rithmschool");//7
let c = findLongestSubstring("thisisawesome");//6
let d = findLongestSubstring("bbbbbb");//1
let e = findLongestSubstring("longestsubstring");//8
let f = findLongestSubstring("thisisshowwedoit");//6

console.log(a, b, c, d, e, f)