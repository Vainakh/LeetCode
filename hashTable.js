class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let weirdPrime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    } 
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }  
      } 
    } 
    return "There isnt such key...try again!";
  }
  values() {
    let valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArray;
  }
  keys() {
    let keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}

//on set
// let newHash = new HashTable(4);
// console.log(newHash.set("hello world", "goodbye!!"));
// console.log(newHash.set("dogs", "are cool"));
// console.log(newHash.set("cats", "are fine"));
// console.log(newHash.set("i love", "pizza"));
// console.log(newHash.set("hi", "bye"));
// console.log(newHash);

//on get
let newHash = new HashTable(17);
console.log(newHash.set("maroon", "#800000"));
console.log(newHash.set("yellow", "#FFFF00"));
console.log(newHash.set("olive", "808000"));
console.log(newHash.set("salmon", "FA8072"));
console.log(newHash.set("lightcoral", "#F08080"));
console.log(newHash.set("mediumvioletred", "#C71585"));
console.log(newHash.set("plum", "#DDA0DD"));
console.log(newHash.set("blue", "#DDA0DD"));
console.log(newHash.set("lightblue", "#DDA0DD"));
console.log(newHash.get("yellow"));
console.log(newHash.get("seethrough"));
console.log(newHash.get("maroon"));
console.log(newHash.values());
console.log(newHash.keys());