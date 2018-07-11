const Boom = require('boom')
const {createEvent, getInfo} = require('./../services/event')

module.exports.createEvent = async (request, h) => {
  const {eventName, locationId} = request.payload
  try {
    const event = await createEvent(eventName, locationId)
    return event
  } catch (error) {
    return Boom.badData(error)
  }
}

module.exports.getInfo = async (request, h) => {
  const {eventId} = request.params
  try {
    const event = await getInfo(eventId)
    return event
  } catch (error) {
    return Boom.badRequest(error)
  }
}
