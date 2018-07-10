const Model = require('./../../models')

async function purchaseTicket (name, phoneNumber, ticketId, amountTicket) {
  var context = {}
  return Model.Transaction.create({name, phoneNumber})
    .then(transaction => {
      context['trans'] = transaction
      return takeTicket(ticketId, amountTicket)
    })
    .then(res => {
      context['result'] = res
      return insertTransactionTicket(context.trans.id, ticketId, res.price, amountTicket)
    })
    .then(payment => {
      context['payment'] = payment
      return context
    })
    .catch(err => err)
}

async function takeTicket (ticketId, amountTicket) {
  return Model.Ticket.findById(ticketId)
    .then(ticket => {
      if (ticket.quota < 1) {
        return {message: 'Ticket has been sold out!'}
      } else {
        return ticket.updateAttributes({
          quota: ticket.quota - amountTicket
        })
      }
    })
    .then(res => {
      return res
    })
}

async function insertTransactionTicket (transactionId, ticketId, price, amountTicket) {
  const amountPrize = price * amountTicket
  console.log(amountPrize)
  return Model.TransactionTicket.create({
    transactionId,
    ticketId,
    amountPrize,
    amountTicket
  })
}

module.exports = {
  purchaseTicket,
  insertTransactionTicket
}
