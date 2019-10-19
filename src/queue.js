const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		if (this.maxSize < 30){return maxSize}
		else  this.maxSize=30;
this.heap = new MaxHeap;

	}

	push(data, priority) {

	}

	shift() {
this.heap.pop()
	}

	size() {

	}

	isEmpty() {
		if (this.size() === null){return true}
	}
}

module.exports = PriorityQueue;
