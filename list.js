'use strict';

// This is a constructor function
class Node {
    constructor(data) {
        this.payload = data;
        this.next = null;
    }
}
// This is the same as above
// function Node (data) {
//   this.payload = data
// }
const h = new Node('hello');
const w = new Node('world');

// console.log(h, w);

class List {
  constructor () {
    this.head = null
    this.tail = null
  }

  add (node) {
    if (this.head) {
      this.tail.next = node
      this.tail = node
    } else {
      this.head = node
      this.tail = node
    }
  }
}

const list = new List
list.add(new Node('A'))
list.add(new Node('B'))
list.add(new Node('C'))
list.add(new Node('D'))
list.add(new Node('E'))
list.add(new Node('F'))
console.log(list)


