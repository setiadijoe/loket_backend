'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    namePlace: DataTypes.STRING,
    address: DataTypes.TEXT
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    // Location hasMany Events
    Location.hasMany(models.Event, {foreignKey: 'locationId'})
  };
  return Location;
};