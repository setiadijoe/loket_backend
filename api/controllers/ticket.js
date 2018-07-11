const Boom = require('boom')
const {createTicket} = require('./../services/ticket')

module.exports.createTicket = async (request, h) => {
  const {price, quota, startDate, endDate, eventId, ticketType} = request.payload
  try {
    const ticket = await createTicket(price, quota, startDate, endDate, eventId, ticketType)
    return ticket
  } catch (error) {
    Boom.badData(error)
  }
}
