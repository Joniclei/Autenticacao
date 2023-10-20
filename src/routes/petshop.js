// Objetivo: Criar as rotas para o petshop
const express = require('express');
// Importando o controller
const  ControllerPetShop = require('../controllers/ControllerPetShop.js');

const controller = new ControllerPetShop();
// Criando uma instância do express
const router = express.Router();

router.get('/api/cachorros/:id', controller.PegarUmCachorro);
router.get('/api/cachorros', controller.PegarTodosOsCachorros);
router.post('/api/cachorros', controller.AdicionarCachorro);
router.put('/api/cachorros/:id', controller.AtualizarCachorro);
router.delete('/api/cachorros/:id', controller.DeleteCachorro);



router.get('/api/cachorrosporcliente/:id', controller.PegarOscachorrosCliente);

module.exports = router;
