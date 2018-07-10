const Boom = require('boom')
const {purchaseTicket, getInfo} = require('./../services/transaction')

module.exports.purchaseTicket = async (request, h) => {
  const { ticketId } = request.params
  const { name, phoneNumber, amountTicket } = request.payload
  try {
    const purchase = await purchaseTicket(name, phoneNumber, ticketId, amountTicket)
    console.log(purchase)
    return purchase
  } catch (error) {
    console.error(error)
    return Boom.badData(error)
  }
}

module.exports.getInfo = async (request, h) => {
  const { transactionId } = request.params
  try {
    const infoTransaction = await getInfo(transactionId)
    console.log(infoTransaction)
    return infoTransaction
  } catch (error) {
    return Boom.badData(error)
  }
}
