'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
    price: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    eventId: DataTypes.INTEGER,
    ticketType: DataTypes.STRING
  }, {});
  Ticket.associate = function(models) {
    // associations can be defined here
    Ticket.belongsTo(models.Event, {foreignKey: 'eventId'})
    Ticket.hasMany(models.TransactionTicket, {foreignKey: 'ticketId'})
    Ticket.belongsToMany(models.Transaction, {through: 'TransactionTicket', foreignKey: 'ticketId'})
  };
  return Ticket;
};