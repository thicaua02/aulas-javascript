"use strict";

/* Funções/métodos de seleção de elementos:
getElementById, getElementByClasseName, getElementByTagName, 
querySelector, querySelectorAll. */

// Exemplo 01:

const somar = document.getElementById("somar");
const substrair = document.getElementById("subtrair");
const pValor = document.getElementById("valor");
let numero = 0;

// Monitorar o evento de clique nos botões
// Toda vez que acontecer o clique em um botão, alguma ação será feita.

// Iniciando o botão substrair com estado desabilitado
substrair.disabled = true;

somar.addEventListener("click", () => {
    numero++;
    pValor.textContent = numero;
    substrair.disabled = false;
});

substrair.addEventListener("click", () => {
    numero--;
    pValor.textContent = numero;
    if (numero == 0) {
        substrair.disabled = true;
    }
});


// Exemplo 02:
const imgFoto = document.querySelector('.foto');
const botoesDeFoto = document.querySelectorAll('[data-foto]');

console.log(imgFoto);
console.log(botoesDeFoto);

for(const botao of botoesDeFoto) {
    botao.addEventListener("click", ()=> {
        imgFoto.src = botao.getAttribute("data-foto");
        imgFoto.alt = botao.getAttribute("data-texto");
        console.log(imgFoto.alt);
    });
}

// Exemplo 03:
const textearea = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const contadorRegressivo = document.getElementById("regressivo");
let maximoCaracteres = 100;

// Evento "input": captura do que é digitado em tempo real
textearea.addEventListener("input", () => {
    // Captura a quantidade de caracteres digitados
    let tamanhoTextearea = textearea.value.length;
    //Exibir o total caracteres no span
    contador.textContent = tamanhoTextearea;
    //Exibir o restante de caracteres
    contadorRegressivo.textContent = maximoCaracteres - tamanhoTextearea;
    // Se o total de caracteres for maior ou igual a 100
    if(tamanhoTextearea >= maximoCaracteres) {
        // Então aplicamos a classe excesso (negrito/vermelho)
        contador.classList.add("excesso");
        textearea.style.background = 'pink';
    }
    else {
        // Senão, remove a classe
        contador.classList.remove("excesso");
        textearea.style.background = 'transparent';
    }
});

// Exemplo 04:
const kbd = document.querySelector('#tecla kbd');
const pagina = document.body;

document.addEventListener('keyup', (event) => {
    // Capturando a tecla usada a partir do event.key
    const teclaUsada = event.key;

    // Exibindo a tecla no HTML
    kbd.textContent = teclaUsada;
    if(teclaUsada === 'a'){
        kbd.style.background = "yellow";
        pagina.style.background = "green";
        pagina.style.transition = "3s ease";
    }
    if (teclaUsada === "r") {
        kbd.style.background = "transparent";
        pagina.style.background = "#f4f4f4";
    }
})

// Exemplo 05:
const tarefa = document.getElementById("tarefa");
const botaoAdicionar = document.getElementById("adicionar");
const botaoRemover = document.getElementById("remover");
const lista = document.getElementById("lista");

botaoAdicionar.addEventListener('click', () => {
    // Capturar a tarefa digitando no input
    let tarefaDigitada = tarefa.value;

    // Se não for digitada nenhuma tarefa, interrompa a função.
    if(tarefaDigitada == "") return

    // Criar o elemento <li>
    let elementoLinha = document.createElement('li');
    
    // Adicionando o conteúdo (tarefa digitada) ao novo item <li>
    elementoLinha.textContent = tarefaDigitada;
    // Adicinando o elemento na lista.
    lista.appendChild(elementoLinha);


    tarefa.value = ""; // reset
    tarefa.focus() // devolvendo o foco (cursor)

    // Quando ocorrer um clique no item/tarefa, adicionar a classe feito
    elementoLinha.addEventListener('click', ()=> {
        elementoLinha.classList.toggle('feito');
    });
});

/* Mapeamento de Evento
Detectar o ENTER durante o uso do input, e 
executar a função de clique do botão adicionar */
tarefa.addEventListener('keyup', (event) => {
    if(event.key === "Enter") botaoAdicionar.click();
})

// Exemplo 06:
const exemplo06 = document.getElementById('exemplo06');
const inputNome = document.getElementById('nome');
const inputIdade = document.getElementById('idade');
const saida = document.getElementById('saida');

// Capturando os dados digitados e tratando
exemplo06.addEventListener('submit', (event) => {
    event.preventDefault();
    let nomeValor = inputNome.value.trim(); // removendo espaços no início/fim
    let idadeValor = Number(inputIdade.value); // garantido que a idade seja número

    if (nomeValor === "") {
        saida.textContent = "Por favor, preencha o nome.";
        saida.style.color = "red";
        return; // pare tudo (enquanto essa validação não for atendida)
    }
    if (isNaN(idadeValor) || idadeValor < 0 || idadeValor > 120 || idadeValor == "") {
        saida.textContent = "Por favor, preencha idade entre 0 e 120.";
        saida.style.color = "red";
        return;
    }

    // Nenhuma das condições anteriores deu true? Então significa que tudo deu certo!
    // Portanto, avisamos o usuário.

    saida.textContent = `Meu nome é ${nomeValor} e tenho ${idadeValor} anos.`
    saida.style.color = "green";
    exemplo06.reset();
    exemplo06.focus();
});

// Exemplo 07:
const inputSenha = document.getElementById('senha');
const botaoMostrar = document.getElementById('mostrar');

botaoMostrar.addEventListener('pointerdown', () => {
    inputSenha.type = "text";
    console.log("botão pressionado");
})

botaoMostrar.addEventListener('pointerup', () => {
    inputSenha.type = "password";
    console.log("botão liberado");
})