class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
    	if (this.parent === null){
    		this.parent = node;
		}

         else if (this.left === null) {
			this.left = node;

        }
        if (this.right === null) {
			this.right = node;

        }

    }

    removeChild(node) {

    }

    remove() {

    }

    swapWithParent() {

    }
}

module.exports = Node;
