class node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null; // Added 'prev' for doubly linked list
    }
}

class LinkedList { // Renamed from LinkledList for consistency
    constructor() {
        this.head = null;
        this.length = 0; // Added length for consistency
    }

    inserirInicio(v) {
        let novo = new node(v);
        novo.next = this.head;
        // No 'prev' handling needed for a singly linked list here
        this.head = novo;
        this.length++;
    }

    imprimir() {
        let atual = this.head;
        let str = "";
        while (atual) {
            str += atual.value + " -> ";
            atual = atual.next;
        }
        str += "null";
        console.log(str);
    }
}

let lista = new LinkedList();

lista.inserirInicio(10);
lista.inserirInicio(20);
lista.imprimir(); // Output: 20 -> 10 -> null

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Inserts a new node at the beginning of the list
    inserirInicio(v) {
        const novo = new node(v);
        if (!this.head) { // If the list is empty
            this.head = novo;
            this.tail = novo;
        } else {
            novo.next = this.head;
            this.head.prev = novo;
            this.head = novo;
        }
        this.length++;
        return this; // Return the list for chaining
    }

    // Inserts a new node at the end of the list
    inserirFim(v) {
        const novo = new node(v);
        if (!this.head) { // If the list is empty
            this.head = novo;
            this.tail = novo;
        } else {
            this.tail.next = novo;
            novo.prev = this.tail;
            this.tail = novo;
        }
        this.length++;
        return this; // Return the list for chaining
    }

    // Inserts a new node at a specific position (index)
    inserirEmPosicao(v, index) {
        if (index < 0 || index > this.length) {
            console.log("Posição inválida para inserção.");
            return null; // Or throw an error
        }
        if (index === 0) {
            return this.inserirInicio(v);
        }
        if (index === this.length) {
            return this.inserirFim(v);
        }

        const novo = new node(v);
        let atual = this.head;
        for (let i = 0; i < index - 1; i++) {
            atual = atual.next;
        }
        // At this point, 'atual' is the node BEFORE the insertion point

        novo.next = atual.next;
        if (atual.next) { // Ensure there is a next node to update its 'prev'
            atual.next.prev = novo;
        }
        atual.next = novo;
        novo.prev = atual;

        this.length++;
        return this; // Return the list for chaining
    }

    // Prints the list from head to tail
    imprimir() {
        if (!this.head) {
            console.log("null");
            return;
        }
        let atual = this.head;
        let str = "";
        while (atual) {
            str += atual.value + " <-> ";
            atual = atual.next;
        }
        str += "null";
        console.log(str);
    }

    // Prints the list from tail to head (useful for doubly linked lists)
    imprimirReverso() {
        if (!this.tail) {
            console.log("null");
            return;
        }
        let atual = this.tail;
        let str = "null";
        while (atual) {
            str = atual.value + " <-> " + str;
            atual = atual.prev;
        }
        console.log(str);
    }
}

console.log("\n--- Doubly Linked List Examples ---");
let dblLista = new DoublyLinkedList();

dblLista.inserirFim(100);
dblLista.inserirInicio(50);
dblLista.inserirFim(200);
dblLista.inserirEmPosicao(150, 2); // Insert 150 at index 2 (between 100 and 200)

console.log("List from head to tail:");
dblLista.imprimir(); // Output: 50 <-> 100 <-> 150 <-> 200 <-> null
console.log("List from tail to head:");
dblLista.imprimirReverso(); // Output: null <-> 200 <-> 150 <-> 100 <-> 50

console.log("Length of the list:", dblLista.length); // Output: 4

dblLista.inserirEmPosicao(0, 0); // Insert at the beginning
dblLista.inserirEmPosicao(300, 5); // Insert at the end

console.log("\nList after more insertions:");
dblLista.imprimir(); // Output: 0 <-> 50 <-> 100 <-> 150 <-> 200 <-> 300 <-> null
console.log("Length of the list:", dblLista.length); // Output: 6

removerFim = (lista) => {
    if (!lista.head) {
        console.log("A lista está vazia.");
        return null;
    }
    const valorRemovido = lista.tail.value;
    if (lista.head === lista.tail) { // Only one element
        lista.head = null;
        lista.tail = null;
    } else {
        lista.tail = lista.tail.prev;
        lista.tail.next = null;
    }
    lista.length--;
    return valorRemovido; // Return the removed value
}
removerInicio = (lista) => {
    if (!lista.head) {
        console.log("A lista está vazia.");
        return null;
    }
    const valorRemovido = lista.head.value;
    if (lista.head === lista.tail) { // Only one element
        lista.head = null;
        lista.tail = null;
    } else {
        lista.head = lista.head.next;
        lista.head.prev = null;
    }
    lista.length--;
    return valorRemovido; // Return the removed value
}
removerEmPosicao = (lista, index) => {
    if (index < 0 || index >= lista.length) {
        console.log("Posição inválida para remoção.");
        return null; // Or throw an error
    }
    if (index === 0) {
        return removerInicio(lista);
    }
    if (index === lista.length - 1) {
        return removerFim(lista);
    }

    let atual = lista.head;
    for (let i = 0; i < index; i++) {
        atual = atual.next;
    }
    
    const valorRemovido = atual.value;
    atual.prev.next = atual.next;
    if (atual.next) { // Ensure there is a next node to update its 'prev'
        atual.next.prev = atual.prev;
    }
    
    lista.length--;
    return valorRemovido; // Return the removed value
}
console.log("\n--- Removing Elements from Doubly Linked List ---");
console.log("Removed from end:", removerFim(dblLista)); // Output: 300
console.log("Removed from start:", removerInicio(dblLista)); // Output: 0
console.log("Removed from position 2:", removerEmPosicao(dblLista, 2)); // Output: 100
console.log("List after removals:");