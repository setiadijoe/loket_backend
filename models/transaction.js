'use strict';
module.exports = (sequelize, DataTypes) => {
  var Transaction = sequelize.define('Transaction', {
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {});
  Transaction.associate = function(models) {
    // associations can be defined here
    Transaction.hasMany(models.TransactionTicket, {foreignKey: 'transactionId'})
    Transaction.belongsToMany(models.Ticket, {through: 'TransactionTicket', foreignKey: 'transactionId'})
  };
  return Transaction;
};