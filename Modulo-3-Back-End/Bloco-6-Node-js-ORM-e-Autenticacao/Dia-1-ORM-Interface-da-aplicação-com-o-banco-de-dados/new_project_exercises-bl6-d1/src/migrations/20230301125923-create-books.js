'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Books', {
       // id deve ser do tipo integer, não pode ser nula e ser a chave primária da tabela com auto incremento;
      id: {
        allowNull: false,
        autoIncrement: true,       
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      // title: deve ser do tipo string e não pode ser nulo;
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // author: deve ser do tipo string e não pode ser nulo;
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      // pageQuantity: deve ser do tipo integer e pode ser nulo;
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      // createdAt: deve ser do tipo date e não pode ser nulo;
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      // updatedAt: deve ser do tipo date e não pode ser nulo;
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Books');
  },
};
