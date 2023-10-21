const RepositoryUsuario = require('../repositories/RepositoryUsuario.js');
const repositoryUsuario = new RepositoryUsuario();


class ServiceUsuario {

  async PegarUmPorEmail(email){
    if(!email.trim()) {
      throw new Error("Preencha o email")
    }
    return repositoryUsuario.PegarUmPorEmail(email)
  }


  async PegarUmUsuario(id) {

      return repositoryUsuario.pegarUmUsuario(id);

    }

  async PegarTodosUsuarios() {

    return repositoryUsuario.pegarTodosUsuarios();

  }

  async AdicionarUsuario(Usuario) {

    return repositoryUsuario.adicionarUsuarios(Usuario);

  }

  async AtualizarUsuarios(Usuario, id) {

    return repositoryUsuario.atualizarUsuario(Usuario, id);

  }

  async DeletarUsuario(id) {

    return repositoryUsuario.deletarUsuario(id);

  }

}

module.exports = ServiceUsuario;
