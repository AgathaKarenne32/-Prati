// exercicio 7 da lista de exercicios

let produtos = [
   { nome: String,
    preco: Number
   }
]

function nomesOrdenadosPorPreco(produtos){
    let copia = produtos.slice();
    copia.sort((a,b) => a.preco - b.preco)

    let nomes = copia.map(prod => prod.nome)

    return nomes
}

let produtosex = [
    {
        nome: "Smart TV 4K",
        preco: 2500
    },
    {
        nome: "Fone de Ouvido Bluetooth",
        preco: 150
    },
    {
        nome: "Laptop Gamer",
        preco: 7000
    },
    {
        nome: "Mouse Sem Fio",
        preco: 80
    }
];

console.log("Produtos originais:", produtosExemplo);
console.log("Nomes ordenados por preço:", nomesOrdenadosPorPreco(produtosExemplo));
// Expected output: ["Mouse Sem Fio", "Fone de Ouvido Bluetooth", "Smart TV 4K", "Laptop Gamer"]