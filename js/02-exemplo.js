// Modo estrito da linguagem
/* Sem a declaração abaixo, corremos o risco de esquecer de declarar explicitamente variáveis e constantes (ou seja, usar let e const) e também de usar palavras-chave (reserved words) da linguagem. */
"use strict"

console.log("Este é um JS externo!!");
console.log("A programação feita aqui será acessada pela página HTML");

// Usando uma variável sem DECLARAR (sem let)

aluno="fulano";
console.log(aluno); //erro, pois não usamos let

// Usar palavras-chave reservadas

let public = "Qualquer coisa";
console.log(public);   // erro, pois public é reservada

