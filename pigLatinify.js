const  pigLatin = (sentence) => {
  let translatedWords = sentence.split(" ");
  
  let newSentence = [];
  for (let i = 0; i < translatedWords.length; i++){
    let currentWord = translatedWords[i];
   
    let newWord = translateWord(currentWord);
    
    newSentence.push(newWord);
  }
  return newSentence.join(" ");
}


const translateWord = (word) => {
  let sen = word.toLowerCase();
  let vowels = ["a","o", "i", "u", "e"];
  let vowelIdx = 0;

  if(vowels.includes(sen[0])){
    return word + "way";
  } else {
    for (let letter of word){
      if(vowels.includes(letter)){
        vowelIdx = word.indexOf(letter);
        break;
      }
    }
    return word.slice(vowelIdx) + word.slice(0, vowelIdx) + "ay";
  }
};

// let word = "Ahoi";
// console.log(translateWord(word));

let sentence = "Hello again oh wonderful beatiful world";
console.log(pigLatin(sentence));