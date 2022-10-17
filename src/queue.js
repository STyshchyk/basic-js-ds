const {NotImplementedError} = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.value = null;
        this.next = null;
    }

    getUnderlyingList() {
        return this;
    }

    enqueue(val) {
        let node = new Node(val)
        if (!this.value) {
            this.value = val;
        } else {
            let current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    dequeue() {
        let returnval = this.value, current = this;
        current.value = this.next.value;
        current.next = this.next.next;
        return returnval;
    }
}

module.exports = {
    Queue
};
let newQ = new Queue();
newQ.enqueue(3)
newQ.enqueue(43)
newQ.enqueue(22)
newQ.dequeue()


console.log(newQ)

