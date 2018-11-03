/**
 * Queue
 * @author Abhishek Panda
 */

var LinkedList = require('../LinkedList');

function Queue() {
    this.data = new LinkedList();
}

Queue.prototype.isEmpty = function() {
    return !Boolean(this.data.getSize());
}

Queue.prototype.enqueue = function(data) {
    this.data.add(data);
}

Queue.prototype.dequeue = function() {
    var removedNode = this.data.removeAt(0);
    return removedNode.data;
}

Queue.prototype.getFront = function() {
    var frontNode = this.data.getRoot();
    return frontNode.data;
}

Queue.prototype.getRear = function() {
    var lastNode = this.data.getLast();
    return lastNode.data;
}

Queue.prototype.getSize = function() {
    return this.data.getSize();
}

Queue.prototype.toArray = function() {
    var allData = [];
    var node = this.data.getRoot();
    while(node != null) {
        allData.push(node.data);
        node = node.next;
    }
    return allData.join(',');
}

module.exports = Queue;