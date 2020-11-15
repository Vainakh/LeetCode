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
  find(value) {
  //   let current = this.root;
  //   let newNode = new Node(value);
  //   let found = false;
  //   if (!this.root) return false;
  //   if (current.value === newNode.value) {
  //     return newNode.value;
  //   } else {
  //     if (value > current.value) {
  //       if (current.right) {
  //         current = current.right;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       if (value < current.value) {
  //         current = current.left;
  //       } else {
  //         return false;
  //       }
  //     } 
  //   }
   
    let current = this.root;
    let found = false;
    if (!this.root) return false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
  BFS() {
    let data = [],
       queue = [],
       node = this.root;
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreOrder() {
    let data = [];
    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

//            10
//        6       15
//     3     8        20

//Insertion - O(log n);
//Searching - O(log n);

let tree = new BinarySearchTree();
console.log(tree.insert(10));
console.log(tree.insert(6));
console.log(tree.insert(15));
console.log(tree.insert(3));
console.log(tree.insert(8));
console.log(tree.insert(20));

// console.log(tree.insert(3));
// console.log(tree.find(7));
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.log(tree);
// console.log(tree.root);
// console.log(tree.root.right);
// console.log(tree.root.left);
// console.log(tree.insert(100));
// console.log(tree.BFS());
console.log(tree);
console.log(tree.DFSPreOrder());//[10, 6, 3, 8, 15, 20]; root then right then left
console.log(tree.DFSPostOrder());//[3, 8, 6, 20, 15, 10]; first traverse entire tree first right then left then node
console.log(tree.DFSInOrder());//[3, 6, 8, 10, 15, 20]