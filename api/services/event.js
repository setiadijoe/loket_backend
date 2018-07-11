const Model = require('./../../models')

async function createEvent (eventName, locationId) {
  return Model.Event.create({eventName, locationId})
    .then(event => {
      return event
    })
    .catch(err => {
      return err
    })
}

async function getInfo (eventId) {
  return Model.Event.findById(eventId, {
    include: [
      {model: Model.Location},
      {model: Model.Ticket}
    ]
  })
    .then(event => {
      return event
    })
}

module.exports = {
  createEvent,
  getInfo
}
