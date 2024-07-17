const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());
// app.use(express.urlencoded()); // via form

app.get('/', (req, res) => {
  res.send('Bem-vindo!');
});

app.post('/salvar', (req, res) => {
  let cliente1 = req.body.cliente1;
  let cliente2 = req.body.cliente2;
  res.send(`Bem-vindo: ${cliente1.nome} e ${cliente2.nome}`);
});

app.listen(port, () => {
  console.log(`App escutando na porta ${port}`);
});
