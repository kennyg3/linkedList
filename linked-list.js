class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(value) {
    // Create a new node with the given value
    const newNode = new LinkedListNode(value, null);

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log('NULL');
  }
}

module.exports = LinkedList;
