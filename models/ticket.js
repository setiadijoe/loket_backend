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
    Ticket.belongsTo(models.Event)
    Ticket.hasMany(models.TransactionTicket)
    Ticket.belongsToMany(models.Transaction, {through: 'TransactionTicket'})
  };
  return Ticket;
};