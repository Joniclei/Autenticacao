const { DataTypes } = require('sequelize');

const conexao = require('../database.js');

const ModelUsuario = conexao.define('usuarios', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    notNull: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    notNull: true,
    allowNull: true,
  },
  senha: {
    type: DataTypes.STRING,
    notNull: true,
    allowNull: false,
  },
  permissao: {
    type: DataTypes.INTEGER,
    notNull: true,
    allowNull: false,
  }
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = ModelUsuario;
