"use strict";

// 1) Função anonima: criada/associada a uma constante
const exemplo1 = function(){
    console.log("Olá! Esta é uma função anônima");
}

// Chamar/Invocar a função
exemplo1();

/* Atenção: nessa sintaxe (função anônima) você deve 
PRIMEIRO declarar a função, para só depois chamá-la. */

// 2) Função nomeada/declarada: criada de forma livre

function exemplo2(){
    console.log("Oi! Esta é uma função declarada/nomeada");
}

exemplo2(); // chamada depois (funciona!)

// 3) Arrow Function (função flecha/seta): cria/associa a uma constante
const exemplo3 = () => {
    console.log("E aqui temos uma arrow function!");
}

/* Funções com parâmetros (ou argumentos)
Usamos parametros quando é necessário que a função receba
algum dado de entrada para realizar processamento.

Exemplo: uma função que calcula frete, precisaria receber dados como 
CEP de entrega, peso dos produtos etc. */


console.log("\nFunções com parametro/argumentos");

/*Parâmetro com valor padrão: declaramos o parametro e colocamos um valor nele
Caso nada seja passado na chamada da função, é esse valor que passa a ser usado */
function darUmaSaudacao(nome="Visitante") {
    console.log("Bem-vindo(a) " + nome);
}

darUmaSaudacao("Marcelo");
darUmaSaudacao("Gabriel");
darUmaSaudacao("Pérola");
darUmaSaudacao() // nesse caso, visitante passa a ser usado

/* Funções com parâmetro e RETORNO de resultado. */ 
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

console.log("Resultado 1: " + multiplicar(2, 2));
let resultado2 = multiplicar(10, 20); // recebendo/guardando o retorno da função
console.log("Resultado 2: " + resultado2);

// Formatar valores monetários
let preco = 5000;
let desconto = preco * 0.1;
let precoFinal = preco - desconto;

function formatarMoeda(valor, digitos=2) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: digitos
    }).format(valor);
}

console.log("Preço Inicial: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço Final: " + formatarMoeda(precoFinal));


console.log("\n\n");

// Versão 1: sintaxe normal (declarada/nomeada)
// function calcularDobro (valor) {
//    return valor * 2;
// }

// Versão 2: sintaxe ARROW FUNCTION
// const calcularDobro = (valor) => {
//     return valor * 2;
// }

// Versão 3: sintaxe ARROW FUNCTION com retorno implicito
/* Nesta versão, podemos omitir os parametros (pois há
somente UM parametro) e as chaves e return (pois há somente
uma única ação sendo feita). */
const calcularDobro = valor => valor * 2;

// Chamada da função
console.log(calcularDobro(10));

// Função callback (função como parametro de outra função)
const numeros = [10, 20, 5, 123];

// Versão 1: usando função callback nomeada/declarada
//const numerosMultiplicados = numeros.map(function (valor) {return valor * 3});

// Versão 2: usando função callback arrow function 
const numerosMultiplicados = numeros.map((valor) => {return valor * 3});

console.log(numeros);
console.log(numerosMultiplicados);