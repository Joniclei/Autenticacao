const RepositoryUsuario = require('../repositories/RepositoryUsuario.js');

const repositoryUsuario = new RepositoryUsuario();


class ServiceUsuario {

  async PegarUmUsuario(id) {

      return repositoryUsuario.pegarUmUsuario(id);

    }

  async PegarTodosUsuarios() {

    return repositoryUsuario.pegarTodosUsuarios();

  }

  async AdicionarUsuario(Usuario) {

    return repositoryUsuario.adicionarUsuario(Usuario);

  }

  async AtualizarUsuario(Usuario, id) {

    return repositoryUsuario.atualizarUsuario(Usuario, id);

  }

  async DeletarUsuario(id) {

    return repositoryUsuario.deletarUsuario(id);

  }

}

module.exports = ServiceUsuario;
