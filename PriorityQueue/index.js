/**
 * Priroty Queue
 * @author Abhishek Panda
 */

var LinkedList = require('../LinkedList');

function PriorityQueue () {
    this.data = new LinkedList();
}

PriorityQueue.prototype.isEmpty = function() {
    return !Boolean(this.data.getSize());
}

PriorityQueue.prototype.enqueue = function(value, priority) {
    var data = {
        value: value,
        priority: priority
    };
    var node = this.data.getRoot();
    if(node === null) {
        this.data.add(data);
    } else {
        var position = 0;
        while(node !== null) {
            if(priority < node.data.priority){
                this.data.addAt(position, data);
                break;
            } else if(priority >= node.data.priority) {
                this.data.addAt(position + 1, data);
                break;
            }
            node = node.next;
            position++;
        }
    }
}

PriorityQueue.prototype.dequeue = function() {
    var removedNode = this.data.removeAt(0);
    return removedNode.data.value;
}

PriorityQueue.prototype.getFront = function() {
    var frontNode = this.data.getRoot();
    return frontNode.data.value;
}

PriorityQueue.prototype.getRear = function() {
    var lastNode = this.data.getLast();
    return lastNode.data.value;
}

PriorityQueue.prototype.getSize = function() {
    return this.data.getSize();
}

PriorityQueue.prototype.toString = function() {
    var allData = [];
    var node = this.data.getRoot();
    while(node != null) {
        allData.push(node.data.value);
        node = node.next;
    }
    return allData.join(',');
}

module.exports = PriorityQueue;