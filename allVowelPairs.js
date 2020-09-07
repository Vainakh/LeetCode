// # Write a method, all_vowel_pairs, that takes in an array of words and returns all pairs of words
// # that contain every vowel. Vowels are the letters a, e, i, o, u. A pair should have its two words
// # in the same order as the original array.
// #
// # Example:
// #
// # all_vowel_pairs(["goat", "action", "tear", "impromptu", "tired", "europe"])   # => ["action europe", "tear impromptu"]


const allVowelPairs = (words) => {
  let vowels = "aeoui".split(""); 
  let pairs = [];

  for (let i = 0; i < words.length; i ++) {
    for (let j = i + 1; j < words.length; j ++) {
      let currentPair = words[i] + " " + words[j]; 
      let combined = vowels.every(letter => currentPair.includes(letter));
      if(combined){
        pairs.push(currentPair);
      }
    }
  }
  return pairs;
};

let words = ["goat", "action", "tear", "impromptu", "tired", "europe"];

console.log(allVowelPairs(words));