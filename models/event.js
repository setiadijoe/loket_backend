'use strict'
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    eventName: DataTypes.STRING,
    locationId: DataTypes.INTEGER
  }, {})
  Event.associate = function (models) {
    // associations can be defined here
    Event.belongsTo(models.Location)
    Event.hasMany(models.Ticket)
  }
  return Event
}
