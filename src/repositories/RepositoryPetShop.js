const ModelPetShop = require('../models/ModelCachorro');

class RepositoryPetShop {

  async PegarUmCachorro( id ) {
    return ModelPetShop.findOne({
      where: {id }
    })
  }

  async PegarTodosCachorros() {
    return ModelPetShop.findAll();
  }

  async PegarOscachorrosCliente(id) {
    return ModelPetShop.findAll({
      where: { id_cliente : id }
    })
  }

  async CriarCachorro(cachorro) {
    await ModelPetShop.create(cachorro);
  }

  async AtualizarCachorro(cachorro, id) {
    await ModelPetShop.update(cachorro, {
      where: { id },
    });
  }

  async DeletarCachorro(id) {
    await ModelPetShop.destroy({
      where: { id },
    });
  }



}

module.exports = RepositoryPetShop;
