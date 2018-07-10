const Boom = require('boom')
const {createTicket} = require('./../services/ticket')

module.exports.createTicket = async (request, h) => {
  const {price, quota, startDate, endDate, eventId, ticketType} = request.payload
  try {
    const res = await createTicket(price, quota, startDate, endDate, eventId, ticketType)
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
    Boom.badData(error)
  }
}
