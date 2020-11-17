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
}

let newHash = new HashTable();
console.log(newHash);