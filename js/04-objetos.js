"use strict";

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1:");
const pessoa = {
    // Propriedade: valor 
    nome: "Chapolin Colorado",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    "Empresa que trabalha": "Senac"
};

// Acesso direto (pra programador)
console.log(pessoa);

// Acesso a cada propriedade (sintaxe usando .)
console.log(pessoa.nome);
console.log(pessoa.idade + "anos");

console.log(pessoa["nome"]); // usando [] menos comum
console.log(pessoa["Empresa que Trabalha"]);// [] obrigatório

console.log("\n---"); //Gambiarra pra pular linha

console.log("\nExemplo 2:");
const livro = {
    titulo: "O senhor dos Anéis",
    autor: "J.R.R Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);
console.log(`${livro.titulo} é famoso`);
console.log(`${livro.volumes[0]} é o primeiro livro`);

// Exemplo 3: array de objetos
console.log("\nExemplos 3");

let livros = [
    {
        id: 1,
        titulo: "O Homem de Giz",
        anoLancamento: 2011
    },
    {
        id: 2,
        titulo: "O Pequeno Princípe",
        anoLancamento: 1947
    }, 
    {
        id: 3,
        titulo: "Duna",
        anoLancamento: 1965
    }
]


console.log(livros);
console.log(livros[0].id, livros[0].titulo, livros[0].anoLancamento);
//Mini-exercício
/*Acesse adequadamente os dados do array livros e mostre a mensagem:

Os livros Homem de Giz e Duna são titulo famosos na literatura. Respectivamente, foram
lançados em 2011 e 1965.
*/

let [livro1, livro2, livro3] = livros;
let frase = `Os livros ${livro1.titulo.replace('O', '')} e ${livro3.titulo} são titulo famosos na literatura. Respectivamente, foram 
lançados em ${livro1.anoLancamento} e ${livro3.anoLancamento}.`;
console.log(frase);
