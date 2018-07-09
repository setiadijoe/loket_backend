const Boom = require('boom')
const {createEvent} = require('./../services/event')

module.exports.createEvent = async (request, h) => {
  const {eventName, locationId} = request.payload
  try {
    const res = await createEvent(eventName, locationId)
    return res
  } catch (error) {
    return Boom.badData(error)
  }
}
