const express = require('express');

const ControllerUsuarios = require('../controllers/ControllerUsuarios.js');

//const { route } = require('./routerusuario.js');
const authMiddleware = require('../mi/auth.js');

const controllerUsuarios = new ControllerUsuarios();

const routerusuario = express.Router();

routerusuario.post('/api/login', controllerUsuarios.Login)
routerusuario.get('/api/usuario/:id',authMiddleware,controllerUsuarios.PegarUmUsuario);
routerusuario.get('/api/usuario', authMiddleware,controllerUsuarios.PegarTodosUsuarios);
routerusuario.post('/api/addUsuario',authMiddleware,controllerUsuarios.AdicionarUsuario);
routerusuario.put('/api/atualizarUsuario/:id', authMiddleware,controllerUsuarios.AtualizarUsuario);
routerusuario.delete('/api/deletarUsuario/:id', authMiddleware,controllerUsuarios.DeletarUsuario);



module.exports = routerusuario;
