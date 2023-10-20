const express = require('express');

const ControllerCliente = require('../controllers/ControllerCliente.js');
const { route } = require('./routercliente.js');
const autoMiddleware = require('../middlewares/autenticacao.js');

const controllerCliente = new ControllerCliente();

const router = express.Router();

router.get('/api/cliente/:id',autoMiddleware ,controllerCliente.PegarUmCliente);
router.get('/api/cliente', autoMiddleware,controllerCliente.PegarTodosClientes);
router.post('/api/addcliente', autoMiddleware,controllerCliente.AdicionarCliente);
router.put('/api/atualizarcliente/:id', autoMiddleware,controllerCliente.AtualizarCliente);
router.delete('/api/deletarcliente/:id', autoMiddleware,controllerCliente.DeletarCliente);



module.exports = router;
