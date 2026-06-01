"use strict";

console.log("Exemplo 1: while (enquanto):");
// Lógica: enquanto uma condição for VERDADEIRA, faça/executa ações/processos.

// Variável de controle de repetição (contadora)
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++; // Atualiza o valor da variávl de controle (incrementa);
}

console.log("\nExemplo 2: for (para):");
// Lógica: execute uma série de ações a partir de um valor inicial até um valor final.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\nExemplo 3: loop para acessar ARRAY:");
// Lógica: execute ações enquanto existir dados no array.

let pecasXadrez = ["Pião", "Dama", "Rei", "Bispo"];

/* Começamos em ZERO obrigatóriamente,
e a condição de repetição é enquanto o "i" for menor
que a quantidade de elementos do array 

Propriedade lenght: comprimento/tamanho/quantidade de elementos.*/

// Boa prática guardar o tamanho do array ANTES de iniciar o loop.
let tamanho = pecasXadrez.length; // cache (memória)

for(let i = 0; i < tamanho; i++){
    console.log(pecasXadrez[i]);
}

console.log("\nExemplo 4 for/of: loop específico para ARRAY:");
const alunos = ["Marcelo", "Alexandre", "Emillye", "Yuri", "Raquel"];

// Lógica: acessando cada aluno a partir do array alunos
for(const aluno of alunos){
    console.log("Alunos repravados: " + aluno);
}

console.log("\nExemplo 5 for/in: loop específico para OBJETO:");
const pessoa = {
    nome: "Seu Madruga",
    idade: 66,
    cidade: "São Paulo"
}

// Lógica: acessando as propriedades do objeto pessoa
for(const propriedade in pessoa) {
    console.log(pessoa[propriedade]); // traz os valores.
}