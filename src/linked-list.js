const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node(null, null, this._tail);
        this._tail = new Node (null, this._head, null);
    }

    append(data) {
        let oldNode = this._tail.prev;
        let newNode = new Node(data, oldNode, this._tail);
        this.length++;
        oldNode.next = newNode;
        this._tail.prev = newNode;
        return this;
    }

    head() {
        let node = this._head.next;
        return node.data;
    }

    tail() {
        let node = this._tail.prev;
        return node.data;
    }

    at(index) {
        let currentNode = this._head;
        let num = 0;
        while (num <= index && num < this.length){
            currentNode = currentNode.next;
            num++;
        }
        if (index <= this.length) return currentNode.data;
        else throw "Error: there are no such index";
    }

    insertAt(index, data) {
        let currentNode = this._head;
        let num = 1;
        while (num <= index && num < this.length){
            currentNode = currentNode.next;
            num++;
        }
        let oldNode = currentNode;
        let newNode = new Node(data, currentNode, currentNode.next);
        this.length++;
        currentNode.next = newNode;
        currentNode.next.prev = newNode;

    }

    isEmpty() {
        if (this.length == 0) return true;
        else return false;
    }

    clear() {
        this.length = 0;
        this._head = new Node(null, null, this._tail);
        this._tail = new Node (null, this._head, null);
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        let num = 0;
        while (num <= index && num < this.length){
            currentNode = currentNode.next;
            num++;
        }
        let previous = currentNode.prev;
        let next = currentNode.next;
        previous.next = next;
        next.prev = previous;
        this.length--;
        return this;

    }

    reverse() {
        let currentNode = this._head;
        let lastNode = this._tail;

        let num = 0;
        let buf;
                
        while ( num <Math.floor (this.length/2)){
            currentNode = currentNode.next;
            lastNode = lastNode.prev
            buf = currentNode.data;
            currentNode.data = lastNode.data;
            lastNode.data = buf;
            
            num++;
        }
        return this;
  
    }

    indexOf(data) {
        let currentNode = this._head;
        let num = -1;
        while (currentNode.data != data && num < this.length){
            currentNode = currentNode.next;
            num++;
        }
        if (currentNode.data == data) return num--;
        else return -1;
    }
}

module.exports = LinkedList;
