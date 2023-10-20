//const { Model } = require('sequelize');

const ServiceUsuario = require('../services/ServiceUsuario.js');

const serviceUsuario = new ServiceUsuario();

class ControllerUsuarios {


    async PegarUmUsuario(req, res) {

      try {

        const Usuario = await serviceUsuario.PegarUmUsuario(req.params.id);
        res.status(200).json({
          consulta : usuarios
        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }

    }

    async PegarTodosUsuarios(req, res) {
      try {

        const Usuario = await serviceUsuario.PegarTodosUsuarios();
        res.status(200).json({
          consulta : Usuario
        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async AdicionarUsuario(req, res) {
      try {

        const Usuario = req.body;
        await serviceUsuario.AdicionarUsuario(Usuario);
        res.status(200).json({
          message: 'Usuario Adicionado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async AtualizarUsuario(req, res) {
      try {

        const Usuario = req.body;
        const id = req.params.id;
        await serviceUsuario.AtualizarUsuario(Usuario, id);
        res.status(200).json({
          message: 'Usuario Atualizado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

    async DeletarUsuario(req, res) {
      try {

        const id = req.params.id;
        await serviceUsuario.DeletarUsuario(id);
        res.status(200).json({
          message: 'Usuario Deletado com sucesso!'

        });

      } catch (error) {
        console.log('Erro no controller', error);
       res.status(500).json({ message: error });

      }
    }

}

module.exports = ControllerUsuarios;
