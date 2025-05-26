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