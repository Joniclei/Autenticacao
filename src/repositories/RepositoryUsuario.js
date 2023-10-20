const ModelUsuario = require('../models/ModelUsuario.js');

class RepositoryUsuario {

  async pegarUmUsuario(id) {
    return ModelUsuario.findOne({
        where: { id },

    });
  }
  async pegarTodosUsuarios() {
    return await ModelUsuario.findAll();
  }
  async adicionarUsuarios(usuarios) {
    await ModelUsuario.create(cliente);

  }
  async atualizarUsuarios(usuarios, id) {
    await ModelUsuario.update(cliente, {
      where: { id },
    });
  }
  async deletarUsuarios(id) {
    await ModelUsuario.destroy({
      where: { id },
    });
  }


}

module.exports = RepositoryUsuario;
