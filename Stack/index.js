/**
 * Stack
 * @author Abhishek Panda
 */
var LinkedList = require('../LinkedList'); 
 
function Stack() {
    this.data = new LinkedList();
}

Stack.prototype.push = function(data) {
    this.data.add(data);
}

Stack.prototype.pop = function() {
    var lastPosition = this.data.getSize() - 1;
    var removedNode = this.data.removeAt(lastPosition);
    return removedNode.data;
}

Stack.prototype.isEmpty = function() {
    return !Boolean(this.data.getSize());
}

Stack.prototype.getPeek = function() {
    var peekNode = this.data.getLast();
    return peekNode.data;
}

Stack.prototype.getSize = function() {
    return this.data.getSize();
}

Stack.prototype.toArray = function() {
    var allData = [];
    var node = this.data.getRoot();
    while(node != null) {
        allData.push(node.data);
        node = node.next;
    }
    return allData.join(',');
}

module.exports = Stack;