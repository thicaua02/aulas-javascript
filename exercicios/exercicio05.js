"use strict";

let desconto = 0;
let valor = 400;
let valorDescontado;
let valorEconomico;

if (valor > 300) {
    desconto = 0.2;
}
else if (valor > 100){
    desconto = 0.1;
}

valorEconomico = valor * desconto;
valorDescontado = valor - valorEconomico;

console.log("Valor da compra: " + "R$" + valor)
console.log("Desconto de: " + desconto * 100 + "%")
console.log("Valor final da compra: " + "R$" + valorDescontado);
console.log("Economizou: " + "R$" + valorEconomico);
