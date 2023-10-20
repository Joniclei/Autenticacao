const express = require('express');

const ControllerUsuarios = require('../controllers/ControllerUsuarios.js');

const { route } = require('./routerusuario.js');
const autoMiddleware = require('../middlewares/autenticacao.js');

const ControllerUsuarios = new ControllerUsuarios();

const routerUser = express.Router();

router.get('/api/Usuario/:id',autoMiddleware ,controllerUsuario.PegarUmUsuario);
router.get('/api/Usuario', autoMiddleware,controllerUsuario.PegarTodosUsuarios);
router.post('/api/addUsuario', autoMiddleware,controllerUsuario.AdicionarUsuario);
router.put('/api/atualizarUsuario/:id', autoMiddleware,controllerUsuario.AtualizarUsuario);
router.delete('/api/deletarUsuario/:id', autoMiddleware,controllerUsuario.DeletarUsuario);



module.exports = routerUser;
