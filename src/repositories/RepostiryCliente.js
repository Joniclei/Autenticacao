const ModelClientePetShop = require('../models/ModelCliente.js');
const ModelUsuario = require('../models/ModelUsuario.js');

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
    await ModelUsuario.create({
      email: usuarios.email,
      senha: usuarios.senha,
      permissao: usuarios.permissao
    })

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
