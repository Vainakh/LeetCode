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

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }
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
  }
  traverse() {
    let current = this.head;
    while(current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if(!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.next = this.head;
      this.head = newNode;
    }
      this.length++;
      return this;
  }
}

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");


let list = new SinglyLinkedList();
// console.log(list);
list.push("HELLO");
list.push("GOODBYE");
list.push("!")
// console.log(list);
// list.traverse();
// console.log(list);
// console.log(list.pop());
console.log(list.unshift("WOW"));