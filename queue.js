class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.front = null; // The front of the queue
        this.rear = null;  // The rear of the queue
        this.length = 0;   // The number of elements in the queue
    }

    // Enqueue a new value at the end of the queue
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.rear) { // If the queue is empty
            this.rear.next = newNode;

        }
        this.rear = newNode
        if (!this.front) { // If the queue is empty
            this.front = newNode;
        }
        this.size++;
    }
    // Dequeue the front value from the queue
    dequeue() {
        if (!this.front) return null; // Queue is empty
        let dequeuedNode = this.front.value;
        this.front = this.front.next;
        if (!this.front) { // If the queue becomes empty after dequeue
            this.rear = null;
        }
        this.length--;
        return dequeuedNode;
    }
}