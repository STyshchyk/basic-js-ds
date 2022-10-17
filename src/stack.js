const {NotImplementedError} = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
        this.item = []
    }

    push(value) {
        return this.item.push(value)
    }

    pop(value) {
        return this.item.pop(value)
    }

    peek() {
        return Math.max(...this.item)
    }
}

module.exports = {
    Stack
};

