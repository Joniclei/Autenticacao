const { DataTypes } = require('sequelize');

const conexao = require('../database.js');

const ModelClientePetShop = conexao.define('clientes', {

  id : {
    //faz com que o sequelize entenda que esse campo é uma chave primária
    primaryKey: true,
    //Faz com que o sequelize gere o id automaticamente,especifiamente ele manda para o banco de dados
    autoIncrement: true,
    //tipo de dado que vai ser o id
    type: DataTypes.INTEGER,
  },


  nome : {
    //tipo de dado que vai ser o nome
    type: DataTypes.STRING,
    //faz com que o campo não aceite valores nulos
    allowNull: true,
  }
},

  {
    //faz com que o sequelize não crie os campos createdAt e updatedAt
    createdAt: false,

    updatedAt: false,
  }



);

module.exports = ModelClientePetShop;
