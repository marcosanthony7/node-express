const fetch = require(node-fetch);

/* let cliente1 = {
    nome: "João",
    email: "joao123@gmail.com",
    telefone: "+55 82 99864-7482"
}

let cliente2 = {
    nome: "Maria",
    email: "maria123@gmail.com",
    telefone: "+55 82 99674-2642"
}
*/

fetch('http://localhost:3000/salvar', {
    method: "POST",
    body: JSON.stringify(cliente1, cliente2),
    headers: {"Content-type": "application/json; charset=UTF-8"}
})
// Tratamento do sucesso
.then(response => response.json())  // converter para json
.then(json => console.log(json))    //imprimir dados no console
.catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
