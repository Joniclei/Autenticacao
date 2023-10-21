const ModelUsuario = require('../models/ModelUsuario.js');

class RepositoryUsuario {


  async PegarUmPorEmail(email){
    return ModelUsuario.findOne({
        where: {
            email
        }
    })
  }


  async pegarUmUsuario(id) {
    return ModelUsuario.findOne({
        where: { id },

    });
  }
  async pegarTodosUsuarios() {
    return await ModelUsuario.findAll();
  }
  async adicionarUsuarios(usuario) {
    await ModelUsuario.create(usuario);

  }
  async atualizarUsuarios(usuarios, id) {
    await ModelUsuario.update(usuarios, {
      where: { id },
    });
  }
  async deletarUsuario(id) {
    await ModelUsuario.destroy({
      where: { id },
    });
  }


}

module.exports = RepositoryUsuario;
