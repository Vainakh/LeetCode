class Node {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } 

    let current = this.root;
      while (true) {
      if (value === current.value) return false;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } 
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
    
    return this;
  }
}

let tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(5));
console.log(tree.insert(13));
console.log(tree.insert(11));
console.log(tree.insert(2));
console.log(tree.insert(16));
console.log(tree.insert(7));
console.log(tree.insert(3));
// console.log(tree.insert(3));
console.log(tree);
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree);
// console.log(tree.root);
// console.log(tree.root.right);
// console.log(tree.root.left);
// console.log(tree.insert(100));