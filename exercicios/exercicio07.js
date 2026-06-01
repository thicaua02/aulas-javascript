'use strict';

const formulario = document.getElementById('formulario');
const [inputNota1, inputNota2] = formulario.getElementsByTagName('input');
const botao = formulario.querySelector('button');
const pMedia = document.getElementById('media');
const pStatus = document.getElementById('status');

function preecherCampos(media, status, corP, corN) {
    let cor = status.toLowerCase() == 'aprovado' ? corP : corN;
    pMedia.style.color = cor;
    pStatus.style.color = cor;
    
    pMedia.textContent = 'Media: ' + media;
    pStatus.textContent = status
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let valorNota1 = Number(inputNota1.value);
    let valorNota2 = Number(inputNota2.value);
    let media = (valorNota1 + valorNota2) / 2;
    let status = media >= 7 ? 'Aprovado' : 'Reprovado';
    preecherCampos(media, status, 'blue', 'red');
});