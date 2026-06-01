"use strict";

const clientes = [
    {id: 1, nome: "Dio"},
    {id: 2, nome: "Ozzy"},
    {id: 3, nome: "Ian"}
]

for (const cliente of clientes) {
    console.log(`Cliente ${cliente.nome}, id: ${cliente.id}`);
}