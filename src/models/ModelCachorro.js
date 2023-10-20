// Importando o Objeot DataType do sequelize contém uma variedade de tipos de dados que você pode usar para definir os campos
const { DataTypes } = require('sequelize');

const conexao = require('../database.js')

const ModelPetShop = conexao.define('cachorros', {
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
    allowNull: false,
  },
  raca : {
    //tipo de dado que vai ser a raça
    type: DataTypes.STRING,
    //faz com que o campo não aceite valores nulos
    allowNull: false,
  },
  id_cliente : {
    //tipo de dado que vai ser o id do cliente
    type: DataTypes.INTEGER,
    //faz com que o campo não aceite valores nulos
    allowNull: false,
  }


},
  {
    //faz com que o sequelize não crie os campos createdAt e updatedAt
    createdAt: false,

    updatedAt: false,
  }


);

module.exports = ModelPetShop;
