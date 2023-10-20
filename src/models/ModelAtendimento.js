
const { DataTypes } = require('sequelize');

const conexao = require('../database.js');

const ModelAtendimento = conexao.define('atendimentos', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  id_cachorro: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data_hora_atendimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  concluido: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = ModelAtendimento;
