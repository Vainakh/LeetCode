// accepts two string -> a message and some letters. return true if message can be built from letters given or return false;

const constructNote = (message, letters) => {
  let M = message.length;//3
  let N = letters.length;//4

  let newObj = {};
  for (let character in message) {
    if (!newObj[message[character]]) {
      newObj[message[character]] = 1;
    } else {
      newObj[message[character]] += 1;
    }  
  }

  for (let letter in letters) {
    if (newObj[letters[letter]]) {
      newObj[letters[letter]] --;
    } 
  }
  
  return Object.values(newObj).every((value) => value === 0); 
}

let message = "abcc";
let letters = "abcc";

console.log(constructNote(message, letters))