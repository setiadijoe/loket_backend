const Model = require('./../../models')

async function createEvent (eventName, locationId) {
  return Model.Event.create({eventName, locationId})
}

module.exports = {
  createEvent
}
