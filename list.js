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
    constructor() {
        this.head = null
    }
    add (node) {
        node.next = this.head;
        this.head = node;
    }
}

const list = new List
// console.log(list);
list.add(new Node('A'));
// console.log(list);
list.add(new Node('B'));
list.add(new Node('C'));
console.log(list);
console.log("First Item is ", list.head.payload);

