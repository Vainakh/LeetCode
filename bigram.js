// # A bigram is a string containing two letters.
// # Write a method, find_bigrams, that takes in a string and an array of bigrams.
// # The method should return an array containing all bigrams found in the string.
// # The found bigrams should be returned in the the order they appear in the original array.
// #
// # Examples:
// #
// # find_bigrams("the theater is empty", ["cy", "em", "ty", "ea", "oo"])  # => ["em", "ty", "ea"]
// # find_bigrams("to the moon and back", ["ck", "oo", "ha", "at"])        # => ["ck", "oo"]

const bigram = (string, bigrams) => {
  let matches = bigrams.filter((bigram) => string.includes(bigram));
  return matches;
};

// let string = "the theater is empty";
// let bigrams = ["cy", "em", "ty", "ea", "oo"];

let string = "to the moon and back";
let bigrams = ["ck", "oo", "ha", "at"];

console.log(bigram(string, bigrams));