const Model = require('./../../models')

async function createEvent (eventName, locationId) {
  return Model.Event.create({eventName, locationId}, {
    include: [{model: Model.Location}]
  })
    .then(event => {
      console.log(event)
      return event
    })
    .catch(err => {
      console.error(err)
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
      console.log(event)
      return event
    })
}

module.exports = {
  createEvent,
  getInfo
}
