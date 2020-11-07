// 500. Keyboard Row
// Easy

// 582

// 714

// Add to List

// Share
// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.
 
// Example:

// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]
 

// Note:

// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.
// Accepted
// 117,534
// Submissions
// 180,216

const findWords = (array) => {
  
    return array.filter((w) => {
        // remove word from array if it fails matching all three rows
        if (
            !/^[qwertyuiop]*$/i.test(w) &&
            !/^[asdfghjkl]*$/i.test(w) &&
            !/^[zxcvbnm]*$/i.test(w)
        ) return false;
        
        return true;
    })
};

let array = ["Hello", "Alaska", "Dad", "Peace"];//["Alaska", "Dad"]

console.log(findWords(array))