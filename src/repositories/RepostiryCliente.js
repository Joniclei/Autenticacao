const ModelClientePetShop = require('../models/ModelCliente.js');

class RepositoryClientePetShop {


  async pegarUmCliente(id) {
    return ModelClientePetShop.findOne({
        where: { id },

    });
  }
  async pegarTodosClientes() {
    return await ModelClientePetShop.findAll();
  }
  async adicionarCliente(cliente) {
    await ModelClientePetShop.create(cliente);

  }
  async atualizarCliente(cliente, id) {
    await ModelClientePetShop.update(cliente, {
      where: { id },
    });
  }
  async deletarCliente(id) {
    await ModelClientePetShop.destroy({
      where: { id },
    });
  }


}

module.exports = RepositoryClientePetShop;
