const Boom = require('boom')
const {purchaseTicket} = require('./../services/transaction')

module.exports.purchaseTicket = async (request, h) => {
  const { ticketId } = request.params
  const { name, phoneNumber, amountTicket } = request.payload
  try {
    const res = await purchaseTicket(name, phoneNumber, ticketId, amountTicket)
    console.log(res)
    return res
  } catch (error) {
    console.error(error)
    return Boom.badData(error)
  }
}
