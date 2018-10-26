/**
 * LinkedList
 * @author Abhishek Panda
 */

var LinkedList = (function () {
    
    function _Node(data) {
        this.data = (data === undefined || data === '') ? null : data;
        this.next = null; 
    }

    function _cloneNode(node) {
        return JSON.parse(JSON.stringify(node));
    }

    function add(value) {
        var newNode = new _Node(value);
        if(this.root === null) {
            this.root = newNode;
        } else {
            var node = this.root;
            while(node.next){
                node = node.next;
            }
            node.next = newNode
        }
    }

    function addAt(index, value) {
        var node = this.root;
        var newNode = new _Node(value);
        var position = 0;
        if(node) {
            if(index < 1) {
                newNode.next = this.root;
                this.root = newNode;
            } else {
                while(node.next) {
                    position++;
                    if(position === index) {
                        newNode.next = node.next;
                        node.next = newNode;
                        break;
                    }
                    node = node.next;
                }
                node.next = newNode;
            }
        } else {
            this.root = newNode;
        }
    }

    function remove(value) {
        var prev = null;
        var node = this.root;
        var removeNode = false;
        while (node) {
            if(node.data === value) {
                if(prev) {
                    prev.next = node.next;
                } else {
                    this.root = node.next;
                }
                removeNode = true;
                break;
            }
            prev = node;
            node = node.next;
        }
        return removeNode;
    }

    function removeAt(index) {
        var node = this.root,
            prev = null,
            nodeToRemove = null,
            removedNode = null,
            position = 0;
        if(index >= 0) {
            while(node) {
                if(index === 0) {
                    this.root = node.next;
                    nodeToRemove = node;
                    break;
                } else {
                    if(position === index) {
                        nodeToRemove = node;
                        prev.next = node.next;
                        break;
                    }
                }
                prev = node;
                node = node.next;
                position++;
            }
        }

        if(nodeToRemove) {
            var copyNode = _cloneNode(nodeToRemove);
            copyNode.next = null;
            removedNode = copyNode;
        }
        return removedNode;
    }

    function search(value) {
        var node = this.root;
        var position = - 1;
        var foundAt = -1;
        while(node) {
            position++;
            if(node.data === value) {
                foundAt = position;
            }
            node = node.next;
        }
        return foundAt;
    }

    function makeLoop(fromIndex, toIndex) {
        var node = this.root;
        var toNode, fromNode;
        var position = 0;
        while(node) {
            if(toIndex === position) {
                toNode = node;
            }
            if(fromIndex === position){
                fromNode = node;
            }
            node = node.next;
            position++;
        }
        if(toNode && fromNode) {
            fromNode.next = toNode;
            return true;
        }
        return false;
    }

    function getRoot() { return this.root; }

    function getSize() {
        var node = this.root,
            length = 0;
        while(node) {
            length++;
            node = node.next;
        }
        return length;
    }

    function toString() { return JSON.stringify(this.root); }

    function BaseLinkedList() {
        this.root = null;
    }
    
    BaseLinkedList.prototype.add = add;
    BaseLinkedList.prototype.addAt = addAt;
    BaseLinkedList.prototype.remove = remove;
    BaseLinkedList.prototype.removeAt = removeAt;
    BaseLinkedList.prototype.search = search;
    BaseLinkedList.prototype.makeLoop = makeLoop;
    BaseLinkedList.prototype.getRoot = getRoot;
    BaseLinkedList.prototype.getSize = getSize;
    BaseLinkedList.prototype.toString = toString;

    return BaseLinkedList;

})();

module.exports = LinkedList;