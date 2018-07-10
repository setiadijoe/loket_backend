const Boom = require('boom')
const {createEvent, getInfo} = require('./../services/event')

module.exports.createEvent = async (request, h) => {
  const {eventName, locationId} = request.payload
  try {
    const event = await createEvent(eventName, locationId)
    console.log(event)
    return event
  } catch (error) {
    console.error(error)
    return Boom.badData(error)
  }
}

module.exports.getInfo = async (request, h) => {
  const {eventId} = request.params
  try {
    const event = await getInfo(eventId)
    console.log('controller ', event)
    return event
  } catch (error) {
    console.error(error)
    return Boom.badRequest(error)
  }
}
