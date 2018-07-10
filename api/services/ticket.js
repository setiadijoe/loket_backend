const Model = require('./../../models')

async function createTicket (price, quota, startDate, endDate, eventId, ticketType) {
  return Model.Ticket.create({price, quota, startDate, endDate, eventId, ticketType})
}

module.exports = {
  createTicket
}
