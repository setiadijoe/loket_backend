'use strict';
module.exports = (sequelize, DataTypes) => {
  var TransactionTicket = sequelize.define('TransactionTicket', {
    transactionId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    amountPrize: DataTypes.INTEGER,
    amountTicket: DataTypes.INTEGER
  }, {});
  TransactionTicket.associate = function(models) {
    // associations can be defined here
    TransactionTicket.belongsTo(models.Transaction)
    TransactionTicket.belongsTo(models.Ticket, {foreignKey: 'ticketId'})
  };
  return TransactionTicket;
};