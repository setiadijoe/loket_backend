const Boom = require('boom')
const {createEvent, getInfo} = require('./../services/event')

module.exports.createEvent = async (request, h) => {
  const {eventName, locationId} = request.payload
  try {
    const res = await createEvent(eventName, locationId)
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
    return Boom.badData(error)
  }
}

module.exports.getInfo = async (request, h) => {
  const {eventId} = request.params
  try {
    const res = await getInfo(eventId)
    console.log('controller ', res)
    return res
  } catch (error) {
    console.error(error)
    return Boom.badRequest(error)
  }
}
