const aluno = {
    nomeCompleto: "Fulano da Silva",
    dataNascimento: "30/02/2000",
    telefones: ["(19) 96427-8813", "(16) 4641-4879"],
    endereco: {
        rua: "Hipolito de Lima",
        numero: 21,
        bairro: "Praça da Sé"
    } 
}

console.log(aluno.nomeCompleto, aluno.telefones[0], aluno.endereco.bairro);