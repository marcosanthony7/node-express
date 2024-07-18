const fetch = require('node-fetch');

const clientes = {
    cliente1: { nome: "José" },
    cliente2: { nome: "Maria" }
};

fetch('http://localhost:3000/salvar', {
    method: 'POST',
    body: JSON.stringify(clientes),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
// Tratamento do sucesso
.then(response => response.text())  // converter para texto
.then(text => console.log(text))    // imprimir dados no console
.catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
