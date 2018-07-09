'use strict';
const { createAuditTriggerQuery } = require('./../utils/migration')

module.exports = {
  up: (queryInterface, Sequelize) => {
    const tableName = 'Events'
    return queryInterface.createTable(tableName, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      locationId: {
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
    return queryInterface.dropTable('Events');
  }
};