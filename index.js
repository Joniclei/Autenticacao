
// Importando o express
const express = require('express');

const router = require('./src/routes/petshop.js');

const routerCliente = require('./src/routes/routercliente.js');

const routerAtendimento = require('./src/routes/routeratendimento.js');

// Criando uma instância do express
const app = express();

// Definindo a porta que o servidor vai ouvir
app.use(express.json());

app.use(router);
app.use(routerCliente);
app.use(routerAtendimento);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})
