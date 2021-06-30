class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    // Your code here
  }

  addToHead(val) {
    const newNode = new DoublyLinkedListNode(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    // let current = this.tail;
    // while (current.next) {
    //   current = current.next;
    // }
    // current.next = newNode;
  }

  addToTail(val) {
    // O(1)
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log('NULL');
  }
}

module.exports = DoublyLinkedList;
