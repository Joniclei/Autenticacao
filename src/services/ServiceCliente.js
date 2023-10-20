const RepositoryClientePetShop = require('../repositories/RepostiryCliente.js');

const repositoryCliente = new RepositoryClientePetShop();


class ServiceClientePetShop {

  async PegarUmCliente(id) {

      return repositoryCliente.pegarUmCliente(id);

    }

  async PegarTodosClientes() {

    return repositoryCliente.pegarTodosClientes();

  }

  async AdicionarCliente(cliente) {

    return repositoryCliente.adicionarCliente(cliente);

  }

  async AtualizarCliente(cliente, id) {

    return repositoryCliente.atualizarCliente(cliente, id);

  }

  async DeletarCliente(id) {

    return repositoryCliente.deletarCliente(id);

  }

}

module.exports = ServiceClientePetShop;
