'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('produto', {
       id_produto: {
         autoIncrement: true,
         primaryKey: true,
         allowNull: false,
         type: DataTypes.INTEGER
       },
       name: {
         allowNull: false,
         type: DataTypes.STRING(100)
       },
       id_marca: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "marca",
          key: "id_marca",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
       },
       cod_barras: {
        allowNull: false,
        type: DataTypes.STRING(128)
       },
       id_fornecedor: {
        allowNull: false,
        type: DataTypes.INTEGER
       },
       id_estoque: {
        allowNull: false,
        type: DataTypes.INTEGER
       },
       preco: {
        allowNull: false,
        type: DataTypes.FLOAT(14, 2)
       },
       peso: {
        allowNull: false,
        type: DataTypes.FLOAT(14, 2)
       },
       unidade_medida: {
        allowNull: false,
        type: DataTypes.STRING(10)
       },      
      
    });


    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
