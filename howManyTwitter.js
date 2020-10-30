/*
 * Complete the 'howMany' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING sentence as parameter.
 */

function howMany(sentence) {
  // Write your code here
  let words = sentence.split(" ");//split the string into an array of substrings
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!-"; //all legal characters
  let validWordFlag;//valid word flag
  let validWords = [];
  let count;

  //iterate through each word in the sentence
  for (let i = 0; i < words.length; i++) {
    validWordFlag = true;//reset valid word flag
    //iterate through each character in the word
    for (let j = 0; j < words[i].length; j++) {
      //check if character is a legal character
        if (alphabet.includes(words[i][j])) {
           continue; // if it is, then continue to next character
        } else {
            validWordFlag = false;//found invalid character
            break;
        } 
    }
    if (validWordFlag) { //if word is valid then it is counted
      validWords.push(words[i]);
    } 
  }
  count = validWords.filter(Boolean).length;//filter out all empty strings
  return count;//return count of valid words 
}


// let sentence = "he is a good programmer, he won 865 competitions, but sometimes he dont. What do you think? All test-cases should pass. Done-done?"

// let sentence = "jds dsaf lkdf kdsa fkldsf, adsbf ldka ads? asd bfdal ds bf[l. akf dhj ds 878  dwa WE DE 7475 dsfh ds  RAMU 748 dj."//21

// let sentence = ")}OJR 92ww. z )UPl 49e ]S  g. zrZEnQ  D. FoKp ]ow 1EceB 3oK }w ]CA? L 3LPbDN! trqJY 0sBmm. Nwn"//8

let sentence = "b? Dl )B 4(V! A. MK, YtG ](f 1m )CNxuNUR {PG?" //5

console.log(howMany(sentence));