'use strict';
const {createAuditTriggerQuery} = require('./../utils/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tableName = 'TransactionTickets'
    return queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transactionId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ticketId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amountPrize: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      amountTicket: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    }).then(() => queryInterface.sequelize.query(createAuditTriggerQuery(tableName)))
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TransactionTickets');
  }
};