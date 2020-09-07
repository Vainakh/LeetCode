const ceasarCipher = (words, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ".split("");
  
 
  let newWords = [];

  for (let j = 0; j < words.length; j++){
      let word = words[j];
    let newWord = [];

    for (let i = 0; i < word.length; i++){
      let oldIndex = alphabet.indexOf(word[i]);
      let newIndex = oldIndex + shift;
      let ciphered = alphabet[newIndex % 54];
      newWord.push(ciphered);
    }
    newWords.push(newWord);
  }
  
  return newWords.join("");
}


// let word = "Hello"
// let shift = 15;

let words = "Hello World, my name is Adlan";
let shift = 0;


console.log(ceasarCipher(words, shift));