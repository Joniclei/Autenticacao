//const { Model } = require('sequelize');


const ServiceUsuario = require('../services/ServiceUsuarios.js');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const config = require('../config.js');

const autoMiddleware = require('../mi/auth.js');


const serviceUsuario = new ServiceUsuario();




class ControllerUsuarios {




  async Login(req, res) {
    // const email = req.body.email;
    // const senha = req.body.senha;
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(401).json({ message: "E-mail aou senha inválido" });
    }

    const { dataValues: usuario } = await serviceUsuario.PegarUmPorEmail(email)

    if (!usuario) {
      console.log('erro1')
      return res.status(401).json({ message: "E-mail bou senha inválido" });
    }

    if (!(await bcrypt.compare(senha, usuario.senha))) {
      console.log(bcrypt.compare(senha, usuario.senha))
      return res.status(401).json({ message: "E-mail cou senha inválido", senha: senha, usuario: usuario.senha });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, permissao: usuario.permissao },
      config.secrect
    )

    res.json({ token })
  }

  async PegarUmUsuario(req, res) {

    try {

      const usuario = await serviceUsuario.PegarUmUsuario(req.params.id);
      res.status(200).json({
        consulta: usuario
      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }

  }

  async PegarTodosUsuarios(req, res) {
    try {

      const usuario = await serviceUsuario.PegarTodosUsuarios();
      res.status(200).json({
        consulta: usuario
      });

    } catch (error) {
      console.log('Erro no controller', error);
      res.status(500).json({ message: error });

    }
  }



  async AdicionarUsuario(req, res) {
    let permissao = req.session.permissao

    console.log("permissao", permissao)

    if (permissao == 0) {

      try {
        const usuario = req.body;
        await serviceUsuario.AdicionarUsuario(usuario);
        res.status(200).json({
          message: 'Usuario Adicionado com sucesso!'
        })
      }

      catch (error) {
        console.log('Erro no controller', error);
        res.status(500).json({ message: "aqui" });
      }
    } else {
      res.status(500).json({ message: "Você não tem permissão para adicionar um usuario" });
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




/*

//const { Model } = require('sequelize');


const ServiceUsuario = require('../services/ServiceUsuarios.js');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const config = require('../config.js');


const serviceUsuario = new ServiceUsuario();

class ControllerUsuarios {


  async Login(req, res) {
    // const email = req.body.email;
    // const senha = req.body.senha;
    const { email, senha } = req.body;

    if(!email || !senha){
        return res.status(401).json({ message: "E-mail aou senha inválido" });
    }

    const { dataValues: usuario } = await serviceUsuario.PegarUmPorEmail(email)

    if(!usuario) {
        console.log('erro1')
        return res.status(401).json({ message: "E-mail bou senha inválido" });
    }

    if(!(await bcrypt.compare(senha, usuario.senha))){
        console.log(bcrypt.compare(senha, usuario.senha))
        return res.status(401).json({ message: "E-mail cou senha inválido",senha:senha,usuario:usuario.senha });
    }

    const token = jwt.sign(
        { id: usuario.id, email: usuario.email },
        config.secrect
    )

    res.json({ token })
}

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



*/
