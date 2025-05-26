class node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

class LinkledList {
    constructor() {
        this.head = null;
    }

    inserirInicio(v) {
        let novo = new node(v)
        novo.proximo = this.head
        this.head = novo;
    }

    imprimir() {
        let atual = this.head
        let str = ""
        while (atual) {
            str += atual.value + " -> "
            atual = atual.next;
        }
        str += "null";
        console.log(str);
    }
}

let lista = new LinkledList();

lista.inserirInicio(10);
lista.inserirInicio(20);

lista.imprimir()

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    inserirInicio(v) {
        let novo = new node(v);
        novo.next = this.head;
        if (this.head) {
            this.head.prev = novo;
        }
        this.head = novo;
    }

    inserirFim(v) {
        let novo = new node(v);
        if (!this.head) {
            this.head = novo;
            this.tail = novo;
        } else {
            this.tail.next = novo;
            novo.prev = this.tail;
            this.tail = novo;
        }
        this.length++;
    }

    inserirAtualizacao(v, pos) {
        if (pos < 0 || pos >= this.length) {
            console.log("Posição inválida");
            return;
        }
        let novo = new node(v);
        if (pos === 0) {
            this.inserirInicio(v);
            return;
        }
        let atual = this.head;
        for (let i = 0; i < pos - 1; i++) {
            atual = atual.next;
        }
        novo.next = atual.next;
        novo.prev = atual;
        if (atual.next) {
            atual.next.prev = novo;
        } else {
            this.tail = novo;
        }
        atual.next = novo;
        this.length++;
    }
}