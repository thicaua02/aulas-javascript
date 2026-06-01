const formEndereco = document.querySelector('#formulario-endereco');
const inputCep = formEndereco.querySelector('#cep');
const inputEndereco = formEndereco.querySelector('#endereco');
const inputBairro = formEndereco.querySelector('#bairro');
const inputCidade = formEndereco.querySelector('#cidade');
const inputEstado = formEndereco.querySelector('#estado');
const pMensagem = formEndereco.querySelector('#mensagem');


// Aplicando a máscara do CEP
VMasker(inputCep).maskPattern('99999-999');

inputCep.addEventListener('input', ()=> {
    const cepDigitado = inputCep.value;
    console.log(cepDigitado);

    if(cepDigitado.length === 9) {
        buscarCep(cepDigitado);
    }
})

// Quando esta função for chamada, ela receberá o número do cep digitado
async function buscarCep(numeroCep) {
    // Montar a consulta para a API conteudo o cep que foi informado
    const urlConsulta = `https://viacep.com.br/ws/${numeroCep}/json/`;
    
    // Procesando de comunicação com a API, busca, recebimento e tratamento de erro.
    try {
        // Iniciar a comunicação com a API usando a função fetch
        // Obs1: usamos await para "aguardar" a resposata da API
        // Obs2: SEMPRE que usar await, coloque na declaração da função
        const resposta = await fetch(urlConsulta);
        const dados = await resposta.json();
        console.log(dados);

        if (dados.erro) {
            pMensagem.textContent = 'CEP não encontrado';
            return;
        }
        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;
        inputEstado.value = dados.estado;
        pMensagem.textContent = 'CEP encontrado';
    }
    catch (error) {
        console.error(error);
        pMensagem.textContent = "Erro na busca do CEP.";
    }
}