// 859. Buddy Strings
// Easy

// 786

// 537

// Add to List

// Share
// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false
 

// Constraints:

// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist of lowercase letters.

const buddyStrings = (string, string1) => {
  let idxArray = [];
    let temp;
    let array = string.split("");
    let array1 = string1.split('');
    if (string.length <= 1 || string1.length <= 1) {
       return false; 
    }
    if (array.every((el) => {
        return array[0] === el
    }) && (array1.every((el) => {
        return array1[0] === el
    })) && (string === string1)) {
        return true;
    }
    
    for (let i = 0; i < array.length; i++) { 
        if (string[i] !== string1[i]) {
            idxArray.push(i);
        } 
    } 
    let idx1 = idxArray[0];
    let idx2 = idxArray[1];
    temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    temp;
    
    let isUnique = [...new Set(string)];
    if (string.length > 2 && string === string1 && isUnique.length === string.length) {
       return false; 
    }
    if (string === string1 && string.length === 2) {
        return false;
    }
    
    if (string.length > 2 && string === string1 ) {
        return true;
    } 
    
    if (array.join("") === string1) {
        return true;
    }
    
    return false;
}

let first1 = "aaaa";
let second1 = "aaaa";
//true;


let first2 = "ab";
let second2 = "ba";
//true

let first3 = "ab";
let second3 = "ab";
//false

let first4 =  "aaaaaaabc"; 
let second4 = "aaaaaaacb";
// //true

let first5 = "";
let second5 = "aa";
//false

let first6 = "aa";
let second6 = "aa";
//true

let first7 = "abcaa";
let second7 = "abcbb";
//false

let a = buddyStrings(first1, second1);//true
let b = buddyStrings(first2, second2);//true
let c = buddyStrings(first3, second3);//false
let d = buddyStrings(first4, second4);//true
let e = buddyStrings(first5, second5);//false
let f = buddyStrings(first6, second6);//true
let g = buddyStrings(first7, second7);//false
console.log(a, b, c, d, e, f, g);

