class HashTable {
  constructor(size = 4) {
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
}

let newHash = new HashTable();
console.log(newHash.set("hello world", "goodbye!!"));
console.log(newHash.set("dogs", "are cool"));
console.log(newHash.set("cats", "are fine"));
console.log(newHash.set("i love", "pizza"));
console.log(newHash.set("hi", "bye"));
console.log(newHash);