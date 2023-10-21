const express = require('express');

const ControllerCliente = require('../controllers/ControllerCliente.js');
const { route } = require('./routercliente.js');
//const autoMiddleware = require('../middlewares/autenticacao.js');
const authMiddleware = require('../mi/auth.js');

const controllerCliente = new ControllerCliente();

const router = express.Router();

router.get('/api/cliente/:id',authMiddleware,controllerCliente.PegarUmCliente);
router.get('/api/cliente', authMiddleware,controllerCliente.PegarTodosClientes);
router.post('/api/addcliente',authMiddleware, controllerCliente.AdicionarCliente);
router.put('/api/atualizarcliente/:id', authMiddleware,controllerCliente.AtualizarCliente);
router.delete('/api/deletarcliente/:id',authMiddleware, controllerCliente.DeletarCliente);




module.exports = router;


/**
 * autoMiddleware,
autoMiddleware,
autoMiddleware,
autoMiddleware,
autoMiddleware,
 */
