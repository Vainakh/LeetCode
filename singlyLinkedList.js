//piece of data - val;
//reference to the next node - next;

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// class SinglyLinkedList {
//   constructor() {
//     this.head = 0;
//     this.tail = 0;
//     this.length = 0;
//   }
//   push(val) {
    
//   }
// }


// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }


// class SinglyLinkedList {
//   constructor() {
//     this.head = 0;
//     this.tail = 0;
//     this.length = 0;
//   }
//   push(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   traverse() {
//     let current = this.head;
//     while(current) {
//       console.log(current.val);
//       current = current.next;
//     }
//   }
//   pop() {
//     if(!this.head) return undefined;
//     let current = this.head;
//     let newTail = current;
//     while(current.next) {
//       newTail = current;
//       current = current.next;
//     }
//     this.tail = newTail;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return current;
//   }
//   
//   get(index) {
//   let count = 0;
//   let current = this.head;
//   if (index < 0 || index >= this.length) return null;
//   while (index !== count) {
//     current = current.next;
//     count++;
//   }
//   return current;
//   }
//   set(index, val) {
//     let foundNode = this.get(index);
//     if (foundNode) {
//       foundNode.val = val;
//       return true;
//     }t
//     return false;
//   }
//   insert(index, val) {
//     if (index < 0 || index > this.length) return false;
//     if (index === this.length) return !!this.push(val);
//     if (index === 0) return !!this.unshift(val);

//     let newNode = new Node(val);
//     let prev = this.get(index - 1);
//     let temp = prev.next;
//     prev.next = newNode;
//     newNode.next = temp;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     if (index === this.length - 1) return this.pop();
//     if (index === 0) return this.shift();
//     let prevNode = this.get(index - 1);
//     let removed = prevNode.next;
//     prevNode.next = removed.next;
//     this.length--;
//     return removed;
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
//   print() {
//     let arr = [];
//     let current = this.head;
//     while (current) {
//       arr.push(current.val);
//       current = current.next;
//     }
//     console.log(arr);
//   }
// }

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");


// let list = new SinglyLinkedList();
// console.log(list);
// list.push(100);
// list.push(201);
// list.push(250);
// list.push(350);
// list.push(999);
// console.log(list);
// console.log(list.print());

// Big O complexity: 

// Insertion = O(1);
// Removal = O(1) || O(n);
// Searching = O(n);
// Access = O(n);

// If compared to arrays then LinkedLists are good alternative to insertion and deletion at the beginning. Attays have build in index whereas SinglyLinkedLists dont 


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };
  // traverse(){
    //         let current = this.head;
    //         while(current) {
    //             console.log(current.val);
    //             current = current.next;
    //         }
    //     }
    pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      length--;
      return current;
    }
    shift() {
      if (this.length === 0) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = 0;
      }
      return currentHead;
    }
    unshift(val) {
      let newNode = new Node(val);
      if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
    get() {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
    set(index, value) {
      let position = this.get(index);
      if (position) {
        position.val = value;
        return true;
      }
      return false;
    }
};

let list = new SinglyLinkedList();
list.push("Hello!");
list.push("Goodbye!");

