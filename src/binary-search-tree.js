const {NotImplementedError} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.found = false;
    }
}

class BinarySearchTree {
    constructor() {
        this.data = null;
    }

    root() {
        return this.data;
    }

    add(data) {

        let curRoot = new Node(data)
        if (this.data == null) this.data = curRoot;
        else {
            // this.addNode(this.data, curRoot)
            let current = this.data;
            while (current) {
                if (data === current.data) return undefined;
                if (data < current.data) {
                    if (current.left === null) {
                        current.left = curRoot;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (current.right === null) {
                        current.right = curRoot;
                        return this;
                    }
                    current = current.right;
                }
            }

        }
    }


    postorder(root, value) {
        if (root) {
            if (root.data === value) {
                this.found = true
            }
            this.postorder(root.left, value)
            this.postorder(root.right, value)
        }

    }

    has(value) {
        this.found = false;
        let head = this.data
        this.postorder(head, value)
        return this.found;
    }

    find(value) {
        if (!this.data) return false;
        let current = this.data;
        while (current) {
            if (value > current.data) current = current.right;
            else if (value < current.data) current = current.left;
            else if (current.data === value) return current;
        }
        return null;
    }

    remove(value) {
        this.data = this.removeNode(this.data, value)
    }

    removeNode(node, value) {
        if (node === null) return node;
        else if (value > node.data) node.right = this.removeNode(node.right, value)
        else if (value < node.data) node.left = this.removeNode(node.left, value)
        else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }

            node.data = this.max(node.right)
            node.right = this.removeNode(node.right, node.data)

        }
        return node;
    }


    min() {
        let curNode = this.data;
        let maxValue = Number.MAX_VALUE;
        while (curNode) {
            if (curNode.data < maxValue) maxValue = curNode.data;
            curNode = curNode.left;
        }
        return maxValue;
    }

    max() {
        let curNode = this.data;
        let maxValue = Number.MIN_VALUE;
        while (curNode) {
            if (curNode.data > maxValue) maxValue = curNode.data;
            curNode = curNode.right;
        }
        return maxValue;
    }
}

module.exports = {
    BinarySearchTree
};

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(2);
// tree.add(6);
// tree.add(128);
// tree.add(8);
// tree.add(31);
// tree.add(54);
// tree.add(1);
//
// console.log(tree.has(54));

