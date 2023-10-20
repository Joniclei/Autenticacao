
const express = require('express');

const  ControllerAtendimento = require('../controllers/ControllerAtendimento.js');

const controller = new ControllerAtendimento();
// Criando uma instância do express
const router = express.Router();

router.get('/api/atendimento/:id', controller.GetAtendimento);
router.get('/api/atendimento', controller.GelAllAtendimento);
router.post('/api/atendimento', controller.PostAtendimento);
router.put('/api/atendimento/:id', controller.  PutAtendimento);
router.delete('/api/atendimento/:id', controller.DeleteAtendimento);

router.get('/api/atendimentoporcachorro/:id', controller.GetAtendimentoForCachorro);


module.exports = router;
