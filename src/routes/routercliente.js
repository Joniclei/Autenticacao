const express = require('express');

const ControllerCliente = require('../controllers/ControllerCliente.js');
const { route } = require('./routercliente.js');

const controllerCliente = new ControllerCliente();

const router = express.Router();

router.get('/api/cliente/:id', controllerCliente.PegarUmCliente);
router.get('/api/cliente', controllerCliente.PegarTodosClientes);
router.post('/api/addcliente', controllerCliente.AdicionarCliente);
router.put('/api/atualizarcliente/:id', controllerCliente.AtualizarCliente);
router.delete('/api/deletarcliente/:id', controllerCliente.DeletarCliente);



module.exports = router;
