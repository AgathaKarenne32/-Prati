/*stack aula 16*/
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    // Push a new value onto the stack
    push(value) {
        let newNode = Node(value);
        newNode.next = this.top
        this.top = newNode;

    }
    // Pop the top value off the stack
    pop() {
        if (!this.top) return null; // Stack is empty
        let poppedNode = this.top.value;
        this.top = this.top.next
        return poppedNode.value;
    }

    //uma função que de o topo da pilha
    peek() {
        if (!this.top) return null; // Stack is empty
        return this.top.value;
    }
    // Check if the stack is empty
    isEmpty() {
        return this.top === null; // Return true if the stack is empty
    }
    size() {
        return this.top; // Return the number of elements in the stack
    }
}