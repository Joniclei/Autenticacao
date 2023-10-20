const { Model } = require('sequelize');
const ServiceClientePetShop = require('../services/ServiceCliente.js');

const serviceCliente = new ServiceClientePetShop();

class ControllerClientePetShop {

    async PegarUmCliente(req, res) {

      try {

        const cliente = await serviceCliente.PegarUmCliente(req.params.id);
        res.status(200).json({
          consulta : cliente
        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }

    }

    async PegarTodosClientes(req, res) {
      try {

        const cliente = await serviceCliente.PegarTodosClientes();
        res.status(200).json({
          consulta : cliente
        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async AdicionarCliente(req, res) {
      try {

        const cliente = req.body;
        await serviceCliente.AdicionarCliente(cliente);
        res.status(200).json({
          message: 'Cliente Adicionado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async AtualizarCliente(req, res) {
      try {

        const cliente = req.body;
        const id = req.params.id;
        await serviceCliente.AtualizarCliente(cliente, id);
        res.status(200).json({
          message: 'Cliente Atualizado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async DeletarCliente(req, res) {
      try {

        const id = req.params.id;
        await serviceCliente.DeletarCliente(id);
        res.status(200).json({
          message: 'Cliente Deletado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

}

module.exports = ControllerClientePetShop;
