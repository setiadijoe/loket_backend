'use strict'
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    eventName: DataTypes.STRING,
    locationId: DataTypes.INTEGER
  }, {})
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Location, {foreignKey: 'locationId'})
    Event.hasMany(models.Ticket, {foreignKey: 'eventId'})
  }
  return Event
}
