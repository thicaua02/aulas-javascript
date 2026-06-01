"use strict";

let quantidadeProdutos = 11;
let situacao;

if (quantidadeProdutos == 0) {
    situacao = "Estoque critico";
} 
else if (quantidadeProdutos <= 10) {
    situacao = "Estoque vazio";
}
else {
    situacao = "Estoque normal";
}

console.log(situacao);